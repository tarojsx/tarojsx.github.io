exports.ids = [20];
exports.modules = {

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_checkbox_core", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_checkbox_group_core", function() { return CheckboxGroup; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);

var Checkbox = /** @class */ (function () {
    function Checkbox(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.value = '';
        this.checked = false;
        this.handleChange = function (e) {
            e.stopPropagation();
            _this.onChange.emit({
                value: _this.value
            });
        };
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "checkboxchange", 7);
    }
    Checkbox.prototype.watchId = function (newVal) {
        if (newVal)
            this.inputEl.setAttribute('id', newVal);
    };
    Checkbox.prototype.componentDidRender = function () {
        this.id && this.el.removeAttribute('id');
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var _b = this, checked = _b.checked, name = _b.name, color = _b.color, value = _b.value;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { className: 'weui-cells_checkbox' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("input", { ref: function (dom) {
                if (!dom)
                    return;
                _this.inputEl = dom;
                if (_this.id)
                    dom.setAttribute('id', _this.id);
            }, type: 'checkbox', value: value, name: name, class: 'taro-checkbox_checked', style: { color: color }, checked: checked, onChange: this.handleChange }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)));
    };
    Object.defineProperty(Checkbox.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "watchers", {
        get: function () {
            return {
                "id": ["watchId"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "style", {
        get: function () { return "\@charset \"UTF-8\";.taro-checkbox,.taro-checkbox_checked{position:relative;display:inline-block}.taro-checkbox_checked{min-height:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;font-size:23px;border:1px solid #d1d1d1;background-color:#fff;border-radius:3px;color:#1aad19;width:23px;height:23px;vertical-align:0;top:5px}.taro-checkbox_checked:checked:before{font-family:weui;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;text-align:center;speak:none;display:inline-block;vertical-align:middle;text-decoration:inherit;content:\"\";color:inherit;font-size:inherit;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-48%) scale(.73);transform:translate(-50%,-48%) scale(.73)}"; },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}());
var CheckboxGroup = /** @class */ (function () {
    function CheckboxGroup(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.uniqueName = Date.now().toString(36);
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
    }
    CheckboxGroup.prototype.function = function (e) {
        e.stopPropagation();
        if (e.target.tagName !== 'TARO-CHECKBOX-CORE')
            return;
        var childList = this.el.querySelectorAll('taro-checkbox-core');
        this.value = this.getValues(childList);
        this.onChange.emit({
            value: this.value
        });
    };
    CheckboxGroup.prototype.componentDidLoad = function () {
        var _this = this;
        var childList = this.el.querySelectorAll('taro-checkbox-core');
        childList.forEach(function (element) {
            element.setAttribute('name', _this.name || _this.uniqueName);
        });
        Object.defineProperty(this.el, 'value', {
            get: function () {
                if (!_this.value) {
                    var childList_1 = _this.el.querySelectorAll('taro-checkbox-core');
                    _this.value = _this.getValues(childList_1);
                }
                return _this.value;
            },
            configurable: true
        });
    };
    CheckboxGroup.prototype.getValues = function (childList) {
        return Array.from(childList)
            .filter(function (element) {
            var _a;
            var checkbox = element.querySelector('input');
            return (_a = checkbox) === null || _a === void 0 ? void 0 : _a.checked;
        })
            .map(function (element) { return element.value; });
    };
    CheckboxGroup.prototype.render = function () {
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], null));
    };
    Object.defineProperty(CheckboxGroup.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    return CheckboxGroup;
}());



/***/ })

};;