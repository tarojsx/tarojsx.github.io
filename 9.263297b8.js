exports.ids = [9];
exports.modules = {

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_tabbar", function() { return Tabbar; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(978);


function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
}
// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
        list[i] = list[k];
    }
    list.pop();
}
// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
    if (from === undefined)
        from = '';
    var toParts = (to && to.split('/')) || [];
    var fromParts = (from && from.split('/')) || [];
    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;
    if (to && isAbsolute(to)) {
        // to is absolute
        fromParts = toParts;
    }
    else if (toParts.length) {
        // to is relative, drop the filename
        fromParts.pop();
        fromParts = fromParts.concat(toParts);
    }
    if (!fromParts.length)
        return '/';
    var hasTrailingSlash;
    if (fromParts.length) {
        var last = fromParts[fromParts.length - 1];
        hasTrailingSlash = last === '.' || last === '..' || last === '';
    }
    else {
        hasTrailingSlash = false;
    }
    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
        var part = fromParts[i];
        if (part === '.') {
            spliceOne(fromParts, i);
        }
        else if (part === '..') {
            spliceOne(fromParts, i);
            up++;
        }
        else if (up) {
            spliceOne(fromParts, i);
            up--;
        }
    }
    if (!mustEndAbs)
        for (; up--; up)
            fromParts.unshift('..');
    if (mustEndAbs &&
        fromParts[0] !== '' &&
        (!fromParts[0] || !isAbsolute(fromParts[0])))
        fromParts.unshift('');
    var result = fromParts.join('/');
    if (hasTrailingSlash && result.substr(-1) !== '/')
        result += '/';
    return result;
}
var splitUrl = function (_url) {
    var url = _url || '';
    var pos;
    var res = {
        path: null,
        query: null,
        fragment: null
    };
    pos = url.indexOf('#');
    if (pos > -1) {
        res.fragment = url.substring(pos + 1);
        url = url.substring(0, pos);
    }
    pos = url.indexOf('?');
    if (pos > -1) {
        res.query = url.substring(pos + 1);
        url = url.substring(0, pos);
    }
    res.path = url;
    return res;
};
var TabbarItem = function (props) {
    var _a = props.index, index = _a === void 0 ? null : _a, _b = props.isSelected, isSelected = _b === void 0 ? false : _b, _c = props.textColor, textColor = _c === void 0 ? {} : _c, _d = props.iconPath, iconPath = _d === void 0 ? '' : _d, _e = props.badgeText, badgeText = _e === void 0 ? null : _e, _f = props.showRedDot, showRedDot = _f === void 0 ? false : _f, text = props.text;
    var className = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('weui-tabbar__item', {
        'weui-bar__item_on': isSelected
    });
    var badgeStyle = {
        position: 'absolute',
        top: '-2px',
        right: '-13px'
    };
    var dotStyle = {
        position: 'absolute',
        top: '0',
        right: '-6px'
    };
    function onClick() {
        props.onSelect(props.index);
    }
    return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("a", { key: index, href: 'javascript:;', class: className, onClick: onClick }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("span", { style: { display: 'inline-block', position: 'relative' } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("img", { src: iconPath, alt: '', class: 'weui-tabbar__icon' }), badgeText &&
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("span", { class: 'weui-badge taro-tabbar-badge', style: badgeStyle }, badgeText), showRedDot &&
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("span", { class: 'weui-badge weui-badge_dot', style: dotStyle })), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("p", { class: 'weui-tabbar__label', style: { color: textColor } }, text));
};
var Taro = __webpack_require__(118);
// const removeLeadingSlash = str => str.replace(/^\.?\//, '')
// const removeTrailingSearch = str => str.replace(/\?[\s\S]*$/, '')
var addLeadingSlash = function (str) { return str[0] === '/' ? str : "/" + str; };
var hasBasename = function (path, prefix) { return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path); };
var stripBasename = function (path, prefix) { return hasBasename(path, prefix) ? path.substr(prefix.length) : path; };
var STATUS_SHOW = 0;
var STATUS_HIDE = 1;
var STATUS_SLIDEOUT = 2;
var basicTabBarClassName = 'taro-tabbar__tabbar';
var hideTabBarClassName = 'taro-tabbar__tabbar-hide';
var hideTabBarWithAnimationClassName = 'taro-tabbar__tabbar-slideout';
var Tabbar = /** @class */ (function () {
    function Tabbar(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.homePage = '';
        this.customRoutes = [];
        this.tabbarPos = 'bottom';
        this.selectedIndex = -1;
        this.status = STATUS_SHOW;
        this.getOriginUrl = function (url) {
            var customRoute = _this.customRoutes.filter(function (_a) {
                var customUrl = _a[1];
                var patha = splitUrl(customUrl).path;
                var pathb = splitUrl(url).path;
                return patha === pathb;
            });
            return customRoute.length ? customRoute[0][0] : url;
        };
        this.getSelectedIndex = function (url) {
            var foundIndex = -1;
            _this.list.forEach(function (_a, idx) {
                var pagePath = _a.pagePath;
                var patha = splitUrl(url).path;
                var pathb = splitUrl(pagePath).path;
                if (patha === pathb) {
                    foundIndex = idx;
                }
            });
            return foundIndex;
        };
        this.switchTab = function (index) {
            _this.selectedIndex = index;
            Taro.redirectTo({
                url: _this.list[index].pagePath
            });
        };
        this.switchTabHandler = function (_a) {
            var url = _a.url, successHandler = _a.successHandler, errorHandler = _a.errorHandler;
            var currentUrl = _this.getOriginUrl(_this.getCurrentUrl() || _this.homePage);
            var nextTab = resolvePathname(url, currentUrl);
            var foundIndex = _this.getSelectedIndex(nextTab);
            if (foundIndex > -1) {
                _this.switchTab(foundIndex);
                successHandler({
                    errMsg: 'switchTab:ok'
                });
            }
            else {
                errorHandler({
                    errMsg: "switchTab:fail page \"" + nextTab + "\" is not found"
                });
            }
        };
        this.routerChangeHandler = function (options) {
            var toLocation;
            var currentPage;
            if (options) {
                toLocation = options.toLocation;
            }
            if (toLocation && toLocation.path) {
                var tmpPath = addLeadingSlash(toLocation.path);
                currentPage = tmpPath === '/'
                    ? _this.homePage
                    : tmpPath;
            }
            else {
                currentPage = _this.getCurrentUrl();
            }
            _this.selectedIndex = _this.getSelectedIndex(_this.getOriginUrl(currentPage));
        };
        this.setTabBarBadgeHandler = function (_a) {
            var index = _a.index, text = _a.text, errorHandler = _a.errorHandler;
            var list = _this.list;
            if (index in list) {
                _this.list[index].showRedDot = false;
                _this.list[index].badgeText = text;
            }
            else {
                errorHandler({
                    errMsg: 'setTabBarBadge:fail tabbar item not found'
                });
            }
        };
        this.removeTabBarBadgeHandler = function (_a) {
            var index = _a.index, successHandler = _a.successHandler, errorHandler = _a.errorHandler;
            var list = _this.list;
            if (index in list) {
                _this.list[index].badgeText = null;
                _this.list[index].badgeText = null;
                successHandler({
                    errMsg: 'removeTabBarBadge:ok'
                });
            }
            else {
                errorHandler({
                    errMsg: 'removeTabBarBadge:fail tabbar item not found'
                });
            }
        };
        this.showTabBarRedDotHandler = function (_a) {
            var index = _a.index, successHandler = _a.successHandler, errorHandler = _a.errorHandler;
            var list = _this.list;
            if (index in list) {
                list[index].badgeText = null;
                list[index].showRedDot = true;
                successHandler({
                    errMsg: 'showTabBarRedDot:ok'
                });
            }
            else {
                errorHandler({
                    errMsg: 'showTabBarRedDot:fail tabbar item not found'
                });
            }
        };
        this.hideTabBarRedDotHandler = function (_a) {
            var index = _a.index, successHandler = _a.successHandler, errorHandler = _a.errorHandler;
            var list = _this.list;
            if (index in list) {
                list[index].showRedDot = false;
                successHandler({
                    errMsg: 'hideTabBarRedDot:ok'
                });
            }
            else {
                errorHandler({
                    errMsg: 'hideTabBarRedDot:fail tabbar item not found'
                });
            }
        };
        this.showTabBarHandler = function (_a) {
            var successHandler = _a.successHandler;
            _this.status = STATUS_SHOW;
            successHandler({
                errMsg: 'showTabBar:ok'
            });
        };
        this.hideTabBarHandler = function (_a) {
            var animation = _a.animation, successHandler = _a.successHandler;
            _this.status = animation ? STATUS_SLIDEOUT : STATUS_HIDE;
            successHandler({
                errMsg: 'hideTabBar:ok'
            });
        };
        var list = this.conf.list;
        var customRoutes = this.conf.customRoutes;
        if (Object.prototype.toString.call(list) !== '[object Array]' ||
            list.length < 2 ||
            list.length > 5) {
            throw new Error('tabBar 配置错误');
        }
        this.homePage = addLeadingSlash(this.homePage);
        for (var key in customRoutes) {
            this.customRoutes.push([key, customRoutes[key]]);
        }
        list.forEach(function (item) {
            if (item.pagePath.indexOf('/') !== 0) {
                item.pagePath = '/' + item.pagePath;
            }
        });
        this.list = list;
        this.onLongPress = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "longpress", 7);
    }
    Tabbar.prototype.getCurrentUrl = function () {
        var routerMode = this.conf.mode;
        var routerBasename = this.conf.basename || '/';
        var url;
        if (routerMode === 'hash') {
            var href = window.location.href;
            var hashIndex = href.indexOf('#');
            url = hashIndex === -1
                ? ''
                : href.substring(hashIndex + 1);
        }
        else {
            url = location.pathname;
        }
        var processedUrl = addLeadingSlash(stripBasename(url, routerBasename));
        return processedUrl === '/' ? this.homePage : processedUrl;
    };
    Tabbar.prototype.bindEvent = function () {
        Taro.eventCenter.on('__taroRouterChange', this.routerChangeHandler);
        Taro.eventCenter.on('__taroSwitchTab', this.switchTabHandler);
        Taro.eventCenter.on('__taroSetTabBarBadge', this.setTabBarBadgeHandler);
        Taro.eventCenter.on('__taroRemoveTabBarBadge', this.removeTabBarBadgeHandler);
        Taro.eventCenter.on('__taroShowTabBarRedDotHandler', this.showTabBarRedDotHandler);
        Taro.eventCenter.on('__taroHideTabBarRedDotHandler', this.hideTabBarRedDotHandler);
        Taro.eventCenter.on('__taroShowTabBar', this.showTabBarHandler);
        Taro.eventCenter.on('__taroHideTabBar', this.hideTabBarHandler);
    };
    Tabbar.prototype.removeEvent = function () {
        Taro.eventCenter.off('__taroRouterChange', this.routerChangeHandler);
        Taro.eventCenter.off('__taroSwitchTab', this.switchTabHandler);
        Taro.eventCenter.off('__taroSetTabBarBadge', this.setTabBarBadgeHandler);
        Taro.eventCenter.off('__taroRemoveTabBarBadge', this.removeTabBarBadgeHandler);
        Taro.eventCenter.off('__taroShowTabBarRedDotHandler', this.showTabBarRedDotHandler);
        Taro.eventCenter.off('__taroHideTabBarRedDotHandler', this.hideTabBarRedDotHandler);
        Taro.eventCenter.off('__taroShowTabBarHandler', this.showTabBarHandler);
        Taro.eventCenter.off('__taroHideTabBarHandler', this.hideTabBarHandler);
    };
    Tabbar.prototype.componentDidLoad = function () {
        this.tabbarPos = this.tabbar.nextElementSibling ? 'top' : 'bottom';
        this.bindEvent();
        this.routerChangeHandler();
    };
    Tabbar.prototype.componentDidUnload = function () {
        this.removeEvent();
    };
    Tabbar.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this, conf = _c.conf, _d = _c.tabbarPos, tabbarPos = _d === void 0 ? 'bottom' : _d;
        var status = this.status;
        var containerCls = Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('weui-tabbar', (_a = {},
            _a["taro-tabbar__border-" + (conf.borderStyle || 'black')] = true,
            _a));
        var shouldHideTabBar = this.selectedIndex === -1 || status === STATUS_HIDE;
        var shouldSlideout = status === STATUS_SLIDEOUT;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])(basicTabBarClassName, basicTabBarClassName + "-" + tabbarPos, (_b = {},
                _b[hideTabBarClassName] = shouldHideTabBar,
                _b[hideTabBarWithAnimationClassName] = shouldSlideout,
                _b)) }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: containerCls, style: {
                backgroundColor: conf.backgroundColor || ''
            } }, this.list.map(function (item, index) {
            var isSelected = _this.selectedIndex === index;
            var textColor;
            var iconPath;
            if (isSelected) {
                textColor = conf.selectedColor;
                iconPath = item.selectedIconPath;
            }
            else {
                textColor = conf.color || '';
                iconPath = item.iconPath;
            }
            return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(TabbarItem, { index: index, onSelect: _this.switchTab.bind(_this), isSelected: isSelected, textColor: textColor, iconPath: iconPath, text: item.text, badgeText: item.badgeText, showRedDot: item.showRedDot }));
        }))));
    };
    Object.defineProperty(Tabbar.prototype, "tabbar", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabbar, "style", {
        get: function () { return "#app,body,html{height:100%}.taro-tabbar__border-white:before{border-top-color:#fff!important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom .2s,top .2s;transition:bottom .2s,top .2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"; },
        enumerable: true,
        configurable: true
    });
    return Tabbar;
}());



/***/ }),

/***/ 978:
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