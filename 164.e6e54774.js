/*! For license information please see 164.e6e54774.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{314:function(e,t,r){"use strict";r.r(t),r.d(t,"taro_navigator_core",(function(){return s}));var i=r(49),n=r(512),a=r(84),s=function(){function e(e){Object(i.g)(this,e),this.openType="navigate",this.isHover=!1,this.delta=0,this.onSuccess=Object(i.d)(this,"cuccess",7),this.onFail=Object(i.d)(this,"fail",7),this.onComplete=Object(i.d)(this,"Complete",7)}return e.prototype.onClick=function(){var e=this.openType,t=this.onSuccess,r=this.onFail,i=this.onComplete,n=Promise.resolve();switch(e){case"navigate":n=a.navigateTo({url:this.url});break;case"redirect":n=a.redirectTo({url:this.url});break;case"switchTab":n=a.switchTab({url:this.url});break;case"reLaunch":n=a.reLaunch({url:this.url});break;case"navigateBack":n=a.navigateBack({delta:this.delta});break;case"exit":n=Promise.reject(new Error('navigator:fail \u6682\u4e0d\u652f\u6301"openType: exit"'))}n&&n.then((function(e){t.emit(e)})).catch((function(e){r.emit(e)})).finally((function(){i.emit()}))},e.prototype.render=function(){var e,t=this.isHover,r=this.hoverClass;return Object(i.f)(i.a,{class:Object(n.a)((e={},e[r]=t,e))})},Object.defineProperty(e,"style",{get:function(){return".navigator-hover{background:#efefef}"},enumerable:!0,configurable:!0}),e}()},512:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===a)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}))}}]);