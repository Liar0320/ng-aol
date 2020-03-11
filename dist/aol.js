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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
var ol_1 = __webpack_require__(5);
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
var feature_component_1 = __webpack_require__(8);
var layers_1 = __webpack_require__(4);
var style_1 = __webpack_require__(3);
// import { RenderFunction } from 'ol/layer/Layer';
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
        this.instance = new style_1.Style(this);
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
        zIndex: '<?',
    },
    require: {
        layerVectorHost: "?^" + layers_1.aolLayerVector.name,
        featureHost: "?^" + feature_component_1.default.name,
    },
    controller: [StyleComponent],
};
exports.aolStyle = __assign({ name: 'aolStyle' }, aolStyleComponent);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ol.style;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// export * from './layer.component';
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(23));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ol;

/***/ }),
/* 6 */
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
                switch (key) {
                    case 'prerender':
                        this.instance.un('prerender', changes[key].previousValue);
                        this.instance.on('prerender', changes[key].currentValue);
                        break;
                    case 'postrender':
                        this.instance.un('postrender', changes[key].previousValue);
                        this.instance.on('postrender', changes[key].currentValue);
                        break;
                    case 'source':
                        this.instance.setSource(changes[key].currentValue);
                        break;
                    default:
                        properties[key] = changes[key].currentValue;
                        break;
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
/* 7 */
/***/ (function(module, exports) {

module.exports = ol.interaction;

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
var ol_1 = __webpack_require__(5);
var sources_1 = __webpack_require__(14);
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = ol.source;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = ol.layer;

/***/ }),
/* 12 */
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
var style_1 = __webpack_require__(3);
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
        this.instance = new style_1.Circle(this);
        this.host.instance.setImage(this.instance);
    };
    styleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            this.instance = new style_1.Circle(this);
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
var ol_1 = __webpack_require__(5);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));
__export(__webpack_require__(24));
__export(__webpack_require__(25));


/***/ }),
/* 15 */
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
var feature_component_1 = __webpack_require__(8);
var geom_1 = __webpack_require__(16);
var GeometryLinestringComponent = /** @class */ (function () {
    function GeometryLinestringComponent() {
        this.componentType = 'geometry-linestring';
    }
    //   constructor() {
    //     // console.log('instancing aol-geometry-linestring');
    //   }
    GeometryLinestringComponent.prototype.$onInit = function () {
        this.instance = new geom_1.LineString([]);
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
        this.instance = new geom_1.Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
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
        this.instance = new geom_1.Polygon([
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
/* 16 */
/***/ (function(module, exports) {

module.exports = ol.geom;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var index_1 = __webpack_require__(18);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var map_component_1 = __webpack_require__(0);
var view_component_1 = __webpack_require__(13);
var feature_component_1 = __webpack_require__(8);
var index_1 = __webpack_require__(4);
var index_2 = __webpack_require__(14);
var geometry_component_1 = __webpack_require__(15);
var coordinate_component_1 = __webpack_require__(26);
var styles_1 = __webpack_require__(28);
var overlay_component_1 = __webpack_require__(33);
var interactions_1 = __webpack_require__(34);
var draw_component_1 = __webpack_require__(40);
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
    index_1.aolLayerWebgl,
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
    interactions_1.aolInteractionSelect,
].forEach(function (component) {
    registerComponent(component);
});
exports.default = aolModule;


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
var source_component_1 = __webpack_require__(9);
var source_1 = __webpack_require__(10);
var layers_1 = __webpack_require__(4);
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
var layer_component_1 = __webpack_require__(6);
var layer_1 = __webpack_require__(11);
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
var layer_component_1 = __webpack_require__(6);
var layer_1 = __webpack_require__(11);
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
/* 22 */
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
var layer_component_1 = __webpack_require__(6);
var layer_1 = __webpack_require__(11);
var LayerGroupComponent = /** @class */ (function (_super) {
    __extends(LayerGroupComponent, _super);
    function LayerGroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'LayerGroupComponent';
        return _this;
    }
    LayerGroupComponent.prototype.$onInit = function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new layer_1.Group(this);
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
var layer_component_1 = __webpack_require__(6);
var WebGLPoints_1 = __webpack_require__(42);
var LayerWebglComponent = /** @class */ (function (_super) {
    __extends(LayerWebglComponent, _super);
    function LayerWebglComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'LayerVectorComponent';
        _this.style = {
            symbol: {
                symbolType: 'circle',
                size: 6,
                color: '#CD853F',
                // [
                //   "interpolate",
                //   ["linear"],
                //   ["get", "webgltype"],
                //   "00",
                //   "#CD853F",
                //   "01", // 客船
                //   "#B0C4DE",
                //   "02", // 货船
                //   "#08B012",
                //   "03", // 液货船
                //   "#EA1600",
                //   "04", // 工程船
                //   "#FF8C00",
                //   "05", // 工作船
                //   "#D00BC5",
                //   "06", // 拖船
                //   "#2CD9DC",
                //   "0909", // 游艇
                //   "#00D28E",
                //   "0905", // 公务船
                //   "#F5F5F5",
                //   "0903", // 救助船
                //   "#FFFF00",
                //   "90", // 渔船
                //   "#1F4EC2"
                //   // "09", // 其他
                // ],
                // rotateWithView: false,
                offset: [0, 0],
            },
        };
        return _this;
    }
    //   constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    //     super(group || map);
    //   }
    LayerWebglComponent.prototype.$onInit = function () {
        this.instance = new WebGLPoints_1.default(this);
        _super.prototype.$onInit.call(this);
        // this.instance.setSource(
        //   new VectorSource({
        //     features: [new Feature(new Point([0, 0]))],
        //   }),
        // );
    };
    LayerWebglComponent.prototype.$onChanges = function (changes) {
        _super.prototype.$onChanges.call(this, changes);
    };
    return LayerWebglComponent;
}(layer_component_1.LayerComponent));
exports.LayerWebglComponent = LayerWebglComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: __assign(__assign({}, layer_component_1.layerComponentConfig.bindings), { style: '<?', className: '<?', opacity: '<?', visible: '<?', extent: '<?', zIndex: '<?', minResolution: '<?', maxResolution: '<?', source: '<?', disableHitDetection: '<?' }),
    require: layer_component_1.layerComponentConfig.require,
    controller: [LayerWebglComponent],
};
exports.aolLayerWebgl = __assign({ name: 'aolLayerWebgl' }, component);


/***/ }),
/* 24 */
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
var source_component_1 = __webpack_require__(9);
var source_1 = __webpack_require__(10);
var layers_1 = __webpack_require__(4);
var SourceOSMComponent = /** @class */ (function (_super) {
    __extends(SourceOSMComponent, _super);
    function SourceOSMComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentType = 'SourceOSMComponent';
        return _this;
    }
    SourceOSMComponent.prototype.$onInit = function () {
        this.instance = new source_1.OSM(this);
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
            this.instance = new source_1.OSM(this);
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
var source_component_1 = __webpack_require__(9);
var layers_1 = __webpack_require__(4);
var source_1 = __webpack_require__(10);
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
        if (this.layerVectorHost) {
            this.host = this.layerVectorHost;
        }
        else if (this.layerWebglHost) {
            this.host = this.layerWebglHost;
        }
        else {
            throw new Error('aol-source-vector must be applied to a Style or layerWebglHost or layerVectorHost component');
        }
        this.instance = new source_1.Vector(this);
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
        layerVectorHost: "^?" + layers_1.aolLayerVector.name,
        layerWebglHost: "^?" + layers_1.aolLayerWebgl.name,
    },
    controller: [SourceVectorComponent],
};
exports.aolSourceVector = __assign({ name: 'aolSourceVector' }, component);


/***/ }),
/* 26 */
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
var geometry_component_1 = __webpack_require__(15);
var proj_1 = __webpack_require__(27);
var view_component_1 = __webpack_require__(13);
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
/* 27 */
/***/ (function(module, exports) {

module.exports = ol.proj;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(12));
__export(__webpack_require__(31));
__export(__webpack_require__(32));


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
var style_1 = __webpack_require__(3);
var style_component_1 = __webpack_require__(2);
var circle_component_1 = __webpack_require__(12);
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
        this.instance = new style_1.Stroke(this);
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
        styleCircleHost: "?^" + circle_component_1.aolStyleCircle.name,
    },
    controller: [StrokeComponent],
};
exports.aolStroke = __assign({ name: 'aolStroke' }, aolStrokeComponent);


/***/ }),
/* 30 */
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
var style_1 = __webpack_require__(3);
var circle_component_1 = __webpack_require__(12);
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
        this.instance = new style_1.Fill(this);
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
        this.instance = new style_1.Fill({ color: changes['color'].currentValue });
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
        styleCircleHost: "?^" + circle_component_1.aolStyleCircle.name,
    },
    controller: [FillComponent],
};
exports.aolFill = __assign({ name: 'aolFill' }, aolFillComponent);


/***/ }),
/* 31 */
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
var style_1 = __webpack_require__(3);
var styleIconComponent = /** @class */ (function () {
    function styleIconComponent() {
        this.componentType = 'style-icon';
    }
    // constructor() {}
    styleIconComponent.prototype.$onInit = function () {
        if (!this.host) {
            throw new Error('aol-style-icon must be applied to a style component');
        }
        this.instance = new style_1.Icon(this);
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
            this.instance = new style_1.Icon(this);
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
/* 32 */
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
var style_1 = __webpack_require__(3);
var styleTextComponent = /** @class */ (function () {
    function styleTextComponent() {
        this.componentType = 'style-icon';
    }
    // constructor() {}
    styleTextComponent.prototype.$onInit = function () {
        if (!this.host) {
            throw new Error('aol-style-icon must be applied to a style component');
        }
        this.instance = new style_1.Text(this);
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
var ol_1 = __webpack_require__(5);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(37));


/***/ }),
/* 35 */
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
var interaction_1 = __webpack_require__(7);
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
var angular = __webpack_require__(1);
var map_component_1 = __webpack_require__(0);
var interaction_1 = __webpack_require__(7);
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
/* 37 */
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
var interaction_1 = __webpack_require__(7);
var map_component_1 = __webpack_require__(0);
var select_component_extend_1 = __webpack_require__(38);
var SelectInteractionComponent = /** @class */ (function (_super) {
    __extends(SelectInteractionComponent, _super);
    function SelectInteractionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelect = angular.noop;
        _this.onChange = angular.noop;
        _this.onPropertyChange = angular.noop;
        return _this;
    }
    //   constructor(private map: MapComponent) {}
    SelectInteractionComponent.prototype.$onInit = function () {
        var _this = this;
        if (!this.host) {
            console.error('The select interaction requires map component');
            return;
        }
        _super.prototype.initCondition.call(this);
        this.instance = new interaction_1.Select(this);
        this.instance.on('select', function (event) {
            return _this.onSelect({ event: event });
        });
        this.instance.on('change', function (event) {
            return _this.onChange({ event: event });
        });
        this.instance.on('propertychange', function (event) {
            return _this.onPropertyChange({ event: event });
        });
        this.host.instance.addInteraction(this.instance);
    };
    SelectInteractionComponent.prototype.$onChanges = function (changes) {
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
    };
    SelectInteractionComponent.prototype.$onDestroy = function () {
        this.host.instance.removeInteraction(this.instance);
    };
    return SelectInteractionComponent;
}(select_component_extend_1.SelectInteractionExtend));
exports.SelectInteractionComponent = SelectInteractionComponent;
var component = {
    //   template: `
    //         <div ng-include></div>
    //       `,
    bindings: {
        addCondition: '<',
        condition: '<?',
        layers: '<?',
        style: '<?',
        removeCondition: '<?',
        toggleCondition: '<?',
        multi: '<?',
        features: '<?',
        filter: '<?',
        wrapX: '<?',
        onChange: '&?',
        onSelect: '&?',
        onPropertyChange: '&?',
    },
    require: {
        host: "^" + map_component_1.default.name,
    },
    controller: ['$element', SelectInteractionComponent],
};
exports.aolInteractionSelect = __assign({ name: 'aolInteractionSelect' }, component);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var condition_1 = __webpack_require__(39);
// var conditionType:
//   | 'altKeyOnly'
//   | 'altShiftKeysOnly'
//   | 'click'
//   | 'doubleClick'
//   | 'focus'
//   | 'mouseActionButton'
//   | 'mouseOnly'
//   | 'noModifierKeys'
//   | 'penOnly'
//   | 'platformModifierKeyOnly'
//   | 'pointerMove'
//   | 'primaryAction'
//   | 'shiftKeyOnly'
//   | 'singleClick'
//   | 'targetNotEditable'
//   | 'touchOnly';
var SelectInteractionExtend = /** @class */ (function () {
    function SelectInteractionExtend() {
    }
    /**初始化condition状态 */
    SelectInteractionExtend.prototype.initCondition = function () {
        var key = this.condition;
        if (typeof key === 'function')
            return key;
        switch (key) {
            case 'altKeyOnly':
                this.condition = condition_1.altKeyOnly;
                break;
            case 'altShiftKeysOnly':
                this.condition = condition_1.altShiftKeysOnly;
                break;
            case 'click':
                this.condition = condition_1.click;
                break;
            case 'doubleClick':
                this.condition = condition_1.doubleClick;
                break;
            case 'focus':
                this.condition = condition_1.focus;
                break;
            case 'mouseActionButton':
                this.condition = condition_1.mouseActionButton;
                break;
            case 'mouseOnly':
                this.condition = condition_1.mouseOnly;
                break;
            case 'noModifierKeys':
                this.condition = condition_1.noModifierKeys;
                break;
            case 'penOnly':
                this.condition = condition_1.penOnly;
                break;
            case 'platformModifierKeyOnly':
                this.condition = condition_1.platformModifierKeyOnly;
                break;
            case 'pointerMove':
                this.condition = condition_1.pointerMove;
                break;
            case 'primaryAction':
                this.condition = condition_1.primaryAction;
                break;
            case 'shiftKeyOnly':
                this.condition = condition_1.shiftKeyOnly;
                break;
            case 'singleClick':
                this.condition = condition_1.singleClick;
                break;
            case 'targetNotEditable':
                this.condition = condition_1.targetNotEditable;
                break;
            case 'touchOnly':
                this.condition = condition_1.touchOnly;
                break;
            default:
                this.condition = condition_1.click;
                break;
        }
    };
    return SelectInteractionExtend;
}());
exports.SelectInteractionExtend = SelectInteractionExtend;
var conditionType;
(function (conditionType) {
    conditionType["altKeyOnly"] = "altKeyOnly";
    conditionType["altShiftKeysOnly"] = "altShiftKeysOnly";
    conditionType["click"] = "click";
    conditionType["doubleClick"] = "doubleClick";
    conditionType["focus"] = "focus";
    conditionType["mouseActionButton"] = "mouseActionButton";
    conditionType["mouseOnly"] = "mouseOnly";
    conditionType["noModifierKeys"] = "noModifierKeys";
    conditionType["penOnly"] = "penOnly";
    conditionType["platformModifierKeyOnly"] = "platformModifierKeyOnly";
    conditionType["pointerMove"] = "pointerMove";
    conditionType["primaryAction"] = "primaryAction";
    conditionType["shiftKeyOnly"] = "shiftKeyOnly";
    conditionType["singleClick"] = "singleClick";
    conditionType["targetNotEditable"] = "targetNotEditable";
    conditionType["touchOnly"] = "touchOnly";
})(conditionType || (conditionType = {}));


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = ol.events.condition;

/***/ }),
/* 40 */
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
var interaction_1 = __webpack_require__(7);
var map_component_1 = __webpack_require__(0);
var draw_component_extend_1 = __webpack_require__(41);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var geom_1 = __webpack_require__(16);
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
        this.type = 'LineString';
        this.geometryFunction = function (coordinates, geometry) {
            //如果geometry对象不存在或者为空，则创建
            if (!geometry) {
                //多面几何图形下设置
                geometry = new geom_1.Polygon([]);
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/ol/obj.js
/**
 * @module ol/obj
 */
/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 * See https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign.
 *
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
var obj_assign = (typeof Object.assign === 'function') ? Object.assign : function (target, var_sources) {
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var output = Object(target);
    for (var i = 1, ii = arguments.length; i < ii; ++i) {
        var source = arguments[i];
        if (source !== undefined && source !== null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    output[key] = source[key];
                }
            }
        }
    }
    return output;
};
/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */
function clear(object) {
    for (var property in object) {
        delete object[property];
    }
}
/**
 * Polyfill for Object.values().  Get an array of property values from an object.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 *
 * @param {!Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */
var getValues = (typeof Object.values === 'function') ? Object.values : function (object) {
    var values = [];
    for (var property in object) {
        values.push(object[property]);
    }
    return values;
};
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
function isEmpty(object) {
    var property;
    for (property in object) {
        return false;
    }
    return !property;
}
//# sourceMappingURL=obj.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl.js
/**
 * @module ol/webgl
 */
/**
 * Constants taken from goog.webgl
 */
/**
 * Used by {@link module:ol/webgl/Helper~WebGLHelper} for buffers containing vertices data, such as
 * position, color, texture coordinate, etc. These vertices are then referenced by an index buffer
 * to be drawn on screen (see {@link module:ol/webgl.ELEMENT_ARRAY_BUFFER}).
 * @const
 * @type {number}
 * @api
 */
var ARRAY_BUFFER = 0x8892;
/**
 * Used by {@link module:ol/webgl/Helper~WebGLHelper} for buffers containing indices data.
 * Index buffers are essentially lists of references to vertices defined in a vertex buffer
 * (see {@link module:ol/webgl.ARRAY_BUFFER}), and define the primitives (triangles) to be drawn.
 * @const
 * @type {number}
 * @api
 */
var ELEMENT_ARRAY_BUFFER = 0x8893;
/**
 * Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.
 * @const
 * @type {number}
 * @api
 */
var STREAM_DRAW = 0x88E0;
/**
 * Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.
 * @const
 * @type {number}
 * @api
 */
var STATIC_DRAW = 0x88E4;
/**
 * Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.
 * @const
 * @type {number}
 * @api
 */
var DYNAMIC_DRAW = 0x88E8;
/**
 * @const
 * @type {number}
 */
var UNSIGNED_BYTE = 0x1401;
/**
 * @const
 * @type {number}
 */
var UNSIGNED_SHORT = 0x1403;
/**
 * @const
 * @type {number}
 */
var UNSIGNED_INT = 0x1405;
/**
 * @const
 * @type {number}
 */
var FLOAT = 0x1406;
/** end of goog.webgl constants
 */
/**
 * @const
 * @type {Array<string>}
 */
var CONTEXT_IDS = [
    'experimental-webgl',
    'webgl',
    'webkit-3d',
    'moz-webgl'
];
/**
 * @param {HTMLCanvasElement} canvas Canvas.
 * @param {Object=} opt_attributes Attributes.
 * @return {WebGLRenderingContext} WebGL rendering context.
 */
function getContext(canvas, opt_attributes) {
    var ii = CONTEXT_IDS.length;
    for (var i = 0; i < ii; ++i) {
        try {
            var context = canvas.getContext(CONTEXT_IDS[i], opt_attributes);
            if (context) {
                return /** @type {!WebGLRenderingContext} */ (context);
            }
        }
        catch (e) {
            // pass
        }
    }
    return null;
}
/**
 * @type {Array<string>}
 */
var supportedExtensions;
/**
 * @return {Array<string>} List of supported WebGL extensions.
 */
function getSupportedExtensions() {
    if (!supportedExtensions) {
        var canvas = document.createElement('canvas');
        var gl = getContext(canvas);
        if (gl) {
            supportedExtensions = gl.getSupportedExtensions();
        }
    }
    return supportedExtensions;
}
//# sourceMappingURL=webgl.js.map
// CONCATENATED MODULE: ./node_modules/ol/util.js
/**
 * @module ol/util
 */
/**
 * @return {?} Any return.
 */
function util_abstract() {
    return /** @type {?} */ ((function () {
        throw new Error('Unimplemented abstract method.');
    })());
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */
var uidCounter_ = 0;
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */
function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
/**
 * OpenLayers version.
 * @type {string}
 */
var VERSION = '6.2.1';
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./node_modules/ol/AssertionError.js
var __extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/AssertionError
 */

/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */
var AssertionError_AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    /**
     * @param {number} code Error code.
     */
    function AssertionError(code) {
        var _this = this;
        var path = VERSION === 'latest' ? VERSION : 'v' + VERSION.split('-')[0];
        var message = 'Assertion failed. See https://openlayers.org/en/' + path +
            '/doc/errors/#' + code + ' for details.';
        _this = _super.call(this, message) || this;
        /**
         * Error code. The meaning of the code can be found on
         * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
         * the version found in the OpenLayers script's header comment if a version
         * other than the latest is used).
         * @type {number}
         * @api
         */
        _this.code = code;
        /**
         * @type {string}
         */
        _this.name = 'AssertionError';
        // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40
        _this.message = message;
        return _this;
    }
    return AssertionError;
}(Error));
/* harmony default export */ var ol_AssertionError = (AssertionError_AssertionError);
//# sourceMappingURL=AssertionError.js.map
// CONCATENATED MODULE: ./node_modules/ol/asserts.js
/**
 * @module ol/asserts
 */

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
function assert(assertion, errorCode) {
    if (!assertion) {
        throw new ol_AssertionError(errorCode);
    }
}
//# sourceMappingURL=asserts.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl/Buffer.js
/**
 * @module ol/webgl/Buffer
 */



/**
 * Used to describe the intended usage for the data: `STATIC_DRAW`, `STREAM_DRAW`
 * or `DYNAMIC_DRAW`.
 * @enum {number}
 */
var BufferUsage = {
    STATIC_DRAW: STATIC_DRAW,
    STREAM_DRAW: STREAM_DRAW,
    DYNAMIC_DRAW: DYNAMIC_DRAW
};
/**
 * @classdesc
 * Object used to store an array of data as well as usage information for that data.
 * Stores typed arrays internally, either Float32Array or Uint16/32Array depending on
 * the buffer type (ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER) and available extensions.
 *
 * To populate the array, you can either use:
 * * A size using `#ofSize(buffer)`
 * * An `ArrayBuffer` object using `#fromArrayBuffer(buffer)`
 * * A plain array using `#fromArray(array)`
 *
 * Note:
 * See the documentation of [WebGLRenderingContext.bufferData](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
 * for more info on buffer usage.
 * @api
 */
var Buffer_WebGLArrayBuffer = /** @class */ (function () {
    /**
     * @param {number} type Buffer type, either ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
     * @param {number=} opt_usage Intended usage, either `STATIC_DRAW`, `STREAM_DRAW` or `DYNAMIC_DRAW`.
     * Default is `DYNAMIC_DRAW`.
     */
    function WebGLArrayBuffer(type, opt_usage) {
        /**
         * @private
         * @type {Float32Array|Uint32Array}
         */
        this.array = null;
        /**
         * @private
         * @type {number}
         */
        this.type = type;
        assert(type === ARRAY_BUFFER || type === ELEMENT_ARRAY_BUFFER, 62);
        /**
         * @private
         * @type {number}
         */
        this.usage = opt_usage !== undefined ? opt_usage : BufferUsage.STATIC_DRAW;
    }
    /**
     * Populates the buffer with an array of the given size (all values will be zeroes).
     * @param {number} size Array size
     */
    WebGLArrayBuffer.prototype.ofSize = function (size) {
        this.array = new (getArrayClassForType(this.type))(size);
    };
    /**
     * Populates the buffer with an array of the given size (all values will be zeroes).
     * @param {Array<number>} array Numerical array
     */
    WebGLArrayBuffer.prototype.fromArray = function (array) {
        this.array = (getArrayClassForType(this.type)).from(array);
    };
    /**
     * Populates the buffer with a raw binary array buffer.
     * @param {ArrayBuffer} buffer Raw binary buffer to populate the array with. Note that this buffer must have been
     * initialized for the same typed array class.
     */
    WebGLArrayBuffer.prototype.fromArrayBuffer = function (buffer) {
        this.array = new (getArrayClassForType(this.type))(buffer);
    };
    /**
     * @return {number} Buffer type.
     */
    WebGLArrayBuffer.prototype.getType = function () {
        return this.type;
    };
    /**
     * Will return null if the buffer was not initialized
     * @return {Float32Array|Uint32Array} Array.
     */
    WebGLArrayBuffer.prototype.getArray = function () {
        return this.array;
    };
    /**
     * @return {number} Usage.
     */
    WebGLArrayBuffer.prototype.getUsage = function () {
        return this.usage;
    };
    /**
     * Will return 0 if the buffer is not initialized
     * @return {number} Array size
     */
    WebGLArrayBuffer.prototype.getSize = function () {
        return this.array ? this.array.length : 0;
    };
    return WebGLArrayBuffer;
}());
/**
 * Returns a typed array constructor based on the given buffer type
 * @param {number} type Buffer type, either ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
 * @returns {Float32ArrayConstructor|Uint32ArrayConstructor} The typed array class to use for this buffer.
 */
function getArrayClassForType(type) {
    switch (type) {
        case ARRAY_BUFFER:
            return Float32Array;
        case ELEMENT_ARRAY_BUFFER:
            return Uint32Array;
        default:
            return Float32Array;
    }
}
/* harmony default export */ var Buffer = (Buffer_WebGLArrayBuffer);
//# sourceMappingURL=Buffer.js.map
// CONCATENATED MODULE: ./node_modules/ol/Disposable.js
/**
 * @module ol/Disposable
 */
/**
 * @classdesc
 * Objects that need to clean up after themselves.
 */
var Disposable = /** @class */ (function () {
    function Disposable() {
        /**
         * The object has already been disposed.
         * @type {boolean}
         * @private
         */
        this.disposed_ = false;
    }
    /**
     * Clean up.
     */
    Disposable.prototype.dispose = function () {
        if (!this.disposed_) {
            this.disposed_ = true;
            this.disposeInternal();
        }
    };
    /**
     * Extension point for disposable objects.
     * @protected
     */
    Disposable.prototype.disposeInternal = function () { };
    return Disposable;
}());
/* harmony default export */ var ol_Disposable = (Disposable);
//# sourceMappingURL=Disposable.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl/ContextEventType.js
/**
 * @module ol/webgl/ContextEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ var ContextEventType = ({
    LOST: 'webglcontextlost',
    RESTORED: 'webglcontextrestored'
});
//# sourceMappingURL=ContextEventType.js.map
// CONCATENATED MODULE: ./node_modules/ol/transform.js
/**
 * @module ol/transform
 */

/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */
/**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */
/**
 * @private
 * @type {Transform}
 */
var tmp_ = new Array(6);
/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */
function create() {
    return [1, 0, 0, 1, 0, 0];
}
/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */
function transform_reset(transform) {
    return set(transform, 1, 0, 0, 1, 0, 0);
}
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */
function multiply(transform1, transform2) {
    var a1 = transform1[0];
    var b1 = transform1[1];
    var c1 = transform1[2];
    var d1 = transform1[3];
    var e1 = transform1[4];
    var f1 = transform1[5];
    var a2 = transform2[0];
    var b2 = transform2[1];
    var c2 = transform2[2];
    var d2 = transform2[3];
    var e2 = transform2[4];
    var f2 = transform2[5];
    transform1[0] = a1 * a2 + c1 * b2;
    transform1[1] = b1 * a2 + d1 * b2;
    transform1[2] = a1 * c2 + c1 * d2;
    transform1[3] = b1 * c2 + d1 * d2;
    transform1[4] = a1 * e2 + c1 * f2 + e1;
    transform1[5] = b1 * e2 + d1 * f2 + f1;
    return transform1;
}
/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */
function set(transform, a, b, c, d, e, f) {
    transform[0] = a;
    transform[1] = b;
    transform[2] = c;
    transform[3] = d;
    transform[4] = e;
    transform[5] = f;
    return transform;
}
/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */
function setFromArray(transform1, transform2) {
    transform1[0] = transform2[0];
    transform1[1] = transform2[1];
    transform1[2] = transform2[2];
    transform1[3] = transform2[3];
    transform1[4] = transform2[4];
    transform1[5] = transform2[5];
    return transform1;
}
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */
function apply(transform, coordinate) {
    var x = coordinate[0];
    var y = coordinate[1];
    coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
    coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
    return coordinate;
}
/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */
function rotate(transform, angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}
/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */
function scale(transform, x, y) {
    return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}
/**
 * Creates a scale transform.
 * @param {!Transform} target Transform to overwrite.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scale transform.
 */
