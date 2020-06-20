exports.ids = [31];
exports.modules = {

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_progress_core", function() { return Index; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);

var Index = /** @class */ (function () {
    function Index(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.percent = 0;
        this.showInfo = false;
        this.borderRadius = 0;
        this.fontSize = 16;
        this.strokeWidth = 6;
        this.activeColor = '#09BB07';
        this.backgroundColor = '#EBEBEB';
        this.active = false;
    }
    Index.prototype.render = function () {
        var _a = this, percent = _a.percent, showInfo = _a.showInfo, borderRadius = _a.borderRadius, fontSize = _a.fontSize, strokeWidth = _a.strokeWidth, activeColor = _a.activeColor, backgroundColor = _a.backgroundColor, active = _a.active;
        var pgPercent = percent > 100 ? 100 : percent < 0 ? 0 : percent;
        var pgHeight = {
            height: strokeWidth + 'px',
            backgroundColor: backgroundColor
        };
        var transition = active ? 'width 1s ease-in-out' : 'none';
        var pgWdith = {
            width: pgPercent + "%",
            transition: transition,
            WebkitTransition: transition,
            backgroundColor: activeColor,
            borderRadius: borderRadius ? borderRadius + "px" : '0px'
        };
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: 'weui-progress' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-progress__bar', style: pgHeight }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-progress__inner-bar', style: pgWdith })), showInfo && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-progress__opr', style: { 'font-size': fontSize + "px" } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("span", null, pgPercent, "%")))));
    };
    return Index;
}());



/***/ })

};;