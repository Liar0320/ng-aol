angular
  .module('app', ['aol'])
  .run([
    '$log',
    '$rootScope',
    'apiCollection',
    'maptools',
    function($log, $rootScope, apiCollection, maptools) {
      $log.log('项目启动');
      const map = {
        tileSource: maptools.tileSource.DtSourceHost,
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
      };

      function init() {
        apiCollection.queryCollection().then(function(list) {
          map.collection = list;
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
    },
  ])
  .service('maptools', function() {
    this.tileSource = {
      DtSourceHost: {
        name: '地图',
        code: 1,
        src:
          'http://mt2.google.cn/vt/lyrs=m@180000000&hl=zh-CN&gl=cn&src=app&x={x}&y={y}&z={z}&s=Gal',
        tileGrid: createTileGrid([121.5645 - 121.56015, 29.88247 - 29.88507]),
      },
      WtSourceHost: {
        name: '卫图',
        code: 2,
        src: 'http://www.google.cn/maps/vt?lyrs=s@810&gl=cn&x={x}&y={y}&z={z}',
        tileGrid: createTileGrid([121.5645 - 121.56015, 29.88247 - 29.88507]),
      },
      MapSourceHost: {
        name: '海图',
        code: 3,
        src: 'http://m12.shipxy.com/tile.c?l=Na&m=o&x={x}&y={y}&z={z}',
        // tileGrid: createTileGrid([122.00925 - 122.00915, 29.726193 - 29.92253]),
        tileGrid: createTileGrid([122.00925 - 122.00915, 29.726193 - 29.91753]),
      },
    };

    this.getShipColor = function getShipColor(shipTypeCode) {
      switch (shipTypeCode) {
        case '01': // 客船
          return '#B0C4DE';
        case '02': // 货船
          return '#08B012';
        case '03': // 液货船
          return '#EA1600';
        case '04': // 工程船
          return '#FF8C00';
        case '05': // 工作船
          return '#D00BC5';
        case '06': // 拖船
          return '#2CD9DC';
        case '0909': // 游艇
          return '#00D28E';
        case '0905': // 公务船
          return '#F5F5F5';
        case '0903': // 救助船
          return '#FFFF00';
        case '90': // 渔船
          return '#1F4EC2';
        case '09': // 其他
        default:
          return '#CD853F';
      }
    };

    function createTileGrid(offset) {
      offset = ol.proj.fromLonLat(offset);
      var origin = [-20037508.342789244, 20037508.342789244];
      var origin = [origin[0] - offset[0], origin[1] - offset[1]];
      const resolutions = [
        156543.03392804097,
        78271.51696402048,
        39135.75848201024,
        19567.87924100512,
        9783.93962050256,
        4891.96981025128,
        2445.98490512564,
        1222.99245256282,
        611.49622628141,
        305.748113140705,
        152.8740565703525,
        76.43702828517625,
        38.21851414258813,
        19.109257071294063,
        9.554628535647032,
        4.777314267823516,
        2.388657133911758,
        1.194328566955879,
        0.5971642834779395,
        0.29858214173896974,
        0.14929107086948487,
        0.07464553543474244,
        0.03732276771737122,
        0.01866138385868561,
        0.009330691929342804,
        0.004665345964671402,
        0.002332672982335701,
        0.0011663364911678506,
        0.0005831682455839253,
        0.00029158412279196264,
        0.00014579206139598132,
        0.00007289603069799066,
        0.00003644801534899533,
        0.000018224007674497665,
        0.000009112003837248832,
        0.000004556001918624416,
        0.000002278000959312208,
        0.000001139000479656104,
        5.69500239828052e-7,
        2.84750119914026e-7,
        1.42375059957013e-7,
        7.11875299785065e-8,
        3.559376498925325e-8,
      ];

      return {
        origin,
        resolutions,
      };
    }
  })
  .component('mapTilesourceControl', {
    templateUrl: 'mapTilesourceControl',
    bindings: {
      selectItem: '=?',
      select: '&?',
    },
    controller: [
      'maptools',
      function(maptools) {
        const instance = this;

        this.source = Object.values(maptools.tileSource);
        this.change = function(code) {
          const select = instance.source.find(function(item) {
            return item.code == code;
          });

          if (select) {
            this.selectItem = select;
          } else {
            throw new Error('当前不存在该地图');
          }
        };
      },
    ],
  });
