/*! For license information please see 6666.cc2d4ce5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[6666],{66666:(t,e,i)=>{i.r(e),i.d(e,{CalciteTabNav:()=>s,defineCustomElement:()=>n});var a=i(11816);const s=a.T,n=a.d},11816:(t,e,i)=>{i.d(e,{T:()=>o,d:()=>c});var a=i(82108),s=i(39879),n=i(6676);const l="tab-nav",o=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabChange=(0,a.lh)(this,"calciteTabChange",6),this.calciteInternalTabChange=(0,a.lh)(this,"calciteInternalTabChange",6),this.animationActiveDuration=.3,this.resizeObserver=(0,n.c)("resize",(()=>{this.activeIndicatorEl&&(this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition())})),this.handleTabFocus=(t,e,i)=>{(0,s.i)(this.enabledTabTitles,e,i),t.stopPropagation()},this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s",this.updateOffsetPosition()},this.storageId=void 0,this.syncId=void 0,this.selectedTitle=null,this.scale="m",this.layout="inline",this.position="bottom",this.bordered=!1,this.indicatorOffset=void 0,this.indicatorWidth=void 0,this.selectedTabId=void 0}async selectedTabIdChanged(){localStorage&&this.storageId&&void 0!==this.selectedTabId&&null!==this.selectedTabId&&localStorage.setItem("calcite-tab-nav-".concat(this.storageId),JSON.stringify(this.selectedTabId)),this.calciteInternalTabChange.emit({tab:this.selectedTabId}),this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration="".concat(this.animationActiveDuration,"s")}connectedCallback(){var t;this.parentTabsEl=this.el.closest("calcite-tabs"),null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}componentWillLoad(){const t="calcite-tab-nav-".concat(this.storageId);if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}}componentWillRender(){const{parentTabsEl:t}=this;this.layout=null===t||void 0===t?void 0:t.layout,this.bordered=null===t||void 0===t?void 0:t.bordered,this.selectedTitle&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every((t=>!t.selected))&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteInternalTabChange.emit({tab:t})}))}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const t=(0,s.b)(this.el),e="".concat(this.indicatorWidth,"px"),i="".concat(this.indicatorOffset,"px"),n="rtl"!==t?{width:e,left:i}:{width:e,right:i};return(0,a.h)(a.xr,{role:"tablist"},(0,a.h)("div",{class:{[l]:!0,["scale-".concat(this.scale)]:!0,["position-".concat(this.position)]:!0},onScroll:this.handleContainerScroll,ref:t=>this.tabNavEl=t},(0,a.h)("slot",null),(0,a.h)("div",{class:"tab-nav-active-indicator-container",ref:t=>this.activeIndicatorContainerEl=t},(0,a.h)("div",{class:"tab-nav-active-indicator",style:n,ref:t=>this.activeIndicatorEl=t}))))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation()}activateTabHandler(t){this.calciteTabChange.emit(),t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e),t.stopPropagation()}updateTabTitles(t){t.target.selected&&(this.selectedTabId=t.detail)}globalInternalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab&&(this.selectedTabId=t.detail.tab),t.stopPropagation()}iconStartChangeHandler(){this.updateActiveWidth(),this.updateOffsetPosition()}updateOffsetPosition(){var t,e,i,a,n;const l=(0,s.b)(this.el),o=null===(t=this.activeIndicatorContainerEl)||void 0===t?void 0:t.offsetWidth,c=null===(e=this.selectedTitle)||void 0===e?void 0:e.offsetLeft,d=o-(c+(null===(i=this.selectedTitle)||void 0===i?void 0:i.offsetWidth));this.indicatorOffset="rtl"!==l?c-(null===(a=this.tabNavEl)||void 0===a?void 0:a.scrollLeft):d+(null===(n=this.tabNavEl)||void 0===n?void 0:n.scrollLeft)}updateActiveWidth(){var t;this.indicatorWidth=null===(t=this.selectedTitle)||void 0===t?void 0:t.offsetWidth}getIndexOfTabTitle(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tabTitles).indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((e=>this.tabTitles[e.indexOf(t)]))}get tabTitles(){return(0,s.p)(this.el,"calcite-tab-title")}get enabledTabTitles(){return(0,s.p)(this.el,"calcite-tab-title:not([disabled])").filter((t=>!t.closed))}handleTabTitleClose(t){const{tabTitles:e}=this,i=e.reduce(((t,e,i)=>e.closed?t:[...t,i]),[]),a=i.length;if(1===a&&e[i[0]].closable)e[i[0]].closable=!1,this.selectedTabId=i[0];else if(a>1){const s=e.findIndex((e=>e===t)),n=i.find((t=>t>s));this.selectedTabId===s&&(this.selectedTabId=n||a-1)}requestAnimationFrame((()=>{this.updateOffsetPosition(),this.updateActiveWidth(),e[this.selectedTabId].focus()}))}get el(){return this}static get watchers(){return{selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"]}}static get style(){return":host{position:relative;display:flex}.scale-s{min-block-size:1.5rem}.scale-m{min-block-size:2rem}.scale-l{min-block-size:2.75rem}:host([layout=center]:not([bordered])){padding-inline:1.25rem}:host([layout=center]:not([bordered])) .tab-nav ::slotted(calcite-tab-title:last-child){margin-inline-end:0px}:host(:not([bordered])) .scale-l ::slotted(calcite-tab-title){margin-inline-end:1.5rem}:host(:not([bordered])) .scale-m ::slotted(calcite-tab-title){margin-inline-end:1.25rem}:host(:not([bordered])) .scale-s ::slotted(calcite-tab-title){margin-inline-end:1rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout=center]) .tab-nav{justify-content:space-evenly}:host .position-bottom .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host .position-bottom .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered]) .position-bottom .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tab-nav",{storageId:[513,"storage-id"],syncId:[513,"sync-id"],selectedTitle:[1040],scale:[1],layout:[1537],position:[1],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTabId:[32]},[[0,"calciteInternalTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteInternalTabsFocusNext","focusNextTabHandler"],[0,"calciteInternalTabsFocusFirst","focusFirstTabHandler"],[0,"calciteInternalTabsFocusLast","focusLastTabHandler"],[0,"calciteInternalTabsActivate","internalActivateTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteInternalTabsClose","internalCloseTabHandler"],[0,"calciteInternalTabTitleRegister","updateTabTitles"],[16,"calciteInternalTabChange","globalInternalTabChangeHandler"],[0,"calciteInternalTabIconChanged","iconStartChangeHandler"]]]);function c(){if("undefined"===typeof customElements)return;["calcite-tab-nav"].forEach((t=>{if("calcite-tab-nav"===t)customElements.get(t)||customElements.define(t,o)}))}c()}}]);
//# sourceMappingURL=6666.cc2d4ce5.chunk.js.map