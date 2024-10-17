"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[7440],{37440:(n,t,e)=>{e.d(t,{convertMeshVertexSpace:()=>s});var r=e(50076),o=e(53084),l=e(50346),i=e(56623),a=e(53848);async function s(n,t,e){await Promise.resolve(),(0,l.Te)(e);const s=(0,a.UR)(n,t);if(!s)throw new r.A("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const u=n.cloneAndModifyVertexAttributes(new i.H({...s,uv:(0,o.o8)(n.vertexAttributes.uv),color:(0,o.o8)(n.vertexAttributes.color)}),t);return u.transform=null,u}},53848:(n,t,e)=>{e.d(t,{UR:()=>R,p5:()=>h,xK:()=>d});var r=e(76460),o=e(15941),l=e(31633),i=e(86300),a=e(44680),s=e(34761),u=e(13191),c=e(20664),f=e(9392),g=e(98510),p=e(5809),v=e(64232),A=e(99773),m=e(45136),w=e(26375);const x=()=>r.A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function h(n,t,e){let{vertexSpace:r,spatialReference:o}=e;if("georeferenced"===r.type){const e=n;if(!(0,v.g)(t,e,o))return!1;const{origin:l}=r;return(0,c.f)(n,e,l),!0}const l=(0,g.lO)(o),i=n;if(!(0,v.g)(t,i,l))return!1;const{origin:a}=r,u=F;if(!(0,p.l)(o,a,u,l))return!1;const f=(0,s.B8)(F,u);return null!=f&&((0,c.h)(n,i,f),!0)}function R(n,t,e){const{vertexSpace:r,transform:l,vertexAttributes:a}=n,f=O(n.spatialReference,e,T.SOURCE|T.TARGET);if((0,A.yJ)(r,t)&&(!l||(0,s.t2)(l.localMatrix,u.zK))&&(0,o.Io)(f,1)){const{position:n,normal:t,tangent:r}=a,o=e?.allowBufferReuse;return{position:o?n:n.slice(),normal:o?t:t?.slice(),tangent:o?r:r?.slice()}}switch(n.vertexSpace.type){case"local":return"local"===t.type?function(n,t,e,r){let{vertexAttributes:o,spatialReference:l,transform:i}=n,{origin:a}=t;const u=(0,g.lO)(l);if(!(0,p.l)(l,a,N,u))return(0,w.CN)(x(),l,u),null;if(i&&(0,s.lw)(N,N,i.localMatrix),!(0,p.l)(l,e,S,u))return(0,w.CN)(x(),u,l),null;(0,s.B8)(S,S);const c=(0,s.lw)(N,S,N);return C(c,l,r,T.SOURCE|T.TARGET),y(o,c)}(n,n.vertexSpace,t.origin,e):function(n,t,e,r){let{spatialReference:o,vertexAttributes:l,transform:i}=n,{origin:a}=t;const u=(0,g.lO)(o);if(!(0,p.l)(o,a,N,u))return(0,w.CN)(x(),o,u),null;i&&(0,s.lw)(N,N,i.localMatrix),C(N,o,r,T.SOURCE);const f=new Float64Array(l.position.length),v=function(n,t,e,r){(0,m.a)(r,n,t);const o=new Float64Array(n.length);return(0,w.$5)(r,o,e)?o:((0,w.CN)(x(),(0,g.lO)(e),e),null)}(l.position,N,o,f);if(!v)return null;const A=function(n,t,e,r,o){if(null==e)return null;const l=new Float32Array(e.length);return(0,w.qs)(e,l,r),(0,w.si)(l,n,t,o,l)?l:((0,w.CN)(x(),(0,g.lO)(o),o),null)}(v,f,l.normal,N,o);if(l.normal&&!A)return null;const h=function(n,t,e,r,o){if(null==e)return null;const l=new Float32Array(e.length);return(0,w.KM)(e,l,r),(0,w.Mv)(l,n,t,o,l)?l:((0,w.CN)(x(),(0,g.lO)(o),o),null)}(v,f,l.tangent,N,o);if(l.tangent&&!h)return null;if(e){const n=(0,c.k)(E,e);(0,m.b)(v,v,n)}return{position:v,normal:A,tangent:h}}(n,n.vertexSpace,t.origin,e);case"georeferenced":return"local"===t.type?function(n,t,e,r){let{vertexAttributes:o,spatialReference:l,transform:a}=n,{origin:u}=t;const c=(0,g.lO)(l);if(!(0,p.l)(l,e,N,c))return(0,w.CN)(x(),l,c),null;const f=1/O(l,r,T.TARGET);(0,s.hs)(N,N,[f,f,f]);const v=(0,s.B8)(S,N),{position:A,normal:h,tangent:R}=function(n,t,e){if(!t)return n;if(!e){const{position:e,normal:r,tangent:o}=n;return{position:(0,m.b)(new Float64Array(e.length),e,t),tangent:o,normal:r}}const r=y(n,e.localMatrix);return(0,m.b)(r.position,r.position,t),r}(o,u,a),C=new Float64Array(A.length),d=function(n,t,e,r){const o=(0,w.gr)(n,t,r);if(!o)return(0,w.CN)(x(),t,(0,g.lO)(t)),null;const l=new Float64Array(o.length);return(0,m.a)(l,o,e),l}(A,l,v,C);if(!d)return null;const E=(0,i.Ge)(b,v),F=function(n,t,e,r,o,l){if(null==n)return null;const i=l??new Float32Array(n.length);return(0,w.X4)(n,t,e,r,i)?((0,m.t)(i,i,o),i):((0,w.CN)(x(),r,(0,g.lO)(r)),null)}(h,A,C,l,E,h!==o.normal?h:void 0);if(!F&&h)return null;const U=function(n,t,e,r,o,l){if(null==n)return null;const i=l??new Float32Array(n.length);return(0,w.xA)(n,t,e,r,i)?((0,m.t)(i,i,o,4),i):((0,w.CN)(x(),r,(0,g.lO)(r)),null)}(R,A,C,l,E,R!==o.tangent?R:void 0);return!U&&R?null:{position:d,normal:F,tangent:U}}(n,n.vertexSpace,t.origin,e):function(n,t,e,r){let{vertexAttributes:o,transform:l,spatialReference:i}=n,{origin:a}=t;const{position:s,normal:u,tangent:f}=l?y(o,l.localMatrix):o,g=new Float64Array(s.length);let p=s;if(a&&(p=(0,m.b)(g,p,a)),e){const n=(0,c.k)(E,e);p=(0,m.b)(g,p,n)}O(i,r,T.NONE);const v=r?.allowBufferReuse;return{position:p!==o.position||v?p:p.slice(),normal:u!==o.normal||v?u:u?.slice(),tangent:f!==o.tangent||v?f:f?.slice()}}(n,n.vertexSpace,t.origin,e)}}function y(n,t){const e=new Float64Array(n.position.length);(0,m.a)(e,n.position,t);const r=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return r&&n.normal&&(0,w.qs)(n.normal,r,t),o&&n.tangent&&(0,w.KM)(n.tangent,o,t),{position:e,normal:r,tangent:o}}function C(n,t,e,r){const o=O(t,e,r);1!==o&&(0,s.hs)(n,n,[o,o,o])}function O(n,t,e){const r=!!(e&T.SOURCE),o=!!(e&T.TARGET),l=t?.sourceUnit,i=t?.targetUnit;if(!l&&!i)return 1;let a=d(l,n);!r&&l&&1!==a&&(x().warn("source unit conversion not supported"),a=1);let s=1/d(i,n);return!o&&i&&1!==s&&(x().warn("target unit conversion not supported"),s=1),a*s}function d(n,t){if(null==n)return 1;const e=(0,l.KX)(t);return 1/(0,l.oU)(e,"meters",n)}const N=(0,u.vt)(),S=(0,u.vt)(),b=(0,a.vt)(),E=(0,f.vt)(),F=(0,u.vt)();var T,U;(U=T||(T={}))[U.NONE=0]="NONE",U[U.SOURCE=1]="SOURCE",U[U.TARGET=2]="TARGET"}}]);
//# sourceMappingURL=7440.8acff662.chunk.js.map