import * as angular from 'angular';
import { View } from 'ol';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import mapComponent, { MapComponent } from './map.component';

export class ViewComponent implements angular.IController {
  public instance: View;
  public componentType: string = 'view';
  public host: MapComponent;

  constrainRotation: boolean | number;
  enableRotation: boolean;
  extent: Extent;
  maxResolution: number;
  minResolution: number;
  maxZoom: number;
  minZoom: number;
  resolution: number;
  resolutions: number[];
  rotation: number;
  zoom: number = 11;
  zoomFactor: number;
  center: Coordinate = [104.06, 30.67];
  projection: string;

  zoomAnimation: Boolean = false;

  // defaultGive() {
  //   if (this.zoom === undefined) this.zoom = 1;
  //   if (this.center === undefined) this.center = [104.06, 30.67];
  //   if (this.projection === undefined) this.projection = 'EPSG:4326';
  //   if (this.zoomAnimation === undefined) this.zoomAnimation = false;
  // }

  //   constructor(host: angular.IRootElementService) {}

  $onInit() {
    // this.defaultGive();
    this.instance = new View(this);
    this.host.instance.setView(this.instance);
  }

  $onChanges(changes: angular.IOnChangesObject) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'zoom':
            /** Work-around: setting the zoom via setProperties does not work. */
            if (this.zoomAnimation) {
              this.instance.animate({ zoom: changes[key].currentValue });
            } else {
              this.instance.setZoom(changes[key].currentValue);
            }
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    constrainRotation: '<?',
    enableRotation: '<?',
    extent: '<?',
    maxResolution: '<?',
    minResolution: '<?',
    maxZoom: '<?',
    minZoom: '<?',
    resolution: '<?',
    resolutions: '<?',
    rotation: '<?',
    zoom: '<',
    zoomFactor: '<?',
    center: '<?',
    projection: '<?',
    zoomAnimation: '<?',
  },
  require: {
    host: `^${mapComponent.name}`,
  },
  controller: ['$element', ViewComponent],
};

export default {
  name: 'aolView',
  ...component,
};
