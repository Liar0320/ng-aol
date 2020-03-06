import Stroke, { Options } from 'ol/style/Stroke';
import { StyleComponent, aolStyle } from './style.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';

export class StrokeComponent implements ng.IController, Options {
  public componentType = 'style';
  public instance: Stroke;

  private host: StyleComponent;

  color?: Color | ColorLike;
  lineCap?: CanvasLineCap;
  lineJoin?: CanvasLineJoin;
  lineDash?: number[];
  lineDashOffset?: number;
  miterLimit?: number;
  width?: number;

  //   protected layerVectorHost: LayerVectorComponent;
  protected styleHost: StyleComponent;

  // constructor() {}

  $onInit() {
    if (this.styleHost) {
      this.host = this.styleHost;
    } else {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
    this.instance = new Stroke(this);
    this.host.instance.setStroke(this.instance);
  }

  // $postLink(){
  //     this.host.instance.setStyle(this.instance);
  // }

  //   update() {
  //     this.host.instance.changed();
  //   }

  $onDestroy() {
    this.host.instance.setStroke(null);
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
  },
  controller: [StrokeComponent],
};

export const aolStroke = {
  name: 'aolStroke',
  ...aolStrokeComponent,
};
