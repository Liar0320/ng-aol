import * as angular from 'angular';
import { Map, MapBrowserEvent, MapEvent } from 'ol';
import RenderEvent from 'ol/render/Event';
import { ObjectEvent } from 'ol/Object';
import Control from 'ol/control/Control';
import Interaction from 'ol/interaction/Interaction';
import { MapOptions } from 'ol/PluggableMap';

export class MapComponent implements angular.IController, MapOptions {
  public instance: Map;
  public componentType: string = 'map';
  public host: angular.IRootElementService;
  private onDblClick: Function = angular.noop;
  private onPointerDrag: Function = angular.noop;
  private onPointerMove: Function = angular.noop;
  private onPostCompose: Function = angular.noop;
  private onPostRender: Function = angular.noop;
  private onPreCompose: Function = angular.noop;
  private onPropertyChange: Function = angular.noop;
  private onSingleClick: Function = angular.noop;
  private onClick: Function = angular.noop;
  private onMoveEnd: Function = angular.noop;

  controls: Control[] = [];
  interactions: Interaction[] = [];

  constructor(host: angular.IRootElementService) {
    this.host = host;
  }

  $onInit() {
    this.instance = new Map(this);
    this.instance.setTarget(this.host[0]);
    this.instance.on('click', (event: MapBrowserEvent) =>
      this.onClick({ event }),
    );
    this.instance.on('dblclick', (event: MapBrowserEvent) =>
      this.onDblClick({ event }),
    );
    this.instance.on('moveend', (event: MapEvent) => this.onMoveEnd({ event }));
    this.instance.on('pointerdrag', (event: MapBrowserEvent) =>
      this.onPointerDrag({ event }),
    );
    this.instance.on('pointermove', (event: MapBrowserEvent) =>
      this.onPointerMove({ event }),
    );
    this.instance.on('postcompose', (event: RenderEvent) =>
      this.onPostCompose({ event }),
    );
    this.instance.on('postrender', (event: MapEvent) =>
      this.onPostRender({ event }),
    );
    this.instance.on('precompose', (event: RenderEvent) =>
      this.onPreCompose({ event }),
    );
    this.instance.on('propertychange', (event: ObjectEvent) =>
      this.onPropertyChange({ event }),
    );
    this.instance.on('singleclick', (event: MapBrowserEvent) =>
      this.onSingleClick({ event }),
    );
  }
}

var component: angular.IComponentOptions = {
  // template: `
  //   <div  >
  //     <ng-transclude id='ngolMap'></ng-transclude>
  //     <div  data-tag="map"></div>
  //   </div>
  // `,
  // transclude: true,
  bindings: {
    pixelRatio: '<?',
    keyboardEventTarget: '<?',
    onClick: '&?',
    onDblClick: '&?',
    onMoveEnd: '&?',
    onPointerDrag: '&?',
    onPointerMove: '&?',
    onPostcompose: '&?',
    onPostrender: '&?',
    onPreCompose: '&?',
    onPropertyChange: '&?',
    onRenderComplete: '&?',
    onSingleClick: '&?',
  },
  controller: ['$element', MapComponent],
};

export default {
  name: 'aolMap',
  ...component,
};
