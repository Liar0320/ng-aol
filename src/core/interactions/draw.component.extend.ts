import GeometryType from 'ol/geom/GeometryType';
import { Options, GeometryFunction } from 'ol/interaction/Draw';
import { Polygon } from 'ol/geom';

export abstract class DrawInteractionExtend implements Options {
  type: any;
  // clickTolerance?: number;
  // features?: Collection<Feature<Geometry>>;
  // source?: VectorSource<Geometry>;
  // dragVertexDelay?: number;
  // snapTolerance?: number;
  // stopClick?: boolean;
  maxPoints?: number;
  minPoints?: number;
  // finishCondition?: Condition;
  // style?: StyleLike;
  geometryFunction?: GeometryFunction;
  // geometryName?: string;
  // condition?: Condition;
  // freehand?: boolean;
  // freehandCondition?: Condition;
  // wrapX?: boolean;

  init(type: GeometryType | 'Rectangle') {
    switch (type) {
      case 'Rectangle':
        this.__createRectangleParams();
        break;
      default:
        this.type = type;
        break;
    }
  }

  __createRectangleParams() {
    this.maxPoints = 2;
    this.type = 'LineString';
    this.geometryFunction = (coordinates: any, geometry) => {
      //如果geometry对象不存在或者为空，则创建
      if (!geometry) {
        //多面几何图形下设置
        geometry = new Polygon([]);
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
  }
}
