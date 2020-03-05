import { Feature } from 'ol';
import { SourceVectorComponent, aolSourceVector } from './sources';

export class FeatureComponent implements ng.IController {
  public componentType = 'feature';
  public instance: Feature;
  private host: SourceVectorComponent;

  id: string | number | undefined;

  // constructor() {}

  $onInit() {
    this.instance = new Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }

  $onDestroy() {
    this.host.instance.removeFeature(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    id: '<?',
  },
  require: {
    host: `^${aolSourceVector.name}`,
  },
  controller: ['$element', FeatureComponent],
};

export default {
  name: 'aolFeature',
  ...component,
};
