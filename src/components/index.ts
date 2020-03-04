import * as angular from 'angular';

import mapComponent from './map.component';
import viewComponent from './view.component';

import { aolLayerTile, aolLayerVector } from './layers/index';
import { aolSourceXyz , aolSourceOsm } from './sources/index';

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
  aolSourceOsm
].forEach(component => {
  registerComponent(component);
});

export default aolModule;
