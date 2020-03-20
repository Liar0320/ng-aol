import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import mapComponent, { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';

export abstract class LayerComponent implements angular.IController {
  public instance: any;
  public componentType: string = 'layer';

  protected host: MapComponent | LayerGroupComponent;
  private layerGroupComponent: LayerGroupComponent;
  private mapComponent: MapComponent;

  className?: string;
  opacity?: number;
  visible?: boolean;
  extent?: Extent;
  zIndex?: number;
  minResolution?: number;
  maxResolution?: number;

  prerender: (evt: Event) => void;
  postrender: (evt: Event) => void;

  $onInit() {
    this.host = this.layerGroupComponent || this.mapComponent;

    if (this.prerender !== null && this.prerender !== undefined) {
      this.instance.on('prerender', this.prerender);
    }
    if (this.postrender !== null && this.postrender !== undefined) {
      this.instance.on('postrender', this.postrender);
    }
    this.host.instance.getLayers().push(this.instance);
  }

  $onDestroy() {
    this.host.instance.getLayers().remove(this.instance);
  }

  $onChanges(changes: angular.IOnChangesObject) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
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
          case 'style':
            this.instance.setStyle(changes[key].currentValue);
            break;
          default:
            properties[key] = changes[key].currentValue;
            break;
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}

export const layerComponentConfig = {
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
    mapComponent: `?^${mapComponent.name}`,
    /**@FIXME:待修复 */
    layerGroupComponent: `?^^aolLayerGroup`,
  },
};
