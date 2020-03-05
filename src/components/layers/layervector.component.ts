import { LayerComponent, layerComponentConfig } from './layer.component';
import VectorLayer from 'ol/layer/Vector';
import { OrderFunction } from 'ol/render';
import VectorSource from 'ol/source/Vector';
import Geometry from 'ol/geom/Geometry';
import { StyleLike } from 'ol/style/Style';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';

export class LayerVectorComponent extends LayerComponent
  implements angular.IController {
  public instance: VectorLayer;
  public componentType: string = 'LayerVectorComponent';

  renderOrder?: OrderFunction;
  renderBuffer?: number;
  source?: VectorSource<Geometry>;
  declutter?: boolean;
  style?: StyleLike;
  updateWhileAnimating?: boolean;
  updateWhileInteracting?: boolean;

  //   constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
  //     super(group || map);
  //   }

  $onInit() {
    this.instance = new VectorLayer(this);
    super.$onInit();
    this.instance.setSource(
      new VectorSource({
        features: [new Feature(new Point([0, 0]))],
      }),
    );
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
    renderOrder: '<?',
    renderBuffer: '<?',
    source: '<?',
    declutter: '<?',
    style: '<?',
    updateWhileAnimating: '<?',
    updateWhileInteracting: '<?',
  },
  require: layerComponentConfig.require,
  controller: [LayerVectorComponent],
};

export const aolLayerVector = {
  name: 'aolLayerVector',
  ...component,
};
