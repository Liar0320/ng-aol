import Style, { GeometryFunction } from 'ol/style/Style';
import aolFeature, { FeatureComponent } from '../feature.component';
import { aolLayerVector, LayerVectorComponent } from '../layers';
import Geometry from 'ol/geom/Geometry';
import Fill from 'ol/style/Fill';
import ImageStyle from 'ol/style/Image';
// import { RenderFunction } from 'ol/layer/Layer';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';

export class StyleComponent implements ng.IController {
  public componentType = 'style';
  public instance: Style;

  private host: LayerVectorComponent | FeatureComponent;

  protected layerVectorHost: LayerVectorComponent;
  protected featureHost: FeatureComponent;

  geometry?: string | Geometry | GeometryFunction;
  fill?: Fill;
  image?: ImageStyle;
//   renderer?: RenderFunction;
  stroke?: Stroke;
  text?: Text;
  zIndex?: number;

  // constructor() {}

  $onInit() {
    if (this.featureHost) {
      this.host = this.featureHost;
    } else if (this.layerVectorHost) {
      this.host = this.layerVectorHost;
    } else {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
    this.instance = new Style(this);
    this.host.instance.setStyle(this.instance);
  }

    // $postLink(){
    //     this.host.instance.setStyle(this.instance);
    // }
  // 因为在改变Stroke等属性值时style不会检查到变化，因此不会触发re-render
  update() {
    this.host.instance.changed();
  }

  $onDestroy() {
      let style = this.host.instance.getStyle();
      if(style instanceof Array){
          style.splice(style.indexOf(this.instance),1);
      }else{
          style = null;
      }
      this.host.instance.setStyle(style);
  }

//   $onChanges(changes: ng.IOnChangesObject) {
//     if (this.instance) {
//       this.instance.setId(this.id);
//     }
//   }
}

var aolStyleComponent: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    geometry: '<?',
    fill: '<?',
    image: '<?',
    stroke: '<?',
    text: '<?',
    zIndex:'<?'
  },
  require: {
    layerVectorHost: `?^${aolLayerVector.name}`,
    featureHost:`?^${aolFeature.name}`
  },
  controller: [StyleComponent],
};

export const aolStyle = {
  name: 'aolStyle',
  ...aolStyleComponent,
};
