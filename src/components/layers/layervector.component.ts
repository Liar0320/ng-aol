import { LayerComponent, layerComponentConfig } from './layer.component';
import TileSource from 'ol/source/Tile';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export class LayerVectorComponent extends LayerComponent
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
    this.instance.setSource(new OSM());
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
    preload: '=?',
    useInterimTilesOnError: '=?',
  },
  require: layerComponentConfig.require,
  controller: ['$element', LayerVectorComponent],
};

export const aolLayerVector = {
  name: 'aolLayerVector',
  ...component,
};
