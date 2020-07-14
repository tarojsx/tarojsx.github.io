exports.ids = [7];
exports.modules = {

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_scroll_view_core", function() { return ScrollView; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(978);


function easeOutScroll(from, to, callback) {
    if (from === to || typeof from !== 'number') {
        return;
    }
    var change = to - from;
    var dur = 500;
    var sTime = Date.now();
    var isLarger = to >= from;
    function linear(t, b, c, d) {
        return c * t / d + b;
    }
    function step() {
        from = linear(Date.now() - sTime, from, change, dur);
        if ((isLarger && from >= to) || (!isLarger && to >= from)) {
            callback(to);
            return;
        }
        callback(from);
        requestAnimationFrame(step);
    }
    step();
}
function debounce(fn, delay) {
    var timer;
    return function () {
        var arrs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrs[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(void 0, arrs);
        }, delay);
    };
}
var ScrollView = /** @class */ (function () {
    function ScrollView(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.scrollX = false;
        this.scrollY = false;
        this.upperThreshold = 50;
        this.lowerThreshold = 50;
        this.scrollWithAnimation = false;
        this.handleScroll = function (e) {
            if (e instanceof CustomEvent)
                return;
            var _b = _this.el, scrollLeft = _b.scrollLeft, scrollTop = _b.scrollTop, scrollHeight = _b.scrollHeight, scrollWidth = _b.scrollWidth;
            _this._scrollLeft = scrollLeft;
            _this._scrollTop = scrollTop;
            _this.uperAndLower();
            _this.onScroll.emit({
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollHeight: scrollHeight,
                scrollWidth: scrollWidth
            });
        };
        this.uperAndLower = debounce(function () {
            var _b = _this.el, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight, scrollLeft = _b.scrollLeft, scrollTop = _b.scrollTop, scrollHeight = _b.scrollHeight, scrollWidth = _b.scrollWidth;
            var lowerThreshold = Number(_this.lowerThreshold);
            var upperThreshold = Number(_this.upperThreshold);
            if (!isNaN(lowerThreshold) &&
                ((_this.scrollY && offsetHeight + scrollTop + lowerThreshold >= scrollHeight) ||
                    (_this.scrollX && offsetWidth + scrollLeft + lowerThreshold >= scrollWidth))) {
                _this.onScrollToLower.emit({
                    direction: _this.scrollX ? 'right' : (_this.scrollY ? 'bottom' : '')
                });
            }
            if (!isNaN(upperThreshold) &&
                ((_this.scrollY && scrollTop <= upperThreshold) ||
                    (_this.scrollX && scrollLeft <= upperThreshold))) {
                _this.onScrollToUpper.emit({
                    direction: _this.scrollX ? 'left' : (_this.scrollY ? 'top' : '')
                });
            }
        }, 200);
        this.onScroll = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "scroll", 7);
        this.onScrollToUpper = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "scrolltoupper", 7);
        this.onScrollToLower = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "scrolltolower", 7);
    }
    ScrollView.prototype.watchScrollLeft = function (newVal) {
        var _this = this;
        var scrollLeft = Number(newVal);
        if (this.scrollX &&
            !isNaN(scrollLeft) &&
            scrollLeft !== this._scrollLeft) {
            if (this.scrollWithAnimation) {
                easeOutScroll(this._scrollLeft, scrollLeft, function (pos) { return (_this.el.scrollLeft = pos); });
            }
            else {
                this.el.scrollLeft = scrollLeft;
            }
            this._scrollLeft = scrollLeft;
        }
    };
    ScrollView.prototype.watchScrollTop = function (newVal) {
        var _this = this;
        var scrollTop = Number(newVal);
        if (this.scrollY &&
            !isNaN(scrollTop) &&
            scrollTop !== this._scrollTop) {
            if (this.scrollWithAnimation) {
                easeOutScroll(this._scrollTop, scrollTop, function (pos) { return (_this.el.scrollTop = pos); });
            }
            else {
                this.el.scrollTop = scrollTop;
            }
            this._scrollTop = scrollTop;
        }
    };
    ScrollView.prototype.watchScrollIntoView = function (newVal) {
        var _a;
        if (typeof newVal === 'string' && newVal) {
            (_a = document.querySelector("#" + newVal)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'start'
            });
        }
    };
    ScrollView.prototype.componentDidLoad = function () {
        var _this = this;
        var _b = this, scrollY = _b.scrollY, scrollX = _b.scrollX, scrollWithAnimation = _b.scrollWithAnimation;
        var scrollTop = Number(this.mpScrollTop);
        var scrollLeft = Number(this.mpScrollLeft);
        if (scrollY && !isNaN(scrollTop)) {
            if (scrollWithAnimation) {
                easeOutScroll(0, scrollTop, function (pos) { return (_this.el.scrollTop = pos); });
            }
            else {
                this.el.scrollTop = scrollTop;
            }
            this._scrollTop = scrollTop;
        }
        if (scrollX && !isNaN(scrollLeft)) {
            if (scrollWithAnimation) {
                easeOutScroll(0, scrollLeft, function (pos) { return (_this.el.scrollLeft = pos); });
            }
            else {
                this.el.scrollLeft = scrollLeft;
            }
            this._scrollLeft = scrollLeft;
        }
    };
    ScrollView.prototype.render = function () {
        var _b = this, scrollX = _b.scrollX, scrollY = _b.scrollY;
        var cls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])({
            'taro-scroll-view__scroll-x': scrollX,
            'taro-scroll-view__scroll-y': scrollY
        });
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: cls, onScroll: this.handleScroll }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)));
    };
    Object.defineProperty(ScrollView.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView, "watchers", {
        get: function () {
            return {
                "mpScrollLeft": ["watchScrollLeft"],
                "mpScrollTop": ["watchScrollTop"],
                "mpScrollIntoView": ["watchScrollIntoView"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView, "style", {
        get: function () { return "taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}"; },
        enumerable: true,
        configurable: true
    });
    return ScrollView;
}());



/***/ }),

/***/ 978:
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