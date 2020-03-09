import * as angular from 'angular';

import mapComponent from './map.component';
import viewComponent from './view.component';
import aolFeature from './feature.component';

import { aolLayerTile, aolLayerVector, aolLayerGroup } from './layers/index';
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
import {
  aolStyle,
  aolStroke,
  aolFill,
  aolStyleCircle,
  aolStyleIcon,
  aolStyleText,
} from './styles';
import { aolOverlay } from './overlay.component';

var aolModule = angular.module('aol', []);
function registerComponent(component: any) {
  aolModule.component(component.name, component);
}

[
  mapComponent,
  viewComponent,
  aolLayerTile,
  aolLayerVector,
  aolLayerGroup,
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
  aolStroke,
  aolStyleCircle,
  aolStyleIcon,
  aolStyleText,
  aolFill,
  aolOverlay,
].forEach(component => {
  registerComponent(component);
});

export default aolModule;
