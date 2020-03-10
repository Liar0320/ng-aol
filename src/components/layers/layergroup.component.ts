import { layerComponentConfig, LayerComponent } from './layer.component';
import { Options } from 'ol/layer/Group';
import { Group as LayerGroup } from 'ol/layer';
import { MapComponent } from '../map.component';

export class LayerGroupComponent extends LayerComponent
  implements ng.IController, Options {
  public componentType: string = 'LayerGroupComponent';
  public instance: LayerGroup;

  protected host: MapComponent | LayerGroupComponent;

  $onInit() {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new LayerGroup(this);
    super.$onInit();
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    ...layerComponentConfig.bindings,
  },
  require: layerComponentConfig.require,
  controller: [LayerGroupComponent],
};

export const aolLayerGroup = {
  name: 'aolLayerGroup',
  ...component,
};
