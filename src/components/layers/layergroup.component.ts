// import LayerGroup from 'ol/layer/Group';

// export class LayerGroupComponent implements angular.IController {
//   public instance: LayerGroup;
//   public componentType: string = 'layerGroup';
//   public host: MapComponent;

//   $onInit() {
//     this.instance = new View(this);
//     this.host.instance.setView(this.instance);

//     this.host.instance.addLayer(
//       new TileLayer({
//         source: new OSM(),
//       }),
//     );
//   }

//   $onChanges(changes: angular.IOnChangesObject) {
//     let properties: { [index: string]: any } = {};
//     if (!this.instance) {
//       return;
//     }
//     for (let key in changes) {
//       if (changes.hasOwnProperty(key)) {
//         switch (key) {
//           case 'zoom':
//             /** Work-around: setting the zoom via setProperties does not work. */
//             if (this.zoomAnimation) {
//               this.instance.animate({ zoom: changes[key].currentValue });
//             } else {
//               this.instance.setZoom(changes[key].currentValue);
//             }
//             break;
//           default:
//             break;
//         }
//         properties[key] = changes[key].currentValue;
//       }
//     }
//     // console.log('changes detected in aol-view, setting new properties: ', properties);
//     this.instance.setProperties(properties, false);
//   }
// }

// var component: angular.IComponentOptions = {
//   //   template: `
//   //         <div ng-include></div>
//   //       `,
//   bindings: {
//     constrainRotation: '=?',
//     enableRotation: '=?',
//     extent: '=?',
//     maxResolution: '=?',
//     minResolution: '=?',
//     maxZoom: '=?',
//     minZoom: '=?',
//     resolution: '=?',
//     resolutions: '=?',
//     rotation: '=?',
//     zoom: '=?',
//     zoomFactor: '=?',
//     center: '=?',
//     projection: '=?',
//     zoomAnimation: '=?',
//   },
//   require: {
//     host: `^${mapComponent.name}`,
//   },
//   controller: ['$element', ViewComponent],
// };

// export default {
//   name: 'aolView',
//   ...component,
// };
