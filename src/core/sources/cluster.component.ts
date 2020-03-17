import { SourceComponent, sourceComponentConfig } from "./source.component";
import { Cluster  } from "ol/source";
import { Options  } from "ol/source/Cluster";
import { Feature } from "ol";
import { Geometry, Point } from "ol/geom";
import { Vector } from "ol/source";
import { LayerVectorComponent, aolLayerVector } from "../layers";

export class SourceClusterComponent extends SourceComponent
  implements angular.IController , Options {
  public instance: Cluster;
  public componentType: string = 'SourceClusterComponent';
  public host: LayerVectorComponent;

  distance?: number;
  geometryFunction?: (p0: Feature<Geometry>) => Point;
  source: Vector<Geometry>;
  wrapX?: boolean;

  //   constructor(host: angular.IRootElementService) {

  //   }

  $onInit() {
    if(!this.source) return ;
    this.instance = new Cluster(this);
    this._register(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      this.$onInit();
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('source')) {
      this.$onDestroy();
      this.instance = new Cluster(this);
      this._register(this.instance);
    }
  }
}

var component: angular.IComponentOptions = {
  // template: `
  //           <div ng-include></div>
  //       `,
  bindings: {
    ...sourceComponentConfig.bindings,
    distance: '<?',
    geometryFunction: '<?',
    source: '<',
    wrapX: '<?',
  },
  require: {
    host: `^${aolLayerVector.name}`,
  },
  controller: ['$element', SourceClusterComponent],
};


export const aolSourceCluster = {
  name: 'aolSourceCluster',
  ...component,
};
