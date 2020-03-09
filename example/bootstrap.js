angular.module('app', ['aol']).run([
  '$log',
  function($log) {
    $log.log('项目启动');
  },
]);
