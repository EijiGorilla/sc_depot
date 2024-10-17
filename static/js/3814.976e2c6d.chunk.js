"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[3814,239,2487],{77491:(e,a,r)=>{r.d(a,{v:()=>n});var t=r(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},11668:(e,a,r)=>{r.d(a,{K:()=>d,Q:()=>i});var t=r(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:r,...n}=a||{},i=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);u(i),y(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const c=`${e}/layers`,l=r?await r.fetchServiceMetadata(c,n):await(0,t.V)(c,n);return u(l),y(l),s.layersJSON={layers:l.layers,tables:l.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function y(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(c)}function l(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function u(e){e.layers?.forEach(l),e.tables?.forEach(o)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},60239:(e,a,r)=>{r.d(a,{N:()=>v,populateOperationalLayers:()=>o});var t=r(19276),n=(r(81806),r(77491)),i=r(62487),s=r(70652);function c(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var y=r(2487),l=r(81589);async function o(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await v(t,a,r):T(a)?function(e,a,r){a.itemId&&(e.portalItem=new s.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;G(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):g(a)&&await async function(e,a,r){const t=i.S.FeatureLayer,n=await t(),s=a.featureCollection,c=s?.showLegend,y=s?.layers?.map(((t,i)=>{const s=new n;s.read(t,r);const y={...r,ignoreDefaults:!0};return G(s,e,a,i,y),null!=c&&s.read({showLegend:c},y),s}));e.layers.addMany(y??[])}(t,a,r.context)),await(0,l.L)(t,r.context),t}(await I(e,a),e,a)}(e,r))),n=await Promise.allSettled(t);for(const i of n)"rejected"===i.status||i.value&&e.add(i.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},p={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},w={...f,LinkChartLayer:"LinkChartLayer"},h={...m},b={...S};async function I(e,a){const r=a.context,t=M(r);let l=e.layerType||e.type;!l&&a?.defaultLayerType&&(l=a.defaultLayerType);const o=t[l];let u=o?i.S[o]:i.S.UnknownLayer;if(T(e)){const a=r?.portal;if(e.itemId){const r=new s.default({id:e.itemId,portal:a});await r.load();const t=(await(0,y.n)(r,new n.v)).className||"UnknownLayer";u=i.S[t]}}else"ArcGISFeatureLayer"===l?function(e){return c(e,"notes")}(e)||function(e){return c(e,"markup")}(e)?u=i.S.MapNotesLayer:function(e){return c(e,"route")}(e)?u=i.S.RouteLayer:g(e)&&(u=i.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?u=i.S.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo?.version&&(u=i.S.UnsupportedLayer);return u()}function g(e){return"ArcGISFeatureLayer"===e.layerType&&!T(e)&&(e.featureCollection?.layers?.length??0)>1}function T(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=p;break;case"ground":a=d;break;case"tables":a=L;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=b;break;case"tables":a=h;break;default:a=w}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=m;break;default:a=f}}return a}async function v(e,a,r){const n=new t.A,i=o(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(s){e.destroy();for(const e of n)e.destroy();throw s}}catch(s){throw s}}function G(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},62487:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await r.e(3993).then(r.bind(r,13993))).default,BuildingSceneLayer:async()=>(await Promise.resolve().then(r.bind(r,82740))).default,CSVLayer:async()=>(await r.e(1365).then(r.bind(r,1365))).default,CatalogLayer:async()=>(await Promise.all([r.e(9122),r.e(2003),r.e(982),r.e(9078),r.e(4397)]).then(r.bind(r,84397))).default,DimensionLayer:async()=>(await r.e(126).then(r.bind(r,70126))).default,ElevationLayer:async()=>(await r.e(3875).then(r.bind(r,23875))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,38451))).default,GeoJSONLayer:async()=>(await r.e(709).then(r.bind(r,50709))).default,GeoRSSLayer:async()=>(await r.e(2551).then(r.bind(r,52551))).default,GroupLayer:async()=>(await r.e(6095).then(r.bind(r,16095))).default,ImageryLayer:async()=>(await Promise.all([r.e(9122),r.e(6333),r.e(7480),r.e(9051)]).then(r.bind(r,59051))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6333),r.e(9844),r.e(9571),r.e(7480),r.e(7416)]).then(r.bind(r,47416))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(6790).then(r.bind(r,76790))).default,IntegratedMeshLayer:async()=>(await r.e(2825).then(r.bind(r,32825))).default,KMLLayer:async()=>(await r.e(2712).then(r.bind(r,72712))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(7216),r.e(3620),r.e(2003),r.e(1047),r.e(4476),r.e(7118),r.e(6570)]).then(r.bind(r,26570))).default,LineOfSightLayer:async()=>(await r.e(2635).then(r.bind(r,62635))).default,LinkChartLayer:async()=>(await Promise.all([r.e(7216),r.e(3620),r.e(2003),r.e(1047),r.e(4476),r.e(7118),r.e(2218)]).then(r.bind(r,92218))).default,MapImageLayer:async()=>(await Promise.all([r.e(9122),r.e(982),r.e(5721),r.e(2951)]).then(r.bind(r,82951))).default,MapNotesLayer:async()=>(await r.e(3311).then(r.bind(r,43311))).default,MediaLayer:async()=>(await Promise.all([r.e(9639),r.e(5355)]).then(r.bind(r,46061))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(6799),r.e(5526)]).then(r.bind(r,1741))).default,OpenStreetMapLayer:async()=>(await r.e(803).then(r.bind(r,50803))).default,OrientedImageryLayer:async()=>(await r.e(2593).then(r.bind(r,52593))).default,PointCloudLayer:async()=>(await r.e(1830).then(r.bind(r,11830))).default,RouteLayer:async()=>(await Promise.all([r.e(1297),r.e(1301)]).then(r.bind(r,91301))).default,SceneLayer:async()=>(await Promise.all([r.e(3141),r.e(8320)]).then(r.bind(r,48320))).default,StreamLayer:async()=>(await r.e(4369).then(r.bind(r,84369))).default,SubtypeGroupLayer:async()=>(await r.e(9005).then(r.bind(r,69005))).default,TileLayer:async()=>(await Promise.all([r.e(9122),r.e(982),r.e(5721),r.e(1174)]).then(r.bind(r,71174))).default,UnknownLayer:async()=>(await r.e(8896).then(r.bind(r,8896))).default,UnsupportedLayer:async()=>(await r.e(2043).then(r.bind(r,72043))).default,VectorTileLayer:async()=>(await Promise.all([r.e(8376),r.e(3451)]).then(r.bind(r,53451))).default,VideoLayer:async()=>(await r.e(9398).then(r.bind(r,19398))).default,VoxelLayer:async()=>(await r.e(8560).then(r.bind(r,88560))).default,WFSLayer:async()=>(await Promise.all([r.e(1316),r.e(6964)]).then(r.bind(r,4583))).default,WMSLayer:async()=>(await r.e(2015).then(r.bind(r,52015))).default,WMTSLayer:async()=>(await r.e(1845).then(r.bind(r,1845))).default,WebTileLayer:async()=>(await r.e(4552).then(r.bind(r,24552))).default}},73814:(e,a,r)=>{r.d(a,{load:()=>f});var t=r(50076),n=r(13096),i=r(11668),s=r(77491),c=r(60239),y=r(62487),l=r(65308),o=r(79942),u=r(64130),d=r(72945),L=r(81589),p=r(67061);async function f(e,a){const r=e.instance.portalItem;if(r?.id)return await r.load(a),function(e){const a=e.instance.portalItem;if(!a?.type||!e.supportedTypes.includes(a.type))throw new t.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:e.supportedTypes.join(", ")})}(e),e.validateItem&&e.validateItem(r),async function(e,a){const r=e.instance,n=r.portalItem;if(!n)return;const{url:y,title:l}=n,f=(0,o.v)(n,"portal-item");if("group"===r.type)return async function(e,a,r){const n=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:y,type:l}=n;if("Group Layer"===l){if(!(0,d.Y)(n,"Map"))throw new t.A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e){const a=e.portalItem,r=await a.fetchData("json");if(!r)return;const t=(0,o.v)(a,"web-map");e.read(r,t),await(0,c.N)(e,r,{context:t}),e.resourceReferences={portalItem:a,paths:t.readResourcePaths??[]}}(e)}return e.read({title:y},a),async function(e,a){let r;const{portalItem:n}=e;if(!n)return;const c=n.type,y=a.layerModuleTypeMap;switch(c){case"Feature Service":case"Feature Collection":r=y.FeatureLayer;break;case"Stream Service":r=y.StreamLayer;break;case"Scene Service":r=y.SceneLayer;break;default:throw new t.A("portal:unsupported-item-type-as-group",`The item type '${c}' is not supported as a 'IGroupLayer'`)}const l=new s.v;let[o,d]=await Promise.all([r(),w(a,l)]),L=()=>o;if("Feature Service"===c){const a=(0,u.pJ)(d)?.customParameters;d=n.url?await(0,u.bO)(d,n.url,l):{},L=await async function(e,a){const{layers:r}=e;if(!r?.length)return;const t=new Set,n=[];for(const{layerType:c}of r){const e=c??"ArcGISFeatureLayer";if(t.has(e))continue;t.add(e);const r=a[(0,u.K8)(e)];n.push(r())}const i=await Promise.all(n),s=new Map;return Array.from(t).forEach(((e,a)=>{s.set(e,i[a])})),e=>{let{layerType:a}=e;const r=a??"ArcGISFeatureLayer";return s.get(r)}}(d,y)||L;const r=await async function(e,a){const{layersJSON:r}=await(0,i.Q)(e,a);if(!r)return null;const t=[...r.layers,...r.tables];return e=>t.find((a=>a.id===e.id))}(n.url,{customParameters:a,loadContext:l});return await m(e,L,d,r)}return"Scene Service"===c&&n.url&&(d=await(0,u.nu)(n,d,l)),(0,u.XH)(d)>0?await m(e,L,d):await async function(e,a){const{portalItem:r}=e;if(!r?.url)return;const t=await(0,p.V)(r.url);t&&m(e,a,{layers:t.layers?.map(u._r),tables:t.tables?.map(u._r)})}(e,L)}(e,r)}(r,f,e);y&&"media"!==r.type&&r.read({url:y},f);const S=new s.v,h=await w(e,S,a);return h&&r.read(h,f),r.resourceReferences={portalItem:n,paths:f.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:l},f),(0,L.L)(r,f)}(e,a)}async function m(e,a,r,t){let n=r.layers||[];const i=r.tables||[];if("Feature Collection"===e.portalItem?.type?(n.forEach(((e,a)=>{e.id=a,"Table"===e?.layerDefinition?.type&&i.push(e)})),n=n.filter((e=>"Table"!==e?.layerDefinition?.type))):(n.reverse(),i.reverse()),n.forEach((n=>{const i=t?.(n);if(i||!t){const t=S(e,a(n),r,n,i);e.add(t)}})),i.length){const a=await y.S.FeatureLayer();i.forEach((n=>{const i=t?.(n);if(i||!t){const t=S(e,a,r,n,i);e.tables.add(t)}}))}}function S(e,a,r,t,n){const i=e.portalItem,s={portalItem:i.clone(),layerId:t.id};null!=t.url&&(s.url=t.url);const c=new a(s);if("sourceJSON"in c&&(c.sourceJSON=n),"subtype-group"!==c.type&&"catalog"!==c.type&&(c.sublayerTitleMode="service-name"),"Feature Collection"===i.type){const e={origin:"portal-item",portal:i.portal||l.A.getDefault()};c.read(t,e);const a=r.showLegend;null!=a&&c.read({showLegend:a},e)}return c}async function w(e,a,r){if(!1===e.supportsData)return;const t=e.instance,i=t.portalItem;if(!i)return;let s=null;try{s=await i.fetchData("json",r)}catch(c){}if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let e=null;const r=await async function(e,a,r){if(a?.layers&&a?.tables)return(0,u.XH)(a);const t=(0,n.qg)(e.url);if(!t)return 1;const i=await r.fetchServiceMetadata(t.url.path,{customParameters:(0,u.pJ)(a)?.customParameters}).catch((()=>null));return(a?.layers?.length??i?.layers?.length??0)+(a?.tables?.length??i?.tables?.length??0)}(i,s,a);if((s?.layers||s?.tables)&&r>0){if(null==t.layerId){const e=(0,u.iK)(t.type),a=e?(0,u.Ju)(s,e)[0]:(0,u.pJ)(s);a&&(t.layerId=a.id)}e=function(e,a){const{layerId:r}=a,t=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return t&&function(e,a){const r="layerType"in e&&e.layerType,{type:t}=a;return!("feature"===t&&r&&"ArcGISFeatureLayer"!==e.layerType||"catalog"===t&&!r||"oriented-imagery"===t&&!r||"subtype-group"===t&&!r)}(t,a)?t:null}(s,t),"OrientedImageryLayer"===e?.layerType&&"oriented-imagery"===t.type&&t.supportedSourceTypes.add("Feature Layer"),e&&null!=s.showLegend&&(e.showLegend=s.showLegend)}return r>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),e}return s}},64130:(e,a,r)=>{r.d(a,{Ju:()=>l,K8:()=>d,XH:()=>o,_r:()=>i,bO:()=>s,iK:()=>u,nu:()=>L,pJ:()=>c,rc:()=>y});var t=r(39323),n=r(11668);function i(e){const a={id:e.id,name:e.name},r=(0,n.K)(e.type);return"FeatureLayer"!==r&&(a.layerType=r),a}async function s(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(i),e.tables=e.tables||t?.tables?.map(i)}return e}function c(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function y(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function l(e,a){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:r}=e;return r?r===a:"ArcGISFeatureLayer"===a}))}function o(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function u(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function L(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(i)}const{serverUrl:n,portalItem:s}=await(0,t.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData();if(e?.tables)a.tables=e.tables.map(i);else{const t=await r.fetchServiceMetadata(n,{customParameters:c(e)?.customParameters});a.tables=t?.tables?.map(i)}}if(a.tables)for(const t of a.tables)t.url=`${n}/${t.id}`;return a}},2487:(e,a,r)=>{r.d(a,{fromItem:()=>d,n:()=>L});var t=r(50076),n=r(39323),i=r(11668),s=r(77491),c=r(31933),y=r(62487),l=r(70652),o=r(64130),u=r(72945);async function d(e){let{portalItem:a}=e;!a||a instanceof l.default||(a=new l.default(a));const r=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,r=y.S[a];return{constructor:await r(),properties:e.properties}}(await L(e,a))}(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function L(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.Y)(e,"Map Notes"),r=(0,u.Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,o.XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await p(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=i.cacheType?.toLowerCase(),c=i.capabilities?.toLowerCase().includes("tilesonly");return"map"===s||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await p(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const i=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{className:c.XX[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function p(e,a,r){const{url:t,type:n}=e,s="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(s){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{id:r.id,className:(0,i.K)(r.type),sourceJSON:r}}return{}}await e.load();let c=await a.fetchItemData(e);if(s){const e=await(0,o.bO)(c,t,a),r=f(e);if("object"==typeof r){const a=(0,o.rc)(e,r.id);r.className=(0,o.K8)(a?.layerType)}return r}if("Scene Service"===n&&(c=await(0,o.nu)(e,c,a)),(0,o.XH)(c)>0)return f(c);const y=await a.fetchServiceMetadata(t);return r&&(y.tables=await r()),f(y)}function f(e){return 1===(0,o.XH)(e)&&{id:(0,o.pJ)(e)?.id}}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);
//# sourceMappingURL=3814.976e2c6d.chunk.js.map