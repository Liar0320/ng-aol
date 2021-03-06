import { Options } from 'ol/style/Stroke';
import { Stroke } from 'ol/style';
import { StyleComponent, aolStyle } from './style.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import { styleCircleComponent, aolStyleCircle } from './circle.component';

export class StrokeComponent implements ng.IController, Options {
  public componentType = 'style-stroke';
  public instance: Stroke;

  private host: any; // StyleComponent | CircleComponent;

  color?: Color | ColorLike;
  lineCap?: CanvasLineCap;
  lineJoin?: CanvasLineJoin;
  lineDash?: number[];
  lineDashOffset?: number;
  miterLimit?: number;
  width?: number;

  //   protected layerVectorHost: LayerVectorComponent;
  protected styleHost: StyleComponent;
  protected styleCircleHost: styleCircleComponent;

  // constructor() {}

  $onInit() {
    if (this.styleCircleHost) {
      this.host = this.styleCircleHost;
    } else if (this.styleHost) {
      this.host = this.styleHost;
    } else {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
    this.instance = new Stroke(this);
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setStroke(this.instance);
        break;
      case 'style-circle':
        this.host.stroke = this.instance;
        break;
      default:
        break;
    }
  }

  // $postLink(){
  //     this.host.instance.setStyle(this.instance);
  // }

  //   update() {
  //     this.host.instance.changed();
  //   }

  $onDestroy() {
    // this.host.instance.setStroke(null);
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setStroke(null);
        break;
      case 'style-circle':
        this.host.stroke = null;
        this.host.update();
        break;
      default:
        break;
    }
  }

  $onChanges(changes: angular.IOnChangesObject) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'color':
            this.instance.setColor(changes[key].currentValue);
            break;
          case 'lineCap':
            this.instance.setLineCap(changes[key].currentValue);
            break;
          case 'lineDash':
            this.instance.setLineDash(changes[key].currentValue);
            break;
          case 'lineDashOffset':
            this.instance.setLineDashOffset(changes[key].currentValue);
            break;
          case 'lineJoin':
            this.instance.setLineJoin(changes[key].currentValue);
            break;
          case 'miterLimit':
            this.instance.setMiterLimit(changes[key].currentValue);
            break;
          case 'width':
            this.instance.setWidth(changes[key].currentValue);
            break;
          default:
            break;
        }
      }
    }
    this.host.update();
  }
}

var aolStrokeComponent: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    color: '<?',
    lineCap: '<?',
    lineJoin: '<?',
    lineDash: '<?',
    lineDashOffset: '<?',
    miterLimit: '<?',
    width: '<?',
  },
  require: {
    styleHost: `?^${aolStyle.name}`,
    styleCircleHost: `?^${aolStyleCircle.name}`,
  },
  controller: [StrokeComponent],
};

export const aolStyleStroke = {
  name: 'aolStyleStroke',
  ...aolStrokeComponent,
};