function makeScale(target, x, y) {
    return set(target, x, 0, 0, y, 0, 0);
}
/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */
function translate(transform, dx, dy) {
    return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */
function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    transform[0] = sx * cos;
    transform[1] = sy * sin;
    transform[2] = -sx * sin;
    transform[3] = sy * cos;
    transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform;
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as `transform` porperty of an HTMLElement's style.
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {string} The composite css transform.
 * @api
 */
function composeCssTransform(dx1, dy1, sx, sy, angle, dx2, dy2) {
    return transform_toString(compose(create(), dx1, dy1, sx, sy, angle, dx2, dy2));
}
/**
 * Invert the given transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (source) transform.
 */
function invert(source) {
    return makeInverse(source, source);
}
/**
 * Invert the given transform.
 * @param {!Transform} target Transform to be set as the inverse of
 *     the source transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (target) transform.
 */
function makeInverse(target, source) {
    var det = determinant(source);
    assert(det !== 0, 32); // Transformation matrix cannot be inverted
    var a = source[0];
    var b = source[1];
    var c = source[2];
    var d = source[3];
    var e = source[4];
    var f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
}
/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */
function determinant(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
}
/**
 * A string version of the transform.  This can be used
 * for CSS transforms.
 * @param {!Transform} mat Matrix.
 * @return {string} The transform as a string.
 */
function transform_toString(mat) {
    return 'matrix(' + mat.join(', ') + ')';
}
//# sourceMappingURL=transform.js.map
// CONCATENATED MODULE: ./node_modules/ol/vec/mat4.js
/**
 * @module ol/vec/mat4
 */
/**
 * @return {Array<number>} "4x4 matrix representing a 3D identity transform."
 */
function mat4_create() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
/**
 * @param {Array<number>} mat4 Flattened 4x4 matrix receiving the result.
 * @param {import("../transform.js").Transform} transform Transformation matrix.
 * @return {Array<number>} "2D transformation matrix as flattened 4x4 matrix."
 */
function fromTransform(mat4, transform) {
    mat4[0] = transform[0];
    mat4[1] = transform[1];
    mat4[4] = transform[2];
    mat4[5] = transform[3];
    mat4[12] = transform[4];
    mat4[13] = transform[5];
    return mat4;
}
//# sourceMappingURL=mat4.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl/PostProcessingPass.js
/**
 * @module ol/webgl/PostProcessingPass
 */
var DEFAULT_VERTEX_SHADER = "\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n";
var DEFAULT_FRAGMENT_SHADER = "\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord);\n  }\n";
/**
 * @typedef {Object} Options
 * @property {WebGLRenderingContext} webGlContext WebGL context; mandatory.
 * @property {number} [scaleRatio] Scale ratio; if < 1, the post process will render to a texture smaller than
 * the main canvas that will then be sampled up (useful for saving resource on blur steps).
 * @property {string} [vertexShader] Vertex shader source
 * @property {string} [fragmentShader] Fragment shader source
 * @property {Object.<string,import("./Helper").UniformValue>} [uniforms] Uniform definitions for the post process step
 */
/**
 * @typedef {Object} UniformInternalDescription
 * @property {import("./Helper").UniformValue} value Value
 * @property {number} location Location
 * @property {WebGLTexture} [texture] Texture
 * @private
 */
/**
 * @classdesc
 * This class is used to define Post Processing passes with custom shaders and uniforms.
 * This is used internally by {@link module:ol/webgl/Helper~WebGLHelper}.
 *
 * Please note that the final output on the DOM canvas is expected to have premultiplied alpha, which means that
 * a pixel which is 100% red with an opacity of 50% must have a color of (r=0.5, g=0, b=0, a=0.5).
 * Failing to provide pixel colors with premultiplied alpha will result in render anomalies.
 *
 * The default post-processing pass does *not* multiply color values with alpha value, it expects color values to be
 * premultiplied.
 *
 * Default shaders are shown hereafter:
 *
 * * Vertex shader:
 *
 *   ```
 *   precision mediump float;
 *
 *   attribute vec2 a_position;
 *   varying vec2 v_texCoord;
 *   varying vec2 v_screenCoord;
 *
 *   uniform vec2 u_screenSize;
 *
 *   void main() {
 *     v_texCoord = a_position * 0.5 + 0.5;
 *     v_screenCoord = v_texCoord * u_screenSize;
 *     gl_Position = vec4(a_position, 0.0, 1.0);
 *   }
 *   ```
 *
 * * Fragment shader:
 *
 *   ```
 *   precision mediump float;
 *
 *   uniform sampler2D u_image;
 *
 *   varying vec2 v_texCoord;
 *
 *   void main() {
 *     gl_FragColor = texture2D(u_image, v_texCoord);
 *   }
 *   ```
 *
 * @api
 */
var WebGLPostProcessingPass = /** @class */ (function () {
    /**
     * @param {Options} options Options.
     */
    function WebGLPostProcessingPass(options) {
        this.gl_ = options.webGlContext;
        var gl = this.gl_;
        this.scaleRatio_ = options.scaleRatio || 1;
        this.renderTargetTexture_ = gl.createTexture();
        this.renderTargetTextureSize_ = null;
        this.frameBuffer_ = gl.createFramebuffer();
        // compile the program for the frame buffer
        // TODO: make compilation errors show up
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, options.vertexShader || DEFAULT_VERTEX_SHADER);
        gl.compileShader(vertexShader);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, options.fragmentShader || DEFAULT_FRAGMENT_SHADER);
        gl.compileShader(fragmentShader);
        this.renderTargetProgram_ = gl.createProgram();
        gl.attachShader(this.renderTargetProgram_, vertexShader);
        gl.attachShader(this.renderTargetProgram_, fragmentShader);
        gl.linkProgram(this.renderTargetProgram_);
        // bind the vertices buffer for the frame buffer
        this.renderTargetVerticesBuffer_ = gl.createBuffer();
        var verticesArray = [
            -1, -1,
            1, -1,
            -1, 1,
            1, -1,
            1, 1,
            -1, 1
        ];
        gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesArray), gl.STATIC_DRAW);
        this.renderTargetAttribLocation_ = gl.getAttribLocation(this.renderTargetProgram_, 'a_position');
        this.renderTargetUniformLocation_ = gl.getUniformLocation(this.renderTargetProgram_, 'u_screenSize');
        this.renderTargetTextureLocation_ = gl.getUniformLocation(this.renderTargetProgram_, 'u_image');
        /**
         * Holds info about custom uniforms used in the post processing pass
         * @type {Array<UniformInternalDescription>}
         * @private
         */
        this.uniforms_ = [];
        options.uniforms && Object.keys(options.uniforms).forEach(function (name) {
            this.uniforms_.push({
                value: options.uniforms[name],
                location: gl.getUniformLocation(this.renderTargetProgram_, name)
            });
        }.bind(this));
    }
    /**
     * Get the WebGL rendering context
     * @return {WebGLRenderingContext} The rendering context.
     * @api
     */
    WebGLPostProcessingPass.prototype.getGL = function () {
        return this.gl_;
    };
    /**
     * Initialize the render target texture of the post process, make sure it is at the
     * right size and bind it as a render target for the next draw calls.
     * The last step to be initialized will be the one where the primitives are rendered.
     * @param {import("../PluggableMap.js").FrameState} frameState current frame state
     * @api
     */
    WebGLPostProcessingPass.prototype.init = function (frameState) {
        var gl = this.getGL();
        var textureSize = [
            gl.drawingBufferWidth * this.scaleRatio_,
            gl.drawingBufferHeight * this.scaleRatio_
        ];
        // rendering goes to my buffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.getFrameBuffer());
        gl.viewport(0, 0, textureSize[0], textureSize[1]);
        // if size has changed: adjust canvas & render target texture
        if (!this.renderTargetTextureSize_ ||
            this.renderTargetTextureSize_[0] !== textureSize[0] || this.renderTargetTextureSize_[1] !== textureSize[1]) {
            this.renderTargetTextureSize_ = textureSize;
            // create a new texture
            var level = 0;
            var internalFormat = gl.RGBA;
            var border = 0;
            var format = gl.RGBA;
            var type = gl.UNSIGNED_BYTE;
            var data = null;
            gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, textureSize[0], textureSize[1], border, format, type, data);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            // bind the texture to the framebuffer
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.renderTargetTexture_, 0);
        }
    };
    /**
     * Render to the next postprocessing pass (or to the canvas if final pass).
     * @param {import("../PluggableMap.js").FrameState} frameState current frame state
     * @param {WebGLPostProcessingPass} [nextPass] Next pass, optional
     * @api
     */
    WebGLPostProcessingPass.prototype.apply = function (frameState, nextPass) {
        var gl = this.getGL();
        var size = frameState.size;
        gl.bindFramebuffer(gl.FRAMEBUFFER, nextPass ? nextPass.getFrameBuffer() : null);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
        // render the frame buffer to the canvas
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
        gl.useProgram(this.renderTargetProgram_);
        gl.enableVertexAttribArray(this.renderTargetAttribLocation_);
        gl.vertexAttribPointer(this.renderTargetAttribLocation_, 2, gl.FLOAT, false, 0, 0);
        gl.uniform2f(this.renderTargetUniformLocation_, size[0], size[1]);
        gl.uniform1i(this.renderTargetTextureLocation_, 0);
        this.applyUniforms(frameState);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    /**
     * @returns {WebGLFramebuffer} Frame buffer
     * @api
     */
    WebGLPostProcessingPass.prototype.getFrameBuffer = function () {
        return this.frameBuffer_;
    };
    /**
     * Sets the custom uniforms based on what was given in the constructor.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @private
     */
    WebGLPostProcessingPass.prototype.applyUniforms = function (frameState) {
        var gl = this.getGL();
        var value;
        var textureSlot = 1;
        this.uniforms_.forEach(function (uniform) {
            value = typeof uniform.value === 'function' ? uniform.value(frameState) : uniform.value;
            // apply value based on type
            if (value instanceof HTMLCanvasElement || value instanceof ImageData) {
                // create a texture & put data
                if (!uniform.texture) {
                    uniform.texture = gl.createTexture();
                }
                gl.activeTexture(gl["TEXTURE" + textureSlot]);
                gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                if (value instanceof ImageData) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, value.width, value.height, 0, gl.UNSIGNED_BYTE, new Uint8Array(value.data));
                }
                else {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, value);
                }
                // fill texture slots
                gl.uniform1i(uniform.location, textureSlot++);
            }
            else if (Array.isArray(value)) {
                switch (value.length) {
                    case 2:
                        gl.uniform2f(uniform.location, value[0], value[1]);
                        return;
                    case 3:
                        gl.uniform3f(uniform.location, value[0], value[1], value[2]);
                        return;
                    case 4:
                        gl.uniform4f(uniform.location, value[0], value[1], value[2], value[3]);
                        return;
                    default: return;
                }
            }
            else if (typeof value === 'number') {
                gl.uniform1f(uniform.location, value);
            }
        });
    };
    return WebGLPostProcessingPass;
}());
/* harmony default export */ var PostProcessingPass = (WebGLPostProcessingPass);
//# sourceMappingURL=PostProcessingPass.js.map
// CONCATENATED MODULE: ./node_modules/ol/array.js
/**
 * @module ol/array
 */
/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function=} opt_comparator Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
function binarySearch(haystack, needle, opt_comparator) {
    var mid, cmp;
    var comparator = opt_comparator || numberSafeCompareFunction;
    var low = 0;
    var high = haystack.length;
    var found = false;
    while (low < high) {
        /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
         * to double (which gives the wrong results). */
        mid = low + (high - low >> 1);
        cmp = +comparator(haystack[mid], needle);
        if (cmp < 0.0) { /* Too low. */
            low = mid + 1;
        }
        else { /* Key found or too high */
            high = mid;
            found = !cmp;
        }
    }
    /* Key not found. */
    return found ? low : ~low;
}
/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */
function numberSafeCompareFunction(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
/**
 * Whether the array contains the given object.
 * @param {Array<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */
function includes(arr, obj) {
    return arr.indexOf(obj) >= 0;
}
/**
 * @param {Array<number>} arr Array.
 * @param {number} target Target.
 * @param {number} direction 0 means return the nearest, > 0
 *    means return the largest nearest, < 0 means return the
 *    smallest nearest.
 * @return {number} Index.
 */
function linearFindNearest(arr, target, direction) {
    var n = arr.length;
    if (arr[0] <= target) {
        return 0;
    }
    else if (target <= arr[n - 1]) {
        return n - 1;
    }
    else {
        var i = void 0;
        if (direction > 0) {
            for (i = 1; i < n; ++i) {
                if (arr[i] < target) {
                    return i - 1;
                }
            }
        }
        else if (direction < 0) {
            for (i = 1; i < n; ++i) {
                if (arr[i] <= target) {
                    return i;
                }
            }
        }
        else {
            for (i = 1; i < n; ++i) {
                if (arr[i] == target) {
                    return i;
                }
                else if (arr[i] < target) {
                    if (arr[i - 1] - target < target - arr[i]) {
                        return i - 1;
                    }
                    else {
                        return i;
                    }
                }
            }
        }
        return n - 1;
    }
}
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */
function reverseSubArray(arr, begin, end) {
    while (begin < end) {
        var tmp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = tmp;
        ++begin;
        --end;
    }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */
function extend(arr, data) {
    var extension = Array.isArray(data) ? data : [data];
    var length = extension.length;
    for (var i = 0; i < length; i++) {
        arr[arr.length] = extension[i];
    }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */
function remove(arr, obj) {
    var i = arr.indexOf(obj);
    var found = i > -1;
    if (found) {
        arr.splice(i, 1);
    }
    return found;
}
/**
 * @param {Array<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE|null} The element found or null.
 */
function find(arr, func) {
    var length = arr.length >>> 0;
    var value;
    for (var i = 0; i < length; i++) {
        value = arr[i];
        if (func(value, i, arr)) {
            return value;
        }
    }
    return null;
}
/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */
function equals(arr1, arr2) {
    var len1 = arr1.length;
    if (len1 !== arr2.length) {
        return false;
    }
    for (var i = 0; i < len1; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Sort the passed array such that the relative order of equal elements is preverved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */
function stableSort(arr, compareFnc) {
    var length = arr.length;
    var tmp = Array(arr.length);
    var i;
    for (i = 0; i < length; i++) {
        tmp[i] = { index: i, value: arr[i] };
    }
    tmp.sort(function (a, b) {
        return compareFnc(a.value, b.value) || a.index - b.index;
    });
    for (i = 0; i < arr.length; i++) {
        arr[i] = tmp[i].value;
    }
}
/**
 * @param {Array<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */
function findIndex(arr, func) {
    var index;
    var found = !arr.every(function (el, idx) {
        index = idx;
        return !func(el, idx, arr);
    });
    return found ? index : -1;
}
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function=} opt_func Comparison function.
 * @param {boolean=} opt_strict Strictly sorted (default false).
 * @return {boolean} Return index.
 */
function isSorted(arr, opt_func, opt_strict) {
    var compare = opt_func || numberSafeCompareFunction;
    return arr.every(function (currentVal, index) {
        if (index === 0) {
            return true;
        }
        var res = compare(arr[index - 1], currentVal);
        return !(res > 0 || opt_strict && res === 0);
    });
}
//# sourceMappingURL=array.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl/Helper.js
var Helper_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/webgl/Helper
 */










/**
 * @typedef {Object} BufferCacheEntry
 * @property {import("./Buffer.js").default} buffer
 * @property {WebGLBuffer} webGlBuffer
 */
/**
 * Shader types, either `FRAGMENT_SHADER` or `VERTEX_SHADER`.
 * @enum {number}
 */
var ShaderType = {
    FRAGMENT_SHADER: 0x8B30,
    VERTEX_SHADER: 0x8B31
};
/**
 * Uniform names used in the default shaders: `PROJECTION_MATRIX`, `OFFSET_SCALE_MATRIX`.
 * and `OFFSET_ROTATION_MATRIX`.
 * @enum {string}
 */
var DefaultUniform = {
    PROJECTION_MATRIX: 'u_projectionMatrix',
    OFFSET_SCALE_MATRIX: 'u_offsetScaleMatrix',
    OFFSET_ROTATION_MATRIX: 'u_offsetRotateMatrix',
    TIME: 'u_time',
    ZOOM: 'u_zoom',
    RESOLUTION: 'u_resolution'
};
/**
 * Attribute types, either `UNSIGNED_BYTE`, `UNSIGNED_SHORT`, `UNSIGNED_INT` or `FLOAT`
 * Note: an attribute stored in a `Float32Array` should be of type `FLOAT`.
 * @enum {number}
 */
var AttributeType = {
    UNSIGNED_BYTE: UNSIGNED_BYTE,
    UNSIGNED_SHORT: UNSIGNED_SHORT,
    UNSIGNED_INT: UNSIGNED_INT,
    FLOAT: FLOAT
};
/**
 * Description of an attribute in a buffer
 * @typedef {Object} AttributeDescription
 * @property {string} name Attribute name to use in shaders
 * @property {number} size Number of components per attributes
 * @property {AttributeType} [type] Attribute type, i.e. number of bytes used to store the value. This is
 * determined by the class of typed array which the buffer uses (eg. `Float32Array` for a `FLOAT` attribute).
 * Default is `FLOAT`.
 */
/**
 * @typedef {number|Array<number>|HTMLCanvasElement|HTMLImageElement|ImageData|import("../transform").Transform} UniformLiteralValue
 */
/**
 * Uniform value can be a number, array of numbers (2 to 4), canvas element or a callback returning
 * one of the previous types.
 * @typedef {UniformLiteralValue|function(import("../PluggableMap.js").FrameState):UniformLiteralValue} UniformValue
 */
/**
 * @typedef {Object} PostProcessesOptions
 * @property {number} [scaleRatio] Scale ratio; if < 1, the post process will render to a texture smaller than
 * the main canvas which will then be sampled up (useful for saving resource on blur steps).
 * @property {string} [vertexShader] Vertex shader source
 * @property {string} [fragmentShader] Fragment shader source
 * @property {Object.<string,UniformValue>} [uniforms] Uniform definitions for the post process step
 */
/**
 * @typedef {Object} Options
 * @property {Object.<string,UniformValue>} [uniforms] Uniform definitions; property names must match the uniform
 * names in the provided or default shaders.
 * @property {Array<PostProcessesOptions>} [postProcesses] Post-processes definitions
 */
/**
 * @typedef {Object} UniformInternalDescription
 * @property {string} name Name
 * @property {UniformValue=} value Value
 * @property {WebGLTexture} [texture] Texture
 * @private
 */
/**
 * @classdesc
 * This class is intended to provide low-level functions related to WebGL rendering, so that accessing
 * directly the WebGL API should not be required anymore.
 *
 * Several operations are handled by the `WebGLHelper` class:
 *
 * ### Define custom shaders and uniforms
 *
 *   *Shaders* are low-level programs executed on the GPU and written in GLSL. There are two types of shaders:
 *
 *   Vertex shaders are used to manipulate the position and attribute of *vertices* of rendered primitives (ie. corners of a square).
 *   Outputs are:
 *
 *   * `gl_Position`: position of the vertex in screen space
 *
 *   * Varyings usually prefixed with `v_` are passed on to the fragment shader
 *
 *   Fragment shaders are used to control the actual color of the pixels drawn on screen. Their only output is `gl_FragColor`.
 *
 *   Both shaders can take *uniforms* or *attributes* as input. Attributes are explained later. Uniforms are common, read-only values that
 *   can be changed at every frame and can be of type float, arrays of float or images.
 *
 *   Shaders must be compiled and assembled into a program like so:
 *   ```js
 *   // here we simply create two shaders and assemble them in a program which is then used
 *   // for subsequent rendering calls
 *   const vertexShader = new WebGLVertex(VERTEX_SHADER);
 *   const fragmentShader = new WebGLFragment(FRAGMENT_SHADER);
 *   const program = this.context.getProgram(fragmentShader, vertexShader);
 *   helper.useProgram(this.program);
 *   ```
 *
 *   Uniforms are defined using the `uniforms` option and can either be explicit values or callbacks taking the frame state as argument.
 *   You can also change their value along the way like so:
 *   ```js
 *   helper.setUniformFloatValue('u_value', valueAsNumber);
 *   ```
 *
 * ### Defining post processing passes
 *
 *   *Post processing* describes the act of rendering primitives to a texture, and then rendering this texture to the final canvas
 *   while applying special effects in screen space.
 *   Typical uses are: blurring, color manipulation, depth of field, filtering...
 *
 *   The `WebGLHelper` class offers the possibility to define post processes at creation time using the `postProcesses` option.
 *   A post process step accepts the following options:
 *
 *   * `fragmentShader` and `vertexShader`: text literals in GLSL language that will be compiled and used in the post processing step.
 *   * `uniforms`: uniforms can be defined for the post processing steps just like for the main render.
 *   * `scaleRatio`: allows using an intermediate texture smaller or higher than the final canvas in the post processing step.
 *     This is typically used in blur steps to reduce the performance overhead by using an already downsampled texture as input.
 *
 *   The {@link module:ol/webgl/PostProcessingPass~WebGLPostProcessingPass} class is used internally, refer to its documentation for more info.
 *
 * ### Binding WebGL buffers and flushing data into them
 *
 *   Data that must be passed to the GPU has to be transferred using {@link module:ol/webgl/Buffer~WebGLArrayBuffer} objects.
 *   A buffer has to be created only once, but must be bound every time the buffer content will be used for rendering.
 *   This is done using {@link bindBuffer}.
 *   When the buffer's array content has changed, the new data has to be flushed to the GPU memory; this is done using
 *   {@link flushBufferData}. Note: this operation is expensive and should be done as infrequently as possible.
 *
 *   When binding an array buffer, a `target` parameter must be given: it should be either {@link module:ol/webgl.ARRAY_BUFFER}
 *   (if the buffer contains vertices data) or {@link module:ol/webgl.ELEMENT_ARRAY_BUFFER} (if the buffer contains indices data).
 *
 *   Examples below:
 *   ```js
 *   // at initialization phase
 *   const verticesBuffer = new WebGLArrayBuffer([], DYNAMIC_DRAW);
 *   const indicesBuffer = new WebGLArrayBuffer([], DYNAMIC_DRAW);
 *
 *   // when array values have changed
 *   helper.flushBufferData(ARRAY_BUFFER, this.verticesBuffer);
 *   helper.flushBufferData(ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
 *
 *   // at rendering phase
 *   helper.bindBuffer(ARRAY_BUFFER, this.verticesBuffer);
 *   helper.bindBuffer(ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
 *   ```
 *
 * ### Specifying attributes
 *
 *   The GPU only receives the data as arrays of numbers. These numbers must be handled differently depending on what it describes (position, texture coordinate...).
 *   Attributes are used to specify these uses. Use {@link enableAttributeArray_} and either
 *   the default attribute names in {@link module:ol/webgl/Helper.DefaultAttrib} or custom ones.
 *
 *   Please note that you will have to specify the type and offset of the attributes in the data array. You can refer to the documentation of [WebGLRenderingContext.vertexAttribPointer](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) for more explanation.
 *   ```js
 *   // here we indicate that the data array has the following structure:
 *   // [posX, posY, offsetX, offsetY, texCoordU, texCoordV, posX, posY, ...]
 *   helper.enableAttributes([
 *     {
 *        name: 'a_position',
 *        size: 2
 *     },
 *     {
 *       name: 'a_offset',
 *       size: 2
 *     },
 *     {
 *       name: 'a_texCoord',
 *       size: 2
 *     }
 *   ])
 *   ```
 *
 * ### Rendering primitives
 *
 *   Once all the steps above have been achieved, rendering primitives to the screen is done using {@link prepareDraw}, {@link drawElements} and {@link finalizeDraw}.
 *   ```js
 *   // frame preparation step
 *   helper.prepareDraw(frameState);
 *
 *   // call this for every data array that has to be rendered on screen
 *   helper.drawElements(0, this.indicesBuffer.getArray().length);
 *
 *   // finalize the rendering by applying post processes
 *   helper.finalizeDraw(frameState);
 *   ```
 *
 * For an example usage of this class, refer to {@link module:ol/renderer/webgl/PointsLayer~WebGLPointsLayerRenderer}.
 *
 *
 * @api
 */
var Helper_WebGLHelper = /** @class */ (function (_super) {
    Helper_extends(WebGLHelper, _super);
    /**
     * @param {Options=} opt_options Options.
     */
    function WebGLHelper(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options || {};
        /** @private */
        _this.boundHandleWebGLContextLost_ = _this.handleWebGLContextLost.bind(_this);
        /** @private */
        _this.boundHandleWebGLContextRestored_ = _this.handleWebGLContextRestored.bind(_this);
        /**
         * @private
         * @type {HTMLCanvasElement}
         */
        _this.canvas_ = document.createElement('canvas');
        _this.canvas_.style.position = 'absolute';
        _this.canvas_.style.left = '0';
        /**
         * @private
         * @type {WebGLRenderingContext}
         */
        _this.gl_ = getContext(_this.canvas_);
        var gl = _this.getGL();
        /**
         * @private
         * @type {!Object<string, BufferCacheEntry>}
         */
        _this.bufferCache_ = {};
        /**
         * @private
         * @type {WebGLProgram}
         */
        _this.currentProgram_ = null;
        assert(includes(getSupportedExtensions(), 'OES_element_index_uint'), 63);
        gl.getExtension('OES_element_index_uint');
        _this.canvas_.addEventListener(ContextEventType.LOST, _this.boundHandleWebGLContextLost_);
        _this.canvas_.addEventListener(ContextEventType.RESTORED, _this.boundHandleWebGLContextRestored_);
        /**
         * @private
         * @type {import("../transform.js").Transform}
         */
        _this.offsetRotateMatrix_ = create();
        /**
         * @private
         * @type {import("../transform.js").Transform}
         */
        _this.offsetScaleMatrix_ = create();
        /**
         * @private
         * @type {Array<number>}
         */
        _this.tmpMat4_ = mat4_create();
        /**
         * @private
         * @type {Object.<string, WebGLUniformLocation>}
         */
        _this.uniformLocations_ = {};
        /**
         * @private
         * @type {Object.<string, number>}
         */
        _this.attribLocations_ = {};
        /**
         * Holds info about custom uniforms used in the post processing pass.
         * If the uniform is a texture, the WebGL Texture object will be stored here.
         * @type {Array<UniformInternalDescription>}
         * @private
         */
        _this.uniforms_ = [];
        if (options.uniforms) {
            for (var name_1 in options.uniforms) {
                _this.uniforms_.push({
                    name: name_1,
                    value: options.uniforms[name_1]
                });
            }
        }
        /**
         * An array of PostProcessingPass objects is kept in this variable, built from the steps provided in the
         * options. If no post process was given, a default one is used (so as not to have to make an exception to
         * the frame buffer logic).
         * @type {Array<WebGLPostProcessingPass>}
         * @private
         */
        _this.postProcessPasses_ = options.postProcesses ? options.postProcesses.map(function (options) {
            return new PostProcessingPass({
                webGlContext: gl,
                scaleRatio: options.scaleRatio,
                vertexShader: options.vertexShader,
                fragmentShader: options.fragmentShader,
                uniforms: options.uniforms
            });
        }) : [new PostProcessingPass({ webGlContext: gl })];
        /**
         * @type {string|null}
         * @private
         */
        _this.shaderCompileErrors_ = null;
        /**
         * @type {number}
         * @private
         */
        _this.startTime_ = Date.now();
        return _this;
    }
    /**
     * Just bind the buffer if it's in the cache. Otherwise create
     * the WebGL buffer, bind it, populate it, and add an entry to
     * the cache.
     * @param {import("./Buffer").default} buffer Buffer.
     * @api
     */
    WebGLHelper.prototype.bindBuffer = function (buffer) {
        var gl = this.getGL();
        var bufferKey = getUid(buffer);
        var bufferCache = this.bufferCache_[bufferKey];
        if (!bufferCache) {
            var webGlBuffer = gl.createBuffer();
            bufferCache = {
                buffer: buffer,
                webGlBuffer: webGlBuffer
            };
            this.bufferCache_[bufferKey] = bufferCache;
        }
        gl.bindBuffer(buffer.getType(), bufferCache.webGlBuffer);
    };
    /**
     * Update the data contained in the buffer array; this is required for the
     * new data to be rendered
     * @param {import("./Buffer").default} buffer Buffer.
     * @api
     */
    WebGLHelper.prototype.flushBufferData = function (buffer) {
        var gl = this.getGL();
        this.bindBuffer(buffer);
        gl.bufferData(buffer.getType(), buffer.getArray(), buffer.getUsage());
    };
    /**
     * @param {import("./Buffer.js").default} buf Buffer.
     */
    WebGLHelper.prototype.deleteBuffer = function (buf) {
        var gl = this.getGL();
        var bufferKey = getUid(buf);
        var bufferCacheEntry = this.bufferCache_[bufferKey];
        if (!gl.isContextLost()) {
            gl.deleteBuffer(bufferCacheEntry.buffer);
        }
        delete this.bufferCache_[bufferKey];
    };
    /**
     * @inheritDoc
     */
    WebGLHelper.prototype.disposeInternal = function () {
        this.canvas_.removeEventListener(ContextEventType.LOST, this.boundHandleWebGLContextLost_);
        this.canvas_.removeEventListener(ContextEventType.RESTORED, this.boundHandleWebGLContextRestored_);
    };
    /**
     * Clear the buffer & set the viewport to draw.
     * Post process passes will be initialized here, the first one being bound as a render target for
     * subsequent draw calls.
     * @param {import("../PluggableMap.js").FrameState} frameState current frame state
     * @api
     */
    WebGLHelper.prototype.prepareDraw = function (frameState) {
        var gl = this.getGL();
        var canvas = this.getCanvas();
        var size = frameState.size;
        var pixelRatio = frameState.pixelRatio;
        canvas.width = size[0] * pixelRatio;
        canvas.height = size[1] * pixelRatio;
        canvas.style.width = size[0] + 'px';
        canvas.style.height = size[1] + 'px';
        gl.useProgram(this.currentProgram_);
        // loop backwards in post processes list
        for (var i = this.postProcessPasses_.length - 1; i >= 0; i--) {
            this.postProcessPasses_[i].init(frameState);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(this.currentProgram_);
        this.applyFrameState(frameState);
        this.applyUniforms(frameState);
    };
    /**
     * Clear the render target & bind it for future draw operations.
     * This is similar to `prepareDraw`, only post processes will not be applied.
     * Note: the whole viewport will be drawn to the render target, regardless of its size.
     * @param {import("../PluggableMap.js").FrameState} frameState current frame state
     * @param {import("./RenderTarget.js").default} renderTarget Render target to draw to
     * @param {boolean} [opt_disableAlphaBlend] If true, no alpha blending will happen.
     */
    WebGLHelper.prototype.prepareDrawToRenderTarget = function (frameState, renderTarget, opt_disableAlphaBlend) {
        var gl = this.getGL();
        var size = renderTarget.getSize();
        gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.getFramebuffer());
        gl.viewport(0, 0, size[0], size[1]);
        gl.bindTexture(gl.TEXTURE_2D, renderTarget.getTexture());
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, opt_disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(this.currentProgram_);
        this.applyFrameState(frameState);
        this.applyUniforms(frameState);
    };
    /**
     * Execute a draw call based on the currently bound program, texture, buffers, attributes.
     * @param {number} start Start index.
     * @param {number} end End index.
     * @api
     */
    WebGLHelper.prototype.drawElements = function (start, end) {
        var gl = this.getGL();
        var elementType = gl.UNSIGNED_INT;
        var elementSize = 4;
        var numItems = end - start;
        var offsetInBytes = start * elementSize;
        gl.drawElements(gl.TRIANGLES, numItems, elementType, offsetInBytes);
    };
    /**
     * Apply the successive post process passes which will eventually render to the actual canvas.
     * @param {import("../PluggableMap.js").FrameState} frameState current frame state
     * @api
     */
    WebGLHelper.prototype.finalizeDraw = function (frameState) {
        // apply post processes using the next one as target
        for (var i = 0; i < this.postProcessPasses_.length; i++) {
            this.postProcessPasses_[i].apply(frameState, this.postProcessPasses_[i + 1] || null);
        }
    };
    /**
     * @return {HTMLCanvasElement} Canvas.
     * @api
     */
    WebGLHelper.prototype.getCanvas = function () {
        return this.canvas_;
    };
    /**
     * Get the WebGL rendering context
     * @return {WebGLRenderingContext} The rendering context.
     * @api
     */
    WebGLHelper.prototype.getGL = function () {
        return this.gl_;
    };
    /**
     * Sets the default matrix uniforms for a given frame state. This is called internally in `prepareDraw`.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @private
     */
    WebGLHelper.prototype.applyFrameState = function (frameState) {
        var size = frameState.size;
        var rotation = frameState.viewState.rotation;
        var offsetScaleMatrix = transform_reset(this.offsetScaleMatrix_);
        scale(offsetScaleMatrix, 2 / size[0], 2 / size[1]);
        var offsetRotateMatrix = transform_reset(this.offsetRotateMatrix_);
        if (rotation !== 0) {
            rotate(offsetRotateMatrix, -rotation);
        }
        this.setUniformMatrixValue(DefaultUniform.OFFSET_SCALE_MATRIX, fromTransform(this.tmpMat4_, offsetScaleMatrix));
        this.setUniformMatrixValue(DefaultUniform.OFFSET_ROTATION_MATRIX, fromTransform(this.tmpMat4_, offsetRotateMatrix));
        this.setUniformFloatValue(DefaultUniform.TIME, (Date.now() - this.startTime_) * 0.001);
        this.setUniformFloatValue(DefaultUniform.ZOOM, frameState.viewState.zoom);
        this.setUniformFloatValue(DefaultUniform.RESOLUTION, frameState.viewState.resolution);
    };
    /**
     * Sets the custom uniforms based on what was given in the constructor. This is called internally in `prepareDraw`.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @private
     */
    WebGLHelper.prototype.applyUniforms = function (frameState) {
        var gl = this.getGL();
        var value;
        var textureSlot = 0;
        this.uniforms_.forEach(function (uniform) {
            value = typeof uniform.value === 'function' ? uniform.value(frameState) : uniform.value;
            // apply value based on type
            if (value instanceof HTMLCanvasElement || value instanceof HTMLImageElement || value instanceof ImageData) {
                // create a texture & put data
                if (!uniform.texture) {
                    uniform.texture = gl.createTexture();
                }
                gl.activeTexture(gl["TEXTURE" + textureSlot]);
                gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                var imageReady = !(value instanceof HTMLImageElement) || /** @type {HTMLImageElement} */ (value).complete;
                if (imageReady) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, value);
                }
                // fill texture slots by increasing index
                gl.uniform1i(this.getUniformLocation(uniform.name), textureSlot++);
            }
            else if (Array.isArray(value) && value.length === 6) {
                this.setUniformMatrixValue(uniform.name, fromTransform(this.tmpMat4_, value));
            }
            else if (Array.isArray(value) && value.length <= 4) {
                switch (value.length) {
                    case 2:
                        gl.uniform2f(this.getUniformLocation(uniform.name), value[0], value[1]);
                        return;
                    case 3:
                        gl.uniform3f(this.getUniformLocation(uniform.name), value[0], value[1], value[2]);
                        return;
                    case 4:
                        gl.uniform4f(this.getUniformLocation(uniform.name), value[0], value[1], value[2], value[3]);
                        return;
                    default:
                        return;
                }
            }
            else if (typeof value === 'number') {
                gl.uniform1f(this.getUniformLocation(uniform.name), value);
            }
        }.bind(this));
    };
    /**
     * Use a program.  If the program is already in use, this will return `false`.
     * @param {WebGLProgram} program Program.
     * @return {boolean} Changed.
     * @api
     */
    WebGLHelper.prototype.useProgram = function (program) {
        if (program == this.currentProgram_) {
            return false;
        }
        else {
            var gl = this.getGL();
            gl.useProgram(program);
            this.currentProgram_ = program;
            this.uniformLocations_ = {};
            this.attribLocations_ = {};
            return true;
        }
    };
    /**
     * Will attempt to compile a vertex or fragment shader based on source
     * On error, the shader will be returned but
     * `gl.getShaderParameter(shader, gl.COMPILE_STATUS)` will return `true`
     * Use `gl.getShaderInfoLog(shader)` to have details
     * @param {string} source Shader source
     * @param {ShaderType} type VERTEX_SHADER or FRAGMENT_SHADER
     * @return {WebGLShader} Shader object
     */
    WebGLHelper.prototype.compileShader = function (source, type) {
        var gl = this.getGL();
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    };
    /**
     * Create a program for a vertex and fragment shader. The shaders compilation may have failed:
     * use `WebGLHelper.getShaderCompileErrors()`to have details if any.
     * @param {string} fragmentShaderSource Fragment shader source.
     * @param {string} vertexShaderSource Vertex shader source.
     * @return {WebGLProgram} Program
     * @api
     */
    WebGLHelper.prototype.getProgram = function (fragmentShaderSource, vertexShaderSource) {
        var gl = this.getGL();
        var fragmentShader = this.compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        var vertexShader = this.compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        this.shaderCompileErrors_ = null;
        if (gl.getShaderInfoLog(fragmentShader)) {
            this.shaderCompileErrors_ =
                "Fragment shader compilation failed:\n" + gl.getShaderInfoLog(fragmentShader);
        }
        if (gl.getShaderInfoLog(vertexShader)) {
            this.shaderCompileErrors_ = (this.shaderCompileErrors_ || '') +
                ("Vertex shader compilation failed:\n" + gl.getShaderInfoLog(vertexShader));
        }
        var program = gl.createProgram();
        gl.attachShader(program, fragmentShader);
        gl.attachShader(program, vertexShader);
        gl.linkProgram(program);
        return program;
    };
    /**
     * Will return the last shader compilation errors. If no error happened, will return null;
     * @return {string|null} Errors description, or null if last compilation was successful
     * @api
     */
    WebGLHelper.prototype.getShaderCompileErrors = function () {
        return this.shaderCompileErrors_;
    };
    /**
     * Will get the location from the shader or the cache
     * @param {string} name Uniform name
     * @return {WebGLUniformLocation} uniformLocation
     * @api
     */
    WebGLHelper.prototype.getUniformLocation = function (name) {
        if (this.uniformLocations_[name] === undefined) {
            this.uniformLocations_[name] = this.getGL().getUniformLocation(this.currentProgram_, name);
        }
        return this.uniformLocations_[name];
    };
    /**
     * Will get the location from the shader or the cache
     * @param {string} name Attribute name
     * @return {number} attribLocation
     * @api
     */
    WebGLHelper.prototype.getAttributeLocation = function (name) {
        if (this.attribLocations_[name] === undefined) {
            this.attribLocations_[name] = this.getGL().getAttribLocation(this.currentProgram_, name);
        }
        return this.attribLocations_[name];
    };
    /**
     * Modifies the given transform to apply the rotation/translation/scaling of the given frame state.
     * The resulting transform can be used to convert world space coordinates to view coordinates.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {import("../transform").Transform} transform Transform to update.
     * @return {import("../transform").Transform} The updated transform object.
     * @api
     */
    WebGLHelper.prototype.makeProjectionTransform = function (frameState, transform) {
        var size = frameState.size;
        var rotation = frameState.viewState.rotation;
        var resolution = frameState.viewState.resolution;
        var center = frameState.viewState.center;
        transform_reset(transform);
        compose(transform, 0, 0, 2 / (resolution * size[0]), 2 / (resolution * size[1]), -rotation, -center[0], -center[1]);
        return transform;
    };
    /**
     * Give a value for a standard float uniform
     * @param {string} uniform Uniform name
     * @param {number} value Value
     * @api
     */
    WebGLHelper.prototype.setUniformFloatValue = function (uniform, value) {
        this.getGL().uniform1f(this.getUniformLocation(uniform), value);
    };
    /**
     * Give a value for a standard matrix4 uniform
     * @param {string} uniform Uniform name
     * @param {Array<number>} value Matrix value
     * @api
     */
    WebGLHelper.prototype.setUniformMatrixValue = function (uniform, value) {
        this.getGL().uniformMatrix4fv(this.getUniformLocation(uniform), false, value);
    };
    /**
     * Will set the currently bound buffer to an attribute of the shader program. Used by `#enableAttributes`
     * internally.
     * @param {string} attribName Attribute name
     * @param {number} size Number of components per attributes
     * @param {number} type UNSIGNED_INT, UNSIGNED_BYTE, UNSIGNED_SHORT or FLOAT
     * @param {number} stride Stride in bytes (0 means attribs are packed)
     * @param {number} offset Offset in bytes
     * @private
     */
    WebGLHelper.prototype.enableAttributeArray_ = function (attribName, size, type, stride, offset) {
        var location = this.getAttributeLocation(attribName);
        // the attribute has not been found in the shaders; do not enable it
        if (location < 0) {
            return;
        }
        this.getGL().enableVertexAttribArray(location);
        this.getGL().vertexAttribPointer(location, size, type, false, stride, offset);
    };
    /**
     * Will enable the following attributes to be read from the currently bound buffer,
     * i.e. tell the GPU where to read the different attributes in the buffer. An error in the
     * size/type/order of attributes will most likely break the rendering and throw a WebGL exception.
     * @param {Array<AttributeDescription>} attributes Ordered list of attributes to read from the buffer
     * @api
     */
    WebGLHelper.prototype.enableAttributes = function (attributes) {
        var stride = computeAttributesStride(attributes);
        var offset = 0;
        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            this.enableAttributeArray_(attr.name, attr.size, attr.type || FLOAT, stride, offset);
            offset += attr.size * getByteSizeFromType(attr.type);
        }
    };
    /**
     * WebGL context was lost
     * @private
     */
    WebGLHelper.prototype.handleWebGLContextLost = function () {
        clear(this.bufferCache_);
        this.currentProgram_ = null;
    };
    /**
     * WebGL context was restored
     * @private
     */
    WebGLHelper.prototype.handleWebGLContextRestored = function () {
    };
    /**
     * Will create or reuse a given webgl texture and apply the given size. If no image data
     * specified, the texture will be empty, otherwise image data will be used and the `size`
     * parameter will be ignored.
     * Note: wrap parameters are set to clamp to edge, min filter is set to linear.
     * @param {Array<number>} size Expected size of the texture
     * @param {ImageData|HTMLImageElement|HTMLCanvasElement} [opt_data] Image data/object to bind to the texture
     * @param {WebGLTexture} [opt_texture] Existing texture to reuse
     * @return {WebGLTexture} The generated texture
     * @api
     */
    WebGLHelper.prototype.createTexture = function (size, opt_data, opt_texture) {
        var gl = this.getGL();
        var texture = opt_texture || gl.createTexture();
        // set params & size
        var level = 0;
        var internalFormat = gl.RGBA;
        var border = 0;
        var format = gl.RGBA;
        var type = gl.UNSIGNED_BYTE;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (opt_data) {
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, format, type, opt_data);
        }
        else {
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, size[0], size[1], border, format, type, null);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return texture;
    };
    return WebGLHelper;
}(ol_Disposable));
/**
 * Compute a stride in bytes based on a list of attributes
 * @param {Array<AttributeDescription>} attributes Ordered list of attributes
 * @returns {number} Stride, ie amount of values for each vertex in the vertex buffer
 * @api
 */
