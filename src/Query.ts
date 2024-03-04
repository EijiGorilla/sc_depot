import {
  buildingLayer,
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  furnitureLayer,
  doorsLayer,
  stairsLayer,
  roofsLayer,
  windowsLayer,
  wallsLayer,
  columnsLayer,
  dateTable,
  buildingSpotLayer,
} from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import Query from '@arcgis/core/rest/support/Query';
import { view } from './Scene';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "project = 'SC'" + ' AND ' + "category = 'Depot Buildings'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

export const buildingType = [
  {
    category: 'St.Foundation',
    value: 1,
  },
  {
    category: 'St.Column',
    value: 2,
  },
  {
    category: 'St.Framing',
    value: 3,
  },
  {
    category: 'Roofs',
    value: 4,
  },
  {
    category: 'Floors',
    value: 5,
  },
  {
    category: 'Walls',
    value: 6,
  },
  {
    category: 'Columns',
    value: 7,
  },
  {
    category: 'Others', //furniture + doors + stairs + windows
    value: 8,
  },
];

export const layerVisibleTrue = () => {
  stColumnLayer.visible = true;
  stFoundationLayer.visible = true;
  stFramingLayer.visible = true;
  furnitureLayer.visible = true;
  doorsLayer.visible = true;
  stairsLayer.visible = true;
  roofsLayer.visible = true;
  floorsLayer.visible = true;
  wallsLayer.visible = true;
  windowsLayer.visible = true;
  buildingLayer.visible = true;
};

const layerVisibleFalse = () => {
  stColumnLayer.visible = false;
  stFoundationLayer.visible = false;
  stFramingLayer.visible = false;
  furnitureLayer.visible = false;
  doorsLayer.visible = false;
  stairsLayer.visible = false;
  roofsLayer.visible = false;
  floorsLayer.visible = false;
  wallsLayer.visible = false;
  windowsLayer.visible = false;
  buildingLayer.visible = false;
};

export async function buildingSpotZoom(buildingname: any) {
  var query = buildingSpotLayer.createQuery();
  const queryExpression = "Name = '" + buildingname + "'";
  const queryAll = '1=1';
  if (!buildingname) {
    query.where = queryAll;
  } else {
    query.where = queryExpression;
  }

  buildingSpotLayer.queryExtent(query).then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}

