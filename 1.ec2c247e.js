exports.ids = [1];
exports.modules = {

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_button_core", function() { return Button; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(898);


var Button = /** @class */ (function () {
    function Button(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.hoverClass = 'button-hover';
        this.type = '';
        this.hoverStartTime = 20;
        this.hoverStayTime = 70;
        this.loading = false;
        this.formType = null;
        this.hover = false;
        this.touch = false;
        this.onSubmit = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "tarobuttonsubmit", 7);
        this.onReset = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "tarobuttonreset", 7);
    }
    Button.prototype.onTouchStart = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.touch = true;
        if (this.hoverClass && !this.disabled) {
            setTimeout(function () {
                if (_this.touch) {
                    _this.hover = true;
                }
            }, this.hoverStartTime);
        }
    };
    Button.prototype.onTouchEnd = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.touch = false;
        if (this.hoverClass && !this.disabled) {
            setTimeout(function () {
                if (!_this.touch) {
                    _this.hover = false;
                }
            }, this.hoverStayTime);
        }
        if (this.formType === 'submit') {
            this.onSubmit.emit();
        }
        else if (this.formType === 'reset') {
            this.onReset.emit();
        }
    };
    Button.prototype.render = function () {
        var _a;
        var _b = this, disabled = _b.disabled, hoverClass = _b.hoverClass, type = _b.type, size = _b.size, plain = _b.plain, loading = _b.loading, hover = _b.hover;
        var cls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((_a = {},
            _a["" + hoverClass] = hover && !disabled,
            _a));
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: cls, type: type, plain: plain, loading: loading, size: size, disabled: disabled }, loading && Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("i", { class: 'weui-loading' }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)));
    };
    Object.defineProperty(Button.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "style", {
        get: function () { return "taro-button-core{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#000;background-color:#f8f8f8;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden;width:100%;border-width:0;outline:0;-webkit-appearance:none}taro-button-core:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core:focus{outline:0}taro-button-core:after{content:\" \";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:10px}taro-button-core+taro-button-core{margin-top:15px}taro-button-core[type=default]{color:#000;background-color:#f8f8f8}taro-button-core[type=default]:not([disabled]):visited{color:#000}taro-button-core[type=default]:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core[size=mini]{width:auto;display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}taro-button-core[plain],taro-button-core[plain][type=default],taro-button-core[plain][type=primary]{border-width:1px;background-color:transparent}taro-button-core[disabled]{color:hsla(0,0%,100%,.6)}taro-button-core[disabled][type=default]{color:rgba(0,0,0,.3);background-color:#f7f7f7}taro-button-core[disabled][type=primary]{background-color:#9ed99d}taro-button-core[disabled][type=warn]{background-color:#ec8b89}taro-button-core[loading] .weui-loading{margin:-.2em .34em 0 0}taro-button-core[loading][type=primary],taro-button-core[loading][type=warn]{color:hsla(0,0%,100%,.6)}taro-button-core[loading][type=primary]{background-color:#179b16}taro-button-core[loading][type=warn]{background-color:#ce3c39}taro-button-core[plain][type=primary]{color:#1aad19;border:1px solid #1aad19}taro-button-core[plain][type=primary]:not([disabled]):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6);background-color:transparent}taro-button-core[plain][type=primary]:after{border-width:0}taro-button-core[plain],taro-button-core[plain][type=default]{color:#353535;border:1px solid #353535}taro-button-core[plain]:not([disabled]):active,taro-button-core[plain][type=default]:not([disabled]):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6);background-color:transparent}taro-button-core[plain]:after,taro-button-core[plain][type=default]:after{border-width:0}taro-button-core[type=primary]{color:#fff;background-color:#1aad19}taro-button-core[type=primary]:not([disabled]):visited{color:#fff}taro-button-core[type=primary]:not([disabled]):active{color:hsla(0,0%,100%,.6);background-color:#179b16}taro-button-core[type=warn]{color:#fff;background-color:#e64340}taro-button-core[type=warn]:not([disabled]):visited{color:#fff}taro-button-core[type=warn]:not([disabled]):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}taro-button-core[plain][disabled],taro-button-core[plain][disabled][type=primary]{color:rgba(0,0,0,.3);border:1px solid rgba(0,0,0,.2);background-color:#f7f7f7}"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());



/***/ }),

/***/ 898:
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