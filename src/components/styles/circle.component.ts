import Stroke from 'ol/style/Stroke';
import { StyleComponent, aolStyle } from './style.component';
import Fill from 'ol/style/Fill';
import Circle from 'ol/style/Circle';

export class styleCircleComponent implements ng.IController {
  public componentType = 'style-circle';
  public instance: Circle;

  private host: StyleComponent;

  fill: Fill;
  radius: number = 5;
  snapToPixel: boolean;
  stroke: Stroke;
  // atlasManager: ;

  //   protected layerVectorHost: LayerVectorComponent;
  protected styleHost: StyleComponent;

  // constructor() {}

  $onInit() {
    if (this.styleHost) {
      this.host = this.styleHost;
    } else {
      throw new Error('aol-circle must be applied to a feature or a layer');
    }
  }

  $postLink() {
    this.instance = new Circle(this);
    this.host.instance.setImage(this.instance);
  }

  update() {
    if (!!this.instance) {
      this.instance = new Circle(this);
      this.host.instance.setImage(this.instance);
      // this.instance.setRadius(this.radius);
    }
    this.host.update();
    // this.host.instance.changed();
  }

  $onDestroy() {
    this.host.instance.setStroke(null);
  }

  $onChanges(changes: angular.IOnChangesObject) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    if (changes['radius']) {
      this.instance.setRadius(changes['radius'].currentValue);
    }
    // this.host.update();
  }
}

var aolStyleCircleComponent: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    fill: '<?',
    radius: '<?',
    snapToPixel: '<?',
    stroke: '<?',
  },
  require: {
    styleHost: `?^${aolStyle.name}`,
  },
  controller: [styleCircleComponent],
};

export const aolStyleCircle = {
  name: 'aolStyleCircle',
  ...aolStyleCircleComponent,
};
