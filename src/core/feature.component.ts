import { Feature } from 'ol';
import { SourceVectorComponent, aolSourceVector } from './sources';

export class FeatureComponent implements ng.IController {
  public componentType = 'feature';
  public instance: Feature;
  private host: SourceVectorComponent;
  private properties: object;

  id: string | number | undefined;

  // constructor() {}

  $onInit() {
    this.instance = new Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    if (this.properties !== undefined) {
      this.instance.setProperties(this.properties);
    }
    this.host.instance.addFeature(this.instance);
  }

  $onDestroy() {
    this.host.instance.removeFeature(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    if (this.instance) {
      if (changes['properties']) {
        this.instance.setProperties(changes['properties'], true);
      } else {
        this.instance.setId(this.id);
      }
    }
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    id: '<?',
    properties: '<?',
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
