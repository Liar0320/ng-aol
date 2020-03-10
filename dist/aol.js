/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var ol_1 = __webpack_require__(4);
var MapComponent = /** @class */ (function () {
    function MapComponent(host) {
        this.componentType = 'map';
        this.onDblClick = angular.noop;
        this.onPointerDrag = angular.noop;
        this.onPointerMove = angular.noop;
        this.onPostCompose = angular.noop;
        this.onPostRender = angular.noop;
        this.onPreCompose = angular.noop;
        this.onPropertyChange = angular.noop;
        this.onSingleClick = angular.noop;
        this.onClick = angular.noop;
        this.onMoveEnd = angular.noop;
        this.controls = [];
        this.interactions = [];
        this.host = host;
    }
    MapComponent.prototype.$onInit = function () {
        var _this = this;
        this.instance = new ol_1.Map(this);
        this.instance.setTarget(this.host[0]);
        this.instance.on('click', function (event) {
            return _this.onClick({ event: event });
        });
        this.instance.on('dblclick', function (event) {
            return _this.onDblClick({ event: event });
        });
        this.instance.on('moveend', function (event) { return _this.onMoveEnd({ event: event }); });
        this.instance.on('pointerdrag', function (event) {
            return _this.onPointerDrag({ event: event });
        });
        this.instance.on('pointermove', function (event) {
            return _this.onPointerMove({ event: event });
        });
        this.instance.on('postcompose', function (event) {
            return _this.onPostCompose({ event: event });
        });
        this.instance.on('postrender', function (event) {
            return _this.onPostRender({ event: event });
        });
        this.instance.on('precompose', function (event) {
            return _this.onPreCompose({ event: event });
        });
        this.instance.on('propertychange', function (event) {
            return _this.onPropertyChange({ event: event });
        });
        this.instance.on('singleclick', function (event) {
            return _this.onSingleClick({ event: event });
        });
    };
    return MapComponent;
}());
exports.MapComponent = MapComponent;
var component = {
    // template: `
    //   <div  >
    //     <ng-transclude id='ngolMap'></ng-transclude>
    //     <div  data-tag="map"></div>
    //   </div>
    // `,
    // transclude: true,
    bindings: {
        pixelRatio: '<?',
        keyboardEventTarget: '<?',
        onClick: '&?',
        onDblClick: '&?',
        onMoveEnd: '&?',
        onPointerDrag: '&?',
        onPointerMove: '&?',
        onPostcompose: '&?',
        onPostrender: '&?',
        onPreCompose: '&?',
        onPropertyChange: '&?',
        onRenderComplete: '&?',
        onSingleClick: '&?',
    },
    controller: ['$element', MapComponent],
};
exports.default = __assign({ name: 'aolMap' }, component);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = angular;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Style_1 = __webpack_require__(32);
var feature_component_1 = __webpack_require__(5);
var layers_1 = __webpack_require__(3);
var StyleComponent = /** @class */ (function () {
    function StyleComponent() {
        this.componentType = 'style';
        //   $onChanges(changes: ng.IOnChangesObject) {
        //     if (this.instance) {
        //       this.instance.setId(this.id);
        //     }
        //   }
    }
    // constructor() {}
    StyleComponent.prototype.$onInit = function () {
        if (this.featureHost) {
            this.host = this.featureHost;
        }
        else if (this.layerVectorHost) {
            this.host = this.layerVectorHost;
        }
        else {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
        this.instance = new Style_1.default(this);
        this.host.instance.setStyle(this.instance);
    };
    // $postLink(){
    //     this.host.instance.setStyle(this.instance);
    // }
    // 因为在改变Stroke等属性值时style不会检查到变化，因此不会触发re-render
    StyleComponent.prototype.update = function () {
        this.host.instance.changed();
    };
    StyleComponent.prototype.$onDestroy = function () {
        var style = this.host.instance.getStyle();
        if (style instanceof Array) {
            style.splice(style.indexOf(this.instance), 1);
        }
        else {
            style = null;
        }
        this.host.instance.setStyle(style);
    };
    return StyleComponent;
}());
exports.StyleComponent = StyleComponent;
var aolStyleComponent = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        geometry: '<?',
        fill: '<?',
        image: '<?',
        stroke: '<?',
        text: '<?',
        zIndex: '<?'
    },
    require: {
        layerVectorHost: "?^" + layers_1.aolLayerVector.name,
        featureHost: "?^" + feature_component_1.default.name
    },
    controller: [StyleComponent],
};
exports.aolStyle = __assign({ name: 'aolStyle' }, aolStyleComponent);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// export * from './layer.component';
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ol;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ol_1 = __webpack_require__(4);
var sources_1 = __webpack_require__(11);
var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
        this.componentType = 'feature';
    }
    // constructor() {}
    FeatureComponent.prototype.$onInit = function () {
        this.instance = new ol_1.Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.$onDestroy = function () {
        this.host.instance.removeFeature(this.instance);
    };
    FeatureComponent.prototype.$onChanges = function (changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    };
    return FeatureComponent;
}());
exports.FeatureComponent = FeatureComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        id: '<?',
    },
    require: {
        host: "^" + sources_1.aolSourceVector.name,
    },
    controller: ['$element', FeatureComponent],
};
exports.default = __assign({ name: 'aolFeature' }, component);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SourceComponent = /** @class */ (function () {
    function SourceComponent() {
        this.componentType = 'source';
    }
    //   constructor()
    //   {}
    SourceComponent.prototype.$onDestroy = function () {
        if (this.host) {
            this.host.instance.setSource(null);
        }
        // if (this.raster) {
        //   this.raster.sources = [];
        // }
    };
    SourceComponent.prototype._register = function (source) {
        if (this.host) {
            this.host.instance.setSource(source);
        }
        // if (this.raster) {
        //   this.raster.sources = [source];
        // }
    };
    return SourceComponent;
}());
exports.SourceComponent = SourceComponent;
exports.sourceComponentConfig = {
    bindings: {
        instance: '=?',
        attributions: '<?',
        attributionsCollapsible: '<?',
    },
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_component_1 = __webpack_require__(0);
var LayerComponent = /** @class */ (function () {
    function LayerComponent() {
        this.componentType = 'layer';
    }
    LayerComponent.prototype.$onInit = function () {
        this.host = this.layerGroupComponent || this.mapComponent;
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers().push(this.instance);
    };
    LayerComponent.prototype.$onDestroy = function () {
        this.host.instance.getLayers().remove(this.instance);
    };
    LayerComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
                if (key === 'prerender') {
                    this.instance.un('prerender', changes[key].previousValue);
                    this.instance.on('prerender', changes[key].currentValue);
                }
                if (key === 'postrender') {
                    this.instance.un('postrender', changes[key].previousValue);
                    this.instance.on('postrender', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    return LayerComponent;
}());
exports.LayerComponent = LayerComponent;
exports.layerComponentConfig = {
    bindings: {
        opacity: '<?',
        visible: '<?',
        extent: '<?',
        zIndex: '<?',
        minResolution: '<?',
        maxResolution: '<?',
        className: '<?',
        // preload:'<?',
        prerender: '&?',
        postrender: '&?',
    },
    require: {
        mapComponent: "?^" + map_component_1.default.name,
        /**@FIXME:待修复 */
        layerGroupComponent: "?^^aolLayerGroup",
    },
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_component_1 = __webpack_require__(2);
var Circle_1 = __webpack_require__(35);
var styleCircleComponent = /** @class */ (function () {
    function styleCircleComponent() {
        this.componentType = 'style-circle';
        this.radius = 5;
    }
    // constructor() {}
    styleCircleComponent.prototype.$onInit = function () {
        if (this.styleHost) {
            this.host = this.styleHost;
        }
        else {
            throw new Error('aol-circle must be applied to a feature or a layer');
        }
    };
    styleCircleComponent.prototype.$postLink = function () {
        this.instance = new Circle_1.default(this);
        this.host.instance.setImage(this.instance);
    };
    styleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            this.instance = new Circle_1.default(this);
            this.host.instance.setImage(this.instance);
            // this.instance.setRadius(this.radius);
        }
        this.host.update();
        // this.host.instance.changed();
    };
    styleCircleComponent.prototype.$onDestroy = function () {
        this.host.instance.setStroke(null);
    };
    styleCircleComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        if (changes['radius']) {
            this.instance.setRadius(changes['radius'].currentValue);
        }
        // this.host.update();
    };
    return styleCircleComponent;
}());
exports.styleCircleComponent = styleCircleComponent;
var aolStyleCircleComponent = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        fill: '<?',
        radius: '<?',
        snapToPixel: '<?',
        stroke: '<?',
    },
    require: {
        styleHost: "?^" + style_component_1.aolStyle.name,
    },
    controller: [styleCircleComponent],
};
exports.aolStyleCircle = __assign({ name: 'aolStyleCircle' }, aolStyleCircleComponent);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ol.interaction;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ol_1 = __webpack_require__(4);
var map_component_1 = __webpack_require__(0);
var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
        this.componentType = 'view';
        this.zoom = 11;
        this.center = [104.06, 30.67];
        this.projection = 'EPSG:4326';
        this.zoomAnimation = false;
    }
    // defaultGive() {
    //   if (this.zoom === undefined) this.zoom = 1;
    //   if (this.center === undefined) this.center = [104.06, 30.67];
    //   if (this.projection === undefined) this.projection = 'EPSG:4326';
    //   if (this.zoomAnimation === undefined) this.zoomAnimation = false;
    // }
    //   constructor(host: angular.IRootElementService) {}
    ViewComponent.prototype.$onInit = function () {
        // this.defaultGive();
        this.instance = new ol_1.View(this);
        this.host.instance.setView(this.instance);
    };
    ViewComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        constrainRotation: '<?',
        enableRotation: '<?',
        extent: '<?',
        maxResolution: '<?',
        minResolution: '<?',
        maxZoom: '<?',
        minZoom: '<?',
        resolution: '<?',
        resolutions: '<?',
        rotation: '<?',
        zoom: '<',
        zoomFactor: '<?',
        center: '<?',
        projection: '<?',
        zoomAnimation: '<?',
    },
    require: {
        host: "^" + map_component_1.default.name,
    },
    controller: ['$element', ViewComponent],
};
exports.default = __assign({ name: 'aolView' }, component);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));
__export(__webpack_require__(23));
__export(__webpack_require__(25));


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = ol.layer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var feature_component_1 = __webpack_require__(5);
var LineString_1 = __webpack_require__(27);
var Point_1 = __webpack_require__(28);
var Polygon_1 = __webpack_require__(14);
var GeometryLinestringComponent = /** @class */ (function () {
    function GeometryLinestringComponent() {
        this.componentType = 'geometry-linestring';
    }
    //   constructor() {
    //     // console.log('instancing aol-geometry-linestring');
    //   }
    GeometryLinestringComponent.prototype.$onInit = function () {
        this.instance = new LineString_1.default([]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryLinestringComponent.prototype.$onDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryLinestringComponent;
}());
exports.GeometryLinestringComponent = GeometryLinestringComponent;
var aolGeometryLinestringComponent = {
    bindings: {},
    require: {
        host: "^" + feature_component_1.default.name,
    },
    controller: [GeometryLinestringComponent],
};
exports.aolGeometryLinestring = __assign({ name: 'aolGeometryLinestring' }, aolGeometryLinestringComponent);
var GeometryPointComponent = /** @class */ (function () {
    function GeometryPointComponent() {
        this.componentType = 'geometry-point';
    }
    //   constructor() {
    //     // console.log('creating aol-geometry-point');
    //   }
    GeometryPointComponent.prototype.$onInit = function () {
        this.instance = new Point_1.default([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPointComponent.prototype.$onDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryPointComponent;
}());
exports.GeometryPointComponent = GeometryPointComponent;
var aolGeometryPointComponent = {
    bindings: {},
    require: {
        host: "^" + feature_component_1.default.name,
    },
    controller: [GeometryPointComponent],
};
exports.aolGeometryPoint = __assign({ name: 'aolGeometryPoint' }, aolGeometryPointComponent);
var GeometryPolygonComponent = /** @class */ (function () {
    function GeometryPolygonComponent() {
        this.componentType = 'geometry-polygon';
        //   $onDestroy() {
        //     // this.host.setGeometry(null);
        //   }
    }
    //   constructor() {
    //     // console.log('creating aol-geometry-polygon');
    //   }
    GeometryPolygonComponent.prototype.$onInit = function () {
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new Polygon_1.default([
            [
                [0, 0],
                [1, 0],
                [1, 1],
            ],
        ]);
        this.host.instance.setGeometry(this.instance);
    };
    return GeometryPolygonComponent;
}());
exports.GeometryPolygonComponent = GeometryPolygonComponent;
var aolGeometryPolygonComponent = {
    bindings: {},
    require: {
        host: "^" + feature_component_1.default.name,
    },
    controller: [GeometryPolygonComponent],
};
exports.aolGeometryPolygon = __assign({ name: 'aolGeometryPolygon' }, aolGeometryPolygonComponent);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = ol.geom.Polygon;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var index_1 = __webpack_require__(16);
angular.module('app', [index_1.default.name]).run([
    '$log',
    '$rootScope',
    function ($log, $rootScope) {
        $log.log('项目启动');
        $rootScope.map = {
            click: function () {
                console.log(arguments);
            },
            pointermove: function () {
                // console.log(arguments);
            },
            features: [],
            interaction: {
                drawend: function () {
                    console.log(arguments);
                    $rootScope.$apply(function () {
                        $rootScope.map.once = false;
                    });
                },
            },
            once: true,
            center: [120, 24],
            zoom: 6,
            layerGroup: {
                visible: true,
            },
            overlayer: {
                msg: '动态数据',
            },
            stroke: {
                width: 10,
                lineDash: [],
                lineDashOffset: 5,
                miterLimit: 50,
            },
            styleCircle: {
                radius: 20,
                fill: '#FF0000',
            },
            styleIcon: {
                src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1583685507&di=98d05a81529c7f119d619e4d5b572634&src=http://bpic.588ku.com/element_origin_min_pic/01/37/42/75573c4c4c4c3c6.jpg',
                opacity: 0.5,
                scale: 0.08,
                rotation: 1,
            },
            styleText: {
                text: 'hello Word',
                offsetY: -40,
            },
        };
        $rootScope.property = JSON.stringify($rootScope.map);
        $rootScope.reset = function () {
            angular.extend($rootScope.map, JSON.parse($rootScope.property));
        };
    },
]);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var map_component_1 = __webpack_require__(0);
var view_component_1 = __webpack_require__(10);
var feature_component_1 = __webpack_require__(5);
var index_1 = __webpack_require__(3);
var index_2 = __webpack_require__(11);
var geometry_component_1 = __webpack_require__(13);
var coordinate_component_1 = __webpack_require__(29);
var styles_1 = __webpack_require__(31);
var overlay_component_1 = __webpack_require__(42);
var interactions_1 = __webpack_require__(43);
var draw_component_1 = __webpack_require__(46);
var aolModule = angular.module('aol', []);
function registerComponent(component) {
    aolModule.component(component.name, component);
}
[
    map_component_1.default,
    view_component_1.default,
    /**图层组件 */
    index_1.aolLayerTile,
    index_1.aolLayerVector,
    index_1.aolLayerGroup,
    /**数据源组件 */
    index_2.aolSourceXyz,
    index_2.aolSourceOsm,
    index_2.aolSourceVector,
    /**要素组件 */
    feature_component_1.default,
    /**geo组件 */
    geometry_component_1.aolGeometryLinestring,
    geometry_component_1.aolGeometryPoint,
    geometry_component_1.aolGeometryPolygon,
    /**坐标组件 */
    coordinate_component_1.aolCoordinate,
    coordinate_component_1.aolCollectionCoordinates,
    /**样式组件 */
    styles_1.aolStyle,
    styles_1.aolStroke,
    styles_1.aolStyleCircle,
    styles_1.aolStyleIcon,
    styles_1.aolStyleText,
    styles_1.aolFill,
    /**domTOMap */
    overlay_component_1.aolOverlay,
    /**交互 */
    interactions_1.aolInteractionDefaults,
    draw_component_1.aolInteractionDraw,
    interactions_1.aolInteractionModify,
].forEach(function (component) {
    registerComponent(component);
});
exports.default = aolModule;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var source_component_1 = __webpack_require__(6);
var source_1 = __webpack_require__(18);
var layers_1 = __webpack_require__(3);
var SourceXYZComponent = /** @class */ (function (_super) {
    __extends(SourceXYZComponent, _super);
    function SourceXYZComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'sourceXYZComponent';
        return _this;
    }
    //   constructor(host: angular.IRootElementService) {
    //   }
    SourceXYZComponent.prototype.$onInit = function () {
        this.instance = new source_1.XYZ(this);
        this._register(this.instance);
    };
    SourceXYZComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.instance = new source_1.XYZ(this);
            this._register(this.instance);
        }
    };
    return SourceXYZComponent;
}(source_component_1.SourceComponent));
exports.SourceXYZComponent = SourceXYZComponent;
var component = {
    // template: `
    //           <div ng-include></div>
    //       `,
    bindings: __assign(__assign({}, source_component_1.sourceComponentConfig.bindings), { cacheSize: '<?', crossOrigin: '<?', opaque: '<?', projection: '<?', reprojectionErrorThreshold: '<?', minZoom: '<?', maxZoom: '<?', tileGrid: '<?', tileLoadFunction: '<?', tilePixelRatio: '<?', tileSize: '<?', tileUrlFunction: '<?', url: '<?', urls: '<?', wrapX: '<?', transition: '<?', zDirection: '<?' }),
    require: {
        host: "^" + layers_1.aolLayerTile.name,
    },
    controller: ['$element', SourceXYZComponent],
};
exports.aolSourceXyz = __assign({ name: 'aolSourceXyz' }, component);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = ol.source;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var layer_component_1 = __webpack_require__(7);
var layer_1 = __webpack_require__(12);
var LayerTileComponent = /** @class */ (function (_super) {
    __extends(LayerTileComponent, _super);
    function LayerTileComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    //     super(group || map);
    //   }
    LayerTileComponent.prototype.$onInit = function () {
        this.instance = new layer_1.Tile(this);
        _super.prototype.$onInit.call(this);
    };
    LayerTileComponent.prototype.$onChanges = function (changes) {
        _super.prototype.$onChanges.call(this, changes);
    };
    return LayerTileComponent;
}(layer_component_1.LayerComponent));
exports.LayerTileComponent = LayerTileComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: __assign(__assign({}, layer_component_1.layerComponentConfig.bindings), { preload: '<?', useInterimTilesOnError: '<?' }),
    require: layer_component_1.layerComponentConfig.require,
    controller: [LayerTileComponent],
};
exports.aolLayerTile = __assign({ name: 'aolLayerTile' }, component);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var layer_component_1 = __webpack_require__(7);
var layer_1 = __webpack_require__(12);
// import { Feature } from 'ol';
// import Point from 'ol/geom/Point';
var LayerVectorComponent = /** @class */ (function (_super) {
    __extends(LayerVectorComponent, _super);
    function LayerVectorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'LayerVectorComponent';
        return _this;
    }
    //   constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    //     super(group || map);
    //   }
    LayerVectorComponent.prototype.$onInit = function () {
        this.instance = new layer_1.Vector(this);
        _super.prototype.$onInit.call(this);
        // this.instance.setSource(
        //   new VectorSource({
        //     features: [new Feature(new Point([0, 0]))],
        //   }),
        // );
    };
    LayerVectorComponent.prototype.$onChanges = function (changes) {
        _super.prototype.$onChanges.call(this, changes);
    };
    return LayerVectorComponent;
}(layer_component_1.LayerComponent));
exports.LayerVectorComponent = LayerVectorComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: __assign(__assign({}, layer_component_1.layerComponentConfig.bindings), { renderOrder: '<?', renderBuffer: '<?', source: '<?', declutter: '<?', style: '<?', updateWhileAnimating: '<?', updateWhileInteracting: '<?' }),
    require: layer_component_1.layerComponentConfig.require,
    controller: [LayerVectorComponent],
};
exports.aolLayerVector = __assign({ name: 'aolLayerVector' }, component);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var layer_component_1 = __webpack_require__(7);
var Group_1 = __webpack_require__(22);
var LayerGroupComponent = /** @class */ (function (_super) {
    __extends(LayerGroupComponent, _super);
    function LayerGroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'LayerGroupComponent';
        return _this;
    }
    LayerGroupComponent.prototype.$onInit = function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group_1.default(this);
        _super.prototype.$onInit.call(this);
    };
    return LayerGroupComponent;
}(layer_component_1.LayerComponent));
exports.LayerGroupComponent = LayerGroupComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: __assign({}, layer_component_1.layerComponentConfig.bindings),
    require: layer_component_1.layerComponentConfig.require,
    controller: [LayerGroupComponent],
};
exports.aolLayerGroup = __assign({ name: 'aolLayerGroup' }, component);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = ol.layer.Group;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var source_component_1 = __webpack_require__(6);
var OSM_1 = __webpack_require__(24);
var layers_1 = __webpack_require__(3);
var SourceOSMComponent = /** @class */ (function (_super) {
    __extends(SourceOSMComponent, _super);
    function SourceOSMComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = "SourceOSMComponent";
        return _this;
    }
    SourceOSMComponent.prototype.$onInit = function () {
        this.instance = new OSM_1.default(this);
        this._register(this.instance);
    };
    SourceOSMComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.instance = new OSM_1.default(this);
            this._register(this.instance);
        }
    };
    return SourceOSMComponent;
}(source_component_1.SourceComponent));
exports.SourceOSMComponent = SourceOSMComponent;
var component = {
    // template: `
    //           <div ng-include></div>
    //       `,
    bindings: __assign(__assign({}, source_component_1.sourceComponentConfig.bindings), { cacheSize: '<?', crossOrigin: '<?', opaque: '<?', reprojectionErrorThreshold: '<?', maxZoom: '<?', tileLoadFunction: '<?', url: '<?', wrapX: '<?' }),
    require: {
        host: "^" + layers_1.aolLayerTile.name,
    },
    controller: [SourceOSMComponent],
};
exports.aolSourceOsm = __assign({ name: 'aolSourceOsm' }, component);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = ol.source.OSM;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var source_component_1 = __webpack_require__(6);
var layers_1 = __webpack_require__(3);
var Vector_1 = __webpack_require__(26);
var SourceVectorComponent = /** @class */ (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'SourceVectorComponent';
        return _this;
    }
    //   constructor(host: angular.IRootElementService) {
    //   }
    SourceVectorComponent.prototype.$onInit = function () {
        this.instance = new Vector_1.default(this);
        this._register(this.instance);
    };
    SourceVectorComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'features':
                        this.instance.addFeatures(changes[key].currentValue);
                        break;
                    default:
                        properties[key] = changes[key].currentValue;
                        break;
                }
            }
        }
        this.instance.setProperties(properties, false);
        // if (changes.hasOwnProperty('url')) {
        //   this.instance = new VectorSource(this);
        //   this._register(this.instance);
        // }
    };
    return SourceVectorComponent;
}(source_component_1.SourceComponent));
exports.SourceVectorComponent = SourceVectorComponent;
var component = {
    // template: `
    //           <div ng-include></div>
    //       `,
    bindings: __assign(__assign({}, source_component_1.sourceComponentConfig.bindings), { features: '<?', format: '<?', loader: '<?', overlaps: '<?', strategy: '<?', url: '<?', useSpatialIndex: '<?', wrapX: '<?' }),
    require: {
        host: "^" + layers_1.aolLayerVector.name,
    },
    controller: [SourceVectorComponent],
};
exports.aolSourceVector = __assign({ name: 'aolSourceVector' }, component);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = ol.source.Vector;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = ol.geom.LineString;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = ol.geom.Point;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var geometry_component_1 = __webpack_require__(13);
var proj_1 = __webpack_require__(30);
var view_component_1 = __webpack_require__(10);
var map_component_1 = __webpack_require__(0);
var CoordinateComponent = /** @class */ (function () {
    function CoordinateComponent() {
        this.srid = 'EPSG:4326';
    }
    CoordinateComponent.prototype.$onInit = function () {
        if (this.geometryPointHost) {
            this.host = this.geometryPointHost;
        }
        else if (this.viewHost) {
            this.host = this.viewHost;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
        this.$onChanges({});
        //    else if (overlayHost !== null) {
        //     this.host = overlayHost;
        //   }
    };
    CoordinateComponent.prototype.$onChanges = function (changes) {
        if (!this.host || !angular.isNumber(this.x) || !angular.isNumber(this.y))
            return;
        var referenceProjection;
        var referenceProjectionCode;
        var transformedCoordinates;
        referenceProjection = this.map.instance.getView().getProjection();
        referenceProjectionCode = referenceProjection
            ? referenceProjection.getCode()
            : 'EPSG:3857';
        if (this.srid === referenceProjectionCode) {
            transformedCoordinates = [this.x, this.y];
        }
        else {
            transformedCoordinates = proj_1.transform([this.x, this.y], this.srid, referenceProjectionCode);
        }
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'view':
                this.host.instance.setCenter(transformedCoordinates);
                break;
            // case "overlay":
            //   this.host.instance.setPosition(transformedCoordinates);
            //   break;
        }
    };
    return CoordinateComponent;
}());
exports.CoordinateComponent = CoordinateComponent;
var aolGeometryPolygonComponent = {
    bindings: {
        x: '<',
        y: '<',
        srid: '<?',
    },
    require: {
        viewHost: "?^" + view_component_1.default.name,
        geometryPointHost: "?^" + geometry_component_1.aolGeometryPoint.name,
        map: "^" + map_component_1.default.name,
    },
    controller: [CoordinateComponent],
};
exports.aolCoordinate = __assign({ name: 'aolCoordinate' }, aolGeometryPolygonComponent);
var CollectionCoordinatesComponent = /** @class */ (function () {
    function CollectionCoordinatesComponent() {
        this.srid = 'EPSG:4326';
    }
    CollectionCoordinatesComponent.prototype.$onInit = function () {
        // console.log('creating aol-collection-coordinates');
        if (!!this.geometryLinestring) {
            this.host = this.geometryLinestring;
        }
        else if (!!this.geometryPolygon) {
            this.host = this.geometryPolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
        this.$onChanges({});
    };
    CollectionCoordinatesComponent.prototype.$onChanges = function (changes) {
        if (!this.host || !(this.coordinates instanceof Array))
            return;
        var referenceProjection;
        var referenceProjectionCode;
        var transformedCoordinates;
        // console.log('coordinates change: ', this.coordinates);
        referenceProjection = this.map.instance.getView().getProjection();
        referenceProjectionCode = referenceProjection
            ? referenceProjection.getCode()
            : 'EPSG:3857';
        if (this.srid === referenceProjectionCode) {
            transformedCoordinates = this.coordinates;
        }
        else {
            transformedCoordinates = [];
            this.coordinates.forEach(function (coordinate) {
                transformedCoordinates.push(proj_1.transform(coordinate, this.srid, referenceProjectionCode));
            }.bind(this));
        }
        switch (this.host.componentType) {
            case 'geometry-linestring':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'geometry-polygon':
                this.host.instance.setCoordinates([transformedCoordinates]);
                break;
            default:
                throw new Error("aol-collection-coordinates' host is of unknown type: " +
                    this.host.componentType);
            // break;
        }
    };
    return CollectionCoordinatesComponent;
}());
exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
var aolCollectionCoordinatesComponent = {
    bindings: {
        coordinates: '<',
        srid: '<?',
    },
    require: {
        geometryPolygon: "?^" + geometry_component_1.aolGeometryPolygon.name,
        geometryLinestring: "?^" + geometry_component_1.aolGeometryLinestring.name,
        map: "^" + map_component_1.default.name,
    },
    controller: [CollectionCoordinatesComponent],
};
exports.aolCollectionCoordinates = __assign({ name: 'aolCollectionCoordinates' }, aolCollectionCoordinatesComponent);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = ol.proj;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(33));
__export(__webpack_require__(36));
__export(__webpack_require__(8));
__export(__webpack_require__(38));
__export(__webpack_require__(40));


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = ol.style.Style;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stroke_1 = __webpack_require__(34);
var style_component_1 = __webpack_require__(2);
var circle_component_1 = __webpack_require__(8);
var StrokeComponent = /** @class */ (function () {
    function StrokeComponent() {
        this.componentType = 'style-stroke';
    }
    // constructor() {}
    StrokeComponent.prototype.$onInit = function () {
        if (this.styleCircleHost) {
            this.host = this.styleCircleHost;
        }
        else if (this.styleHost) {
            this.host = this.styleHost;
        }
        else {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
        this.instance = new Stroke_1.default(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                break;
            default:
                break;
        }
    };
    // $postLink(){
    //     this.host.instance.setStyle(this.instance);
    // }
    //   update() {
    //     this.host.instance.changed();
    //   }
    StrokeComponent.prototype.$onDestroy = function () {
        this.host.instance.setStroke(null);
    };
    StrokeComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'color':
                        this.instance.setColor(changes[key].currentValue);
                        break;
                    case 'lineCap':
                        this.instance.setLineCap(changes[key].currentValue);
                        break;
                    case 'lineDash':
                        this.instance.setLineDash(changes[key].currentValue);
                        break;
                    case 'lineDashOffset':
                        this.instance.setLineDashOffset(changes[key].currentValue);
                        break;
                    case 'lineJoin':
                        this.instance.setLineJoin(changes[key].currentValue);
                        break;
                    case 'miterLimit':
                        this.instance.setMiterLimit(changes[key].currentValue);
                        break;
                    case 'width':
                        this.instance.setWidth(changes[key].currentValue);
                        break;
                    default:
                        break;
                }
            }
        }
        this.host.update();
    };
    return StrokeComponent;
}());
exports.StrokeComponent = StrokeComponent;
var aolStrokeComponent = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        color: '<?',
        lineCap: '<?',
        lineJoin: '<?',
        lineDash: '<?',
        lineDashOffset: '<?',
        miterLimit: '<?',
        width: '<?',
    },
    require: {
        styleHost: "?^" + style_component_1.aolStyle.name,
        styleCircleHost: "?^" + circle_component_1.aolStyleCircle.name
    },
    controller: [StrokeComponent],
};
exports.aolStroke = __assign({ name: 'aolStroke' }, aolStrokeComponent);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = ol.style.Stroke;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = ol.style.Circle;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_component_1 = __webpack_require__(2);
var Fill_1 = __webpack_require__(37);
var circle_component_1 = __webpack_require__(8);
var FillComponent = /** @class */ (function () {
    function FillComponent() {
        this.componentType = 'fill';
    }
    // constructor() {}
    FillComponent.prototype.$onInit = function () {
        if (this.styleCircleHost) {
            this.host = this.styleCircleHost;
        }
        else if (this.styleHost) {
            this.host = this.styleHost;
        }
        else {
            throw new Error('aol-fill must be applied to a Style or styleCircleHost or StyleText component');
        }
        this.instance = new Fill_1.default(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                break;
            default:
                break;
        }
    };
    // $postLink(){
    //     this.host.instance.setStyle(this.instance);
    // }
    //   update() {
    //     this.host.instance.changed();
    //   }
    FillComponent.prototype.$onDestroy = function () {
        this.host.instance.setFill(null);
    };
    FillComponent.prototype.$onChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        // this.host.instance.setFill(new Fill({color:changes['color'].currentValue}))
        this.instance = new Fill_1.default({ color: changes['color'].currentValue });
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                break;
            default:
                break;
        }
        this.host.update();
    };
    return FillComponent;
}());
exports.FillComponent = FillComponent;
var aolFillComponent = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        color: '<?',
    },
    require: {
        styleHost: "?^" + style_component_1.aolStyle.name,
        styleCircleHost: "?^" + circle_component_1.aolStyleCircle.name
    },
    controller: [FillComponent],
};
exports.aolFill = __assign({ name: 'aolFill' }, aolFillComponent);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = ol.style.Fill;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_component_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(39);
var styleIconComponent = /** @class */ (function () {
    function styleIconComponent() {
        this.componentType = 'style-icon';
    }
    // constructor() {}
    styleIconComponent.prototype.$onInit = function () {
        if (!this.host) {
            throw new Error('aol-style-icon must be applied to a style component');
        }
        this.instance = new Icon_1.default(this);
        this.host.instance.setImage(this.instance);
    };
    styleIconComponent.prototype.$onDestroy = function () {
        this.host.instance.setImage(null);
    };
    //@TODO: 增加其他属性的监听
    styleIconComponent.prototype.$onChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['opacity']) {
            this.instance.setOpacity(changes['opacity'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['src']) {
            this.instance = new Icon_1.default(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    return styleIconComponent;
}());
exports.styleIconComponent = styleIconComponent;
var aolStyleIconComponent = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        anchor: '<?',
        anchorOrigin: '<?',
        anchorXUnits: '<?',
        anchorYUnits: '<?',
        color: '<?',
        crossOrigin: '<?',
        img: '<?',
        offset: '<?',
        offsetOrigin: '<?',
        opacity: '<?',
        scale: '<?',
        rotateWithView: '<?',
        rotation: '<?',
        size: '<?',
        imgSize: '<?',
        src: '<?',
    },
    require: {
        host: "?^" + style_component_1.aolStyle.name,
    },
    controller: [styleIconComponent],
};
exports.aolStyleIcon = __assign({ name: 'aolStyleIcon' }, aolStyleIconComponent);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = ol.style.Icon;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_component_1 = __webpack_require__(2);
var Text_1 = __webpack_require__(41);
var styleTextComponent = /** @class */ (function () {
    function styleTextComponent() {
        this.componentType = 'style-icon';
    }
    // constructor() {}
    styleTextComponent.prototype.$onInit = function () {
        if (!this.host) {
            throw new Error('aol-style-icon must be applied to a style component');
        }
        this.instance = new Text_1.default(this);
        this.host.instance.setText(this.instance);
    };
    styleTextComponent.prototype.$onDestroy = function () {
        this.host.instance.setText(null);
    };
    //@TODO: 增加其他属性的监听
    styleTextComponent.prototype.$onChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['font']) {
            this.instance.setFont(changes['font'].currentValue);
        }
        if (changes['offsetX']) {
            this.instance.setOffsetX(changes['offsetX'].currentValue);
        }
        if (changes['offsetY']) {
            this.instance.setOffsetY(changes['offsetY'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['text']) {
            this.instance.setText(changes['text'].currentValue);
        }
        if (changes['textAlign']) {
            this.instance.setTextAlign(changes['textAlign'].currentValue);
        }
        if (changes['textBaseLine']) {
            this.instance.setTextBaseline(changes['textBaseLine'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    return styleTextComponent;
}());
exports.styleTextComponent = styleTextComponent;
var aolStyleTextComponent = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        font: '<?',
        maxAngle: '<?',
        offsetX: '<?',
        offsetY: '<?',
        overflow: '<?',
        placement: '<?',
        scale: '<?',
        rotateWithView: '<?',
        rotation: '<?',
        text: '<?',
        textAlign: '<?',
        textBaseline: '<?',
        fill: '<?',
        stroke: '<?',
        backgroundFill: '<?',
        backgroundStroke: '<?',
        padding: '<?',
    },
    require: {
        host: "?^" + style_component_1.aolStyle.name,
    },
    controller: [styleTextComponent],
};
exports.aolStyleText = __assign({ name: 'aolStyleText' }, aolStyleTextComponent);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = ol.style.Text;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ol_1 = __webpack_require__(4);
var map_component_1 = __webpack_require__(0);
var OverlayComponent = /** @class */ (function () {
    function OverlayComponent($element) {
        this.componentType = 'overlay';
        this.$element = $element;
    }
    OverlayComponent.prototype.$onInit = function () {
        /**@TODO: this.element , $element */
        if (this.$element[0]) {
            this.element = this.$element[0];
            this.instance = new ol_1.Overlay(this);
            this.host.instance.addOverlay(this.instance);
        }
    };
    OverlayComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            properties[key] = changes[key].currentValue;
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    OverlayComponent.prototype.$onDestroy = function () {
        if (this.instance) {
            this.host.instance.removeOverlay(this.instance);
        }
    };
    return OverlayComponent;
}());
exports.OverlayComponent = OverlayComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        id: '<?',
        element: '<?',
        offset: '<?',
        position: '<?',
        positioning: '<?',
        stopEvent: '<?',
        insertFirst: '<?',
        autoPan: '<?',
        autoPanAnimation: '<?',
        autoPanMargin: '<?',
        className: '<',
    },
    require: {
        host: "^" + map_component_1.default.name,
    },
    controller: ['$element', OverlayComponent],
};
exports.aolOverlay = __assign({ name: 'aolOverlay' }, component);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(44));
__export(__webpack_require__(45));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var interaction_1 = __webpack_require__(9);
var map_component_1 = __webpack_require__(0);
var DefaultInteractionComponent = /** @class */ (function () {
    function DefaultInteractionComponent() {
    }
    //   constructor() {}
    DefaultInteractionComponent.prototype.$onInit = function () {
        var _this = this;
        this.instance = interaction_1.defaults(this);
        this.instance.forEach(function (interaction) {
            return _this.host.instance.addInteraction(interaction);
        });
    };
    DefaultInteractionComponent.prototype.$onDestroy = function () {
        var _this = this;
        this.instance.forEach(function (interaction) {
            return _this.host.instance.removeInteraction(interaction);
        });
    };
    return DefaultInteractionComponent;
}());
exports.DefaultInteractionComponent = DefaultInteractionComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        altShiftDragRotate: '<?',
        onFocusOnly: '<?',
        doubleClickZoom: '<?',
        keyboard: '<?',
        mouseWheelZoom: '<?',
        shiftDragZoom: '<?',
        dragPan: '<?',
        pinchRotate: '<?',
        pinchZoom: '<?',
        zoomDelta: '<?',
        zoomDuration: '<',
    },
    require: {
        host: "^" + map_component_1.default.name,
    },
    controller: ['$element', DefaultInteractionComponent],
};
exports.aolInteractionDefaults = __assign({ name: 'aolInteractionDefaults' }, component);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var map_component_1 = __webpack_require__(0);
var interaction_1 = __webpack_require__(9);
var ModifyInteractionComponent = /** @class */ (function () {
    function ModifyInteractionComponent() {
        this.onModifyEnd = angular.noop;
        this.onModifyStart = angular.noop;
        this.onChange = angular.noop;
        this.onChangeActive = angular.noop;
        this.onPropertyChange = angular.noop;
    }
    //   constructor(private map: MapComponent) {}
    ModifyInteractionComponent.prototype.$onInit = function () {
        var _this = this;
        if (!this.source && !this.features) {
            console.error('The modify interaction requires features or a source');
            return;
        }
        this.instance = new interaction_1.Modify(this);
        this.instance.on('change', function (event) {
            return _this.onChange({ event: event });
        });
        this.instance.on('change:active', function (event) {
            return _this.onChangeActive({ event: event });
        });
        this.instance.on('propertychange', function (event) {
            return _this.onPropertyChange({ event: event });
        });
        this.instance.on('modifyend', function (event) {
            return _this.onModifyEnd({ event: event });
        });
        this.instance.on('modifystart', function (event) {
            return _this.onModifyStart({ event: event });
        });
        this.host.instance.addInteraction(this.instance);
    };
    ModifyInteractionComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            this.$onInit();
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'source':
                        this.$onDestroy();
                        this.$onInit();
                        break;
                    default:
                        properties[key] = changes[key].currentValue;
                        break;
                }
            }
        }
        this.instance.setProperties(properties, false);
    };
    ModifyInteractionComponent.prototype.$onDestroy = function () {
        this.host.instance.removeInteraction(this.instance);
    };
    return ModifyInteractionComponent;
}());
exports.ModifyInteractionComponent = ModifyInteractionComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        condition: '<',
        deleteCondition: '<?',
        insertVertexCondition: '<?',
        pixelTolerance: '<?',
        style: '<?',
        source: '<?',
        features: '<?',
        wrapX: '<?',
    },
    require: {
        host: "^" + map_component_1.default.name,
    },
    controller: ['$element', ModifyInteractionComponent],
};
exports.aolInteractionModify = __assign({ name: 'aolInteractionModify' }, component);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var interaction_1 = __webpack_require__(9);
var map_component_1 = __webpack_require__(0);
var draw_component_extend_1 = __webpack_require__(47);
var DrawInteractionComponent = /** @class */ (function (_super) {
    __extends(DrawInteractionComponent, _super);
    function DrawInteractionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = angular.noop;
        _this.onChangeActive = angular.noop;
        _this.onDrawEnd = angular.noop;
        _this.onDrawStart = angular.noop;
        _this.onPropertyChange = angular.noop;
        return _this;
    }
    //   constructor(private map: MapComponent) {}
    DrawInteractionComponent.prototype.$onInit = function () {
        var _this = this;
        _super.prototype.init.call(this, this.type);
        this.instance = new interaction_1.Draw(this);
        this.instance.on('change', function (event) { return _this.onChange({ event: event }); });
        this.instance.on('change:active', function (event) {
            return _this.onChangeActive({ event: event });
        });
        this.instance.on('drawend', function (event) {
            return _this.onDrawEnd({ event: event });
        });
        this.instance.on('drawstart', function (event) {
            return _this.onDrawStart({ event: event });
        });
        this.instance.on('propertychange', function (event) {
            return _this.onPropertyChange({ event: event });
        });
        this.host.instance.addInteraction(this.instance);
    };
    DrawInteractionComponent.prototype.$onChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'source':
                        this.$onDestroy();
                        this.$onInit();
                        break;
                    default:
                        properties[key] = changes[key].currentValue;
                        break;
                }
            }
        }
        this.instance.setProperties(properties, false);
    };
    DrawInteractionComponent.prototype.$onDestroy = function () {
        this.host.instance.removeInteraction(this.instance);
    };
    return DrawInteractionComponent;
}(draw_component_extend_1.DrawInteractionExtend));
exports.DrawInteractionComponent = DrawInteractionComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        type: '<',
        clickTolerance: '<?',
        features: '<?',
        source: '<?',
        dragVertexDelay: '<?',
        snapTolerance: '<?',
        stopClick: '<?',
        maxPoints: '<?',
        minPoints: '<?',
        finishCondition: '<?',
        style: '<?',
        geometryFunction: '<?',
        geometryName: '<?',
        condition: '<?',
        freehand: '<?',
        freehandCondition: '<?',
        wrapX: '<?',
        onChange: '&?',
        onChangeActive: '&?',
        onDrawEnd: '&?',
        onDrawStart: '&?',
        onPropertyChange: '&?',
    },
    require: {
        host: "^" + map_component_1.default.name,
    },
    controller: ['$element', DrawInteractionComponent],
};
exports.aolInteractionDraw = __assign({ name: 'aolInteractionDraw' }, component);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GeometryType_1 = __webpack_require__(48);
var Polygon_1 = __webpack_require__(14);
var DrawInteractionExtend = /** @class */ (function () {
    function DrawInteractionExtend() {
    }
    // geometryName?: string;
    // condition?: Condition;
    // freehand?: boolean;
    // freehandCondition?: Condition;
    // wrapX?: boolean;
    DrawInteractionExtend.prototype.init = function (type) {
        switch (type) {
            case 'Rectangle':
                this.__createRectangleParams();
                break;
            default:
                this.type = type;
                break;
        }
    };
    DrawInteractionExtend.prototype.__createRectangleParams = function () {
        this.maxPoints = 2;
        this.type = GeometryType_1.default.LINE_STRING;
        this.geometryFunction = function (coordinates, geometry) {
            //如果geometry对象不存在或者为空，则创建
            if (!geometry) {
                //多面几何图形下设置
                geometry = new Polygon_1.default([]);
            }
            // 开始坐标
            var start = coordinates[0];
            // 结束坐标
            var end = coordinates[1];
            // 根据开始与结束坐标绘制,从起始点，回到起始点
            geometry.setCoordinates([
                [start, [start[0], end[1]], end, [end[0], start[1]], start],
            ]);
            // 返回几何图形坐标进行渲染
            return geometry;
        };
    };
    return DrawInteractionExtend;
}());
exports.DrawInteractionExtend = DrawInteractionExtend;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = ol.geom.GeometryType;

/***/ })
/******/ ]);
//# sourceMappingURL=aol.js.map