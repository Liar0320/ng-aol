import { Options } from 'ol/style/Stroke';
import { StyleComponent, aolStyle } from './style.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import { Fill } from 'ol/style';
import { styleCircleComponent, aolStyleCircle } from './circle.component';
import { styleTextComponent } from './text.component';

export class FillComponent implements ng.IController, Options {
  public componentType = 'fill';
  public instance: Fill;

  private host: any; // StyleComponent;
  private styleHost: StyleComponent;
  private styleCircleHost: styleCircleComponent;
  private styleTextHost: styleTextComponent;

  color?: Color | ColorLike;

  // constructor() {}

  $onInit() {
    if (this.styleCircleHost) {
      this.host = this.styleCircleHost;
    } else if (this.styleHost) {
      this.host = this.styleHost;
    } else {
      throw new Error(
        'aol-fill must be applied to a Style or styleCircleHost or StyleText component',
      );
    }
    this.instance = new Fill(this);
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setFill(this.instance);
        break;
      case 'style-circle':
        this.host.fill = this.instance;
        break;
      case 'style-text':
        this.host.instance.setFill(this.instance);
        break;
      default:
        break;
    }
    this.host.update();
  }

  // $postLink(){
  //     this.host.instance.setStyle(this.instance);
  // }

  //   update() {
  //     this.host.instance.changed();
  //   }
  $onDestroy() {
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setFill(null);
        break;
      case 'style-circle':
        this.host.fill = this.instance;
        this.host.update();
        break;
      case 'style-text':
        this.host.instance.setFill(null);
        break;
      default:
        break;
    }
  }

  $onChanges(changes: angular.IOnChangesObject) {
    if (!this.instance) {
      return;
    }
    // this.host.instance.setFill(new Fill({color:changes['color'].currentValue}))
    this.instance = new Fill({ color: changes['color'].currentValue });
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setStroke(this.instance);
        break;
      case 'style-circle':
        this.host.fill = this.instance;
        break;
      case 'style-text':
        this.host.instance.setFill(this.instance);
      default:
        break;
    }
    this.host.update();
  }
}

var aolFillComponent: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    color: '<?',
  },
  require: {
    styleHost: `?^${aolStyle.name}`,
    styleCircleHost: `?^${aolStyleCircle.name}`,
  },
  controller: [FillComponent],
};

export const aolFill = {
  name: 'aolFill',
  ...aolFillComponent,
};
