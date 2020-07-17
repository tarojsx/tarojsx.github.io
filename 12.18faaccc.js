exports.ids = [12];
exports.modules = {

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_view_core", function() { return View; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(982);


var View = /** @class */ (function () {
    function View(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.hoverStartTime = 50;
        this.hoverStayTime = 400;
        this.hover = false;
        this.touch = false;
        this.startTime = 0;
        this.onLongPress = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "longpress", 7);
    }
    View.prototype.onTouchStart = function () {
        var _this = this;
        if (this.hoverClass) {
            this.touch = true;
            setTimeout(function () {
                if (_this.touch) {
                    _this.hover = true;
                }
            }, this.hoverStartTime);
        }
        this.timeoutEvent = setTimeout(function () {
            _this.onLongPress.emit();
        }, 350);
        this.startTime = Date.now();
    };
    View.prototype.onTouchMove = function () {
        clearTimeout(this.timeoutEvent);
    };
    View.prototype.onTouchEnd = function () {
        var _this = this;
        var spanTime = Date.now() - this.startTime;
        if (spanTime < 350) {
            clearTimeout(this.timeoutEvent);
        }
        if (this.hoverClass) {
            this.touch = false;
            setTimeout(function () {
                if (!_this.touch) {
                    _this.hover = false;
                }
            }, this.hoverStayTime);
        }
    };
    View.prototype.render = function () {
        var _a;
        var cls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((_a = {},
            _a["" + this.hoverClass] = this.hover,
            _a));
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: cls }));
    };
    Object.defineProperty(View, "style", {
        get: function () { return "body,html{-webkit-tap-highlight-color:rgba(0,0,0,0);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}taro-view-core{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return View;
}());



/***/ }),

/***/ 982:
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