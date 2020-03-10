import { SourceComponent, sourceComponentConfig } from './source.component';
import { OSM } from 'ol/source';
import { LoadFunction } from 'ol/Tile';
import { LayerTileComponent, aolLayerTile } from '../layers';

export class SourceOSMComponent extends SourceComponent
  implements ng.IController {
  public instance: OSM;
  public componentType: string = 'SourceOSMComponent';
  public host: LayerTileComponent;

  cacheSize?: number;
  crossOrigin?: string;
  maxZoom?: number;
  opaque?: boolean;
  reprojectionErrorThreshold?: number;
  tileLoadFunction?: LoadFunction;
  url?: string;
  wrapX?: boolean;

  $onInit() {
    this.instance = new OSM(this);
    this._register(this.instance);
  }

  ngOnChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('url')) {
      this.instance = new OSM(this);
      this._register(this.instance);
    }
  }
}

var component: angular.IComponentOptions = {
  // template: `
  //           <div ng-include></div>
  //       `,
  bindings: {
    ...sourceComponentConfig.bindings,
    cacheSize: '<?',
    crossOrigin: '<?',
    opaque: '<?',
    reprojectionErrorThreshold: '<?',
    maxZoom: '<?',
    tileLoadFunction: '<?',
    url: '<?',
    wrapX: '<?',
  },
  require: {
    host: `^${aolLayerTile.name}`,
  },
  controller: [SourceOSMComponent],
};

export const aolSourceOsm = {
  name: 'aolSourceOsm',
  ...component,
};
