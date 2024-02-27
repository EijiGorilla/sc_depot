/*! For license information please see 8473.076d78ca.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[8473],{58473:(e,t,i)=>{i.r(t),i.d(t,{CalcitePickList:()=>b,defineCustomElement:()=>v});var s=i(82108),l=i(65079),a=i(76527),n=i(6676),c=i(65769),r=i(36780),o=i(36329),d=i(67294),h=i(81967),u=i(26964),m=i(1788),f=i(43901);const p=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListChange=(0,s.lh)(this,"calciteListChange",6),this.calciteListFilter=(0,s.lh)(this,"calciteListFilter",6),this.lastSelectedItem=null,this.mutationObserver=(0,n.c)("mutation",r.m.bind(this)),this.setFilterEl=e=>{this.filterEl=e},this.setFilteredItems=e=>{this.filteredItems=e},this.deselectRemovedItems=r.d.bind(this),this.deselectSiblingItems=r.a.bind(this),this.selectSiblings=r.s.bind(this),this.handleFilter=r.h.bind(this),this.handleFilterEvent=r.b.bind(this),this.getItemData=r.g.bind(this),this.keyDownHandler=r.k.bind(this),this.disabled=!1,this.filteredItems=[],this.filteredData=[],this.filterEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.headingLevel=void 0,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.selectedValues=new Map,this.dataForFilter=[]}connectedCallback(){r.i.call(this),r.c.call(this),(0,l.c)(this)}disconnectedCallback(){r.e.call(this),(0,l.d)(this)}componentWillLoad(){(0,a.a)(this)}componentDidLoad(){(0,a.s)(this),r.f.call(this)}componentDidRender(){(0,l.u)(this)}calciteListItemRemoveHandler(e){r.r.call(this,e)}calciteListItemChangeHandler(e){r.j.call(this,e)}calciteInternalListItemPropsChangeHandler(e){e.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(e){r.l.call(this,e),e.stopPropagation()}calciteListFocusOutHandler(e){r.n.call(this,e)}setUpItems(){r.o.call(this,"calcite-pick-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}async getSelectedItems(){return this.selectedValues}async setFocus(e){return await(0,a.c)(this),r.p.call(this,e)}getIconType(){return this.multiple?c.I.square:c.I.circle}render(){return(0,s.h)(r.L,{onKeyDown:this.keyDownHandler,props:this})}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index)}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-pick-list",{disabled:[516],filteredItems:[1040],filteredData:[1040],filterEnabled:[516,"filter-enabled"],filterPlaceholder:[513,"filter-placeholder"],filterText:[1537,"filter-text"],headingLevel:[514,"heading-level"],loading:[516],multiple:[516],selectionFollowsFocus:[516,"selection-follows-focus"],selectedValues:[32],dataForFilter:[32],getSelectedItems:[64],setFocus:[64]},[[0,"calciteListItemRemove","calciteListItemRemoveHandler"],[0,"calciteListItemChange","calciteListItemChangeHandler"],[0,"calciteInternalListItemPropsChange","calciteInternalListItemPropsChangeHandler"],[0,"calciteInternalListItemValueChange","calciteInternalListItemValueChangeHandler"],[0,"focusout","calciteListFocusOutHandler"]]]);function g(){if("undefined"===typeof customElements)return;["calcite-pick-list","calcite-filter","calcite-icon","calcite-input","calcite-loader","calcite-progress","calcite-scrim"].forEach((e=>{switch(e){case"calcite-pick-list":customElements.get(e)||customElements.define(e,p);break;case"calcite-filter":customElements.get(e)||(0,o.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-input":customElements.get(e)||(0,h.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-progress":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,f.d)()}}))}g();const b=p,v=g},65769:(e,t,i)=>{i.d(t,{C:()=>s,I:()=>l,S:()=>a});const s={sticky:"sticky-pos"};var l;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(l||(l={}));const a={menuActions:"menu-actions"}},9468:(e,t,i)=>{i.d(t,{C:()=>s,S:()=>l});const s={heading:"heading",container:"container",indented:"container--indented"},l={parentItem:"parent-item"}},36780:(e,t,i)=>{i.d(t,{L:()=>U,a:()=>S,b:()=>H,c:()=>u,d:()=>y,e:()=>m,f:()=>A,g:()=>T,h:()=>P,i:()=>h,j:()=>f,k:()=>b,l:()=>p,m:()=>o,n:()=>g,o:()=>C,p:()=>L,q:()=>I,r:()=>E,s:()=>V,t:()=>v});var s=i(29746),l=i(39879),a=i(9468),n=i(78588),c=i(82108),r=i(65769);function o(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const d=["ArrowUp","ArrowDown"];function h(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=(0,n.d)(w.bind(this),0),this.emitCalciteListFilter=(0,n.d)(k.bind(this),0)}function u(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}function m(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}function f(e){const{selectedValues:t}=this,{item:i,value:s,selected:a,shiftPressed:n}=e.detail;a?(this.multiple&&n&&this.selectSiblings(i),this.multiple||this.deselectSiblingItems(i),t.set(s,i)):(t.delete(s),this.multiple&&n&&this.selectSiblings(i,!0)),this.multiple||(x(i,a),a&&(0,l.k)(i)),this.lastSelectedItem=i,this.emitCalciteListChange()}function p(e){const t=e.detail.oldValue,i=this.selectedValues;if(i.has(t)){const s=i.get(t);i.delete(t),i.set(e.detail.newValue,s)}e.stopPropagation()}function g(e){const{el:t,items:i,multiple:s,selectedValues:l}=this;if(s)return;t.contains(e.relatedTarget)||F(i).forEach((t=>{x(t,0===l.size?t.contains(e.target)||e.target===t:t.selected)}))}function b(e){const{key:t,target:i}=e;if(!function(e){return!!d.find((t=>t===e))}(t))return;const{items:s,multiple:a,selectionFollowsFocus:n}=this,{length:c}=s,r=s.indexOf(i);if(!c||-1===r)return;e.preventDefault();const o=s[v(this,i,"ArrowUp"===t?"up":"down")];s.forEach((e=>x(e,e===o))),!a&&n&&(o.selected=!0),(0,l.k)(o)}function v(e,t,i){const{items:l}=e,{length:a}=l,n=l.indexOf(t),c="up"===i?-1:1;let r=1,o=(0,s.g)(n+c*r++,a);const d=o;for(;l[o].disabled&&(o=(0,s.g)(n+c*r++,a),o!==d););return o}function I(e,t){const{items:i}=e;return i.indexOf(t)}function F(e){return e.filter((e=>!e.disabled))}function k(){this.calciteListFilter.emit()}function w(){this.calciteListChange.emit(this.selectedValues)}function E(e){if(e.defaultPrevented)return;const t=e.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName&&t.slot===a.S.parentItem?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((e=>i.delete(e.value)))):(t.remove(),i.delete(t.value)),this.emitCalciteListChange()}function x(e,t){e.disabled||(t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1"))}async function L(e){if(this.filterEnabled&&"filter"===e)return void await(0,l.k)(this.filterEl);const{items:t,multiple:i,selectionFollowsFocus:s}=this;if(0===t.length)return;var a;if(i)return null===(a=F(t)[0])||void 0===a?void 0:a.setFocus();const n=F(t),c=n.find((e=>e.selected))||n[0];return s&&c&&(c.selected=!0),c.setFocus()}function C(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:i}=this;i.forEach((e=>{e.icon=this.getIconType(),this.multiple||(e.deselectDisabled=!0,x(e,!1)),e.selected&&(t=!0,x(e,!0),this.selectedValues.set(e.value,e))}));const[s]=i;t||!s||s.disabled||x(s,!0)}function y(){const e=this.selectedValues,t=this.items.map((e=>{let{value:t}=e;return t}));e.forEach((e=>{t.includes(e.value)||this.selectedValues.delete(e.value)}))}function S(e){this.items.forEach((t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))}))}function V(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.lastSelectedItem)return;const{items:i}=this,s=i.findIndex((e=>e.value===this.lastSelectedItem.value)),l=i.findIndex((t=>t.value===e.value));i.slice(Math.min(s,l),Math.max(s,l)).forEach((e=>{e.toggleSelected(!t),t?this.selectedValues.delete(e.value):this.selectedValues.set(e.value,e)}))}let D;function P(){var e;let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{filteredData:i,filterText:s}=this,a=i.map((e=>e.value));let n=!1;D||(D=new Set);const c=(null===(e=this.items)||void 0===e?void 0:e.filter((e=>{const t=e.parentElement;t.matches("calcite-pick-list-group")&&D.add(t);const i=!s||a.includes(e.value);return e.hidden=!i,n||(n=i&&e.selected),i})))||[];D.forEach((e=>{const t=c.some((t=>e.contains(t)));if(e.hidden=!t,!t)return;const i=(0,l.g)(e,"parent-item");i&&(i.hidden=!1,c.includes(i)&&Array.from(e.children).forEach((e=>e.hidden=!1)))})),D.clear(),c.length>0&&!n&&!this.multiple&&x(c[0],!0),this.setFilteredItems(c),t&&this.emitCalciteListFilter()}function A(){var e;const t=null===(e=this.filterEl)||void 0===e?void 0:e.filteredItems;t&&(this.filteredData=t),this.handleFilter()}function H(e){e.stopPropagation();const{filteredItems:t,value:i}=e.currentTarget;this.filterText=i,this.filteredData=t,this.handleFilter(!0)}function T(){return this.items.map((e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})))}const U=e=>{let{props:{disabled:t,loading:i,filterEnabled:s,dataForFilter:a,handleFilterEvent:n,filterPlaceholder:o,filterText:d,setFilterEl:h,dragEnabled:u,storeAssistiveEl:m},...f}=e;const p=(0,c.h)("slot",null);return(0,c.h)(c.xr,{"aria-busy":(0,l.t)(i),role:"menu",...f},(0,c.h)("section",null,u?(0,c.h)("span",{"aria-live":"assertive",class:"assistive-text",ref:m}):null,(0,c.h)("header",{class:{[r.C.sticky]:!0}},s?(0,c.h)("calcite-filter",{"aria-label":o,disabled:i||t,items:a,onCalciteFilterChange:n,placeholder:o,value:d,ref:h}):null,(0,c.h)("slot",{name:r.S.menuActions})),i?(0,c.h)("calcite-scrim",{loading:i}):null,p))}}}]);
//# sourceMappingURL=8473.076d78ca.chunk.js.map