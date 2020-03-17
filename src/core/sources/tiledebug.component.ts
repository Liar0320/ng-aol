import { SourceComponent, sourceComponentConfig } from './source.component';
import { TileDebug } from 'ol/source';
import { Options } from 'ol/source/TileDebug';
import { LayerTileComponent, aolLayerTile } from '../layers';
import { ProjectionLike } from 'ol/proj';
import TileGrid from 'ol/tilegrid/TileGrid';

export class SourceTiledebugComponent extends SourceComponent
  implements ng.IController, Options {
  public instance: TileDebug;
  public componentType: string = 'SourceTiledebugComponent';
  public host: LayerTileComponent;

  projection?: ProjectionLike;
  tileGrid?: TileGrid;
  wrapX?: boolean;
  zDirection?: number;

  $onInit() {
    this.instance = new TileDebug(this);
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
  }
}

var component: angular.IComponentOptions = {
  // template: `
  //           <div ng-include></div>
  //       `,
  bindings: {
    ...sourceComponentConfig.bindings,
    projection: '<?',
    tileGrid: '<?',
    wrapX: '<?',
    zDirection: '<?',
  },
  require: {
    host: `^${aolLayerTile.name}`,
  },
  controller: [SourceTiledebugComponent],
};

export const aolSourceTiledebug = {
  name: 'aolSourceTiledebug',
  ...component,
};
