import Source, { AttributionLike } from 'ol/source/Source';
import { LayerComponent } from '../layers/layer.component';

export class SourceComponent implements angular.IController {
  public instance: Source;
  public componentType: string = 'source';

  protected host: LayerComponent;
  //   protected raster: SourceRasterComponent

  attributions: AttributionLike;
  attributionsCollapsible: boolean;

  instanceDone?: Function;

  //   constructor()
  //   {}

  $onDestroy() {
    if (this.host) {
      this.host.instance.setSource(null);
    }

    // if (this.raster) {
    //   this.raster.sources = [];
    // }
  }

  protected _register(source: Source) {
    if (this.host) {
      this.host.instance.setSource(source);
      if (this.instanceDone) this.instanceDone({ instance: source });
    }

    // if (this.raster) {
    //   this.raster.sources = [source];
    // }
  }
}

export const sourceComponentConfig = {
  bindings: {
    instance: '=?',
    attributions: '<?',
    attributionsCollapsible: '<?',
    instanceDone: '&?',
  },
};
