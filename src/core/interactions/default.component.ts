import { Collection } from 'ol';
import Interaction from 'ol/interaction/Interaction';
import {
  defaults as defaultInteraction,
  DefaultsOptions,
} from 'ol/interaction';
import aolMap, { MapComponent } from '../map.component';

export class DefaultInteractionComponent
  implements ng.IController, DefaultsOptions {
  instance: Collection<Interaction>;
  private host: MapComponent;

  altShiftDragRotate?: boolean;
  onFocusOnly?: boolean;
  doubleClickZoom?: boolean;
  keyboard?: boolean;
  mouseWheelZoom?: boolean;
  shiftDragZoom?: boolean;
  dragPan?: boolean;
  pinchRotate?: boolean;
  pinchZoom?: boolean;
  zoomDelta?: number;
  zoomDuration?: number;

  //   constructor() {}

  $onInit() {
    this.instance = defaultInteraction(this);
    this.instance.forEach(interaction =>
      this.host.instance.addInteraction(interaction),
    );
  }

  $onDestroy() {
    this.instance.forEach(interaction =>
      this.host.instance.removeInteraction(interaction),
    );
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    altShiftDragRotate: '<?',
    onFocusOnly: '<?',
    doubleClickZoom: '<?',
    keyboard: '<?',
    mouseWheelZoom: '<?',
    shiftDragZoom: '<?',
    dragPan: '<?',
    pinchRotate: '<?',
    pinchZoom: '<?',
    zoomDelta: '<?',
    zoomDuration: '<',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: ['$element', DefaultInteractionComponent],
};

export const aolInteractionDefaults = {
  name: 'aolInteractionDefaults',
  ...component,
};
