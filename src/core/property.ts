export class PropertyComponent implements ng.IController {
  componentType = 'property';
  private instance: any;
  private $scope: any;
  private properties: any;

  constructor($scope: any) {
    this.$scope = $scope;
  }

  $onInit() {
    this.instance = this.$scope.$parent.$ctrl.instance;
    console.log(this.instance, this.$scope.$parent);
  }

  $onChanges(changes: angular.IOnChangesObject) {
    if (!this.instance) {
      return;
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(changes['properties'].currentValue, false);
  }

  $onDestroy() {
    let propertiesDestroyed: any = {};
    for (let key in this.properties) {
      propertiesDestroyed[key] = null;
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(propertiesDestroyed, false);
  }
}

var component: angular.IComponentOptions = {
  bindings: {
    properties: '<?',
  },
  controller: ['$scope', PropertyComponent],
};

export const aolProperty = {
  name: 'aolProperty',
  ...component,
};
