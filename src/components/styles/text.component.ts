import { StyleComponent, aolStyle } from './style.component';
import Text, { Options } from 'ol/style/Text';
import TextPlacement from 'ol/style/TextPlacement';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

export class styleTextComponent implements ng.IController, Options {
  public componentType = 'style-icon';
  public instance: Text;

  private host: StyleComponent;

  font?: string;
  maxAngle?: number;
  offsetX?: number;
  offsetY?: number;
  overflow?: boolean;
  placement?: TextPlacement | string;
  scale?: number;
  rotateWithView?: boolean;
  rotation?: number;
  text?: string;
  textAlign?: string;
  textBaseline?: string;
  fill?: Fill;
  stroke?: Stroke;
  backgroundFill?: Fill;
  backgroundStroke?: Stroke;
  padding?: number[];
  // constructor() {}

  $onInit() {
    if (!this.host) {
      throw new Error('aol-style-icon must be applied to a style component');
    }
    this.instance = new Text(this);
    this.host.instance.setText(this.instance);
  }

  $onDestroy() {
    this.host.instance.setText(null);
  }

  //@TODO: 增加其他属性的监听
  $onChanges(changes: angular.IOnChangesObject) {
    if (!this.instance) {
      return;
    }
    if (changes['font']) {
        this.instance.setFont(changes['font'].currentValue);
      }
      if (changes['offsetX']) {
        this.instance.setOffsetX(changes['offsetX'].currentValue);
      }
      if (changes['offsetY']) {
        this.instance.setOffsetY(changes['offsetY'].currentValue);
      }
      if (changes['scale']) {
        this.instance.setScale(changes['scale'].currentValue);
      }
      if (changes['rotation']) {
        this.instance.setRotation(changes['rotation'].currentValue);
      }
      if (changes['text']) {
        this.instance.setText(changes['text'].currentValue);
      }
      if (changes['textAlign']) {
        this.instance.setTextAlign(changes['textAlign'].currentValue);
      }
      if (changes['textBaseLine']) {
        this.instance.setTextBaseline(changes['textBaseLine'].currentValue);
      }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
}

var aolStyleTextComponent: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    font: '<?',
    maxAngle: '<?',
    offsetX: '<?',
    offsetY: '<?',
    overflow: '<?',
    placement: '<?',
    scale: '<?',
    rotateWithView: '<?',
    rotation: '<?',
    text: '<?',
    textAlign: '<?',
    textBaseline: '<?',
    fill: '<?',
    stroke: '<?',
    backgroundFill: '<?',
    backgroundStroke: '<?',
    padding: '<?',
  },
  require: {
    host: `?^${aolStyle.name}`,
  },
  controller: [styleTextComponent],
};

export const aolStyleText = {
  name: 'aolStyleText',
  ...aolStyleTextComponent,
};