function computeAttributesStride(attributes) {
    var stride = 0;
    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i];
        stride += attr.size * getByteSizeFromType(attr.type);
    }
    return stride;
}
/**
 * Computes the size in byte of an attribute type.
 * @param {AttributeType} type Attribute type
 * @returns {number} The size in bytes
 */
function getByteSizeFromType(type) {
    switch (type) {
        case AttributeType.UNSIGNED_BYTE: return Uint8Array.BYTES_PER_ELEMENT;
        case AttributeType.UNSIGNED_SHORT: return Uint16Array.BYTES_PER_ELEMENT;
        case AttributeType.UNSIGNED_INT: return Uint32Array.BYTES_PER_ELEMENT;
        case AttributeType.FLOAT:
        default: return Float32Array.BYTES_PER_ELEMENT;
    }
}
/* harmony default export */ var Helper = (Helper_WebGLHelper);
//# sourceMappingURL=Helper.js.map
// CONCATENATED MODULE: ./node_modules/ol/geom/GeometryType.js
/**
 * @module ol/geom/GeometryType
 */
/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
/* harmony default export */ var GeometryType = ({
    POINT: 'Point',
    LINE_STRING: 'LineString',
    LINEAR_RING: 'LinearRing',
    POLYGON: 'Polygon',
    MULTI_POINT: 'MultiPoint',
    MULTI_LINE_STRING: 'MultiLineString',
    MULTI_POLYGON: 'MultiPolygon',
    GEOMETRY_COLLECTION: 'GeometryCollection',
    CIRCLE: 'Circle'
});
//# sourceMappingURL=GeometryType.js.map
// CONCATENATED MODULE: ./node_modules/ol/ImageState.js
/**
 * @module ol/ImageState
 */
/**
 * @enum {number}
 */
/* harmony default export */ var ImageState = ({
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4
});
//# sourceMappingURL=ImageState.js.map
// CONCATENATED MODULE: ./node_modules/ol/events.js
/**
 * @module ol/events
 */

/**
 * Key to use with {@link module:ol/Observable~Observable#unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener
 * @property {import("./events/Target.js").EventTargetLike} target
 * @property {string} type
 * @api
 */
/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */
/**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events~unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */
function listen(target, type, listener, opt_this, opt_once) {
    if (opt_this && opt_this !== target) {
        listener = listener.bind(opt_this);
    }
    if (opt_once) {
        var originalListener_1 = listener;
        listener = function () {
            target.removeEventListener(type, listener);
            originalListener_1.apply(this, arguments);
        };
    }
    var eventsKey = {
        target: target,
        type: type,
        listener: listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
}
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events~unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events~listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */
function listenOnce(target, type, listener, opt_this) {
    return listen(target, type, listener, opt_this, true);
}
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events~listen} or {@link module:ol/events~listenOnce}.
 *
 * @param {EventsKey} key The key.
 */
function unlistenByKey(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        clear(key);
    }
}
//# sourceMappingURL=events.js.map
// CONCATENATED MODULE: ./node_modules/ol/functions.js
/**
 * @module ol/functions
 */

/**
 * Always returns true.
 * @returns {boolean} true.
 */
function TRUE() {
    return true;
}
/**
 * Always returns false.
 * @returns {boolean} false.
 */
function FALSE() {
    return false;
}
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */
function VOID() { }
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */
function memoizeOne(fn) {
    var called = false;
    /** @type {ReturnType} */
    var lastResult;
    /** @type {Array<any>} */
    var lastArgs;
    var lastThis;
    return function () {
        var nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !equals(nextArgs, lastArgs)) {
            called = true;
            lastThis = this;
            lastArgs = nextArgs;
            lastResult = fn.apply(this, arguments);
        }
        return lastResult;
    };
}
//# sourceMappingURL=functions.js.map
// CONCATENATED MODULE: ./node_modules/ol/events/Event.js
/**
 * @module ol/events/Event
 */
/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */
var BaseEvent = /** @class */ (function () {
    /**
     * @param {string} type Type.
     */
    function BaseEvent(type) {
        /**
         * @type {boolean}
         */
        this.propagationStopped;
        /**
         * The event type.
         * @type {string}
         * @api
         */
        this.type = type;
        /**
         * The event target.
         * @type {Object}
         * @api
         */
        this.target = null;
    }
    /**
     * Stop event propagation.
     * @api
     */
    BaseEvent.prototype.preventDefault = function () {
        this.propagationStopped = true;
    };
    /**
     * Stop event propagation.
     * @api
     */
    BaseEvent.prototype.stopPropagation = function () {
        this.propagationStopped = true;
    };
    return BaseEvent;
}());
/**
 * @param {Event|import("./Event.js").default} evt Event
 */
function stopPropagation(evt) {
    evt.stopPropagation();
}
/**
 * @param {Event|import("./Event.js").default} evt Event
 */
function preventDefault(evt) {
    evt.preventDefault();
}
/* harmony default export */ var Event = (BaseEvent);
//# sourceMappingURL=Event.js.map
// CONCATENATED MODULE: ./node_modules/ol/events/Target.js
var Target_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/events/Target
 */




/**
 * @typedef {EventTarget|Target} EventTargetLike
 */
/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */
var Target_Target = /** @class */ (function (_super) {
    Target_extends(Target, _super);
    /**
     * @param {*=} opt_target Default event target for dispatched events.
     */
    function Target(opt_target) {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {*}
         */
        _this.eventTarget_ = opt_target;
        /**
         * @private
         * @type {!Object<string, number>}
         */
        _this.pendingRemovals_ = {};
        /**
         * @private
         * @type {!Object<string, number>}
         */
        _this.dispatching_ = {};
        /**
         * @private
         * @type {!Object<string, Array<import("../events.js").ListenerFunction>>}
         */
        _this.listeners_ = {};
        return _this;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").ListenerFunction} listener Listener.
     */
    Target.prototype.addEventListener = function (type, listener) {
        if (!type || !listener) {
            return;
        }
        var listeners = this.listeners_[type];
        if (!listeners) {
            listeners = [];
            this.listeners_[type] = listeners;
        }
        if (listeners.indexOf(listener) === -1) {
            listeners.push(listener);
        }
    };
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param {{type: string,
     *     target: (EventTargetLike|undefined),
     *     propagationStopped: (boolean|undefined)}|
     *     import("./Event.js").default|string} event Event object.
     * @return {boolean|undefined} `false` if anyone called preventDefault on the
     *     event object or if any of the listeners returned false.
     * @api
     */
    Target.prototype.dispatchEvent = function (event) {
        var evt = typeof event === 'string' ? new Event(event) : event;
        var type = evt.type;
        if (!evt.target) {
            evt.target = this.eventTarget_ || this;
        }
        var listeners = this.listeners_[type];
        var propagate;
        if (listeners) {
            if (!(type in this.dispatching_)) {
                this.dispatching_[type] = 0;
                this.pendingRemovals_[type] = 0;
            }
            ++this.dispatching_[type];
            for (var i = 0, ii = listeners.length; i < ii; ++i) {
                if (listeners[i].call(this, evt) === false || evt.propagationStopped) {
                    propagate = false;
                    break;
                }
            }
            --this.dispatching_[type];
            if (this.dispatching_[type] === 0) {
                var pendingRemovals = this.pendingRemovals_[type];
                delete this.pendingRemovals_[type];
                while (pendingRemovals--) {
                    this.removeEventListener(type, VOID);
                }
                delete this.dispatching_[type];
            }
            return propagate;
        }
    };
    /**
     * @inheritDoc
     */
    Target.prototype.disposeInternal = function () {
        clear(this.listeners_);
    };
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     *
     * @param {string} type Type.
     * @return {Array<import("../events.js").ListenerFunction>} Listeners.
     */
    Target.prototype.getListeners = function (type) {
        return this.listeners_[type];
    };
    /**
     * @param {string=} opt_type Type. If not provided,
     *     `true` will be returned if this event target has any listeners.
     * @return {boolean} Has listeners.
     */
    Target.prototype.hasListener = function (opt_type) {
        return opt_type ?
            opt_type in this.listeners_ :
            Object.keys(this.listeners_).length > 0;
    };
    /**
     * @param {string} type Type.
     * @param {import("../events.js").ListenerFunction} listener Listener.
     */
    Target.prototype.removeEventListener = function (type, listener) {
        var listeners = this.listeners_[type];
        if (listeners) {
            var index = listeners.indexOf(listener);
            if (index !== -1) {
                if (type in this.pendingRemovals_) {
                    // make listener a no-op, and remove later in #dispatchEvent()
                    listeners[index] = VOID;
                    ++this.pendingRemovals_[type];
                }
                else {
                    listeners.splice(index, 1);
                    if (listeners.length === 0) {
                        delete this.listeners_[type];
                    }
                }
            }
        }
    };
    return Target;
}(ol_Disposable));
/* harmony default export */ var events_Target = (Target_Target);
//# sourceMappingURL=Target.js.map
// CONCATENATED MODULE: ./node_modules/ol/events/EventType.js
/**
 * @module ol/events/EventType
 */
/**
 * @enum {string}
 * @const
 */
/* harmony default export */ var EventType = ({
    /**
     * Generic change event. Triggered when the revision counter is increased.
     * @event module:ol/events/Event~BaseEvent#change
     * @api
     */
    CHANGE: 'change',
    /**
     * Generic error event. Triggered when an error occurs.
     * @event module:ol/events/Event~BaseEvent#error
     * @api
     */
    ERROR: 'error',
    BLUR: 'blur',
    CLEAR: 'clear',
    CONTEXTMENU: 'contextmenu',
    CLICK: 'click',
    DBLCLICK: 'dblclick',
    DRAGENTER: 'dragenter',
    DRAGOVER: 'dragover',
    DROP: 'drop',
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    KEYPRESS: 'keypress',
    LOAD: 'load',
    RESIZE: 'resize',
    TOUCHMOVE: 'touchmove',
    WHEEL: 'wheel'
});
//# sourceMappingURL=EventType.js.map
// CONCATENATED MODULE: ./node_modules/ol/Observable.js
var Observable_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/Observable
 */



/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */
var Observable_Observable = /** @class */ (function (_super) {
    Observable_extends(Observable, _super);
    function Observable() {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {number}
         */
        _this.revision_ = 0;
        return _this;
    }
    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */
    Observable.prototype.changed = function () {
        ++this.revision_;
        this.dispatchEvent(EventType.CHANGE);
    };
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return {number} Revision.
     * @api
     */
    Observable.prototype.getRevision = function () {
        return this.revision_;
    };
    /**
     * Listen for a certain type of event.
     * @param {string|Array<string>} type The event type or array of event types.
     * @param {function(?): ?} listener The listener function.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
     *     called with an array of event types as the first argument, the return
     *     will be an array of keys.
     * @api
     */
    Observable.prototype.on = function (type, listener) {
        if (Array.isArray(type)) {
            var len = type.length;
            var keys = new Array(len);
            for (var i = 0; i < len; ++i) {
                keys[i] = listen(this, type[i], listener);
            }
            return keys;
        }
        else {
            return listen(this, /** @type {string} */ (type), listener);
        }
    };
    /**
     * Listen once for a certain type of event.
     * @param {string|Array<string>} type The event type or array of event types.
     * @param {function(?): ?} listener The listener function.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
     *     called with an array of event types as the first argument, the return
     *     will be an array of keys.
     * @api
     */
    Observable.prototype.once = function (type, listener) {
        if (Array.isArray(type)) {
            var len = type.length;
            var keys = new Array(len);
            for (var i = 0; i < len; ++i) {
                keys[i] = listenOnce(this, type[i], listener);
            }
            return keys;
        }
        else {
            return listenOnce(this, /** @type {string} */ (type), listener);
        }
    };
    /**
     * Unlisten for a certain type of event.
     * @param {string|Array<string>} type The event type or array of event types.
     * @param {function(?): ?} listener The listener function.
     * @api
     */
    Observable.prototype.un = function (type, listener) {
        if (Array.isArray(type)) {
            for (var i = 0, ii = type.length; i < ii; ++i) {
                this.removeEventListener(type[i], listener);
            }
        }
        else {
            this.removeEventListener(type, listener);
        }
    };
    return Observable;
}(events_Target));
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */
function unByKey(key) {
    if (Array.isArray(key)) {
        for (var i = 0, ii = key.length; i < ii; ++i) {
            unlistenByKey(key[i]);
        }
    }
    else {
        unlistenByKey(/** @type {import("./events.js").EventsKey} */ (key));
    }
}
/* harmony default export */ var ol_Observable = (Observable_Observable);
//# sourceMappingURL=Observable.js.map
// CONCATENATED MODULE: ./node_modules/ol/source/State.js
/**
 * @module ol/source/State
 */
/**
 * @enum {string}
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */
/* harmony default export */ var State = ({
    UNDEFINED: 'undefined',
    LOADING: 'loading',
    READY: 'ready',
    ERROR: 'error'
});
//# sourceMappingURL=State.js.map
// CONCATENATED MODULE: ./node_modules/ol/renderer/Layer.js
var Layer_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/renderer/Layer
 */





/**
 * @template {import("../layer/Layer.js").default} LayerType
 */
var Layer_LayerRenderer = /** @class */ (function (_super) {
    Layer_extends(LayerRenderer, _super);
    /**
     * @param {LayerType} layer Layer.
     */
    function LayerRenderer(layer) {
        var _this = _super.call(this) || this;
        /** @private */
        _this.boundHandleImageChange_ = _this.handleImageChange_.bind(_this);
        /**
         * @private
         * @type {LayerType}
         */
        _this.layer_ = layer;
        return _this;
    }
    /**
     * Asynchronous layer level hit detection.
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
     * an array of features.
     */
    LayerRenderer.prototype.getFeatures = function (pixel) {
        return util_abstract();
    };
    /**
     * Determine whether render should be called.
     * @abstract
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     */
    LayerRenderer.prototype.prepareFrame = function (frameState) {
        return util_abstract();
    };
    /**
     * Render the layer.
     * @abstract
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     */
    LayerRenderer.prototype.renderFrame = function (frameState, target) {
        return util_abstract();
    };
    /**
     * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
     * @param {number} zoom Zoom level.
     * @param {import("../Tile.js").default} tile Tile.
     */
    LayerRenderer.prototype.loadedTileCallback = function (tiles, zoom, tile) {
        if (!tiles[zoom]) {
            tiles[zoom] = {};
        }
        tiles[zoom][tile.tileCoord.toString()] = tile;
    };
    /**
     * Create a function that adds loaded tiles to the tile lookup.
     * @param {import("../source/Tile.js").default} source Tile source.
     * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
     * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
     * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
     *     called with a zoom level and a tile range to add loaded tiles to the lookup.
     * @protected
     */
    LayerRenderer.prototype.createLoadedTileFinder = function (source, projection, tiles) {
        return (
        /**
         * @param {number} zoom Zoom level.
         * @param {import("../TileRange.js").default} tileRange Tile range.
         * @return {boolean} The tile range is fully loaded.
         * @this {LayerRenderer}
         */
        function (zoom, tileRange) {
            var callback = this.loadedTileCallback.bind(this, tiles, zoom);
            return source.forEachLoadedTile(projection, zoom, tileRange, callback);
        }).bind(this);
    };
    /**
     * @abstract
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {function(import("../Feature.js").FeatureLike, import("../layer/Layer.js").default): T} callback Feature callback.
     * @param {Array<import("../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
     * @return {T|void} Callback result.
     * @template T
     */
    LayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, declutteredFeatures) { };
    /**
     * @abstract
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @return {Uint8ClampedArray|Uint8Array} The result.  If there is no data at the pixel
     *    location, null will be returned.  If there is data, but pixel values cannot be
     *    returned, and empty array will be returned.
     */
    LayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
        return util_abstract();
    };
    /**
     * @return {LayerType} Layer.
     */
    LayerRenderer.prototype.getLayer = function () {
        return this.layer_;
    };
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     * @abstract
     */
    LayerRenderer.prototype.handleFontsChanged = function () { };
    /**
     * Handle changes in image state.
     * @param {import("../events/Event.js").default} event Image change event.
     * @private
     */
    LayerRenderer.prototype.handleImageChange_ = function (event) {
        var image = /** @type {import("../Image.js").default} */ (event.target);
        if (image.getState() === ImageState.LOADED) {
            this.renderIfReadyAndVisible();
        }
    };
    /**
     * Load the image if not already loaded, and register the image change
     * listener if needed.
     * @param {import("../ImageBase.js").default} image Image.
     * @return {boolean} `true` if the image is already loaded, `false` otherwise.
     * @protected
     */
    LayerRenderer.prototype.loadImage = function (image) {
        var imageState = image.getState();
        if (imageState != ImageState.LOADED && imageState != ImageState.ERROR) {
            image.addEventListener(EventType.CHANGE, this.boundHandleImageChange_);
        }
        if (imageState == ImageState.IDLE) {
            image.load();
            imageState = image.getState();
        }
        return imageState == ImageState.LOADED;
    };
    /**
     * @protected
     */
    LayerRenderer.prototype.renderIfReadyAndVisible = function () {
        var layer = this.getLayer();
        if (layer.getVisible() && layer.getSourceState() == State.READY) {
            layer.changed();
        }
    };
    return LayerRenderer;
}(ol_Observable));
/* harmony default export */ var renderer_Layer = (Layer_LayerRenderer);
//# sourceMappingURL=Layer.js.map
// CONCATENATED MODULE: ./node_modules/ol/renderer/webgl/Layer.js
var webgl_Layer_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/renderer/webgl/Layer
 */


/**
 * @enum {string}
 */
var WebGLWorkerMessageType = {
    GENERATE_BUFFERS: 'GENERATE_BUFFERS'
};
/**
 * @typedef {Object} WebGLWorkerGenerateBuffersMessage
 * This message will trigger the generation of a vertex and an index buffer based on the given render instructions.
 * When the buffers are generated, the worked will send a message of the same type to the main thread, with
 * the generated buffers in it.
 * Note that any addition properties present in the message *will* be sent back to the main thread.
 * @property {WebGLWorkerMessageType} type Message type
 * @property {ArrayBuffer} renderInstructions Render instructions raw binary buffer.
 * @property {ArrayBuffer} [vertexBuffer] Vertices array raw binary buffer (sent by the worker).
 * @property {ArrayBuffer} [indexBuffer] Indices array raw binary buffer (sent by the worker).
 * @property {number} [customAttributesCount] Amount of custom attributes count in the render instructions.
 */
/**
 * @typedef {Object} PostProcessesOptions
 * @property {number} [scaleRatio] Scale ratio; if < 1, the post process will render to a texture smaller than
 * the main canvas that will then be sampled up (useful for saving resource on blur steps).
 * @property {string} [vertexShader] Vertex shader source
 * @property {string} [fragmentShader] Fragment shader source
 * @property {Object.<string,import("../../webgl/Helper").UniformValue>} [uniforms] Uniform definitions for the post process step
 */
/**
 * @typedef {Object} Options
 * @property {Object.<string,import("../../webgl/Helper").UniformValue>} [uniforms] Uniform definitions for the post process steps
 * @property {Array<PostProcessesOptions>} [postProcesses] Post-processes definitions
 */
/**
 * @classdesc
 * Base WebGL renderer class.
 * Holds all logic related to data manipulation & some common rendering logic
 * @template {import("../../layer/Layer.js").default} LayerType
 */
var Layer_WebGLLayerRenderer = /** @class */ (function (_super) {
    webgl_Layer_extends(WebGLLayerRenderer, _super);
    /**
     * @param {LayerType} layer Layer.
     * @param {Options=} [opt_options] Options.
     */
    function WebGLLayerRenderer(layer, opt_options) {
        var _this = _super.call(this, layer) || this;
        var options = opt_options || {};
        /**
         * @type {WebGLHelper}
         * @protected
         */
        _this.helper = new Helper({
            postProcesses: options.postProcesses,
            uniforms: options.uniforms
        });
        return _this;
    }
    /**
     * @inheritDoc
     */
    WebGLLayerRenderer.prototype.disposeInternal = function () {
        this.helper.dispose();
        _super.prototype.disposeInternal.call(this);
    };
    /**
     * Will return the last shader compilation errors. If no error happened, will return null;
     * @return {string|null} Errors, or null if last compilation was successful
     * @api
     */
    WebGLLayerRenderer.prototype.getShaderCompileErrors = function () {
        return this.helper.getShaderCompileErrors();
    };
    return WebGLLayerRenderer;
}(renderer_Layer));
var tmpArray_ = [];
var bufferPositions_ = { vertexPosition: 0, indexPosition: 0 };
function writePointVertex(buffer, pos, x, y, index) {
    buffer[pos + 0] = x;
    buffer[pos + 1] = y;
    buffer[pos + 2] = index;
}
/**
 * An object holding positions both in an index and a vertex buffer.
 * @typedef {Object} BufferPositions
 * @property {number} vertexPosition Position in the vertex buffer
 * @property {number} indexPosition Position in the index buffer
 */
/**
 * Pushes a quad (two triangles) based on a point geometry
 * @param {Float32Array} instructions Array of render instructions for points.
 * @param {number} elementIndex Index from which render instructions will be read.
 * @param {Float32Array} vertexBuffer Buffer in the form of a typed array.
 * @param {Uint32Array} indexBuffer Buffer in the form of a typed array.
 * @param {number} customAttributesCount Amount of custom attributes for each element.
 * @param {BufferPositions} [bufferPositions] Buffer write positions; if not specified, positions will be set at 0.
 * @return {BufferPositions} New buffer positions where to write next
 * @property {number} vertexPosition New position in the vertex buffer where future writes should start.
 * @property {number} indexPosition New position in the index buffer where future writes should start.
 * @private
 */
function writePointFeatureToBuffers(instructions, elementIndex, vertexBuffer, indexBuffer, customAttributesCount, bufferPositions) {
    // This is for x, y and index
    var baseVertexAttrsCount = 3;
    var baseInstructionsCount = 2;
    var stride = baseVertexAttrsCount + customAttributesCount;
    var x = instructions[elementIndex + 0];
    var y = instructions[elementIndex + 1];
    // read custom numerical attributes on the feature
    var customAttrs = tmpArray_;
    customAttrs.length = customAttributesCount;
    for (var i = 0; i < customAttrs.length; i++) {
        customAttrs[i] = instructions[elementIndex + baseInstructionsCount + i];
    }
    var vPos = bufferPositions ? bufferPositions.vertexPosition : 0;
    var iPos = bufferPositions ? bufferPositions.indexPosition : 0;
    var baseIndex = vPos / stride;
    // push vertices for each of the four quad corners (first standard then custom attributes)
    writePointVertex(vertexBuffer, vPos, x, y, 0);
    customAttrs.length && vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    writePointVertex(vertexBuffer, vPos, x, y, 1);
    customAttrs.length && vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    writePointVertex(vertexBuffer, vPos, x, y, 2);
    customAttrs.length && vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    writePointVertex(vertexBuffer, vPos, x, y, 3);
    customAttrs.length && vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    indexBuffer[iPos++] = baseIndex;
    indexBuffer[iPos++] = baseIndex + 1;
    indexBuffer[iPos++] = baseIndex + 3;
    indexBuffer[iPos++] = baseIndex + 1;
    indexBuffer[iPos++] = baseIndex + 2;
    indexBuffer[iPos++] = baseIndex + 3;
    bufferPositions_.vertexPosition = vPos;
    bufferPositions_.indexPosition = iPos;
    return bufferPositions_;
}
/**
 * Returns a texture of 1x1 pixel, white
 * @private
 * @return {ImageData} Image data.
 */
function getBlankImageData() {
    var canvas = document.createElement('canvas');
    var image = canvas.getContext('2d').createImageData(1, 1);
    image.data[0] = 255;
    image.data[1] = 255;
    image.data[2] = 255;
    image.data[3] = 255;
    return image;
}
/**
 * Generates a color array based on a numerical id
 * Note: the range for each component is 0 to 1 with 256 steps
 * @param {number} id Id
 * @param {Array<number>} [opt_array] Reusable array
 * @return {Array<number>} Color array containing the encoded id
 */
function colorEncodeId(id, opt_array) {
    var array = opt_array || [];
    var radix = 256;
    var divide = radix - 1;
    array[0] = Math.floor(id / radix / radix / radix) / divide;
    array[1] = (Math.floor(id / radix / radix) % radix) / divide;
    array[2] = (Math.floor(id / radix) % radix) / divide;
    array[3] = (id % radix) / divide;
    return array;
}
/**
 * Reads an id from a color-encoded array
 * Note: the expected range for each component is 0 to 1 with 256 steps.
 * @param {Array<number>} color Color array containing the encoded id
 * @return {number} Decoded id
 */
function colorDecodeId(color) {
    var id = 0;
    var radix = 256;
    var mult = radix - 1;
    id += Math.round(color[0] * radix * radix * radix * mult);
    id += Math.round(color[1] * radix * radix * mult);
    id += Math.round(color[2] * radix * mult);
    id += Math.round(color[3] * mult);
    return id;
}
/* harmony default export */ var webgl_Layer = (Layer_WebGLLayerRenderer);
//# sourceMappingURL=Layer.js.map
// CONCATENATED MODULE: ./node_modules/ol/ViewHint.js
/**
 * @module ol/ViewHint
 */
/**
 * @enum {number}
 */
/* harmony default export */ var ViewHint = ({
    ANIMATING: 0,
    INTERACTING: 1
});
//# sourceMappingURL=ViewHint.js.map
// CONCATENATED MODULE: ./node_modules/ol/extent/Corner.js
/**
 * @module ol/extent/Corner
 */
/**
 * Extent corner.
 * @enum {string}
 */
/* harmony default export */ var Corner = ({
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right'
});
//# sourceMappingURL=Corner.js.map
// CONCATENATED MODULE: ./node_modules/ol/extent/Relationship.js
/**
 * @module ol/extent/Relationship
 */
/**
 * Relationship to an extent.
 * @enum {number}
 */
/* harmony default export */ var Relationship = ({
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
});
//# sourceMappingURL=Relationship.js.map
// CONCATENATED MODULE: ./node_modules/ol/extent.js
/**
 * @module ol/extent
 */



/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */
/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */
function boundingExtent(coordinates) {
    var extent = createEmpty();
    for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        extendCoordinate(extent, coordinates[i]);
    }
    return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent=} opt_extent Destination extent.
 * @private
 * @return {Extent} Extent.
 */
function _boundingExtentXYs(xs, ys, opt_extent) {
    var minX = Math.min.apply(null, xs);
    var minY = Math.min.apply(null, ys);
    var maxX = Math.max.apply(null, xs);
    var maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, opt_extent);
}
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 * @api
 */
function extent_buffer(extent, value, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0] - value;
        opt_extent[1] = extent[1] - value;
        opt_extent[2] = extent[2] + value;
        opt_extent[3] = extent[3] + value;
        return opt_extent;
    }
    else {
        return [
            extent[0] - value,
            extent[1] - value,
            extent[2] + value,
            extent[3] + value
        ];
    }
}
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} The clone.
 */
function clone(extent, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0];
        opt_extent[1] = extent[1];
        opt_extent[2] = extent[2];
        opt_extent[3] = extent[3];
        return opt_extent;
    }
    else {
        return extent.slice();
    }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */
function closestSquaredDistanceXY(extent, x, y) {
    var dx, dy;
    if (x < extent[0]) {
        dx = extent[0] - x;
    }
    else if (extent[2] < x) {
        dx = x - extent[2];
    }
    else {
        dx = 0;
    }
    if (y < extent[1]) {
        dy = extent[1] - y;
    }
    else if (extent[3] < y) {
        dy = y - extent[3];
    }
    else {
        dy = 0;
    }
    return dx * dx + dy * dy;
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */
function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
}
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */
function containsExtent(extent1, extent2) {
    return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] &&
        extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */
