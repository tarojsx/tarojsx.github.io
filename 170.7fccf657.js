(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{307:function(t,e,n){"use strict";n.r(e),n.d(e,"taro_input_core",(function(){return u}));var i=n(48);function o(t,e,n){if(!t)throw new Error("unexpected type");return"search"===e&&(t="search"),n&&(t="password"),"digit"===t&&(t="number"),t}function s(t){return null!=t?t:""}var u=function(){function t(t){var e=this;Object(i.g)(this,t),this.isOnComposition=!1,this.onInputExcuted=!1,this.type="text",this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.hanldeInput=function(t){t.stopPropagation();var n=e,i=n.type,s=n.maxlength,u=n.confirmType,r=n.password;if(!e.isOnComposition&&!e.onInputExcuted){var a=t.target.value,h=o(i,u,r);if(e.onInputExcuted=!0,"number"===h&&a&&s<=a.length&&(a=a.substring(0,s),t.target.value=a),!(["number","file"].indexOf(h)>=0)){var c=t.target.selectionEnd;setTimeout((function(){t.target.selectionStart=c,t.target.selectionEnd=c}))}e.onInput.emit({value:a,cursor:a.length})}},this.handleFocus=function(t){e.onInputExcuted=!1,e.onFocus.emit({value:t.target.value})},this.handleBlur=function(t){e.onBlur.emit({value:t.target.value})},this.handleChange=function(t){t.stopPropagation(),e.onChange.emit({value:t.target.value})},this.handleKeyDown=function(t){var n=t.target.value;e.onInputExcuted=!1,t.stopPropagation(),e.onKeyDown.emit({value:n}),13===t.keyCode&&e.onConfirm.emit({value:n})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(e.isOnComposition=!1,e.onInput.emit({value:t.target.value})):e.isOnComposition=!0)},this.onInput=Object(i.d)(this,"input",7),this.onFocus=Object(i.d)(this,"focus",7),this.onBlur=Object(i.d)(this,"blur",7),this.onConfirm=Object(i.d)(this,"confirm",7),this.onChange=Object(i.d)(this,"change",7),this.onKeyDown=Object(i.d)(this,"keydown",7)}return t.prototype.componentDidLoad=function(){var t=this;"file"===this.type?(this.fileListener=function(){t.onInput.emit()},this.inputRef.addEventListener("change",this.fileListener)):(this.inputRef.addEventListener("compositionstart",this.handleComposition),this.inputRef.addEventListener("compositionend",this.handleComposition)),Object.defineProperty(this.el,"value",{get:function(){return t.inputRef.value},set:function(e){return t.value=e},configurable:!0})},t.prototype.componentDidUnload=function(){"file"===this.type&&this.inputRef.removeEventListener("change",this.fileListener)},t.prototype.render=function(){var t=this,e=this,n=e.value,u=e.type,r=e.password,a=e.placeholder,h=e.disabled,c=e.maxlength,l=e.autoFocus,p=e.confirmType,d=e.name;return Object(i.f)("input",{ref:function(e){var n;t.inputRef=e,l&&(null===(n=e)||void 0===n||n.focus())},class:"weui-input",value:s(n),type:o(u,p,r),placeholder:a,disabled:h,maxlength:c,autofocus:l,name:d,onInput:this.hanldeInput,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"input{display:block;height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}"},enumerable:!0,configurable:!0}),t}()}}]);