import * as angular from 'angular';
import aolModule from './components/index';

angular.module('app', [aolModule.name]).run([
  '$log',
  '$rootScope',
  ($log: angular.ILogService, $rootScope: any) => {
    $log.log('项目启动');
    $rootScope.map = {
      center: [120, 24],
      zoom: 6,
      stroke:{
        width:10,
        lineDash:[],
        lineDashOffset:5,
        miterLimit:50
      },
      styleCircle:{
        radius:20,
        fill:'#FF0000',
      },
      styleIcon:{
        src:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1583685507&di=98d05a81529c7f119d619e4d5b572634&src=http://bpic.588ku.com/element_origin_min_pic/01/37/42/75573c4c4c4c3c6.jpg',
        opacity:0.5,
        scale:0.08,
        rotation:1
      },
      styleText:{
        text:"hello Word",
        offsetY:-40
      }
    };
    $rootScope.property = JSON.stringify($rootScope.map);
    $rootScope.reset = () => {
      angular.extend($rootScope.map, JSON.parse($rootScope.property));
    };
  },
]);
