exports.ids = [35];
exports.modules = {

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_switch_core", function() { return Switch; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

var Switch = /** @class */ (function () {
    function Switch(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.type = 'switch';
        this.checked = false;
        this.color = '#04BE02';
        this.switchChange = function (e) {
            e.stopPropagation();
            var value = e.target.checked;
            _this.isChecked = value;
            _this.onChange.emit({
                value: value
            });
        };
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
    }
    Switch.prototype.function = function (newVal, oldVal) {
        if (newVal !== oldVal)
            this.isChecked = newVal;
    };
    Switch.prototype.componentWillLoad = function () {
        this.isChecked = this.checked;
    };
    Switch.prototype.componentDidLoad = function () {
        var _this = this;
        Object.defineProperty(this.el, 'value', {
            get: function () { return _this.isChecked; },
            configurable: true
        });
    };
    Switch.prototype.render = function () {
        var _a = this, type = _a.type, color = _a.color, isChecked = _a.isChecked, name = _a.name;
        var style = isChecked
            ? {
                borderColor: color || '04BE02',
                backgroundColor: color || '04BE02'
            }
            : {};
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("input", { type: 'checkbox', class: "weui-" + type, style: style, checked: isChecked, name: name, onChange: this.switchChange }));
    };
    Object.defineProperty(Switch.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Switch, "watchers", {
        get: function () {
            return {
                "checked": ["function"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Switch, "style", {
        get: function () { return "taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Switch;
}());



/***/ })

};;