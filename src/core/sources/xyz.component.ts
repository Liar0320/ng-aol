import { SourceComponent, sourceComponentConfig } from './source.component';
import { XYZ } from 'ol/source';
import { LayerTileComponent, aolLayerTile } from '../layers';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import { Size } from 'ol/size';

export class SourceXYZComponent extends SourceComponent
  implements angular.IController {
  public instance: XYZ;
  public componentType: string = 'sourceXYZComponent';
  public host: LayerTileComponent;

  cacheSize: number;
  crossOrigin: string;
  opaque: boolean;
  projection: string;
  reprojectionErrorThreshold: number;
  minZoom: number;
  maxZoom: number;
  tileGrid: TileGrid;
  tileLoadFunction?: LoadFunction;
  tilePixelRatio: number;
  tileSize: number | Size;
  tileUrlFunction: UrlFunction;
  url: string;
  urls: string[];
  wrapX: boolean;
  transition: number;
  zDirection: number;

  //   constructor(host: angular.IRootElementService) {

  //   }

  $onInit() {
    this.instance = new XYZ(this);
    this._register(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
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
      this.instance = new XYZ(this);
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
    projection: '<?',
    reprojectionErrorThreshold: '<?',
    minZoom: '<?',
    maxZoom: '<?',
    tileGrid: '<?',
    tileLoadFunction: '<?',
    tilePixelRatio: '<?',
    tileSize: '<?',
    tileUrlFunction: '<?',
    url: '<?',
    urls: '<?',
    wrapX: '<?',
    transition: '<?',
    zDirection: '<?',
  },
  require: {
    host: `^${aolLayerTile.name}`,
  },
  controller: ['$element', SourceXYZComponent],
};

export const aolSourceXyz = {
  name: 'aolSourceXyz',
  ...component,
};
