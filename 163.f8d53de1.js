/*! For license information please see 163.f8d53de1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{543:function(t,i,o){"use strict";o.r(i),o.d(i,"taro_image_core",(function(){return n}));var e=o(82),r=o(746);o.e(175).then(o.t.bind(null,1069,7));var n=function(){function t(t){Object(e.g)(this,t),this.mode="scaleToFill",this.lazyLoad=!1,this.aspectFillMode="width",this.onLoad=Object(e.d)(this,"load",7),this.onError=Object(e.d)(this,"error",7)}return t.prototype.componentDidLoad=function(){var t=this;if(this.lazyLoad){var i=new IntersectionObserver((function(o){o[o.length-1].isIntersecting&&(i.unobserve(t.imgRef),t.imgRef.src=t.src)}),{rootMargin:"300px 0px"});i.observe(this.imgRef)}},t.prototype.imageOnLoad=function(){var t=this.imgRef,i=t.width,o=t.height,e=t.naturalWidth,r=t.naturalHeight;this.onLoad.emit({width:i,height:o}),this.aspectFillMode=e>r?"width":"height"},t.prototype.imageOnError=function(){this.onError.emit()},t.prototype.render=function(){var t,i=this,o=this,n=o.src,a=o.mode,s=o.lazyLoad,h=o.aspectFillMode,m=o.imageOnLoad,d=o.imageOnError,l=Object(r.a)({"taro-img__widthfix":"widthFix"===a}),g=Object(r.a)("taro-img__mode-"+a.toLowerCase().replace(/\s/g,""),((t={})["taro-img__mode-aspectfill--"+h]="aspectFill"===a,t));return Object(e.f)(e.a,{class:l},s?Object(e.f)("img",{ref:function(t){return i.imgRef=t},class:g,onLoad:m.bind(this),onError:d.bind(this)}):Object(e.f)("img",{ref:function(t){return i.imgRef=t},class:g,src:n,onLoad:m.bind(this),onError:d.bind(this)}))},Object.defineProperty(t,"style",{get:function(){return'img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;font-size:0;width:320px;height:240px}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-top,.taro-img__mode-widthfix{width:100%}.taro-img__mode-bottom{width:100%;position:absolute;bottom:0}.taro-img__mode-left{height:100%}.taro-img__mode-right{height:100%}.taro-img__mode-right,.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'},enumerable:!0,configurable:!0}),t}()},746:function(t,i,o){"use strict";o.d(i,"a",(function(){return e}));var e=function(t,i){return t(i={exports:{}},i.exports),i.exports}((function(t){!function(){var i={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var n=typeof r;if("string"===n||"number"===n)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===n)for(var s in r)i.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))}}]);