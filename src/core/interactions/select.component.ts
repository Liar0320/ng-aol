import * as angular from 'angular';
import { Select } from 'ol/interaction';
import aolMap, { MapComponent } from '../map.component';
import {
  Options,
  FilterFunction,
  SelectEvent,
  SelectEventType,
} from 'ol/interaction/Select';
import { Condition } from 'ol/events/condition';
import { Source } from 'ol/source';
import { Layer, Vector } from 'ol/layer';
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
  selected?: (Feature | string)[];

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
    this.instance.on('select', (event: SelectEvent | any) => {
      if (event.selected.length) {
        event.remove = () => {
          this.instance.getFeatures().remove(event.selected[0]);
          this.instance.dispatchEvent({
            type: 'select',
            selected: [],
            deselected: [event.selected[0]],
            mapBrowserEvent: null,
          });
        };
      }
      this.onSelect({ event });
    });
    this.instance.on('change', (event: SelectEvent) =>
      this.onChange({ event }),
    );
    this.instance.on('propertychange', (event: SelectEvent) =>
      this.onPropertyChange({ event }),
    );
    this.host.instance.addInteraction(this.instance);
  }

  manualDispath() {
    var filterCondition = this.selected;
    if (!filterCondition || filterCondition.length === 0) return;
    var result: Feature[] = [];
    let layers: Vector[];

    if (this.layers) {
      if ((typeof this.layers as any) === 'function') {
        layers = this.host.instance
          .getLayers()
          .getArray()
          .filter(this.layers as any);
      } else {
        layers = this.layers as Vector[];
      }
    } else {
      layers = this.host.instance.getLayers().getArray() as Vector[];
    }

    layers.forEach(function(layer) {
      filterCondition.forEach(function(item) {
        let selected: Feature;
        if (typeof item === 'string') {
          selected = layer.getSource().getFeatureById(item);
          result.push(selected);
        } else if (typeof item === 'function') {
          selected = layer
            .getSource()
            .getFeatures()
            .find(item);
        } else {
          selected = layer
            .getSource()
            .getFeatures()
            .find(v => v === item);
        }

        if (selected) result.push(selected);
      });
    });

    let deSelecteds = this.instance.getFeatures().getArray();
    this.instance.getFeatures().clear();
    this.instance.dispatchEvent({
      type: 'select',
      selected: result,
      deselected: deSelecteds,
      mapBrowserEvent: null,
    });
  }

  $onChanges(changes: ng.IOnChangesObject) {
    let properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'selected':
            this.manualDispath();
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
    selected: '<?',
    onChange: '&?',
    onSelect: '&?',
    onPropertyChange: '&?',
    instance: '=?',
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
