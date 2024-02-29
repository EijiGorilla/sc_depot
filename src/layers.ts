import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  SimpleMarkerSymbol,
  LabelSymbol3D,
  TextSymbol3DLayer,
  SimpleLineSymbol,
} from '@arcgis/core/symbols';
import { labelSymbol3DLine } from './Label';
import WebScene from '@arcgis/core/WebScene';
import BuildingFilter from '@arcgis/core/layers/support/BuildingFilter';
import Collection from '@arcgis/core/core/Collection';
import BuildingSceneLayer from '@arcgis/core/layers/BuildingSceneLayer';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

// * PROW *//
var prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});

export const prowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/SC_Alignment/FeatureServer/5',
  title: 'PROW',
  popupEnabled: false,
  renderer: prowRenderer,
});
prowLayer.listMode = 'hide';

// * Station Layer * //
const stationLayerTextSymbol = labelSymbol3DLine({
  materialColor: '#d4ff33',
  fontSize: 15,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 'normal',
  haloColor: 'black',
  haloSize: 0.5,
  vOffsetScreenLength: 100,
  vOffsetMaxWorldLength: 700,
  vOffsetMinWorldLength: 80,
});

var labelClass = new LabelClass({
  symbol: stationLayerTextSymbol,
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: 'DefaultValue($feature.Station, "no data")',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'Station',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* Building Scene Layer for station structures */
const buildingSpotLabel = labelSymbol3DLine({
  materialColor: '#d4ff33',
  fontSize: 15,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 'normal',
  haloColor: 'black',
  haloSize: 0.5,
  vOffsetScreenLength: 100,
  vOffsetMaxWorldLength: 700,
  vOffsetMinWorldLength: 80,
  calloutColor: 'gray',
  calloutSize: 0.3,
});

var labelClassBulding = new LabelClass({
  symbol: buildingSpotLabel,
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: 'DefaultValue($feature.Name, "no data")',
    //value: "{TEXTSTRING}"
  },
});

export const buildingSpotLayer = new FeatureLayer({
  portalItem: {
    id: '285e68f3fcce48f6ab196f912c5c58c5',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  popupEnabled: false,
  outFields: ['*'],
  labelingInfo: [labelClassBulding],
});
buildingSpotLayer.listMode = 'hide';

export const webscene = new WebScene({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});
webscene.add(buildingSpotLayer);

export const buildingLayer: any = new BuildingSceneLayer({
  portalItem: {
    id: '2fcb3db0ec324f92805cc45c0e79f29d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  title: 'Depot Buildings',
});

webscene.add(buildingLayer);

/*  Depot Building table for chart  */
export const depotChart = new FeatureLayer({
  portalItem: {
    id: 'ab5ddbc7bd034e8ba332e38d5a7088a2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  // outFields: ['Status', 'Name', 'Type', 'BaseCategory'],
  popupEnabled: false,
});

export const buildingFilter: any = new BuildingFilter({
  filterBlocks: undefined,
});

// https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayer-filter-query/
