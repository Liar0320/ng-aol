import { GeometryFunction } from 'ol/style/Style';
import aolFeature, { FeatureComponent } from '../feature.component';
import { aolLayerVector, LayerVectorComponent } from '../layers';
import Geometry from 'ol/geom/Geometry';
import { Fill, Image as ImageStyle, Stroke, Text, Style } from 'ol/style';
// import { RenderFunction } from 'ol/layer/Layer';

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
    if (style instanceof Array) {
      style.splice(style.indexOf(this.instance), 1);
    } else {
      style = null;
    }
    this.host.instance.setStyle(style);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'image':
            this.instance.setImage(changes[key].currentValue);
            break;
          case 'fill':
            this.instance.setFill(changes[key].currentValue);
            break;
          case 'stroke':
            this.instance.setStroke(changes[key].currentValue);
            break;
          case 'text':
            this.instance.setText(changes[key].currentValue);
          case 'zIndex':
            this.instance.setZIndex(changes[key].currentValue);
            break;
          default:
            // properties[key] = changes[key].currentValue;
            // this.instance.set(properties, false);
            break;
        }
      }
      this.host.instance.changed();
    }
  }
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
    zIndex: '<?',
  },
  require: {
    layerVectorHost: `?^${aolLayerVector.name}`,
    featureHost: `?^${aolFeature.name}`,
  },
  controller: [StyleComponent],
};

export const aolStyle = {
  name: 'aolStyle',
  ...aolStyleComponent,
};