function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {Relationship} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */
function coordinateRelationship(extent, coordinate) {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var x = coordinate[0];
    var y = coordinate[1];
    var relationship = Relationship.UNKNOWN;
    if (x < minX) {
        relationship = relationship | Relationship.LEFT;
    }
    else if (x > maxX) {
        relationship = relationship | Relationship.RIGHT;
    }
    if (y < minY) {
        relationship = relationship | Relationship.BELOW;
    }
    else if (y > maxY) {
        relationship = relationship | Relationship.ABOVE;
    }
    if (relationship === Relationship.UNKNOWN) {
        relationship = Relationship.INTERSECTING;
    }
    return relationship;
}
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */
function createEmpty() {
    return [Infinity, Infinity, -Infinity, -Infinity];
}
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 */
function createOrUpdate(minX, minY, maxX, maxY, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = minX;
        opt_extent[1] = minY;
        opt_extent[2] = maxX;
        opt_extent[3] = maxY;
        return opt_extent;
    }
    else {
        return [minX, minY, maxX, maxY];
    }
}
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateEmpty(opt_extent) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromCoordinate(coordinate, opt_extent) {
    var x = coordinate[0];
    var y = coordinate[1];
    return createOrUpdate(x, y, x, y, opt_extent);
}
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromCoordinates(coordinates, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendCoordinates(extent, coordinates);
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromRings(rings, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendRings(extent, rings);
}
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */
function extent_equals(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] &&
        extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */
function extent_extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) {
        extent1[0] = extent2[0];
    }
    if (extent2[2] > extent1[2]) {
        extent1[2] = extent2[2];
    }
    if (extent2[1] < extent1[1]) {
        extent1[1] = extent2[1];
    }
    if (extent2[3] > extent1[3]) {
        extent1[3] = extent2[3];
    }
    return extent1;
}
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */
function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) {
        extent[0] = coordinate[0];
    }
    if (coordinate[0] > extent[2]) {
        extent[2] = coordinate[0];
    }
    if (coordinate[1] < extent[1]) {
        extent[1] = coordinate[1];
    }
    if (coordinate[1] > extent[3]) {
        extent[3] = coordinate[1];
    }
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */
function extendCoordinates(extent, coordinates) {
    for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        extendCoordinate(extent, coordinates[i]);
    }
    return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for (; offset < end; offset += stride) {
        extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    }
    return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */
function extendRings(extent, rings) {
    for (var i = 0, ii = rings.length; i < ii; ++i) {
        extendCoordinates(extent, rings[i]);
    }
    return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */
function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
}
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */
function forEachCorner(extent, callback) {
    var val;
    val = callback(getBottomLeft(extent));
    if (val) {
        return val;
    }
    val = callback(getBottomRight(extent));
    if (val) {
        return val;
    }
    val = callback(getTopRight(extent));
    if (val) {
        return val;
    }
    val = callback(getTopLeft(extent));
    if (val) {
        return val;
    }
    return false;
}
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */
function getArea(extent) {
    var area = 0;
    if (!extent_isEmpty(extent)) {
        area = getWidth(extent) * getHeight(extent);
    }
    return area;
}
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */
function getBottomLeft(extent) {
    return [extent[0], extent[1]];
}
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */
function getBottomRight(extent) {
    return [extent[2], extent[1]];
}
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */
function getCenter(extent) {
    return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {Corner} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */
function getCorner(extent, corner) {
    var coordinate;
    if (corner === Corner.BOTTOM_LEFT) {
        coordinate = getBottomLeft(extent);
    }
    else if (corner === Corner.BOTTOM_RIGHT) {
        coordinate = getBottomRight(extent);
    }
    else if (corner === Corner.TOP_LEFT) {
        coordinate = getTopLeft(extent);
    }
    else if (corner === Corner.TOP_RIGHT) {
        coordinate = getTopRight(extent);
    }
    else {
        assert(false, 13); // Invalid corner
    }
    return coordinate;
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */
function getEnlargedArea(extent1, extent2) {
    var minX = Math.min(extent1[0], extent2[0]);
    var minY = Math.min(extent1[1], extent2[1]);
    var maxX = Math.max(extent1[2], extent2[2]);
    var maxY = Math.max(extent1[3], extent2[3]);
    return (maxX - minX) * (maxY - minY);
}
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 */
function getForViewAndSize(center, resolution, rotation, size, opt_extent) {
    var dx = resolution * size[0] / 2;
    var dy = resolution * size[1] / 2;
    var cosRotation = Math.cos(rotation);
    var sinRotation = Math.sin(rotation);
    var xCos = dx * cosRotation;
    var xSin = dx * sinRotation;
    var yCos = dy * cosRotation;
    var ySin = dy * sinRotation;
    var x = center[0];
    var y = center[1];
    var x0 = x - xCos + ySin;
    var x1 = x - xCos - ySin;
    var x2 = x + xCos - ySin;
    var x3 = x + xCos + ySin;
    var y0 = y - xSin - yCos;
    var y1 = y - xSin + yCos;
    var y2 = y + xSin + yCos;
    var y3 = y + xSin - yCos;
    return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
}
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */
function getHeight(extent) {
    return extent[3] - extent[1];
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */
function getIntersectionArea(extent1, extent2) {
    var intersection = getIntersection(extent1, extent2);
    return getArea(intersection);
}
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent=} opt_extent Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */
function getIntersection(extent1, extent2, opt_extent) {
    var intersection = opt_extent ? opt_extent : createEmpty();
    if (extent_intersects(extent1, extent2)) {
        if (extent1[0] > extent2[0]) {
            intersection[0] = extent1[0];
        }
        else {
            intersection[0] = extent2[0];
        }
        if (extent1[1] > extent2[1]) {
            intersection[1] = extent1[1];
        }
        else {
            intersection[1] = extent2[1];
        }
        if (extent1[2] < extent2[2]) {
            intersection[2] = extent1[2];
        }
        else {
            intersection[2] = extent2[2];
        }
        if (extent1[3] < extent2[3]) {
            intersection[3] = extent1[3];
        }
        else {
            intersection[3] = extent2[3];
        }
    }
    else {
        createOrUpdateEmpty(intersection);
    }
    return intersection;
}
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */
function getMargin(extent) {
    return getWidth(extent) + getHeight(extent);
}
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */
function getSize(extent) {
    return [extent[2] - extent[0], extent[3] - extent[1]];
}
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */
function getTopLeft(extent) {
    return [extent[0], extent[3]];
}
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */
function getTopRight(extent) {
    return [extent[2], extent[3]];
}
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */
function getWidth(extent) {
    return extent[2] - extent[0];
}
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */
function extent_intersects(extent1, extent2) {
    return extent1[0] <= extent2[2] &&
        extent1[2] >= extent2[0] &&
        extent1[1] <= extent2[3] &&
        extent1[3] >= extent2[1];
}
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */
function extent_isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
}
/**
 * @param {Extent} extent Extent.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */
function returnOrUpdate(extent, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0];
        opt_extent[1] = extent[1];
        opt_extent[2] = extent[2];
        opt_extent[3] = extent[3];
        return opt_extent;
    }
    else {
        return extent;
    }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */
function scaleFromCenter(extent, value) {
    var deltaX = ((extent[2] - extent[0]) / 2) * (value - 1);
    var deltaY = ((extent[3] - extent[1]) / 2) * (value - 1);
    extent[0] -= deltaX;
    extent[2] += deltaX;
    extent[1] -= deltaY;
    extent[3] += deltaY;
}
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */
function intersectsSegment(extent, start, end) {
    var intersects = false;
    var startRel = coordinateRelationship(extent, start);
    var endRel = coordinateRelationship(extent, end);
    if (startRel === Relationship.INTERSECTING ||
        endRel === Relationship.INTERSECTING) {
        intersects = true;
    }
    else {
        var minX = extent[0];
        var minY = extent[1];
        var maxX = extent[2];
        var maxY = extent[3];
        var startX = start[0];
        var startY = start[1];
        var endX = end[0];
        var endY = end[1];
        var slope = (endY - startY) / (endX - startX);
        var x = void 0, y = void 0;
        if (!!(endRel & Relationship.ABOVE) &&
            !(startRel & Relationship.ABOVE)) {
            // potentially intersects top
            x = endX - ((endY - maxY) / slope);
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & Relationship.RIGHT) &&
            !(startRel & Relationship.RIGHT)) {
            // potentially intersects right
            y = endY - ((endX - maxX) * slope);
            intersects = y >= minY && y <= maxY;
        }
        if (!intersects && !!(endRel & Relationship.BELOW) &&
            !(startRel & Relationship.BELOW)) {
            // potentially intersects bottom
            x = endX - ((endY - minY) / slope);
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects && !!(endRel & Relationship.LEFT) &&
            !(startRel & Relationship.LEFT)) {
            // potentially intersects left
            y = endY - ((endX - minX) * slope);
            intersects = y >= minY && y <= maxY;
        }
    }
    return intersects;
}
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 * @api
 */
function applyTransform(extent, transformFn, opt_extent) {
    var coordinates = [
        extent[0], extent[1],
        extent[0], extent[3],
        extent[2], extent[1],
        extent[2], extent[3]
    ];
    transformFn(coordinates, coordinates, 2);
    var xs = [coordinates[0], coordinates[2], coordinates[4], coordinates[6]];
    var ys = [coordinates[1], coordinates[3], coordinates[5], coordinates[7]];
    return _boundingExtentXYs(xs, ys, opt_extent);
}
//# sourceMappingURL=extent.js.map
// CONCATENATED MODULE: ./node_modules/ol/worker/webgl.js
var webgl_source = "var e=\"function\"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError(\"Cannot convert undefined or null to object\");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t},n=\"GENERATE_BUFFERS\",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,u){var a=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=u?u.vertexPosition:0,h=u?u.indexPosition:0,d=b/a;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=a,l,v,1),c.length&&i.set(c,b+3),o(i,b+=a,l,v,2),c.length&&i.set(c,b+3),o(i,b+=a,l,v,3),c.length&&i.set(c,b+3),b+=a,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o=r.customAttributesCount,s=2+o,u=new Float32Array(r.renderInstructions),a=u.length/s,l=4*a*(o+3),v=new Uint32Array(6*a),c=new Float32Array(l),g=null,b=0;b<u.length;b+=s)g=i(u,b,c,v,o,g);var h=e({vertexBuffer:c.buffer,indexBuffer:v.buffer,renderInstructions:u.buffer},r);f.postMessage(h,[c.buffer,v.buffer,u.buffer])}};";
var blob = new Blob([webgl_source], { type: 'application/javascript' });
var url = URL.createObjectURL(blob);
function webgl_create() {
    return new Worker(url);
}
//# sourceMappingURL=webgl.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl/RenderTarget.js
/**
 * A wrapper class to simplify rendering to a texture instead of the final canvas
 * @module ol/webgl/RenderTarget
 */

// for pixel color reading
var tmpArray4 = new Uint8Array(4);
/**
 * @classdesc
 * This class is a wrapper around the association of both a `WebGLTexture` and a `WebGLFramebuffer` instances,
 * simplifying initialization and binding for rendering.
 * @api
 */
var RenderTarget_WebGLRenderTarget = /** @class */ (function () {
    /**
     * @param {import("./Helper.js").default} helper WebGL helper; mandatory.
     * @param {Array<number>} [opt_size] Expected size of the render target texture; note: this can be changed later on.
     */
    function WebGLRenderTarget(helper, opt_size) {
        /**
         * @private
         * @type {import("./Helper.js").default}
         */
        this.helper_ = helper;
        var gl = helper.getGL();
        /**
         * @private
         * @type {WebGLTexture}
         */
        this.texture_ = gl.createTexture();
        /**
         * @private
         * @type {WebGLFramebuffer}
         */
        this.framebuffer_ = gl.createFramebuffer();
        /**
         * @type {Array<number>}
         * @private
         */
        this.size_ = opt_size || [1, 1];
        /**
         * @type {Uint8Array}
         * @private
         */
        this.data_ = new Uint8Array(0);
        /**
         * @type {boolean}
         * @private
         */
        this.dataCacheDirty_ = true;
        this.updateSize_();
    }
    /**
     * Changes the size of the render target texture. Note: will do nothing if the size
     * is already the same.
     * @param {Array<number>} size Expected size of the render target texture
     * @api
     */
    WebGLRenderTarget.prototype.setSize = function (size) {
        if (equals(size, this.size_)) {
            return;
        }
        this.size_[0] = size[0];
        this.size_[1] = size[1];
        this.updateSize_();
    };
    /**
     * Returns the size of the render target texture
     * @return {Array<number>} Size of the render target texture
     * @api
     */
    WebGLRenderTarget.prototype.getSize = function () {
        return this.size_;
    };
    /**
     * This will cause following calls to `#readAll` or `#readPixel` to download the content of the
     * render target into memory, which is an expensive operation.
     * This content will be kept in cache but should be cleared after each new render.
     * @api
     */
    WebGLRenderTarget.prototype.clearCachedData = function () {
        this.dataCacheDirty_ = true;
    };
    /**
     * Returns the full content of the frame buffer as a series of r, g, b, a components
     * in the 0-255 range (unsigned byte).
     * @return {Uint8Array} Integer array of color values
     * @api
     */
    WebGLRenderTarget.prototype.readAll = function () {
        if (this.dataCacheDirty_) {
            var size = this.size_;
            var gl = this.helper_.getGL();
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
            gl.readPixels(0, 0, size[0], size[1], gl.RGBA, gl.UNSIGNED_BYTE, this.data_);
            this.dataCacheDirty_ = false;
        }
        return this.data_;
    };
    /**
     * Reads one pixel of the frame buffer as an array of r, g, b, a components
     * in the 0-255 range (unsigned byte).
     * If x and/or y are outside of existing data, an array filled with 0 is returned.
     * @param {number} x Pixel coordinate
     * @param {number} y Pixel coordinate
     * @returns {Uint8Array} Integer array with one color value (4 components)
     * @api
     */
    WebGLRenderTarget.prototype.readPixel = function (x, y) {
        if (x < 0 || y < 0 || x > this.size_[0] || y >= this.size_[1]) {
            tmpArray4[0] = 0;
            tmpArray4[1] = 0;
            tmpArray4[2] = 0;
            tmpArray4[3] = 0;
            return tmpArray4;
        }
        this.readAll();
        var index = Math.floor(x) + (this.size_[1] - Math.floor(y) - 1) * this.size_[0];
        tmpArray4[0] = this.data_[index * 4];
        tmpArray4[1] = this.data_[index * 4 + 1];
        tmpArray4[2] = this.data_[index * 4 + 2];
        tmpArray4[3] = this.data_[index * 4 + 3];
        return tmpArray4;
    };
    /**
     * @return {WebGLTexture} Texture to render to
     */
    WebGLRenderTarget.prototype.getTexture = function () {
        return this.texture_;
    };
    /**
     * @return {WebGLFramebuffer} Frame buffer of the render target
     */
    WebGLRenderTarget.prototype.getFramebuffer = function () {
        return this.framebuffer_;
    };
    /**
     * @private
     */
    WebGLRenderTarget.prototype.updateSize_ = function () {
        var size = this.size_;
        var gl = this.helper_.getGL();
        this.texture_ = this.helper_.createTexture(size, null, this.texture_);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
        gl.viewport(0, 0, size[0], size[1]);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture_, 0);
        this.data_ = new Uint8Array(size[0] * size[1] * 4);
    };
    return WebGLRenderTarget;
}());
/* harmony default export */ var RenderTarget = (RenderTarget_WebGLRenderTarget);
//# sourceMappingURL=RenderTarget.js.map
// CONCATENATED MODULE: ./node_modules/ol/ObjectEventType.js
/**
 * @module ol/ObjectEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ var ObjectEventType = ({
    /**
     * Triggered when a property is changed.
     * @event module:ol/Object.ObjectEvent#propertychange
     * @api
     */
    PROPERTYCHANGE: 'propertychange'
});
//# sourceMappingURL=ObjectEventType.js.map
// CONCATENATED MODULE: ./node_modules/ol/Object.js
var Object_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/Object
 */





/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */
var ObjectEvent = /** @class */ (function (_super) {
    Object_extends(ObjectEvent, _super);
    /**
     * @param {string} type The event type.
     * @param {string} key The property name.
     * @param {*} oldValue The old value for `key`.
     */
    function ObjectEvent(type, key, oldValue) {
        var _this = _super.call(this, type) || this;
        /**
         * The name of the property whose value is changing.
         * @type {string}
         * @api
         */
        _this.key = key;
        /**
         * The old value. To get the new value use `e.target.get(e.key)` where
         * `e` is the event object.
         * @type {*}
         * @api
         */
        _this.oldValue = oldValue;
        return _this;
    }
    return ObjectEvent;
}(Event));

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */
var Object_BaseObject = /** @class */ (function (_super) {
    Object_extends(BaseObject, _super);
    /**
     * @param {Object<string, *>=} opt_values An object with key-value pairs.
     */
    function BaseObject(opt_values) {
        var _this = _super.call(this) || this;
        // Call {@link module:ol/util~getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        getUid(_this);
        /**
         * @private
         * @type {!Object<string, *>}
         */
        _this.values_ = {};
        if (opt_values !== undefined) {
            _this.setProperties(opt_values);
        }
        return _this;
    }
    /**
     * Gets a value.
     * @param {string} key Key name.
     * @return {*} Value.
     * @api
     */
    BaseObject.prototype.get = function (key) {
        var value;
        if (this.values_.hasOwnProperty(key)) {
            value = this.values_[key];
        }
        return value;
    };
    /**
     * Get a list of object property names.
     * @return {Array<string>} List of property names.
     * @api
     */
    BaseObject.prototype.getKeys = function () {
        return Object.keys(this.values_);
    };
    /**
     * Get an object of all property names and values.
     * @return {Object<string, *>} Object.
     * @api
     */
    BaseObject.prototype.getProperties = function () {
        return obj_assign({}, this.values_);
    };
    /**
     * @param {string} key Key name.
     * @param {*} oldValue Old value.
     */
    BaseObject.prototype.notify = function (key, oldValue) {
        var eventType;
        eventType = getChangeEventType(key);
        this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        eventType = ObjectEventType.PROPERTYCHANGE;
        this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    };
    /**
     * Sets a value.
     * @param {string} key Key name.
     * @param {*} value Value.
     * @param {boolean=} opt_silent Update without triggering an event.
     * @api
     */
    BaseObject.prototype.set = function (key, value, opt_silent) {
        if (opt_silent) {
            this.values_[key] = value;
        }
        else {
            var oldValue = this.values_[key];
            this.values_[key] = value;
            if (oldValue !== value) {
                this.notify(key, oldValue);
            }
        }
    };
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param {Object<string, *>} values Values.
     * @param {boolean=} opt_silent Update without triggering an event.
     * @api
     */
    BaseObject.prototype.setProperties = function (values, opt_silent) {
        for (var key in values) {
            this.set(key, values[key], opt_silent);
        }
    };
    /**
     * Unsets a property.
     * @param {string} key Key name.
     * @param {boolean=} opt_silent Unset without triggering an event.
     * @api
     */
    BaseObject.prototype.unset = function (key, opt_silent) {
        if (key in this.values_) {
            var oldValue = this.values_[key];
            delete this.values_[key];
            if (!opt_silent) {
                this.notify(key, oldValue);
            }
        }
    };
    return BaseObject;
}(ol_Observable));
/**
 * @type {Object<string, string>}
 */
var changeEventTypeCache = {};
/**
 * @param {string} key Key name.
 * @return {string} Change name.
 */
function getChangeEventType(key) {
    return changeEventTypeCache.hasOwnProperty(key) ?
        changeEventTypeCache[key] :
        (changeEventTypeCache[key] = 'change:' + key);
}
/* harmony default export */ var ol_Object = (Object_BaseObject);
//# sourceMappingURL=Object.js.map
// CONCATENATED MODULE: ./node_modules/ol/layer/Property.js
/**
 * @module ol/layer/Property
 */
/**
 * @enum {string}
 */
/* harmony default export */ var Property = ({
    OPACITY: 'opacity',
    VISIBLE: 'visible',
    EXTENT: 'extent',
    Z_INDEX: 'zIndex',
    MAX_RESOLUTION: 'maxResolution',
    MIN_RESOLUTION: 'minResolution',
    MAX_ZOOM: 'maxZoom',
    MIN_ZOOM: 'minZoom',
    SOURCE: 'source'
});
//# sourceMappingURL=Property.js.map
// CONCATENATED MODULE: ./node_modules/ol/math.js
/**
 * @module ol/math
 */
/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
var cosh = (function () {
    // Wrapped in a iife, to save the overhead of checking for the native
    // implementation on every invocation.
    var cosh;
    if ('cosh' in Math) {
        // The environment supports the native Math.cosh function, use it…
        cosh = Math.cosh;
    }
    else {
        // … else, use the reference implementation of MDN:
        cosh = function (x) {
            var y = /** @type {Math} */ (Math).exp(x);
            return (y + 1 / y) / 2;
        };
    }
    return cosh;
}());
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        }
        else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return squaredDistance(x, y, x1, y1);
}
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredDistance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return dx * dx + dy * dy;
}
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>} The resulting vector.
 */
function solveLinearSystem(mat) {
    var n = mat.length;
    for (var i = 0; i < n; i++) {
        // Find max in the i-th column (ignoring i - 1 first rows)
        var maxRow = i;
        var maxEl = Math.abs(mat[i][i]);
        for (var r = i + 1; r < n; r++) {
            var absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }
        if (maxEl === 0) {
            return null; // matrix is singular
        }
        // Swap max row with i-th (current) row
        var tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;
        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for (var j = i + 1; j < n; j++) {
            var coef = -mat[j][i] / mat[i][i];
            for (var k = i; k < n + 1; k++) {
                if (i == k) {
                    mat[j][k] = 0;
                }
                else {
                    mat[j][k] += coef * mat[i][k];
                }
            }
        }
    }
    // Solve Ax=b for upper triangular matrix A (mat)
    var x = new Array(n);
    for (var l = n - 1; l >= 0; l--) {
        x[l] = mat[l][n] / mat[l][l];
        for (var m = l - 1; m >= 0; m--) {
            mat[m][n] -= mat[m][l] * x[l];
        }
    }
    return x;
}
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
function toDegrees(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
}
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
}
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
function modulo(a, b) {
    var r = a % b;
    return r * b < 0 ? r + b : r;
}
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
function lerp(a, b, x) {
    return a + x * (b - a);
}
//# sourceMappingURL=math.js.map
// CONCATENATED MODULE: ./node_modules/ol/layer/Base.js
var Base_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/layer/Base
 */






/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */
var Base_BaseLayer = /** @class */ (function (_super) {
    Base_extends(BaseLayer, _super);
    /**
     * @param {Options} options Layer options.
     */
    function BaseLayer(options) {
        var _this = _super.call(this) || this;
        /**
         * @type {Object<string, *>}
         */
        var properties = obj_assign({}, options);
        properties[Property.OPACITY] =
            options.opacity !== undefined ? options.opacity : 1;
        assert(typeof properties[Property.OPACITY] === 'number', 64); // Layer opacity must be a number
        properties[Property.VISIBLE] =
            options.visible !== undefined ? options.visible : true;
        properties[Property.Z_INDEX] = options.zIndex;
        properties[Property.MAX_RESOLUTION] =
            options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[Property.MIN_RESOLUTION] =
            options.minResolution !== undefined ? options.minResolution : 0;
        properties[Property.MIN_ZOOM] =
            options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[Property.MAX_ZOOM] =
            options.maxZoom !== undefined ? options.maxZoom : Infinity;
        /**
         * @type {string}
         * @private
         */
        _this.className_ = properties.className !== undefined ? options.className : 'ol-layer';
        delete properties.className;
        _this.setProperties(properties);
        /**
         * @type {import("./Layer.js").State}
         * @private
         */
        _this.state_ = null;
        return _this;
    }
    /**
     * @return {string} CSS class name.
     */
    BaseLayer.prototype.getClassName = function () {
        return this.className_;
    };
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     *
     * @param {boolean=} opt_managed Layer is managed.
     * @return {import("./Layer.js").State} Layer state.
     */
    BaseLayer.prototype.getLayerState = function (opt_managed) {
        /** @type {import("./Layer.js").State} */
        var state = this.state_ || /** @type {?} */ ({
            layer: this,
            managed: opt_managed === undefined ? true : opt_managed
        });
        var zIndex = this.getZIndex();
        state.opacity = clamp(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.sourceState = this.getSourceState();
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex !== undefined ? zIndex : (state.managed === false ? Infinity : 0);
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
    };
    /**
     * @abstract
     * @param {Array<import("./Layer.js").default>=} opt_array Array of layers (to be
     *     modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    BaseLayer.prototype.getLayersArray = function (opt_array) {
        return util_abstract();
    };
    /**
     * @abstract
     * @param {Array<import("./Layer.js").State>=} opt_states Optional list of layer
     *     states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    BaseLayer.prototype.getLayerStatesArray = function (opt_states) {
        return util_abstract();
    };
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
     * will be visible regardless of extent.
     * @return {import("../extent.js").Extent|undefined} The layer extent.
     * @observable
     * @api
     */
    BaseLayer.prototype.getExtent = function () {
        return (
        /** @type {import("../extent.js").Extent|undefined} */ (this.get(Property.EXTENT)));
    };
    /**
     * Return the maximum resolution of the layer.
     * @return {number} The maximum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMaxResolution = function () {
        return /** @type {number} */ (this.get(Property.MAX_RESOLUTION));
    };
    /**
     * Return the minimum resolution of the layer.
     * @return {number} The minimum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMinResolution = function () {
        return /** @type {number} */ (this.get(Property.MIN_RESOLUTION));
    };
    /**
     * Return the minimum zoom level of the layer.
     * @return {number} The minimum zoom level of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMinZoom = function () {
        return /** @type {number} */ (this.get(Property.MIN_ZOOM));
    };
    /**
     * Return the maximum zoom level of the layer.
     * @return {number} The maximum zoom level of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMaxZoom = function () {
        return /** @type {number} */ (this.get(Property.MAX_ZOOM));
    };
    /**
     * Return the opacity of the layer (between 0 and 1).
     * @return {number} The opacity of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getOpacity = function () {
        return /** @type {number} */ (this.get(Property.OPACITY));
    };
    /**
     * @abstract
     * @return {import("../source/State.js").default} Source state.
     */
    BaseLayer.prototype.getSourceState = function () {
        return util_abstract();
    };
    /**
     * Return the visibility of the layer (`true` or `false`).
     * @return {boolean} The visibility of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getVisible = function () {
        return /** @type {boolean} */ (this.get(Property.VISIBLE));
    };
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. The default Z-index is 0.
     * @return {number} The Z-index of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getZIndex = function () {
        return /** @type {number} */ (this.get(Property.Z_INDEX));
    };
    /**
     * Set the extent at which the layer is visible.  If `undefined`, the layer
     * will be visible at all extents.
     * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setExtent = function (extent) {
        this.set(Property.EXTENT, extent);
    };
    /**
     * Set the maximum resolution at which the layer is visible.
     * @param {number} maxResolution The maximum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMaxResolution = function (maxResolution) {
        this.set(Property.MAX_RESOLUTION, maxResolution);
    };
    /**
     * Set the minimum resolution at which the layer is visible.
     * @param {number} minResolution The minimum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMinResolution = function (minResolution) {
        this.set(Property.MIN_RESOLUTION, minResolution);
    };
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} maxZoom The maximum zoom of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMaxZoom = function (maxZoom) {
        this.set(Property.MAX_ZOOM, maxZoom);
    };
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} minZoom The minimum zoom of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMinZoom = function (minZoom) {
        this.set(Property.MIN_ZOOM, minZoom);
    };
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     * @param {number} opacity The opacity of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setOpacity = function (opacity) {
        assert(typeof opacity === 'number', 64); // Layer opacity must be a number
        this.set(Property.OPACITY, opacity);
    };
    /**
     * Set the visibility of the layer (`true` or `false`).
     * @param {boolean} visible The visibility of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setVisible = function (visible) {
        this.set(Property.VISIBLE, visible);
    };
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     * @param {number} zindex The z-index of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setZIndex = function (zindex) {
        this.set(Property.Z_INDEX, zindex);
    };
    /**
     * @inheritDoc
     */
    BaseLayer.prototype.disposeInternal = function () {
        if (this.state_) {
            this.state_.layer = null;
            this.state_ = null;
        }
        _super.prototype.disposeInternal.call(this);
    };
    return BaseLayer;
}(ol_Object));
/* harmony default export */ var Base = (Base_BaseLayer);
//# sourceMappingURL=Base.js.map
// CONCATENATED MODULE: ./node_modules/ol/render/EventType.js
/**
 * @module ol/render/EventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ var render_EventType = ({
    /**
     * Triggered before a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#prerender
     * @api
     */
    PRERENDER: 'prerender',
    /**
     * Triggered after a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#postrender
     * @api
     */
    POSTRENDER: 'postrender',
    /**
     * Triggered before layers are rendered.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#precompose
     * @api
     */
    PRECOMPOSE: 'precompose',
    /**
     * Triggered after all layers are rendered.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#postcompose
     * @api
     */
    POSTCOMPOSE: 'postcompose',
    /**
     * Triggered when rendering is complete, i.e. all sources and tiles have
     * finished loading for the current viewport, and all tiles are faded in.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#rendercomplete
     * @api
     */
    RENDERCOMPLETE: 'rendercomplete'
});
//# sourceMappingURL=EventType.js.map
// CONCATENATED MODULE: ./node_modules/ol/layer/Layer.js
var layer_Layer_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/layer/Layer
 */









/**
 * @typedef {function(import("../PluggableMap.js").FrameState):HTMLElement} RenderFunction
 */
