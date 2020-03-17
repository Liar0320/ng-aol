import * as angular from 'angular';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';
import {
  GeometryPointComponent,
  aolGeometryPoint,
  GeometryLinestringComponent,
  GeometryPolygonComponent,
  aolGeometryLinestring,
  aolGeometryPolygon,
} from './geometry.component';
import Projection from 'ol/proj/Projection';
import { transform } from 'ol/proj';
import aolView from './view.component';
import aolMap from './map.component';
import { Coordinate } from 'ol/coordinate';

export class CoordinateComponent implements ng.IController {
  private host: any;

  private map: MapComponent;
  private viewHost?: ViewComponent;
  private geometryPointHost?: GeometryPointComponent;
  // private overlayHost?:GeometryPointComponent;

  x: number;
  y: number;
  srid: string = 'EPSG:4326';

  $onInit() {
    if (this.geometryPointHost) {
      this.host = this.geometryPointHost;
    } else if (this.viewHost) {
      this.host = this.viewHost;
    } else {
      throw new Error(
        'aol-collection-coordinates must be a child of a geometry component',
      );
    }
    this.$onChanges({});
    //    else if (overlayHost !== null) {
    //     this.host = overlayHost;
    //   }
  }

  $onChanges(changes: ng.IOnChangesObject) {
    if (!this.host || !angular.isNumber(this.x) || !angular.isNumber(this.y))
      return;
    let referenceProjection: Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: number[];

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection
      ? referenceProjection.getCode()
      : 'EPSG:3857';

    if (this.srid === referenceProjectionCode) {
      transformedCoordinates = [this.x, this.y];
    } else {
      transformedCoordinates = transform(
        [this.x, this.y],
        this.srid,
        referenceProjectionCode,
      );
    }

    switch (this.host.componentType) {
      case 'geometry-point':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'view':
        this.host.instance.setCenter(transformedCoordinates);
        break;
      // case "overlay":
      //   this.host.instance.setPosition(transformedCoordinates);
      //   break;
    }
  }
}

var aolGeometryPolygonComponent: angular.IComponentOptions = {
  bindings: {
    x: '<',
    y: '<',
    srid: '<?',
  },
  require: {
    viewHost: `?^${aolView.name}`,
    geometryPointHost: `?^${aolGeometryPoint.name}`,
    map: `^${aolMap.name}`,
  },
  controller: [CoordinateComponent],
};

export const aolCoordinate = {
  name: 'aolCoordinate',
  ...aolGeometryPolygonComponent,
};

export class CollectionCoordinatesComponent implements ng.IController {
  private host: any;

  private map: MapComponent;
  private geometryLinestring?: GeometryLinestringComponent;
  private geometryPolygon?: GeometryPolygonComponent;

  coordinates: [number, number][];
  srid: string = 'EPSG:4326';

  $onInit() {
    // console.log('creating aol-collection-coordinates');
    if (!!this.geometryLinestring) {
      this.host = this.geometryLinestring;
    } else if (!!this.geometryPolygon) {
      this.host = this.geometryPolygon;
    } else {
      throw new Error(
        'aol-collection-coordinates must be a child of a geometry component',
      );
    }
    this.$onChanges({});
  }

  $onChanges(changes: ng.IOnChangesObject) {
    if (!this.host || !(this.coordinates instanceof Array)) return;
    let referenceProjection: Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: Array<Coordinate>;

    // console.log('coordinates change: ', this.coordinates);

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection
      ? referenceProjection.getCode()
      : 'EPSG:3857';

    if (this.srid === referenceProjectionCode) {
      transformedCoordinates = this.coordinates;
    } else {
      transformedCoordinates = [];
      this.coordinates.forEach(
        function(coordinate: Coordinate) {
          transformedCoordinates.push(
            transform(coordinate, this.srid, referenceProjectionCode),
          );
        }.bind(this),
      );
    }

    switch (this.host.componentType) {
      case 'geometry-linestring':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'geometry-polygon':
        this.host.instance.setCoordinates([transformedCoordinates]);
        break;
      default:
        throw new Error(
          "aol-collection-coordinates' host is of unknown type: " +
            this.host.componentType,
        );
      // break;
    }
  }
}

const aolCollectionCoordinatesComponent: angular.IComponentOptions = {
  bindings: {
    coordinates: '<',
    srid: '<?',
  },
  require: {
    geometryPolygon: `?^${aolGeometryPolygon.name}`,
    geometryLinestring: `?^${aolGeometryLinestring.name}`,
    map: `^${aolMap.name}`,
  },
  controller: [CollectionCoordinatesComponent],
};

export const aolCollectionCoordinates = {
  name: 'aolCollectionCoordinates',
  ...aolCollectionCoordinatesComponent,
};
