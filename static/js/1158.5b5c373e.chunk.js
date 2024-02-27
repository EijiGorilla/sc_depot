/*! For license information please see 1158.5b5c373e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[1158],{58777:(e,t,i)=>{i.r(t),i.d(t,{CalciteInlineEditable:()=>w,defineCustomElement:()=>I});var n=i(82108),s=i(39879),a=i(65079),l=i(22943),c=i(76527),d=i(62785),o=i(6676),r=i(76988),h=i(75151),u=i(67294),b=i(26964);const g="wrapper",p="confirm-changes-button",E="cancel-editing-button",m="input-wrapper",f="cancel-editing-button-wrapper",v="enable-editing-button",C="controls-wrapper",y=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInlineEditableEditCancel=(0,n.lh)(this,"calciteInlineEditableEditCancel",6),this.calciteInlineEditableEditConfirm=(0,n.lh)(this,"calciteInlineEditableEditConfirm",6),this.calciteInternalInlineEditableEnableEditingChange=(0,n.lh)(this,"calciteInternalInlineEditableEnableEditingChange",6),this.mutationObserver=(0,o.c)("mutation",(()=>this.mutationObserverCallback())),this.enableEditing=()=>{var e,t;this.valuePriorToEditing=null===(e=this.inputElement)||void 0===e?void 0:e.value,this.editingEnabled=!0,null===(t=this.inputElement)||void 0===t||t.setFocus(),this.calciteInternalInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus(),!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.escapeKeyHandler=async e=>{var t;e.defaultPrevented||("Escape"===e.key&&(e.preventDefault(),this.cancelEditing()),"Tab"===e.key&&this.shouldShowControls&&(e.shiftKey||e.target!==this.inputElement||(e.preventDefault(),this.cancelEditingButton.setFocus()),e.shiftKey&&e.target===this.cancelEditingButton&&(e.preventDefault(),null===(t=this.inputElement)||void 0===t||t.setFocus())))},this.cancelEditingHandler=async e=>{e.preventDefault(),this.cancelEditing()},this.enableEditingHandler=async e=>{this.disabled||e.target===this.cancelEditingButton||e.target===this.confirmEditingButton||(e.preventDefault(),this.editingEnabled||this.enableEditing())},this.confirmChangesHandler=async e=>{e.preventDefault(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch(t){}finally{this.loading=!1}},this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.scale=void 0,this.afterConfirm=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0}disabledWatcher(e){this.inputElement&&(this.inputElement.disabled=e)}editingEnabledWatcher(e,t){this.inputElement&&(this.inputElement.editingEnabled=e),!e&&t&&(this.shouldEmitCancel=!0)}onMessagesChange(){}connectedCallback(){var e;(0,a.c)(this),(0,l.c)(this),(0,d.c)(this),(0,r.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.mutationObserverCallback()}async componentWillLoad(){(0,c.a)(this),await(0,r.s)(this)}componentDidLoad(){(0,c.s)(this)}disconnectedCallback(){var e;(0,a.d)(this),(0,l.d)(this),(0,d.d)(this),(0,r.d)(this),null===(e=this.mutationObserver)||void 0===e||e.disconnect()}componentDidRender(){(0,a.u)(this)}render(){return(0,n.h)("div",{class:g,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},(0,n.h)("div",{class:m},(0,n.h)("slot",null)),(0,n.h)("div",{class:C},(0,n.h)("calcite-button",{appearance:"transparent",class:v,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:e=>this.enableEditingButton=e}),this.shouldShowControls&&[(0,n.h)("div",{class:f},(0,n.h)("calcite-button",{appearance:"transparent",class:E,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:e=>this.cancelEditingButton=e})),(0,n.h)("calcite-button",{appearance:"solid",class:p,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:e=>this.confirmEditingButton=e})]))}blurHandler(){this.controls||this.disableEditing()}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}async setFocus(){var e;await(0,c.c)(this),null===(e=this.el)||void 0===e||e.focus()}mutationObserverCallback(){var e;this.updateSlottedInput(),this.scale=this.scale||(null===(e=this.inputElement)||void 0===e?void 0:e.scale)}onLabelClick(){this.setFocus()}updateSlottedInput(){const e=(0,s.g)(this.el,{matches:"calcite-input"});this.inputElement=e,e&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||(0,l.g)(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-inline-editable",{disabled:[516],editingEnabled:[1540,"editing-enabled"],loading:[1540],controls:[516],scale:[1537],afterConfirm:[16],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]},[[0,"calciteInternalInputBlur","blurHandler"]]]);function k(){if("undefined"===typeof customElements)return;["calcite-inline-editable","calcite-button","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-inline-editable":customElements.get(e)||customElements.define(e,y);break;case"calcite-button":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)();break;case"calcite-loader":customElements.get(e)||(0,b.d)()}}))}k();const w=y,I=k}}]);
//# sourceMappingURL=1158.5b5c373e.chunk.js.map