exports.ids = [6];
exports.modules = {

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_pull_to_refresh", function() { return PullToRefresh; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);


var Taro = __webpack_require__(191);
function setTransform(nodeStyle, value) {
    nodeStyle.transform = value;
    nodeStyle.webkitTransform = value;
    nodeStyle.MozTransform = value;
}
var isWebView = typeof navigator !== 'undefined' &&
    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var INDICATOR = {
    activate: 'release',
    deactivate: 'pull',
    release: 'loading',
    finish: 'finish'
};
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    });
    window.addEventListener('cancel', function () { return ({}); }, opts);
}
catch (e) { }
var willPreventDefault = supportsPassive ? { passive: false } : false;
var PullToRefresh = /** @class */ (function () {
    function PullToRefresh(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.prefixCls = 'rmc-pull-to-refresh';
        this.distanceToRefresh = 50;
        this.damping = 100;
        this.indicator = INDICATOR;
        this.currSt = 'deactivate';
        this.dragOnEdge = false;
        this._ScreenY = 0;
        this._startScreenY = 0;
        this._lastScreenY = 0;
        this._isMounted = false;
        this.scrollContainer = document.querySelector('.taro-tabbar__panel') || document.body;
        this.triggerPullDownRefresh = function (flag) {
            // 在初始化时、用代码 自动 触发 pullDownRefresh
            // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
            if (!_this.dragOnEdge && _this._isMounted) {
                if (flag) {
                    _this._lastScreenY = _this.distanceToRefresh + 1;
                    // change dom need after setState
                    _this.currSt = 'release';
                    _this.setContentStyle(_this._lastScreenY);
                }
                else {
                    _this.currSt = 'finish';
                    _this.reset();
                }
            }
        };
        this.init = function () {
            var ele = _this.scrollContainer;
            _this._to = {
                touchstart: _this.onTouchStart.bind(_this, ele),
                touchmove: _this.onTouchMove.bind(_this, ele),
                touchend: _this.onTouchEnd.bind(_this, ele),
                touchcancel: _this.onTouchEnd.bind(_this, ele)
            };
            Object.keys(_this._to).forEach(function (key) {
                ele.addEventListener(key, _this._to[key], willPreventDefault);
            });
        };
        this.destroy = function () {
            var ele = _this.scrollContainer;
            Object.keys(_this._to).forEach(function (key) {
                ele.removeEventListener(key, _this._to[key]);
            });
        };
        this.onTouchStart = function (_, e) {
            _this._ScreenY = _this._startScreenY = e.touches[0].screenY;
            // 一开始 refreshing 为 true 时 this._lastScreenY 有值
            _this._lastScreenY = _this._lastScreenY || 0;
        };
        this.isEdge = function (ele) {
            var container = _this.scrollContainer;
            if (container && container === document.body) {
                // In chrome61 `document.body.scrollTop` is invalid
                var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
                return scrollNode.scrollTop <= 0;
            }
            return ele.scrollTop <= 0;
        };
        this.damp = function (dy) {
            if (Math.abs(_this._lastScreenY) > _this.damping) {
                return 0;
            }
            var ratio = Math.abs(_this._ScreenY - _this._startScreenY) / window.screen.height;
            dy *= (1 - ratio) * 0.6;
            return dy;
        };
        this.onTouchMove = function (ele, e) {
            // 使用 pageY 对比有问题
            var _screenY = e.touches[0].screenY;
            // 拖动方向不符合的不处理
            if (_this._startScreenY > _screenY) {
                return;
            }
            if (_this.isEdge(ele)) {
                if (!_this.dragOnEdge) {
                    // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
                    // 下面这行代码解决了上面这个问题
                    _this._ScreenY = _this._startScreenY = e.touches[0].screenY;
                    _this.dragOnEdge = true;
                }
                if (e.cancelable) {
                    e.preventDefault();
                }
                // add stopPropagation with fastclick will trigger content onClick event. why?
                // ref https://github.com/ant-design/ant-design-mobile/issues/2141
                // e.stopPropagation();
                var _diff = Math.round(_screenY - _this._ScreenY);
                _this._ScreenY = _screenY;
                _this._lastScreenY += _this.damp(_diff);
                _this.setContentStyle(_this._lastScreenY);
                if (Math.abs(_this._lastScreenY) < _this.distanceToRefresh) {
                    if (_this.currSt !== 'deactivate') {
                        // console.log('back to the distance');
                        _this.currSt = 'deactivate';
                    }
                }
                else {
                    if (_this.currSt === 'deactivate') {
                        // console.log('reach to the distance');
                        _this.currSt = 'activate';
                    }
                }
                // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
                // iOS UIWebView issue, It seems no problem in WKWebView
                if (isWebView && e.changedTouches[0].clientY < 0) {
                    _this.onTouchEnd();
                }
            }
        };
        this.onTouchEnd = function () {
            if (_this.dragOnEdge) {
                _this.dragOnEdge = false;
            }
            if (_this.currSt === 'activate') {
                _this.currSt = 'release';
                _this.onRefresh.emit(_this);
                _this._lastScreenY = _this.distanceToRefresh + 1;
                _this.setContentStyle(_this._lastScreenY);
            }
            else if (_this.currSt === 'release') {
                _this._lastScreenY = _this.distanceToRefresh + 1;
                _this.setContentStyle(_this._lastScreenY);
            }
            else {
                _this.reset();
            }
        };
        this.reset = function () {
            _this._lastScreenY = 0;
            _this.setContentStyle(0);
        };
        this.setContentStyle = function (ty) {
            // todos: Why sometimes do not have `this.contentRef` ?
            if (_this.contentRef) {
                setTransform(_this.contentRef.style, "translate3d(0px," + ty + "px,0)");
            }
        };
        this.onRefresh = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "refresh", 7);
    }
    PullToRefresh.prototype.statusChange = function () {
        if (this.currSt === 'release') {
            var pageEl = this.el.closest('.taro_page');
            if (pageEl && pageEl.__page) {
                pageEl.__page.onPullDownRefresh();
            }
        }
    };
    PullToRefresh.prototype.componentDidUnload = function () {
        this.destroy();
    };
    PullToRefresh.prototype.componentDidLoad = function () {
        var _this = this;
        this.init();
        this._isMounted = true;
        Taro.eventCenter.on('__taroStartPullDownRefresh', function (_a) {
            var successHandler = _a.successHandler, errorHandler = _a.errorHandler;
            try {
                _this.triggerPullDownRefresh(true);
                successHandler({
                    errMsg: 'startPullDownRefresh: ok'
                });
            }
            catch (e) {
                errorHandler({
                    errMsg: 'startPullDownRefresh: fail'
                });
            }
        });
        Taro.eventCenter.on('__taroStopPullDownRefresh', function (_a) {
            var successHandler = _a.successHandler, errorHandler = _a.errorHandler;
            try {
                _this.triggerPullDownRefresh(false);
                successHandler({
                    errMsg: 'stopPullDownRefresh: ok'
                });
            }
            catch (e) {
                errorHandler({
                    errMsg: 'stopPullDownRefresh: fail'
                });
            }
        });
    };
    PullToRefresh.prototype.render = function () {
        var _this = this;
        var renderRefresh = function (cls) {
            var _a = _this, currSt = _a.currSt, dragOnEdge = _a.dragOnEdge, prefixCls = _a.prefixCls;
            var cla = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])(cls, !dragOnEdge && prefixCls + "-transition");
            var showIndicator = currSt === 'activate' || currSt === 'release';
            return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: prefixCls + "-content-wrapper" }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: cla, ref: function (el) {
                    _this.contentRef = el;
                } }, showIndicator && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: prefixCls + "-indicator" }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", null), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", null), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", null))), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null))));
        };
        if (this.scrollContainer) {
            return renderRefresh(this.prefixCls + "-content " + this.prefixCls + "-down");
        }
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])(this.prefixCls, this.prefixCls + "-down") }, renderRefresh(this.prefixCls + "-content")));
    };
    Object.defineProperty(PullToRefresh.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PullToRefresh, "watchers", {
        get: function () {
            return {
                "currSt": ["statusChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PullToRefresh, "style", {
        get: function () { return ".rmc-pull-to-refresh-content{-webkit-transform-origin:left top 0;transform-origin:left top 0}.rmc-pull-to-refresh-content-wrapper{overflow:hidden}.rmc-pull-to-refresh-transition{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}\@-webkit-keyframes rmc-pull-to-refresh-indicator{50%{opacity:.2}to{opacity:1}}\@keyframes rmc-pull-to-refresh-indicator{50%{opacity:.2}to{opacity:1}}.rmc-pull-to-refresh-indicator{text-align:center;height:30px;line-height:10px}.rmc-pull-to-refresh-indicator>div{background-color:grey;width:6px;height:6px;border-radius:100%;margin:3px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;-webkit-animation:rmc-pull-to-refresh-indicator .5s linear 0s infinite;animation:rmc-pull-to-refresh-indicator .5s linear 0s infinite}.rmc-pull-to-refresh-indicator>div:nth-child(0){-webkit-animation-delay:-.1s!important;animation-delay:-.1s!important}.rmc-pull-to-refresh-indicator>div:first-child{-webkit-animation-delay:-.2s!important;animation-delay:-.2s!important}.rmc-pull-to-refresh-indicator>div:nth-child(2){-webkit-animation-delay:-.3s!important;animation-delay:-.3s!important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}"; },
        enumerable: true,
        configurable: true
    });
    return PullToRefresh;
}());



/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classnames; });
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */
    (function () {
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
            var classes = [];
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!arg)
                    continue;
                var argType = typeof arg;
                if (argType === 'string' || argType === 'number') {
                    classes.push(arg);
                }
                else if (Array.isArray(arg) && arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) {
                        classes.push(inner);
                    }
                }
                else if (argType === 'object') {
                    for (var key in arg) {
                        if (hasOwn.call(arg, key) && arg[key]) {
                            classes.push(key);
                        }
                    }
                }
            }
            return classes.join(' ');
        }
        if (module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
        }
        else {
            window.classNames = classNames;
        }
    }());
});



/***/ })

};;