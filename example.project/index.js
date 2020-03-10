angular
  .module('app', ['aol'])
  .run([
    '$log',
    '$rootScope',
    'apiCollection',
    function($log, $rootScope, apiCollection) {
      $log.log('项目启动');
      const map = {};

      function init() {
        map.collection = apiCollection.queryCollection();
      }
      init();

      $rootScope.map = map;
    },
  ])
  .service('apiCollection', [
    '$http',
    function($http) {
      this.queryCollection = function() {
        return Mock.mock({
          'list|3000': [
            {
              'id|+1': 1,
              'name|2': '@first',
              'lon|-89-89.3': 1,
              'lat|-179-179.3': 1,
              'rotation|-3-3.5': 1,
              logo: 'https://lanshuimu.com/images/ship.png',
            },
          ],
        }).list;
      };
    },
  ]);
