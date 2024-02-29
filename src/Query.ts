import { view } from './Scene';
import { buildingFilter, buildingLayer, dateTable, depotChart } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';

// bulding filter
export async function buildingFilterExpression(buildingname: any) {
  buildingFilter.filterBlocks = [
    {
      filterExpression: "Name = '" + buildingname + "'",
    },
  ];
  buildingLayer.filters = [buildingFilter];
  buildingLayer.activeFilterId = buildingFilter.id;
}

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
    category: 'Others',
    value: 8,
  },
];

export async function generateChartData(buildingname: any) {
  var total_incomp_stfoundation = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_stfoundation',
    statisticType: 'sum',
  });

  var total_comp_stfoundation = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_stfoundation',
    statisticType: 'sum',
  });

  var total_delay_stfoundation = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_stfoundation',
    statisticType: 'sum',
  });

  var total_incomp_stcolumn = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 2) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_stcolumn',
    statisticType: 'sum',
  });

  var total_comp_stcolumn = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 2) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_stcolumn',
    statisticType: 'sum',
  });

  var total_delay_stcolumn = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 2) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_stcolumn',
    statisticType: 'sum',
  });

  var total_incomp_stframing = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_stframing',
    statisticType: 'sum',
  });

  var total_comp_stframing = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_stframing',
    statisticType: 'sum',
  });

  var total_delay_stframing = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_stframing',
    statisticType: 'sum',
  });

  var total_incomp_roofs = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_roofs',
    statisticType: 'sum',
  });

  var total_comp_roofs = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_roofs',
    statisticType: 'sum',
  });

  var total_delay_roofs = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_roofs',
    statisticType: 'sum',
  });

  var total_incomp_floors = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 5) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_floors',
    statisticType: 'sum',
  });

  var total_comp_floors = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 5) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_floors',
    statisticType: 'sum',
  });

  var total_delay_floors = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 5) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_floors',
    statisticType: 'sum',
  });

  var total_incomp_walls = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 6) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_walls',
    statisticType: 'sum',
  });

  var total_comp_walls = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 6) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_walls',
    statisticType: 'sum',
  });

  var total_delay_walls = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 6) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_walls',
    statisticType: 'sum',
  });

  var total_incomp_columns = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 7) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_columns',
    statisticType: 'sum',
  });

  var total_comp_columns = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 7) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_columns',
    statisticType: 'sum',
  });

  var total_delay_columns = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 7) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_columns',
    statisticType: 'sum',
  });

  var total_incomp_others = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 1 and type = 8) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp_others',
    statisticType: 'sum',
  });

  var total_comp_others = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 4 and type = 8) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp_others',
    statisticType: 'sum',
  });

  var total_delay_others = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (status = 3 and type = 8) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay_others',
    statisticType: 'sum',
  });

  var query = depotChart.createQuery();
  query.outStatistics = [
    total_incomp_stfoundation,
    total_comp_stfoundation,
    total_delay_stfoundation,
    total_incomp_stcolumn,
    total_comp_stcolumn,
    total_delay_stcolumn,
    total_incomp_stframing,
    total_comp_stframing,
    total_delay_stframing,
    total_incomp_roofs,
    total_comp_roofs,
    total_delay_roofs,
    total_incomp_floors,
    total_comp_floors,
    total_delay_floors,
    total_incomp_walls,
    total_comp_walls,
    total_delay_walls,
    total_incomp_columns,
    total_comp_columns,
    total_delay_columns,
    total_incomp_others,
    total_comp_others,
    total_delay_others,
  ];

  const queryExpression = "Name = '" + buildingname + "'";
  const queryAll = '1=1';

  if (!buildingname) {
    depotChart.definitionExpression = queryAll;
    query.where = queryAll;
  } else {
    depotChart.definitionExpression = queryExpression;
    query.where = queryExpression;
  }

  return depotChart.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const stfoundation_incomp = stats.total_incomp_stfoundation;
    const stfoundation_comp = stats.total_comp_stfoundation;
    const stfoundation_delay = stats.total_delay_stfoundation;
    const stcolumn_incomp = stats.total_incomp_stcolumn;
    const stcolumn_comp = stats.total_comp_stcolumn;
    const stcolumn_delay = stats.total_delay_stcolumn;
    const stframing_incomp = stats.total_incomp_stframing;
    const stframing_comp = stats.total_comp_stframing;
    const stframing_delay = stats.total_delay_stframing;
    const roofs_incomp = stats.total_incomp_roofs;
    const roofs_comp = stats.total_comp_roofs;
    const roofs_delay = stats.total_delay_roofs;
    const floors_incomp = stats.total_incomp_floors;
    const floors_comp = stats.total_comp_floors;
    const floors_delay = stats.total_delay_floors;
    const walls_incomp = stats.total_incomp_walls;
    const walls_comp = stats.total_comp_walls;
    const walls_delay = stats.total_delay_walls;
    const columns_incomp = stats.total_incomp_columns;
    const columns_comp = stats.total_comp_columns;
    const columns_delay = stats.total_delay_columns;
    const others_incomp = stats.total_incomp_others;
    const others_comp = stats.total_comp_others;
    const others_delay = stats.total_delay_others;

    const data = [
      {
        category: buildingType[0].category,
        comp: stfoundation_comp,
        incomp: stfoundation_incomp,
        delay: stfoundation_delay,
      },
      {
        category: buildingType[1].category,
        comp: stcolumn_comp,
        incomp: stcolumn_incomp,
        delay: stcolumn_delay,
      },
      {
        category: buildingType[2].category,
        comp: stframing_comp,
        incomp: stframing_incomp,
        delay: stframing_delay,
      },
      {
        category: buildingType[3].category,
        comp: roofs_comp,
        incomp: roofs_incomp,
        delay: roofs_delay,
      },
      {
        category: buildingType[4].category,
        comp: floors_comp,
        incomp: floors_incomp,
        delay: floors_delay,
      },
      {
        category: buildingType[5].category,
        comp: walls_comp,
        incomp: walls_incomp,
        delay: walls_delay,
      },
      {
        category: buildingType[6].category,
        comp: columns_comp,
        incomp: columns_incomp,
        delay: columns_delay,
      },
      {
        category: buildingType[7].category,
        comp: others_comp,
        incomp: others_incomp,
        delay: others_delay,
      },
    ];

    return data;
  });
}

export async function generateTotalProgress(buildingname: any) {
  var total_number = new StatisticDefinition({
    onStatisticField: 'status',
    outStatisticFieldName: 'total_number',
    statisticType: 'count',
  });

  var total_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN status = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp',
    statisticType: 'sum',
  });

  var query = depotChart.createQuery();
  query.outStatistics = [total_number, total_comp];

  const queryExpression = "Name = '" + buildingname + "'";
  const queryAll = '1=1';

  !buildingname ? (query.where = queryAll) : (query.where = queryExpression);
  return depotChart.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    const total_progress = ((total_comp / total_number) * 100).toFixed(1);
    return [total_number, total_progress];
  });
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
