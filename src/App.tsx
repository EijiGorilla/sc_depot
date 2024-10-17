/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList, timeSlider, start } from './Scene';
import Select from 'react-select';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteTab,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import { DropDownData } from './customClass';
import {
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  wallsLayer,
  columnsLayer,
  buildingSpotLayer,
  buildingLayer,
  stFoundationLayer_cw,
  buildingLayer_cw,
} from './layers';
// import TimeSlider from './components/TimeSlider';
import { dateUpdate } from './Query';
import ChartCw from './components/ChartCw';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // For dropdown filter
  const [buildingName, setBuildingName] = useState<null | any>(null);
  const [initBuildingNames, setInitBuildingNames] = useState([]);

  // load building layer
  const [buildingLayerLoaded, setBuildingLayerLoaded] = useState<any>();
  const [buildingLayerLoaded_cw, setBuildingLayerLoaded_cw] = useState<any>();

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (activeWidget === 'timeslider') {
      timeSlider.timeExtent.end = start;
      view.ui.remove(timeSlider);
      const queryExpression = 'Station = ' + buildingName.value;

      stColumnLayer.definitionExpression = queryExpression;
      stFoundationLayer.definitionExpression = queryExpression;
      stFramingLayer.definitionExpression = queryExpression;
      columnsLayer.definitionExpression = queryExpression;
      floorsLayer.definitionExpression = queryExpression;
      wallsLayer.definitionExpression = queryExpression;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;

      // Reset timeslider when closed
      if (nextWidget === 'timeslider') {
        view.ui.add(timeSlider, 'bottom-leading');
      }
    }
  });

  useEffect(() => {
    if (nextWidget === 'timeslider') {
      view.ui.remove(timeSlider);
    }
  }, [buildingName]);

  const handleMunicipalityChange = (obj: any) => {
    setBuildingName(obj);
  };

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    buildingLayer.load().then(() => {
      setBuildingLayerLoaded(buildingLayer.loadStatus);
    });

    // buildingLayer_cw.load().then(() => {
    //   setBuildingLayerLoaded_cw(buildingLayer_cw.loadStatus);
    // });
  });

  useEffect(() => {
    // Dropdown
    const dropdownData = new DropDownData({
      featureLayers: [buildingSpotLayer],
      fieldNames: ['Name'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitBuildingNames(response);
    });

    // As of date
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });

    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" layout="center" style={{ width: '33vw' }}>
          <CalciteTabNav slot="title-group" id="thetabs">
            <CalciteTabTitle class="depotbuilding">Depot Buildings</CalciteTabTitle>
            <CalciteTabTitle class="civilworks">Civil Works (pending)</CalciteTabTitle>
          </CalciteTabNav>
          <CalciteTab>
            {/* Make sure that the component 'Chart' is executed after sub-layers are loaded.  */}
            {!stColumnLayer ? (
              <div></div>
            ) : (
              <Chart building={!buildingName ? '' : buildingName.field1} />
            )}
          </CalciteTab>
          <CalciteTab>{stFoundationLayer_cw && <ChartCw />}</CalciteTab>
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'2.9%'}
            width={'2.9%'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">SC DEPOT</b>
          <div className="date">{asOfDate}</div>

          <div className="dropdownFilter">
            <div className="dropdownFilterLayout">
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
              <Select
                placeholder="Select Station"
                value={buildingName}
                options={initBuildingNames}
                onChange={handleMunicipalityChange}
                getOptionLabel={(x: any) => x.field1}
                styles={customstyles}
              />
            </div>
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'4.4%'}
            width={'4.4%'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            {/* <CalciteAction
              data-action-id="timeslider"
              icon="clock"
              text="Timeslider"
              id="timeslider"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction> */}

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          {/* <CalcitePanel
            class="timeslider-panel"
            height-scale="s"
            data-panel-id="timeslider"
            hidden
          ></CalcitePanel> */}

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter utility data</b> by contract package, company, and data type:
                    (point or line).
                  </li>
                  <br />
                  <li>
                    <b>Click the bar-chart series</b> to view progress on the respective company and
                    work status over the map.
                  </li>
                  <br />
                  <li>Click/unclick widgets icon for viewing Layer list, legend, and basemaps.</li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            marginLeft: 'auto',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <div className="mapDiv" ref={mapDiv}></div>

        {/* time slider widget */}
        {/* {nextWidget === 'timeslider' && nextWidget !== activeWidget ? (
          <TimeSlider station={!buildingName ? '' : buildingName.name} />
        ) : (
          ''
        )} */}
      </CalciteShell>
    </>
  );
}

export default App;