/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {import("../source/Source.js").default} [source] Source for this layer.  If not provided to the constructor,
 * the source can be set by calling {@link module:ol/layer/Layer#setSource layer.setSource(source)} after
 * construction.
 * @property {import("../PluggableMap.js").default} [map] Map.
 * @property {RenderFunction} [render] Render function. Takes the frame state as input and is expected to return an
 * HTML element. Will overwrite the default rendering for the layer.
 */
/**
 * @typedef {Object} State
 * @property {import("./Base.js").default} layer
 * @property {number} opacity Opacity, the value is rounded to two digits to appear after the decimal point.
 * @property {SourceState} sourceState
 * @property {boolean} visible
 * @property {boolean} managed
 * @property {import("../extent.js").Extent} [extent]
 * @property {number} zIndex
 * @property {number} maxResolution
 * @property {number} minResolution
 * @property {number} minZoom
 * @property {number} maxZoom
 */
/**
 * @classdesc
 * Base class from which all layer types are derived. This should only be instantiated
 * in the case where a custom layer is be added to the map with a custom `render` function.
 * Such a function can be specified in the `options` object, and is expected to return an HTML element.
 *
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with {@link module:ol/Map#addLayer}. Components
 * like {@link module:ol/interaction/Select~Select} use unmanaged layers
 * internally. These unmanaged layers are associated with the map using
 * {@link module:ol/layer/Layer~Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 *
 * Please note that for performance reasons several layers might get rendered to
 * the same HTML element, which will cause {@link module:ol/Map~Map#forEachLayerAtPixel} to
 * give false positives. To avoid this, apply different `className` properties to the
 * layers at creation time.
 *
 * @fires import("../render/Event.js").RenderEvent#prerender
 * @fires import("../render/Event.js").RenderEvent#postrender
 *
 * @template {import("../source/Source.js").default} SourceType
 * @api
 */
var Layer_Layer = /** @class */ (function (_super) {
    layer_Layer_extends(Layer, _super);
    /**
     * @param {Options} options Layer options.
     */
    function Layer(options) {
        var _this = this;
        var baseOptions = obj_assign({}, options);
        delete baseOptions.source;
        _this = _super.call(this, baseOptions) || this;
        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        _this.mapPrecomposeKey_ = null;
        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        _this.mapRenderKey_ = null;
        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        _this.sourceChangeKey_ = null;
        /**
         * @private
         * @type {import("../renderer/Layer.js").default}
         */
        _this.renderer_ = null;
        // Overwrite default render method with a custom one
        if (options.render) {
            _this.render = options.render;
        }
        if (options.map) {
            _this.setMap(options.map);
        }
        _this.addEventListener(getChangeEventType(Property.SOURCE), _this.handleSourcePropertyChange_);
        var source = options.source ? /** @type {SourceType} */ (options.source) : null;
        _this.setSource(source);
        return _this;
    }
    /**
     * @inheritDoc
     */
    Layer.prototype.getLayersArray = function (opt_array) {
        var array = opt_array ? opt_array : [];
        array.push(this);
        return array;
    };
    /**
     * @inheritDoc
     */
    Layer.prototype.getLayerStatesArray = function (opt_states) {
        var states = opt_states ? opt_states : [];
        states.push(this.getLayerState());
        return states;
    };
    /**
     * Get the layer source.
     * @return {SourceType} The layer source (or `null` if not yet set).
     * @observable
     * @api
     */
    Layer.prototype.getSource = function () {
        return /** @type {SourceType} */ (this.get(Property.SOURCE)) || null;
    };
    /**
      * @inheritDoc
      */
    Layer.prototype.getSourceState = function () {
        var source = this.getSource();
        return !source ? State.UNDEFINED : source.getState();
    };
    /**
     * @private
     */
    Layer.prototype.handleSourceChange_ = function () {
        this.changed();
    };
    /**
     * @private
     */
    Layer.prototype.handleSourcePropertyChange_ = function () {
        if (this.sourceChangeKey_) {
            unlistenByKey(this.sourceChangeKey_);
            this.sourceChangeKey_ = null;
        }
        var source = this.getSource();
        if (source) {
            this.sourceChangeKey_ = listen(source, EventType.CHANGE, this.handleSourceChange_, this);
        }
        this.changed();
    };
    /**
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
     * an array of features.
     */
    Layer.prototype.getFeatures = function (pixel) {
        return this.renderer_.getFeatures(pixel);
    };
    /**
     * In charge to manage the rendering of the layer. One layer type is
     * bounded with one layer renderer.
     * @param {?import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target which the renderer may (but need not) use
     * for rendering its content.
     * @return {HTMLElement} The rendered element.
     */
    Layer.prototype.render = function (frameState, target) {
        var layerRenderer = this.getRenderer();
        if (layerRenderer.prepareFrame(frameState)) {
            return layerRenderer.renderFrame(frameState, target);
        }
    };
    /**
     * Sets the layer to be rendered on top of other layers on a map. The map will
     * not manage this layer in its layers collection, and the callback in
     * {@link module:ol/Map#forEachLayerAtPixel} will receive `null` as layer. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use `#setMap(null)`.
     *
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map#addLayer} instead.
     * @param {import("../PluggableMap.js").default} map Map.
     * @api
     */
    Layer.prototype.setMap = function (map) {
        if (this.mapPrecomposeKey_) {
            unlistenByKey(this.mapPrecomposeKey_);
            this.mapPrecomposeKey_ = null;
        }
        if (!map) {
            this.changed();
        }
        if (this.mapRenderKey_) {
            unlistenByKey(this.mapRenderKey_);
            this.mapRenderKey_ = null;
        }
        if (map) {
            this.mapPrecomposeKey_ = listen(map, render_EventType.PRECOMPOSE, function (evt) {
                var renderEvent = /** @type {import("../render/Event.js").default} */ (evt);
                var layerStatesArray = renderEvent.frameState.layerStatesArray;
                var layerState = this.getLayerState(false);
                // A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.
                assert(!layerStatesArray.some(function (arrayLayerState) {
                    return arrayLayerState.layer === layerState.layer;
                }), 67);
                layerStatesArray.push(layerState);
            }, this);
            this.mapRenderKey_ = listen(this, EventType.CHANGE, map.render, map);
            this.changed();
        }
    };
    /**
     * Set the layer source.
     * @param {SourceType} source The layer source.
     * @observable
     * @api
     */
    Layer.prototype.setSource = function (source) {
        this.set(Property.SOURCE, source);
    };
    /**
     * Get the renderer for this layer.
     * @return {import("../renderer/Layer.js").default} The layer renderer.
     */
    Layer.prototype.getRenderer = function () {
        if (!this.renderer_) {
            this.renderer_ = this.createRenderer();
        }
        return this.renderer_;
    };
    /**
     * @return {boolean} The layer has a renderer.
     */
    Layer.prototype.hasRenderer = function () {
        return !!this.renderer_;
    };
    /**
     * Create a renderer for this layer.
     * @return {import("../renderer/Layer.js").default} A layer renderer.
     * @protected
     */
    Layer.prototype.createRenderer = function () {
        return null;
    };
    /**
     * @inheritDoc
     */
    Layer.prototype.disposeInternal = function () {
        this.setSource(null);
        _super.prototype.disposeInternal.call(this);
    };
    return Layer;
}(Base));
/**
 * Return `true` if the layer is visible and if the provided view state
 * has resolution and zoom levels that are in range of the layer's min/max.
 * @param {State} layerState Layer state.
 * @param {import("../View.js").State} viewState View state.
 * @return {boolean} The layer is visible at the given view state.
 */
function inView(layerState, viewState) {
    if (!layerState.visible) {
        return false;
    }
    var resolution = viewState.resolution;
    if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) {
        return false;
    }
    var zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}
/* harmony default export */ var layer_Layer = (Layer_Layer);
//# sourceMappingURL=Layer.js.map
// CONCATENATED MODULE: ./node_modules/ol/color.js
/**
 * @module ol/color
 */


/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 * @typedef {Array<number>} Color
 * @api
 */
/**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */
var HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */
var NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
/**
 * Return the color as an rgba string.
 * @param {Color|string} color Color.
 * @return {string} Rgba string.
 * @api
 */
function asString(color) {
    if (typeof color === 'string') {
        return color;
    }
    else {
        return color_toString(color);
    }
}
/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */
function fromNamed(color) {
    var el = document.createElement('div');
    el.style.color = color;
    if (el.style.color !== '') {
        document.body.appendChild(el);
        var rgb = getComputedStyle(el).color;
        document.body.removeChild(el);
        return rgb;
    }
    else {
        return '';
    }
}
/**
 * @param {string} s String.
 * @return {Color} Color.
 */
var fromString = (function () {
    // We maintain a small cache of parsed strings.  To provide cheap LRU-like
    // semantics, whenever the cache grows too large we simply delete an
    // arbitrary 25% of the entries.
    /**
     * @const
     * @type {number}
     */
    var MAX_CACHE_SIZE = 1024;
    /**
     * @type {Object<string, Color>}
     */
    var cache = {};
    /**
     * @type {number}
     */
    var cacheSize = 0;
    return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function (s) {
        var color;
        if (cache.hasOwnProperty(s)) {
            color = cache[s];
        }
        else {
            if (cacheSize >= MAX_CACHE_SIZE) {
                var i = 0;
                for (var key in cache) {
                    if ((i++ & 3) === 0) {
                        delete cache[key];
                        --cacheSize;
                    }
                }
            }
            color = fromStringInternal_(s);
            cache[s] = color;
            ++cacheSize;
        }
        return color;
    });
})();
/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 * @param {Color|string} color Color.
 * @return {Color} Color.
 * @api
 */
function asArray(color) {
    if (Array.isArray(color)) {
        return color;
    }
    else {
        return fromString(color);
    }
}
/**
 * @param {string} s String.
 * @private
 * @return {Color} Color.
 */
function fromStringInternal_(s) {
    var r, g, b, a, color;
    if (NAMED_COLOR_RE_.exec(s)) {
        s = fromNamed(s);
    }
    if (HEX_COLOR_RE_.exec(s)) { // hex
        var n = s.length - 1; // number of hex digits
        var d = // number of digits per channel
         void 0; // number of digits per channel
        if (n <= 4) {
            d = 1;
        }
        else {
            d = 2;
        }
        var hasAlpha = n === 4 || n === 8;
        r = parseInt(s.substr(1 + 0 * d, d), 16);
        g = parseInt(s.substr(1 + 1 * d, d), 16);
        b = parseInt(s.substr(1 + 2 * d, d), 16);
        if (hasAlpha) {
            a = parseInt(s.substr(1 + 3 * d, d), 16);
        }
        else {
            a = 255;
        }
        if (d == 1) {
            r = (r << 4) + r;
            g = (g << 4) + g;
            b = (b << 4) + b;
            if (hasAlpha) {
                a = (a << 4) + a;
            }
        }
        color = [r, g, b, a / 255];
    }
    else if (s.indexOf('rgba(') == 0) { // rgba()
        color = s.slice(5, -1).split(',').map(Number);
        normalize(color);
    }
    else if (s.indexOf('rgb(') == 0) { // rgb()
        color = s.slice(4, -1).split(',').map(Number);
        color.push(1);
        normalize(color);
    }
    else {
        assert(false, 14); // Invalid color
    }
    return color;
}
/**
 * TODO this function is only used in the test, we probably shouldn't export it
 * @param {Color} color Color.
 * @return {Color} Clamped color.
 */
function normalize(color) {
    color[0] = clamp((color[0] + 0.5) | 0, 0, 255);
    color[1] = clamp((color[1] + 0.5) | 0, 0, 255);
    color[2] = clamp((color[2] + 0.5) | 0, 0, 255);
    color[3] = clamp(color[3], 0, 1);
    return color;
}
/**
 * @param {Color} color Color.
 * @return {string} String.
 */
function color_toString(color) {
    var r = color[0];
    if (r != (r | 0)) {
        r = (r + 0.5) | 0;
    }
    var g = color[1];
    if (g != (g | 0)) {
        g = (g + 0.5) | 0;
    }
    var b = color[2];
    if (b != (b | 0)) {
        b = (b + 0.5) | 0;
    }
    var a = color[3] === undefined ? 1 : color[3];
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
/**
 * @param {string} s String.
 * @return {boolean} Whether the string is actually a valid color
 */
function isStringColor(s) {
    if (NAMED_COLOR_RE_.test(s)) {
        s = fromNamed(s);
    }
    return HEX_COLOR_RE_.test(s) || s.indexOf('rgba(') === 0 || s.indexOf('rgb(') === 0;
}
//# sourceMappingURL=color.js.map
// CONCATENATED MODULE: ./node_modules/ol/colorlike.js
/**
 * @module ol/colorlike
 */

/**
 * A type accepted by CanvasRenderingContext2D.fillStyle
 * or CanvasRenderingContext2D.strokeStyle.
 * Represents a color, pattern, or gradient. The origin for patterns and
 * gradients as fill style is an increment of 512 css pixels from map coordinate
 * `[0, 0]`. For seamless repeat patterns, width and height of the pattern image
 * must be a factor of two (2, 4, 8, ..., 512).
 *
 * @typedef {string|CanvasPattern|CanvasGradient} ColorLike
 * @api
 */
/**
 * @param {import("./color.js").Color|ColorLike} color Color.
 * @return {ColorLike} The color as an {@link ol/colorlike~ColorLike}.
 * @api
 */
function asColorLike(color) {
    if (Array.isArray(color)) {
        return color_toString(color);
    }
    else {
        return color;
    }
}
//# sourceMappingURL=colorlike.js.map
// CONCATENATED MODULE: ./node_modules/ol/dom.js
/**
 * @module ol/dom
 */
/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @param {Array<HTMLCanvasElement>=} opt_canvasPool Canvas pool to take existing canvas from.
 * @return {CanvasRenderingContext2D} The context.
 */
function createCanvasContext2D(opt_width, opt_height, opt_canvasPool) {
    var canvas = opt_canvasPool && opt_canvasPool.length ?
        opt_canvasPool.shift() : document.createElement('canvas');
    if (opt_width) {
        canvas.width = opt_width;
    }
    if (opt_height) {
        canvas.height = opt_height;
    }
    return canvas.getContext('2d');
}
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */
function dom_outerWidth(element) {
    var width = element.offsetWidth;
    var style = getComputedStyle(element);
    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
}
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */
function dom_outerHeight(element) {
    var height = element.offsetHeight;
    var style = getComputedStyle(element);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
}
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */
function replaceNode(newNode, oldNode) {
    var parent = oldNode.parentNode;
    if (parent) {
        parent.replaceChild(newNode, oldNode);
    }
}
/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */
function removeNode(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
/**
 * @param {Node} node The node to remove the children from.
 */
function removeChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 * @param {Node} node The parent node whose children need reworking.
 * @param {Array<Node>} children The desired children.
 */
function replaceChildren(node, children) {
    var oldChildren = node.childNodes;
    for (var i = 0; true; ++i) {
        var oldChild = oldChildren[i];
        var newChild = children[i];
        // check if our work is done
        if (!oldChild && !newChild) {
            break;
        }
        // check if children match
        if (oldChild === newChild) {
            continue;
        }
        // check if a new child needs to be added
        if (!oldChild) {
            node.appendChild(newChild);
            continue;
        }
        // check if an old child needs to be removed
        if (!newChild) {
            node.removeChild(oldChild);
            --i;
            continue;
        }
        // reorder
        node.insertBefore(newChild, oldChild);
    }
}
//# sourceMappingURL=dom.js.map
// CONCATENATED MODULE: ./node_modules/ol/css.js
/**
 * @module ol/css
 */
/**
 * @typedef {Object} FontParameters
 * @property {Array<string>} families
 * @property {string} style
 * @property {string} weight
 */
/**
 * The CSS class for hidden feature.
 *
 * @const
 * @type {string}
 */
var CLASS_HIDDEN = 'ol-hidden';
/**
 * The CSS class that we'll give the DOM elements to have them selectable.
 *
 * @const
 * @type {string}
 */
var CLASS_SELECTABLE = 'ol-selectable';
/**
 * The CSS class that we'll give the DOM elements to have them unselectable.
 *
 * @const
 * @type {string}
 */
var CLASS_UNSELECTABLE = 'ol-unselectable';
/**
 * The CSS class for unsupported feature.
 *
 * @const
 * @type {string}
 */
var CLASS_UNSUPPORTED = 'ol-unsupported';
/**
 * The CSS class for controls.
 *
 * @const
 * @type {string}
 */
var CLASS_CONTROL = 'ol-control';
/**
 * The CSS class that we'll give the DOM elements that are collapsed, i.e.
 * to those elements which usually can be expanded.
 *
 * @const
 * @type {string}
 */
var CLASS_COLLAPSED = 'ol-collapsed';
/**
 * Get the list of font families from a font spec.  Note that this doesn't work
 * for font families that have commas in them.
 * @param {string} The CSS font property.
 * @return {FontParameters} The font families (or null if the input spec is invalid).
 */
var getFontParameters = (function () {
    /**
     * @type {CSSStyleDeclaration}
     */
    var style;
    /**
     * @type {Object<string, FontParameters>}
     */
    var cache = {};
    return function (font) {
        if (!style) {
            style = document.createElement('div').style;
        }
        if (!(font in cache)) {
            style.font = font;
            var family = style.fontFamily;
            var fontWeight = style.fontWeight;
            var fontStyle = style.fontStyle;
            style.font = '';
            if (!family) {
                return null;
            }
            var families = family.split(/,\s?/);
            cache[font] = {
                families: families,
                weight: fontWeight,
                style: fontStyle
            };
        }
        return cache[font];
    };
})();
//# sourceMappingURL=css.js.map
// CONCATENATED MODULE: ./node_modules/ol/render/canvas.js
/**
 * @module ol/render/canvas
 */





/**
 * @typedef {Object} FillState
 * @property {import("../colorlike.js").ColorLike} fillStyle
 */
/**
 * @typedef Label
 * @property {number} width
 * @property {number} height
 * @property {Array<string|number>} contextInstructions
 */
/**
 * @typedef {Object} FillStrokeState
 * @property {import("../colorlike.js").ColorLike} [currentFillStyle]
 * @property {import("../colorlike.js").ColorLike} [currentStrokeStyle]
 * @property {CanvasLineCap} [currentLineCap]
 * @property {Array<number>} currentLineDash
 * @property {number} [currentLineDashOffset]
 * @property {CanvasLineJoin} [currentLineJoin]
 * @property {number} [currentLineWidth]
 * @property {number} [currentMiterLimit]
 * @property {number} [lastStroke]
 * @property {import("../colorlike.js").ColorLike} [fillStyle]
 * @property {import("../colorlike.js").ColorLike} [strokeStyle]
 * @property {CanvasLineCap} [lineCap]
 * @property {Array<number>} lineDash
 * @property {number} [lineDashOffset]
 * @property {CanvasLineJoin} [lineJoin]
 * @property {number} [lineWidth]
 * @property {number} [miterLimit]
 */
/**
 * @typedef {Object} StrokeState
 * @property {CanvasLineCap} lineCap
 * @property {Array<number>} lineDash
 * @property {number} lineDashOffset
 * @property {CanvasLineJoin} lineJoin
 * @property {number} lineWidth
 * @property {number} miterLimit
 * @property {import("../colorlike.js").ColorLike} strokeStyle
 */
/**
 * @typedef {Object} TextState
 * @property {string} font
 * @property {string} [textAlign]
 * @property {string} textBaseline
 * @property {string} [placement]
 * @property {number} [maxAngle]
 * @property {boolean} [overflow]
 * @property {import("../style/Fill.js").default} [backgroundFill]
 * @property {import("../style/Stroke.js").default} [backgroundStroke]
 * @property {number} [scale]
 * @property {Array<number>} [padding]
 */
/**
 * Container for decluttered replay instructions that need to be rendered or
 * omitted together, i.e. when styles render both an image and text, or for the
 * characters that form text along lines. The basic elements of this array are
 * `[minX, minY, maxX, maxY, count]`, where the first four entries are the
 * rendered extent of the group in pixel space. `count` is the number of styles
 * in the group, i.e. 2 when an image and a text are grouped, or 1 otherwise.
 * In addition to these four elements, declutter instruction arrays (i.e. the
 * arguments to {@link module:ol/render/canvas~drawImage} are appended to the array.
 * @typedef {Array<*>} DeclutterGroup
 */
/**
 * Declutter groups for support of multi geometries.
 * @typedef {Array<DeclutterGroup>} DeclutterGroups
 */
/**
 * @const
 * @type {string}
 */
var defaultFont = '10px sans-serif';
/**
 * @const
 * @type {import("../colorlike.js").ColorLike}
 */
var defaultFillStyle = '#000';
/**
 * @const
 * @type {CanvasLineCap}
 */
var defaultLineCap = 'round';
/**
 * @const
 * @type {Array<number>}
 */
var defaultLineDash = [];
/**
 * @const
 * @type {number}
 */
var defaultLineDashOffset = 0;
/**
 * @const
 * @type {CanvasLineJoin}
 */
var defaultLineJoin = 'round';
/**
 * @const
 * @type {number}
 */
var defaultMiterLimit = 10;
/**
 * @const
 * @type {import("../colorlike.js").ColorLike}
 */
var defaultStrokeStyle = '#000';
/**
 * @const
 * @type {string}
 */
var defaultTextAlign = 'center';
/**
 * @const
 * @type {string}
 */
var defaultTextBaseline = 'middle';
/**
 * @const
 * @type {Array<number>}
 */
var defaultPadding = [0, 0, 0, 0];
/**
 * @const
 * @type {number}
 */
var defaultLineWidth = 1;
/**
 * @type {BaseObject}
 */
var checkedFonts = new ol_Object();
/**
 * The label cache for text rendering. To change the default cache size of 2048
 * entries, use {@link module:ol/structs/LRUCache#setSize}.
 * Deprecated - there is no label cache any more.
 * @type {?}
 * @api
 * @deprecated
 */
var labelCache = new events_Target();
labelCache.setSize = function () {
    console.warn('labelCache is deprecated.'); //eslint-disable-line
};
/**
 * @type {CanvasRenderingContext2D}
 */
var measureContext = null;
/**
 * @type {string}
 */
var measureFont;
/**
 * @type {!Object<string, number>}
 */
var textHeights = {};
/**
 * Clears the label cache when a font becomes available.
 * @param {string} fontSpec CSS font spec.
 */
var registerFont = (function () {
    var retries = 100;
    var size = '32px ';
    var referenceFonts = ['monospace', 'serif'];
    var len = referenceFonts.length;
    var text = 'wmytzilWMYTZIL@#/&?$%10\uF013';
    var interval, referenceWidth;
    /**
     * @param {string} fontStyle Css font-style
     * @param {string} fontWeight Css font-weight
     * @param {*} fontFamily Css font-family
     * @return {boolean} Font with style and weight is available
     */
    function isAvailable(fontStyle, fontWeight, fontFamily) {
        var available = true;
        for (var i = 0; i < len; ++i) {
            var referenceFont = referenceFonts[i];
            referenceWidth = measureTextWidth(fontStyle + ' ' + fontWeight + ' ' + size + referenceFont, text);
            if (fontFamily != referenceFont) {
                var width = measureTextWidth(fontStyle + ' ' + fontWeight + ' ' + size + fontFamily + ',' + referenceFont, text);
                // If width and referenceWidth are the same, then the fallback was used
                // instead of the font we wanted, so the font is not available.
                available = available && width != referenceWidth;
            }
        }
        if (available) {
            return true;
        }
        return false;
    }
    function check() {
        var done = true;
        var fonts = checkedFonts.getKeys();
        for (var i = 0, ii = fonts.length; i < ii; ++i) {
            var font = fonts[i];
            if (checkedFonts.get(font) < retries) {
                if (isAvailable.apply(this, font.split('\n'))) {
                    clear(textHeights);
                    // Make sure that loaded fonts are picked up by Safari
                    measureContext = null;
                    measureFont = undefined;
                    checkedFonts.set(font, retries);
                }
                else {
                    checkedFonts.set(font, checkedFonts.get(font) + 1, true);
                    done = false;
                }
            }
        }
        if (done) {
            clearInterval(interval);
            interval = undefined;
        }
    }
    return function (fontSpec) {
        var font = getFontParameters(fontSpec);
        if (!font) {
            return;
        }
        var families = font.families;
        for (var i = 0, ii = families.length; i < ii; ++i) {
            var family = families[i];
            var key = font.style + '\n' + font.weight + '\n' + family;
            if (checkedFonts.get(key) === undefined) {
                checkedFonts.set(key, retries, true);
                if (!isAvailable(font.style, font.weight, family)) {
                    checkedFonts.set(key, 0, true);
                    if (interval === undefined) {
                        interval = setInterval(check, 32);
                    }
                }
            }
        }
    };
})();
/**
 * @param {string} font Font to use for measuring.
 * @return {import("../size.js").Size} Measurement.
 */
var measureTextHeight = (function () {
    /**
     * @type {HTMLDivElement}
     */
    var div;
    var heights = textHeights;
    return function (font) {
        var height = heights[font];
        if (height == undefined) {
            if (!div) {
                div = document.createElement('div');
                div.innerHTML = 'M';
                div.style.margin = '0 !important';
                div.style.padding = '0 !important';
                div.style.position = 'absolute !important';
                div.style.left = '-99999px !important';
            }
            div.style.font = font;
            document.body.appendChild(div);
            height = div.offsetHeight;
            heights[font] = height;
            document.body.removeChild(div);
        }
        return height;
    };
})();
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {number} Width.
 */
function measureTextWidth(font, text) {
    if (!measureContext) {
        measureContext = createCanvasContext2D(1, 1);
    }
    if (font != measureFont) {
        measureContext.font = font;
        measureFont = measureContext.font;
    }
    return measureContext.measureText(text).width;
}
/**
 * Measure text width using a cache.
 * @param {string} font The font.
 * @param {string} text The text to measure.
 * @param {Object<string, number>} cache A lookup of cached widths by text.
 * @returns {number} The text width.
 */
function measureAndCacheTextWidth(font, text, cache) {
    if (text in cache) {
        return cache[text];
    }
    var width = measureTextWidth(font, text);
    cache[text] = width;
    return width;
}
/**
 * @param {string} font Font to use for measuring.
 * @param {Array<string>} lines Lines to measure.
 * @param {Array<number>} widths Array will be populated with the widths of
 * each line.
 * @return {number} Width of the whole text.
 */
function measureTextWidths(font, lines, widths) {
    var numLines = lines.length;
    var width = 0;
    for (var i = 0; i < numLines; ++i) {
        var currentWidth = measureTextWidth(font, lines[i]);
        width = Math.max(width, currentWidth);
        widths.push(currentWidth);
    }
    return width;
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} offsetX X offset.
 * @param {number} offsetY Y offset.
 */
function rotateAtOffset(context, rotation, offsetX, offsetY) {
    if (rotation !== 0) {
        context.translate(offsetX, offsetY);
        context.rotate(rotation);
        context.translate(-offsetX, -offsetY);
    }
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {import("../transform.js").Transform|null} transform Transform.
 * @param {number} opacity Opacity.
 * @param {Label|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} labelOrImage Label.
 * @param {number} originX Origin X.
 * @param {number} originY Origin Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} scale Scale.
 */
function drawImageOrLabel(context, transform, opacity, labelOrImage, originX, originY, w, h, x, y, scale) {
    context.save();
    if (transform) {
        context.setTransform.apply(context, transform);
    }
    if (( /** @type {*} */(labelOrImage).contextInstructions)) {
        // label
        context.translate(x, y);
        context.scale(scale, scale);
        executeLabelInstructions(/** @type {Label} */ (labelOrImage), context);
    }
    else {
        // image
        context.drawImage(/** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */ (labelOrImage), originX, originY, w, h, x, y, w * scale, h * scale);
    }
    context.restore();
}
/**
 * @param {Label} label Label.
 * @param {CanvasRenderingContext2D} context Context.
 */
function executeLabelInstructions(label, context) {
    var contextInstructions = label.contextInstructions;
    for (var i = 0, ii = contextInstructions.length; i < ii; i += 2) {
        if (Array.isArray(contextInstructions[i + 1])) {
            CanvasRenderingContext2D.prototype[contextInstructions[i]].apply(context, contextInstructions[i + 1]);
        }
        else {
            context[contextInstructions[i]] = contextInstructions[i + 1];
        }
    }
}
//# sourceMappingURL=canvas.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/Image.js
/**
 * @module ol/style/Image
 */

/**
 * @typedef {Object} Options
 * @property {number} opacity
 * @property {boolean} rotateWithView
 * @property {number} rotation
 * @property {number} scale
 * @property {Array<number>} displacement
 */
/**
 * @classdesc
 * A base class used for creating subclasses and not instantiated in
 * apps. Base class for {@link module:ol/style/Icon~Icon}, {@link module:ol/style/Circle~CircleStyle} and
 * {@link module:ol/style/RegularShape~RegularShape}.
 * @abstract
 * @api
 */
var Image_ImageStyle = /** @class */ (function () {
    /**
     * @param {Options} options Options.
     */
    function ImageStyle(options) {
        /**
         * @private
         * @type {number}
         */
        this.opacity_ = options.opacity;
        /**
         * @private
         * @type {boolean}
         */
        this.rotateWithView_ = options.rotateWithView;
        /**
         * @private
         * @type {number}
         */
        this.rotation_ = options.rotation;
        /**
         * @private
         * @type {number}
         */
        this.scale_ = options.scale;
        /**
         * @private
         * @type {Array<number>}
         */
        this.displacement_ = options.displacement;
    }
    /**
     * Clones the style.
     * @return {ImageStyle} The cloned style.
     * @api
     */
    ImageStyle.prototype.clone = function () {
        return new ImageStyle({
            opacity: this.getOpacity(),
            scale: this.getScale(),
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            displacement: this.getDisplacement().slice()
        });
    };
    /**
     * Get the symbolizer opacity.
     * @return {number} Opacity.
     * @api
     */
    ImageStyle.prototype.getOpacity = function () {
        return this.opacity_;
    };
    /**
     * Determine whether the symbolizer rotates with the map.
     * @return {boolean} Rotate with map.
     * @api
     */
    ImageStyle.prototype.getRotateWithView = function () {
        return this.rotateWithView_;
    };
    /**
     * Get the symoblizer rotation.
     * @return {number} Rotation.
     * @api
     */
    ImageStyle.prototype.getRotation = function () {
        return this.rotation_;
    };
    /**
     * Get the symbolizer scale.
     * @return {number} Scale.
     * @api
     */
    ImageStyle.prototype.getScale = function () {
        return this.scale_;
    };
    /**
     * Get the displacement of the shape
     * @return {Array<number>} Shape's center displacement
     * @api
     */
    ImageStyle.prototype.getDisplacement = function () {
        return this.displacement_;
    };
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @abstract
     * @return {Array<number>} Anchor.
     */
    ImageStyle.prototype.getAnchor = function () {
        return util_abstract();
    };
    /**
     * Get the image element for the symbolizer.
     * @abstract
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
     */
    ImageStyle.prototype.getImage = function (pixelRatio) {
        return util_abstract();
    };
    /**
     * @abstract
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
     */
    ImageStyle.prototype.getHitDetectionImage = function (pixelRatio) {
        return util_abstract();
    };
    /**
     * @abstract
     * @return {import("../ImageState.js").default} Image state.
     */
    ImageStyle.prototype.getImageState = function () {
        return util_abstract();
    };
    /**
     * @abstract
     * @return {import("../size.js").Size} Image size.
     */
    ImageStyle.prototype.getImageSize = function () {
        return util_abstract();
    };
    /**
     * @abstract
     * @return {import("../size.js").Size} Size of the hit-detection image.
     */
    ImageStyle.prototype.getHitDetectionImageSize = function () {
        return util_abstract();
    };
    /**
     * Get the origin of the symbolizer.
     * @abstract
     * @return {Array<number>} Origin.
     */
    ImageStyle.prototype.getOrigin = function () {
        return util_abstract();
    };
    /**
     * Get the size of the symbolizer (in pixels).
     * @abstract
     * @return {import("../size.js").Size} Size.
     */
    ImageStyle.prototype.getSize = function () {
        return util_abstract();
    };
    /**
     * Set the opacity.
     *
     * @param {number} opacity Opacity.
     * @api
     */
    ImageStyle.prototype.setOpacity = function (opacity) {
        this.opacity_ = opacity;
    };
    /**
     * Set whether to rotate the style with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    ImageStyle.prototype.setRotateWithView = function (rotateWithView) {
        this.rotateWithView_ = rotateWithView;
    };
    /**
     * Set the rotation.
     *
     * @param {number} rotation Rotation.
     * @api
     */
    ImageStyle.prototype.setRotation = function (rotation) {
        this.rotation_ = rotation;
    };
    /**
     * Set the scale.
     *
     * @param {number} scale Scale.
     * @api
     */
    ImageStyle.prototype.setScale = function (scale) {
        this.scale_ = scale;
    };
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @template T
     */
    ImageStyle.prototype.listenImageChange = function (listener) {
        util_abstract();
    };
    /**
     * Load not yet loaded URI.
     * @abstract
     */
    ImageStyle.prototype.load = function () {
        util_abstract();
    };
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @template T
     */
    ImageStyle.prototype.unlistenImageChange = function (listener) {
        util_abstract();
    };
    return ImageStyle;
}());
/* harmony default export */ var style_Image = (Image_ImageStyle);
//# sourceMappingURL=Image.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/RegularShape.js
/**
 * @module ol/style/RegularShape
 */
var RegularShape_extends = (undefined && undefined.__extends) || (function () {
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






/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} points Number of points for stars and regular polygons. In case of a polygon, the number of points
 * is the number of sides.
 * @property {number} [radius] Radius of a regular polygon.
 * @property {number} [radius1] Outer radius of a star.
 * @property {number} [radius2] Inner radius of a star.
 * @property {number} [angle=0] Shape's angle in radians. A value of 0 will have one of the shape's point facing up.
 * @property {Array<number>} [displacement=[0,0]] Displacement of the shape
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {boolean} [rotateWithView=false] Whether to rotate the shape with the view.
 */
/**
 * @typedef {Object} RenderOptions
 * @property {import("../colorlike.js").ColorLike} [strokeStyle]
 * @property {number} strokeWidth
 * @property {number} size
 * @property {CanvasLineCap} lineCap
 * @property {Array<number>} lineDash
 * @property {number} lineDashOffset
 * @property {CanvasLineJoin} lineJoin
 * @property {number} miterLimit
 */
/**
 * @classdesc
 * Set regular shape style for vector features. The resulting shape will be
 * a regular polygon when `radius` is provided, or a star when `radius1` and
 * `radius2` are provided.
 * @api
 */
var RegularShape_RegularShape = /** @class */ (function (_super) {
    RegularShape_extends(RegularShape, _super);
    /**
     * @param {Options} options Options.
     */
    function RegularShape(options) {
        var _this = this;
        /**
         * @type {boolean}
         */
        var rotateWithView = options.rotateWithView !== undefined ?
            options.rotateWithView : false;
        _this = _super.call(this, {
            opacity: 1,
            rotateWithView: rotateWithView,
            rotation: options.rotation !== undefined ? options.rotation : 0,
            scale: 1,
            displacement: options.displacement !== undefined ? options.displacement : [0, 0]
        }) || this;
        /**
         * @private
         * @type {HTMLCanvasElement}
         */
        _this.canvas_ = null;
        /**
         * @private
         * @type {HTMLCanvasElement}
         */
        _this.hitDetectionCanvas_ = null;
        /**
         * @private
         * @type {import("./Fill.js").default}
         */
        _this.fill_ = options.fill !== undefined ? options.fill : null;
        /**
         * @private
         * @type {Array<number>}
         */
        _this.origin_ = [0, 0];
        /**
         * @private
         * @type {number}
         */
        _this.points_ = options.points;
        /**
         * @protected
         * @type {number}
         */
        _this.radius_ = options.radius !== undefined ? options.radius : options.radius1;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.radius2_ = options.radius2;
        /**
         * @private
         * @type {number}
         */
        _this.angle_ = options.angle !== undefined ? options.angle : 0;
        /**
         * @private
         * @type {import("./Stroke.js").default}
         */
        _this.stroke_ = options.stroke !== undefined ? options.stroke : null;
        /**
         * @private
         * @type {Array<number>}
         */
        _this.anchor_ = null;
        /**
         * @private
         * @type {import("../size.js").Size}
         */
        _this.size_ = null;
        /**
         * @private
         * @type {import("../size.js").Size}
         */
        _this.imageSize_ = null;
        /**
         * @private
         * @type {import("../size.js").Size}
         */
        _this.hitDetectionImageSize_ = null;
        _this.render();
        return _this;
    }
    /**
     * Clones the style.
     * @return {RegularShape} The cloned style.
     * @api
     */
    RegularShape.prototype.clone = function () {
        var style = new RegularShape({
            fill: this.getFill() ? this.getFill().clone() : undefined,
            points: this.getPoints(),
            radius: this.getRadius(),
            radius2: this.getRadius2(),
            angle: this.getAngle(),
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            displacement: this.getDisplacement().slice()
        });
        style.setOpacity(this.getOpacity());
        style.setScale(this.getScale());
        return style;
    };
    /**
     * @inheritDoc
     * @api
     */
    RegularShape.prototype.getAnchor = function () {
        return this.anchor_;
    };
    /**
     * Get the angle used in generating the shape.
     * @return {number} Shape's rotation in radians.
     * @api
     */
    RegularShape.prototype.getAngle = function () {
        return this.angle_;
    };
    /**
     * Get the fill style for the shape.
     * @return {import("./Fill.js").default} Fill style.
     * @api
     */
    RegularShape.prototype.getFill = function () {
        return this.fill_;
    };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.getHitDetectionImage = function (pixelRatio) {
        return this.hitDetectionCanvas_;
    };
    /**
     * @inheritDoc
     * @api
     */
    RegularShape.prototype.getImage = function (pixelRatio) {
        return this.canvas_;
    };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.getImageSize = function () {
        return this.imageSize_;
    };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.getHitDetectionImageSize = function () {
        return this.hitDetectionImageSize_;
    };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.getImageState = function () {
        return ImageState.LOADED;
    };
    /**
     * @inheritDoc
     * @api
     */
    RegularShape.prototype.getOrigin = function () {
        return this.origin_;
    };
    /**
     * Get the number of points for generating the shape.
     * @return {number} Number of points for stars and regular polygons.
     * @api
     */
    RegularShape.prototype.getPoints = function () {
        return this.points_;
    };
    /**
     * Get the (primary) radius for the shape.
     * @return {number} Radius.
     * @api
     */
    RegularShape.prototype.getRadius = function () {
        return this.radius_;
    };
    /**
     * Get the secondary radius for the shape.
     * @return {number|undefined} Radius2.
     * @api
     */
    RegularShape.prototype.getRadius2 = function () {
        return this.radius2_;
    };
    /**
     * @inheritDoc
     * @api
     */
    RegularShape.prototype.getSize = function () {
        return this.size_;
    };
    /**
     * Get the stroke style for the shape.
     * @return {import("./Stroke.js").default} Stroke style.
     * @api
     */
    RegularShape.prototype.getStroke = function () {
        return this.stroke_;
    };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.listenImageChange = function (listener) { };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.load = function () { };
    /**
     * @inheritDoc
     */
    RegularShape.prototype.unlistenImageChange = function (listener) { };
    /**
     * @protected
     */
    RegularShape.prototype.render = function () {
        var lineCap = defaultLineCap;
        var lineJoin = defaultLineJoin;
        var miterLimit = 0;
        var lineDash = null;
        var lineDashOffset = 0;
        var strokeStyle;
        var strokeWidth = 0;
        if (this.stroke_) {
            strokeStyle = this.stroke_.getColor();
            if (strokeStyle === null) {
                strokeStyle = defaultStrokeStyle;
            }
            strokeStyle = asColorLike(strokeStyle);
            strokeWidth = this.stroke_.getWidth();
            if (strokeWidth === undefined) {
                strokeWidth = defaultLineWidth;
            }
            lineDash = this.stroke_.getLineDash();
            lineDashOffset = this.stroke_.getLineDashOffset();
            lineJoin = this.stroke_.getLineJoin();
            if (lineJoin === undefined) {
                lineJoin = defaultLineJoin;
            }
            lineCap = this.stroke_.getLineCap();
            if (lineCap === undefined) {
                lineCap = defaultLineCap;
            }
            miterLimit = this.stroke_.getMiterLimit();
            if (miterLimit === undefined) {
                miterLimit = defaultMiterLimit;
            }
        }
        var size = 2 * (this.radius_ + strokeWidth) + 1;
        var renderOptions = {
            strokeStyle: strokeStyle,
            strokeWidth: strokeWidth,
            size: size,
            lineCap: lineCap,
            lineDash: lineDash,
            lineDashOffset: lineDashOffset,
            lineJoin: lineJoin,
            miterLimit: miterLimit
        };
        var context = createCanvasContext2D(size, size);
        this.canvas_ = context.canvas;
        // canvas.width and height are rounded to the closest integer
        size = this.canvas_.width;
        var imageSize = size;
        var displacement = this.getDisplacement();
        this.draw_(renderOptions, context, 0, 0);
        this.createHitDetectionCanvas_(renderOptions);
        this.anchor_ = [size / 2 - displacement[0], size / 2 + displacement[1]];
        this.size_ = [size, size];
        this.imageSize_ = [imageSize, imageSize];
    };
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D} context The rendering context.
     * @param {number} x The origin for the symbol (x).
     * @param {number} y The origin for the symbol (y).
     */
    RegularShape.prototype.draw_ = function (renderOptions, context, x, y) {
        var i, angle0, radiusC;
        // reset transform
        context.setTransform(1, 0, 0, 1, 0, 0);
        // then move to (x, y)
        context.translate(x, y);
        context.beginPath();
        var points = this.points_;
        if (points === Infinity) {
            context.arc(renderOptions.size / 2, renderOptions.size / 2, this.radius_, 0, 2 * Math.PI, true);
        }
        else {
            var radius2 = (this.radius2_ !== undefined) ? this.radius2_
                : this.radius_;
            if (radius2 !== this.radius_) {
                points = 2 * points;
            }
            for (i = 0; i <= points; i++) {
                angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
                radiusC = i % 2 === 0 ? this.radius_ : radius2;
                context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0), renderOptions.size / 2 + radiusC * Math.sin(angle0));
            }
        }
        if (this.fill_) {
            var color = this.fill_.getColor();
            if (color === null) {
                color = defaultFillStyle;
            }
            context.fillStyle = asColorLike(color);
            context.fill();
        }
        if (this.stroke_) {
            context.strokeStyle = renderOptions.strokeStyle;
            context.lineWidth = renderOptions.strokeWidth;
            if (context.setLineDash && renderOptions.lineDash) {
                context.setLineDash(renderOptions.lineDash);
                context.lineDashOffset = renderOptions.lineDashOffset;
            }
            context.lineCap = renderOptions.lineCap;
            context.lineJoin = renderOptions.lineJoin;
            context.miterLimit = renderOptions.miterLimit;
            context.stroke();
        }
        context.closePath();
    };
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     */
    RegularShape.prototype.createHitDetectionCanvas_ = function (renderOptions) {
        this.hitDetectionImageSize_ = [renderOptions.size, renderOptions.size];
        this.hitDetectionCanvas_ = this.canvas_;
        if (this.fill_) {
            var color = this.fill_.getColor();
            // determine if fill is transparent (or pattern or gradient)
            var opacity = 0;
            if (typeof color === 'string') {
                color = asArray(color);
            }
            if (color === null) {
                opacity = 1;
            }
            else if (Array.isArray(color)) {
                opacity = color.length === 4 ? color[3] : 1;
            }
            if (opacity === 0) {
                // if a transparent fill style is set, create an extra hit-detection image
                // with a default fill style
                var context = createCanvasContext2D(renderOptions.size, renderOptions.size);
                this.hitDetectionCanvas_ = context.canvas;
                this.drawHitDetectionCanvas_(renderOptions, context, 0, 0);
            }
        }
    };
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D} context The context.
     * @param {number} x The origin for the symbol (x).
     * @param {number} y The origin for the symbol (y).
     */
    RegularShape.prototype.drawHitDetectionCanvas_ = function (renderOptions, context, x, y) {
        // reset transform
        context.setTransform(1, 0, 0, 1, 0, 0);
        // then move to (x, y)
        context.translate(x, y);
        context.beginPath();
        var points = this.points_;
        if (points === Infinity) {
            context.arc(renderOptions.size / 2, renderOptions.size / 2, this.radius_, 0, 2 * Math.PI, true);
        }
        else {
            var radius2 = (this.radius2_ !== undefined) ? this.radius2_
                : this.radius_;
            if (radius2 !== this.radius_) {
                points = 2 * points;
            }
            var i = void 0, radiusC = void 0, angle0 = void 0;
            for (i = 0; i <= points; i++) {
                angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
                radiusC = i % 2 === 0 ? this.radius_ : radius2;
                context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0), renderOptions.size / 2 + radiusC * Math.sin(angle0));
            }
        }
        context.fillStyle = defaultFillStyle;
        context.fill();
        if (this.stroke_) {
            context.strokeStyle = renderOptions.strokeStyle;
            context.lineWidth = renderOptions.strokeWidth;
            if (renderOptions.lineDash) {
                context.setLineDash(renderOptions.lineDash);
                context.lineDashOffset = renderOptions.lineDashOffset;
            }
            context.stroke();
        }
        context.closePath();
    };
    return RegularShape;
}(style_Image));
/* harmony default export */ var style_RegularShape = (RegularShape_RegularShape);
//# sourceMappingURL=RegularShape.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/Circle.js
/**
 * @module ol/style/Circle
 */
