exports.ids = [23];
exports.modules = {

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_form_core", function() { return Form; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

var Form = /** @class */ (function () {
    function Form(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.value = {};
        this.onSubmit = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "submit", 7);
    }
    Form.prototype.onButtonSubmit = function (e) {
        e.stopPropagation();
        this.value = this.getFormValue();
        this.onSubmit.emit({
            value: this.value
        });
    };
    Form.prototype.onButtonReset = function (e) {
        e.stopPropagation();
        this.form.reset();
    };
    Form.prototype.componentDidLoad = function () {
        var _this = this;
        this.value = this.getFormValue();
        Object.defineProperty(this.el, 'value', {
            get: function () { return _this.value; },
            configurable: true
        });
    };
    Form.prototype.getFormValue = function () {
        var el = this.el;
        var elements = [];
        var tagElements = el.getElementsByTagName('input');
        for (var j = 0; j < tagElements.length; j++) {
            elements.push(tagElements[j]);
        }
        var formItem = {};
        var hash = {};
        elements.forEach(function (item) {
            if (item.className.indexOf('weui-switch') !== -1) {
                formItem[item.name] = item.checked;
                return;
            }
            if (item.type === 'radio') {
                if (item.checked) {
                    hash[item.name] = true;
                    formItem[item.name] = item.value;
                }
                else {
                    if (!hash[item.name]) {
                        formItem[item.name] = '';
                    }
                }
                return;
            }
            if (item.type === 'checkbox') {
                if (item.checked) {
                    if (hash[item.name]) {
                        formItem[item.name].push(item.value);
                    }
                    else {
                        hash[item.name] = true;
                        formItem[item.name] = [item.value];
                    }
                }
                else {
                    if (!hash[item.name]) {
                        formItem[item.name] = [];
                    }
                }
                return;
            }
            formItem[item.name] = item.value;
        });
        var textareaElements = el.getElementsByTagName('textarea');
        var textareaEleArr = [];
        for (var i = 0; i < textareaElements.length; i++) {
            textareaEleArr.push(textareaElements[i]);
        }
        textareaEleArr.forEach(function (v) {
            formItem[v.name] = v.value;
        });
        return formItem;
    };
    Form.prototype.render = function () {
        var _this = this;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("form", { ref: function (dom) {
                if (dom) {
                    _this.form = dom;
                }
            } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)));
    };
    Object.defineProperty(Form.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    return Form;
}());



/***/ })

};;