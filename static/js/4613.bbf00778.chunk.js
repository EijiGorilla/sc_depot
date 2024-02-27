/*! For license information please see 4613.bbf00778.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[4613],{34613:(t,n,a)=>{a.r(n),a.d(n,{CalciteGraph:()=>i,defineCustomElement:()=>e});var c=a(91071);const i=c.G,e=c.d},91071:(t,n,a)=>{a.d(n,{G:()=>r,d:()=>l});var c=a(82108),i=a(66418),e=a(6676);function h(t,n,a){const c=n[0]-t[0],i=n[1]-t[1];return c?(3*i/c-a)/2:a}function o(t,n,a,c,i){const[e,h]=t,[o,s]=n,r=(o-e)/3,l=i([e+r,h+r*a]).join(","),d=i([o-r,s-r*c]).join(","),g=i([o,s]).join(",");return"C ".concat(l," ").concat(d," ").concat(g)}function s(t){let{data:n,min:a,max:c,t:i}=t;if(0===n.length)return"";const[e,s]=i(n[0]),[r,l]=i(a),[d]=i(c);let g,p,u;const m=n.reduce(((t,a,c)=>{if(p=n[c-2],u=n[c-1],c>1){const n=function(t,n,a){const c=n[0]-t[0],i=a[0]-n[0],e=(n[1]-t[1])/(c||i<0&&0),h=(a[1]-n[1])/(i||c<0&&0),o=(e*i+h*c)/(c+i);return(Math.sign(e)+Math.sign(h))*Math.min(Math.abs(e),Math.abs(h),.5*Math.abs(o))||0}(p,u,a),c=void 0===g?h(p,u,n):g,e=o(p,u,c,n,i);return g=n,"".concat(t," ").concat(e)}return t}),"M ".concat(r,",").concat(l," L ").concat(r,",").concat(s," L ").concat(e,",").concat(s)),f=n[n.length-1],v=o(u,f,g,h(u,f,g),i);return"".concat(m," ").concat(v," L ").concat(d,",").concat(l," Z")}const r=(0,c.w$)(class extends c.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.graphId="calcite-graph-".concat((0,i.g)()),this.resizeObserver=(0,e.c)("resize",(()=>(0,c.$x)(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const{data:t,colorStops:n,el:a,highlightMax:i,highlightMin:e,min:h,max:o}=this,r=this.graphId,{clientHeight:l,clientWidth:d}=a;if(!t||0===t.length)return(0,c.h)("svg",{"aria-hidden":"true",class:"svg",height:l,preserveAspectRatio:"none",viewBox:"0 0 ".concat(d," ").concat(l),width:d});const{min:g,max:p}=function(t){const[n,a]=t[0],c=[n,a],i=[n,a];return t.reduce(((t,n)=>{let{min:a,max:c}=t,[i,e]=n;return{min:[Math.min(a[0],i),Math.min(a[1],e)],max:[Math.max(c[0],i),Math.max(c[1],e)]}}),{min:c,max:i})}(t);let u=g,m=p;(h<g[0]||h>g[0])&&(u=[h,0]),(o>p[0]||o<p[0])&&(m=[o,p[1]]);const f=function(t){let{width:n,height:a,min:c,max:i}=t;const e=i[0]-c[0],h=i[1]-c[1];return t=>[(t[0]-c[0])/e*n,a-t[1]/h*a]}({min:u,max:m,width:d,height:l}),[v]=f([e,m[1]]),[x]=f([i,m[1]]),M=s({data:t,min:g,max:p,t:f}),k=n?"url(#linear-gradient-".concat(r,")"):void 0;return(0,c.h)("svg",{"aria-hidden":"true",class:"svg",height:l,preserveAspectRatio:"none",viewBox:"0 0 ".concat(d," ").concat(l),width:d},n?(0,c.h)("defs",null,(0,c.h)("linearGradient",{id:"linear-gradient-".concat(r),x1:"0",x2:"1",y1:"0",y2:"0"},n.map((t=>{let{offset:n,color:a,opacity:i}=t;return(0,c.h)("stop",{offset:"".concat(100*n,"%"),"stop-color":a,"stop-opacity":i})})))):null,void 0!==e?[(0,c.h)("mask",{height:"100%",id:"".concat(r,"1"),width:"100%",x:"0%",y:"0%"},(0,c.h)("path",{d:"\n            M 0,0\n            L ".concat(v-1,",0\n            L ").concat(v-1,",").concat(l,"\n            L 0,").concat(l,"\n            Z\n          "),fill:"white"})),(0,c.h)("mask",{height:"100%",id:"".concat(r,"2"),width:"100%",x:"0%",y:"0%"},(0,c.h)("path",{d:"\n            M ".concat(v+1,",0\n            L ").concat(x-1,",0\n            L ").concat(x-1,",").concat(l,"\n            L ").concat(v+1,", ").concat(l,"\n            Z\n          "),fill:"white"})),(0,c.h)("mask",{height:"100%",id:"".concat(r,"3"),width:"100%",x:"0%",y:"0%"},(0,c.h)("path",{d:"\n                M ".concat(x+1,",0\n                L ").concat(d,",0\n                L ").concat(d,",").concat(l,"\n                L ").concat(x+1,", ").concat(l,"\n                Z\n              "),fill:"white"})),(0,c.h)("path",{class:"graph-path",d:M,fill:k,mask:"url(#".concat(r,"1)")}),(0,c.h)("path",{class:"graph-path--highlight",d:M,fill:k,mask:"url(#".concat(r,"2)")}),(0,c.h)("path",{class:"graph-path",d:M,fill:k,mask:"url(#".concat(r,"3)")})]:(0,c.h)("path",{class:"graph-path",d:M,fill:k}))}get el(){return this}static get style(){return":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-graph",{data:[16],colorStops:[16],highlightMin:[2,"highlight-min"],highlightMax:[2,"highlight-max"],min:[514],max:[514]}]);function l(){if("undefined"===typeof customElements)return;["calcite-graph"].forEach((t=>{if("calcite-graph"===t)customElements.get(t)||customElements.define(t,r)}))}l()}}]);
//# sourceMappingURL=4613.bbf00778.chunk.js.map