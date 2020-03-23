import aolMap, { MapComponent } from '../map.component';
import {Draw} from 'ol/interaction';
import {Vector as VectorSource } from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';

import { unByKey } from 'ol/Observable';
import { Overlay } from 'ol';
import { getArea, getLength } from 'ol/sphere';
import { LineString, Polygon } from 'ol/geom';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

/** 当前是否处于绘制状态 */
let measureCancel:any = null;
/**
 *
 * @param {import("ol/Map").default} map
 * @param {'area' || 'line'} measureType
 */

export class MeasureInteractionComponent
  implements ng.IController {
//   instance: Collection<Interaction>;
  private host: MapComponent;

  measureType?: 'area' | 'linestring';
  cancel:Function;
 

  //   constructor() {}

  $onInit() {
    if(this.measureType){
        this.cancel = this.measure(this.host.instance,this.measureType);
    }
  }

  $onDestroy() {
    this.cancel();
  }

  $onChanges(changes:ng.IOnChangesObject){
    let properties: { [index: string]: any } = {};

    if (!this.cancel) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'measureType':
            this.cancel();
            this.cancel = this.measure(this.host.instance,this.measureType);
            break;
          default:
            properties[key] = changes[key].currentValue;
            break;
        }
      }
    }
  }
  
  measure(map:any, measureType:any) {
    /** 如果上一次绘制还没有结束 则提醒无法绘制 */
    if (measureCancel) {
      return window.alert('请先清空当前绘制图形，右键鼠标清空');
    }
  
    const source = new VectorSource();
  
    const vector = new VectorLayer({
      source,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33',
          }),
        }),
      }),
    });
  
    /**
     * Currently drawn feature.
     * @type {import("../src/ol/Feature.js").default}
     */
    let sketch:any;
  
    /**
     * The help tooltip element.
     * @type {HTMLElement}
     */
    let helpTooltipElement:HTMLElement;
  
    /**
     * Overlay to show the help messages.
     * @type {Overlay}
     */
    let helpTooltip:Overlay;
  
    /**
     * The measure tooltip element.
     * @type {HTMLElement}
     */
    let measureTooltipElement:HTMLElement;
  
    /**
     * Overlay to show the measurement.
     * @type {Overlay}
     */
    let measureTooltip:Overlay;
  
    /**
     * Message to show when the user is drawing a polygon.
     * @type {string}
     */
    // const continuePolygonMsg = 'Click to continue drawing the polygon';
    const continuePolygonMsg = '继续点击来绘制多边形，双击结束,右键取消绘制';
    /**
     * Message to show when the user is drawing a line.
     * @type {string}
     */
    // const continueLineMsg = 'Click to continue drawing the line';
    const continueLineMsg = '继续点击来绘制线段，双击结束，右键取消绘制';
    /**
     * restore overlayer .
     * @type {string}
     */
    const overlayerCollection:any[] = [];
  
    /**
     * Handle pointer move.
     * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
     */
    const pointerMoveHandler = function(evt:any) {
      if (evt.dragging) {
        return;
      }
      /** @type {string} */
      // let helpMsg = 'Click to start drawing';
      let helpMsg = '单点击地图进行绘制<br/>双击地图结束绘制<br/>右键取消绘制';
  
      if (sketch) {
        const geom = sketch.getGeometry();
  
        if (geom instanceof Polygon) {
          helpMsg = continuePolygonMsg;
        } else if (geom instanceof LineString) {
          helpMsg = continueLineMsg;
        }
      }
  
      helpTooltipElement.innerHTML = helpMsg;
      helpTooltip.setPosition(evt.coordinate);
  
      helpTooltipElement.classList.remove('hidden');
    };
  
    map.addLayer(vector);
  
    map.on('pointermove', pointerMoveHandler);
    function mouseout() {
      helpTooltipElement.classList.add('hidden');
    }
    map.getViewport().addEventListener('mouseout', mouseout);
  
    let draw:any; // global so we can remove it later
  
    /**
     * Format length output.
     * @param {LineString} line The line.
     * @return {string} The formatted length.
     */
    const formatLength = function(line:any) {
      const length = getLength(line);
      let output;
  
      if (length > 100) {
        output = `${Math.round((length / 1000) * 100) / 100} km`;
      } else {
        output = `${Math.round(length * 100) / 100} m`;
      }
  
      return output;
    };
  
    /**
     * Format area output.
     * @param {Polygon} polygon The polygon.
     * @return {string} Formatted area.
     */
    const formatArea = function(polygon:any) {
      const area = getArea(polygon);
      let output;
  
      if (area > 10000) {
        output = `${Math.round((area / 1000000) * 100) / 100} km<sup>2</sup>`;
      } else {
        output = `${Math.round(area * 100) / 100} m<sup>2</sup>`;
      }
  
      return output;
    };
  
    /**
     * Creates a new help tooltip
     */
    function createHelpTooltip() {
      if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
      }
      helpTooltipElement = document.createElement('div');
      helpTooltipElement.className = 'ol-tooltip hidden';
      helpTooltip = new Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left' as any,
      });
      map.addOverlay(helpTooltip);
      overlayerCollection.push(helpTooltip);
    }
  
    /**
     * Creates a new measure tooltip
     */
    function createMeasureTooltip() {
      if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
      }
      measureTooltipElement = document.createElement('div');
      measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
      measureTooltip = new Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center' as any,
      });
      map.addOverlay(measureTooltip);
      overlayerCollection.push(measureTooltip);
    }
  
    function addInteraction() {
      createMeasureTooltip();
      createHelpTooltip();
  
      const type = measureType === 'area' ? 'Polygon' : 'LineString';
  
      draw = new Draw({
        source,
        type:type as any,
        style: new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)',
          }),
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 0.5)',
            lineDash: [10, 10],
            width: 2,
          }),
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.7)',
            }),
            fill: new Fill({
              color: 'rgba(255, 255, 255, 0.2)',
            }),
          }),
        }),
      });
  
      map.addInteraction(draw);
  
      let listener:any;
  
      draw.on('drawstart', function(evt:any) {
        // set sketch
        sketch = evt.feature;
  
        /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
        let tooltipCoord = evt.coordinate;
  
        listener = sketch.getGeometry().on('change', function(evt:any) {
          const geom = evt.target;
          let output;
  
          if (geom instanceof Polygon) {
            output = formatArea(geom);
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof LineString) {
            output = formatLength(geom);
            tooltipCoord = geom.getLastCoordinate();
          }
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      });
  
      draw.on('drawend', function() {
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        unByKey(listener);
      });
    }
  
    addInteraction();
  
    measureCancel = () => {
      if (draw) map.removeInteraction(draw);
      map.un('pointermove', pointerMoveHandler);
      map.getViewport().removeEventListener('mouseout', mouseout);
  
      if (measureTooltipElement) {
        measureTooltipElement.innerHTML = null;
      }
  
      map.removeLayer(vector);
      while (overlayerCollection.length) {
        const ol = overlayerCollection.pop();
  
        map.removeOverlay(ol);
      }
  
      // measureTooltip.setPosition(undefined);
      // helpTooltip.setPosition(undefined);
      // measureTooltip.dispose();
      // helpTooltip.dispose();
  
      window.removeEventListener('contextmenu', measureCancel);
  
      measureCancel = null;
    };
  
    window.addEventListener('contextmenu', measureCancel);
  
    return measureCancel;
  }
}

var component: angular.IComponentOptions = {
  //   template: `
  //         <div ng-include></div>
  //       `,
  bindings: {
    measureType: '<?',
  },
  require: {
    host: `^${aolMap.name}`,
  },
  controller: [MeasureInteractionComponent],
};

export const aolInteractionMeasure = {
  name: 'aolInteractionMeasure',
  ...component,
};
