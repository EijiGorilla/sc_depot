"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[8320],{37546:(e,t,r)=>{r.d(t,{P:()=>y});var s=r(50076),i=r(53514),o=r(24387),n=r(90534),a=r(49723),l=r(19258),p=r(49140),d=r(46053),u=r(95474),c=r(79453);function y(e){const t=e?.origins??[void 0];return(r,s)=>{const i=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const s=(0,l.z4)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,c.r)(e,t,r);return s.type===String?i:"function"==typeof s.type?new s.type({url:i}):void 0},write:{writer(t,i,a,l){if(!l?.resources)return"string"==typeof t?void(i[a]=(0,c.t)(t,l)):void(i[a]=t.write({},l));const d=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,c.t)(d,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),g=s.type!==String&&(!(0,o.H)(this)||l?.origin&&this.originIdOf(r)>(0,p.aB)(l.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:i,targetPropertyName:a,context:l,params:e};l?.portalItem&&y&&!(0,n.oP)(y)?g&&e?.contentAddressed?h(v):g?function(e){const{context:t,targetUrl:r,params:s,value:i,dest:o,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),p=m(i,r,t),d=(0,u.n)(p),c=(0,n.Zo)(l.path),y=s?.compress??!1;d===c?(t.resources&&f({...e,resource:l,content:p,compress:y,updates:t.resources.toUpdate}),o[a]=r):h(e)}(v):function(e){let{context:t,targetUrl:r,dest:s,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),s[i]=r)}(v):l?.portalItem&&(null==y||null!=(0,c.i)(y)||(0,n.w8)(y)||g)?h(v):i[a]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.b;return{read:e,write:t}}}}(e,r,s);for(const e of t){const t=(0,d.rM)(r,e,s);for(const e in i)t[e]=i[e]}}}function h(e){const{targetUrl:t,params:r,value:o,context:l,dest:p,targetPropertyName:d}=e;if(!l.portalItem)return;const y=(0,c.p)(t),h=m(o,t,l);if(r?.contentAddressed&&"json"!==h.type)return void l.messages?.push(new s.A("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${h.type} with content addressing. Content addressing is only supported for json resources.`,{content:h}));const g=r?.contentAddressed&&"json"===h.type?(0,i.d)(h.jsonString):y?.filename??(0,a.lk)(),v=(0,n.fj)(r?.prefix??y?.prefix,g),w=`${v}.${(0,u.n)(h)}`;if(r?.contentAddressed&&l.resources&&"json"===h.type){const e=l.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===w}))??l.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===w}));if(e)return void(p[d]=e.resource.itemRelativeUrl)}const b=l.portalItem.resourceFromPath(w);(0,n.w8)(t)&&l.resources&&l.resources.pendingOperations.push((0,n.tk)(t).then((e=>{b.path=`${v}.${(0,u.n)({type:"blob",blob:e})}`,p[d]=b.itemRelativeUrl})).catch((()=>{})));const I=r?.compress??!1;l.resources&&f({...e,resource:b,content:h,compress:I,updates:l.resources.toAdd}),p[d]=b.itemRelativeUrl}function f(e){let{object:t,propertyName:r,updates:s,resource:i,content:o,compress:n}=e;s.push({resource:i,content:o,compress:n,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function m(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},48320:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var s=r(35143),i=r(39356),o=r(16868),n=(r(63844),r(14873),r(47662),r(72690),r(86946),r(71832),r(5766),r(35039),r(86616),r(31382)),a=r(69098),l=r(19276),p=r(50076),d=r(76460),u=r(77717),c=r(50346),y=r(68134),h=r(46053),f=(r(81806),r(47249),r(39314)),m=r(28379),g=r(85842),v=r(49140),w=r(23141),b=r(19247),I=r(25515),_=r(45652),A=r(12406),L=r(19502),F=r(31362),S=r(61979),x=r(11270),j=r(94729),M=r(5682),T=r(90260),O=r(78817),P=r(82111),E=r(53666),Z=r(42553),R=r(53430);function D(e){let{associatedLayer:t,serviceUpdateTimeStamp:r}=e;const s=t?.editingInfo?.lastEditDate,i=t?.serverGens,o=null!=s,n=null!=r,a=o&&n&&r.lastUpdate!==s.getTime();return o&&(a||!n&&i?.minServerGen!==i?.serverGen)}var U=r(83982);const N=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const e=this.associatedLayer?.timeInfo;if(null==e)return null;const t=e.clone();return(0,R.sv)(t,this.fieldsIndex),t}set timeInfo(e){(0,R.sv)(e,this.fieldsIndex),this._override("timeInfo",e)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(e){this._override("timeExtent",e)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(e){this._override("timeOffset",e)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(e){this._override("datesInUnknownTimezone",e)}async loadTimeInfoFromService(e){const{serviceTimeInfo:t}=this;if(null==t)return;const{startTimeField:r,endTimeField:s}=t;if(null==r&&null==s)return;if(D({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const i=async t=>{let s=null;try{const r=await(this.fetchStatistics?.(t,e));s=r?.stats}catch{}if(null==s)return null;const{minTimeStr:i,min:o,maxTimeStr:n,max:a}=s,l=t===r?i??o:n??a;return null!=l?new Date(l):null},[o,n]=await Promise.all([i(r),i(s)]);if(null!=r&&null==o||null!=s&&null==n)return;const a=new P.A({start:o,end:n});this.setAtOrigin("timeInfo",new U.A({endField:s,startField:r,fullTimeExtent:a}),"service")}};return(0,s._)([(0,h.MZ)({type:U.A,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),(0,s._)([(0,h.MZ)({type:P.A,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),(0,s._)([(0,h.MZ)({type:E.A,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),(0,s._)([(0,h.MZ)({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),(0,s._)([(0,h.MZ)({type:$,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=(0,s._)([(0,g.$)("esri.layers.mixins.TemporalSceneLayer")],t),t};let $=class extends Z.oY{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};(0,s._)([(0,h.MZ)({type:String})],$.prototype,"endTimeField",void 0),(0,s._)([(0,h.MZ)({type:String})],$.prototype,"startTimeField",void 0),$=(0,s._)([(0,g.$)("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],$);var q=r(13096),C=r(39323),G=r(16981),k=r(95363),V=r(91447),Q=r(80524),z=r(89672),W=r(76350),K=r(1900),J=r(2395),H=r(19463),Y=r(71401),B=r(27937),X=r(5618),ee=r(62487);let te=class extends Z.oY{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,s._)([(0,h.MZ)({type:String,json:{read:!0,write:!0}})],te.prototype,"name",void 0),(0,s._)([(0,h.MZ)({type:String,json:{read:!0,write:!0}})],te.prototype,"field",void 0),(0,s._)([(0,h.MZ)({type:[Number],json:{read:!0,write:!0}})],te.prototype,"currentRangeExtent",void 0),(0,s._)([(0,h.MZ)({type:[Number],json:{read:!0,write:!0}})],te.prototype,"fullRangeExtent",void 0),(0,s._)([(0,h.MZ)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],te.prototype,"type",void 0),te=(0,s._)([(0,g.$)("esri.layers.support.RangeInfo")],te);var re,se=r(3825),ie=r(53084),oe=r(37546),ne=r(62754),ae=r(65215),le=r(9624);let pe=re=class extends((0,Z.Te)(l.A.ofType(ae.A))){constructor(e){super(e)}clone(){return new re(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,le.canProjectWithoutEngine)(r.spatialReference,t))return e?.messages&&e.messages.push(new ne.A("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new ae.A;(0,le.projectPolygon)(r,s,t),r=s}const s=r.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new ne.A("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new re;return e.forEach((e=>r.add(ae.A.fromJSON(e,t)))),r}};pe=re=(0,s._)([(0,g.$)("esri.layers.support.PolygonCollection")],pe);const de=pe;var ue,ce=r(79453);let ye=ue=class extends Z.oY{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new de,this._geometriesSource=null}initialize(){this.addHandles((0,y.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),y.OH))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=de.fromJSON(e,r):this._geometriesSource={url:(0,ce.f)(e,r),context:r}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:r,context:s}=this._geometriesSource,i=await(0,se.A)(r,{responseType:"json",signal:t?.signal}),o=e.toJSON(),n=i.data.map((e=>({...e,spatialReference:o})));this.geometries=de.fromJSON(n,s),this._geometriesSource=null}clone(){const e=new ue({geometries:(0,ie.o8)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};(0,s._)([(0,h.MZ)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],ye.prototype,"spatialRelationship",void 0),(0,s._)([(0,h.MZ)({type:de,nonNullable:!0,json:{write:!0}}),(0,oe.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],ye.prototype,"geometries",void 0),(0,s._)([(0,m.w)(["web-scene","portal-item"],"geometries")],ye.prototype,"readGeometries",null),ye=ue=(0,s._)([(0,g.$)("esri.layers.support.SceneFilter")],ye);const he=ye;var fe=r(90534);var me=r(81589),ge=r(97015),ve=r(12482),we=r(31111),be=r(30973);async function Ie(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(_e(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function _e(e){const{BlobReader:t,ZipReader:s,BlobWriter:i}=await r.e(5795).then(r.bind(r,85795)),o=[],n=new s(new t(e));return(await n.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new i,r=e.getData?.(t).then((t=>new File([t],e.filename)));r&&o.push(r)})),Promise.all(o)}var Ae=r(74279),Le=r(2257),Fe=r(2183);const Se=new Set(["3DObject","Point"]),xe=(0,W.p)();let je=class extends(N((0,S.w6)((0,T.w6)((0,L.b)((0,x.q)((0,j.A)((0,M.j)((0,u.P)((0,F.d)((0,A.p)((0,a.O)(I.A)))))))))))){constructor(){super(...arguments),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new l.A,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new K.A(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:J.W4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&(0,V.C$)(this.associatedLayer)}get geometryType(){return Te[this.profile]||"mesh"}set renderer(e){(0,R.yp)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:G.P;const{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsRollbackOnFailure:i,supportsUploadWithItemId:o,supportsGeometryUpdate:n,supportsReturnServiceEditsInSourceSpatialReference:a},data:{supportsZ:l,supportsM:p,isVersioned:d,supportsAttachment:u},operations:{supportsEditing:c,supportsAdd:y,supportsUpdate:h,supportsDelete:f,supportsQuery:m,supportsQueryAttachments:g,supportsAsyncConvert3D:v}}=e,w=e.operations.supportsChangeTracking,b=!!this.associatedLayer?.infoFor3D&&(0,we.Vo)();return{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsReturnServiceEditsInSourceSpatialReference:a,supportsRollbackOnFailure:i,supportsGeometryUpdate:b&&n,supportsUploadWithItemId:o},data:{supportsAttachment:u,supportsZ:l,supportsM:p,isVersioned:d},operations:{supportsQuery:m,supportsQueryAttachments:g,supportsEditing:c&&w,supportsAdd:b&&y&&w,supportsDelete:b&&f&&w,supportsUpdate:h&&w,supportsAsyncConvert3D:v}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return null!=r&&Me[r]?Me[r]:(d.A.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(c.QP),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await(0,me.L)(this,{origin:"service"},t),(0,R.yp)(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){d.A.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new ge.A;return"mesh"===this.geometryType?this.associatedLayer?.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p.A("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p.A("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=(0,R.hL)(this.fieldsIndex,await(0,Le.TO)(this,(0,Le.D8)(this)));return(0,Ae.s1)(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new p.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new i.A;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(d.A.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,be.tn)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p.A("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p.A("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(T.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(T.Xh.SAVE,e)}async applyEdits(e,t){const{applyEdits:s}=await r.e(2229).then(r.bind(r,54610));let i=t;await this.load();const o=this.associatedLayer;if(!o)throw new p.A(`${this.type}-layer:not-editable`,"Service is not editable");await o.load();const{globalIdField:n}=o,a=!!o.infoFor3D,l=i?.globalIdUsed??!0;if(a&&null==n)throw new p.A(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(a&&!l)throw new p.A(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return(0,q.Wo)(o.url)&&a&&null!=e.deleteFeatures&&null!=n&&(i={...i,globalIdToObjectId:await(0,V.GA)(o,e.deleteFeatures,n)}),s(this,o.source,e,i)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new p.A(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const r=e=>{throw d.A.getLogger(this).error(".convertMesh()",e.message),e};await this.load(),this.infoFor3D||r(new p.A("invalid:layer","SceneLayer has no capability for mesh conversion"));const s=await this.extractAndFilterFiles(e),i=s.reduce(((e,t)=>(0,H.oF)(this.infoFor3D,t)?e+1:e),0);0===i&&r(new _.VP),i>1&&r(new _.XQ);const o=this.spatialReference,n=t?.location??new b.A({x:0,y:0,z:0,spatialReference:o}),a=n.spatialReference.isGeographic?"local":"georeferenced",l=w.A.createWithExternalSource(n,s,{vertexSpace:a}),[u]=await this.uploadAssets([l],t);return u}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await Ie(e)).filter((e=>(0,H.fu)(t,e))):e}validateLayer(e){if(e.layerType&&!Se.has(e.layerType))throw new p.A("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,s=!1;if(null==e)r=!0,s=!0;else{const i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,s=i;break;case"vertex-reference-frame":r=!0,s=!i;break;default:r=!1}}if(!r)throw new p.A("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new p.A("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.A("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some((t=>t.name===e.name)),r=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=(0,f.oY)(this);for(let r=0;r<e.length;r++){const s=e[r],i=this.originIdOf(s),o=this.associatedLayer.originIdOf(s);i<o&&(o===v.Gr.SERVICE||o===v.Gr.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],o)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");(0,we.Vo)()&&null!=this.associatedLayer?.infoFor3D&&e&&(0,q.Wo)(this.associatedLayer?.url)&&D(this)&&(0,f.oY)(this).setAtOrigin("fullExtent",e.clone(),v.Gr.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:s}=await(0,C.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),i=await ee.S.FeatureLayer();this.associatedLayer=new i({url:t,customParameters:this.customParameters,layerId:r,portalItem:s}),await this.associatedLayer.load()}catch(_e){(0,c.zf)(_e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,y.C_)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?d.A.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):d.A.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&(0,ve.XF)(d.A.getLogger(this),(0,ve.$7)("Mesh scene layers","relative-to-scene",e)),(0,ve.XF)(d.A.getLogger(this),(0,ve.tW)("Scene layers",e))}async fetchStatistics(e,t){return await async function(e){let{fieldName:t,statisticsInfo:r,errorContext:s,fieldsIndex:i,path:o,customParameters:n,apiKey:a,signal:l}=e;if(null==r)throw new p.A(`${s}:no-cached-statistics`,"Cached statistics are not available for this layer");const d=i.get(t);if(null==d)throw new p.A(`${s}:field-unexisting`,`Field '${t}' does not exist on the layer`);const u=r.find((e=>e.name===d.name));if(null==u)throw new p.A(`${s}:no-cached-statistics`,"Cached statistics for this attribute are not available");const c=(0,fe.fj)(o,u.href),{data:y}=await(0,se.A)(c,{query:{f:"json",...n,token:a},responseType:"json",signal:l});return y}({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};(0,s._)([(0,h.MZ)({types:{key:"type",base:Q.c,typeMap:{selection:z.A}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],je.prototype,"featureReduction",void 0),(0,s._)([(0,h.MZ)({type:[te],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],je.prototype,"rangeInfos",void 0),(0,s._)([(0,h.MZ)({json:{read:!1}})],je.prototype,"associatedLayer",void 0),(0,s._)([(0,h.MZ)({type:["show","hide"]})],je.prototype,"listMode",void 0),(0,s._)([(0,h.MZ)({type:["ArcGISSceneServiceLayer"]})],je.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.MZ)({json:{read:!1},readOnly:!0})],je.prototype,"type",void 0),(0,s._)([(0,h.MZ)({...xe.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],je.prototype,"fields",void 0),(0,s._)([(0,h.MZ)()],je.prototype,"types",null),(0,s._)([(0,h.MZ)()],je.prototype,"typeIdField",null),(0,s._)([(0,h.MZ)()],je.prototype,"templates",null),(0,s._)([(0,h.MZ)()],je.prototype,"formTemplate",null),(0,s._)([(0,h.MZ)({readOnly:!0,clonable:!1})],je.prototype,"fieldsIndex",null),(0,s._)([(0,h.MZ)({type:X.A,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],je.prototype,"floorInfo",void 0),(0,s._)([(0,h.MZ)(xe.outFields)],je.prototype,"outFields",void 0),(0,s._)([(0,h.MZ)({type:J.W4,readOnly:!0,json:{read:!1}})],je.prototype,"nodePages",void 0),(0,s._)([(0,m.w)("service","nodePages",["nodePages","pointNodePages"])],je.prototype,"readNodePages",null),(0,s._)([(0,h.MZ)({type:[J.uV],readOnly:!0})],je.prototype,"materialDefinitions",void 0),(0,s._)([(0,h.MZ)({type:[J.Ot],readOnly:!0})],je.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,h.MZ)({type:[J.L0],readOnly:!0})],je.prototype,"geometryDefinitions",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],je.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],je.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],je.prototype,"statisticsInfo",void 0),(0,s._)([(0,h.MZ)({type:l.A.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],je.prototype,"excludeObjectIds",void 0),(0,s._)([(0,h.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],je.prototype,"definitionExpression",void 0),(0,s._)([(0,h.MZ)({type:he,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],je.prototype,"filter",void 0),(0,s._)([(0,h.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],je.prototype,"path",void 0),(0,s._)([(0,h.MZ)(k.Yj)],je.prototype,"elevationInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0,json:{read:!1}})],je.prototype,"effectiveCapabilities",null),(0,s._)([(0,h.MZ)({readOnly:!0})],je.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,h.MZ)({type:String})],je.prototype,"geometryType",null),(0,s._)([(0,h.MZ)(k.kF)],je.prototype,"labelsVisible",void 0),(0,s._)([(0,h.MZ)({type:[Y.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:B.w},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:B.w},write:!0}})],je.prototype,"labelingInfo",void 0),(0,s._)([(0,h.MZ)(k.fV)],je.prototype,"legendEnabled",void 0),(0,s._)([(0,h.MZ)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,Fe.D)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],je.prototype,"opacity",void 0),(0,s._)([(0,h.MZ)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],je.prototype,"priority",void 0),(0,s._)([(0,h.MZ)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],je.prototype,"semantic",void 0),(0,s._)([(0,h.MZ)({types:n.X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],je.prototype,"renderer",null),(0,s._)([(0,h.MZ)({json:{read:!1}})],je.prototype,"cachedDrawingInfo",void 0),(0,s._)([(0,m.w)("service","cachedDrawingInfo")],je.prototype,"readCachedDrawingInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0,json:{read:!1}})],je.prototype,"capabilities",null),(0,s._)([(0,h.MZ)({type:Boolean,json:{read:!1}})],je.prototype,"editingEnabled",null),(0,s._)([(0,h.MZ)({readOnly:!0,json:{write:!1,read:!1}})],je.prototype,"infoFor3D",null),(0,s._)([(0,h.MZ)({readOnly:!0,json:{write:!1,read:!1}})],je.prototype,"relationships",null),(0,s._)([(0,h.MZ)(k.M6)],je.prototype,"popupEnabled",void 0),(0,s._)([(0,h.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],je.prototype,"popupTemplate",void 0),(0,s._)([(0,h.MZ)({readOnly:!0,json:{read:!1}})],je.prototype,"defaultPopupTemplate",null),(0,s._)([(0,h.MZ)({type:String,json:{read:!1}})],je.prototype,"objectIdField",void 0),(0,s._)([(0,m.w)("service","objectIdField",["objectIdField","fields"])],je.prototype,"readObjectIdField",null),(0,s._)([(0,h.MZ)({type:String,json:{read:!1}})],je.prototype,"globalIdField",void 0),(0,s._)([(0,m.w)("service","globalIdField",["globalIdField","fields"])],je.prototype,"readGlobalIdField",null),(0,s._)([(0,h.MZ)({readOnly:!0,type:String,json:{read:!1}})],je.prototype,"displayField",null),(0,s._)([(0,h.MZ)({type:String,json:{read:!1}})],je.prototype,"profile",void 0),(0,s._)([(0,m.w)("service","profile",["store.profile"])],je.prototype,"readProfile",null),(0,s._)([(0,h.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],je.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,h.MZ)(k.PY)],je.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,h.MZ)({json:{read:!1,origins:{service:{read:!0}}}})],je.prototype,"serviceItemId",void 0),(0,s._)([(0,h.MZ)(O.B)],je.prototype,"useViewTime",null),je=(0,s._)([(0,g.$)("esri.layers.SceneLayer")],je);const Me={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Te={"mesh-pyramids":"mesh",points:"point"},Oe=je},45652:(e,t,r)=>{r.d(t,{$1:()=>p,H2:()=>y,MT:()=>h,VP:()=>f,WF:()=>d,Wt:()=>n,XQ:()=>m,hK:()=>c,nS:()=>u,uh:()=>a,xY:()=>l});var s=r(50076);const i="upload-assets",o=()=>new Error;class n extends s.A{constructor(){super(`${i}:unsupported`,"Layer does not support asset uploads.",o())}}class a extends s.A{constructor(){super(`${i}:no-glb-support`,"Layer does not support glb.",o())}}class l extends s.A{constructor(){super(`${i}:no-supported-source`,"No supported external source found",o())}}class p extends s.A{constructor(){super(`${i}:not-base-64`,"Expected gltf data in base64 format after conversion.",o())}}class d extends s.A{constructor(){super(`${i}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",o())}}class u extends s.A{constructor(e,t){super(`${i}:bad-response`,`Bad response. Uploaded ${e} items and received ${t} results.`,o())}}class c extends s.A{constructor(e,t){super(`${i}-layer:upload-failed`,`Failed to upload mesh file ${e}. Error code: ${t?.code??"-1"}. Error message: ${t?.messages??"unknown"}`,o())}}class y extends s.A{constructor(e){super(`${i}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${e}, but it does not list it in its supported formats.`,o())}}class h extends s.A{constructor(){super(`${i}:convert3D-failed`,"convert3D failed.")}}class f extends s.A{constructor(){super("invalid-input:no-model","No supported model found")}}class m extends s.A{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}},19463:(e,t,r)=>{r.d(t,{E1:()=>a,Fm:()=>l,JZ:()=>f,R_:()=>n,fu:()=>i,oF:()=>o,rq:()=>p});const s=[["binary","application/octet-stream","bin",""]];function i(e,t){return null!=u(t.name,e?.supportedFormats??[])}function o(e,t){if(!e)return!1;const r=p(t,e.supportedFormats??[]);return null!=r&&e.editFormats.includes(r)}function n(e,t){return c(function(e,t){const r=e.toLowerCase();return d(t).find((e=>y(e)===r))}(e,t))}function a(e,t){return c(u(e,t))}function l(e,t){return y(function(e,t){return d(t).find((t=>c(t)===e))}(e,t))}function p(e,t){return a(e.name,t)??n(e.type,t)}function d(e){return[...s,...e]}function u(e,t){const r=e.toLowerCase();return d(t).find((e=>h(e).some((e=>r.endsWith(e)))))}function c(e){return e?.[0]}function y(e){return e?.[1].toLowerCase()}function h(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}function f(e){return e.tables?.find((e=>"assetMaps"===e.role))}},95474:(e,t,r)=>{r.d(t,{n:()=>i});var s=r(90534);function i(e){return o[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,s.Zo)(e);return l[t]||n}(e.url)}(e)]||a}const o={},n="text/plain",a=o[n],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in l)o[l[p]]=p}}]);
//# sourceMappingURL=8320.23022042.chunk.js.map