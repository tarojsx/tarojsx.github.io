exports.ids = [37];
exports.modules = {

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_web_view_core", function() { return WebView; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);

var WebView = /** @class */ (function () {
    function WebView(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.onLoad = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "load", 7);
        this.onError = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "error", 7);
    }
    WebView.prototype.render = function () {
        var _a = this, src = _a.src, onLoad = _a.onLoad, onError = _a.onError;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("iframe", { class: 'taro-webview', onLoad: function (e) {
                e.stopPropagation();
                onLoad.emit({ src: src });
            }, onError: function (e) {
                e.stopPropagation();
                onError.emit({ src: src });
            }, src: src }));
    };
    Object.defineProperty(WebView, "style", {
        get: function () { return "iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;width:100%;height:100%;z-index:999}"; },
        enumerable: true,
        configurable: true
    });
    return WebView;
}());



/***/ })

};;