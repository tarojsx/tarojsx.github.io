exports.ids = [10];
exports.modules = {

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_text_core", function() { return Text; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);


var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.selectable = false;
    }
    Text.prototype.render = function () {
        var cls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])({
            'taro-text__selectable': this.selectable
        });
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: cls }));
    };
    Object.defineProperty(Text, "style", {
        get: function () { return "taro-text-core{display:inline;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:pre-wrap}.taro-text__selectable{-moz-user-select:text;-webkit-user-select:text;-ms-user-select:text;user-select:text}"; },
        enumerable: true,
        configurable: true
    });
    return Text;
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