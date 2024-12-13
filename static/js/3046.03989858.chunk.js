"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[3046],{86486:(t,e,i)=>{i.d(e,{LO:()=>o,kg:()=>h,or:()=>l,vl:()=>a});var s=i(69539),r=i(15492);function n(t,e){if(!t||t.symbol)return null;const i=e?.renderer;return t&&null!=i&&i.getObservationRenderer?i.getObservationRenderer(t):i}function a(t,e){const i=n(t,e),s=function(t,e){if(null!=t.symbol)return t.symbol;const i=n(t,e);return null!=i&&"dot-density"!==i.type?i.getSymbol(t,e):null}(t,e);if(null==s)return null;const a={renderer:i,symbol:s};if(null==i||!("visualVariables"in i)||!i.visualVariables)return a;const o=(0,r.getVisualVariableValues)(i,t,e)??[],h=["proportional","proportional","proportional"];for(const{variable:r,value:n}of o)switch(r.type){case"color":a.color=n.toRgba();break;case"size":if("outline"===r.target)a.outlineSize=n;else{const t=r.axis,e=r.useSymbolValue?"symbol-value":n;switch(t){case"width":h[0]=e;break;case"depth":h[1]=e;break;case"height":h[2]=e;break;case"width-and-depth":h[0]=h[1]=e;break;default:h[0]=h[1]=h[2]=e}}break;case"opacity":a.opacity=n;break;case"rotation":switch(r.axis){case"tilt":a.tilt=n;break;case"roll":a.roll=n;break;default:a.heading=n}}return"proportional"===h[0]&&"proportional"===h[1]&&"proportional"===h[2]||(a.size=h),a}async function o(t,e){const i=n(t,e),a=await async function(t,e){if(null!=t.symbol)return t.symbol;const i=n(t,e);return null!=i?i.getSymbolAsync(t,e):null}(t,e);if(!a)return null;const o={renderer:i,symbol:a};if(!i||!("visualVariables"in i)||!i.visualVariables)return o;const h=(0,r.getVisualVariableValues)(i,t,e)??[],l=["proportional","proportional","proportional"];for(const{variable:r,value:n}of h)if("color"===r.type)o.color=s.A.toUnitRGBA(n);else if("size"===r.type)if("outline"===r.target)o.outlineSize=n;else{const t=r.axis,e=r.useSymbolValue?"symbol-value":n;"width"===t?l[0]=e:"depth"===t?l[1]=e:"height"===t?l[2]=e:l[0]=l[1]="width-and-depth"===t?e:l[2]=e}else"opacity"===r.type?o.opacity=n:"rotation"===r.type&&"tilt"===r.axis?o.tilt=n:"rotation"===r.type&&"roll"===r.axis?o.roll=n:"rotation"===r.type&&(o.heading=n);return(isFinite(l[0])||isFinite(l[1])||isFinite(l[2]))&&(o.size=l),o}function h(t){const e=t[arguments.length>1&&void 0!==arguments[1]?arguments[1]:0];return"number"==typeof e&&isFinite(e)?e:null}function l(t){for(let e=0;e<3;e++){const i=t[e];if("number"==typeof i)return isFinite(i)?i:0}return 0}},35148:(t,e,i)=>{i.d(e,{V:()=>p});var s=i(35143),r=i(91967),n=i(54099),a=i(68134),o=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),l=i(68920),c=i(44513),d=i(59752);let p=class extends r.A{constructor(t){super(t),this._dirtyExtents=new l.D,this._globalDirty=!1,this._averageExtentUpdateSize=0,this._dirtyGraphicsSet=new Set,this._updateElevation=!1,this.graphicsCoreOwner=null,this.graphicsCore=null,this.events=new n.A}initialize(){const t=this.elevationProvider,e=this.graphicsCoreOwner.view.resourceController.scheduler;this._task=e.registerTask(u(this.graphicsCore.layer.elevationInfo?.mode),this),this.addHandles([t.on("elevation-change",(t=>this._elevationChanged(t))),(0,a.wB)((()=>this.graphicsCoreOwner.suspended),(()=>this._suspendedChange())),this._task,(0,a.wB)((()=>u(this.graphicsCore.layer.elevationInfo?.mode)),(t=>this._task.priority=t))])}destroy(){this._dirtyGraphicsSet.clear(),this.graphicsCoreOwner=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null,this.elevationProvider=null}clear(){this._dirtyGraphicsSet.clear(),this.notifyChange("updating")}_suspendedChange(){!0===this.graphicsCoreOwner.suspended?this._updateElevation=!1:!1===this.graphicsCoreOwner.suspended&&this._updateElevation&&(this._globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this._globalDirty=!0,this.notifyChange("updating")}get updating(){return this.running}get running(){return this._dirtyGraphicsSet.size>0||this._dirtyExtents&&!this._dirtyExtents.empty||this._globalDirty}get updatingRemaining(){return this._dirtyGraphicsSet.size+this._dirtyExtents.size*this._averageExtentUpdateSize}runTask(t){for(this._globalDirty&&(this._markAllGraphicsElevationDirty(),this._globalDirty=!1,t.madeProgress()),t.run((()=>this._dirtyExtents.merge(t)));this.running&&!t.done;)this._updateDirtyGraphics(t),this._updateDirtyExtents(t);this.notifyChange("updating")}_updateDirtyGraphics(t){const e=this.graphicsCoreOwner.view.renderCoordsHelper,i=this.graphicsCore.effectiveUpdatePolicy===c.q.ASYNC;for(const s of this._dirtyGraphicsSet.keys()){const r=this.graphicsCore.getGraphics3DGraphicById(s);if(this._dirtyGraphicsSet.delete(s),null!=r&&(r.alignWithElevation(this.elevationProvider,e,i),this.graphicsCore.deconflictor?.setDirty(),t.madeProgress()),t.done)return}}_updateDirtyExtents(t){for(;!this._dirtyExtents.empty&&!t.done;){const e=this._dirtyExtents.pop(),i=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:e,spatialReference:i});const s=this._dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(e,i,(t=>{const e=this.graphicsCore.getGraphics3DGraphicById(t);null!=e&&e.needsElevationUpdates()&&this._dirtyGraphicsSet.add(t)})),this._averageExtentUpdateSize=.1*(this._dirtyGraphicsSet.size-s)+.9*this._averageExtentUpdateSize,t.madeProgress()}}_markAllGraphicsElevationDirty(){this._dirtyExtents.clear(),this._dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach(((t,e)=>this._dirtyGraphicsSet.add(e)))}_elevationChanged(t){if("scene"===t.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const e=t.extent;if(this.graphicsCoreOwner.suspended){if(!this._updateElevation){const t=this.graphicsCore.computedExtent;t&&e[2]>t.xmin&&e[0]<t.xmax&&e[3]>t.ymin&&e[1]<t.ymax&&(this._updateElevation=!0)}this.events.emit("invalidate-elevation",t)}else e[0]===-1/0?this._globalDirty=!0:this._dirtyExtents.add(e),this.notifyChange("updating")}};function u(t){return null==t?d.W6.ELEVATION_ALIGNMENT:"relative-to-scene"===t?d.W6.ELEVATION_ALIGNMENT_SCENE:d.W6.ELEVATION_ALIGNMENT}(0,s._)([(0,o.MZ)()],p.prototype,"graphicsCoreOwner",void 0),(0,s._)([(0,o.MZ)()],p.prototype,"graphicsCore",void 0),(0,s._)([(0,o.MZ)()],p.prototype,"queryGraphicUIDsInExtent",void 0),(0,s._)([(0,o.MZ)()],p.prototype,"elevationProvider",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,o.MZ)({readOnly:!0})],p.prototype,"updatingRemaining",null),p=(0,s._)([(0,h.$)("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],p)},31329:(t,e,i)=>{i.d(e,{p:()=>N});var s=i(35143),r=i(91967),n=i(68134),a=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),h=i(34111),l=i(4212),c=i(15941),d=i(34761),p=i(13191),u=i(20664),_=i(9392),g=i(5809),y=i(50840),v=i(14487),b=i(42294),f=i(2413),S=i(4763),x=i(44230),m=i(13927),w=i(95925),C=i(64465),E=i(70335);const I=.5*Math.PI,G=I/Math.PI*180;class O{constructor(t){this._renderCoordsHelper=t.renderCoordsHelper,this._extent=new Array(4),this._planes=new Array(6),this._maxSpan=0,this._center={origin:(0,_.vt)(),direction:(0,_.vt)()};for(let e=0;e<4;e++)this._extent[e]={origin:(0,_.vt)(),direction:(0,_.vt)(),cap:{next:null,direction:(0,_.vt)()}},this._planes[e]=(0,m.vt)();this._planes[S.FB.NEAR]=(0,m.vt)(),this._planes[S.FB.FAR]=(0,m.vt)(),this._planesWithoutFar=this._planes.slice(0,5)}update(t,e,i){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const r=this._extent;this._toRenderBoundingExtent(t,e,i),(0,u.g)(this._center.origin,r[0].origin,r[2].origin),(0,u.h)(this._center.origin,this._center.origin,.5),this._renderCoordsHelper.worldUpAtPosition(this._center.origin,this._center.direction),s||(0,u.h)(this._center.direction,this._center.direction,-1);for(let n=0;n<4;n++){const t=r[n];this._renderCoordsHelper.worldUpAtPosition(t.origin,t.direction);const e=r[3===n?0:n+1];t.cap.next=e.origin,(0,u.o)(t.cap.direction,t.origin,e.origin),(0,m.mR)(t.direction,t.cap.direction,t.origin,this._planes[n]),s||(0,u.h)(t.direction,t.direction,-1)}(0,m.mR)(r[0].cap.direction,r[1].cap.direction,r[0].origin,this._planes[S.FB.NEAR]),s?(0,m.ze)(this._planes[S.FB.NEAR],this._planes[S.FB.FAR]):((0,m.C)(this._planes[S.FB.FAR],this._planes[S.FB.NEAR]),(0,m.ze)(this._planes[S.FB.NEAR],this._planes[S.FB.NEAR])),this._maxSpan=Math.max(Math.abs(t[0]-t[2]),Math.abs(t[1]-t[3])),this._maxSpanSpatialReference=e,this._minGlobalAltitude=.9*(0,h.tO)(this._maxSpanSpatialReference).radius}isVisibleInFrustum(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null==t)return!1;if(this._renderCoordsHelper.viewingMode===C.RT.Global){const i=this._maxSpanSpatialReference.isGeographic?G:I*e;if(this._maxSpan>i)return!0;if(null!=t.altitude&&t.altitude>=this._minGlobalAltitude)return this._isVisibleInFrustumGlobal(t)}if(0===this._maxSpan){const e=this._extent[0];return!(i||!t.intersectsRay((0,w.LV)(e.origin,e.direction)))}for(let r=0;r<this._extent.length;r++){const e=this._extent[r];if(!i&&t.intersectsRay((0,w.LV)(e.origin,e.direction)))return!0;if(t.intersectsLineSegment((0,x.Cr)(e.origin,e.cap.next,F),e.cap.direction))return!0}const s=i?this._planes:this._planesWithoutFar;for(let r=0;r<t.lines.length;r++){const e=t.lines[r];if((0,E.Sc)(s,e.origin,e.endpoint,e.direction))return!0}return!1}_toRenderBoundingExtentGlobal(t,e,i){(0,f.gX)(t,A),A[2]=i,(0,g.l)(e,A,B,this._renderCoordsHelper.spatialReference),(0,d.B8)(D,B),(0,b.Ie)(j);for(const{x0:s,x1:r,y0:n,y1:a}of R)for(let o=0;o<5;o++){const h=o/4;A[0]=(0,c.Cc)(t[s],t[r],h),A[1]=(0,c.Cc)(t[n],t[a],h),A[2]=i,(0,v.F)(A,e,A,this._renderCoordsHelper.spatialReference),(0,u.t)(A,A,D),(0,b.iT)(j,A)}(0,u.i)(this._extent[0].origin,j[0],j[1],j[2]),(0,u.i)(this._extent[1].origin,j[3],j[1],j[2]),(0,u.i)(this._extent[2].origin,j[3],j[4],j[2]),(0,u.i)(this._extent[3].origin,j[0],j[4],j[2]);for(let s=0;s<4;++s)(0,u.t)(this._extent[s].origin,this._extent[s].origin,B)}_toRenderBoundingExtentLocal(t,e,i){(0,y.S)(t,e,V,this._renderCoordsHelper.spatialReference),(0,u.i)(this._extent[0].origin,V[0],V[1],i),(0,u.i)(this._extent[1].origin,V[2],V[1],i),(0,u.i)(this._extent[2].origin,V[2],V[3],i),(0,u.i)(this._extent[3].origin,V[0],V[3],i)}_toRenderBoundingExtent(t,e,i){switch(this._renderCoordsHelper.viewingMode){case C.RT.Global:this._toRenderBoundingExtentGlobal(t,e,i);break;case C.RT.Local:this._toRenderBoundingExtentLocal(t,e,i);break;default:(0,l.Xb)(this._renderCoordsHelper.viewingMode)}}_isVisibleInFrustumGlobal(t){if((0,m.mN)(t.planes[S.FB.NEAR],this._center.origin)<0&&(0,u.f)(this._center.direction,t.direction)<0)return!0;for(let e=0;e<4;e++){const i=this._extent[e];if((0,m.mN)(t.planes[S.FB.NEAR],i.origin)<0&&(0,u.f)(i.direction,t.direction)<0)return!0}return!1}}const R=[{x0:0,y0:1,x1:2,y1:1},{x0:0,y0:3,x1:2,y1:3},{x0:0,y0:1,x1:0,y1:3},{x0:2,y0:1,x1:2,y1:3}],A=(0,_.vt)(),B=(0,p.vt)(),D=(0,p.vt)(),j=(0,b.vt)(),V=(0,f.vt)(),F=(0,x.vt)();var k=i(59752),M=i(22856);let N=class extends r.A{constructor(t){super(t),this.suspended=!1,this._extent=null,this._extentIntersectionDirty=!0,this._isVisibleBelowSurfaceInternal=!1,this.graphicsCoreOwner=null,this.updating=!0}initialize(){const{graphicsCoreOwner:t}=this;this._extentIntersection=new O({renderCoordsHelper:t.view.renderCoordsHelper});const e=t.view,i=e.basemapTerrain,s=e.resourceController.scheduler;this.addHandles([e.on("resize",(()=>this._viewChange())),(0,n.wB)((()=>e.state.camera),(()=>this._viewChange()),n.OH),s.registerTask(k.W6.FRUSTUM_VISIBILITY,this),(0,n.wB)((()=>i.visibleElevationBounds),(()=>this._elevationBoundsChange()))]),"local"===e.viewingMode?this._isVisibleBelowSurface=!0:this.addHandles([(0,n.wB)((()=>[i.baseOpacity,i.wireframe,e.map?.ground?.navigationConstraint?.type]),(()=>this._updateIsVisibleBelowSurface()),n.Vh)])}destroy(){this._set("graphicsCoreOwner",null),this._extent=null,this._extentIntersection=null}_setDirty(){this.updating||this._set("updating",!0)}setExtent(t){this._extent=t,this._extentIntersectionDirty=!0,this._setDirty()}_viewChange(){this._setDirty()}_elevationBoundsChange(){this._setDirty(),this._extentIntersectionDirty=!0}set _isVisibleBelowSurface(t){this._isVisibleBelowSurfaceInternal=t,this._setDirty(),this._extentIntersectionDirty=!0}_updateIsVisibleBelowSurface(){const t=this.graphicsCoreOwner.view,e=t.basemapTerrain,i="local"===t.viewingMode,s="none"===t.map.ground?.navigationConstraint?.type;this._isVisibleBelowSurface=i||!e.opaque||s}_updateExtentIntersection(){if(!this._extentIntersectionDirty)return;this._extentIntersectionDirty=!1;const t=this.graphicsCoreOwner.view;let e;if(this._isVisibleBelowSurfaceInternal)e=-.3*(0,h.tO)(t.spatialReference).radius;else{const{min:i,max:s}=t.basemapTerrain.visibleElevationBounds;e=i-Math.max(1,(s-i)*(1.2-1))}this._extentIntersection.update(this._extent,t.spatialReference,e)}get running(){return this.updating}runTask(t){if(this._set("updating",!1),!this._extent)return this._set("suspended",!1),M.G;this._updateExtentIntersection();const e=this.graphicsCoreOwner.view.frustum,i=(0,h.tO)(this.graphicsCoreOwner.view.spatialReference).radius;this._set("suspended",!this._extentIntersection.isVisibleInFrustum(e,i)),t.madeProgress()}};(0,s._)([(0,a.MZ)({readOnly:!0})],N.prototype,"suspended",void 0),(0,s._)([(0,a.MZ)({constructOnly:!0})],N.prototype,"graphicsCoreOwner",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],N.prototype,"updating",void 0),N=(0,s._)([(0,o.$)("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],N)},90592:(t,e,i)=>{i.d(e,{w:()=>g});var s=i(54901),r=(i(81806),i(83490));class n{}class a extends n{constructor(t,e){super(),this.objectStateId=t,this.object=e}remove(){this.object.removeStateID(this.objectStateId)}}class o extends n{constructor(t,e,i){super(),this.objectStateId=t,this.object=e,this.owner=i}remove(){this.owner.removeRenderGeometryObjectState(this.object,this.objectStateId)}}class h extends n{constructor(t,e){super(),this.objectStateId=t,this._removeCallback=e,this.object=null}remove(){this._removeCallback(this.objectStateId)}}class l{constructor(){this._items=[]}addObject(t,e){this._items.push(new a(e,t))}addRenderGeometry(t,e,i){this._items.push(new o(e,t,i))}addExternal(t,e){this._items.push(new h(e,t))}remove(t){this._remove((e=>e.objectStateId===t))}removeByObject(t){this._remove((e=>e.object===t))}removeAll(){this._items.forEach((t=>t.remove())),this._items=[]}_remove(t){const{_items:e}=this;for(let i=e.length-1;i>=0;--i){const s=e[i];t(s)&&(s.remove(),e.splice(i,1))}}}class c extends l{constructor(){super(...arguments),this.stateType=r.Mg.MaskOccludee}}class d extends l{constructor(t){super(),this.highlightGroupName=t,this.stateType=r.Mg.Highlight}}class p{constructor(t){this.objectIdField=t,this.ids=new Set,this.paused=!1}hasGraphic(t){const e=this.objectIdField?t.graphic.attributes[this.objectIdField]:t.graphic.uid;return this.ids.has(e)}}class u extends p{constructor(t){super(t),this.stateType=r.Mg.MaskOccludee,this.objectStateSet=new c}}class _ extends p{constructor(t,e){super(e),this.highlightGroupName=t,this.stateType=r.Mg.Highlight,this.objectStateSet=new d(t)}}class g{constructor(t){this._graphicsCore=t,this._stateSets=new Array}destroy(){this.reset(),this._stateSets=null}reset(){this._stateSets&&(this._stateSets.forEach((t=>t.objectStateSet.removeAll())),this._stateSets.length=0)}acquireOccludeeSet(t){const e=new u(t);this._stateSets.push(e);const i=(0,s.hA)((()=>this.releaseSet(e)));return{set:e,handle:i}}acquireHighlightSet(t,e){const i=new _(t,e);this._stateSets.push(i);const r=(0,s.hA)((()=>this.releaseSet(i)));return{set:i,handle:r}}releaseSet(t){t.objectStateSet.removeAll();const e=this._stateSets?this._stateSets.indexOf(t):-1;-1!==e&&this._stateSets.splice(e,1)}setUid(t,e){t.ids.add(e);const i=this._graphicsCore.graphics3DGraphics.get(e);i&&i.addObjectStateSet(t.objectStateSet)}setUids(t,e){e.forEach((e=>this.setUid(t,e)))}setObjectIds(t,e){e.forEach((e=>t.ids.add(e))),this._initializeSet(t)}addGraphic(t){this._stateSets.forEach((e=>{!e.paused&&e.hasGraphic(t)&&t.addObjectStateSet(e.objectStateSet)}))}removeGraphic(t){this._stateSets.forEach((e=>{e.hasGraphic(t)&&t.removeObjectState(e.objectStateSet)}))}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach((t=>t.objectStateSet.removeAll()))}_initializeSet(t){const e=this._graphicsCore.graphics3DGraphics;t.objectIdField?e.forEach((e=>{e&&t.hasGraphic(e)&&e.addObjectStateSet(t.objectStateSet)})):t.ids.forEach((i=>{const s=e.get(i);s&&s.addObjectStateSet(t.objectStateSet)}))}get test(){}}}}]);
//# sourceMappingURL=3046.03989858.chunk.js.map