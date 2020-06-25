exports.ids = [36];
exports.modules = {

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_textarea_core", function() { return Textarea; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

function fixControlledValue(value) {
    return (value !== null && value !== void 0 ? value : '');
}
var Textarea = /** @class */ (function () {
    function Textarea(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.disabled = false;
        this.maxlength = 140;
        this.autoFocus = false;
        this.hanldeInput = function (e) {
            e.stopPropagation();
            _this.onInput.emit({
                value: e.target.value,
                cursor: e.target.value.length
            });
        };
        this.handleFocus = function (e) {
            _this.onFocus.emit({
                value: e.target.value
            });
        };
        this.handleBlur = function (e) {
            _this.onBlur.emit({
                value: e.target.value
            });
        };
        this.handleChange = function (e) {
            e.stopPropagation();
            _this.onChange.emit({
                value: e.target.value
            });
        };
        this.onInput = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "input", 7);
        this.onFocus = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "focus", 7);
        this.onBlur = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "blur", 7);
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
    }
    Textarea.prototype.componentDidLoad = function () {
        var _this = this;
        Object.defineProperty(this.el, 'value', {
            get: function () { return _this.textareaRef.value; },
            set: function (value) { return (_this.value = value); },
            configurable: true
        });
        this.autoFocus && this.textareaRef.focus();
    };
    Textarea.prototype.render = function () {
        var _this = this;
        var _a = this, value = _a.value, placeholder = _a.placeholder, disabled = _a.disabled, maxlength = _a.maxlength, autoFocus = _a.autoFocus, name = _a.name, hanldeInput = _a.hanldeInput, handleFocus = _a.handleFocus, handleBlur = _a.handleBlur, handleChange = _a.handleChange;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("textarea", { ref: function (input) {
                if (input) {
                    _this.textareaRef = input;
                }
            }, class: 'taro-textarea', value: fixControlledValue(value), placeholder: placeholder, name: name, disabled: disabled, maxlength: maxlength, autofocus: autoFocus, onInput: hanldeInput, onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange }));
    };
    Object.defineProperty(Textarea.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Textarea, "style", {
        get: function () { return "taro-textarea-core{display:block;width:300px;height:150px}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:100%;border:0;display:block;position:relative}.taro-textarea:focus{outline:none}"; },
        enumerable: true,
        configurable: true
    });
    return Textarea;
}());



/***/ })

};;