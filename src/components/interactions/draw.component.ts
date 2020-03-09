import * as angular from 'angular';
import Draw, {
  Options,
  GeometryFunction,
  DrawEvent,
} from 'ol/interaction/Draw';
import GeometryType from 'ol/geom/GeometryType';
import { Collection, Feature } from 'ol';
import Geometry from 'ol/geom/Geometry';
import VectorSource from 'ol/source/Vector';
import { Condition } from 'ol/events/condition';
import { StyleLike } from 'ol/style/Style';
import aolMap, { MapComponent } from '../map.component';

export class DrawInteractionComponent implements ng.IController, Options {
  private instance: Draw;
  protected host: MapComponent;

  type: GeometryType;
  clickTolerance?: number;
  features?: Collection<Feature<Geometry>>;
  source?: VectorSource<Geometry>;
  dragVertexDelay?: number;
  snapTolerance?: number;
  stopClick?: boolean;
  maxPoints?: number;
  minPoints?: number;
  finishCondition?: Condition;
  style?: StyleLike;
  geometryFunction?: GeometryFunction;
  geometryName?: string;
  condition?: Condition;
  freehand?: boolean;
  freehandCondition?: Condition;
  wrapX?: boolean;

  public onChange = angular.noop;
  public onChangeActive = angular.noop;
  public onDrawEnd = angular.noop;
  public onDrawStart = angular.noop;
  public onPropertyChange = angular.noop;

  //   constructor(private map: MapComponent) {}

  $onInit() {
    this.instance = new Draw(this);
    this.instance.on('change', (event: DrawEvent) => this.onChange({ event }));
    this.instance.on('change:active', (event: DrawEvent) =>
      this.onChangeActive({ event }),
    );
    this.instance.on('drawend', (event: DrawEvent) =>
      this.onDrawEnd({ event }),
    );
    this.instance.on('drawstart', (event: DrawEvent) =>
      this.onDrawStart({ event }),
    );
    this.instance.on('propertychange', (event: DrawEvent) =>
      this.onPropertyChange({ event }),
    );
    this.host.instance.addInteraction(this.instance);
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
    type: '<',
    clickTolerance: '<?',
    features: '<?',
    source: '<?',
    dragVertexDelay: '<?',
    snapTolerance: '<?',
    stopClick: '<?',
    maxPoints: '<?',
    minPoints: '<?',
    finishCondition: '<?',
    style: '<?',
    geometryFunction: '<?',
    geometryName: '<?',
    condition: '<?',
    freehand: '<?',
    freehandCondition: '<?',
    wrapX: '<?',
    onChange: '&?',
    onChangeActive: '&?',
    onDrawEnd: '&?',
    onDrawStart: '&?',
    onPropertyChange: '&?',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: ['$element', DrawInteractionComponent],
};

export const aolInteractionDraw = {
  name: 'aolInteractionDraw',
  ...component,
};
