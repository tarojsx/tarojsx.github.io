exports.ids = [5];
exports.modules = {

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_picker_core", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_picker_group", function() { return TaroPickerGroup; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


function getTimeRange(begin, end) {
    var range = [];
    for (var i = begin; i <= end; i++) {
        range.push("" + (i < 10 ? '0' : '') + i);
    }
    return range;
}
var hoursRange = __spreadArrays([
    '20',
    '21',
    '22',
    '23'
], getTimeRange(0, 23), [
    '00',
    '01',
    '02',
    '03'
]);
var minutesRange = __spreadArrays([
    '56',
    '57',
    '58',
    '59'
], getTimeRange(0, 59), [
    '00',
    '01',
    '02',
    '03'
]);
/**
 * 校验传入的 value 是否合法
 */
function verifyValue(value, range) {
    if (!isNaN(+value) && value >= 0 && value < range.length)
        return true;
    return false;
}
/**
 * 检验传入的 time value 是否合法
 */
function verifyTime(value) {
    if (!/^\d{1,2}:\d{1,2}$/.test(value))
        return false;
    var time = value.split(':').map(function (num) { return +num; });
    if (time[0] < 0 || time[0] > 23)
        return false;
    if (time[1] < 0 || time[1] > 59)
        return false;
    return true;
}
/**
 * 比较时间
 * return t1 <= t2
 */
function compareTime(t1, t2) {
    var t1List = t1.split(':').map(function (i) { return +i; });
    var t2List = t2.split(':').map(function (i) { return +i; });
    if (t1List[0] < t2List[0])
        return true;
    if (t1List[0] === t2List[0] && t1List[1] <= t2List[1])
        return true;
    return false;
}
/**
 * 校验日期合法性，返回合法性和日期数组
 */
function verifyDate(dateStr) {
    if (!dateStr)
        return false;
    var date = new Date(dateStr.replace(/-/g, '/'));
    return isNaN(date.getMonth()) ? false : date;
}
/**
 * 获取当月最大天数
 */
function getMaxDay(year, month) {
    if (month === 4 || month === 6 || month === 9 || month === 11)
        return 30;
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
            return 29;
        else
            return 28;
    }
    return 31;
}
function formatValue(value) {
    var res;
    if (Array.isArray(value)) {
        res = value.map(function (item) { return String(item); });
    }
    else {
        res = value;
    }
    return res;
}
/**
 * 获取时间数组
 */
function getDateRange(start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
/**
 * 获取年份区间数组
 */
function getYearRange(start, end) {
    return getDateRange(start, end);
}
/**
 * 获取月份区间数组
 */
function getMonthRange(start, end, year) {
    var rangeStart = 1;
    var rangeEnd = 12;
    // 当前年份等于开始年份，由开始对应的月份约束开始值
    if (start.getFullYear() === year) {
        rangeStart = start.getMonth() + 1;
    }
    // 当前年份等于结束年份，由结束对应的月份约束结束值
    if (end.getFullYear() === year) {
        rangeEnd = end.getMonth() + 1;
    }
    return getDateRange(rangeStart, rangeEnd);
}
/**
 * 获取日期区间数组
 */
function getDayRange(start, end, year, month) {
    var rangeStart = 1;
    var rangeEnd = getMaxDay(year, month);
    if (start.getFullYear() === year && start.getMonth() + 1 === month) {
        rangeStart = start.getDate();
    }
    if (end.getFullYear() === year && end.getMonth() + 1 === month) {
        rangeEnd = end.getDate();
    }
    return getDateRange(rangeStart, rangeEnd);
}
var TOP = 102;
var LINE_HEIGHT = 34;
var MASK_HEIGHT = LINE_HEIGHT * 7;
var Picker = /** @class */ (function () {
    function Picker(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.index = [];
        this.mode = 'selector';
        this.disabled = false;
        this.range = [];
        this.start = '';
        this.end = '';
        this.fields = 'day';
        this.name = '';
        this.pickerValue = [];
        this.height = [];
        this.hidden = true;
        this.fadeOut = false;
        // 展示 Picker
        this.showPicker = function () {
            if (_this.disabled)
                return;
            _this.height = _this.getHeightByIndex();
            _this.hidden = false;
        };
        this.getHeightByIndex = function () {
            var height = _this.index.map(function (i) {
                var factor = 0;
                if (_this.mode === 'time') {
                    factor = LINE_HEIGHT * 4;
                }
                return TOP - LINE_HEIGHT * i - factor;
            });
            return height;
        };
        // 隐藏 picker
        this.hidePicker = function () {
            _this.fadeOut = true;
            setTimeout(function () {
                _this.hidden = true;
                _this.fadeOut = false;
            }, 350);
        };
        // 点击确定按钮
        this.handleChange = function () {
            _this.hidePicker();
            _this.index = _this.height.map(function (h) { return (TOP - h) / LINE_HEIGHT; });
            var value = _this.index.length && _this.mode !== 'selector'
                ? _this.index
                : _this.index[0];
            if (_this.mode === 'time') {
                var range_1 = [hoursRange.slice(), minutesRange.slice()];
                var timeArr = _this.index.map(function (n, i) { return range_1[i][n]; });
                _this.index = timeArr.map(function (item) { return parseInt(item); });
                value = timeArr.join(':');
            }
            if (_this.mode === 'date') {
                var _b = _this.pickerDate, _start = _b._start, _end = _b._end, _updateValue = _b._updateValue;
                var currentYear = _updateValue[0];
                var currentMonth = _updateValue[1];
                var yearRange = getYearRange(_start.getFullYear(), _end.getFullYear());
                var monthRange = getMonthRange(_start, _end, currentYear);
                var dayRange = getDayRange(_start, _end, currentYear, currentMonth);
                var year = yearRange[_this.index[0]];
                var month = monthRange[_this.index[1]];
                var day = dayRange[_this.index[2]];
                if (_this.fields === 'year') {
                    value = [year];
                }
                else if (_this.fields === 'month') {
                    value = [year, month];
                }
                else {
                    value = [year, month, day];
                }
                value = value
                    .map(function (item) {
                    return item < 10 ? "0" + item : item;
                })
                    .join('-');
            }
            _this.pickerValue = value;
            _this.onChange.emit({
                value: value
            });
        };
        // 点击取消按钮或蒙层
        this.handleCancel = function () {
            _this.hidePicker();
            _this.onCancel.emit();
        };
        this.updateHeight = function (height, columnId, needRevise) {
            if (needRevise === void 0) { needRevise = false; }
            var temp = __spreadArrays(_this.height);
            temp[columnId] = height;
            _this.height = temp;
            // time picker 必须在规定时间范围内，因此需要在 touchEnd 做修正
            if (needRevise) {
                var _b = _this, start = _b.start, end = _b.end;
                if (!verifyTime(start))
                    start = '00:00';
                if (!verifyTime(end))
                    end = '23:59';
                if (!compareTime(start, end))
                    return;
                var range_2 = [hoursRange.slice(), minutesRange.slice()];
                var timeList = _this.height.map(function (h) { return (TOP - h) / LINE_HEIGHT; });
                var timeStr = timeList.map(function (n, i) { return range_2[i][n]; }).join(':');
                if (!compareTime(start, timeStr)) {
                    // 修正到 start
                    var height_1 = start
                        .split(':')
                        .map(function (i) { return TOP - LINE_HEIGHT * (+i + 4); });
                    requestAnimationFrame(function () { return (_this.height = height_1); });
                }
                else if (!compareTime(timeStr, end)) {
                    // 修正到 end
                    var height_2 = end
                        .split(':')
                        .map(function (i) { return TOP - LINE_HEIGHT * (+i + 4); });
                    requestAnimationFrame(function () { return (_this.height = height_2); });
                }
            }
        };
        this.handleColumnChange = function (height, columnId) {
            _this.onColumnChange.emit({
                column: Number(columnId),
                value: (TOP - height) / LINE_HEIGHT
            });
        };
        this.updateDay = function (value, fields) {
            var _b = _this.pickerDate, _start = _b._start, _end = _b._end, _updateValue = _b._updateValue;
            _updateValue[fields] = value;
            var currentYear = _updateValue[0];
            var currentMonth = _updateValue[1];
            var currentDay = _updateValue[2];
            // 滚动年份
            if (fields === 0) {
                var monthRange = getMonthRange(_start, _end, currentYear);
                var max = monthRange[monthRange.length - 1];
                var min = monthRange[0];
                if (currentMonth > max)
                    _updateValue[1] = max;
                if (currentMonth < min)
                    _updateValue[1] = min;
                var index = monthRange.indexOf(_updateValue[1]);
                var height = TOP - LINE_HEIGHT * index;
                _this.updateDay(_updateValue[1], 1);
                _this.updateHeight(height, '1');
            }
            else if (fields === 1) {
                var dayRange = getDayRange(_start, _end, currentYear, currentMonth);
                var max = dayRange[dayRange.length - 1];
                var min = dayRange[0];
                if (currentDay > max)
                    _updateValue[2] = max;
                if (currentDay < min)
                    _updateValue[2] = min;
                var index = dayRange.indexOf(_updateValue[2]);
                var height = TOP - LINE_HEIGHT * index;
                _this.updateDay(_updateValue[2], 2);
                _this.updateHeight(height, '2');
            }
        };
        // 单列选择器
        this.getSelector = function () {
            return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { range: _this.range, rangeKey: _this.rangeKey, height: _this.height[0], updateHeight: _this.updateHeight, columnId: '0' }));
        };
        // 多列选择器
        this.getMultiSelector = function () {
            return _this.range.map(function (range, index) {
                return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { range: range, rangeKey: _this.rangeKey, height: _this.height[index], updateHeight: _this.updateHeight, onColumnChange: _this.handleColumnChange, columnId: String(index) }));
            });
        };
        // 时间选择器
        this.getTimeSelector = function () {
            var hourRange = hoursRange.slice();
            var minRange = minutesRange.slice();
            return [
                Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { mode: 'time', range: hourRange, height: _this.height[0], updateHeight: _this.updateHeight, columnId: '0' }),
                Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { mode: 'time', range: minRange, height: _this.height[1], updateHeight: _this.updateHeight, columnId: '1' })
            ];
        };
        // 日期选择器
        this.getDateSelector = function () {
            var _b = _this, fields = _b.fields, height = _b.height;
            var _c = _this.pickerDate, _start = _c._start, _end = _c._end, _updateValue = _c._updateValue;
            var currentYear = _updateValue[0];
            var currentMonth = _updateValue[1];
            var yearRange = getYearRange(_start.getFullYear(), _end.getFullYear())
                .map(function (item) { return item + "\u5E74"; });
            var monthRange = getMonthRange(_start, _end, currentYear)
                .map(function (item) { return (item < 10 ? "0" + item : item) + "\u6708"; });
            var dayRange = getDayRange(_start, _end, currentYear, currentMonth)
                .map(function (item) { return (item < 10 ? "0" + item : item) + "\u65E5"; });
            var renderView = [
                Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { mode: 'date', range: yearRange, height: height[0], updateDay: _this.updateDay, updateHeight: _this.updateHeight, columnId: '0' })
            ];
            if (fields === 'month' || fields === 'day') {
                renderView.push(Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { mode: 'date', range: monthRange, height: height[1], updateDay: _this.updateDay, updateHeight: _this.updateHeight, columnId: '1' }));
            }
            if (fields === 'day') {
                renderView.push(Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-picker-group", { mode: 'date', range: dayRange, height: height[2], updateDay: _this.updateDay, updateHeight: _this.updateHeight, columnId: '2' }));
            }
            return renderView;
        };
        this.onChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "change", 7);
        this.onColumnChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "columnchange", 7);
        this.onCancel = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "cancel", 7);
    }
    Picker.prototype.componentWillLoad = function () {
        this.handleProps();
    };
    Picker.prototype.componentDidLoad = function () {
        var _this = this;
        Object.defineProperty(this.el, 'value', {
            get: function () { return _this.pickerValue; },
            set: function (val) { return (_this.value = val); },
            configurable: true
        });
    };
    Picker.prototype.onPropsChange = function () {
        this.handleProps();
    };
    Picker.prototype.handleProps = function () {
        var _this = this;
        var _b = this, mode = _b.mode, start = _b.start, end = _b.end;
        if (mode === 'selector') {
            var value = this.value;
            this.index = [verifyValue(value, this.range) ? Math.floor(value) : 0];
        }
        else if (mode === 'multiSelector') {
            var value_1 = this.value;
            this.index = [];
            this.range.forEach(function (range, index) {
                var _a;
                var val = (_a = value_1) === null || _a === void 0 ? void 0 : _a[index];
                var item = verifyValue(val, range) ? Math.floor(val) : 0;
                _this.index.push(item);
            });
        }
        else if (mode === 'time') {
            var value = this.value;
            // check value...
            if (!verifyTime(value)) {
                console.warn('time picker value illegal');
                value = '0:0';
            }
            var time = value.split(':').map(function (n) { return +n; });
            this.index = time;
        }
        else if (mode === 'date') {
            var value = this.value;
            var _value = verifyDate(value) || new Date(new Date().setHours(0, 0, 0, 0)); // 没传值或值的合法性错误默认今天时间
            var _start = verifyDate(start) || new Date('1970/01/01');
            var _end = verifyDate(end) || new Date('2999/01/01');
            // 时间区间有效性
            if (_value >= _start && _value <= _end) {
                var currentYear = _value.getFullYear();
                var currentMonth = _value.getMonth() + 1;
                var currentDay = _value.getDate();
                var yearRange = getYearRange(_start.getFullYear(), _end.getFullYear());
                var monthRange = getMonthRange(_start, _end, currentYear);
                var dayRange = getDayRange(_start, _end, currentYear, currentMonth);
                this.index = [
                    yearRange.indexOf(currentYear),
                    monthRange.indexOf(currentMonth),
                    dayRange.indexOf(currentDay)
                ];
                if (!this.pickerDate ||
                    this.pickerDate._value.getTime() !== _value.getTime() ||
                    this.pickerDate._start.getTime() !== _start.getTime() ||
                    this.pickerDate._end.getTime() !== _end.getTime()) {
                    this.pickerDate = {
                        _value: _value,
                        _start: _start,
                        _end: _end,
                        _updateValue: [
                            currentYear,
                            currentMonth,
                            currentDay
                        ]
                    };
                }
            }
            else {
                throw new Error('Date Interval Error');
            }
        }
        // Prop 变化时，无论是否正在显示弹层，都更新 height 值
        this.height = this.getHeightByIndex();
        // 同步表单 value 值，用于 form submit
        this.pickerValue = this.value;
        if (mode === 'date') {
            var val = this.pickerValue;
            if (this.fields === 'month') {
                this.pickerValue = val.split('-').slice(0, 2).join('-');
            }
            else if (this.fields === 'year') {
                this.pickerValue = val.split('-')[0];
            }
        }
    };
    Picker.prototype.render = function () {
        var _b = this, name = _b.name, mode = _b.mode, fadeOut = _b.fadeOut, hidden = _b.hidden;
        // 选项条
        var pickerGroup;
        switch (mode) {
            case 'multiSelector':
                pickerGroup = this.getMultiSelector();
                break;
            case 'time':
                pickerGroup = this.getTimeSelector();
                break;
            case 'date':
                pickerGroup = this.getDateSelector();
                break;
            default:
                pickerGroup = this.getSelector();
        }
        // 动画类名控制逻辑
        var clsMask = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('weui-mask', 'weui-animate-fade-in', {
            'weui-animate-fade-out': fadeOut
        });
        var clsSlider = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('weui-picker', 'weui-animate-slide-up', {
            'weui-animate-slide-down': fadeOut
        });
        var shouldDivHidden = hidden ? { display: 'none' } : {};
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], null, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { onClick: this.showPicker }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { style: shouldDivHidden, class: clsMask, onClick: this.handleCancel }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { style: shouldDivHidden, class: clsSlider }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__hd' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__action', onClick: this.handleCancel }, "\u53D6\u6D88"), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__action', onClick: this.handleChange }, "\u786E\u5B9A")), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__bd' }, pickerGroup), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("input", { type: 'hidden', name: name, value: formatValue(this.pickerValue) }))));
    };
    Object.defineProperty(Picker.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "watchers", {
        get: function () {
            return {
                "mode": ["onPropsChange"],
                "value": ["onPropsChange"],
                "range": ["onPropsChange"],
                "start": ["onPropsChange"],
                "end": ["onPropsChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picker, "style", {
        get: function () { return ".weui-picker,.weui-picker__hd{font-size:12px}"; },
        enumerable: true,
        configurable: true
    });
    return Picker;
}());
var TaroPickerGroup = /** @class */ (function () {
    function TaroPickerGroup(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.range = [];
    }
    TaroPickerGroup.prototype.getPosition = function () {
        var transition = this.touchEnd ? 0.3 : 0;
        var transformValue = "translate3d(0, " + this.height + "px, 0)";
        var transitionValue = "transform " + transition + "s";
        return {
            transform: transformValue,
            '-webkit-transform': transformValue,
            transition: transitionValue,
            '-webkit-transition': transitionValue
        };
    };
    TaroPickerGroup.prototype.formulaUnlimitedScroll = function (range, absoluteHeight, direction) {
        var _this = this;
        var _b = this, height = _b.height, updateHeight = _b.updateHeight, columnId = _b.columnId;
        var factor = direction === 'up' ? 1 : -1;
        this.touchEnd = false;
        // 点击超过范围，点击到补帧时，先跳到另一端的补帧
        updateHeight(-range * factor * LINE_HEIGHT + height, columnId);
        // 再做过渡动画
        requestAnimationFrame(function () {
            _this.touchEnd = true;
            var index = Math.round(absoluteHeight / -LINE_HEIGHT) + range * factor;
            var relativeHeight = TOP - LINE_HEIGHT * index;
            updateHeight(relativeHeight, columnId, true);
        });
    };
    TaroPickerGroup.prototype.onTouchStart = function (e) {
        // 记录第一次的点击位置
        this.startY = e.changedTouches[0].clientY;
        this.preY = e.changedTouches[0].clientY;
        this.hadMove = false;
    };
    TaroPickerGroup.prototype.onTouchMove = function (e) {
        e.preventDefault();
        var y = e.changedTouches[0].clientY;
        var deltaY = y - this.preY;
        this.preY = y;
        this.touchEnd = false;
        if (Math.abs(y - this.startY) > 10)
            this.hadMove = true;
        var newPos = this.height + deltaY;
        // 处理时间选择器的无限滚动
        if (this.mode === 'time') {
            if (this.columnId === '0') {
                // 数字 28 来自于 4 格补帧 + 0 ～ 23 的 24 格，共 28 格
                if (newPos > TOP - LINE_HEIGHT * 3) {
                    newPos = TOP - LINE_HEIGHT * 27 + deltaY;
                }
                if (newPos < TOP - LINE_HEIGHT * 28) {
                    newPos = TOP - LINE_HEIGHT * 4 + deltaY;
                }
            }
            else if (this.columnId === '1') {
                if (newPos > TOP - LINE_HEIGHT * 3) {
                    newPos = TOP - LINE_HEIGHT * 63 + deltaY;
                }
                if (newPos < TOP - LINE_HEIGHT * 64) {
                    newPos = TOP - LINE_HEIGHT * 4 + deltaY;
                }
            }
        }
        this.updateHeight(newPos, this.columnId);
    };
    TaroPickerGroup.prototype.onTouchEnd = function (e) {
        var _b = this, mode = _b.mode, range = _b.range, height = _b.height, updateHeight = _b.updateHeight, onColumnChange = _b.onColumnChange, columnId = _b.columnId;
        var max = 0;
        var min = -LINE_HEIGHT * (range.length - 1);
        var endY = e.changedTouches[0].clientY;
        this.touchEnd = true;
        // touchEnd 时的高度，可能带小数点，需要再处理
        var absoluteHeight;
        if (!this.hadMove) {
            /** 点击 */
            // 屏幕高度
            var windowHeight = window.innerHeight;
            // picker__mask 垂直方向距离屏幕顶部的高度
            var relativeY = windowHeight - MASK_HEIGHT / 2;
            absoluteHeight = height - TOP - (endY - relativeY);
            // 处理时间选择器的无限滚动
            if (mode === 'time') {
                if (columnId === '0') {
                    // 点击上溢出
                    // absoluteHeight 是相对模块中点来算的，所以会算多半行，这时要减去这半行，即2.5行
                    if (absoluteHeight > -LINE_HEIGHT * 2.5) {
                        return this.formulaUnlimitedScroll(24, absoluteHeight, 'up');
                    }
                    // 点击下溢出
                    if (absoluteHeight < -LINE_HEIGHT * 28.5) {
                        return this.formulaUnlimitedScroll(24, absoluteHeight, 'down');
                    }
                }
                else if (columnId === '1') {
                    // 点击上溢出
                    if (absoluteHeight > -LINE_HEIGHT * 2.5) {
                        return this.formulaUnlimitedScroll(60, absoluteHeight, 'up');
                    }
                    // 点击下溢出
                    if (absoluteHeight < -LINE_HEIGHT * 64.5) {
                        return this.formulaUnlimitedScroll(60, absoluteHeight, 'down');
                    }
                }
            }
        }
        else {
            /** 滚动 */
            absoluteHeight = height - TOP;
        }
        // 边界情况处理
        if (absoluteHeight > max)
            absoluteHeight = 0;
        if (absoluteHeight < min)
            absoluteHeight = min;
        // 先按公式算出 index, 再用此 index 算出一个整数高度
        var index = Math.round(absoluteHeight / -LINE_HEIGHT);
        var relativeHeight = TOP - LINE_HEIGHT * index;
        if (this.mode === 'date') {
            if (this.columnId === '0') {
                this.updateDay(+this.range[index].replace(/[^0-9]/gi, ''), 0);
            }
            if (this.columnId === '1') {
                this.updateDay(+this.range[index].replace(/[^0-9]/gi, ''), 1);
            }
            if (this.columnId === '2') {
                this.updateDay(+this.range[index].replace(/[^0-9]/gi, ''), 2);
            }
        }
        updateHeight(relativeHeight, columnId, mode === 'time');
        onColumnChange && onColumnChange(relativeHeight, columnId);
    };
    TaroPickerGroup.prototype.render = function () {
        var _b = this, range = _b.range, rangeKey = _b.rangeKey;
        var pickerItem = range.map(function (item) {
            var content = rangeKey ? item[rangeKey] : item;
            return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__item' }, content));
        });
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: 'weui-picker__group' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__mask' }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__indicator' }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'weui-picker__content', style: this.getPosition() }, pickerItem)));
    };
    return TaroPickerGroup;
}());



/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classnames; });
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */
    (function () {
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
            var classes = [];
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!arg)
                    continue;
                var argType = typeof arg;
                if (argType === 'string' || argType === 'number') {
                    classes.push(arg);
                }
                else if (Array.isArray(arg) && arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) {
                        classes.push(inner);
                    }
                }
                else if (argType === 'object') {
                    for (var key in arg) {
                        if (hasOwn.call(arg, key) && arg[key]) {
                            classes.push(key);
                        }
                    }
                }
            }
            return classes.join(' ');
        }
        if (module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
        }
        else {
            window.classNames = classNames;
        }
    }());
});



/***/ })

};;