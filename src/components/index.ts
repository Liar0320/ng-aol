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
import { aolInteractionDefaults, aolInteractionModify } from './interactions';
import { aolInteractionDraw } from './interactions/draw.component';

var aolModule = angular.module('aol', []);
function registerComponent(component: any) {
  aolModule.component(component.name, component);
}

[
  mapComponent,
  viewComponent,
  /**图层组件 */
  aolLayerTile,
  aolLayerVector,
  aolLayerGroup,
  /**数据源组件 */
  aolSourceXyz,
  aolSourceOsm,
  aolSourceVector,
  /**要素组件 */
  aolFeature,
  /**geo组件 */
  aolGeometryLinestring,
  aolGeometryPoint,
  aolGeometryPolygon,
  /**坐标组件 */
  aolCoordinate,
  aolCollectionCoordinates,
  /**样式组件 */
  aolStyle,
  aolStroke,
  aolStyleCircle,
  aolStyleIcon,
  aolStyleText,
  aolFill,
  /**domTOMap */
  aolOverlay,
  /**交互 */
  aolInteractionDefaults,
  aolInteractionDraw,
  aolInteractionModify,
].forEach(component => {
  registerComponent(component);
});

export default aolModule;
