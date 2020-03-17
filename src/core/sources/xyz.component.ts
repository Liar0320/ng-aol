import { sourceComponentConfig } from './source.component';
import { XYZ } from 'ol/source';
import { Options } from 'ol/source/XYZ';
import { LayerTileComponent, aolLayerTile } from '../layers';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import { Size } from 'ol/size';
import { ProjectionLike } from 'ol/proj';
import { SourceXYZExtend } from './xyz.component.extend';

export class SourceXYZComponent extends SourceXYZExtend
  implements angular.IController, Options {
  public instance: XYZ;
  public componentType: string = 'sourceXYZComponent';
  public host: LayerTileComponent;

  cacheSize?: number;
  crossOrigin?: string;
  opaque?: boolean;
  projection?: ProjectionLike;
  reprojectionErrorThreshold?: number;
  maxZoom?: number;
  minZoom?: number;
  tileGrid?: TileGrid;
  tileLoadFunction?: LoadFunction;
  tilePixelRatio?: number;
  tileSize?: number | Size;
  tileUrlFunction?: UrlFunction;
  url?: string;
  urls?: string[];
  wrapX?: boolean;
  transition?: number;
  zDirection?: number;

  //   constructor(host: angular.IRootElementService) {

  //   }

  $onInit() {
    super.decorate();

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
    if (changes.hasOwnProperty('url') || changes.hasOwnProperty('tileGrid')) {
      // this.instance = new XYZ(this);
      // this._register(this.instance);
      this.$onInit();
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
