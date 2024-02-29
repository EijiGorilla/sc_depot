"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[8383],{30674:(e,n,t)=>{t.d(n,{A:()=>m});var l=t(35143),i=t(45802),a=t(42553),o=t(46053),r=(t(40565),t(18690),t(81806),t(6409)),s=t(85842);const u=new i.J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new i.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let d=class extends a.oY{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,r.e)({classBreaksDef:"class-breaks-definition"})],d.prototype,"type",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"breakCount",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"classificationField",void 0),(0,l._)([(0,o.MZ)({type:String,json:{read:u.read,write:u.write}})],d.prototype,"classificationMethod",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"normalizationField",void 0),(0,l._)([(0,o.MZ)({json:{read:c.read,write:c.write}})],d.prototype,"normalizationType",void 0),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],d.prototype,"standardDeviationInterval",null),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],d.prototype,"definedInterval",null),d=(0,l._)([(0,s.$)("esri.rest.support.ClassBreaksDefinition")],d);const m=d},15498:(e,n,t)=>{t.d(n,{t:()=>a});const l=t(76460).A.getLogger("esri.rest.support.generateRendererUtils");function i(e,n){return Number(e.toFixed(n))}function a(e){const{normalizationTotal:n}=e;return{classBreaks:o(e),normalizationTotal:n}}function o(e){var n;const t=e.definition,{classificationMethod:l,normalizationType:a,definedInterval:o}=t,c=null!==(n=t.breakCount)&&void 0!==n?n:1,d=[];let m=e.values;if(0===m.length)return[];m=m.sort(((e,n)=>e-n));const f=m[0],p=m[m.length-1];if("equal-interval"===l)if(m.length>=c){const e=(p-f)/c;let n=f;for(let t=1;t<c;t++){const l=i(f+t*e,6);d.push({minValue:n,maxValue:l,label:r(n,l,a)}),n=l}d.push({minValue:n,maxValue:p,label:r(n,p,a)})}else m.forEach((e=>{d.push({minValue:e,maxValue:e,label:r(e,e,a)})}));else if("natural-breaks"===l){const n=s(m),t=e.valueFrequency||n.valueFrequency,l=u(n.uniqueValues,t,c);let o=f;for(let e=1;e<c;e++)if(n.uniqueValues.length>e){const t=i(n.uniqueValues[l[e]],6);d.push({minValue:o,maxValue:t,label:r(o,t,a)}),o=t}d.push({minValue:o,maxValue:p,label:r(o,p,a)})}else if("quantile"===l)if(m.length>=c&&f!==p){let e=f,n=Math.ceil(m.length/c),t=0;for(let l=1;l<c;l++){let i=n+t-1;i>m.length&&(i=m.length-1),i<0&&(i=0),d.push({minValue:e,maxValue:m[i],label:r(e,m[i],a)}),e=m[i],t+=n,n=Math.ceil((m.length-t)/(c-l))}d.push({minValue:e,maxValue:p,label:r(e,p,a)})}else{let e=-1;for(let n=0;n<m.length;n++){const t=m[n];t!==e&&(e=t,d.push({minValue:e,maxValue:t,label:r(e,t,a)}),e=t)}}else if("standard-deviation"===l){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(m),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const i=e[l];t+=(i-n)*(i-n)}return t/=e.length,Math.sqrt(t)}(m,e);if(0===n)d.push({minValue:m[0],maxValue:m[0],label:r(m[0],m[0],a)});else{const t=function(e,n,t,l,i){let a=Math.max(l-e,n-l)/i/t;return a=a>=1?1:a>=.5?.5:.25,a}(f,p,c,e,n)*n;let l=0,o=f;for(let n=c;n>=1;n--){const s=i(e-(n-.5)*t,6);d.push({minValue:o,maxValue:s,label:r(o,s,a)}),o=s,l++}let s=i(e+.5*t,6);d.push({minValue:o,maxValue:s,label:r(o,s,a)}),o=s,l++;for(let n=1;n<=c;n++)s=l===2*c?p:i(e+(n+.5)*t,6),d.push({minValue:o,maxValue:s,label:r(o,s,a)}),o=s,l++}}else if("defined-interval"===l){if(!o)return d;const e=m[0],n=m[m.length-1],t=Math.ceil((n-e)/o);let l=e;for(let s=1;s<t;s++){const n=i(e+s*o,6);d.push({minValue:l,maxValue:n,label:r(l,n,a)}),l=n}d.push({minValue:l,maxValue:n,label:r(l,n,a)})}return d}function r(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function s(e){const n=[],t=[];let l=Number.MIN_VALUE,i=1,a=-1;for(let o=0;o<e.length;o++){const r=e[o];r===l?(i++,t[a]=i):null!==r&&(n.push(r),l=r,i=1,t.push(i),a++)}return{uniqueValues:n,valueFrequency:t}}function u(e,n,t){const l=e.length,i=[];t>l&&(t=l);for(let o=0;o<t;o++)i.push(Math.round(o*l/t-1));i.push(l-1);let a=c(i,e,n,t);return function(e,n,t,l,i,a){let o=0,r=0,s=0,u=0,c=!0;for(let m=0;m<2&&c;m++){0===m&&(c=!1);for(let m=0;m<a-1;m++)for(;t[m+1]+1!==t[m+2];){t[m+1]=t[m+1]+1;const a=d(m,t,l,i);s=a.sbMean,o=a.sbSdcm;const f=d(m+1,t,l,i);if(u=f.sbMean,r=f.sbSdcm,!(o+r<n[m]+n[m+1])){t[m+1]=t[m+1]-1;break}n[m]=o,n[m+1]=r,e[m]=s,e[m+1]=u,c=!0}for(let m=a-1;m>0;m--)for(;t[m]!==t[m-1]+1;){t[m]=t[m]-1;const a=d(m-1,t,l,i);s=a.sbMean,o=a.sbSdcm;const f=d(m,t,l,i);if(u=f.sbMean,r=f.sbSdcm,!(o+r<n[m-1]+n[m])){t[m]=t[m]+1;break}n[m-1]=o,n[m]=r,e[m-1]=s,e[m]=u,c=!0}}return c}(a.mean,a.sdcm,i,e,n,t)&&(a=c(i,e,n,t)),i}function c(e,n,t,l){let i=[],a=[],o=[],r=0;const s=[],u=[];for(let p=0;p<l;p++){const l=d(p,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),r+=u[p]}let c,m=r,f=!0;for(;f||r<m;){f=!1,i=[];for(let n=0;n<l;n++)i.push(e[n]);for(let t=0;t<l;t++)for(let i=e[t]+1;i<=e[t+1];i++)if(c=n[i],t>0&&i!==e[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))e[t]=i;else if(t<l-1&&e[t]!==i-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){e[t+1]=i-1;break}m=r,r=0,a=[],o=[];for(let i=0;i<l;i++){a.push(s[i]),o.push(u[i]);const l=d(i,e,n,t);s[i]=l.sbMean,u[i]=l.sbSdcm,r+=u[i]}}if(r>m){for(let n=0;n<l;n++)e[n]=i[n],s[n]=a[n],u[n]=o[n];r=m}return{mean:s,sdcm:u}}function d(e,n,t,i){let a=0,o=0;for(let l=n[e]+1;l<=n[e+1];l++){const e=i[l];a+=t[l]*e,o+=e}o<=0&&l.warn("Exception in Natural Breaks calculation");const r=a/o;let s=0;for(let l=n[e]+1;l<=n[e+1];l++)s+=i[l]*(t[l]-r)**2;return{sbMean:r,sbSdcm:s}}},28383:(e,n,t)=>{t.d(n,{$r:()=>h,Jc:()=>y,gV:()=>b,rb:()=>g});t(35238),t(50076);var l=t(76931),i=t(18288),a=t(13312),o=t(76279),r=t(80963),s=t(53430),u=t(4414),c=t(42633),d=t(72003),m=t(98976),f=t(13904);let p=null;const v=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function h(e,n,t,l){const i=(0,r.d9)(t)?(0,r.Vp)(t):null,a=i?Math.round((i.valid[1]-i.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new f.A(e.geometry);return(0,o.Gy)(n,t,t,t.hasZ,t.hasM),e.geometry=i?function(e,n,t){return e.x<0?e.x+=n:e.x>t&&(e.x-=n),e}(t,null!==a&&void 0!==a?a:0,l[0]):t,e}))}function b(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;const r=new Float64Array(a*o);n=Math.round((0,l.Lz)(n));let s=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=0,m=0,f=0,p=0;const v=(0,u.YW)(i,t);for(const{geometry:l,attributes:b}of e){const{x:e,y:t}=l,i=Math.max(0,e-n),h=Math.max(0,t-n),g=Math.min(o,t+n),y=Math.min(a,e+n),V=+v(b);for(let l=h;l<g;l++)for(let o=i;o<y;o++){const i=l*a+o,v=(0,u.hv)(o-e,l-t,n),h=r[i];d=r[i]+=v*V;const b=d-h;m+=b,f+=b*b,d<s&&(s=d),d>c&&(c=d),p++}}if(!p)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const h=(c-s)/2;return{mean:m/p,stdDev:Math.sqrt((f-m*m/p)/p),min:s,max:c,mid:h,count:p}}function g(e){const n=v.exec(e);if(!n)return null;const{hh:t,mm:l,ss:a,ms:o}=n.groups;return Number(t)*i.vf.hours+Number(l)*i.vf.minutes+Number(a)*i.vf.seconds+Number(o||0)}async function y(e,n){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!n)return[];const{field:l,field2:i,field3:o,fieldDelimiter:r,fieldInfos:u,timeZone:f}=e,v=l&&(null===u||void 0===u?void 0:u.find((e=>e.name.toLowerCase()===l.toLowerCase()))),h=!!v&&(0,s.OH)(v),b=!!v&&(0,c.fs)(v),y=e.valueExpression,V=e.normalizationType,x=e.normalizationField,T=e.normalizationTotal,M=[],F=e.viewInfoParams;let I=null,z=null;if(y){if(!p){const{arcadeUtils:e}=await(0,m.lw)();p=e}p.hasGeometryOperations(y)&&await p.enableGeometryOperations(),I=p.createFunction(y),z=F?p.getViewInfo({viewingMode:F.viewingMode,scale:F.scale,spatialReference:new a.A(F.spatialReference)}):null}const w=e.fieldInfos,N=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!w?null:{fields:w};return n.forEach((e=>{const n=e.attributes;let a;if(y){const n=N?{...e,layer:N}:e,t=p.createExecContext(n,z,f);a=p.executeFunction(I,t)}else n&&(a=n[l],i?(a="".concat((0,d.gJ)(a)).concat(r).concat((0,d.gJ)(n[i])),o&&(a="".concat(a).concat(r).concat((0,d.gJ)(n[o])))):"string"==typeof a&&t&&(b?a=a?new Date(a).getTime():null:h&&(a=a?g(a):null)));if(V&&"number"==typeof a&&isFinite(a)){const e=n&&parseFloat(n[x]);a=(0,d.zS)(a,V,e,T)}M.push(a)})),M}},42633:(e,n,t)=>{t.d(n,{fs:()=>o,i0:()=>r});var l=t(65256),i=t(53430),a=(t(98976),t(86300),t(67478));new Set(["integer","small-integer"]);function o(e){return(0,i.vE)(e)||(0,i.zD)(e)||(0,i.Ah)(e)}function r(e,n){const{format:t,timeZoneOptions:i,fieldType:o}=null!==n&&void 0!==n?n:{};let r,s;if(i&&({timeZone:r,timeZoneName:s}=(0,a.hv)(i.layerTimeZone,i.datesInUnknownTimezone,i.viewTimeZone,(0,l.J2)(t||"short-date-short-time"),o)),"string"==typeof e&&isNaN(Date.parse("time-only"===o?"1970-01-01T".concat(e,"Z"):e)))return e;switch(o){case"date-only":{const n=(0,l.J2)(t||"short-date");return"string"==typeof e?(0,l.iS)(e,{...n}):(0,l.Yq)(e,{...n,timeZone:a.n$})}case"time-only":{const n=(0,l.J2)(t||"short-time");return"string"==typeof e?(0,l.F8)(e,n):(0,l.Yq)(e,{...n,timeZone:a.n$})}case"timestamp-offset":{if(!r&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const n=t||i?(0,l.J2)(t||"short-date-short-time"):void 0,a=n?{...n,timeZone:r,timeZoneName:s}:void 0;return"string"==typeof e?(0,l.Ey)(e,a):(0,l.Yq)(e,a)}default:{const n=t||i?(0,l.J2)(t||"short-date-short-time"):void 0;return(0,l.Yq)("string"==typeof e?new Date(e):e,n?{...n,timeZone:r,timeZoneName:s}:void 0)}}}},72003:(e,n,t)=>{t.d(n,{$y:()=>J,FM:()=>y,G_:()=>b,Rw:()=>_,Vb:()=>v,b3:()=>C,gJ:()=>p,jM:()=>O,lv:()=>Z,oZ:()=>k,qg:()=>g,z9:()=>h,zS:()=>E});var l=t(30674),i=t(15498);const a="<Null>",o="equal-interval",r=1,s=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,d=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),m=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),f=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function p(e){return null==e||"string"==typeof e&&!e?a:e}function v(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function h(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).sort(),l=t.length,i={count:l,min:t[0],max:t[l-1]};return e.supportsNullCount&&(i.nullcount=n.length-l),e.percentileParams&&(i.median=g(n,e.percentileParams)),i}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,u=null,c=0;const d=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=d&&p<=m&&(o=null===o?p:o+p,i=Math.min(i,p),a=Math.max(a,p),c++):"string"==typeof p&&c++;if(c&&null!=o){r=o/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=d&&t<=m&&(e+=(t-r)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else i=null,a=null;const f={avg:r,count:c,max:a,min:i,stddev:s,sum:o,variance:u};return l&&(f.nullcount=n.length-c),e.percentileParams&&(f.median=g(n,e.percentileParams)),f}function g(e,n){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=n,o=y(t,"desc"===i);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const r=(e.length-1)*l,s=Math.floor(r),u=s+1,c=r%1,d=e[s],m=e[u];return u>=e.length||a||"string"==typeof d||"string"==typeof m?d:d*(1-c)+m*c}function y(e,n){if(e){if(d.has(e))return D(n);if(m.has(e))return z(n,!1);if("esriFieldTypeTimestampOffset"===e)return function(e){return e?M:T}(n);const t=z(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(S(e),S(n))}const t=n?1:-1,l=D(n),i=z(n,!0);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):t}const V=(e,n)=>null==e?null==n?0:1:null==n?-1:null,x=(e,n)=>null==e?null==n?0:-1:null==n?1:null;const T=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e===n?0:new Date(e).getTime()-new Date(n).getTime()},M=(e,n)=>{var t;return null!==(t=V(e,n))&&void 0!==t?t:e===n?0:new Date(n).getTime()-new Date(e).getTime()};const F=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e===n?0:e<n?-1:1},I=(e,n)=>{var t;return null!==(t=V(e,n))&&void 0!==t?t:e===n?0:e<n?1:-1};function z(e,n){if(!n)return e?I:F;const t=function(e){return e?V:x}(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const w=(e,n)=>{var t;return null!==(t=V(e,n))&&void 0!==t?t:n-e},N=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e-n};function D(e){return e?w:N}function S(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function k(e,n){let t;for(t in e)f.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{var t;null!=e[n]&&(e[n]=Math.ceil(null!==(t=e[n])&&void 0!==t?t:0))})),e):e}function C(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function q(e){return"coded-value"!==(null===e||void 0===e?void 0:e.type)?[]:e.codedValues.map((e=>e.code))}function Z(e,n,t,l){const i=e.count,a=[];if(t&&n){const e=[],t=q(n[0]);for(const i of t)if(n[1]){const t=q(n[1]);for(const a of t)if(n[2]){const t=q(n[2]);for(const n of t)e.push("".concat(p(i)).concat(l).concat(p(a)).concat(l).concat(p(n)))}else e.push("".concat(p(i)).concat(l).concat(p(a)))}else e.push(i);for(const n of e)i.hasOwnProperty(n)||(i[n]={data:n,count:0})}for(const o in i){const e=i[o];a.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:a}}function E(e,n,t,l){let i=null;switch(n){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=e/t);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function _(e,n){const t=B({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=function(e,n,t){const l=null!==n&&void 0!==n?n:-1/0,i=null!==t&&void 0!==t?t:1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=i))}(e,n.minValue,n.maxValue),(0,i.t)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function B(e){const{breakCount:n,field:t,normalizationField:i,normalizationType:a}=e,s=e.classificationMethod||o,u="standard-deviation"===s?e.standardDeviationInterval||r:void 0;return new l.A({breakCount:n,classificationField:t,classificationMethod:s,normalizationField:"field"===a?i:void 0,normalizationType:a,standardDeviationInterval:u})}function O(e,n){var t,l;let i=e.classBreaks;const a=i.length,o=null===(t=i[0])||void 0===t?void 0:t.minValue,r=null===(l=i[a-1])||void 0===l?void 0:l.maxValue,s="standard-deviation"===n,u=c;return i=i.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(s&&n){var l;const e=n.match(u),i=null!==(l=null===e||void 0===e?void 0:e.map((e=>+e.trim())))&&void 0!==l?l:[];2===i.length?(t.minStdDev=i[0],t.maxStdDev=i[1],i[0]<0&&i[1]>0&&(t.hasAvg=!0)):1===i.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=i[0]):n.includes(">")&&(t.minStdDev=i[0],t.maxStdDev=null))}return t})),{minValue:o,maxValue:r,classBreakInfos:i,normalizationTotal:e.normalizationTotal}}function J(e,n){var t,l;const i=A(e,n);if(null==i.min&&null==i.max)return{bins:[],minValue:i.min,maxValue:i.max,normalizationTotal:n.normalizationTotal};const a=i.intervals,o=null!==(t=i.min)&&void 0!==t?t:0,r=null!==(l=i.max)&&void 0!==l?l:0,s=a.map(((e,n)=>({minValue:a[n][0],maxValue:a[n][1],count:0})));for(const u of e)if(null!=u&&u>=o&&u<=r){const e=G(a,u);e>-1&&s[e].count++}return{bins:s,minValue:o,maxValue:r,normalizationTotal:n.normalizationTotal}}function A(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:i,normalizationType:a,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:c}=n,d=n.numBins||u;let m=null,f=null,p=null;if(l&&"equal-interval"!==l||a){const{classBreaks:n}=_(e,{field:t,normalizationType:a,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:i,minValue:s,maxValue:c,numClasses:d});m=n[0].minValue,f=n[n.length-1].maxValue,p=n.map((e=>[e.minValue,e.maxValue]))}else{var h,g;if(null!=s&&null!=c)m=s,f=c;else{var y,V;const n=b({values:e,minValue:s,maxValue:c,useSampleStdDev:!a,supportsNullCount:v({normalizationType:a,normalizationField:o,minValue:s,maxValue:c})});m=null!==(y=n.min)&&void 0!==y?y:null,f=null!==(V=n.max)&&void 0!==V?V:null}p=function(e,n,t){const l=(n-e)/t,i=[];let a,o=e;for(let r=1;r<=t;r++)a=o+l,a=Number(a.toFixed(16)),i.push([o,r===t?n:a]),o=a;return i}(null!==(h=m)&&void 0!==h?h:0,null!==(g=f)&&void 0!==g?g:0,d)}return{min:m,max:f,intervals:p}}function G(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}}}]);
//# sourceMappingURL=8383.aa1d8b14.chunk.js.map