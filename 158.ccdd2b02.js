(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{300:function(t,e,i){"use strict";i.r(e),i.d(e,"taro_canvas_core",(function(){return o}));var n=i(48),o=function(){function t(t){var e=this;Object(n.g)(this,t),this.width=300,this.height=150,this.onTouchStart=function(){e.timer=setTimeout((function(){e.onLongTap.emit()}),500)},this.onTouchMove=function(){clearTimeout(e.timer)},this.onTouchEnd=function(){clearTimeout(e.timer)},this.onLongTap=Object(n.d)(this,"longtap",7)}return t.prototype.componentDidLoad=function(){var t=this.el.getBoundingClientRect(),e=t.width,i=t.height;this.width=e,this.height=i,this.klass=this.el.className,this.css=this.el.style.cssText},t.prototype.componentDidUpdate=function(){var t=this.el.getBoundingClientRect(),e=t.width,i=t.height;this.width!==e&&(this.width=e),this.height!==i&&(this.height=i),this.canvas&&(this.canvas.className=this.el.className,this.canvas.style.cssText=this.el.style.cssText)},t.prototype.render=function(){var t=this,e=this.canvasId,i=this.width,o=this.height;return Object(n.f)("canvas",{"canvas-id":e,ref:function(e){return t.canvas=e},width:i,height:o,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"taro-canvas-core{position:relative;display:block;width:300px;height:150px}"},enumerable:!0,configurable:!0}),t}()}}]);