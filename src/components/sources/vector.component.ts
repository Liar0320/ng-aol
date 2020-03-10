import { SourceComponent, sourceComponentConfig } from './source.component';
import { aolLayerVector, LayerVectorComponent } from '../layers';
import { LoadingStrategy } from 'ol/source/Vector';
import { Vector as VectorSource } from 'ol/source';
import { Feature, Collection } from 'ol';
import Geometry from 'ol/geom/Geometry';
import FeatureFormat from 'ol/format/Feature';
import { FeatureLoader, FeatureUrlFunction } from 'ol/featureloader';

export class SourceVectorComponent extends SourceComponent
  implements angular.IController {
  public instance: VectorSource;
  public componentType: string = 'SourceVectorComponent';
  public host: LayerVectorComponent;

  features?: Feature<Geometry>[] | Collection<Feature<Geometry>>;
  format?: FeatureFormat;
  loader?: FeatureLoader;
  overlaps?: boolean;
  strategy?: LoadingStrategy;
  url?: string | FeatureUrlFunction;
  useSpatialIndex?: boolean;
  wrapX?: boolean;

  //   constructor(host: angular.IRootElementService) {

  //   }

  $onInit() {
    this.instance = new VectorSource(this);
    this._register(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'features':
            this.instance.addFeatures(changes[key].currentValue);
            break;
          default:
            properties[key] = changes[key].currentValue;
            break;
        }
      }
    }

    this.instance.setProperties(properties, false);
    // if (changes.hasOwnProperty('url')) {
    //   this.instance = new VectorSource(this);
    //   this._register(this.instance);
    // }
  }
}

var component: angular.IComponentOptions = {
  // template: `
  //           <div ng-include></div>
  //       `,
  bindings: {
    ...sourceComponentConfig.bindings,
    features: '<?',
    format: '<?',
    loader: '<?',
    overlaps: '<?',
    strategy: '<?',
    url: '<?',
    useSpatialIndex: '<?',
    wrapX: '<?',
  },
  require: {
    host: `^${aolLayerVector.name}`,
  },
  controller: [SourceVectorComponent],
};

export const aolSourceVector = {
  name: 'aolSourceVector',
  ...component,
};
