exports.ids = [19];
exports.modules = {

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_canvas_core", function() { return Canvas; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);

var LONG_TAP_DELAY = 500;
var Canvas = /** @class */ (function () {
    function Canvas(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.width = 300;
        this.height = 150;
        this.onTouchStart = function () {
            _this.timer = setTimeout(function () {
                _this.onLongTap.emit();
            }, LONG_TAP_DELAY);
        };
        this.onTouchMove = function () {
            clearTimeout(_this.timer);
        };
        this.onTouchEnd = function () {
            clearTimeout(_this.timer);
        };
        this.onLongTap = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "longtap", 7);
    }
    Canvas.prototype.componentDidLoad = function () {
        var _a = this.el.getBoundingClientRect(), width = _a.width, height = _a.height;
        this.width = width;
        this.height = height;
        this.klass = this.el.className;
        this.css = this.el.style.cssText;
    };
    Canvas.prototype.componentDidUpdate = function () {
        var _a = this.el.getBoundingClientRect(), width = _a.width, height = _a.height;
        if (this.width !== width)
            this.width = width;
        if (this.height !== height)
            this.height = height;
        if (this.canvas) {
            this.canvas.className = this.el.className;
            this.canvas.style.cssText = this.el.style.cssText;
        }
    };
    Canvas.prototype.render = function () {
        var _this = this;
        var _a = this, canvasId = _a.canvasId, width = _a.width, height = _a.height;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("canvas", { "canvas-id": canvasId, ref: function (node) { return (_this.canvas = node); }, width: width, height: height, onTouchStart: this.onTouchStart, onTouchMove: this.onTouchMove, onTouchEnd: this.onTouchEnd }));
    };
    Object.defineProperty(Canvas.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas, "style", {
        get: function () { return "taro-canvas-core{position:relative;display:block;width:300px;height:150px}"; },
        enumerable: true,
        configurable: true
    });
    return Canvas;
}());



/***/ })

};;