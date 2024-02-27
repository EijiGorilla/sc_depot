"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[1174],{71174:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var l,r=i(35143),a=i(3825),n=i(50076),o=i(27741),s=i(77717),c=i(50346),h=i(90534),p=i(46053),u=i(21403),d=(i(18690),i(81806),i(28379)),v=i(85842),f=i(17707),y=i(13312),m=i(25515),_=i(12406),g=i(76328),w=i(36648),b=i(19502),A=i(65624),S=i(31362),O=i(11270),T=i(94729),M=i(21617),D=i(5682),L=i(73907),I=i(13096),x=i(95363),C=i(16852),Z=i(39568);const P=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let U=l=class extends((0,A.d)((0,D.j)((0,L.I)((0,g.f)((0,w.V)((0,O.q)((0,T.A)((0,b.b)((0,s.P)((0,M.J)((0,_.p)((0,S.d)(m.A))))))))))))){constructor(){super(...arguments),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return t?this._getDefaultAttribution(this._getMapName(t)):null}readSpatialReference(e,t){var i;return(e=e||(null===(i=t.tileInfo)||void 0===i?void 0:i.spatialReference))&&y.A.fromJSON(e)}writeSublayers(e,t,i,l){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray(),a=[],n={writeSublayerStructure:!1,...l};r.forEach((e=>{const t=e.write({},n);a.push(t)})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a)}get tileServers(){var e;return this._getDefaultTileServers(null===(e=this.parsedUrl)||void 0===e?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,h.An)(e).path)):null}fetchTile(e,t,i){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:r}=l,n=this.getTileUrl(e,t,i),o={responseType:"image",signal:r,query:{...this.refreshParameters}};return(0,a.A)(n,o).then((e=>e.data))}async fetchImageBitmapTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:n}=r;if(this.fetchTile!==l.prototype.fetchTile){const l=await this.fetchTile(e,t,i,r);return(0,C.C)(l,e,t,i,n)}const o=this.getTileUrl(e,t,i),s={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:c}=await(0,a.A)(o,s);return(0,C.C)(c,e,t,i,n)}getTileUrl(e,t,i){var l,r;const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,n=(0,h.x0)({...null===(l=this.parsedUrl)||void 0===l?void 0:l.query,blankTile:!a&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return"".concat(o&&o.length?o[t%o.length]:null===(r=this.parsedUrl)||void 0===r?void 0:r.path,"/tile/").concat(e,"/").concat(t,"/").concat(i).concat(n?"?"+n:"")}loadAll(){return(0,o.g)(this,(e=>{e(this.allSublayers)}))}_fetchService(e){return new Promise(((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new n.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new n.A("tile-layer:undefined-url","layer's url is not defined");const l=(0,I.qg)(this.parsedUrl.path);if(null!=l&&"ImageServer"===l.serverType)throw new n.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,a.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,i)})).then((t=>{let i=this.url;if(t.ssl&&(i=this.url=i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,I.Wo)(i))return this._fetchServerVersion(i,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,I.Fi)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,a.A)(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new n.A("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t?t[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let t;e=e.toLowerCase();for(let i=0,l=P.length;i<l;i++)if(t=P[i],t.toLowerCase().includes(e))return(0,h.s2)("//static.arcgis.com/attribution/"+t);return null}_getDefaultTileServers(e){if(null==e)return[];const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[k]}};(0,r._)([(0,p.MZ)({readOnly:!0})],U.prototype,"attributionDataUrl",null),(0,r._)([(0,p.MZ)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),(0,r._)([(0,p.MZ)({json:{read:!0,write:!0}})],U.prototype,"blendMode",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],U.prototype,"isReference",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],U.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.MZ)({type:Boolean})],U.prototype,"resampling",void 0),(0,r._)([(0,p.MZ)()],U.prototype,"sourceJSON",void 0),(0,r._)([(0,p.MZ)({type:y.A})],U.prototype,"spatialReference",void 0),(0,r._)([(0,d.w)("spatialReference",["spatialReference","tileInfo"])],U.prototype,"readSpatialReference",null),(0,r._)([(0,p.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],U.prototype,"sublayers",void 0),(0,r._)([(0,f.K)("sublayers",{layers:{type:[Z.A]}})],U.prototype,"writeSublayers",null),(0,r._)([(0,p.MZ)({json:{read:!1,write:!1}})],U.prototype,"popupEnabled",void 0),(0,r._)([(0,p.MZ)()],U.prototype,"tileServers",null),(0,r._)([(0,u.w)("tileServers")],U.prototype,"castTileServers",null),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),(0,r._)([(0,p.MZ)(x.OZ)],U.prototype,"url",void 0),U=l=(0,r._)([(0,v.$)("esri.layers.TileLayer")],U);const k=Symbol("default-fetch-tile");U.prototype.fetchTile[k]=!0;const q=U},76328:(e,t,i)=>{i.d(t,{f:()=>p});var l=i(35143),r=(i(35238),i(46053)),a=(i(40565),i(18690),i(81806),i(28379)),n=i(85842),o=i(88235),s=i(44067),c=i(82356),h=i(13312);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var e,t;null===(e=this.tilemapCache)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e)}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){var l;const r=null===(l=t.capabilities)||void 0===l?void 0:l.includes("Tilemap");let{minLOD:a,maxLOD:n,minScale:h,maxScale:p}=t;if(null==a&&null==n&&0!==h&&0!==p){const e=e=>Math.round(1e4*e)/1e4;h=e(h||t.tileInfo.lods[0].scale),p=e(p||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);a=t>=h?i.level:a,n=t>=p?i.level:n}}if(r)return new c.d({layer:this,minLOD:a,maxLOD:n});if(t.tileInfo){const e=new o.A;return e.read(t.tileInfo,i),new s.A(e,a,n)}return null}};return(0,l._)([(0,r.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,r.MZ)()],t.prototype,"minScale",void 0),(0,l._)([(0,a.w)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,r.MZ)()],t.prototype,"maxScale",void 0),(0,l._)([(0,a.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,r.MZ)({type:h.A})],t.prototype,"spatialReference",void 0),(0,l._)([(0,r.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,r.MZ)({type:o.A})],t.prototype,"tileInfo",void 0),(0,l._)([(0,r.MZ)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,a.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,r.MZ)()],t.prototype,"version",void 0),t=(0,l._)([(0,n.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},44067:(e,t,i)=>{i.d(t,{A:()=>a});var l=i(50076),r=i(50346);class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var l;const r=null===(l=this.tileInfo)||void 0===l?void 0:l.lodAt(e);return!r||e<this.minLOD||e>this.maxLOD?"unavailable":r.cols&&r.rows?i>=r.cols[0]&&i<=r.cols[1]&&t>=r.rows[0]&&t<=r.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,a){await(0,r.NO)(a);const n=this.getAvailability(e,t,i);if("unavailable"===n)throw new l.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return n}async fetchAvailabilityUpsample(e,t,i,l,a){await(0,r.NO)(a),l.level=e,l.row=t,l.col=i;const n=this.tileInfo;return n.updateTileInfo(l),this.fetchAvailability(e,t,i,a).catch((e=>{if((0,r.zf)(e))throw e;if(n.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,a);throw e}))}}},82356:(e,t,i)=>{i.d(t,{d:()=>O});var l,r=i(35143),a=i(3825),n=i(91967),o=i(55877),s=i(50076),c=i(54901),h=i(53521),p=i(30015),u=i(50346),d=i(68134),v=i(52394),f=i(90534),y=i(46053),m=(i(40565),i(18690)),_=(i(81806),i(85842)),g=i(11164),w=i(53084),b=i(78393);class A{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,w.o8)(t));const l=this.location.width,r=this.location.height;let a=!0,n=!0;const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=b.y9?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*r/32));let s=0;for(let c=0;c<i.length;c++){const e=c%32;i[c]?(n=!1,o[s]|=1<<e):a=!1,31===e&&++s}n?(this._availability="unavailable",this.byteSize=40):a?(this._availability="available",this.byteSize=40):(this._availability=o,this.byteSize=40+(0,b.Ek)(o))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,r=i>>5,a=this._availability;return r<0||r>a.length?"unknown":a[r]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||a.A,{row:l,col:r,width:n,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){var t;let i;if(null!==(t=e.service.tileServers)&&void 0!==t&&t.length){const t=e.service.tileServers;i="".concat(t&&t.length?t[e.row%t.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}else i="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);const l=e.service.query;return l&&(i="".concat(i,"?").concat(l)),i}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:r,width:n,height:o},valid:!0,data:(0,m.dY)(n*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==r||e.location.width!==n||e.location.height!==o))throw new s.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:r,width:n,height:o}});return A.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new A(e))}_validateJSON(e){if(null===e||void 0===e||!e.location)throw new s.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new s.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new s.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new s.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new s.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}let O=l=class extends n.A{constructor(e){super(e),this._pendingTilemapRequests={},this.request=a.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new h.q(2*o.u.MEGABYTES),this.addHandles([(0,d.wB)((()=>{const{layer:e}=this;return[null===e||void 0===e?void 0:e.parsedUrl,null===e||void 0===e?void 0:e.tileServers,null===e||void 0===e?void 0:e.apiKey,null===e||void 0===e?void 0:e.customParameters]}),(()=>this._initializeTilemapDefinition()),d.Vh)])}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,l){var r;if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new s.A("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));const a=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,i,a);if(n)return Promise.resolve(n);const o=null===(r=l)||void 0===r?void 0:r.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,u.u7)(o,(()=>t((0,u.NK)())));const i=S(a);let r=this._pendingTilemapRequests[i];if(!r){r=A.fromDefinition(a,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new s.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof A){const r=l.getAvailability(t,i);if("unavailable"===r)throw new s.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}if((0,u.zf)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,r){l.level=e,l.row=t,l.col=i;const a=this.layer.tileInfo;a.updateTileInfo(l);const n=this.fetchAvailability(e,t,i,r).catch((e=>{if((0,u.zf)(e))throw e;if(a.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,r);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,r,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,a,n){if(!this._prefetchingEnabled||null==e)return;const o="prefetch-".concat(e);if(this.hasHandles(o))return;const s=new AbortController;n.then((()=>s.abort()),(()=>s.abort()));let h=!1;const p=(0,c.hA)((()=>{h||(h=!0,s.abort())}));if(this.addHandles(p,o),await(0,v.md)(10,s.signal).catch((()=>{})),h||(h=!0,this.removeHandles(o)),(0,u.G4)(s))return;const d=new g.U(e,t,i,r),f={...a,signal:s.signal},y=this.layer.tileInfo;for(let c=0;l._prefetches.length<l._maxPrefetch&&y.upsampleTile(d);++c){const e=this.fetchAvailability(d.level,d.row,d.col,f);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:l}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:(0,f.x0)({...t.query,...l,token:null!==i&&void 0!==i?i:null===(e=t.query)||void 0===e?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const r=S(l);return this._tilemapCache.get(r)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};O._maxPrefetch=4,O._prefetches=new p.A({initialSize:l._maxPrefetch}),(0,r._)([(0,y.MZ)({constructOnly:!0})],O.prototype,"layer",void 0),(0,r._)([(0,y.MZ)({constructOnly:!0})],O.prototype,"minLOD",void 0),(0,r._)([(0,y.MZ)({constructOnly:!0})],O.prototype,"maxLOD",void 0),(0,r._)([(0,y.MZ)({constructOnly:!0})],O.prototype,"request",void 0),(0,r._)([(0,y.MZ)({constructOnly:!0})],O.prototype,"size",void 0),O=l=(0,r._)([(0,_.$)("esri.layers.support.TilemapCache")],O)}}]);
//# sourceMappingURL=1174.a1ea6c46.chunk.js.map