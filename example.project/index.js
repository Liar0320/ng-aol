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

    this.createTipMsgDom = (function() {
      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }

      function _iterableToArray(iter) {
        if (
          Symbol.iterator in Object(iter) ||
          Object.prototype.toString.call(iter) === '[object Arguments]'
        )
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }
      }

      function port_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function port_defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
          const descriptor = props[i];

          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function port_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          port_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) port_defineProperties(Constructor, staticProps);

        return Constructor;
      }

      /* eslint-disable no-param-reassign */

      const port_PortMsg =
        /* #__PURE__ */
        (function() {
          function PortMsg(_ref) {
            const _ref$height = _ref.height;
            const height = _ref$height === void 0 ? 20 : _ref$height;
            const _ref$width = _ref.width;
            const width = _ref$width === void 0 ? 20 : _ref$width;
            const _ref$rotation = _ref.rotation;
            const rotation = _ref$rotation === void 0 ? 0 : _ref$rotation;
            const _ref$color = _ref.color;
            const color = _ref$color === void 0 ? '#FFF' : _ref$color;
            const _ref$strokeStyle = _ref.strokeStyle;
            const strokeStyle =
              _ref$strokeStyle === void 0 ? '#000' : _ref$strokeStyle;
            const _ref$strokeWidth = _ref.strokeWidth;
            const strokeWidth =
              _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth;
            const _ref$scaleX = _ref.scaleX;
            const scaleX = _ref$scaleX === void 0 ? 1 : _ref$scaleX;
            const _ref$scaleY = _ref.scaleY;
            const scaleY = _ref$scaleY === void 0 ? 1 : _ref$scaleY;
            const _ref$triangle = _ref.triangle;
            const triangle = _ref$triangle === void 0 ? 5 : _ref$triangle;

            port_classCallCheck(this, PortMsg);

            this.width = width;
            this.height = height;
            this.x = this.width / 2 + strokeWidth;
            this.y = this.height / 2 + strokeWidth;
            this.rotation = rotation;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.strokeStyle = strokeStyle;
            this.strokeWidth = strokeWidth;
            this.color = color;
            this.triangle = triangle;
          }
          /**
           * @param {CanvasRenderingContext2D} context
           */

          port_createClass(PortMsg, [
            {
              key: 'draw',
              value: function draw(context) {
                // @ts-ignore
                const nodePoint = this.createNodeByWidthHeight(
                  this.height,
                  this.width,
                  this.triangle,
                );

                context.save(); // context.shadowOffsetX = 10; // 设置水平位移
                // context.shadowOffsetY = 10; // 设置垂直位移
                // context.shadowBlur = 20;
                // context.shadowColor = '#ffffff73';

                context.translate(this.x, this.y);
                context.rotate(this.rotation);
                context.scale(this.scaleX, this.scaleY);
                context.strokeStyle = this.strokeStyle;
                context.lineWidth = this.strokeWidth;
                context.fillStyle = this.color;
                context.beginPath(); // console.log(context);
                // @ts-ignore

                context.moveTo.apply(
                  context,
                  _toConsumableArray(nodePoint.shift()),
                );

                while (nodePoint.length) {
                  // @ts-ignore
                  context.lineTo.apply(
                    context,
                    _toConsumableArray(nodePoint.shift()),
                  );
                }

                context.closePath();
                context.fill();
                context.stroke();
                context.restore();
              },
              /**
               * @param {CanvasRenderingContext2D} context
               */
            },
            {
              key: 'drawText',
              value: function drawText(context, text, index, _ref2) {
                const _ref2$color = _ref2.color;
                const color =
                  _ref2$color === void 0 ? colorCollection.font : _ref2$color;

                context.save(); // context.translate(this.x, this.y);
                // context.rotate(this.rotation);
                // context.scale(this.scaleX, this.scaleY);

                context.font = 'normal 100 12px NSimSun'; // context.strokeStyle = 'red';
                // context.lineWidth = this.strokeWidth;

                context.fillStyle = color;
                /** 字体高度12 加2的行间距 */

                context.fillText(
                  text,
                  6,
                  (12 + (index === 0 ? 0 : 2)) * (index + 1) + 8 / 2,
                  this.width,
                ); // context.stroke();

                context.restore();
              },
              /**
               * 绘制气泡大小
               * @param {number} height
               * @param {number} width
               */
              // eslint-disable-next-line class-methods-use-this
            },
            {
              key: 'createNodeByWidthHeight',
              value: function createNodeByWidthHeight(height, width) {
                const triangle =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : 10;
                const nodePoint = [];
                const halfHeight = height / 2;
                const halfWidth = width / 2; // const triangle = 5;

                nodePoint.push([-1 * halfWidth, -1 * halfHeight]);
                nodePoint.push([halfWidth, -1 * halfHeight]);
                nodePoint.push([halfWidth, halfHeight]);
                nodePoint.push([triangle, halfHeight]);
                nodePoint.push([0, halfHeight + (1 / 2) * triangle]);
                nodePoint.push([-1 * triangle, halfHeight]);
                nodePoint.push([-1 * halfWidth, halfHeight]);
                nodePoint.push([-1 * halfWidth, -1 * halfHeight]);

                return nodePoint;
              },
            },
          ]);

          return PortMsg;
        })();

      // CONCATENATED MODULE: ./src/component/ol/canvas/msg/index.js

      /* eslint-disable import/prefer-default-export */

      const msg_canvas = document.createElement('canvas');
      const msg_context = msg_canvas.getContext('2d');

      msg_context.font = 'normal 100 12px NSimSun';
      /**
       * 测量文字的范围
       * @param { string } text
       */

      function measureText(text) {
        const padding =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 10;
        const result = {
          width: 0,
          height: 0,
          list: [],
        };
        const lines = text.split('\n');

        result.list = lines;
        result.height = (12 + 2) * lines.length + padding;
        const maxWidth = lines.reduce(function(prev, item) {
          return Math.max(prev, msg_context.measureText(item).width);
        }, 0);

        result.width = maxWidth + padding;

        return result;
      }

      const msg_generateMsgPopup = function generateMsgPopup(text, style) {
        const canvas2 = document.createElement('canvas');
        const context2 = canvas2.getContext('2d');
        const textRect = measureText(text);
        const triangle = 10;
        const portMsg = new port_PortMsg({
          height: textRect.height - 5,
          width: textRect.width,
          triangle,
          strokeStyle: 'transparent',
        });
        /** 根据经纬度坐标 转90 */

        canvas2.width = portMsg.width + 2 * portMsg.strokeWidth + 1;
        canvas2.height = portMsg.height + 2 * portMsg.strokeWidth + triangle;
        portMsg.draw(context2);
        textRect.list.forEach(function(item, index) {
          portMsg.drawText(context2, item, index, {
            color: style.color,
          });
        });

        return canvas2;
      };

      return msg_generateMsgPopup;
    })();
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
