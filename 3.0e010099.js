exports.ids = [3];
exports.modules = {

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_image_core", function() { return Image; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(892);


__webpack_require__.e(/* import() */ 15).then(__webpack_require__.t.bind(null, 893, 7));
var Image = /** @class */ (function () {
    function Image(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.mode = 'scaleToFill';
        this.lazyLoad = false;
        this.aspectFillMode = 'width';
        this.onLoad = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "load", 7);
        this.onError = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "error", 7);
    }
    Image.prototype.componentDidLoad = function () {
        var _this = this;
        if (!this.lazyLoad)
            return;
        var lazyImg = new IntersectionObserver(function (entries) {
            // 异步 api 关系
            if (entries[entries.length - 1].isIntersecting) {
                lazyImg.unobserve(_this.imgRef);
                _this.imgRef.src = _this.src;
            }
        }, {
            rootMargin: '300px 0px'
        });
        lazyImg.observe(this.imgRef);
    };
    Image.prototype.imageOnLoad = function () {
        var _a = this.imgRef, width = _a.width, height = _a.height, naturalWidth = _a.naturalWidth, naturalHeight = _a.naturalHeight;
        this.onLoad.emit({
            width: width,
            height: height
        });
        this.aspectFillMode = naturalWidth > naturalHeight ? 'width' : 'height';
    };
    Image.prototype.imageOnError = function () {
        this.onError.emit();
    };
    Image.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, src = _b.src, mode = _b.mode, lazyLoad = _b.lazyLoad, aspectFillMode = _b.aspectFillMode, imageOnLoad = _b.imageOnLoad, imageOnError = _b.imageOnError;
        var cls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])({
            'taro-img__widthfix': mode === 'widthFix'
        });
        var imgCls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("taro-img__mode-" + mode.toLowerCase().replace(/\s/g, ''), (_a = {},
            _a["taro-img__mode-aspectfill--" + aspectFillMode] = mode === 'aspectFill',
            _a));
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: cls }, lazyLoad ? (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("img", { ref: function (img) { return (_this.imgRef = img); }, class: imgCls, onLoad: imageOnLoad.bind(this), onError: imageOnError.bind(this) })) : (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("img", { ref: function (img) { return (_this.imgRef = img); }, class: imgCls, src: src, onLoad: imageOnLoad.bind(this), onError: imageOnError.bind(this) }))));
    };
    Object.defineProperty(Image, "style", {
        get: function () { return "img[src=\"\"]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;font-size:0;width:320px;height:240px}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-top,.taro-img__mode-widthfix{width:100%}.taro-img__mode-bottom{width:100%;position:absolute;bottom:0}.taro-img__mode-left{height:100%}.taro-img__mode-right{height:100%}.taro-img__mode-right,.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}"; },
        enumerable: true,
        configurable: true
    });
    return Image;
}());



/***/ }),

/***/ 892:
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