var Circle_extends = (undefined && undefined.__extends) || (function () {
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

/**
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} radius Circle radius.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {Array<number>} [displacement=[0,0]] displacement
 */
/**
 * @classdesc
 * Set circle style for vector features.
 * @api
 */
var CircleStyle = /** @class */ (function (_super) {
    Circle_extends(CircleStyle, _super);
    /**
     * @param {Options=} opt_options Options.
     */
    function CircleStyle(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            points: Infinity,
            fill: options.fill,
            radius: options.radius,
            stroke: options.stroke,
            displacement: options.displacement !== undefined ? options.displacement : [0, 0]
        }) || this;
        return _this;
    }
    /**
    * Clones the style.
    * @return {CircleStyle} The cloned style.
    * @override
    * @api
    */
    CircleStyle.prototype.clone = function () {
        var style = new CircleStyle({
            fill: this.getFill() ? this.getFill().clone() : undefined,
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            radius: this.getRadius(),
            displacement: this.getDisplacement().slice()
        });
        style.setOpacity(this.getOpacity());
        style.setScale(this.getScale());
        return style;
    };
    /**
     * Set the circle radius.
     *
     * @param {number} radius Circle radius.
     * @api
     */
    CircleStyle.prototype.setRadius = function (radius) {
        this.radius_ = radius;
        this.render();
    };
    return CircleStyle;
}(style_RegularShape));
/* harmony default export */ var Circle = (CircleStyle);
//# sourceMappingURL=Circle.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/Fill.js
/**
 * @module ol/style/Fill
 */
/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color=null] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 */
/**
 * @classdesc
 * Set fill style for vector features.
 * @api
 */
var Fill = /** @class */ (function () {
    /**
     * @param {Options=} opt_options Options.
     */
    function Fill(opt_options) {
        var options = opt_options || {};
        /**
         * @private
         * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
         */
        this.color_ = options.color !== undefined ? options.color : null;
    }
    /**
     * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
     * @return {Fill} The cloned style.
     * @api
     */
    Fill.prototype.clone = function () {
        var color = this.getColor();
        return new Fill({
            color: Array.isArray(color) ? color.slice() : color || undefined
        });
    };
    /**
     * Get the fill color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
     * @api
     */
    Fill.prototype.getColor = function () {
        return this.color_;
    };
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
     * @api
     */
    Fill.prototype.setColor = function (color) {
        this.color_ = color;
    };
    return Fill;
}());
/* harmony default export */ var style_Fill = (Fill);
//# sourceMappingURL=Fill.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/Stroke.js
/**
 * @module ol/style/Stroke
 */
/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 * @property {CanvasLineCap} [lineCap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [lineJoin='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [lineDash] Line dash pattern. Default is `null` (no dash).
 * Please note that Internet Explorer 10 and lower do not support the `setLineDash` method on
 * the `CanvasRenderingContext2D` and therefore this option will have no visual effect in these browsers.
 * @property {number} [lineDashOffset=0] Line dash offset.
 * @property {number} [miterLimit=10] Miter limit.
 * @property {number} [width] Width.
 */
/**
 * @classdesc
 * Set stroke style for vector features.
 * Note that the defaults given are the Canvas defaults, which will be used if
 * option is not defined. The `get` functions return whatever was entered in
 * the options; they will not return the default.
 * @api
 */
var Stroke = /** @class */ (function () {
    /**
     * @param {Options=} opt_options Options.
     */
    function Stroke(opt_options) {
        var options = opt_options || {};
        /**
         * @private
         * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
         */
        this.color_ = options.color !== undefined ? options.color : null;
        /**
         * @private
         * @type {CanvasLineCap|undefined}
         */
        this.lineCap_ = options.lineCap;
        /**
         * @private
         * @type {Array<number>}
         */
        this.lineDash_ = options.lineDash !== undefined ? options.lineDash : null;
        /**
         * @private
         * @type {number|undefined}
         */
        this.lineDashOffset_ = options.lineDashOffset;
        /**
         * @private
         * @type {CanvasLineJoin|undefined}
         */
        this.lineJoin_ = options.lineJoin;
        /**
         * @private
         * @type {number|undefined}
         */
        this.miterLimit_ = options.miterLimit;
        /**
         * @private
         * @type {number|undefined}
         */
        this.width_ = options.width;
    }
    /**
     * Clones the style.
     * @return {Stroke} The cloned style.
     * @api
     */
    Stroke.prototype.clone = function () {
        var color = this.getColor();
        return new Stroke({
            color: Array.isArray(color) ? color.slice() : color || undefined,
            lineCap: this.getLineCap(),
            lineDash: this.getLineDash() ? this.getLineDash().slice() : undefined,
            lineDashOffset: this.getLineDashOffset(),
            lineJoin: this.getLineJoin(),
            miterLimit: this.getMiterLimit(),
            width: this.getWidth()
        });
    };
    /**
     * Get the stroke color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
     * @api
     */
    Stroke.prototype.getColor = function () {
        return this.color_;
    };
    /**
     * Get the line cap type for the stroke.
     * @return {CanvasLineCap|undefined} Line cap.
     * @api
     */
    Stroke.prototype.getLineCap = function () {
        return this.lineCap_;
    };
    /**
     * Get the line dash style for the stroke.
     * @return {Array<number>} Line dash.
     * @api
     */
    Stroke.prototype.getLineDash = function () {
        return this.lineDash_;
    };
    /**
     * Get the line dash offset for the stroke.
     * @return {number|undefined} Line dash offset.
     * @api
     */
    Stroke.prototype.getLineDashOffset = function () {
        return this.lineDashOffset_;
    };
    /**
     * Get the line join type for the stroke.
     * @return {CanvasLineJoin|undefined} Line join.
     * @api
     */
    Stroke.prototype.getLineJoin = function () {
        return this.lineJoin_;
    };
    /**
     * Get the miter limit for the stroke.
     * @return {number|undefined} Miter limit.
     * @api
     */
    Stroke.prototype.getMiterLimit = function () {
        return this.miterLimit_;
    };
    /**
     * Get the stroke width.
     * @return {number|undefined} Width.
     * @api
     */
    Stroke.prototype.getWidth = function () {
        return this.width_;
    };
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
     * @api
     */
    Stroke.prototype.setColor = function (color) {
        this.color_ = color;
    };
    /**
     * Set the line cap.
     *
     * @param {CanvasLineCap|undefined} lineCap Line cap.
     * @api
     */
    Stroke.prototype.setLineCap = function (lineCap) {
        this.lineCap_ = lineCap;
    };
    /**
     * Set the line dash.
     *
     * Please note that Internet Explorer 10 and lower [do not support][mdn] the
     * `setLineDash` method on the `CanvasRenderingContext2D` and therefore this
     * property will have no visual effect in these browsers.
     *
     * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
     *
     * @param {Array<number>} lineDash Line dash.
     * @api
     */
    Stroke.prototype.setLineDash = function (lineDash) {
        this.lineDash_ = lineDash;
    };
    /**
     * Set the line dash offset.
     *
     * @param {number|undefined} lineDashOffset Line dash offset.
     * @api
     */
    Stroke.prototype.setLineDashOffset = function (lineDashOffset) {
        this.lineDashOffset_ = lineDashOffset;
    };
    /**
     * Set the line join.
     *
     * @param {CanvasLineJoin|undefined} lineJoin Line join.
     * @api
     */
    Stroke.prototype.setLineJoin = function (lineJoin) {
        this.lineJoin_ = lineJoin;
    };
    /**
     * Set the miter limit.
     *
     * @param {number|undefined} miterLimit Miter limit.
     * @api
     */
    Stroke.prototype.setMiterLimit = function (miterLimit) {
        this.miterLimit_ = miterLimit;
    };
    /**
     * Set the width.
     *
     * @param {number|undefined} width Width.
     * @api
     */
    Stroke.prototype.setWidth = function (width) {
        this.width_ = width;
    };
    return Stroke;
}());
/* harmony default export */ var style_Stroke = (Stroke);
//# sourceMappingURL=Stroke.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/Style.js
/**
 * @module ol/style/Style
 */





/**
 * A function that takes an {@link module:ol/Feature} and a `{number}`
 * representing the view's resolution. The function should return a
 * {@link module:ol/style/Style} or an array of them. This way e.g. a
 * vector layer can be styled.
 *
 * @typedef {function(import("../Feature.js").FeatureLike, number):(Style|Array<Style>)} StyleFunction
 */
/**
 * A {@link Style}, an array of {@link Style}, or a {@link StyleFunction}.
 * @typedef {Style|Array<Style>|StyleFunction} StyleLike
 */
/**
 * A function that takes an {@link module:ol/Feature} as argument and returns an
 * {@link module:ol/geom/Geometry} that will be rendered and styled for the feature.
 *
 * @typedef {function(import("../Feature.js").FeatureLike):
 *     (import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined)} GeometryFunction
 */
/**
 * Custom renderer function. Takes two arguments:
 *
 * 1. The pixel coordinates of the geometry in GeoJSON notation.
 * 2. The {@link module:ol/render~State} of the layer renderer.
 *
 * @typedef {function((import("../coordinate.js").Coordinate|Array<import("../coordinate.js").Coordinate>|Array<Array<import("../coordinate.js").Coordinate>>),import("../render.js").State): void}
 * RenderFunction
 */
/**
 * @typedef {Object} Options
 * @property {string|import("../geom/Geometry.js").default|GeometryFunction} [geometry] Feature property or geometry
 * or function returning a geometry to render for this style.
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {import("./Image.js").default} [image] Image style.
 * @property {RenderFunction} [renderer] Custom renderer. When configured, `fill`, `stroke` and `image` will be
 * ignored, and the provided function will be called with each render frame for each geometry.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Text.js").default} [text] Text style.
 * @property {number} [zIndex] Z index.
 */
/**
 * @classdesc
 * Container for vector feature rendering styles. Any changes made to the style
 * or its children through `set*()` methods will not take effect until the
 * feature or layer that uses the style is re-rendered.
 *
 * ## Feature styles
 *
 * If no style is defined, the following default style is used:
 * ```js
 *  import {Fill, Stroke, Circle, Style} from 'ol/style';
 *
 *  var fill = new Fill({
 *    color: 'rgba(255,255,255,0.4)'
 *  });
 *  var stroke = new Stroke({
 *    color: '#3399CC',
 *    width: 1.25
 *  });
 *  var styles = [
 *    new Style({
 *      image: new Circle({
 *        fill: fill,
 *        stroke: stroke,
 *        radius: 5
 *      }),
 *      fill: fill,
 *      stroke: stroke
 *    })
 *  ];
 * ```
 *
 * A separate editing style has the following defaults:
 * ```js
 *  import {Fill, Stroke, Circle, Style} from 'ol/style';
 *  import GeometryType from 'ol/geom/GeometryType';
 *
 *  var white = [255, 255, 255, 1];
 *  var blue = [0, 153, 255, 1];
 *  var width = 3;
 *  styles[GeometryType.POLYGON] = [
 *    new Style({
 *      fill: new Fill({
 *        color: [255, 255, 255, 0.5]
 *      })
 *    })
 *  ];
 *  styles[GeometryType.MULTI_POLYGON] =
 *      styles[GeometryType.POLYGON];
 *  styles[GeometryType.LINE_STRING] = [
 *    new Style({
 *      stroke: new Stroke({
 *        color: white,
 *        width: width + 2
 *      })
 *    }),
 *    new Style({
 *      stroke: new Stroke({
 *        color: blue,
 *        width: width
 *      })
 *    })
 *  ];
 *  styles[GeometryType.MULTI_LINE_STRING] =
 *      styles[GeometryType.LINE_STRING];
 *  styles[GeometryType.POINT] = [
 *    new Style({
 *      image: new Circle({
 *        radius: width * 2,
 *        fill: new Fill({
 *          color: blue
 *        }),
 *        stroke: new Stroke({
 *          color: white,
 *          width: width / 2
 *        })
 *      }),
 *      zIndex: Infinity
 *    })
 *  ];
 *  styles[GeometryType.MULTI_POINT] =
 *      styles[GeometryType.POINT];
 *  styles[GeometryType.GEOMETRY_COLLECTION] =
 *      styles[GeometryType.POLYGON].concat(
 *          styles[GeometryType.LINE_STRING],
 *          styles[GeometryType.POINT]
 *      );
 * ```
 *
 * @api
 */
var Style = /** @class */ (function () {
    /**
     * @param {Options=} opt_options Style options.
     */
    function Style(opt_options) {
        var options = opt_options || {};
        /**
         * @private
         * @type {string|import("../geom/Geometry.js").default|GeometryFunction}
         */
        this.geometry_ = null;
        /**
         * @private
         * @type {!GeometryFunction}
         */
        this.geometryFunction_ = defaultGeometryFunction;
        if (options.geometry !== undefined) {
            this.setGeometry(options.geometry);
        }
        /**
         * @private
         * @type {import("./Fill.js").default}
         */
        this.fill_ = options.fill !== undefined ? options.fill : null;
        /**
           * @private
           * @type {import("./Image.js").default}
           */
        this.image_ = options.image !== undefined ? options.image : null;
        /**
         * @private
         * @type {RenderFunction|null}
         */
        this.renderer_ = options.renderer !== undefined ? options.renderer : null;
        /**
         * @private
         * @type {import("./Stroke.js").default}
         */
        this.stroke_ = options.stroke !== undefined ? options.stroke : null;
        /**
         * @private
         * @type {import("./Text.js").default}
         */
        this.text_ = options.text !== undefined ? options.text : null;
        /**
         * @private
         * @type {number|undefined}
         */
        this.zIndex_ = options.zIndex;
    }
    /**
     * Clones the style.
     * @return {Style} The cloned style.
     * @api
     */
    Style.prototype.clone = function () {
        var geometry = this.getGeometry();
        if (geometry && typeof geometry === 'object') {
            geometry = /** @type {import("../geom/Geometry.js").default} */ (geometry).clone();
        }
        return new Style({
            geometry: geometry,
            fill: this.getFill() ? this.getFill().clone() : undefined,
            image: this.getImage() ? this.getImage().clone() : undefined,
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            text: this.getText() ? this.getText().clone() : undefined,
            zIndex: this.getZIndex()
        });
    };
    /**
     * Get the custom renderer function that was configured with
     * {@link #setRenderer} or the `renderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    Style.prototype.getRenderer = function () {
        return this.renderer_;
    };
    /**
     * Sets a custom renderer function for this style. When set, `fill`, `stroke`
     * and `image` options of the style will be ignored.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    Style.prototype.setRenderer = function (renderer) {
        this.renderer_ = renderer;
    };
    /**
     * Get the geometry to be rendered.
     * @return {string|import("../geom/Geometry.js").default|GeometryFunction}
     * Feature property or geometry or function that returns the geometry that will
     * be rendered with this style.
     * @api
     */
    Style.prototype.getGeometry = function () {
        return this.geometry_;
    };
    /**
     * Get the function used to generate a geometry for rendering.
     * @return {!GeometryFunction} Function that is called with a feature
     * and returns the geometry to render instead of the feature's geometry.
     * @api
     */
    Style.prototype.getGeometryFunction = function () {
        return this.geometryFunction_;
    };
    /**
     * Get the fill style.
     * @return {import("./Fill.js").default} Fill style.
     * @api
     */
    Style.prototype.getFill = function () {
        return this.fill_;
    };
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default} fill Fill style.
     * @api
     */
    Style.prototype.setFill = function (fill) {
        this.fill_ = fill;
    };
    /**
     * Get the image style.
     * @return {import("./Image.js").default} Image style.
     * @api
     */
    Style.prototype.getImage = function () {
        return this.image_;
    };
    /**
     * Set the image style.
     * @param {import("./Image.js").default} image Image style.
     * @api
     */
    Style.prototype.setImage = function (image) {
        this.image_ = image;
    };
    /**
     * Get the stroke style.
     * @return {import("./Stroke.js").default} Stroke style.
     * @api
     */
    Style.prototype.getStroke = function () {
        return this.stroke_;
    };
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default} stroke Stroke style.
     * @api
     */
    Style.prototype.setStroke = function (stroke) {
        this.stroke_ = stroke;
    };
    /**
     * Get the text style.
     * @return {import("./Text.js").default} Text style.
     * @api
     */
    Style.prototype.getText = function () {
        return this.text_;
    };
    /**
     * Set the text style.
     * @param {import("./Text.js").default} text Text style.
     * @api
     */
    Style.prototype.setText = function (text) {
        this.text_ = text;
    };
    /**
     * Get the z-index for the style.
     * @return {number|undefined} ZIndex.
     * @api
     */
    Style.prototype.getZIndex = function () {
        return this.zIndex_;
    };
    /**
     * Set a geometry that is rendered instead of the feature's geometry.
     *
     * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
     *     Feature property or geometry or function returning a geometry to render
     *     for this style.
     * @api
     */
    Style.prototype.setGeometry = function (geometry) {
        if (typeof geometry === 'function') {
            this.geometryFunction_ = geometry;
        }
        else if (typeof geometry === 'string') {
            this.geometryFunction_ = function (feature) {
                return (
                /** @type {import("../geom/Geometry.js").default} */ (feature.get(geometry)));
            };
        }
        else if (!geometry) {
            this.geometryFunction_ = defaultGeometryFunction;
        }
        else if (geometry !== undefined) {
            this.geometryFunction_ = function () {
                return (
                /** @type {import("../geom/Geometry.js").default} */ (geometry));
            };
        }
        this.geometry_ = geometry;
    };
    /**
     * Set the z-index.
     *
     * @param {number|undefined} zIndex ZIndex.
     * @api
     */
    Style.prototype.setZIndex = function (zIndex) {
        this.zIndex_ = zIndex;
    };
    return Style;
}());
/**
 * Convert the provided object into a style function.  Functions passed through
 * unchanged.  Arrays of Style or single style objects wrapped in a
 * new style function.
 * @param {StyleFunction|Array<Style>|Style} obj
 *     A style function, a single style, or an array of styles.
 * @return {StyleFunction} A style function.
 */
function toFunction(obj) {
    var styleFunction;
    if (typeof obj === 'function') {
        styleFunction = obj;
    }
    else {
        /**
         * @type {Array<Style>}
         */
        var styles_1;
        if (Array.isArray(obj)) {
            styles_1 = obj;
        }
        else {
            assert(typeof /** @type {?} */ (obj).getZIndex === 'function', 41); // Expected an `Style` or an array of `Style`
            var style = /** @type {Style} */ (obj);
            styles_1 = [style];
        }
        styleFunction = function () {
            return styles_1;
        };
    }
    return styleFunction;
}
/**
 * @type {Array<Style>}
 */
var defaultStyles = null;
/**
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {number} resolution Resolution.
 * @return {Array<Style>} Style.
 */
function createDefaultStyle(feature, resolution) {
    // We don't use an immediately-invoked function
    // and a closure so we don't get an error at script evaluation time in
    // browsers that do not support Canvas. (import("./Circle.js").CircleStyle does
    // canvas.getContext('2d') at construction time, which will cause an.error
    // in such browsers.)
    if (!defaultStyles) {
        var fill = new style_Fill({
            color: 'rgba(255,255,255,0.4)'
        });
        var stroke = new style_Stroke({
            color: '#3399CC',
            width: 1.25
        });
        defaultStyles = [
            new Style({
                image: new Circle({
                    fill: fill,
                    stroke: stroke,
                    radius: 5
                }),
                fill: fill,
                stroke: stroke
            })
        ];
    }
    return defaultStyles;
}
/**
 * Default styles for editing features.
 * @return {Object<import("../geom/GeometryType.js").default, Array<Style>>} Styles
 */
function createEditingStyle() {
    /** @type {Object<import("../geom/GeometryType.js").default, Array<Style>>} */
    var styles = {};
    var white = [255, 255, 255, 1];
    var blue = [0, 153, 255, 1];
    var width = 3;
    styles[GeometryType.POLYGON] = [
        new Style({
            fill: new style_Fill({
                color: [255, 255, 255, 0.5]
            })
        })
    ];
    styles[GeometryType.MULTI_POLYGON] =
        styles[GeometryType.POLYGON];
    styles[GeometryType.LINE_STRING] = [
        new Style({
            stroke: new style_Stroke({
                color: white,
                width: width + 2
            })
        }),
        new Style({
            stroke: new style_Stroke({
                color: blue,
                width: width
            })
        })
    ];
    styles[GeometryType.MULTI_LINE_STRING] =
        styles[GeometryType.LINE_STRING];
    styles[GeometryType.CIRCLE] =
        styles[GeometryType.POLYGON].concat(styles[GeometryType.LINE_STRING]);
    styles[GeometryType.POINT] = [
        new Style({
            image: new Circle({
                radius: width * 2,
                fill: new style_Fill({
                    color: blue
                }),
                stroke: new style_Stroke({
                    color: white,
                    width: width / 2
                })
            }),
            zIndex: Infinity
        })
    ];
    styles[GeometryType.MULTI_POINT] =
        styles[GeometryType.POINT];
    styles[GeometryType.GEOMETRY_COLLECTION] =
        styles[GeometryType.POLYGON].concat(styles[GeometryType.LINE_STRING], styles[GeometryType.POINT]);
    return styles;
}
/**
 * Function that is called with a feature and returns its default geometry.
 * @param {import("../Feature.js").FeatureLike} feature Feature to get the geometry for.
 * @return {import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined} Geometry to render.
 */
function defaultGeometryFunction(feature) {
    return feature.getGeometry();
}
/* harmony default export */ var style_Style = (Style);
//# sourceMappingURL=Style.js.map
// CONCATENATED MODULE: ./node_modules/ol/layer/BaseVector.js
var BaseVector_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/layer/BaseVector
 */



