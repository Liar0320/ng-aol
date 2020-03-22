angular
  .module('app', ['aol','map.aol.serveice'])
  .run([
    '$log',
    '$rootScope',
    'apiCollection',
    'maptools',
    function($log, $rootScope, apiCollection, maptools) {
      $log.log('项目启动');
      const map = {
        tileSource: maptools.tileSource.DtSourceHost,
        shipStyle(e) {
          return maptools.createTipMsgDom(e, { color: '#333' });
        },
        webgl: {
          style: {
            symbol: {
              symbolType: 'circle',
              size: 6,
              color:
                // '#ffdc00',
                [
                  'interpolate',
                  ['linear'],
                  ['get', 'shipType'],
                  '00',
                  '#CD853F',
                  '01', // 客船
                  '#B0C4DE',
                  '02', // 货船
                  '#08B012',
                  '03', // 液货船
                  '#EA1600',
                  '04', // 工程船
                  '#FF8C00',
                  '05', // 工作船
                  '#D00BC5',
                  '06', // 拖船
                  '#2CD9DC',
                  '0909', // 游艇
                  '#00D28E',
                  '0905', // 公务船
                  '#F5F5F5',
                  '0903', // 救助船
                  '#FFFF00',
                  '90', // 渔船
                  '#1F4EC2',
                  // "09", // 其他
                ],
              // rotateWithView: false,
              offset: [0, 0],
            },
          },
        },
        click(e) {
          console.log(e);
        },
        featureClick(e) {
          console.log(e);
        },
        featureClickFilter(layer) {
          return layer.get('name') === 'shipLayer';
        },
        featureClickStyle(e) {
          console.log(e.get('shipType'));

          return [
            new ol.style.Style({
              image: new ol.style.Icon({
                src: './assets/ship.png',
                scale: '0.5',
                color: e.get('color'),
                rotation: e.get('rotation'),
              }),
            }),
            new ol.style.Style({
              image: new ol.style.Icon({
                zIndex: 10,
                src: './assets/selection.png',
                scale: '0.6',
                // color: e.get('color'),
                // rotation: e.get('rotation'),
              }),
            }),
          ];
        },
        pointerMove(e) {
          if (e.selected.length) {
            $rootScope.$apply(function() {
              map.style = { cursor: 'pointer' };
            });
          } else {
            $rootScope.$apply(function() {
              map.style = { cursor: '' };
            });
          }
        },
      };

      function init() {
        apiCollection.queryCollection().then(function(list) {
          map.collection = list;
        });
        apiCollection.queryTrackList().then(function(list) {
          map.tracksSource = list;
        });
      }
      init();

      $rootScope.map = map;
    },
  ])
  .service('apiCollection', [
    '$http',
    'maptools',
    function($http, maptools) {
      const util = {
        transfer(response) {
          return response.data;
        },
      };

      this.queryCollection = function() {
        return $http
          .get('./assets/01.json')
          .then(util.transfer)
          .then(function(list) {
            list.forEach(function(item) {
              item.text = item.zwcm || item.ywcm;
              item.rotation = item.cog;
              item.color = maptools.getShipColor(item.shipType);
              // const offset = [121.5645 - 121.56015, 29.88247 - 29.88507];

              // item.lon += offset[0];
              // item.lat += offset[1];
            });

            return list;
          });
      };

      this.queryTrackList = function() {
        return $http.get('./assets/02.json').then(function(res) {
          return res.data;
        });
      };
    },
  ])

 