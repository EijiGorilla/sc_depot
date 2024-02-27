"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[496],{29201:(t,e,n)=>{n.d(e,{I:()=>T,b:()=>N});var a,r,i,o=n(57528),s=n(34981),c=n(26917),l=n(59395),u=n(81993),p=n(90235),d=n(80883),h=n(3799),g=n(21390),I=n(64839),m=n(32307),v=n(70367),y=n(10773),f=n(66470);function N(t){const e=new m.N5,{vertex:n,fragment:N}=e;return(0,h.NB)(n,t),e.include(l.d,t),e.attributes.add(f.r.POSITION,"vec3"),e.attributes.add(f.r.UV0,"vec2"),t.perspectiveInterpolation&&e.attributes.add(f.r.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),t.multipassEnabled&&e.varyings.add("depth","float"),n.code.add((0,I.H)(a||(a=(0,o.A)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0;\n      gl_Position = transformPosition(proj, view, vpos);\n\n      ","\n    }\n  "])),t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":"",t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":"")),e.include(c.HQ,t),e.include(u.Q,t),N.uniforms.add(new v.N("tex",(t=>t.texture)),new g.m("opacity",(t=>t.opacity))),e.varyings.add("vTexCoord","vec2"),t.output===s.V.Alpha?N.code.add((0,I.H)(r||(r=(0,o.A)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      fragColor = vec4(alpha);\n    }\n    "])),t.multipassEnabled?"terrainDepthTest(depth);":"",I.H.float(p.H))):(N.include(d.a),N.code.add((0,I.H)(i||(i=(0,o.A)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      fragColor = texture(tex, vTexCoord) * opacity;\n\n      if (fragColor.a < ",") {\n        discard;\n      }\n\n      fragColor = highlightSlice(fragColor, vpos);\n      ","\n    }\n    "])),t.multipassEnabled?"terrainDepthTest(depth);":"",I.H.float(p.H),t.transparencyPassType===y.y.Color?"fragColor = premultiplyAlpha(fragColor);":""))),e}const T=Object.freeze(Object.defineProperty({__proto__:null,build:N},Symbol.toStringTag,{value:"Module"}))},59962:(t,e,n)=>{n.d(e,{t:()=>u,k:()=>p});const a="theme-style";function r(t,e){return function(t,e){const n=new Image(e,e);return n.src=t,n}(function(t){const e=(new XMLSerializer).serializeToString(t);return"data:image/svg+xml;base64,".concat(btoa(e))}(i(function(t){const e=t.split(",")[1],n=atob(e);return(new DOMParser).parseFromString(n,"image/svg+xml")}(t),e)),e.size)}function i(t,e){let{accentColor:n,contrastColor:r}=e;const i=n.toHex(),o=n.a,s=r.toHex(),c=r.a,l=t.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(a);return l&&(l.innerHTML="\n      .contrast-fill { fill: ".concat(s,"; fill-opacity: ").concat(c,"; }\n      .contrast-stroke { stroke: ").concat(s,"; stroke-opacity: ").concat(c,";  }\n      .accent-fill { fill: ").concat(i,"; fill-opacity: ").concat(o,"; }\n      .accent-stroke { stroke: ").concat(i,"; stroke-opacity:  ").concat(o,"; }")),t}const o="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NnoiIGNsYXNzPSJhY2NlbnQtZmlsbCIvPjxwYXRoIHN0cm9rZS13aWR0aD0iNC45OSIgZD0iTTIwLjA1IDQwLjg2YTE1LjA1IDE1LjA1IDAgMCAwIDE3LjE0LTEuNSAxNS4wNSAxNS4wNSAwIDAgMCA0LjQ3LTE2LjY1IDE1LjA1IDE1LjA1IDAgMCAwLTIyLjcyLTcuMTUgMTUuMDUgMTUuMDUgMCAwIDAtNS41IDcuMTUiIGNsYXNzPSJjb250cmFzdC1zdHJva2UiLz48cGF0aCBkPSJtMTAuOTcgMzUuNTcgNS4zOCAxMi4wNyA3Ljc5LTEzLjQ3LTEzLjE3IDEuNHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTgyIDExLjk4MiAwIDAgMC05LjggNy41MDciIGNsYXNzPSJjb250cmFzdC1zdHJva2UgY29udHJhc3QtZmlsbCIvPjxwYXRoIGQ9Im0yOS44MTggMjIuODA4LTYuMTg0IDQuNi0uNTQxLTguMzY0eiIgY2xhc3M9ImNvbnRyYXN0LWZpbGwiLz48L3N2Zz4=";var c=n(96897);const l=64;function u(t,e){const{accentColor:n,contrastColor:a,preMultiplyAlpha:i}=e;return t.fromData("heading-rotate:[accent:".concat(n,",contrast:").concat(a,",size:").concat(l,"]"),(()=>new c.g(r(o,{accentColor:n,contrastColor:a,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:i})))}function p(t,e){const{accentColor:n,contrastColor:a,preMultiplyAlpha:i}=e;return t.fromData("tilt-rotate:[accent:".concat(n,",contrast:").concat(a,",size:").concat(l,"]"),(()=>new c.g(r(s,{accentColor:n,contrastColor:a,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:i})))}},7947:(t,e,n)=>{n.d(e,{AA:()=>g,xk:()=>v,z7:()=>m});var a,r,i=n(76931),o=(n(45136),n(83670)),s=(n(9624),n(13927)),c=n(95925),l=(n(96190),n(75762)),u=(n(12482),n(37431)),p=n(29808),d=n(3112),h=n(97974);n(70825);function g(t,e){return I(t,(()=>e))}function I(t,e){const n=(0,o.c)(),a=(0,o.c)();let r=!1;return o=>{const c=e(o);if("start"===o.action){const e=(0,i.WA)(o.screenStart,(0,i.PR)(l.oG.get())),a=(0,u.Z4)(t.state.camera,e,y);null!=a&&(r=(0,s.Ui)(c,a,n))}if(!r)return null;const p=(0,i.WA)(o.screenEnd,(0,i.PR)(l.oG.get())),d=(0,u.Z4)(t.state.camera,p,y);return null==d?null:(0,s.Ui)(c,d,a)?{...o,renderStart:n,renderEnd:a,plane:c,ray:d}:null}}function m(t){let e=null;return n=>{switch(n.action){case"start":e=t.disableDisplay();break;case"end":case"cancel":null!=e&&(e.remove(),e=null)}return n}}function v(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=(0,p.hz)(t.state.viewingMode);n.options.selectionMode=!0,n.options.store=d.oH.MIN,n.options.hud=!1;const r=(0,i.gs)(),s={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},c=(0,o.c)(),l=null!==e&&void 0!==e?e:t.spatialReference,u=e=>{t.map.ground&&t.map.ground.opacity<1?s.exclude.add(h.fo):s.exclude.delete(h.fo),t.sceneIntersectionHelper.intersectIntersectorScreen((0,i.WA)(e,r),n,s);const o=n.results.min;let u;if(o.getIntersectionPoint(c))u=o.intersector===d.dz.TERRAIN?a.GROUND:a.OTHER;else{if(!n.results.ground.getIntersectionPoint(c))return null;u=a.GROUND}return{location:t.renderCoordsHelper.fromRenderCoords(c,l),surfaceType:u}};let g;return t=>{if("start"===t.action){const e=u(t.screenStart);g=null!=e?e.location:null}if(null==g)return null;const e=u(t.screenEnd);return null!=(null===e||void 0===e?void 0:e.location)?{...t,mapStart:g,mapEnd:e.location,surfaceType:e.surfaceType}:null}}(r=a||(a={}))[r.GROUND=0]="GROUND",r[r.OTHER=1]="OTHER";(0,o.c)(),(0,o.c)();const y=(0,c.vt)()},77447:(t,e,n)=>{n.d(e,{r:()=>x});var a=n(88105),r=n(34981),i=n(83490),o=n(75803),s=n(45463),c=n(60322),l=n(77730),u=n(86994),p=n(66470),d=n(82809),h=n(86401),g=n(63928),I=n(52757),m=n(35143),v=(n(64839),n(16506)),y=n(42693),f=n(99415),N=n(28584),T=n(96643),A=n(10773),b=n(92656),P=n(29201),D=n(93345),E=n(57162);class M extends y.w{initializeProgram(t){return new N.B(t.rctx,M.shader.get().build(this.configuration),w)}_setPipelineState(t,e){const n=this.configuration,a=t===A.y.NONE,i=t===A.y.FrontFace;return(0,E.Ey)({blending:n.output!==r.V.Color&&n.output!==r.V.Alpha||!n.transparent?null:a?S:(0,c.ez)(t),culling:(0,E.Xt)(n.cullFace),depthTest:{func:(0,c.K_)(t)},depthWrite:a?n.writeDepth?E.kn:null:(0,c.XO)(t),colorWrite:E.wE,stencilWrite:n.hasOccludees?T.v0:null,stencilTest:n.hasOccludees?e?T.a9:T.qh:null,polygonOffset:a||i?null:(0,c.aB)(n.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}}M.shader=new v.$(P.I,(()=>n.e(8391).then(n.bind(n,48391))));const S=(0,E.ox)(D.dn.ONE,D.dn.ONE_MINUS_SRC_ALPHA);class C extends b.E{constructor(){super(...arguments),this.output=r.V.Color,this.cullFace=i.s2.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=A.y.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}(0,m._)([(0,f.W)({count:r.V.COUNT})],C.prototype,"output",void 0),(0,m._)([(0,f.W)({count:i.s2.COUNT})],C.prototype,"cullFace",void 0),(0,m._)([(0,f.W)()],C.prototype,"hasSlicePlane",void 0),(0,m._)([(0,f.W)()],C.prototype,"transparent",void 0),(0,m._)([(0,f.W)()],C.prototype,"enableOffset",void 0),(0,m._)([(0,f.W)()],C.prototype,"writeDepth",void 0),(0,m._)([(0,f.W)()],C.prototype,"hasOccludees",void 0),(0,m._)([(0,f.W)({count:A.y.COUNT})],C.prototype,"transparencyPassType",void 0),(0,m._)([(0,f.W)()],C.prototype,"multipassEnabled",void 0),(0,m._)([(0,f.W)()],C.prototype,"cullAboveGround",void 0),(0,m._)([(0,f.W)()],C.prototype,"perspectiveInterpolation",void 0),(0,m._)([(0,f.W)({constValue:!1})],C.prototype,"occlusionPass",void 0);const w=new Map([[p.r.POSITION,0],[p.r.UV0,2],[p.r.PERSPECTIVEDIVIDE,3]]);class x extends g.W{constructor(t){super(t,new O),this.supportsEdges=!0,this._vertexAttributeLocations=w,this._configuration=new C}getConfiguration(t,e){return this._configuration.output=t,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=e.transparencyPassType,this._configuration.enableOffset=e.camera.relativeElevation<c.xt,this._configuration.multipassEnabled=e.multipassEnabled,this._configuration.cullAboveGround=e.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(t,e){return(e===r.V.Color||e===r.V.Alpha||e===r.V.Highlight)&&(t===l.N.DRAPED_MATERIAL||(e===r.V.Highlight?t===l.N.OPAQUE_MATERIAL:t===(this.parameters.transparent?this.parameters.writeDepth?l.N.TRANSPARENT_MATERIAL:l.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:l.N.OPAQUE_MATERIAL)))}createGLMaterial(t){return new _(t)}createBufferWriter(){const t=h.zK.clone();return this.parameters.perspectiveInterpolation&&t.f32(p.r.PERSPECTIVEDIVIDE),new L(t)}}class _ extends o.m{constructor(t){super({...t,...t.material.parameters})}_updateParameters(t){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(M,t)}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:t.hasOccludees}),this._updateParameters(t))}beginSlot(t){return this._output!==r.V.Color&&this._output!==r.V.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class L extends d.Z{write(t,e,n,r,i){for(const o of this.vertexBufferLayout.fields.keys()){const s=n.attributes.get(o);if(s)if(o===p.r.PERSPECTIVEDIVIDE){(0,u.vA)(1===s.size);const t=r.getField(o,a.Y$);t&&(0,I.uO)(s,t,i)}else(0,I.zC)(o,s,t,e,r,i)}}}class O extends s.qA{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=i.s2.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}}}]);
//# sourceMappingURL=496.088739e9.chunk.js.map