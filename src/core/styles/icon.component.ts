import { StyleComponent, aolStyle } from './style.component';
import { Options } from 'ol/style/Icon';
import { Icon } from 'ol/style';
import IconOrigin from 'ol/style/IconOrigin';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import { Color } from 'ol/color';
import { Size } from 'ol/size';

export class styleIconComponent implements ng.IController, Options {
  public componentType = 'style-icon';
  public instance: Icon;

  private host: StyleComponent;

  anchor?: number[];
  anchorOrigin?: IconOrigin;
  anchorXUnits?: IconAnchorUnits;
  anchorYUnits?: IconAnchorUnits;
  color?: Color | string;
  crossOrigin?: string;
  img?: HTMLImageElement | HTMLCanvasElement;
  offset?: number[];
  offsetOrigin?: IconOrigin;
  opacity?: number;
  scale?: number;
  rotateWithView?: boolean;
  rotation?: number;
  size?: Size;
  imgSize?: Size;
  src?: string;

  // constructor() {}

  $onInit() {
    if (!this.host) {
      throw new Error('aol-style-icon must be applied to a style component');
    }
    if (this.img && !this.imgSize) {
      this.imgSize = [this.img.width, this.img.height];
    }

    this.instance = new Icon(this);
    this.host.instance.setImage(this.instance);
  }

  $onDestroy() {
    this.host.instance.setImage(null);
  }

  //@TODO: 增加其他属性的监听
  $onChanges(changes: angular.IOnChangesObject) {
    if (!this.instance) {
      return;
    }
    if (changes['opacity']) {
      this.instance.setOpacity(changes['opacity'].currentValue);
    }
    if (changes['rotation']) {
      this.instance.setRotation(changes['rotation'].currentValue);
    }
    if (changes['scale']) {
      this.instance.setScale(changes['scale'].currentValue);
    }
    if (changes['src']) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    if (changes['img']) {
      if (this.img && !this.imgSize) {
        this.imgSize = [this.img.width, this.img.height];
      }
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    if (changes['color']) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    if (changes['imgSize']) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
}

var aolStyleIconComponent: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    anchor: '<?',
    anchorOrigin: '<?',
    anchorXUnits: '<?',
    anchorYUnits: '<?',
    color: '<?',
    crossOrigin: '<?',
    img: '<?',
    offset: '<?',
    offsetOrigin: '<?',
    opacity: '<?',
    scale: '<?',
    rotateWithView: '<?',
    rotation: '<?',
    size: '<?',
    imgSize: '<?',
    src: '<?',
  },
  require: {
    host: `?^${aolStyle.name}`,
  },
  controller: [styleIconComponent],
};

export const aolStyleIcon = {
  name: 'aolStyleIcon',
  ...aolStyleIconComponent,
};