/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {import("../render.js").OrderFunction} [renderOrder] Render order. Function to be used when sorting
 * features before rendering. By default features are drawn in the order that they are created. Use
 * `null` to avoid the sort, but get an undefined draw order.
 * @property {number} [renderBuffer=100] The buffer in pixels around the viewport extent used by the
 * renderer when getting features from the vector source for the rendering or hit-detection.
 * Recommended value: the size of the largest symbol, line width or label.
 * @property {import("../source/Vector.js").default} [source] Source.
 * @property {import("../PluggableMap.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link module:ol/Map#addLayer}.
 * @property {boolean} [declutter=false] Declutter images and text. Decluttering is applied to all
 * image and text styles of all Vector and VectorTile layers that have set this to `true`. The priority
 * is defined by the z-index of the layer, the `zIndex` of the style and the render order of features.
 * Higher z-index means higher priority. Within the same z-index, a feature rendered before another has
 * higher priority.
 * @property {import("../style/Style.js").StyleLike} [style] Layer style. See
 * {@link module:ol/style} for default style which will be used if this is not defined.
 * @property {boolean} [updateWhileAnimating=false] When set to `true`, feature batches will
 * be recreated during animations. This means that no vectors will be shown clipped, but the
 * setting will have a performance impact for large amounts of vector data. When set to `false`,
 * batches will be recreated when no animation is active.
 * @property {boolean} [updateWhileInteracting=false] When set to `true`, feature batches will
 * be recreated during interactions. See also `updateWhileAnimating`.
 */
/**
 * @enum {string}
 * @private
 */
var BaseVector_Property = {
    RENDER_ORDER: 'renderOrder'
};
/**
 * @classdesc
 * Vector data that is rendered client-side.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Vector.js").default|import("../source/VectorTile.js").default} VectorSourceType
 * @extends {Layer<VectorSourceType>}
 * @api
 */
var BaseVector_BaseVectorLayer = /** @class */ (function (_super) {
    BaseVector_extends(BaseVectorLayer, _super);
    /**
     * @param {Options=} opt_options Options.
     */
    function BaseVectorLayer(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var baseOptions = obj_assign({}, options);
        delete baseOptions.style;
        delete baseOptions.renderBuffer;
        delete baseOptions.updateWhileAnimating;
        delete baseOptions.updateWhileInteracting;
        _this = _super.call(this, baseOptions) || this;
        /**
         * @private
         * @type {boolean}
         */
        _this.declutter_ = options.declutter !== undefined ? options.declutter : false;
        /**
         * @type {number}
         * @private
         */
        _this.renderBuffer_ = options.renderBuffer !== undefined ?
            options.renderBuffer : 100;
        /**
         * User provided style.
         * @type {import("../style/Style.js").StyleLike}
         * @private
         */
        _this.style_ = null;
        /**
         * Style function for use within the library.
         * @type {import("../style/Style.js").StyleFunction|undefined}
         * @private
         */
        _this.styleFunction_ = undefined;
        _this.setStyle(options.style);
        /**
         * @type {boolean}
         * @private
         */
        _this.updateWhileAnimating_ = options.updateWhileAnimating !== undefined ?
            options.updateWhileAnimating : false;
        /**
         * @type {boolean}
         * @private
         */
        _this.updateWhileInteracting_ = options.updateWhileInteracting !== undefined ?
            options.updateWhileInteracting : false;
        return _this;
    }
    /**
     * @return {boolean} Declutter.
     */
    BaseVectorLayer.prototype.getDeclutter = function () {
        return this.declutter_;
    };
    /**
     * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
     * that resolves with an array of features. The array will either contain the topmost feature
     * when a hit was detected, or it will be empty.
     *
     * The hit detection algorithm used for this method is optimized for performance, but is less
     * accurate than the one used in {@link import("../PluggableMap.js").default#getFeaturesAtPixel}: Text
     * is not considered, and icons are only represented by their bounding box instead of the exact
     * image.
     *
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with an array of features.
     * @api
     */
    BaseVectorLayer.prototype.getFeatures = function (pixel) {
        return _super.prototype.getFeatures.call(this, pixel);
    };
    /**
     * @return {number|undefined} Render buffer.
     */
    BaseVectorLayer.prototype.getRenderBuffer = function () {
        return this.renderBuffer_;
    };
    /**
     * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
     *     order.
     */
    BaseVectorLayer.prototype.getRenderOrder = function () {
        return (
        /** @type {import("../render.js").OrderFunction|null|undefined} */ (this.get(BaseVector_Property.RENDER_ORDER)));
    };
    /**
     * Get the style for features.  This returns whatever was passed to the `style`
     * option at construction or to the `setStyle` method.
     * @return {import("../style/Style.js").StyleLike}
     *     Layer style.
     * @api
     */
    BaseVectorLayer.prototype.getStyle = function () {
        return this.style_;
    };
    /**
     * Get the style function.
     * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
     * @api
     */
    BaseVectorLayer.prototype.getStyleFunction = function () {
        return this.styleFunction_;
    };
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     animating.
     */
    BaseVectorLayer.prototype.getUpdateWhileAnimating = function () {
        return this.updateWhileAnimating_;
    };
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     interacting.
     */
    BaseVectorLayer.prototype.getUpdateWhileInteracting = function () {
        return this.updateWhileInteracting_;
    };
    /**
     * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
     *     Render order.
     */
    BaseVectorLayer.prototype.setRenderOrder = function (renderOrder) {
        this.set(BaseVector_Property.RENDER_ORDER, renderOrder);
    };
    /**
     * Set the style for features.  This can be a single style object, an array
     * of styles, or a function that takes a feature and resolution and returns
     * an array of styles. If it is `undefined` the default style is used. If
     * it is `null` the layer has no style (a `null` style), so only features
     * that have their own styles will be rendered in the layer. See
     * {@link module:ol/style} for information on the default style.
     * @param {import("../style/Style.js").default|Array<import("../style/Style.js").default>|import("../style/Style.js").StyleFunction|null|undefined} style Layer style.
     * @api
     */
    BaseVectorLayer.prototype.setStyle = function (style) {
        this.style_ = style !== undefined ? style : createDefaultStyle;
        this.styleFunction_ = style === null ?
            undefined : toFunction(this.style_);
        this.changed();
    };
    return BaseVectorLayer;
}(layer_Layer));
/* harmony default export */ var BaseVector = (BaseVector_BaseVectorLayer);
//# sourceMappingURL=BaseVector.js.map
// CONCATENATED MODULE: ./node_modules/ol/source/VectorEventType.js
/**
 * @module ol/source/VectorEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ var VectorEventType = ({
    /**
     * Triggered when a feature is added to the source.
     * @event module:ol/source/Vector.VectorSourceEvent#addfeature
     * @api
     */
    ADDFEATURE: 'addfeature',
    /**
     * Triggered when a feature is updated.
     * @event module:ol/source/Vector.VectorSourceEvent#changefeature
     * @api
     */
    CHANGEFEATURE: 'changefeature',
    /**
     * Triggered when the clear method is called on the source.
     * @event module:ol/source/Vector.VectorSourceEvent#clear
     * @api
     */
    CLEAR: 'clear',
    /**
     * Triggered when a feature is removed from the source.
     * See {@link module:ol/source/Vector#clear source.clear()} for exceptions.
     * @event module:ol/source/Vector.VectorSourceEvent#removefeature
     * @api
     */
    REMOVEFEATURE: 'removefeature'
});
//# sourceMappingURL=VectorEventType.js.map
// CONCATENATED MODULE: ./node_modules/ol/renderer/webgl/PointsLayer.js
var PointsLayer_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/renderer/webgl/PointsLayer
 */















/**
 * @typedef {Object} CustomAttribute A description of a custom attribute to be passed on to the GPU, with a value different
 * for each feature.
 * @property {string} name Attribute name.
 * @property {function(import("../../Feature").default, Object<string, *>):number} callback This callback computes the numerical value of the
 * attribute for a given feature (properties are available as 2nd arg for quicker access).
 */
/**
 * @typedef {Object} FeatureCacheItem Object that holds a reference to a feature, its geometry and properties. Used to optimize
 * rebuildBuffers by accessing these objects quicker.
 * @property {import("../../Feature").default} feature Feature
 * @property {Object<string, *>} properties Feature properties
 * @property {import("../../geom").Geometry} geometry Feature geometry
 */
/**
 * @typedef {Object} Options
 * @property {Array<CustomAttribute>} [attributes] These attributes will be read from the features in the source and then
 * passed to the GPU. The `name` property of each attribute will serve as its identifier:
 *  * In the vertex shader as an `attribute` by prefixing it with `a_`
 *  * In the fragment shader as a `varying` by prefixing it with `v_`
 * Please note that these can only be numerical values.
 * @property {string} vertexShader Vertex shader source, mandatory.
 * @property {string} fragmentShader Fragment shader source, mandatory.
 * @property {string} [hitVertexShader] Vertex shader source for hit detection rendering.
 * @property {string} [hitFragmentShader] Fragment shader source for hit detection rendering.
 * @property {Object.<string,import("../../webgl/Helper").UniformValue>} [uniforms] Uniform definitions for the post process steps
 * Please note that `u_texture` is reserved for the main texture slot.
 * @property {Array<import("./Layer").PostProcessesOptions>} [postProcesses] Post-processes definitions
 */
/**
 * @classdesc
 * WebGL vector renderer optimized for points.
 * All features will be rendered as quads (two triangles forming a square). New data will be flushed to the GPU
 * every time the vector source changes.
 *
 * You need to provide vertex and fragment shaders for rendering. This can be done using
 * {@link module:ol/webgl/ShaderBuilder} utilities. These shaders shall expect a `a_position` attribute
 * containing the screen-space projected center of the quad, as well as a `a_index` attribute
 * whose value (0, 1, 2 or 3) indicates which quad vertex is currently getting processed (see structure below).
 *
 * To include variable attributes in the shaders, you need to declare them using the `attributes` property of
 * the options object like so:
 * ```js
 * new WebGLPointsLayerRenderer(layer, {
 *   attributes: [
 *     {
 *       name: 'size',
 *       callback: function(feature) {
 *         // compute something with the feature
 *       }
 *     },
 *     {
 *       name: 'weight',
 *       callback: function(feature) {
 *         // compute something with the feature
 *       }
 *     },
 *   ],
 *   vertexShader:
 *     // shader using attribute a_weight and a_size
 *   fragmentShader:
 *     // shader using varying v_weight and v_size
 * ```
 *
 * To enable hit detection, you must as well provide dedicated shaders using the `hitVertexShader`
 * and `hitFragmentShader` properties. These shall expect the `a_hitColor` attribute to contain
 * the final color that will have to be output for hit detection to work.
 *
 * The following uniform is used for the main texture: `u_texture`.
 *
 * Please note that the main shader output should have premultiplied alpha, otherwise visual anomalies may occur.
 *
 * Points are rendered as quads with the following structure:
 *
 * ```
 *   (u0, v1)      (u1, v1)
 *  [3]----------[2]
 *   |`           |
 *   |  `         |
 *   |    `       |
 *   |      `     |
 *   |        `   |
 *   |          ` |
 *  [0]----------[1]
 *   (u0, v0)      (u1, v0)
 *  ```
 *
 * This uses {@link module:ol/webgl/Helper~WebGLHelper} internally.
 *
 * @api
 */
var PointsLayer_WebGLPointsLayerRenderer = /** @class */ (function (_super) {
    PointsLayer_extends(WebGLPointsLayerRenderer, _super);
    /**
     * @param {import("../../layer/Layer.js").default} layer Layer.
     * @param {Options} options Options.
     */
    function WebGLPointsLayerRenderer(layer, options) {
        var _this = this;
        var uniforms = options.uniforms || {};
        var projectionMatrixTransform = create();
        uniforms[DefaultUniform.PROJECTION_MATRIX] = projectionMatrixTransform;
        _this = _super.call(this, layer, {
            uniforms: uniforms,
            postProcesses: options.postProcesses
        }) || this;
        _this.sourceRevision_ = -1;
        _this.verticesBuffer_ = new Buffer(ARRAY_BUFFER, DYNAMIC_DRAW);
        _this.hitVerticesBuffer_ = new Buffer(ARRAY_BUFFER, DYNAMIC_DRAW);
        _this.indicesBuffer_ = new Buffer(ELEMENT_ARRAY_BUFFER, DYNAMIC_DRAW);
        _this.program_ = _this.helper.getProgram(options.fragmentShader, options.vertexShader);
        /**
         * @type {boolean}
         * @private
         */
        _this.hitDetectionEnabled_ = options.hitFragmentShader && options.hitVertexShader ? true : false;
        _this.hitProgram_ = _this.hitDetectionEnabled_ && _this.helper.getProgram(options.hitFragmentShader, options.hitVertexShader);
        var customAttributes = options.attributes ?
            options.attributes.map(function (attribute) {
                return {
                    name: 'a_' + attribute.name,
                    size: 1,
                    type: AttributeType.FLOAT
                };
            }) : [];
        /**
         * A list of attributes used by the renderer. By default only the position and
         * index of the vertex (0 to 3) are required.
         * @type {Array<import('../../webgl/Helper.js').AttributeDescription>}
         */
        _this.attributes = [{
                name: 'a_position',
                size: 2,
                type: AttributeType.FLOAT
            }, {
                name: 'a_index',
                size: 1,
                type: AttributeType.FLOAT
            }].concat(customAttributes);
        /**
         * A list of attributes used for hit detection.
         * @type {Array<import('../../webgl/Helper.js').AttributeDescription>}
         */
        _this.hitDetectionAttributes = [{
                name: 'a_position',
                size: 2,
                type: AttributeType.FLOAT
            }, {
                name: 'a_index',
                size: 1,
                type: AttributeType.FLOAT
            }, {
                name: 'a_hitColor',
                size: 4,
                type: AttributeType.FLOAT
            }, {
                name: 'a_featureUid',
                size: 1,
                type: AttributeType.FLOAT
            }].concat(customAttributes);
        _this.customAttributes = options.attributes ? options.attributes : [];
        _this.previousExtent_ = createEmpty();
        /**
         * This transform is updated on every frame and is the composition of:
         * - invert of the world->screen transform that was used when rebuilding buffers (see `this.renderTransform_`)
         * - current world->screen transform
         * @type {import("../../transform.js").Transform}
         * @private
         */
        _this.currentTransform_ = projectionMatrixTransform;
        /**
         * This transform is updated when buffers are rebuilt and converts world space coordinates to screen space
         * @type {import("../../transform.js").Transform}
         * @private
         */
        _this.renderTransform_ = create();
        /**
         * @type {import("../../transform.js").Transform}
         * @private
         */
        _this.invertRenderTransform_ = create();
        /**
         * @type {Float32Array}
         * @private
         */
        _this.renderInstructions_ = new Float32Array(0);
        /**
         * These instructions are used for hit detection
         * @type {Float32Array}
         * @private
         */
        _this.hitRenderInstructions_ = new Float32Array(0);
        /**
         * @type {WebGLRenderTarget}
         * @private
         */
        _this.hitRenderTarget_ = _this.hitDetectionEnabled_ && new RenderTarget(_this.helper);
        _this.worker_ = webgl_create();
        _this.worker_.addEventListener('message', function (event) {
            var received = event.data;
            if (received.type === WebGLWorkerMessageType.GENERATE_BUFFERS) {
                var projectionTransform = received.projectionTransform;
                if (received.hitDetection) {
                    this.hitVerticesBuffer_.fromArrayBuffer(received.vertexBuffer);
                    this.helper.flushBufferData(this.hitVerticesBuffer_);
                }
                else {
                    this.verticesBuffer_.fromArrayBuffer(received.vertexBuffer);
                    this.helper.flushBufferData(this.verticesBuffer_);
                }
                this.indicesBuffer_.fromArrayBuffer(received.indexBuffer);
                this.helper.flushBufferData(this.indicesBuffer_);
                this.renderTransform_ = projectionTransform;
                makeInverse(this.invertRenderTransform_, this.renderTransform_);
                if (received.hitDetection) {
                    this.hitRenderInstructions_ = new Float32Array(event.data.renderInstructions);
                }
                else {
                    this.renderInstructions_ = new Float32Array(event.data.renderInstructions);
                }
                this.getLayer().changed();
            }
        }.bind(_this));
        /**
         * This object will be updated when the source changes. Key is uid.
         * @type {Object<string, FeatureCacheItem>}
         * @private
         */
        _this.featureCache_ = {};
        /**
         * Amount of features in the cache.
         * @type {number}
         * @private
         */
        _this.featureCount_ = 0;
        var source = _this.getLayer().getSource();
        _this.sourceListenKeys_ = [
            listen(source, VectorEventType.ADDFEATURE, _this.handleSourceFeatureAdded_, _this),
            listen(source, VectorEventType.CHANGEFEATURE, _this.handleSourceFeatureChanged_, _this),
            listen(source, VectorEventType.REMOVEFEATURE, _this.handleSourceFeatureDelete_, _this)
        ];
        source.forEachFeature(function (feature) {
            this.featureCache_[getUid(feature)] = {
                feature: feature,
                properties: feature.getProperties(),
                geometry: feature.getGeometry()
            };
            this.featureCount_++;
        }.bind(_this));
        return _this;
    }
    /**
     * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
     * @private
     */
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureAdded_ = function (event) {
        var feature = event.feature;
        this.featureCache_[getUid(feature)] = {
            feature: feature,
            properties: feature.getProperties(),
            geometry: feature.getGeometry()
        };
        this.featureCount_++;
    };
    /**
     * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
     * @private
     */
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureChanged_ = function (event) {
        var feature = event.feature;
        this.featureCache_[getUid(feature)] = {
            feature: feature,
            properties: feature.getProperties(),
            geometry: feature.getGeometry()
        };
    };
    /**
     * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
     * @private
     */
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureDelete_ = function (event) {
        var feature = event.feature;
        delete this.featureCache_[getUid(feature)];
        this.featureCount_--;
    };
    /**
     * @inheritDoc
     */
    WebGLPointsLayerRenderer.prototype.renderFrame = function (frameState) {
        var renderCount = this.indicesBuffer_.getSize();
        this.helper.drawElements(0, renderCount);
        this.helper.finalizeDraw(frameState);
        var canvas = this.helper.getCanvas();
        var layerState = frameState.layerStatesArray[frameState.layerIndex];
        var opacity = layerState.opacity;
        if (opacity !== parseFloat(canvas.style.opacity)) {
            canvas.style.opacity = opacity;
        }
        if (this.hitDetectionEnabled_) {
            this.renderHitDetection(frameState);
            this.hitRenderTarget_.clearCachedData();
        }
        return canvas;
    };
    /**
     * @inheritDoc
     */
    WebGLPointsLayerRenderer.prototype.prepareFrame = function (frameState) {
        var layer = this.getLayer();
        var vectorSource = layer.getSource();
        var viewState = frameState.viewState;
        var viewNotMoving = !frameState.viewHints[ViewHint.ANIMATING] && !frameState.viewHints[ViewHint.INTERACTING];
        var extentChanged = !extent_equals(this.previousExtent_, frameState.extent);
        var sourceChanged = this.sourceRevision_ < vectorSource.getRevision();
        if (sourceChanged) {
            this.sourceRevision_ = vectorSource.getRevision();
        }
        if (viewNotMoving && (extentChanged || sourceChanged)) {
            var projection = viewState.projection;
            var resolution = viewState.resolution;
            var renderBuffer = layer instanceof BaseVector ? layer.getRenderBuffer() : 0;
            var extent = extent_buffer(frameState.extent, renderBuffer * resolution);
            vectorSource.loadFeatures(extent, resolution, projection);
            this.rebuildBuffers_(frameState);
            this.previousExtent_ = frameState.extent.slice();
        }
        // apply the current projection transform with the invert of the one used to fill buffers
        this.helper.makeProjectionTransform(frameState, this.currentTransform_);
        multiply(this.currentTransform_, this.invertRenderTransform_);
        this.helper.useProgram(this.program_);
        this.helper.prepareDraw(frameState);
        // write new data
        this.helper.bindBuffer(this.verticesBuffer_);
        this.helper.bindBuffer(this.indicesBuffer_);
        this.helper.enableAttributes(this.attributes);
        return true;
    };
    /**
     * Rebuild internal webgl buffers based on current view extent; costly, should not be called too much
     * @param {import("../../PluggableMap").FrameState} frameState Frame state.
     * @private
     */
    WebGLPointsLayerRenderer.prototype.rebuildBuffers_ = function (frameState) {
        // saves the projection transform for the current frame state
        var projectionTransform = create();
        this.helper.makeProjectionTransform(frameState, projectionTransform);
        // here we anticipate the amount of render instructions that we well generate
        // this can be done since we know that for normal render we only have x, y as base instructions,
        // and x, y, r, g, b, a and featureUid for hit render instructions
        // and we also know the amount of custom attributes to append to these
        var totalInstructionsCount = (2 + this.customAttributes.length) * this.featureCount_;
        if (!this.renderInstructions_ || this.renderInstructions_.length !== totalInstructionsCount) {
            this.renderInstructions_ = new Float32Array(totalInstructionsCount);
        }
        if (this.hitDetectionEnabled_) {
            var totalHitInstructionsCount = (7 + this.customAttributes.length) * this.featureCount_;
            if (!this.hitRenderInstructions_ || this.hitRenderInstructions_.length !== totalHitInstructionsCount) {
                this.hitRenderInstructions_ = new Float32Array(totalHitInstructionsCount);
            }
        }
        // loop on features to fill the buffer
        var featureCache, geometry;
        var tmpCoords = [];
        var tmpColor = [];
        var renderIndex = 0;
        var hitIndex = 0;
        var hitColor;
        for (var featureUid in this.featureCache_) {
            featureCache = this.featureCache_[featureUid];
            geometry = /** @type {import("../../geom").Point} */ (featureCache.geometry);
            if (!geometry || geometry.getType() !== GeometryType.POINT) {
                continue;
            }
            tmpCoords[0] = geometry.getFlatCoordinates()[0];
            tmpCoords[1] = geometry.getFlatCoordinates()[1];
            apply(projectionTransform, tmpCoords);
            hitColor = colorEncodeId(hitIndex + 6, tmpColor);
            this.renderInstructions_[renderIndex++] = tmpCoords[0];
            this.renderInstructions_[renderIndex++] = tmpCoords[1];
            // for hit detection, the feature uid is saved in the opacity value
            // and the index of the opacity value is encoded in the color values
            if (this.hitDetectionEnabled_) {
                this.hitRenderInstructions_[hitIndex++] = tmpCoords[0];
                this.hitRenderInstructions_[hitIndex++] = tmpCoords[1];
                this.hitRenderInstructions_[hitIndex++] = hitColor[0];
                this.hitRenderInstructions_[hitIndex++] = hitColor[1];
                this.hitRenderInstructions_[hitIndex++] = hitColor[2];
                this.hitRenderInstructions_[hitIndex++] = hitColor[3];
                this.hitRenderInstructions_[hitIndex++] = Number(featureUid);
            }
            // pushing custom attributes
            var value = void 0;
            for (var j = 0; j < this.customAttributes.length; j++) {
                value = this.customAttributes[j].callback(featureCache.feature, featureCache.properties);
                this.renderInstructions_[renderIndex++] = value;
                if (this.hitDetectionEnabled_) {
                    this.hitRenderInstructions_[hitIndex++] = value;
                }
            }
        }
        /** @type {import('./Layer').WebGLWorkerGenerateBuffersMessage} */
        var message = {
            type: WebGLWorkerMessageType.GENERATE_BUFFERS,
            renderInstructions: this.renderInstructions_.buffer,
            customAttributesCount: this.customAttributes.length
        };
        // additional properties will be sent back as-is by the worker
        message['projectionTransform'] = projectionTransform;
        this.worker_.postMessage(message, [this.renderInstructions_.buffer]);
        this.renderInstructions_ = null;
        /** @type {import('./Layer').WebGLWorkerGenerateBuffersMessage} */
        if (this.hitDetectionEnabled_) {
            var hitMessage = {
                type: WebGLWorkerMessageType.GENERATE_BUFFERS,
                renderInstructions: this.hitRenderInstructions_.buffer,
                customAttributesCount: 5 + this.customAttributes.length
            };
            hitMessage['projectionTransform'] = projectionTransform;
            hitMessage['hitDetection'] = true;
            this.worker_.postMessage(hitMessage, [this.hitRenderInstructions_.buffer]);
            this.hitRenderInstructions_ = null;
        }
    };
    /**
     * @inheritDoc
     */
    WebGLPointsLayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, declutteredFeatures) {
        assert(this.hitDetectionEnabled_, 66);
        if (!this.hitRenderInstructions_) {
            return;
        }
        var pixel = apply(frameState.coordinateToPixelTransform, coordinate.slice());
        var data = this.hitRenderTarget_.readPixel(pixel[0] / 2, pixel[1] / 2);
        var color = [
            data[0] / 255,
            data[1] / 255,
            data[2] / 255,
            data[3] / 255
        ];
        var index = colorDecodeId(color);
        var opacity = this.hitRenderInstructions_[index];
        var uid = Math.floor(opacity).toString();
        var source = this.getLayer().getSource();
        var feature = source.getFeatureByUid(uid);
        if (feature) {
            return callback(feature, this.getLayer());
        }
    };
    /**
     * Render the hit detection data to the corresponding render target
     * @param {import("../../PluggableMap.js").FrameState} frameState current frame state
     */
    WebGLPointsLayerRenderer.prototype.renderHitDetection = function (frameState) {
        // skip render entirely if vertex buffers not ready/generated yet
        if (!this.hitVerticesBuffer_.getSize()) {
            return;
        }
        this.hitRenderTarget_.setSize([
            Math.floor(frameState.size[0] / 2),
            Math.floor(frameState.size[1] / 2)
        ]);
        this.helper.useProgram(this.hitProgram_);
        this.helper.prepareDrawToRenderTarget(frameState, this.hitRenderTarget_, true);
        this.helper.bindBuffer(this.hitVerticesBuffer_);
        this.helper.bindBuffer(this.indicesBuffer_);
        this.helper.enableAttributes(this.hitDetectionAttributes);
        var renderCount = this.indicesBuffer_.getSize();
        this.helper.drawElements(0, renderCount);
    };
    /**
     * @inheritDoc
     */
    WebGLPointsLayerRenderer.prototype.disposeInternal = function () {
        this.worker_.terminate();
        this.layer_ = null;
        this.sourceListenKeys_.forEach(function (key) {
            unlistenByKey(key);
        });
        this.sourceListenKeys_ = null;
        _super.prototype.disposeInternal.call(this);
    };
    return WebGLPointsLayerRenderer;
}(webgl_Layer));
/* harmony default export */ var PointsLayer = (PointsLayer_WebGLPointsLayerRenderer);
//# sourceMappingURL=PointsLayer.js.map
// CONCATENATED MODULE: ./node_modules/ol/style/expressions.js
/**
 * Operators and utilities used for style expressions
 * @module ol/style/expressions
 */

/**
 * Base type used for literal style parameters; can be a number literal or the output of an operator,
 * which in turns takes {@link ExpressionValue} arguments.
 *
 * The following operators can be used:
 *
 * * Reading operators:
 *   * `['get', 'attributeName']` fetches a feature attribute (it will be prefixed by `a_` in the shader)
 *     Note: those will be taken from the attributes provided to the renderer
 *   * `['var', 'varName']` fetches a value from the style variables, or 0 if undefined
 *   * `['time']` returns the time in seconds since the creation of the layer
 *   * `['zoom']` returns the current zoom level
 *   * `['resolution']` returns the current resolution
 *
 * * Math operators:
 *   * `['*', value1, value2]` multiplies `value1` by `value2`
 *   * `['/', value1, value2]` divides `value1` by `value2`
 *   * `['+', value1, value2]` adds `value1` and `value2`
 *   * `['-', value1, value2]` subtracts `value2` from `value1`
 *   * `['clamp', value, low, high]` clamps `value` between `low` and `high`
 *   * `['%', value1, value2]` returns the result of `value1 % value2` (modulo)
 *   * `['^', value1, value2]` returns the value of `value1` raised to the `value2` power
 *
 * * Transform operators:
 *   * `['case', condition1, output1, ...conditionN, outputN, fallback]` selects the first output whose corresponding
 *     condition evaluates to `true`. If no match is found, returns the `fallback` value.
 *     All conditions should be `boolean`, output and fallback can be any kind.
 *   * `['match', input, match1, output1, ...matchN, outputN, fallback]` compares the `input` value against all
 *     provided `matchX` values, returning the output associated with the first valid match. If no match is found,
 *     returns the `fallback` value.
 *     `input` and `matchX` values must all be of the same type, and can be `number` or `string`. `outputX` and
 *     `fallback` values must be of the same type, and can be of any kind.
 *   * `['interpolate', interpolation, input, stop1, output1, ...stopN, outputN]` returns a value by interpolating between
 *     pairs of inputs and outputs; `interpolation` can either be `['linear']` or `['exponential', base]` where `base` is
 *     the rate of increase from stop A to stop B (i.e. power to which the interpolation ratio is raised); a value
 *     of 1 is equivalent to `['linear']`.
 *     `input` and `stopX` values must all be of type `number`. `outputX` values can be `number` or `color` values.
 *     Note: `input` will be clamped between `stop1` and `stopN`, meaning that all output values will be comprised
 *     between `output1` and `outputN`.
 *
 * * Logical operators:
 *   * `['<', value1, value2]` returns `true` if `value1` is strictly lower than `value2`, or `false` otherwise.
 *   * `['<=', value1, value2]` returns `true` if `value1` is lower than or equals `value2`, or `false` otherwise.
 *   * `['>', value1, value2]` returns `true` if `value1` is strictly greater than `value2`, or `false` otherwise.
 *   * `['>=', value1, value2]` returns `true` if `value1` is greater than or equals `value2`, or `false` otherwise.
 *   * `['==', value1, value2]` returns `true` if `value1` equals `value2`, or `false` otherwise.
 *   * `['!=', value1, value2]` returns `true` if `value1` does not equal `value2`, or `false` otherwise.
 *   * `['!', value1]` returns `false` if `value1` is `true` or greater than `0`, or `true` otherwise.
 *   * `['between', value1, value2, value3]` returns `true` if `value1` is contained between `value2` and `value3`
 *     (inclusively), or `false` otherwise.
 *
 * * Conversion operators:
 *   * `['array', value1, ...valueN]` creates a numerical array from `number` values; please note that the amount of
 *     values can currently only be 2, 3 or 4.
 *   * `['color', red, green, blue, alpha]` creates a `color` value from `number` values; the `alpha` parameter is
 *     optional; if not specified, it will be set to 1.
 *     Note: `red`, `green` and `blue` components must be values between 0 and 255; `alpha` between 0 and 1.
 *
 * Values can either be literals or another operator, as they will be evaluated recursively.
 * Literal values can be of the following types:
 * * `boolean`
 * * `number`
 * * `string`
 * * {@link module:ol/color~Color}
 *
 * @typedef {Array<*>|import("../color.js").Color|string|number|boolean} ExpressionValue
 */
/**
 * Possible inferred types from a given value or expression.
 * Note: these are binary flags.
 * @enum {number}
 */
var ValueTypes = {
    NUMBER: 1,
    STRING: 2,
    COLOR: 4,
    BOOLEAN: 8,
    NUMBER_ARRAY: 16,
    ANY: 31,
    NONE: 0
};
/**
 * An operator declaration must contain two methods: `getReturnType` which returns a type based on
 * the operator arguments, and `toGlsl` which returns a GLSL-compatible string.
 * Note: both methods can process arguments recursively.
 * @typedef {Object} Operator
 * @property {function(Array<ExpressionValue>): ValueTypes|number} getReturnType Returns one or several types
 * @property {function(ParsingContext, Array<ExpressionValue>, ValueTypes=): string} toGlsl Returns a GLSL-compatible string
 * Note: takes in an optional type hint as 3rd parameter
 */
/**
 * Operator declarations
 * @type {Object<string, Operator>}
 */
var Operators = {};
/**
 * Returns the possible types for a given value (each type being a binary flag)
 * To test a value use e.g. `getValueType(v) & ValueTypes.BOOLEAN`
 * @param {ExpressionValue} value Value
 * @returns {ValueTypes|number} Type or types inferred from the value
 */
function getValueType(value) {
    if (typeof value === 'number') {
        return ValueTypes.NUMBER;
    }
    if (typeof value === 'boolean') {
        return ValueTypes.BOOLEAN;
    }
    if (typeof value === 'string') {
        if (isStringColor(value)) {
            return ValueTypes.COLOR | ValueTypes.STRING;
        }
        return ValueTypes.STRING;
    }
    if (!Array.isArray(value)) {
        throw new Error("Unhandled value type: " + JSON.stringify(value));
    }
    var valueArr = /** @type {Array<*>} */ (value);
    var onlyNumbers = valueArr.every(function (v) {
        return typeof v === 'number';
    });
    if (onlyNumbers) {
        if (valueArr.length === 3 || valueArr.length === 4) {
            return ValueTypes.COLOR | ValueTypes.NUMBER_ARRAY;
        }
        return ValueTypes.NUMBER_ARRAY;
    }
    if (typeof valueArr[0] !== 'string') {
        throw new Error("Expected an expression operator but received: " + JSON.stringify(valueArr));
    }
    var operator = Operators[valueArr[0]];
    if (operator === undefined) {
        throw new Error("Unrecognized expression operator: " + JSON.stringify(valueArr));
    }
    return operator.getReturnType(valueArr.slice(1));
}
/**
 * Checks if only one value type is enabled in the input number.
 * @param {ValueTypes|number} valueType Number containing value type binary flags
 * @return {boolean} True if only one type flag is enabled, false if zero or multiple
 */
function isTypeUnique(valueType) {
    return Math.log2(valueType) % 1 === 0;
}
/**
 * Context available during the parsing of an expression.
 * @typedef {Object} ParsingContext
 * @property {boolean} [inFragmentShader] If false, means the expression output should be made for a vertex shader
 * @property {Array<string>} variables List of variables used in the expression; contains **unprefixed names**
 * @property {Array<string>} attributes List of attributes used in the expression; contains **unprefixed names**
 * @property {Object<string, number>} stringLiteralsMap This object maps all encountered string values to a number
 */
/**
 * Will return the number as a float with a dot separator, which is required by GLSL.
 * @param {number} v Numerical value.
 * @returns {string} The value as string.
 */
function numberToGlsl(v) {
    var s = v.toString();
    return s.indexOf('.') === -1 ? s + '.0' : s;
}
/**
 * Will return the number array as a float with a dot separator, concatenated with ', '.
 * @param {Array<number>} array Numerical values array.
 * @returns {string} The array as a vector, e. g.: `vec3(1.0, 2.0, 3.0)`.
 */
