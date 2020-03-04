import { LayerComponent, layerComponentConfig } from './layer.component';
import TileLayer from 'ol/layer/Tile';

export class LayerTileComponent extends LayerComponent
  implements angular.IController {
  public instance: TileLayer;

  preload: number;
  useInterimTilesOnError: boolean;

  //   constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
  //     super(group || map);
  //   }

  $onInit() {
    this.instance = new TileLayer(this);
    super.$onInit();
  }

  $onChanges(changes: angular.IOnChangesObject) {
    super.$onChanges(changes);
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    ...layerComponentConfig.bindings,
    preload: '<?',
    useInterimTilesOnError: '<?',
  },
  require: layerComponentConfig.require,
  controller: [ LayerTileComponent],
};

export const aolLayerTile = {
  name: 'aolLayerTile',
  ...component,
};
