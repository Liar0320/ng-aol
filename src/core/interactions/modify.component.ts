import * as angular from 'angular';
import aolMap, { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Options, ModifyEvent } from 'ol/interaction/Modify';
import { Condition } from 'ol/events/condition';
import { StyleLike } from 'ol/style/Style';
import VectorSource from 'ol/source/Vector';
import Geometry from 'ol/geom/Geometry';
import { Collection, Feature } from 'ol';

export class ModifyInteractionComponent implements ng.IController, Options {
  private instance: Modify;
  protected host: MapComponent;

  condition?: Condition;
  deleteCondition?: Condition;
  insertVertexCondition?: Condition;
  pixelTolerance?: number;
  style?: StyleLike;
  source?: VectorSource<Geometry>;
  features?: Collection<Feature<Geometry>>;
  wrapX?: boolean;

  onModifyEnd = angular.noop;
  onModifyStart = angular.noop;
  onChange = angular.noop;
  onChangeActive = angular.noop;
  onPropertyChange = angular.noop;

  //   constructor(private map: MapComponent) {}

  $onInit() {
    if (!this.source && !this.features) {
      console.error('The modify interaction requires features or a source');
      return;
    }
    this.instance = new Modify(this);
    this.instance.on('change', (event: ModifyEvent) =>
      this.onChange({ event }),
    );
    this.instance.on('change:active', (event: ModifyEvent) =>
      this.onChangeActive({ event }),
    );
    this.instance.on('propertychange', (event: ModifyEvent) =>
      this.onPropertyChange({ event }),
    );
    this.instance.on('modifyend', (event: ModifyEvent) =>
      this.onModifyEnd({ event }),
    );
    this.instance.on('modifystart', (event: ModifyEvent) =>
      this.onModifyStart({ event }),
    );
    this.host.instance.addInteraction(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      this.$onInit();
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'source':
            this.$onDestroy();
            this.$onInit();
            break;
          default:
            properties[key] = changes[key].currentValue;
            break;
        }
      }
    }

    this.instance.setProperties(properties, false);
  }

  $onDestroy() {
    this.host.instance.removeInteraction(this.instance);
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    condition: '<',
    deleteCondition: '<?',
    insertVertexCondition: '<?',
    pixelTolerance: '<?',
    style: '<?',
    source: '<?',
    features: '<?',
    wrapX: '<?',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: ['$element', ModifyInteractionComponent],
};

export const aolInteractionModify = {
  name: 'aolInteractionModify',
  ...component,
};
