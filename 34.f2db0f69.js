exports.ids = [34];
exports.modules = {

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_slider_core", function() { return Slider; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

var Slider = /** @class */ (function () {
    function Slider(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.disabled = false;
        this.value = 0;
        this.activeColor = '#1aad19';
        this.backgroundColor = '#e9e9e9';
        this.blockSize = 28;
        this.blockColor = '#ffffff';
        this.showValue = false;
        this.name = '';
        this.totalWidth = 0;
        this.touching = false;
        this.ogX = 0;
        this.touchId = null;
        this.percent = 0;
        this.handleTouchStart = function (e) {
            if (_this.touching || _this.disabled)
                return;
            _this.touching = true;
            _this.touchId = e.targetTouches[0].identifier;
            _this.totalWidth = _this.sliderInsRef.clientWidth;
            _this.ogX = e.targetTouches[0].pageX;
            _this.ogPercent = _this.percent;
        };
        this.handleTouchMove = function (e) {
            var _a = _this, disabled = _a.disabled, touching = _a.touching, touchId = _a.touchId, totalWidth = _a.totalWidth, max = _a.max, min = _a.min, ogX = _a.ogX, ogPercent = _a.ogPercent;
            if (!touching || disabled)
                return;
            if (e.targetTouches[0].identifier !== touchId)
                return;
            // 阻止默认事件
            e.preventDefault();
            var pageX = e.targetTouches[0].pageX;
            var diffX = pageX - ogX;
            var percent = diffX / totalWidth * 100 + ogPercent;
            percent = Math.max(0, Math.min(percent, 100));
            var val = min + percent * 0.01 * (max - min);
            _this.updateByStep(val);
            _this.onChanging.emit({
                detail: e.detail,
                value: _this.val
            });
        };
        this.handleTouchEnd = function (e) {
            var _a = _this, disabled = _a.disabled, touching = _a.touching;
            if (!touching || disabled)
                return;
            if (_this.percent !== _this.ogPercent) {
                _this.onChange.emit({
                    detail: e.detail,
                    value: _this.val
                });
            }
            _this.touching = false;
            _this.touchId = null;
            _this.ogX = 0;
            _this.ogPercent = 0;
        };
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
        this.onChanging = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "changing", 7);
    }
    Slider.prototype.function = function (newVal) {
        var _a = this, max = _a.max, min = _a.min;
        if (newVal !== null && newVal !== this.val) {
            var val = Math.max(min, Math.min(newVal, max));
            this.updateByStep(val);
        }
    };
    Slider.prototype.componentDidLoad = function () {
        var _this = this;
        Object.defineProperty(this.el, 'value', {
            get: function () { return _this.val; },
            set: function (value) { return (_this.value = value); },
            configurable: true
        });
        // 在自动化测试时，如果通过 JSX 绑定 touch 事件，
        // 模拟的 touch 事件只会在浏览器的 device mode 下触发，Karma 跑的测试就会跪。
        // 因此改为 didLoad 后 addEventListener 的形式。
        this.handler.addEventListener('touchstart', this.handleTouchStart);
        this.handler.addEventListener('touchmove', this.handleTouchMove);
        this.handler.addEventListener('touchend', this.handleTouchEnd);
    };
    Slider.prototype.componentDidUpdate = function () {
        this.value = null;
    };
    Slider.prototype.componentWillLoad = function () {
        var _a = this, value = _a.value, max = _a.max, min = _a.min;
        if (value === null)
            return;
        var val = Math.max(min, Math.min(value, max));
        this.updateByStep(val);
    };
    // 根据步长 step 修改 value
    Slider.prototype.updateByStep = function (value) {
        var _a = this, max = _a.max, min = _a.min, step = _a.step;
        var steps = Math.floor((max - min) / step);
        for (var i = 0; i <= steps; i++) {
            var current = min + step * i;
            var next = i === steps ? null : min + step * (i + 1);
            if (value === current)
                break;
            if (!next && value > current) {
                // step 不能被 max - min 整除
                value = current;
            }
            if (next && value > current && value < next) {
                if (value - current < step / 2) {
                    value = current;
                }
                else {
                    value = next;
                }
                break;
            }
        }
        var percent = (value - min) / (max - min) * 100;
        this.val = value;
        this.percent = percent;
    };
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this, showValue = _a.showValue, backgroundColor = _a.backgroundColor, activeColor = _a.activeColor, blockColor = _a.blockColor, name = _a.name, percent = _a.percent, val = _a.val;
        var blockSize = this.blockSize;
        var innerStyles = { backgroundColor: backgroundColor };
        var percentage = percent > 100 ? 100 : percent;
        var trackStyles = {
            width: percentage + "%",
            backgroundColor: activeColor
        };
        if (blockSize < 12) {
            blockSize = 12;
        }
        if (blockSize > 28) {
            blockSize = 28;
        }
        var handlerStyles = {
            left: percentage + "%",
            width: blockSize + "px",
            height: blockSize + "px",
            backgroundColor: blockColor,
            marginTop: "-" + Math.floor(blockSize / 2) + "px",
            marginLeft: "-" + Math.floor(blockSize / 2) + "px"
        };
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: 'weui-slider-box' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-slider' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-slider__inner', style: innerStyles, ref: function (c) { return (_this.sliderInsRef = c); } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { style: trackStyles, class: 'weui-slider__track' }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-slider__handler', ref: function (dom) {
                if (dom)
                    _this.handler = dom;
            }, style: handlerStyles }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("input", { type: 'hidden', name: name, value: val }))), showValue && Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-slider-box__value' }, val)));
    };
    Object.defineProperty(Slider.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider, "watchers", {
        get: function () {
            return {
                "value": ["function"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Slider;
}());



/***/ })

};;