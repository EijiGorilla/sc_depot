/*! For license information please see 6577.e5c7673c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[6577],{66577:(t,e,o)=>{o.r(e),o.d(e,{CalciteRadioButtonGroup:()=>l,defineCustomElement:()=>r});var s=o(82108),i=o(6676),a=o(76527);const n=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRadioButtonGroupChange=(0,s.lh)(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=(0,i.c)("mutation",(()=>this.passPropsToRadioButtons())),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find((t=>t.checked))||null,this.radioButtons.length>0&&this.radioButtons.forEach((t=>{t.disabled=this.disabled||t.disabled,t.hidden=this.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale}))},this.disabled=!1,this.hidden=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.radioButtons=[]}onDisabledChange(){this.passPropsToRadioButtons()}onHiddenChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){var t;this.passPropsToRadioButtons(),null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){(0,a.a)(this)}componentDidLoad(){(0,a.s)(this)}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}getFocusableRadioButton(){var t;return null!==(t=this.radioButtons.find((t=>!t.disabled)))&&void 0!==t?t:null}async setFocus(){return await(0,a.c)(this),this.selectedItem&&!this.selectedItem.disabled?this.selectedItem.setFocus():this.radioButtons.length>0?null===(t=this.getFocusableRadioButton())||void 0===t?void 0:t.setFocus():void 0;var t}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return(0,s.h)(s.xr,{role:"radiogroup"},(0,s.h)("slot",null))}get el(){return this}static get watchers(){return{disabled:["onDisabledChange"],hidden:["onHiddenChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return":host{display:flex;max-inline-size:100vw}:host([layout=horizontal]){flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s]){gap:1rem}:host([layout=horizontal][scale=m]){gap:1.25rem}:host([layout=horizontal][scale=l]){gap:1.5rem}:host([layout=vertical]){flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-radio-button-group",{disabled:[516],hidden:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-radio-button-group"].forEach((t=>{if("calcite-radio-button-group"===t)customElements.get(t)||customElements.define(t,n)}))}d();const l=n,r=d}}]);
//# sourceMappingURL=6577.e5c7673c.chunk.js.map