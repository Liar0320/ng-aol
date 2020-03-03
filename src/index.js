import angular from 'angular';

angular.module('app', []).run([
  '$log',
  /**
   * @param {ng.ILogService} $log
   */
  $log => {
    $log.log('项目启动');
  },
]);
