"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[3146],{10765:(e,t,r)=>{r.d(t,{save:()=>T,saveAs:()=>x});var a=r(18690),n=(r(50076),r(97924)),o=r(13096),s=r(11668),i=r(31933),l=r(62487),u=r(72945);const c="Feature Service",y="feature-layer-utils",d=`${y}-save`,p=`${y}-save-as`;function f(e){return{isValid:(0,i.W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],r=[];for(const{layer:a,layerJSON:n}of e)a.isTable?r.push(n):t.push(n);return{layers:t,tables:r}}function w(e){return m([e])}async function h(e,t){return/\/\d+\/?$/.test(e.url)?w(t[0]):v(t,e)}async function v(e,t){if(e.reverse(),!t)return m(e);const r=await async function(e,t){let r=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(r))return r;r||={},function(e){e.layers||=[],e.tables||=[]}(r);const{layer:{url:a,customParameters:n,apiKey:o}}=t[0];return await async function(e,t,r){const{url:a,customParameters:n,apiKey:o}=t,{serviceJSON:i,layersJSON:u}=await(0,s.Q)(a,{customParameters:n,apiKey:o}),c=S(e.layers,i.layers,r),y=S(e.tables,i.tables,r);e.layers=c.itemResources,e.tables=y.itemResources;const d=[...c.added,...y.added],p=u?[...u.layers,...u.tables]:[];await async function(e,t,r,a){const n=await async function(e){const t=[];e.forEach((e=>{let{type:r}=e;const a=(0,s.K)(r),n=l.S[a];t.push(n())}));const r=await Promise.all(t),a=new Map;return e.forEach(((e,t)=>{let{type:n}=e;a.set(n,r[t])})),a}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:r,layerId:t,sourceJSON:a.find((e=>{let{id:r}=e;return r===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:r,loaded:a,defaultPopupTemplate:n}=t;if(!a||null==n)return;const o={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),N(t,o,e)}))}(e,d,a,p)}(r,{url:a??"",customParameters:n,apiKey:o},t.map((e=>e.layer.layerId))),r}(t,e);for(const a of e)N(a.layer,a.layerJSON,r);return function(e,t){const r=[],a=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?a.push(t):r.push(t)}I(e.layers,r),I(e.tables,a)}(r,e),r}function I(e,t){if(e.length<2)return;const r=[];for(const{id:a}of e)r.push(a);(0,a.aI)(r.sort(b),t.slice().sort(b))&&e.sort(((e,r)=>{const a=t.indexOf(e.id),n=t.indexOf(r.id);return a<n?-1:a>n?1:0}))}function b(e,t){return e<t?-1:e>t?1:0}function S(e,t,r){const n=(0,a.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:r}=t;e.push({id:r})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!r.includes(t)}))}}function N(e,t,r){e.isTable?P(r.tables,t):P(r.layers,t)}function P(e,t){const r=e.findIndex((e=>{let{id:r}=e;return r===t.id}));-1===r?e.push(t):e[r]=t}async function A(e,t){const{url:r,layerId:a,title:n,fullExtent:s,isTable:i}=e,l=(0,o.qg)(r);t.url=("FeatureServer"===l?.serverType?r:`${r}/${a}`)??null,t.title||=n,t.extent=null,i||null==s||(t.extent=await(0,u.sQ)(s)),(0,u.OM)(t,u.mm.METADATA),(0,u.OM)(t,u.mm.MULTI_LAYER),(0,u.LG)(t,u.mm.SINGLE_LAYER),i&&(0,u.LG)(t,u.mm.TABLE)}async function T(e,t){return(0,n.UN)({layer:e,itemType:c,validateLayer:f,createItemData:(e,t)=>h(t,[e]),errorNamePrefix:d},t)}async function x(e,t,r){return(0,n.Uh)({layer:e,itemType:c,validateLayer:f,createItemData:(e,t)=>Promise.resolve(w(e)),errorNamePrefix:p,newItem:t,setItemProperties:A},r)}},97924:(e,t,r)=>{r.d(t,{UN:()=>I,Uh:()=>b});var a=r(50076),n=r(37888),o=r(65308),s=r(70652),i=r(79942),l=r(72945),u=r(65526),c=r(24907);async function y(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function p(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if((0,u.X)(t),function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:s}=e,i=[r];if(n&&i.push(n),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:s})}}(e),o){const e=o(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function f(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));p({...e,item:n})}function m(e){const{newItem:t,itemType:r}=e;let a=s.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.A.getDefault(),p({...e,item:a}),a}function w(e){return(0,i.m)(e,"portal-item")}async function h(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,c.c)(t,{errorName:"layer-write:unsupported"},r),a}function v(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await y(e),f(e);const u=r.portalItem,c=o?o(u):w(u),d=await h(r,c,{...t,supplementalUnsupportedErrors:l}),p=await a({layer:r,layerJSON:d},u);return await(s?.(r,u)),v(u),await u.update({data:p}),(0,n.v)(c),await(i?.(u,c)),u}async function b(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await y(e);const u=m(e),c=o?o(u):w(u),d=await h(r,c,{...t,supplementalUnsupportedErrors:l}),p=await a({layer:r,layerJSON:d},u);return await s(r,u),v(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(u,p,t),r.portalItem=u,(0,n.v)(c),await(i?.(u,c)),u}}}]);
//# sourceMappingURL=3146.582e1849.chunk.js.map