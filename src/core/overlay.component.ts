import { Overlay } from 'ol';
import { Options, PanOptions } from 'ol/Overlay';
import OverlayPositioning from 'ol/OverlayPositioning';
import { Coordinate } from 'ol/coordinate';
import aolMap, { MapComponent } from './map.component';
import { fromLonLat } from 'ol/proj';

export class OverlayComponent implements ng.IController, Options {
  componentType = 'overlay';
  private instance: Overlay;
  protected host: MapComponent;

  $element: ng.IRootElementService;

  // element: Element;

  id: number | string;
  element: HTMLElement;
  offset?: number[];
  position?: Coordinate;
  positioning?: OverlayPositioning;
  projection?: string;
  stopEvent?: boolean;
  insertFirst?: boolean;
  autoPan?: boolean;
  autoPanAnimation?: PanOptions;
  autoPanMargin?: number;
  className?: string;

  constructor($element: ng.IRootElementService) {
    this.$element = $element;
  }

  $onInit() {
    /**@TODO: this.element , $element */
    if (this.$element[0]) {
      this.element = this.$element[0];
      this.position =
        this.projection == 'EPSG:4326'
          ? this.position
          : fromLonLat(this.position);
      this.instance = new Overlay(this);
      this.host.instance.addOverlay(this.instance);
    }
  }

  $onChanges(changes: angular.IOnChangesObject) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'position':
            this.position =
              this.projection == 'EPSG:4326'
                ? this.position
                : fromLonLat(this.position);
            this.instance.setPosition(this.position);
            return;
          default:
            properties[key] = changes[key].currentValue;
            break;
        }
      }
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  $onDestroy() {
    if (this.instance) {
      this.host.instance.removeOverlay(this.instance);
    }
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    id: '<?',
    element: '<?',
    offset: '<?',
    position: '<?',
    positioning: '<?',
    stopEvent: '<?',
    insertFirst: '<?',
    autoPan: '<?',
    autoPanAnimation: '<?',
    autoPanMargin: '<?',
    className: '<',
    projection: '<?',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: ['$element', OverlayComponent],
};

export const aolOverlay = {
  name: 'aolOverlay',
  ...component,
};
