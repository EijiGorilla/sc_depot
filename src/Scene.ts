import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';
import BuildingExplorer from '@arcgis/core/widgets/BuildingExplorer';
import { buildingLayer, prowLayer, stationLayer } from './layers';
import TimeSlider from '@arcgis/core/widgets/TimeSlider';
import { webscene } from './layers';

webscene.add(prowLayer);
webscene.add(stationLayer);

export const view = new SceneView({
  container: undefined,
  map: webscene,
  camera: {
    position: {
      x: 121.1622434,
      y: 14.2228077,
      z: 2000,
    },
    tilt: 10,
  },
  viewingMode: 'local',
  environment: {
    starsEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// Building Explorer
// const buildingExplorer = new BuildingExplorer({
//   view: view,
//   layers: [buildingLayer],
// });

// const buildingExplorerExpand = new Expand({
//   view,
//   content: buildingExplorer,
//   expandIconClass: 'esri-icon-layers',
//   expandTooltip: 'Building Explorer',
// });
// view.ui.add(buildingExplorerExpand, 'top-right');

// Layer list
export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    // item.title === 'Depot Buildings' ? (item.visible = false) : (item.visible = true);
  },
});

// Compass
var compass = new Compass({
  view: view,
});
view.ui.add(compass, 'top-right');

export const start = new Date(2021, 9, 1);
export const end = new Date(2027, 1, 1);

interface Props {
  interval: any;
  timeExtent: any;
}

const stops: Props = {
  interval: {
    value: 1,
    unit: 'months',
  },
  timeExtent: { start, end },
};

export const timeSlider = new TimeSlider({
  container: undefined,
  mode: 'cumulative-from-start',
  layout: 'auto',
  fullTimeExtent: {
    start: start,
    end: end,
  },
  stops: stops,
});