export async function generateChartData(buildingname: any) {
  var total_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp',
    statisticType: 'sum',
  });

  var total_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp',
    statisticType: 'sum',
  });

  var total_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay',
    statisticType: 'sum',
  });

  var query = new Query();
  query.outStatistics = [total_incomp, total_comp, total_delay];

  const queryExpression = "Name = '" + buildingname + "'";
  const queryAll = '1=1';

  if (!buildingname) {
    stColumnLayer.definitionExpression = queryAll;
    stFoundationLayer.definitionExpression = queryAll;
    stFramingLayer.definitionExpression = queryAll;
    furnitureLayer.definitionExpression = queryAll;
    doorsLayer.definitionExpression = queryAll;
    stairsLayer.definitionExpression = queryAll;
    roofsLayer.definitionExpression = queryAll;
    columnsLayer.definitionExpression = queryAll;
    floorsLayer.definitionExpression = queryAll;
    wallsLayer.definitionExpression = queryAll;
    windowsLayer.definitionExpression = queryAll;
    query.where = queryAll;
    layerVisibleFalse();
  } else {
    stColumnLayer.definitionExpression = queryExpression;
    stFoundationLayer.definitionExpression = queryExpression;
    stFramingLayer.definitionExpression = queryExpression;
    furnitureLayer.definitionExpression = queryExpression;
    doorsLayer.definitionExpression = queryExpression;
    stairsLayer.definitionExpression = queryExpression;
    roofsLayer.definitionExpression = queryExpression;
    columnsLayer.definitionExpression = queryExpression;
    floorsLayer.definitionExpression = queryExpression;
    wallsLayer.definitionExpression = queryExpression;
    windowsLayer.definitionExpression = queryExpression;
    query.where = queryExpression;
    layerVisibleTrue();
  }

  const stColumnCompile = stColumnLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stFoundationCompile = stFoundationLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stFramingCompile = stFramingLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const columnsCompile = columnsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const furnitureCompile = furnitureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const doorsCompile = doorsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const floorsCompile = floorsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stairsCompile = stairsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const roofsCompile = roofsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const wallsCompile = wallsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const windowsCompile = windowsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stcolumn = await stColumnCompile;
  const stfoundation = await stFoundationCompile;
  const stframing = await stFramingCompile;
  const columns = await columnsCompile;
  const furniture = await furnitureCompile;
  const doors = await doorsCompile;
  const floors = await floorsCompile;
  const stairs = await stairsCompile;
  const roofs = await roofsCompile;
  const walls = await wallsCompile;
  const windows = await windowsCompile;

  const data = [
    {
      category: buildingType[0].category,
      comp: stfoundation[1],
      incomp: stfoundation[0],
      delay: stfoundation[2],
    },
    {
      category: buildingType[1].category,
      comp: stcolumn[1],
      incomp: stcolumn[0],
      delay: stcolumn[2],
    },
    {
      category: buildingType[2].category,
      comp: stframing[1],
      incomp: stframing[0],
      delay: stframing[2],
    },
    {
      category: buildingType[3].category,
      comp: roofs[1],
      incomp: roofs[0],
      delay: roofs[2],
    },
    {
      category: buildingType[4].category,
      comp: floors[1],
      incomp: floors[0],
      delay: floors[2],
    },
    {
      category: buildingType[5].category,
      comp: walls[1],
      incomp: walls[0],
      delay: walls[2],
    },
    {
      category: buildingType[6].category,
      comp: columns[1],
      incomp: columns[0],
      delay: columns[2],
    },
    {
      category: buildingType[7].category,
      comp: furniture[1] + doors[1] + stairs[1] + windows[1],
      incomp: furniture[0] + doors[0] + stairs[0] + windows[0],
      delay: furniture[2] + doors[2] + stairs[2] + windows[2],
    },
  ];

  return data;
}

export async function generateTotalProgress(buildingname: any) {
  var total_number = new StatisticDefinition({
    onStatisticField: 'Status',
    outStatisticFieldName: 'total_number',
    statisticType: 'count',
  });

  var total_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp',
    statisticType: 'sum',
  });

  var query = new Query();
  query.outStatistics = [total_number, total_comp];

  const queryExpression = "Name = '" + buildingname + "'";
  const queryAll = '1=1';

  !buildingname ? (query.where = queryAll) : (query.where = queryExpression);
  const stColumnCompile = stColumnLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stFoundationCompile = stFoundationLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stFramingCompile = stFramingLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const columnsCompile = columnsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const furnitureCompile = furnitureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const doorsCompile = doorsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const floorsCompile = floorsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stairsCompile = stairsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const roofsCompile = roofsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const wallsCompile = wallsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const windowsCompile = windowsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stcolumn = await stColumnCompile;
  const stfoundation = await stFoundationCompile;
  const stframing = await stFramingCompile;
  const columns = await columnsCompile;
  const furniture = await furnitureCompile;
  const doors = await doorsCompile;
  const floors = await floorsCompile;
  const stairs = await stairsCompile;
  const roofs = await roofsCompile;
  const walls = await wallsCompile;
  const windows = await windowsCompile;

  const total =
    stcolumn[0] +
    stfoundation[0] +
    stframing[0] +
    columns[0] +
    furniture[0] +
    doors[0] +
    floors[0] +
    stairs[0] +
    roofs[0] +
    walls[0] +
    windows[0];

  const comp =
    stcolumn[1] +
    stfoundation[1] +
    stframing[1] +
    columns[1] +
    furniture[1] +
    doors[1] +
    floors[1] +
    stairs[1] +
    roofs[1] +
    walls[1] +
    windows[1];
  const progress = ((comp / total) * 100).toFixed(1);
  return [total, comp, progress];
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