function arrayToGlsl(array) {
    if (array.length < 2 || array.length > 4) {
        throw new Error('`formatArray` can only output `vec2`, `vec3` or `vec4` arrays.');
    }
    return "vec" + array.length + "(" + array.map(numberToGlsl).join(', ') + ")";
}
/**
 * Will normalize and converts to string a `vec4` color array compatible with GLSL.
 * @param {string|import("../color.js").Color} color Color either in string format or [r, g, b, a] array format,
 * with RGB components in the 0..255 range and the alpha component in the 0..1 range.
 * Note that the final array will always have 4 components.
 * @returns {string} The color expressed in the `vec4(1.0, 1.0, 1.0, 1.0)` form.
 */
function colorToGlsl(color) {
    var array = asArray(color).slice();
    if (array.length < 4) {
        array.push(1);
    }
    return arrayToGlsl(array.map(function (c, i) {
        return i < 3 ? c / 255 : c;
    }));
}
/**
 * Returns a stable equivalent number for the string literal.
 * @param {ParsingContext} context Parsing context
 * @param {string} string String literal value
 * @returns {number} Number equivalent
 */
function getStringNumberEquivalent(context, string) {
    if (context.stringLiteralsMap[string] === undefined) {
        context.stringLiteralsMap[string] = Object.keys(context.stringLiteralsMap).length;
    }
    return context.stringLiteralsMap[string];
}
/**
 * Returns a stable equivalent number for the string literal, for use in shaders. This number is then
 * converted to be a GLSL-compatible string.
 * @param {ParsingContext} context Parsing context
 * @param {string} string String literal value
 * @returns {string} GLSL-compatible string containing a number
 */
function stringToGlsl(context, string) {
    return numberToGlsl(getStringNumberEquivalent(context, string));
}
/**
 * Recursively parses a style expression and outputs a GLSL-compatible string. Takes in a parsing context that
 * will be read and modified during the parsing operation.
 * @param {ParsingContext} context Parsing context
 * @param {ExpressionValue} value Value
 * @param {ValueTypes|number} [typeHint] Hint for the expected final type (can be several types combined)
 * @returns {string} GLSL-compatible output
 */
function expressionToGlsl(context, value, typeHint) {
    // operator
    if (Array.isArray(value) && typeof value[0] === 'string') {
        var operator = Operators[value[0]];
        if (operator === undefined) {
            throw new Error("Unrecognized expression operator: " + JSON.stringify(value));
        }
        return operator.toGlsl(context, value.slice(1), typeHint);
    }
    else if ((getValueType(value) & ValueTypes.NUMBER) > 0) {
        return numberToGlsl(/** @type {number} */ (value));
    }
    else if ((getValueType(value) & ValueTypes.BOOLEAN) > 0) {
        return value.toString();
    }
    else if (((getValueType(value) & ValueTypes.STRING) > 0) &&
        (typeHint === undefined || typeHint == ValueTypes.STRING)) {
        return stringToGlsl(context, value.toString());
    }
    else if (((getValueType(value) & ValueTypes.COLOR) > 0) &&
        (typeHint === undefined || typeHint == ValueTypes.COLOR)) {
        return colorToGlsl(/** @type {number[]|string} */ (value));
    }
    else if ((getValueType(value) & ValueTypes.NUMBER_ARRAY) > 0) {
        return arrayToGlsl(/** @type {number[]} */ (value));
    }
}
function assertNumber(value) {
    if (!(getValueType(value) & ValueTypes.NUMBER)) {
        throw new Error("A numeric value was expected, got " + JSON.stringify(value) + " instead");
    }
}
function assertNumbers(values) {
    for (var i = 0; i < values.length; i++) {
        assertNumber(values[i]);
    }
}
function assertString(value) {
    if (!(getValueType(value) & ValueTypes.STRING)) {
        throw new Error("A string value was expected, got " + JSON.stringify(value) + " instead");
    }
}
function assertBoolean(value) {
    if (!(getValueType(value) & ValueTypes.BOOLEAN)) {
        throw new Error("A boolean value was expected, got " + JSON.stringify(value) + " instead");
    }
}
function assertArgsCount(args, count) {
    if (args.length !== count) {
        throw new Error("Exactly " + count + " arguments were expected, got " + args.length + " instead");
    }
}
function assertArgsMinCount(args, count) {
    if (args.length < count) {
        throw new Error("At least " + count + " arguments were expected, got " + args.length + " instead");
    }
}
function assertArgsMaxCount(args, count) {
    if (args.length > count) {
        throw new Error("At most " + count + " arguments were expected, got " + args.length + " instead");
    }
}
function assertArgsEven(args) {
    if (args.length % 2 !== 0) {
        throw new Error("An even amount of arguments was expected, got " + args + " instead");
    }
}
function assertArgsOdd(args) {
    if (args.length % 2 === 0) {
        throw new Error("An even amount of arguments was expected, got " + args + " instead");
    }
}
function assertUniqueInferredType(args, types) {
    if (!isTypeUnique(types)) {
        throw new Error("Could not infer only one type from the following expression: " + JSON.stringify(args));
    }
}
Operators['get'] = {
    getReturnType: function (args) {
        return ValueTypes.ANY;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 1);
        assertString(args[0]);
        var value = args[0].toString();
        if (context.attributes.indexOf(value) === -1) {
            context.attributes.push(value);
        }
        var prefix = context.inFragmentShader ? 'v_' : 'a_';
        return prefix + value;
    }
};
Operators['var'] = {
    getReturnType: function (args) {
        return ValueTypes.ANY;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 1);
        assertString(args[0]);
        var value = args[0].toString();
        if (context.variables.indexOf(value) === -1) {
            context.variables.push(value);
        }
        return "u_" + value;
    }
};
Operators['time'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 0);
        return 'u_time';
    }
};
Operators['zoom'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 0);
        return 'u_zoom';
    }
};
Operators['resolution'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 0);
        return 'u_resolution';
    }
};
Operators['*'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " * " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['/'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " / " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['+'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " + " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['-'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " - " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['clamp'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 3);
        assertNumbers(args);
        var min = expressionToGlsl(context, args[1]);
        var max = expressionToGlsl(context, args[2]);
        return "clamp(" + expressionToGlsl(context, args[0]) + ", " + min + ", " + max + ")";
    }
};
Operators['%'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "mod(" + expressionToGlsl(context, args[0]) + ", " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['^'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "pow(" + expressionToGlsl(context, args[0]) + ", " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['>'] = {
    getReturnType: function (args) {
        return ValueTypes.BOOLEAN;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " > " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['>='] = {
    getReturnType: function (args) {
        return ValueTypes.BOOLEAN;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " >= " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['<'] = {
    getReturnType: function (args) {
        return ValueTypes.BOOLEAN;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " < " + expressionToGlsl(context, args[1]) + ")";
    }
};
Operators['<='] = {
    getReturnType: function (args) {
        return ValueTypes.BOOLEAN;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 2);
        assertNumbers(args);
        return "(" + expressionToGlsl(context, args[0]) + " <= " + expressionToGlsl(context, args[1]) + ")";
    }
};
function getEqualOperator(operator) {
    return {
        getReturnType: function (args) {
            return ValueTypes.BOOLEAN;
        },
        toGlsl: function (context, args) {
            assertArgsCount(args, 2);
            // find common type
            var type = ValueTypes.ANY;
            for (var i = 0; i < args.length; i++) {
                type = type & getValueType(args[i]);
            }
            if (type === 0) {
                throw new Error("All arguments should be of compatible type, got " + JSON.stringify(args) + " instead");
            }
            return "(" + expressionToGlsl(context, args[0], type) + " " + operator + " " + expressionToGlsl(context, args[1], type) + ")";
        }
    };
}
Operators['=='] = getEqualOperator('==');
Operators['!='] = getEqualOperator('!=');
Operators['!'] = {
    getReturnType: function (args) {
        return ValueTypes.BOOLEAN;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 1);
        assertBoolean(args[0]);
        return "(!" + expressionToGlsl(context, args[0]) + ")";
    }
};
Operators['between'] = {
    getReturnType: function (args) {
        return ValueTypes.BOOLEAN;
    },
    toGlsl: function (context, args) {
        assertArgsCount(args, 3);
        assertNumbers(args);
        var min = expressionToGlsl(context, args[1]);
        var max = expressionToGlsl(context, args[2]);
        var value = expressionToGlsl(context, args[0]);
        return "(" + value + " >= " + min + " && " + value + " <= " + max + ")";
    }
};
Operators['array'] = {
    getReturnType: function (args) {
        return ValueTypes.NUMBER_ARRAY;
    },
    toGlsl: function (context, args) {
        assertArgsMinCount(args, 2);
        assertArgsMaxCount(args, 4);
        assertNumbers(args);
        var parsedArgs = args.map(function (val) {
            return expressionToGlsl(context, val, ValueTypes.NUMBER);
        });
        return "vec" + args.length + "(" + parsedArgs.join(', ') + ")";
    }
};
Operators['color'] = {
    getReturnType: function (args) {
        return ValueTypes.COLOR;
    },
    toGlsl: function (context, args) {
        assertArgsMinCount(args, 3);
        assertArgsMaxCount(args, 4);
        assertNumbers(args);
        var array = /** @type {number[]} */ (args);
        if (args.length === 3) {
            array.push(1);
        }
        var parsedArgs = args.map(function (val, i) {
            return expressionToGlsl(context, val, ValueTypes.NUMBER) + (i < 3 ? ' / 255.0' : '');
        });
        return "vec" + args.length + "(" + parsedArgs.join(', ') + ")";
    }
};
Operators['interpolate'] = {
    getReturnType: function (args) {
        var type = ValueTypes.COLOR | ValueTypes.NUMBER;
        for (var i = 3; i < args.length; i += 2) {
            type = type & getValueType(args[i]);
        }
        return type;
    },
    toGlsl: function (context, args, opt_typeHint) {
        assertArgsEven(args);
        assertArgsMinCount(args, 6);
        // validate interpolation type
        var type = args[0];
        var interpolation;
        switch (type[0]) {
            case 'linear':
                interpolation = 1;
                break;
            case 'exponential':
                interpolation = type[1];
                break;
            default: interpolation = null;
        }
        if (!interpolation) {
            throw new Error("Invalid interpolation type for \"interpolate\" operator, received: " + JSON.stringify(type));
        }
        // compute input/output types
        var typeHint = opt_typeHint !== undefined ? opt_typeHint : ValueTypes.ANY;
        var outputType = Operators['interpolate'].getReturnType(args) & typeHint;
        assertUniqueInferredType(args, outputType);
        var input = expressionToGlsl(context, args[1]);
        var result = null;
        for (var i = 2; i < args.length - 2; i += 2) {
            var stop1 = expressionToGlsl(context, args[i]);
            var output1 = expressionToGlsl(context, args[i + 1], outputType);
            var stop2 = expressionToGlsl(context, args[i + 2]);
            var output2 = expressionToGlsl(context, args[i + 3], outputType);
            result = "mix(" + (result || output1) + ", " + output2 + ", pow(clamp((" + input + " - " + stop1 + ") / (" + stop2 + " - " + stop1 + "), 0.0, 1.0), " + numberToGlsl(interpolation) + "))";
        }
        return result;
    }
};
Operators['match'] = {
    getReturnType: function (args) {
        var type = ValueTypes.ANY;
        for (var i = 2; i < args.length; i += 2) {
            type = type & getValueType(args[i]);
        }
        type = type & getValueType(args[args.length - 1]);
        return type;
    },
    toGlsl: function (context, args, opt_typeHint) {
        assertArgsEven(args);
        assertArgsMinCount(args, 4);
        var typeHint = opt_typeHint !== undefined ? opt_typeHint : ValueTypes.ANY;
        var outputType = Operators['match'].getReturnType(args) & typeHint;
        assertUniqueInferredType(args, outputType);
        var input = expressionToGlsl(context, args[0]);
        var fallback = expressionToGlsl(context, args[args.length - 1], outputType);
        var result = null;
        for (var i = args.length - 3; i >= 1; i -= 2) {
            var match = expressionToGlsl(context, args[i]);
            var output = expressionToGlsl(context, args[i + 1], outputType);
            result = "(" + input + " == " + match + " ? " + output + " : " + (result || fallback) + ")";
        }
        return result;
    }
};
Operators['case'] = {
    getReturnType: function (args) {
        var type = ValueTypes.ANY;
        for (var i = 1; i < args.length; i += 2) {
            type = type & getValueType(args[i]);
        }
        type = type & getValueType(args[args.length - 1]);
        return type;
    },
    toGlsl: function (context, args, opt_typeHint) {
        assertArgsOdd(args);
        assertArgsMinCount(args, 3);
        var typeHint = opt_typeHint !== undefined ? opt_typeHint : ValueTypes.ANY;
        var outputType = Operators['case'].getReturnType(args) & typeHint;
        assertUniqueInferredType(args, outputType);
        for (var i = 0; i < args.length - 1; i += 2) {
            assertBoolean(args[i]);
        }
        var fallback = expressionToGlsl(context, args[args.length - 1], outputType);
        var result = null;
        for (var i = args.length - 3; i >= 0; i -= 2) {
            var condition = expressionToGlsl(context, args[i]);
            var output = expressionToGlsl(context, args[i + 1], outputType);
            result = "(" + condition + " ? " + output + " : " + (result || fallback) + ")";
        }
        return result;
    }
};
//# sourceMappingURL=expressions.js.map
// CONCATENATED MODULE: ./node_modules/ol/webgl/ShaderBuilder.js
/**
 * Classes and utilities for generating shaders from literal style objects
 * @module ol/webgl/ShaderBuilder
 */

/**
 * @typedef {Object} VaryingDescription
 * @property {string} name Varying name, as will be declared in the header.
 * @property {string} type Varying type, either `float`, `vec2`, `vec4`...
 * @property {string} expression Expression which will be assigned to the varying in the vertex shader, and
 * passed on to the fragment shader.
 */
/**
 * @classdesc
 * This class implements a classic builder pattern for generating many different types of shaders.
 * Methods can be chained, e. g.:
 *
 * ```js
 * const shader = new ShaderBuilder()
 *   .addVarying('v_width', 'float', 'a_width')
 *   .addUniform('u_time')
 *   .setColorExpression('...')
 *   .setSizeExpression('...')
 *   .outputSymbolFragmentShader();
 * ```
 */
var ShaderBuilder = /** @class */ (function () {
    function ShaderBuilder() {
        /**
         * Uniforms; these will be declared in the header (should include the type).
         * @type {Array<string>}
         * @private
         */
        this.uniforms = [];
        /**
         * Attributes; these will be declared in the header (should include the type).
         * @type {Array<string>}
         * @private
         */
        this.attributes = [];
        /**
         * Varyings with a name, a type and an expression.
         * @type {Array<VaryingDescription>}
         * @private
         */
        this.varyings = [];
        /**
         * @type {string}
         * @private
         */
        this.sizeExpression = 'vec2(1.0)';
        /**
         * @type {string}
         * @private
         */
        this.rotationExpression = '0.0';
        /**
         * @type {string}
         * @private
         */
        this.offsetExpression = 'vec2(0.0)';
        /**
         * @type {string}
         * @private
         */
        this.colorExpression = 'vec4(1.0)';
        /**
         * @type {string}
         * @private
         */
        this.texCoordExpression = 'vec4(0.0, 0.0, 1.0, 1.0)';
        /**
         * @type {string}
         * @private
         */
        this.discardExpression = 'false';
        /**
         * @type {boolean}
         * @private
         */
        this.rotateWithView = false;
    }
    /**
     * Adds a uniform accessible in both fragment and vertex shaders.
     * The given name should include a type, such as `sampler2D u_texture`.
     * @param {string} name Uniform name
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.addUniform = function (name) {
        this.uniforms.push(name);
        return this;
    };
    /**
     * Adds an attribute accessible in the vertex shader, read from the geometry buffer.
     * The given name should include a type, such as `vec2 a_position`.
     * @param {string} name Attribute name
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.addAttribute = function (name) {
        this.attributes.push(name);
        return this;
    };
    /**
     * Adds a varying defined in the vertex shader and accessible from the fragment shader.
     * The type and expression of the varying have to be specified separately.
     * @param {string} name Varying name
     * @param {'float'|'vec2'|'vec3'|'vec4'} type Type
     * @param {string} expression Expression used to assign a value to the varying.
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.addVarying = function (name, type, expression) {
        this.varyings.push({
            name: name,
            type: type,
            expression: expression
        });
        return this;
    };
    /**
     * Sets an expression to compute the size of the shape.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a `vec2` value.
     * @param {string} expression Size expression
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setSizeExpression = function (expression) {
        this.sizeExpression = expression;
        return this;
    };
    /**
     * Sets an expression to compute the rotation of the shape.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a `float` value in radians.
     * @param {string} expression Size expression
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setRotationExpression = function (expression) {
        this.rotationExpression = expression;
        return this;
    };
    /**
     * Sets an expression to compute the offset of the symbol from the point center.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a `vec2` value.
     * Note: will only be used for point geometry shaders.
     * @param {string} expression Offset expression
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setSymbolOffsetExpression = function (expression) {
        this.offsetExpression = expression;
        return this;
    };
    /**
     * Sets an expression to compute the color of the shape.
     * This expression can use all the uniforms, varyings and attributes available
     * in the fragment shader, and should evaluate to a `vec4` value.
     * @param {string} expression Color expression
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setColorExpression = function (expression) {
        this.colorExpression = expression;
        return this;
    };
    /**
     * Sets an expression to compute the texture coordinates of the vertices.
     * This expression can use all the uniforms and attributes available
     * in the vertex shader, and should evaluate to a `vec4` value.
     * @param {string} expression Texture coordinate expression
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setTextureCoordinateExpression = function (expression) {
        this.texCoordExpression = expression;
        return this;
    };
    /**
     * Sets an expression to determine whether a fragment (pixel) should be discarded,
     * i.e. not drawn at all.
     * This expression can use all the uniforms, varyings and attributes available
     * in the fragment shader, and should evaluate to a `bool` value (it will be
     * used in an `if` statement)
     * @param {string} expression Fragment discard expression
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setFragmentDiscardExpression = function (expression) {
        this.discardExpression = expression;
        return this;
    };
    /**
     * Sets whether the symbols should rotate with the view or stay aligned with the map.
     * Note: will only be used for point geometry shaders.
     * @param {boolean} rotateWithView Rotate with view
     * @return {ShaderBuilder} the builder object
     */
    ShaderBuilder.prototype.setSymbolRotateWithView = function (rotateWithView) {
        this.rotateWithView = rotateWithView;
        return this;
    };
    /**
     * @returns {string} Previously set size expression
     */
    ShaderBuilder.prototype.getSizeExpression = function () {
        return this.sizeExpression;
    };
    /**
     * @returns {string} Previously set symbol offset expression
     */
    ShaderBuilder.prototype.getOffsetExpression = function () {
        return this.offsetExpression;
    };
    /**
     * @returns {string} Previously set color expression
     */
    ShaderBuilder.prototype.getColorExpression = function () {
        return this.colorExpression;
    };
    /**
     * @returns {string} Previously set texture coordinate expression
     */
    ShaderBuilder.prototype.getTextureCoordinateExpression = function () {
        return this.texCoordExpression;
    };
    /**
     * @returns {string} Previously set fragment discard expression
     */
    ShaderBuilder.prototype.getFragmentDiscardExpression = function () {
        return this.discardExpression;
    };
    /**
     * Generates a symbol vertex shader from the builder parameters,
     * intended to be used on point geometries.
     *
     * Three uniforms are hardcoded in all shaders: `u_projectionMatrix`, `u_offsetScaleMatrix`,
     * `u_offsetRotateMatrix`, `u_time`.
     *
     * The following attributes are hardcoded and expected to be present in the vertex buffers:
     * `vec2 a_position`, `float a_index` (being the index of the vertex in the quad, 0 to 3).
     *
     * The following varyings are hardcoded and gives the coordinate of the pixel both in the quad and on the texture:
     * `vec2 v_quadCoord`, `vec2 v_texCoord`
     *
     * @param {boolean} [forHitDetection] If true, the shader will be modified to include hit detection variables
     * (namely, hit color with encoded feature id).
     * @returns {string} The full shader as a string.
     */
    ShaderBuilder.prototype.getSymbolVertexShader = function (forHitDetection) {
        var offsetMatrix = this.rotateWithView ?
            'u_offsetScaleMatrix * u_offsetRotateMatrix' :
            'u_offsetScaleMatrix';
        var attributes = this.attributes;
        var varyings = this.varyings;
        if (forHitDetection) {
            attributes = attributes.concat('vec4 a_hitColor');
            varyings = varyings.concat({
                name: 'v_hitColor',
                type: 'vec4',
                expression: 'a_hitColor'
            });
        }
        return "precision mediump float;\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\nuniform float u_time;\nuniform float u_zoom;\nuniform float u_resolution;\n" + this.uniforms.map(function (uniform) {
            return 'uniform ' + uniform + ';';
        }).join('\n') + "\nattribute vec2 a_position;\nattribute float a_index;\n" + attributes.map(function (attribute) {
            return 'attribute ' + attribute + ';';
        }).join('\n') + "\nvarying vec2 v_texCoord;\nvarying vec2 v_quadCoord;\n" + varyings.map(function (varying) {
            return 'varying ' + varying.type + ' ' + varying.name + ';';
        }).join('\n') + "\nvoid main(void) {\n  mat4 offsetMatrix = " + offsetMatrix + ";\n  vec2 halfSize = " + this.sizeExpression + " * 0.5;\n  vec2 offset = " + this.offsetExpression + ";\n  float angle = " + this.rotationExpression + ";\n  float offsetX;\n  float offsetY;\n  if (a_index == 0.0) {\n    offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);\n    offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);\n  } else if (a_index == 1.0) {\n    offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);\n    offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);\n  } else if (a_index == 2.0) {\n    offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);\n    offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);\n  } else {\n    offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);\n    offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);\n  }\n  vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n  vec4 texCoord = " + this.texCoordExpression + ";\n  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;\n  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;\n  v_texCoord = vec2(u, v);\n  u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n  v = a_index == 2.0 || a_index == 3.0 ? 0.0 : 1.0;\n  v_quadCoord = vec2(u, v);\n" + varyings.map(function (varying) {
            return '  ' + varying.name + ' = ' + varying.expression + ';';
        }).join('\n') + "\n}";
    };
    /**
     * Generates a symbol fragment shader from the builder parameters,
     * intended to be used on point geometries.
     *
     * Expects the following varyings to be transmitted by the vertex shader:
     * `vec2 v_quadCoord`, `vec2 v_texCoord`
     *
     * @param {boolean} [forHitDetection] If true, the shader will be modified to include hit detection variables
     * (namely, hit color with encoded feature id).
     * @returns {string} The full shader as a string.
     */
    ShaderBuilder.prototype.getSymbolFragmentShader = function (forHitDetection) {
        var hitDetectionBypass = forHitDetection ?
            '  if (gl_FragColor.a < 0.1) { discard; } gl_FragColor = v_hitColor;' : '';
        var varyings = this.varyings;
        if (forHitDetection) {
            varyings = varyings.concat({
                name: 'v_hitColor',
                type: 'vec4',
                expression: 'a_hitColor'
            });
        }
        return "precision mediump float;\nuniform float u_time;\nuniform float u_zoom;\nuniform float u_resolution;\n" + this.uniforms.map(function (uniform) {
            return 'uniform ' + uniform + ';';
        }).join('\n') + "\nvarying vec2 v_texCoord;\nvarying vec2 v_quadCoord;\n" + varyings.map(function (varying) {
            return 'varying ' + varying.type + ' ' + varying.name + ';';
        }).join('\n') + "\nvoid main(void) {\n  if (" + this.discardExpression + ") { discard; }\n  gl_FragColor = " + this.colorExpression + ";\n  gl_FragColor.rgb *= gl_FragColor.a;\n" + hitDetectionBypass + "\n}";
    };
    return ShaderBuilder;
}());

/**
 * @typedef {Object} StyleParseResult
 * @property {ShaderBuilder} builder Shader builder pre-configured according to a given style
 * @property {Object.<string,import("./Helper").UniformValue>} uniforms Uniform definitions.
 * @property {Array<import("../renderer/webgl/PointsLayer").CustomAttribute>} attributes Attribute descriptions.
 */
/**
 * Parses a {@link import("../style/LiteralStyle").LiteralStyle} object and returns a {@link ShaderBuilder}
 * object that has been configured according to the given style, as well as `attributes` and `uniforms`
 * arrays to be fed to the `WebGLPointsRenderer` class.
 *
 * Also returns `uniforms` and `attributes` properties as expected by the
 * {@link module:ol/renderer/webgl/PointsLayer~WebGLPointsLayerRenderer}.
 *
 * @param {import("../style/LiteralStyle").LiteralStyle} style Literal style.
 * @returns {StyleParseResult} Result containing shader params, attributes and uniforms.
 */
function parseLiteralStyle(style) {
    var symbStyle = style.symbol;
    var size = symbStyle.size !== undefined ? symbStyle.size : 1;
    var color = symbStyle.color || 'white';
    var texCoord = symbStyle.textureCoord || [0, 0, 1, 1];
    var offset = symbStyle.offset || [0, 0];
    var opacity = symbStyle.opacity !== undefined ? symbStyle.opacity : 1;
    var rotation = symbStyle.rotation !== undefined ? symbStyle.rotation : 0;
    /**
     * @type {import("../style/expressions.js").ParsingContext}
     */
    var vertContext = {
        inFragmentShader: false,
        variables: [],
        attributes: [],
        stringLiteralsMap: {}
    };
    var parsedSize = expressionToGlsl(vertContext, size, ValueTypes.NUMBER_ARRAY | ValueTypes.NUMBER);
    var parsedOffset = expressionToGlsl(vertContext, offset, ValueTypes.NUMBER_ARRAY);
    var parsedTexCoord = expressionToGlsl(vertContext, texCoord, ValueTypes.NUMBER_ARRAY);
    /**
     * @type {import("../style/expressions.js").ParsingContext}
     */
    var fragContext = {
        inFragmentShader: true,
        variables: vertContext.variables,
        attributes: [],
        stringLiteralsMap: vertContext.stringLiteralsMap
    };
    var parsedColor = expressionToGlsl(fragContext, color, ValueTypes.COLOR);
    var parsedOpacity = expressionToGlsl(fragContext, opacity, ValueTypes.NUMBER);
    var parsedRotation = expressionToGlsl(fragContext, rotation, ValueTypes.NUMBER);
    var opacityFilter = '1.0';
    var visibleSize = "vec2(" + expressionToGlsl(fragContext, size, ValueTypes.NUMBER_ARRAY | ValueTypes.NUMBER) + ").x";
    switch (symbStyle.symbolType) {
        case 'square': break;
        case 'image': break;
        // taken from https://thebookofshaders.com/07/
        case 'circle':
            opacityFilter = "(1.0-smoothstep(1.-4./" + visibleSize + ",1.,dot(v_quadCoord-.5,v_quadCoord-.5)*4.))";
            break;
        case 'triangle':
            var st = '(v_quadCoord*2.-1.)';
            var a = "(atan(" + st + ".x," + st + ".y))";
            opacityFilter = "(1.0-smoothstep(.5-3./" + visibleSize + ",.5,cos(floor(.5+" + a + "/2.094395102)*2.094395102-" + a + ")*length(" + st + ")))";
            break;
        default: throw new Error('Unexpected symbol type: ' + symbStyle.symbolType);
    }
    var builder = new ShaderBuilder()
        .setSizeExpression("vec2(" + parsedSize + ")")
        .setRotationExpression(parsedRotation)
        .setSymbolOffsetExpression(parsedOffset)
        .setTextureCoordinateExpression(parsedTexCoord)
        .setSymbolRotateWithView(!!symbStyle.rotateWithView)
        .setColorExpression("vec4(" + parsedColor + ".rgb, " + parsedColor + ".a * " + parsedOpacity + " * " + opacityFilter + ")");
    if (style.filter) {
        var parsedFilter = expressionToGlsl(fragContext, style.filter, ValueTypes.BOOLEAN);
        builder.setFragmentDiscardExpression("!" + parsedFilter);
    }
    /** @type {Object.<string,import("../webgl/Helper").UniformValue>} */
    var uniforms = {};
    // define one uniform per variable
    fragContext.variables.forEach(function (varName) {
        builder.addUniform("float u_" + varName);
        uniforms["u_" + varName] = function () {
            if (!style.variables || style.variables[varName] === undefined) {
                throw new Error("The following variable is missing from the style: " + varName);
            }
            var value = style.variables[varName];
            if (typeof value === 'string') {
                value = getStringNumberEquivalent(vertContext, value);
            }
            return value !== undefined ? value : -9999999; // to avoid matching with the first string literal
        };
    });
    if (symbStyle.symbolType === 'image' && symbStyle.src) {
        var texture = new Image();
        texture.src = symbStyle.src;
        builder.addUniform('sampler2D u_texture')
            .setColorExpression(builder.getColorExpression() +
            ' * texture2D(u_texture, v_texCoord)');
        uniforms['u_texture'] = texture;
    }
    // for each feature attribute used in the fragment shader, define a varying that will be used to pass data
    // from the vertex to the fragment shader, as well as an attribute in the vertex shader (if not already present)
    fragContext.attributes.forEach(function (attrName) {
        if (vertContext.attributes.indexOf(attrName) === -1) {
            vertContext.attributes.push(attrName);
        }
        builder.addVarying("v_" + attrName, 'float', "a_" + attrName);
    });
    // for each feature attribute used in the vertex shader, define an attribute in the vertex shader.
    vertContext.attributes.forEach(function (attrName) {
        builder.addAttribute("float a_" + attrName);
    });
    return {
        builder: builder,
        attributes: vertContext.attributes.map(function (attributeName) {
            return {
                name: attributeName,
                callback: function (feature, props) {
                    var value = props[attributeName];
                    if (typeof value === 'string') {
                        value = getStringNumberEquivalent(vertContext, value);
                    }
                    return value !== undefined ? value : -9999999; // to avoid matching with the first string literal
                }
            };
        }),
        uniforms: uniforms
    };
}
//# sourceMappingURL=ShaderBuilder.js.map
// CONCATENATED MODULE: ./node_modules/ol/layer/WebGLPoints.js
var WebGLPoints_extends = (undefined && undefined.__extends) || (function () {
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
/**
 * @module ol/layer/WebGLPoints
 */




/**
 * @typedef {Object} Options
 * @property {import('../style/LiteralStyle.js').LiteralStyle} style Literal style to apply to the layer features.
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {import("../source/Vector.js").default} [source] Source.
 * @property {boolean} [disableHitDetection=false] Setting this to true will provide a slight performance boost, but will
 * prevent all hit detection on the layer.
 */
/**
 * @classdesc
 * Layer optimized for rendering large point datasets. Takes a `style` property which
 * is a serializable JSON object describing how the layer should be rendered.
 *
 * Here are a few samples of literal style objects:
 * ```js
 * const style = {
 *   symbol: {
 *     symbolType: 'circle',
 *     size: 8,
 *     color: '#33AAFF',
 *     opacity: 0.9
 *   }
 * }
 * ```
 *
 * ```js
 * const style = {
 *   symbol: {
 *     symbolType: 'image',
 *     offset: [0, 12],
 *     size: [4, 8],
 *     src: '../static/exclamation-mark.png'
 *   }
 * }
 * ```
 *
 * **Important: a `WebGLPoints` layer must be manually disposed when removed, otherwise the underlying WebGL context
 * will not be garbage collected.**
 *
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @fires import("../render/Event.js").RenderEvent
 */
var WebGLPoints_WebGLPointsLayer = /** @class */ (function (_super) {
    WebGLPoints_extends(WebGLPointsLayer, _super);
    /**
     * @param {Options} options Options.
     */
    function WebGLPointsLayer(options) {
        var _this = this;
        var baseOptions = obj_assign({}, options);
        _this = _super.call(this, baseOptions) || this;
        /**
         * @private
         * @type {import('../webgl/ShaderBuilder.js').StyleParseResult}
         */
        _this.parseResult_ = parseLiteralStyle(options.style);
        /**
         * @private
         * @type {boolean}
         */
        _this.hitDetectionDisabled_ = !!options.disableHitDetection;
        return _this;
    }
    /**
     * @inheritDoc
     */
    WebGLPointsLayer.prototype.createRenderer = function () {
        return new PointsLayer(this, {
            vertexShader: this.parseResult_.builder.getSymbolVertexShader(),
            fragmentShader: this.parseResult_.builder.getSymbolFragmentShader(),
            hitVertexShader: !this.hitDetectionDisabled_ &&
                this.parseResult_.builder.getSymbolVertexShader(true),
            hitFragmentShader: !this.hitDetectionDisabled_ &&
                this.parseResult_.builder.getSymbolFragmentShader(true),
            uniforms: this.parseResult_.uniforms,
            attributes: this.parseResult_.attributes
        });
    };
    /**
     *
     * @inheritDoc
     */
    WebGLPointsLayer.prototype.disposeInternal = function () {
        this.renderer_.dispose();
        _super.prototype.disposeInternal.call(this);
    };
    return WebGLPointsLayer;
}(layer_Layer));
/* harmony default export */ var WebGLPoints = __webpack_exports__["default"] = (WebGLPoints_WebGLPointsLayer);
//# sourceMappingURL=WebGLPoints.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=aol.js.map