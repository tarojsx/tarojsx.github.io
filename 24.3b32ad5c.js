exports.ids = [24];
exports.modules = {

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_input_core", function() { return Input; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

function getTrueType(type, confirmType, password) {
    if (!type) {
        throw new Error('unexpected type');
    }
    if (confirmType === 'search')
        type = 'search';
    if (password)
        type = 'password';
    if (type === 'digit')
        type = 'number';
    return type;
}
function fixControlledValue(value) {
    return (value !== null && value !== void 0 ? value : '');
}
var Input = /** @class */ (function () {
    function Input(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.isOnComposition = false;
        this.onInputExcuted = false;
        this.type = 'text';
        this.password = false;
        this.disabled = false;
        this.maxlength = 140;
        this.autoFocus = false;
        this.confirmType = 'done';
        this.hanldeInput = function (e) {
            e.stopPropagation();
            var _b = _this, type = _b.type, maxlength = _b.maxlength, confirmType = _b.confirmType, password = _b.password;
            if (!_this.isOnComposition && !_this.onInputExcuted) {
                var value = e.target.value;
                var inputType = getTrueType(type, confirmType, password);
                _this.onInputExcuted = true;
                /* 修复 number 类型 maxlength 无效 */
                if (inputType === 'number' && value && maxlength <= value.length) {
                    value = value.substring(0, maxlength);
                    e.target.value = value;
                }
                // 修复 IOS 光标跳转问题
                if (!(['number', 'file'].indexOf(inputType) >= 0)) {
                    var pos_1 = e.target.selectionEnd;
                    setTimeout(function () {
                        e.target.selectionStart = pos_1;
                        e.target.selectionEnd = pos_1;
                    });
                }
                _this.onInput.emit({
                    value: value,
                    cursor: value.length
                });
            }
        };
        this.handleFocus = function (e) {
            _this.onInputExcuted = false;
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
        this.handleKeyDown = function (e) {
            var value = e.target.value;
            _this.onInputExcuted = false;
            e.stopPropagation();
            _this.onKeyDown.emit({ value: value });
            e.keyCode === 13 && _this.onConfirm.emit({ value: value });
        };
        this.handleComposition = function (e) {
            if (!(e.target instanceof HTMLInputElement))
                return;
            if (e.type === 'compositionend') {
                _this.isOnComposition = false;
                _this.onInput.emit({ value: e.target.value });
            }
            else {
                _this.isOnComposition = true;
            }
        };
        this.onInput = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "input", 7);
        this.onFocus = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "focus", 7);
        this.onBlur = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "blur", 7);
        this.onConfirm = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "confirm", 7);
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
        this.onKeyDown = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "keydown", 7);
    }
    Input.prototype.componentDidLoad = function () {
        var _this = this;
        if (this.type === 'file') {
            this.fileListener = function () {
                _this.onInput.emit();
            };
            this.inputRef.addEventListener('change', this.fileListener);
        }
        else {
            this.inputRef.addEventListener('compositionstart', this.handleComposition);
            this.inputRef.addEventListener('compositionend', this.handleComposition);
        }
        Object.defineProperty(this.el, 'value', {
            get: function () { return _this.inputRef.value; },
            set: function (value) { return (_this.value = value); },
            configurable: true
        });
    };
    Input.prototype.componentDidUnload = function () {
        if (this.type === 'file') {
            this.inputRef.removeEventListener('change', this.fileListener);
        }
    };
    Input.prototype.render = function () {
        var _this = this;
        var _b = this, value = _b.value, type = _b.type, password = _b.password, placeholder = _b.placeholder, disabled = _b.disabled, maxlength = _b.maxlength, autoFocus = _b.autoFocus, confirmType = _b.confirmType, name = _b.name;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("input", { ref: function (input) {
                var _a;
                _this.inputRef = input;
                autoFocus && ((_a = input) === null || _a === void 0 ? void 0 : _a.focus());
            }, class: 'weui-input', value: fixControlledValue(value), type: getTrueType(type, confirmType, password), placeholder: placeholder, disabled: disabled, maxlength: maxlength, autofocus: autoFocus, name: name, onInput: this.hanldeInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onChange: this.handleChange, onKeyDown: this.handleKeyDown }));
    };
    Object.defineProperty(Input.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "style", {
        get: function () { return "input{display:block;height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}"; },
        enumerable: true,
        configurable: true
    });
    return Input;
}());



/***/ })

};;