import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleLineSymbol } from '@arcgis/core/symbols';
import { labelSymbol3DLine } from './Label';
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
  definitionExpression: "Station <> 'Banlic Depot'",
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* Civil works layer */
export const civil_works_layer = new SceneLayer({
  portalItem: {
    id: 'ceb76cc366a24527b85e0b49f6492db9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  title: 'Civil Works',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});

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

export const buildingLayer = new BuildingSceneLayer({
  portalItem: {
    id: '2fcb3db0ec324f92805cc45c0e79f29d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  // Do not add outFields; otherwise, rendering get extremely slow
  title: 'Depot Buildings',
});

// Discipline: Architectural
export let columnsLayer: null | any;
export let floorsLayer: null | any;
export let wallsLayer: null | any;
export let doorsLayer: null | any;
export let roofsLayer: null | any;
export let furnitureLayer: null | any;
export let stairsLayer: null | any;
export let windowsLayer: null | any;

// Discipline: Structural
export let stFramingLayer: null | any;
export let stColumnLayer: null | any;
export let stFoundationLayer: null | any;

export let genericModelLayer: null | any;
export let exteriorShellLayer: null | any;
let ArchitecturalLayers: null | any;

export const popuTemplate = {
  title: '{Name}',
  content: [
    {
      type: 'fields',
      fieldInfos: [
        // {
        //   fieldName: 'target_date',
        //   label: 'Target Date',
        // },
        {
          fieldName: 'Category',
          label: 'Category',
        },
        {
          fieldName: 'Status',
          label: 'Construction Status',
        },
        {
          fieldName: 'BldgLevel',
          label: 'Building Level',
        },
        {
          fieldName: 'StructureLevel',
          label: 'Structure Level',
        },
        // {
        //   fieldName: 'P6ID',
        //   label: 'P6 ID',
        // },
      ],
    },
  ],
};

buildingLayer.when(() => {
  buildingLayer.allSublayers.forEach((layer: any) => {
    switch (layer.modelName) {
      case 'FullModel':
        layer.visible = true;
        break;

      case 'Architectural':
        layer.visible = true;
        break;

      case 'GenericModel':
        genericModelLayer = layer;
        break;

      case 'Furniture':
        furnitureLayer = layer;
        break;

      case 'Doors':
        doorsLayer = layer;
        break;

      case 'Columns':
        columnsLayer = layer;
        columnsLayer.popupTemplate = popuTemplate;
        //excludedLayers.push(layer);
        break;

      case 'Floors':
        floorsLayer = layer;
        floorsLayer.popupTemplate = popuTemplate;
        //excludedLayers
        break;

      case 'Stairs':
        stairsLayer = layer;
        stairsLayer.popupTemplate = popuTemplate;
        break;

      case 'Roofs':
        roofsLayer = layer;
        roofsLayer.popupTemplate = popuTemplate;
        break;

      case 'Walls':
        wallsLayer = layer;
        wallsLayer.popupTemplate = popuTemplate;
        break;

      case 'Windows':
        windowsLayer = layer;
        windowsLayer.popupTemplate = popuTemplate;
        break;

      case 'StructuralFraming':
        stFramingLayer = layer;
        stFramingLayer.popupTemplate = popuTemplate;
        break;

      case 'StructuralColumns':
        stColumnLayer = layer;
        stColumnLayer.popupTemplate = popuTemplate;
        break;

      case 'StructuralFoundation':
        stFoundationLayer = layer;
        stFoundationLayer.popupTemplate = popuTemplate;
        break;

      default:
        layer.visible = true;
    }
  });
});
