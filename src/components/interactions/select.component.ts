import * as angular from 'angular';
import { Select } from 'ol/interaction';
import aolMap, { MapComponent } from '../map.component';
import { Options, FilterFunction, SelectEvent } from 'ol/interaction/Select';
import { Condition } from 'ol/events/condition';
import { Source } from 'ol/source';
import { Layer } from 'ol/layer';
import { StyleLike } from 'ol/style/Style';
import { Collection, Feature } from 'ol';
import { Geometry } from 'ol/geom';
import { SelectInteractionExtend } from './select.component.extend';

export class SelectInteractionComponent extends SelectInteractionExtend
  implements ng.IController, Options {
  private instance: Select;
  protected host: MapComponent;

  addCondition?: Condition;
  condition?: Condition;
  layers?: Layer<Source>[] | ((p0: Layer<Source>) => boolean);
  style?: StyleLike;
  removeCondition?: Condition;
  toggleCondition?: Condition;
  multi?: boolean;
  features?: Collection<Feature<Geometry>>;
  filter?: FilterFunction;
  hitTolerance?: number;

  onSelect = angular.noop;
  onChange = angular.noop;
  onPropertyChange = angular.noop;

  //   constructor(private map: MapComponent) {}

  $onInit() {
    if (!this.host) {
      console.error('The select interaction requires map component');
      return;
    }
    super.initCondition();
    this.instance = new Select(this);
    this.instance.on('select', (event: SelectEvent) =>
      this.onSelect({ event }),
    );
    this.instance.on('change', (event: SelectEvent) =>
      this.onChange({ event }),
    );
    this.instance.on('propertychange', (event: SelectEvent) =>
      this.onPropertyChange({ event }),
    );
    this.host.instance.addInteraction(this.instance);
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
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
    addCondition: '<',
    condition: '<?',
    layers: '<?',
    style: '<?',
    removeCondition: '<?',
    toggleCondition: '<?',
    multi: '<?',
    features: '<?',
    filter: '<?',
    wrapX: '<?',
    onChange: '&?',
    onSelect: '&?',
    onPropertyChange: '&?',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: ['$element', SelectInteractionComponent],
};

export const aolInteractionSelect = {
  name: 'aolInteractionSelect',
  ...component,
};
