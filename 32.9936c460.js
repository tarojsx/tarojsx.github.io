exports.ids = [32];
exports.modules = {

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_radio_core", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_radio_group_core", function() { return RadioGroup; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);

var Radio = /** @class */ (function () {
    function Radio(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.value = '';
        this.checked = false;
        this.handleClick = function () {
            if (!_this.checked)
                _this.checked = true;
        };
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "radiochange", 7);
    }
    Radio.prototype.watchChecked = function (newVal) {
        newVal && this.onChange.emit({ value: this.value });
    };
    Radio.prototype.watchId = function (newVal) {
        if (newVal)
            this.inputEl.setAttribute('id', newVal);
    };
    Radio.prototype.componentDidRender = function () {
        this.id && this.el.removeAttribute('id');
    };
    Radio.prototype.render = function () {
        var _this = this;
        var _b = this, checked = _b.checked, name = _b.name, value = _b.value;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { className: 'weui-cells_checkbox', onClick: this.handleClick }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("input", { ref: function (dom) {
                if (!dom)
                    return;
                _this.inputEl = dom;
                if (_this.id)
                    dom.setAttribute('id', _this.id);
            }, type: 'radio', name: name, value: value, class: 'weui-check', checked: checked, onChange: function (e) { return e.stopPropagation(); } }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("i", { class: 'weui-icon-checked' }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)));
    };
    Object.defineProperty(Radio.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "watchers", {
        get: function () {
            return {
                "checked": ["watchChecked"],
                "id": ["watchId"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Radio;
}());
var RadioGroup = /** @class */ (function () {
    function RadioGroup(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.uniqueName = Date.now().toString(36);
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
    }
    RadioGroup.prototype.function = function (e) {
        e.stopPropagation();
        if (e.target.tagName !== 'TARO-RADIO-CORE')
            return;
        var target = e.target;
        if (target.checked) {
            var childList = this.el.querySelectorAll('taro-radio-core');
            childList.forEach(function (element) {
                if (element !== target) {
                    element.checked = false;
                }
            });
            this.value = e.detail.value;
            this.onChange.emit({
                value: this.value
            });
        }
    };
    RadioGroup.prototype.componentDidLoad = function () {
        var _this = this;
        var childList = this.el.querySelectorAll('taro-radio-core');
        childList.forEach(function (element) {
            element.setAttribute('name', _this.name || _this.uniqueName);
        });
        Object.defineProperty(this.el, 'value', {
            get: function () {
                if (!_this.value) {
                    var childList_1 = _this.el.querySelectorAll('taro-radio-core');
                    _this.value = _this.getValues(childList_1);
                }
                return _this.value;
            },
            configurable: true
        });
    };
    RadioGroup.prototype.getValues = function (childList) {
        var val = '';
        Array.from(childList)
            .forEach(function (element) {
            var _a;
            var checkbox = element.querySelector('input');
            if ((_a = checkbox) === null || _a === void 0 ? void 0 : _a.checked) {
                val = checkbox.value || '';
            }
        });
        return val;
    };
    RadioGroup.prototype.render = function () {
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: 'weui-cells_radiogroup' }));
    };
    Object.defineProperty(RadioGroup.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    return RadioGroup;
}());



/***/ })

};;