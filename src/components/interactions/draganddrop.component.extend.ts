import { DraganddropInteractionComponent } from './draganddrop.component';
// import FeatureFormat from 'ol/format/Feature';
import {
  GPX,
  GeoJSON,
  IGC,
  KML,
  TopoJSON,
  EsriJSON,
  GML,
  IIIFInfo,
  MVT,
  OWS,
  Polyline,
  WFS,
  WKT,
  WMSCapabilities,
  WMSGetFeatureInfo,
  WMTSCapabilities,
} from 'ol/format';

export abstract class DraganddropInteractionExtend {
  defaultFormat: { [index: string]: any } = {
    GPX,
    GeoJSON,
    IGC,
    KML,
    TopoJSON,
    EsriJSON,
    GML,
    IIIFInfo,
    MVT,
    OWS,
    Polyline,
    WFS,
    WKT,
    WMSCapabilities,
    WMSGetFeatureInfo,
    WMTSCapabilities,
  };

  decorate(child: DraganddropInteractionComponent) {
    if (child.formatConstructors) {
      child.formatConstructors = this.getFormat(child.formatConstructors);
    }
  }

  getFormat(featureConlist: any[]) {
    return featureConlist.map(item => {
      //@FIXME: ol打包问题产生 && item instanceof FeatureFormat
      if (typeof item === 'function') {
        return item;
      }
      let formatCon = this.defaultFormat[item];
      if (formatCon) {
        return formatCon;
      } else {
        throw new Error('DragandDrop不存在当前FeatureFormat');
      }
    });
  }
}
