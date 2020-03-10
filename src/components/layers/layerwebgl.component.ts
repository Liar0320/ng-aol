import { LayerComponent, layerComponentConfig } from './layer.component';
import WebGLPointsLayer from 'ol/layer/WebGLPoints';
import { Vector as VectorSource } from 'ol/source';
import Geometry from 'ol/geom/Geometry';
import { LiteralStyle, SymbolType } from 'ol/style/LiteralStyle';

export class LayerWebglComponent extends LayerComponent
  implements angular.IController {
  public instance: WebGLPointsLayer;
  public componentType: string = 'LayerVectorComponent';

  style: any | LiteralStyle = {
    symbol: {
      symbolType: 'circle',
      size: 6,
      color: '#CD853F',
      // [
      //   "interpolate",
      //   ["linear"],
      //   ["get", "webgltype"],
      //   "00",
      //   "#CD853F",
      //   "01", // 客船
      //   "#B0C4DE",
      //   "02", // 货船
      //   "#08B012",
      //   "03", // 液货船
      //   "#EA1600",
      //   "04", // 工程船
      //   "#FF8C00",
      //   "05", // 工作船
      //   "#D00BC5",
      //   "06", // 拖船
      //   "#2CD9DC",
      //   "0909", // 游艇
      //   "#00D28E",
      //   "0905", // 公务船
      //   "#F5F5F5",
      //   "0903", // 救助船
      //   "#FFFF00",
      //   "90", // 渔船
      //   "#1F4EC2"
      //   // "09", // 其他
      // ],
      // rotateWithView: false,
      offset: [0, 0],
    },
  };
  source?: VectorSource<Geometry>;
  disableHitDetection?: boolean;

  //   constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
  //     super(group || map);
  //   }

  $onInit() {
    this.instance = new WebGLPointsLayer(this);
    super.$onInit();
    // this.instance.setSource(
    //   new VectorSource({
    //     features: [new Feature(new Point([0, 0]))],
    //   }),
    // );
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
    style: '<?',
    className: '<?',
    opacity: '<?',
    visible: '<?',
    extent: '<?',
    zIndex: '<?',
    minResolution: '<?',
    maxResolution: '<?',
    source: '<?',
    disableHitDetection: '<?',
  },
  require: layerComponentConfig.require,
  controller: [LayerWebglComponent],
};

export const aolLayerWebgl = {
  name: 'aolLayerWebgl',
  ...component,
};
