import * as angular from 'angular';
import { Options, DragAndDropEvent } from 'ol/interaction/DragAndDrop';
import { DragAndDrop } from 'ol/interaction';
import aolMap, { MapComponent } from '../map.component';
import FeatureFormat from 'ol/format/Feature';
import { Vector } from 'ol/source';
import { Geometry } from 'ol/geom';
import { ProjectionLike } from 'ol/proj';
import BaseEvent from 'ol/events/Event';
import { ObjectEvent } from 'ol/Object';
import { DraganddropInteractionExtend } from './draganddrop.component.extend';

export class DraganddropInteractionComponent
  extends DraganddropInteractionExtend
  implements ng.IController, Options {
  private instance: DragAndDrop;
  protected host: MapComponent;

  formatConstructors?: FeatureFormat[];
  source?: Vector<Geometry>;
  projection?: ProjectionLike;
  target?: HTMLElement;

  onAddFeatures = angular.noop;
  onChange = angular.noop;
  onPropertyChange = angular.noop;

  //   constructor(private map: MapComponent) {}

  $onInit() {
    if (!this.host) {
      console.error('The DragAndDrop interaction requires map component');
      return;
    }
    super.decorate(this);
    this.instance = new DragAndDrop(this);
    this.instance.on('addfeatures', (event: DragAndDropEvent) =>
      this.onAddFeatures({ event }),
    );
    this.instance.on('change', (event: BaseEvent) => this.onChange({ event }));
    this.instance.on('propertychange', (event: ObjectEvent) =>
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
    formatConstructors: '<',
    source: '<?',
    projection: '<?',
    target: '<?',
    onChange: '&?',
    onAddFeatures: '&?',
    onPropertyChange: '&?',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: [DraganddropInteractionComponent],
};

export const aolInteractionDraganddrop = {
  name: 'aolInteractionDraganddrop',
  ...component,
};
