exports.ids = [16];
exports.modules = {

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_audio_core", function() { return Audio; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

var Audio = /** @class */ (function () {
    function Audio(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.controls = true;
        this.autoplay = false;
        this.loop = false;
        this.muted = false;
        this.onError = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "error", 7);
        this.onPlay = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "play", 7);
        this.onPause = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "pause", 7);
        this.onTimeUpdate = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "timeupdate", 7);
        this.onEnded = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "ended", 7);
    }
    Audio.prototype.bindevent = function () {
        var _this = this;
        this.audio.addEventListener('timeupdate', function (e) {
            _this.onTimeUpdate.emit({
                duration: e.srcElement.duration,
                currentTime: e.srcElement.duration
            });
        });
        this.audio.addEventListener('ended', function () {
            _this.onEnded.emit();
        });
        this.audio.addEventListener('play', function () {
            _this.onPlay.emit();
        });
        this.audio.addEventListener('pause', function (e) {
            _this.onPause.emit(e);
        });
        // 1网络错误, 2解码错误, 3解码错误，4 不合适资源
        this.audio.addEventListener('error', function (e) {
            var _a;
            _this.onError.emit({
                errMsg: (_a = e.srcElement.error) === null || _a === void 0 ? void 0 : _a.code
            });
        });
    };
    Audio.prototype.componentDidLoad = function () {
        this.bindevent();
    };
    Audio.prototype.render = function () {
        var _this = this;
        var _b = this, src = _b.src, controls = _b.controls, autoplay = _b.autoplay, loop = _b.loop, muted = _b.muted;
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("audio", { src: src, controls: controls, autoplay: autoplay, loop: loop, muted: muted, ref: function (audio) { _this.audio = audio; } }));
    };
    Object.defineProperty(Audio, "style", {
        get: function () { return "audio{max-width:100%;outline:none}"; },
        enumerable: true,
        configurable: true
    });
    return Audio;
}());



/***/ })

};;