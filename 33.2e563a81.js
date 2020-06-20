exports.ids = [33];
exports.modules = {

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_rich_text_core", function() { return RichText; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

var RichText = /** @class */ (function () {
    function RichText(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.renderNode = function (node) {
            if ('type' in node && node.type === 'text') {
                // unsupport Html Entries
                var content = (node.text || '').replace(/&nbsp;/g, '\u00A0');
                return content;
            }
            else if ('name' in node && node.name) {
                var name = node.name, attrs = node.attrs, children = node.children;
                var attributes = {};
                var childList = [];
                if (attrs && typeof attrs === 'object') {
                    var _loop_1 = function (key) {
                        var val = attrs[key];
                        if (key === 'style' && typeof val === 'string') {
                            // stencil JSX style props only support object
                            var styles = val
                                .split(';')
                                .map(function (item) { return item.trim(); })
                                .filter(function (item) { return item; });
                            var styleObj_1 = {};
                            styles.forEach(function (item) {
                                if (!item)
                                    return;
                                var res = /(.+): *(.+)/g.exec(item);
                                if (!res)
                                    return;
                                var name = res[1], value = res[2];
                                var styleName = name.replace(/-([a-z])/g, function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    return args[1].toUpperCase();
                                });
                                styleObj_1[styleName] = value;
                            });
                            if (Object.keys(styleObj_1).length) {
                                attributes.style = styleObj_1;
                            }
                            return "continue";
                        }
                        attributes[key] = val;
                    };
                    for (var key in attrs) {
                        _loop_1(key);
                    }
                }
                if (children && children.length) {
                    childList = children.map(function (node) { return _this.renderNode(node); });
                }
                // @ts-ignore
                return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(name, attributes, childList);
            }
            return null;
        };
    }
    RichText.prototype.render = function () {
        var _a = this, nodes = _a.nodes, renderNode = _a.renderNode;
        if (Array.isArray(nodes)) {
            return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], null, nodes.map(function (node) { return renderNode(node); })));
        }
        else {
            return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { innerHTML: nodes });
        }
    };
    return RichText;
}());



/***/ })

};;