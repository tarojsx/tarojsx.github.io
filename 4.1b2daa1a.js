exports.ids = [4];
exports.modules = {

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_navigator_core", function() { return Navigator; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(898);


var Taro = __webpack_require__(193);
var Navigator = /** @class */ (function () {
    function Navigator(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.openType = 'navigate';
        this.isHover = false;
        this.delta = 0;
        this.onSuccess = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "cuccess", 7);
        this.onFail = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "fail", 7);
        this.onComplete = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "Complete", 7);
    }
    Navigator.prototype.onClick = function () {
        var _a = this, openType = _a.openType, onSuccess = _a.onSuccess, onFail = _a.onFail, onComplete = _a.onComplete;
        var promise = Promise.resolve();
        switch (openType) {
            case 'navigate':
                promise = Taro.navigateTo({
                    url: this.url
                });
                break;
            case 'redirect':
                promise = Taro.redirectTo({
                    url: this.url
                });
                break;
            case 'switchTab':
                promise = Taro.switchTab({
                    url: this.url
                });
                break;
            case 'reLaunch':
                promise = Taro.reLaunch({
                    url: this.url
                });
                break;
            case 'navigateBack':
                promise = Taro.navigateBack({
                    delta: this.delta
                });
                break;
            case 'exit':
                promise = Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'));
                break;
        }
        if (promise) {
            promise.then(function (res) {
                onSuccess.emit(res);
            }).catch(function (res) {
                onFail.emit(res);
            }).finally(function () {
                onComplete.emit();
            });
        }
    };
    Navigator.prototype.render = function () {
        var _a;
        var _b = this, isHover = _b.isHover, hoverClass = _b.hoverClass;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((_a = {},
                _a[hoverClass] = isHover,
                _a)) }));
    };
    Object.defineProperty(Navigator, "style", {
        get: function () { return ".navigator-hover{background:#efefef}"; },
        enumerable: true,
        configurable: true
    });
    return Navigator;
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