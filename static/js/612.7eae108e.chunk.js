"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[612],{84735:(t,e,i)=>{i.d(e,{z:()=>o});var s=i(53084),n=i(16108),h=i(19902),r=i(1484);class o{static fromOptimized(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(new a).initialize(t,e,i,s,1)}static fromJSON(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[s,n]=u(t);return(new _).initialize(s,n,e,i,1)}static fromOptimizedCIM(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(new c).initialize(t,e,i,s,1)}static fromJSONCIM(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[s,n]=u(t);return(new p).initialize(s,n,e,i,1)}static fromFeatureSetReader(t){const e=t.readGeometryForDisplay(),i=t.geometryType;return e&&i?this.fromOptimized(e,i):null}static fromFeatureSetReaderCIM(t){const e=t.readGeometryForDisplay(),i=t.geometryType;return e&&i?this.fromOptimizedCIM(e,i):null}static createEmptyOptimized(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(new a).initialize(new r.A,t,e,i,1)}static createEmptyJSON(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(new _).initialize([],t,e,i,1)}static createEmptyOptimizedCIM(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(new c).initialize(new r.A,t,e,i,1)}static createEmptyJSONCIM(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(new p).initialize([],t,e,i,1)}asJSON(){const t=(0,n.x)(this);return"esriGeometryEnvelope"===this.geometryType?{xmin:t[0][0][0],ymin:t[0][0][1],xmax:t[0][2][0],ymax:t[0][2][1]}:"esriGeometryMultipoint"===this.geometryType?{points:t.flat()}:"esriGeometryPoint"===this.geometryType?{x:t[0][0][0],y:t[0][0][1]}:"esriGeometryPolygon"===this.geometryType?{rings:t}:{paths:t}}getCurrentRingArea(){if(!this||this.pathSize<3)return 0;let t,e,i=0;if(this.seekPathStart(),!this.nextPoint())return 0;t=this.x,e=this.y;const s=t,n=e;for(;this.nextPoint();)i+=(t-this.x)*(e+this.y),t=this.x,e=this.y;return i+=(t-s)*(e+n),-.5*i}invertY(){this.yFactor*=-1}}class a extends o{constructor(){super(...arguments),this._end=-1}initialize(t,e,i,s,n){return this.hasZ=i,this.hasM=s,this.geometryType=e,this._stride=2+Number(i)+Number(s),this._geometry=t,this._pathIndex=-1,this._pathOffset=0,this._pointOffset=-this._stride,this._end=-1,this.yFactor=n,this}reset(){this.initialize(this._geometry,this.geometryType,this.hasZ,this.hasM,this.yFactor)}seekPath(t){if(t>=0&&t<this.totalSize){if(this._pathIndex<t)for(;this._pathIndex<t&&this.nextPath(););else if(this._pathIndex>t)for(;this._pathIndex>t&&this.prevPath(););return!0}return!1}seekPathStart(){this._pointOffset=this._pathOffset-this._stride}seekPathEnd(){this._pointOffset=this._end}seekInPath(t){const e=this._pathOffset+t*this._stride;return e>=0&&e<this._end&&(this._pointOffset=e,!0)}nextPoint(){return(this._pointOffset+=this._stride)<this._end}prevPoint(){return(this._pointOffset-=this._stride)>=this._pathOffset}nextPath(){if(this._pathIndex>=0){const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex];this._pathOffset+=this._stride*t}this._pointOffset=this._pathOffset-this._stride;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex+1];return this._end=this._pointOffset+this._stride+this._stride*t,++this._pathIndex<this.totalSize}prevPath(){this._end=this._pathOffset;const t=this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex-1];return this._pathOffset-=this._stride*t,this._pointOffset=this._pathOffset-this._stride,--this._pathIndex>=0}pathLength(){const t=this._end,e=this._stride,i=this._geometry.coords;let s=0;for(let n=this._pathOffset+e;n<t;n+=e){const t=i[n-e],h=i[n-e+1],r=i[n]-t,o=i[n+1]-h;s+=Math.sqrt(r*r+o*o)}return s}startPath(){this._geometry.lengths.push(0)}pushPath(t){this.startPath(),this.pushPoints(t)}pushPoint(t){for(let e=0;e<this._stride;++e)this._geometry.coords.push(t[e]);this._geometry.lengths[this.totalSize-1]++}pushXY(t,e){this._geometry.coords.push(t,e),this._geometry.lengths[this.totalSize-1]++}pushPoints(t){for(const e of t)for(let t=0;t<this._stride;++t)this._geometry.coords.push(e[t]);this._geometry.lengths[this.totalSize-1]+=t.length}pushCursor(t){const e=t.asOptimized();this._geometry.coords.push(...e.coords),this._geometry.lengths.push(...e.lengths)}asOptimized(){const t=this._geometry.clone();if(1!==this.yFactor)for(let e=1;e<t.coords.length;e+=this._stride)t.coords[e]*=this.yFactor;return"esriGeometryPoint"===this.geometryType&&(t.lengths.length=0),t}isClosed(){const t=this._geometry.coords,e=this._pathOffset,i=this._end-this._stride;for(let s=0;s<this._stride;s++)if(t[e+s]!==t[i+s])return!1;return!0}clone(){return(new a).initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._geometry.coords.length/this._stride}get pathSize(){const{lengths:t}=this._geometry;return this._pathIndex<0||this._pathIndex>t.length-1?0:t[this._pathIndex]}get totalSize(){return this._geometry.lengths.length}get x(){return this._geometry.coords[this._pointOffset]}set x(t){this._geometry.coords[this._pointOffset]=t}get y(){return this.yFactor*this._geometry.coords[this._pointOffset+1]}set y(t){this._geometry.coords[this._pointOffset+1]=this.yFactor*t}get z(){return this._geometry.coords[this._pointOffset+2]}set z(t){this._geometry.coords[this._pointOffset+2]=t}get m(){const t=this.hasZ?3:2;return this._geometry.coords[this._pointOffset+t]}set m(t){this._geometry.coords[this._pointOffset+3]=t}get pathIndex(){return this._pathIndex}get _coordIndex(){return this._pointOffset/this._stride}}function l(t){const e=[t.x,t.y];return t.z&&e.push(t.z),t.m&&e.push(t.m),e}function u(t){return(0,h.Bi)(t)?[t.rings,"esriGeometryPolygon"]:(0,h.Rg)(t)?[t.paths,"esriGeometryPolyline"]:(0,h.U9)(t)?[[t.points],"esriGeometryMultipoint"]:(0,h.ZC)(t)?[[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]],"esriGeometryEnvelope"]:(0,h.fT)(t)?[[[l(t)]],"esriGeometryPoint"]:[[],"esriGeometryPolyline"]}class _ extends o{initialize(t,e,i,s,n){return this._paths=t,this.geometryType=e,this.hasZ=i,this.hasM=s,this._pathIndex=this._pointIndex=-1,this.yFactor=n,this._mIndex=this.hasZ?3:2,this}reset(){this._pathIndex=this._pointIndex=-1}seekPath(t){return t>=0&&t<this.totalSize&&(this._pathIndex=t,this._pointIndex=-1,this._currentPath=this._paths[t],!0)}seekPathStart(){this._pointIndex=-1}seekPathEnd(){this._pointIndex=this._currentPath.length}seekInPath(t){return t>=0&&t<this._currentPath.length&&(this._pointIndex=t,this._currentPoint=this._currentPath[this._pointIndex],!0)}nextPoint(){return this._currentPoint=this._currentPath[++this._pointIndex],this._pointIndex<this._currentPath.length}prevPoint(){return this._currentPoint=this._currentPath[--this._pointIndex],this._pointIndex>=0}nextPath(){return this._pointIndex=-1,this._currentPath=this._paths[++this._pathIndex],this._pathIndex<this.totalSize}prevPath(){return this._pointIndex=-1,this._currentPath=this._paths[--this._pathIndex],this._pathIndex>=0}pathLength(){const t=this._currentPath.length,e=this._currentPath;let i=0;for(let s=1;s<t;s++){const t=e[s-1],n=e[s],h=t[0],r=t[1],o=n[0]-h,a=n[1]-r;i+=Math.sqrt(o*o+a*a)}return i}startPath(){this._paths.push([])}pushPath(t){this._paths.push(t)}pushPoint(t){this._paths[this.totalSize-1].push(t)}pushXY(t,e){this._paths[this.totalSize-1].push([t,e])}pushPoints(t){this._paths[this.totalSize-1].push(...t)}pushCursor(t){const e=(0,n.x)(t);for(const i of e)this.pushPath(i)}asOptimized(){const t=new r.A;if("esriGeometryPoint"===this.geometryType)t.coords.push(...this._paths[0][0]),t.lengths.length=0;else for(const e of this._paths){for(const i of e)t.coords.push(i[0]),t.coords.push(i[1]*this.yFactor),this.hasZ&&t.coords.push(i[2]),this.hasM&&t.coords.push(i[this._mIndex]);t.lengths.push(e.length)}return t}isClosed(){const t=this._currentPath[0],e=this._currentPath[this._currentPath.length-1];for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}clone(){return(new _).initialize((0,s.o8)(this._paths),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._paths.map((t=>t.length)).reduce(((t,e)=>t+e))}get pathSize(){return this._pathIndex<0||this._pathIndex>this.totalSize-1?-1:this._paths[this._pathIndex].length}get totalSize(){return this._paths.length}get x(){return this._currentPoint[0]}set x(t){this._currentPoint[0]=t}get y(){return this.yFactor*this._currentPoint[1]}set y(t){this._currentPoint[1]=this.yFactor*t}get z(){return this._currentPoint[2]}set z(t){this._currentPoint[2]=t}get m(){return this._currentPoint[this._mIndex]}set m(t){this._currentPoint[this._mIndex]=t}get pathIndex(){return this._pathIndex}}class c extends a{initialize(t,e,i,s,n){return super.initialize(t,e,i,s,n),this._controlPoints||(this._controlPoints=this._controlPoints=new Array(this.totalSize).fill(void 0).map((t=>new Set))),this}startPath(){super.startPath(),this._controlPoints.push(new Set)}clone(){const t=(new c).initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor);return t._controlPoints=this._controlPoints,t}setControlPoint(){this._controlPoints[this.pathIndex].add(this._coordIndex)}getControlPoint(){return this._controlPoints[this.pathIndex].has(this._coordIndex)}setControlPointAt(t){this._controlPoints[this.pathIndex].add(t)}getControlPointAt(t){return this._controlPoints[this.pathIndex].has(t)}}class p extends _{initialize(t,e,i,s,n){return super.initialize(t,e,i,s,n)}clone(){return(new p).initialize((0,s.o8)(this._paths),this.geometryType,this.hasZ,this.hasM,1)}setControlPoint(){this._paths[this.pathIndex][this._pointIndex][4]=1}getControlPoint(){return 1===this._paths[this.pathIndex][this._pointIndex][4]}setControlPointAt(t){this._paths[this.pathIndex][t][4]=1}getControlPointAt(t){return 1===this._paths[this.pathIndex][t][4]}}},88501:(t,e,i)=>{i.d(e,{d:()=>l});var s=i(2413),n=i(65391),h=i(205),r=i(5262),o=i(65658);const a=222045e-19;function l(t){if(0===t.totalSize)return null;const e=(0,n.z8)(t);if(!e)return null;const i=4*(Math.abs(e[0])+Math.abs(e[2])+Math.abs(e[1])+Math.abs(e[3])+1)*a;let r=0,o=0;t.reset();for(let s=0;t.nextPath();s++){const e=t.getCurrentRingArea();e>o&&(o=e,r=s)}if(t.seekPath(r),0===t.pathSize)return null;t.seekPathStart();const l=(0,n.B$)(t);if(Math.abs(o)<=2*i*i)return[(l[0]+l[2])/2,(l[1]+l[3])/2];t.seekPathStart();const p=(0,h.w2)(t,(0,s.vt)());if(null===p)return null;if(t.totalPoints<4)return p;const d=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]],f=[NaN,NaN,NaN,NaN],g=[NaN,NaN,NaN,NaN];let y=!1,m=_(p,t,!0);0===m.distance&&(y=!0,d[0][0]=p[0],d[0][1]=p[1],m=_(p,t,!1)),f[0]=m.distance,g[0]=0;const x=[NaN,NaN];let z=!1,O=.25,S=-1,M=NaN;do{if(M=NaN,d[1]=c(t,P(l[0],l[2],O),i,e),isNaN(d[1][0])||isNaN(d[1][1])||(m=_(d[1],t,!1),M=m.distance),!isNaN(M)&&M>i&&u(d[1],t))z=!0,f[1]=M,g[1]=N(d[1],p);else if(!isNaN(M)&&M>S&&(S=M,x[0]=d[1][0],x[1]=d[1][1]),O-=.01,O<.1){if(!(S>=0))break;z=!0,f[1]=S,d[1][0]=x[0],d[1][1]=x[1],g[1]=N(d[1],p)}}while(!z);z=!1,O=.5,S=-1;let v=.01,w=1;do{if(M=NaN,d[2]=c(t,P(l[0],l[2],O),i,e),isNaN(d[2][0])||isNaN(d[2][1])||(m=_(d[2],t,!1),M=m.distance),!isNaN(M)&&M>i&&u(d[2],t))z=!0,f[2]=M,g[2]=N(d[2],p);else if(!isNaN(M)&&M>S)S=M,x[0]=d[2][0],x[1]=d[2][1];else if(M>S&&(S=M,x[0]=d[2][0],x[1]=d[2][1]),O=.5+v*w,v+=.01,w*=-1,O<.3||O>.7){if(!(S>=0))break;z=!0,f[2]=S,d[2][0]=x[0],d[2][1]=x[1],g[2]=N(d[2],p)}}while(!z);z=!1,O=.75,S=-1;do{if(M=NaN,d[3]=c(t,P(l[0],l[2],O),i,e),isNaN(d[3][0])||isNaN(d[3][1])||(m=_(d[3],t,!1),M=m.distance),!isNaN(M)&&M>i&&u(d[3],t))z=!0,f[3]=M,g[3]=N(d[3],p);else if(M>S&&(S=M,x[0]=d[3][0],x[1]=d[3][1]),O+=.01,O>.9){if(!(S>=0))break;z=!0,f[3]=S,d[3][0]=x[0],d[3][1]=x[1],g[3]=N(d[3],p)}}while(!z);const C=[0,1,2,3],k=y?0:1;let F;for(let s=k;s<4;s++)for(let t=k;t<3;t++){const e=g[t],i=g[t+1];I(e,i)>0&&(F=C[t],C[t]=C[t+1],C[t+1]=F,g[t]=i,g[t+1]=e)}let b=k,T=0,G=0;for(let s=k;s<4;s++){switch(s){case 0:G=2*f[C[s]];break;case 1:G=1.66666666*f[C[s]];break;case 2:G=1.33333333*f[C[s]];break;case 3:G=f[C[s]]}G>T&&(T=G,b=C[s])}return d[b]}function u(t,e){let i,s,n,h,r=0;for(e.reset();e.nextPath()&&e.nextPoint();)for(i=e.x,s=e.y;e.nextPoint();i=n,s=h)n=e.x,h=e.y,s>t[1]!=h>t[1]&&((n-i)*(t[1]-s)-(h-s)*(t[0]-i)>0?r++:r--);return 0!==r}function _(t,e,i){if(i&&u(t,e))return{coord:t,distance:0};let s=1/0,n=0,h=0,o=[0,0],a=[0,0];const l=[0,0];for(e.reset();e.nextPath()&&e.nextPoint();)if(!(e.pathSize<2))for(o[0]=e.x,o[1]=e.y;e.nextPoint();o=a){a=[e.x,e.y],(0,r.gR)(l,t,o,a);const i=N(t,l);i<s&&(s=i,n=l[0],h=l[1])}return{coord:[n,h],distance:Math.sqrt(s)}}function c(t,e,i,n){const h=[e,0];let r=1/0,a=1/0,l=!1,u=!1;const _=[[e,n[1]-1],[e,n[3]+1]],c=[0,0],d=[0,0],f=[0,0],g=[[0,0],[0,0]],y=(0,s.vt)();for(t.reset();t.nextPath()&&t.nextPoint();)if(!(t.pathSize<2))for(g[0][0]=t.x,g[0][1]=t.y;t.nextPoint();g[0][0]=g[1][0],g[0][1]=g[1][1]){if(g[1][0]=t.x,g[1][1]=t.y,null===p(y,g))continue;if(d[0]=_[0][0],d[1]=_[0][1],f[0]=_[1][0],f[1]=_[1][1],0===m(y,d,f))continue;if(!(0,o.Ql)(_[0],_[1],g[0],g[1],c))continue;const e=c[1];r>a?e<r&&(r=e,l=!0):e<a&&(a=e,u=!0)}return l&&u?h[1]=(r+a)/2:h[0]=h[1]=NaN,h}function p(t,e){if(e.length<2)return null;t||(t=(0,s.vt)());const[i,n]=e[0],[h,r]=e[1];return t[0]=Math.min(i,h),t[1]=Math.min(n,r),t[2]=Math.max(i,h),t[3]=Math.max(n,r),t}const d=1,f=4,g=3,y=12;function m(t,e,i){let s=x(e,t),n=x(i,t);const h=t[0],r=t[1],o=t[2],a=t[3];if(s&n)return 0;if(!(s|n))return 4;const l=(s?1:0)|(n?2:0);do{const l=i[0]-e[0],u=i[1]-e[1];if(l>u)s&g?(s&d?(e[1]+=u*(h-e[0])/l,e[0]=h):(e[1]+=u*(o-e[0])/l,e[0]=o),s=x(e,t)):n&g?(n&d?(i[1]+=u*(h-i[0])/l,i[0]=h):(i[1]+=u*(o-i[0])/l,i[0]=o),n=x(i,t)):s?(s&f?(e[0]+=l*(r-e[1])/u,e[1]=r):(e[0]+=l*(a-e[1])/u,e[1]=a),s=x(e,t)):(n&f?(i[0]+=l*(r-i[1])/u,i[1]=r):(i[0]+=l*(a-i[1])/u,i[1]=a),n=x(i,t));else if(s&y?(s&f?(e[0]+=l*(r-e[1])/u,e[1]=r):(e[0]+=l*(a-e[1])/u,e[1]=a),s=x(e,t)):n&y?(n&f?(i[0]+=l*(r-i[1])/u,i[1]=r):(i[0]+=l*(a-i[1])/u,i[1]=a),n=x(i,t)):s?(s&d?(e[1]+=u*(h-e[0])/l,e[0]=h):(e[1]+=u*(o-e[0])/l,e[0]=o),s=x(e,t)):(n&d?(i[1]+=u*(h-i[0])/l,i[0]=h):(i[1]+=u*(o-i[0])/l,i[0]=o),n=x(i,t)),s&n)return 0}while(s|n);return l}function x(t,e){return(t[0]<e[0]?1:0)|(t[0]>e[2]?1:0)<<1|(t[1]<e[1]?1:0)<<2|(t[1]>e[3]?1:0)<<3}function P(t,e,i){return t+(e-t)*i}function N(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}function I(t,e){if(t<e)return-1;if(t>e)return 1;if(t===e)return 0;const i=isNaN(t),s=isNaN(e);return i<s?-1:i>s?1:0}},5095:(t,e,i)=>{i.d(e,{$U:()=>m,CQ:()=>r,C_:()=>P,DY:()=>l,Fz:()=>A,Gh:()=>y,Hi:()=>h,KM:()=>f,MJ:()=>k,Nb:()=>c,O7:()=>p,PT:()=>v,Tv:()=>a,Vx:()=>w,X3:()=>g,Xx:()=>G,Yw:()=>_,ZX:()=>O,_j:()=>I,bg:()=>o,cR:()=>z,cn:()=>b,dx:()=>d,eG:()=>u,fq:()=>S,hA:()=>F,hM:()=>N,iw:()=>R,jM:()=>C,kx:()=>T,mg:()=>x,ni:()=>E,qM:()=>n,xB:()=>Z,yv:()=>M});var s=i(81806);const n=1e-30,h=4294967295,r=512,o=128,a=511,l=29,u=24,_=8,c=1,p=2,d=3,f=2,g=1,y=1.05,m=((0,s.A)("featurelayer-force-marker-text-draw-order"),5),x=6,P=1.15,N=2,I=128-2*N,z=8,O=500,S=10,M=1024,v=2,w=0,C=1,k=4,F=8,b=16,T=4,G=1,A=4,Z=8,E=32,R=64},99588:(t,e,i)=>{i.d(e,{M9:()=>h,Pl:()=>n,Ss:()=>r});const s=new Float32Array(1);new Uint32Array(s.buffer);function n(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function h(t,e){return 65535&t|e<<16}function r(t,e,i,s){return 255&t|(255&e)<<8|(255&i)<<16|s<<24}}}]);
//# sourceMappingURL=612.7eae108e.chunk.js.map