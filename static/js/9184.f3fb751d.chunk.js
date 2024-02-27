"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[9184],{51344:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return u.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,s,i;const r=u.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,l=+o.month-1,c=+o.day,d=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),y=+(null!==(s=o.seconds)&&void 0!==s?s:"0");if(d>23)return null;if(p>59)return null;if(y>59)return null;const f=null!==(i=o.ms)&&void 0!==i?i:"0",h=f?+f.padEnd(3,"0").substring(0,3):0;let g;if(o.isUTC||!o.offsetSign)g=Date.UTC(a,l,c,d,p,y,h);else{const e=+o.offsetHours,t=+o.offsetMinutes;g=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,l,c,d,p,y,h)}return Number.isNaN(g)?null:g}n.d(t,{Br:()=>i,Cq:()=>s,_U:()=>r});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},29184:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var s=n(3825),i=n(98773),r=n(50076),o=n(76460),a=n(50346),u=n(19902),l=n(80963),c=n(98618),d=n(72547),p=n(24586),y=n(26151),f=n(10907),h=n(40296),g=n(40098),m=n(1900),b=n(6127),_=n(53430),F=n(67478);const w={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class v{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(null===t||void 0===t?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=(0,f.BM)(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],a=null!=e.hasZ?e.hasZ:i.hasZ,u=i.geometryType;let c=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const p=e.spatialReference||l.w5;let g=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const v=new m.A(o);let I=v.get(c);I?("esriFieldTypeString"!==I.type&&(I.type="esriFieldTypeOID"),I.editable=!1,I.nullable=!1,c=I.name):(I={alias:c,name:c,type:"string"===i.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(I));const T={};for(const l of o){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new r.A("geojson-layer:invalid-field-name","field name is missing",{field:l});if(!b.m.jsonValues.includes(l.type))throw new r.A("geojson-layer:invalid-field-type",'invalid type for field "'.concat(l.name,'"'),{field:l});if(l.name!==I.name){const e=(0,_.lD)(l);void 0!==e&&(T[l.name]=e)}null==l.length&&(l.length=(0,_._b)(l))}if(g){if(g.startTimeField){const e=v.get(g.startTimeField);e?(g.startTimeField=e.name,e.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const e=v.get(g.endTimeField);e?(g.endTimeField=e.name,e.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const e=v.get(g.trackIdField);e?g.trackIdField=e.name:(g.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.startTimeField||g.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}const E=u?(0,h.F0)(u):void 0,S=v.dateFields.length?{timeZoneIANA:F.n$}:null,j={warnings:n,featureErrors:[],layerDefinition:{...w,drawingInfo:null!==E&&void 0!==E?E:void 0,templates:(0,h.e2)(T),extent:void 0,geometryType:u,objectIdField:c,fields:o,hasZ:!!a,timeInfo:g,dateFieldsTimeReference:S}};this._queryEngine=new y.d({fieldsIndex:m.A.fromLayerJSON({fields:o,timeInfo:g,dateFieldsTimeReference:S}),geometryType:u,hasM:!1,hasZ:a,objectIdField:c,spatialReference:p,timeInfo:g,featureStore:new d.A({geometryType:u,hasM:!1,hasZ:a}),cacheSpatialQueries:!0});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(I);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=(0,h.Vx)(T,c);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const A=this._normalizeFeatures(x,j.featureErrors);this._queryEngine.featureStore.addMany(A);const{fullExtent:C,timeExtent:P}=await this._queryEngine.fetchRecomputedExtents();if(j.layerDefinition.extent=C,P){const{start:e,end:t}=P;j.layerDefinition.timeInfo.timeExtent=[e,t]}return j}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,g.$1)(t,n),(0,p.Nk)(e.adds,t),(0,p.Nk)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,i.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.zf)(e)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new r.A("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:s}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=(0,f.bd)(e,{geometryType:t,hasZ:n,objectIdField:s});if(!(0,l.aI)(this._queryEngine.spatialReference,l.w5))for(const r of i)null!=r.geometry&&(r.geometry=(0,c.Ux)((0,p.Cv)((0,c.zv)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),l.w5,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await(0,s.A)(t,{responseType:"json",query:{...n},signal:e})).data;return(0,f.sO)(i),i}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,g.MB)(s,e,r.attributes,!0);o?null===t||void 0===t||t.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[n],i.push(r))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==t&&void 0!==t&&t.length&&this._applyAddEdits(i,t),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(i,n),null!==s&&void 0!==s&&s.length){for(const e of s)i.deleteResults.push((0,g.bP)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine,y=[];for(const c of t){if(c.geometry&&s!==(0,u.$B)(c.geometry)){n.push((0,g.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,g.MB)(d,t,c.attributes);if(i)n.push(i);else{if(this._assignObjectId(t,c.attributes),c.attributes=t,null!=c.uid){const t=c.attributes[o];e.uidToObjectId[c.uid]=t}if(null!=c.geometry){var f;const e=null!==(f=c.geometry.spatialReference)&&void 0!==f?f:a;c.geometry=(0,p.Cv)((0,g.CR)(c.geometry,e),e,a)}y.push(c),n.push((0,g.bP)(c.attributes[o]))}}l.addMany((0,c.Di)([],y,s,r,i,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,h=null===e||void 0===e?void 0:e[o];if(null==h){n.push((0,g.Yx)("Identifier field ".concat(o," missing")));continue}if(!l.has(h)){n.push((0,g.Yx)("Feature with object id ".concat(h," missing")));continue}const m=(0,c.oN)(l.getFeature(h),s,r,i);if(null!=t){var y;if(s!==(0,u.$B)(t)){n.push((0,g.Yx)("Incorrect geometry type."));continue}const e=null!==(y=t.spatialReference)&&void 0!==y?y:a;m.geometry=(0,p.Cv)((0,g.CR)(t,e),e,a)}if(e){const t=(0,g.MB)(d,m.attributes,e);if(t){n.push(t);continue}}l.add((0,c.E2)(m,s,r,i,o)),n.push((0,g.bP)(h))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,p.Nk)(l.w5,e)}catch{throw new r.A("geojson-layer","Projection not supported")}}}},10907:(e,t,n)=>{n.d(t,{BM:()=>T,bd:()=>E,sO:()=>I,xD:()=>c});var s=n(51344),i=n(50076),r=n(80963),o=n(20176),a=n(1484),u=n(53430);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*p(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function y(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],i=e[(n+1)%e.length];t+=s[0]*i[1]-i[0]*s[1]}return t<=0}function h(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return _(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const s of t.coordinates)_(e,s,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const s of t.coordinates){m(e,s[0],n);for(let t=1;t<s.length;t++)b(e,s[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return w(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const s=t.coordinates;m(e,s[0],n);for(let i=1;i<s.length;i++)b(e,s[i],n);return e}(e,t,n)}}function m(e,t,n){const s=h(t);!function(e){return!f(e)}(s)?_(e,s,n):F(e,s,n)}function b(e,t,n){const s=h(t);!function(e){return f(e)}(s)?_(e,s,n):F(e,s,n)}function _(e,t,n){for(const s of t)w(e,s,n);e.lengths.push(t.length)}function F(e,t,n){for(let s=t.length-1;s>=0;s--)w(e,t[s],n);e.lengths.push(t.length)}function w(e,t,n){const[s,i,r]=t;e.coords.push(s,i),n.hasZ&&e.coords.push(r||0)}function v(e){switch(typeof e){case"string":return(0,s.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new i.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!s||!o.test(s))throw new i.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e){var t,n;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=[],r=new Set,o=new Set;let a,l=!1,f=null,h=!1,{geometryType:g=null}=s,m=!1;for(const _ of d(e)){const{geometry:e,properties:t,id:n}=_;if((!e||(g||(g=c(e.type)),c(e.type)===g))&&(l||(l=y(p(e))),h||(h=null!=n,h&&(a=typeof n,t&&(f=Object.keys(t).filter((e=>t[e]===n))))),t&&f&&h&&null!=n&&(f.length>1?f=f.filter((e=>t[e]===n)):1===f.length&&(f=t[f[0]]===n?f:[])),!m&&t)){let e=!0;for(const n in t){if(r.has(n))continue;const s=t[n];if(null==s){e=!1,o.add(n);continue}const a=v(s);if("unknown"===a){o.add(n);continue}o.delete(n),r.add(n);const l=(0,u.rS)(n);l&&i.push({name:l,alias:n,type:a})}m=e}}const b=null!==(t=(0,u.rS)(1===(null===(n=f)||void 0===n?void 0:n.length)&&f[0]||null))&&void 0!==t?t:void 0;if(b)for(const c of i)if(c.name===b&&(0,u.WA)(c)){c.type="esriFieldTypeOID";break}return{fields:i,geometryType:g,hasZ:l,objectIdFieldName:b,objectIdFieldType:a,unknownFields:Array.from(o)}}function E(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:s}=t;for(const r of e){var i;const{geometry:e,properties:u,id:l}=r;if(e&&c(e.type)!==n)continue;const d=u||{};let p;s&&(p=d[s],null==l||p||(d[s]=p=l));const y=new o.Om(e?g(new a.A,e,t):null,d,null,null!==(i=p)&&void 0!==i?i:void 0);yield y}}()}(d(e),t))}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>c,e2:()=>d,f:()=>p});var s=n(81806),i=n(53084),r=n(8298),o=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function c(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(u.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,n)=>{n.d(t,{$1:()=>g,CR:()=>h,MB:()=>p,Yx:()=>u,bP:()=>c});var s=n(51344),i=n(80963),r=n(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new l(e)}const d=new Set;function p(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const o in n){const i=e.get(o);if(!i)continue;const a=y(i,n[o]);if(d.add(i.name),i&&(s||i.editable)){const e=(0,r.CJ)(i,a);if(e)return u((0,r.uo)(e,i,a));t[i.name]=a}}for(const r of null!==(i=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==i?i:[]){var i;if(!d.has(r.name))return u('missing required field "'.concat(r.name,'"'))}return null}function y(e,t){let n=t;return(0,r.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.vE)(e)&&"string"==typeof t&&(n=(0,s._U)(t)),(0,r.WX)(n)}let f;function h(e,t){if(!e||!(0,i.fn)(t))return e;if("rings"in e||"paths"in e){if(null==f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function g(e,t){!(0,i.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==f&&(f=await Promise.all([n.e(2612),n.e(4050)]).then(n.bind(n,1669))),f}()}}}]);
//# sourceMappingURL=9184.f3fb751d.chunk.js.map