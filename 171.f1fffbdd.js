(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"taro_radio_core",(function(){return o})),n.d(t,"taro_radio_group_core",(function(){return r}));var i=n(48),o=function(){function e(e){var t=this;Object(i.g)(this,e),this.value="",this.checked=!1,this.handleClick=function(){t.checked||(t.checked=!0)},this.onChange=Object(i.d)(this,"radiochange",7)}return e.prototype.watchChecked=function(e){e&&this.onChange.emit({value:this.value})},e.prototype.watchId=function(e){e&&this.inputEl.setAttribute("id",e)},e.prototype.componentDidRender=function(){this.id&&this.el.removeAttribute("id")},e.prototype.render=function(){var e=this,t=this.checked,n=this.name,o=this.value;return Object(i.f)(i.a,{className:"weui-cells_checkbox",onClick:this.handleClick},Object(i.f)("input",{ref:function(t){t&&(e.inputEl=t,e.id&&t.setAttribute("id",e.id))},type:"radio",name:n,value:o,class:"weui-check",checked:t,onChange:function(e){return e.stopPropagation()}}),Object(i.f)("i",{class:"weui-icon-checked"}),Object(i.f)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{checked:["watchChecked"],id:["watchId"]}},enumerable:!0,configurable:!0}),e}(),r=function(){function e(e){Object(i.g)(this,e),this.uniqueName=Date.now().toString(36),this.onChange=Object(i.d)(this,"change",7)}return e.prototype.function=function(e){if(e.stopPropagation(),"TARO-RADIO-CORE"===e.target.tagName){var t=e.target;if(t.checked)this.el.querySelectorAll("taro-radio-core").forEach((function(e){e!==t&&(e.checked=!1)})),this.value=e.detail.value,this.onChange.emit({value:this.value})}},e.prototype.componentDidLoad=function(){var e=this;this.el.querySelectorAll("taro-radio-core").forEach((function(t){t.setAttribute("name",e.name||e.uniqueName)})),Object.defineProperty(this.el,"value",{get:function(){if(!e.value){var t=e.el.querySelectorAll("taro-radio-core");e.value=e.getValues(t)}return e.value},configurable:!0})},e.prototype.getValues=function(e){var t="";return Array.from(e).forEach((function(e){var n,i=e.querySelector("input");(null===(n=i)||void 0===n?void 0:n.checked)&&(t=i.value||"")})),t},e.prototype.render=function(){return Object(i.f)(i.a,{class:"weui-cells_radiogroup"})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),e}()}}]);