import aolFeature from './feature.component';
import { FeatureComponent } from './feature.component';
import { LineString, Point, Polygon } from 'ol/geom';

export class GeometryLinestringComponent implements ng.IController {
  public componentType: string = 'geometry-linestring';
  public instance: LineString;
  private host: FeatureComponent;

  //   constructor() {
  //     // console.log('instancing aol-geometry-linestring');
  //   }

  $onInit() {
    this.instance = new LineString([]);
    this.host.instance.setGeometry(this.instance);
  }
  $onDestroy() {
    // this.host.setGeometry(null);
  }
}
var aolGeometryLinestringComponent: angular.IComponentOptions = {
  bindings: {},
  require: {
    host: `^${aolFeature.name}`,
  },
  controller: [GeometryLinestringComponent],
};

export const aolGeometryLinestring = {
  name: 'aolGeometryLinestring',
  ...aolGeometryLinestringComponent,
};

export class GeometryPointComponent implements ng.IController {
  public componentType: string = 'geometry-point';
  public instance: Point;
  private host: FeatureComponent;

  //   constructor() {
  //     // console.log('creating aol-geometry-point');
  //   }

  $onInit() {
    this.instance = new Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
    this.host.instance.setGeometry(this.instance);
  }

  $onDestroy() {
    // this.host.setGeometry(null);
  }
}

var aolGeometryPointComponent: angular.IComponentOptions = {
  bindings: {},
  require: {
    host: `^${aolFeature.name}`,
  },
  controller: [GeometryPointComponent],
};

export const aolGeometryPoint = {
  name: 'aolGeometryPoint',
  ...aolGeometryPointComponent,
};

export class GeometryPolygonComponent implements ng.IController {
  public componentType: string = 'geometry-polygon';
  public instance: Polygon;
  private host: FeatureComponent;

  //   constructor() {
  //     // console.log('creating aol-geometry-polygon');
  //   }

  $onInit() {
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new Polygon([
      [
        [0, 0],
        [1, 0],
        [1, 1],
      ],
    ]);
    this.host.instance.setGeometry(this.instance);
  }

  //   $onDestroy() {
  //     // this.host.setGeometry(null);
  //   }
}

var aolGeometryPolygonComponent: angular.IComponentOptions = {
  bindings: {},
  require: {
    host: `^${aolFeature.name}`,
  },
  controller: [GeometryPolygonComponent],
};

export const aolGeometryPolygon = {
  name: 'aolGeometryPolygon',
  ...aolGeometryPolygonComponent,
};
