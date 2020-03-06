import * as angular from 'angular';

import mapComponent from './map.component';
import viewComponent from './view.component';
import aolFeature from './feature.component';

import { aolLayerTile, aolLayerVector } from './layers/index';
import { aolSourceXyz, aolSourceOsm, aolSourceVector } from './sources/index';
import {
  aolGeometryLinestring,
  aolGeometryPoint,
  aolGeometryPolygon,
} from './geometry.component';
import {
  aolCoordinate,
  aolCollectionCoordinates,
} from './coordinate.component';
import { aolStyle, aolStroke } from './styles';

var aolModule = angular.module('aol', []);
function registerComponent(component: any) {
  aolModule.component(component.name, component);
}

[
  mapComponent,
  viewComponent,
  aolLayerTile,
  aolLayerVector,
  aolSourceXyz,
  aolSourceOsm,
  aolSourceVector,
  aolFeature,
  aolGeometryLinestring,
  aolGeometryPoint,
  aolGeometryPolygon,
  aolCoordinate,
  aolCollectionCoordinates,
  aolStyle,
  aolStroke
].forEach(component => {
  registerComponent(component);
});

export default aolModule;
