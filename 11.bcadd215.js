exports.ids = [11];
exports.modules = {

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_video_control", function() { return VideoControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_video_core", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_video_danmu", function() { return VideoDanmu; });
/* harmony import */ var _core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var formatTime = function (time) {
    if (time === null)
        return '';
    var sec = Math.round(time % 60);
    var min = Math.round((time - sec) / 60);
    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
};
var calcDist = function (x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};
var normalizeNumber = function (number) {
    return Math.max(-1, Math.min(number, 1));
};
var throttle = function (fn, threshhold) {
    var lastTime = 0;
    return function () {
        var now = Date.now();
        if (now - lastTime > threshhold) {
            fn.apply(this, arguments);
            lastTime = now;
        }
    };
};
var VideoControl = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.visible = false;
        this.isDraggingProgressBall = false;
        this.percentage = 0;
        this.progressDimentions = {
            left: 0,
            width: 0
        };
        this.calcPercentage = function (pageX) {
            var pos = pageX - _this.progressDimentions.left;
            pos = Math.max(pos, 0);
            pos = Math.min(pos, _this.progressDimentions.width);
            return pos / _this.progressDimentions.width;
        };
        this.onDragProgressBallStart = function () {
            _this.isDraggingProgressBall = true;
            _this.hideControlsTimer && clearTimeout(_this.hideControlsTimer);
        };
        this.onClickProgress = function (e) {
            e.stopPropagation();
            var percentage = _this.calcPercentage(e.pageX);
            _this.seekFunc(percentage * _this.duration);
            _this.toggleVisibility(true);
        };
    }
    class_1.prototype.onDocumentTouchMove = function (e) {
        if (!this.isDraggingProgressBall)
            return;
        var touchX = e.touches[0].pageX;
        this.percentage = this.calcPercentage(touchX);
        this.setProgressBall(this.percentage);
        this.setCurrentTime(this.percentage * this.duration);
    };
    class_1.prototype.onDocumentTouchEnd = function () {
        if (!this.isDraggingProgressBall)
            return;
        this.isDraggingProgressBall = false;
        this.seekFunc(this.percentage * this.duration);
        this.toggleVisibility(true);
    };
    class_1.prototype.setProgressBall = function (percentage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                if (this.progressBallRef) {
                    this.progressBallRef.style.left = percentage * 100 + "%";
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.toggleVisibility = function (nextVisible) {
        return __awaiter(this, void 0, void 0, function () {
            var visible;
            var _this = this;
            return __generator(this, function (_c) {
                visible = nextVisible === undefined ? !this.visible : nextVisible;
                if (visible) {
                    this.hideControlsTimer && clearTimeout(this.hideControlsTimer);
                    if (this.isPlaying) {
                        this.hideControlsTimer = setTimeout(function () {
                            _this.toggleVisibility(false);
                        }, 2000);
                    }
                    this.controlsRef.style.visibility = 'visible';
                }
                else {
                    this.controlsRef.style.visibility = 'hidden';
                }
                this.visible = !!visible;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getIsDraggingProgressBall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                return [2 /*return*/, this.isDraggingProgressBall];
            });
        });
    };
    class_1.prototype.setCurrentTime = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                this.currentTimeRef.innerHTML = formatTime(time);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var _c = this, controls = _c.controls, currentTime = _c.currentTime, duration = _c.duration, isPlaying = _c.isPlaying, pauseFunc = _c.pauseFunc, playFunc = _c.playFunc, showPlayBtn = _c.showPlayBtn, showProgress = _c.showProgress;
        var formattedDuration = formatTime(duration);
        var playBtn;
        if (!showPlayBtn) {
            playBtn = null;
        }
        else if (isPlaying) {
            playBtn = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-control-button taro-video-control-button-pause', onClick: pauseFunc });
        }
        else {
            playBtn = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-control-button taro-video-control-button-play', onClick: playFunc });
        }
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: 'taro-video-bar taro-video-bar-full' }, controls && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-controls' }, playBtn, showProgress && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-current-time', ref: function (dom) { return (_this.currentTimeRef = dom); } }, formatTime(currentTime))), showProgress && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-progress-container', onClick: this.onClickProgress }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-progress', ref: function (ref) {
                if (!ref)
                    return;
                var rect = ref.getBoundingClientRect();
                _this.progressDimentions.left = rect.left;
                _this.progressDimentions.width = rect.width;
            } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-progress-buffered', style: { width: '100%' } }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-ball', ref: function (dom) { return (_this.progressBallRef = dom); }, onTouchStart: this.onDragProgressBallStart, style: {
                left: (formattedDuration ? (this.currentTime / duration) * 100 : 0) + "%"
            } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-inner' }))))), showProgress && Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-duration' }, formattedDuration))), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "controlsRef", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var Video = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.currentTime = 0;
        this.isDraggingProgress = false;
        this.gestureType = 'none';
        /**
         * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
         */
        this.controls = true;
        /**
         * 是否自动播放
         */
        this.autoplay = false;
        /**
         * 是否循环播放
         */
        this.loop = false;
        /**
         * 是否静音播放
         */
        this.muted = false;
        /**
         * 指定视频初始播放位置
         */
        this.initialTime = 0;
        /**
         * 当视频大小与 video 容器大小不一致时，视频的表现形式
         */
        this.objectFit = 'contain';
        this.showProgress = true;
        /**
         * 是否显示全屏按钮
         */
        this.showFullscreenBtn = true;
        /**
         * 是否显示视频底部控制栏的播放按钮
         */
        this.showPlayBtn = true;
        /**
         * 是否显示视频中间的播放按钮
         */
        this.showCenterPlayBtn = true;
        /**
         * 是否显示静音按钮
         */
        this.showMuteBtn = false;
        /**
         * 是否显示弹幕按钮
         */
        this.danmuBtn = false;
        /**
         * 是否展示弹幕
         */
        this.enableDanmu = false;
        /**
         * 是否开启播放手势，即双击切换播放/暂停
         */
        this.enablePlayGesture = false;
        /**
         * 是否开启控制进度的手势
         */
        this.enableProgressGesture = true;
        /**
         * 在非全屏模式下，是否开启亮度与音量调节手势
         */
        this.vslideGesture = false;
        /**
         * 在全屏模式下，是否开启亮度与音量调节手势
         */
        this.vslideGestureInFullscreen = true;
        this._enableDanmu = false;
        this.isPlaying = false;
        this.isFirst = true;
        this.isFullScreen = false;
        this.isMute = false;
        this.analyseGesture = function (e) {
            var _a;
            var obj = {
                type: 'none'
            };
            var nowX = e.touches[0].screenX;
            var nowY = e.touches[0].screenY;
            var distX = nowX - _this.lastTouchScreenX;
            var distY = nowY - _this.lastTouchScreenY;
            var enableVslideGesture = _this.isFullScreen ? _this.vslideGestureInFullscreen : _this.vslideGesture;
            if (_this.gestureType === 'none') {
                // 两点间距离
                var dist = calcDist(distX, distY);
                // 没有移动
                if (dist < 10)
                    return obj;
                if (Math.abs(distY) >= Math.abs(distX)) {
                    // 垂直方向移动：调整音量
                    if (enableVslideGesture) {
                        _this.gestureType = 'adjustVolume';
                        _this.lastVolume = _this.videoRef.volume;
                    }
                    else {
                        return obj;
                    }
                }
                else if (Math.abs(distY) < Math.abs(distX)) {
                    // 水平方向移动：调整进度
                    if (_this.enableProgressGesture) {
                        _this.gestureType = 'adjustProgress';
                        _this.lastPercentage = _this.currentTime / (_a = _this.duration, (_a !== null && _a !== void 0 ? _a : _this._duration));
                    }
                    else {
                        return obj;
                    }
                }
            }
            obj.type = _this.gestureType;
            obj.dataX = normalizeNumber(distX / 200);
            obj.dataY = normalizeNumber(distY / 200);
            return obj;
        };
        this.handlePlay = function () {
            _this.isPlaying = true;
            _this.isFirst = false;
            _this.controlsRef.toggleVisibility(true);
            _this.onPlay.emit();
        };
        this.handlePause = function () {
            _this.isPlaying = false;
            _this.controlsRef.toggleVisibility(true);
            _this.onPause.emit();
        };
        this.handleEnded = function () {
            _this.isFirst = true;
            _this.pause();
            _this.controlsRef.toggleVisibility();
            _this.onEnded.emit();
        };
        this.handleTimeUpdate = throttle(function (e) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, duration, isControlDragging;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.currentTime = this.videoRef.currentTime;
                        duration = this.duration || this._duration;
                        return [4 /*yield*/, this.controlsRef.getIsDraggingProgressBall()];
                    case 1:
                        isControlDragging = _c.sent();
                        if (this.controls && this.showProgress) {
                            if (!isControlDragging && !this.isDraggingProgress) {
                                this.controlsRef.setProgressBall(this.currentTime / duration);
                                this.controlsRef.setCurrentTime(this.currentTime);
                            }
                        }
                        this.danmuRef.tick(this.currentTime);
                        this.onTimeUpdate.emit({
                            duration: (_a = e.target) === null || _a === void 0 ? void 0 : _a.duration,
                            currentTime: (_b = e.target) === null || _b === void 0 ? void 0 : _b.currentTime
                        });
                        if (this.duration) {
                            if (this.currentTime >= this.duration) {
                                this.seek(0);
                                this.handleEnded();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 250);
        this.handleError = function (e) {
            var _a, _b;
            _this.onError.emit({
                errMsg: (_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message
            });
        };
        this.handleDurationChange = function () {
            _this._duration = _this.videoRef.duration;
        };
        this.handleProgress = function () {
            _this.onProgress.emit();
        };
        this.handleLoadedMetaData = function (e) {
            var target = e.target;
            _this.onLoadedMetaData.emit({
                width: target.videoWidth,
                height: target.videoHeight,
                duration: target.duration
            });
        };
        this.play = function () {
            _this.videoRef.play();
        };
        this.pause = function () {
            _this.videoRef.pause();
        };
        this.stop = function () {
            _this.videoRef.pause();
            _this.seek(0);
        };
        this.seek = function (position) {
            _this.videoRef.currentTime = position;
        };
        this.onTouchStartContainer = function (e) {
            _this.lastTouchScreenX = e.touches[0].screenX;
            _this.lastTouchScreenY = e.touches[0].screenY;
        };
        this.onClickContainer = function () {
            if (_this.enablePlayGesture) {
                var now = Date.now();
                if (now - _this.lastClickedTime < 300) {
                    // 双击
                    _this.isPlaying ? _this.pause() : _this.play();
                }
                _this.lastClickedTime = now;
            }
            _this.controlsRef.toggleVisibility();
        };
        this.onClickFullScreenBtn = function (e) {
            e.stopPropagation();
            _this.toggleFullScreen();
        };
        this.toggleFullScreen = function (nextFullScreenState) {
            var isFullScreen = nextFullScreenState === undefined ? !_this.isFullScreen : nextFullScreenState;
            _this.isFullScreen = isFullScreen;
            _this.controlsRef.toggleVisibility(true);
            _this.onFullScreenChange.emit({
                fullScreen: isFullScreen,
                direction: 'vertical'
            });
        };
        this.toggleMute = function (e) {
            e.stopPropagation();
            _this.videoRef.muted = !_this.isMute;
            _this.controlsRef.toggleVisibility(true);
            _this.isMute = !_this.isMute;
        };
        this.toggleDanmu = function (e) {
            e.stopPropagation();
            _this.controlsRef.toggleVisibility(true);
            _this._enableDanmu = !_this._enableDanmu;
        };
        this.onPlay = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "play", 7);
        this.onPause = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "pause", 7);
        this.onEnded = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "ended", 7);
        this.onTimeUpdate = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "timeupdate", 7);
        this.onError = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "error", 7);
        this.onFullScreenChange = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "fullscreenchange", 7);
        this.onProgress = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "progress", 7);
        this.onLoadedMetaData = Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "d"])(this, "loadedmetadata", 7);
    }
    class_2.prototype.componentWillLoad = function () {
        this._enableDanmu = this.enableDanmu;
    };
    class_2.prototype.componentDidLoad = function () {
        if (this.initialTime) {
            this.videoRef.currentTime = this.initialTime;
        }
        // 目前只支持 danmuList 初始化弹幕列表，还未支持更新弹幕列表
        this.danmuRef.sendDanmu(this.danmuList);
    };
    class_2.prototype.componentDidRender = function () {
        var parentElement = this.el.parentElement;
        var parentTagName = parentElement.tagName;
        if (this.isFullScreen) {
            if (parentTagName !== 'BODY') {
                parentElement.removeChild(this.el);
                document.body.appendChild(this.el);
            }
        }
        else {
            if (parentTagName !== 'DIV' || !parentElement.className.includes('taro-video')) {
                if (!this.wrapperElement) {
                    var container = document.createElement('div');
                    container.className = 'taro-video';
                    parentElement.removeChild(this.el);
                    container.appendChild(this.el);
                    parentElement.appendChild(container);
                    this.wrapperElement = container;
                }
                else {
                    parentElement.removeChild(this.el);
                    this.wrapperElement.appendChild(this.el);
                }
            }
        }
    };
    class_2.prototype.watchEnableDanmu = function (newVal) {
        this._enableDanmu = newVal;
    };
    class_2.prototype.onDocumentTouchMove = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var gestureObj, nextVolume, duration;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.lastTouchScreenX === undefined || this.lastTouchScreenY === undefined)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.controlsRef.getIsDraggingProgressBall()];
                    case 1:
                        if (_c.sent())
                            return [2 /*return*/];
                        gestureObj = this.analyseGesture(e);
                        if (gestureObj.type === 'adjustVolume') {
                            this.toastVolumeRef.style.visibility = 'visible';
                            nextVolume = Math.max(Math.min(this.lastVolume - gestureObj.dataY, 1), 0);
                            this.videoRef.volume = nextVolume;
                            this.toastVolumeBarRef.style.width = nextVolume * 100 + "%";
                        }
                        else if (gestureObj.type === 'adjustProgress') {
                            this.isDraggingProgress = true;
                            this.nextPercentage = Math.max(Math.min(this.lastPercentage + gestureObj.dataX, 1), 0);
                            if (this.controls && this.showProgress) {
                                this.controlsRef.setProgressBall(this.nextPercentage);
                                this.controlsRef.toggleVisibility(true);
                            }
                            duration = this.duration || this._duration;
                            this.toastProgressTitleRef.innerHTML = formatTime(this.nextPercentage * duration) + " / " + formatTime(duration);
                            this.toastProgressRef.style.visibility = 'visible';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.onDocumentTouchEnd = function () {
        var _a;
        if (this.gestureType === 'adjustVolume') {
            this.toastVolumeRef.style.visibility = 'hidden';
        }
        else if (this.gestureType === 'adjustProgress') {
            this.toastProgressRef.style.visibility = 'hidden';
        }
        if (this.isDraggingProgress) {
            this.isDraggingProgress = false;
            this.seek(this.nextPercentage * (_a = this.duration, (_a !== null && _a !== void 0 ? _a : this._duration)));
        }
        this.gestureType = 'none';
        this.lastTouchScreenX = undefined;
        this.lastTouchScreenY = undefined;
    };
    class_2.prototype.render = function () {
        var _this = this;
        var _c = this, src = _c.src, controls = _c.controls, autoplay = _c.autoplay, loop = _c.loop, muted = _c.muted, poster = _c.poster, objectFit = _c.objectFit, isFirst = _c.isFirst, isMute = _c.isMute, isFullScreen = _c.isFullScreen, duration = _c.duration, _duration = _c._duration, showCenterPlayBtn = _c.showCenterPlayBtn, isPlaying = _c.isPlaying, _enableDanmu = _c._enableDanmu, showMuteBtn = _c.showMuteBtn, danmuBtn = _c.danmuBtn, showFullscreenBtn = _c.showFullscreenBtn;
        var durationTime = formatTime(duration || _duration || null);
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('taro-video-container', {
                'taro-video-type-fullscreen': isFullScreen
            }), onTouchStart: this.onTouchStartContainer, onClick: this.onClickContainer }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("video", { class: 'taro-video-video', style: {
                'object-fit': objectFit
            }, ref: function (dom) { return (_this.videoRef = dom); }, src: src, autoplay: autoplay, loop: loop, muted: muted, poster: controls ? poster : undefined, playsinline: true, "webkit-playsinline": true, onPlay: this.handlePlay, onPause: this.handlePause, onEnded: this.handleEnded, onTimeUpdate: this.handleTimeUpdate, onError: this.handleError, onDurationChange: this.handleDurationChange, onProgress: this.handleProgress, onLoadedMetaData: this.handleLoadedMetaData }, "\u6682\u65F6\u4E0D\u652F\u6301\u64AD\u653E\u8BE5\u89C6\u9891"), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-video-control", { ref: function (dom) {
                if (dom) {
                    _this.controlsRef = dom;
                }
            }, controls: controls, currentTime: this.currentTime, duration: this.duration || this._duration || undefined, isPlaying: this.isPlaying, pauseFunc: this.pause, playFunc: this.play, seekFunc: this.seek, showPlayBtn: this.showPlayBtn, showProgress: this.showProgress }, showMuteBtn && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('taro-video-mute', {
                'taro-video-type-mute': isMute
            }), onClick: this.toggleMute })), danmuBtn && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('taro-video-danmu-button', {
                'taro-video-danmu-button-active': _enableDanmu
            }), onClick: this.toggleDanmu }, "\u5F39\u5E55")), showFullscreenBtn && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: Object(_index_be61bb74_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])('taro-video-fullscreen', {
                'taro-video-type-fullscreen': isFullScreen
            }), onClick: this.onClickFullScreenBtn }))), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("taro-video-danmu", { ref: function (dom) {
                if (dom) {
                    _this.danmuRef = dom;
                }
            }, enable: _enableDanmu }), isFirst && showCenterPlayBtn && !isPlaying && (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-cover' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-cover-play-button', onClick: this.play }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("p", { class: 'taro-video-cover-duration' }, durationTime))), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast taro-video-toast-volume', ref: function (dom) {
                if (dom) {
                    _this.toastVolumeRef = dom;
                }
            } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-title' }, "\u97F3\u91CF"), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-icon' }), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-value' }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-value-content', ref: function (dom) {
                if (dom) {
                    _this.toastVolumeBarRef = dom;
                }
            } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-volume-grids' }, Array(10).fill(1).map(function () { return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-volume-grids-item' })); }))))), Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast taro-video-toast-progress', ref: function (dom) {
                if (dom) {
                    _this.toastProgressRef = dom;
                }
            } }, Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("div", { class: 'taro-video-toast-title', ref: function (dom) {
                if (dom) {
                    _this.toastProgressTitleRef = dom;
                }
            } }))));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "enableDanmu": ["watchEnableDanmu"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ".taro-video{width:100%;height:225px;display:inline-block;line-height:0;overflow:hidden;position:relative}.taro-video[hidden]{display:none}.taro-video-container{width:100%;height:100%;background-color:#000;display:inline-block;position:absolute;top:0;left:0;overflow:hidden;-o-object-position:inherit;object-position:inherit}.taro-video-container.taro-video-type-fullscreen{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-left{-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg)}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-right{-webkit-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg)}.taro-video-video{width:100%;height:100%;-o-object-position:inherit;object-position:inherit}.taro-video-cover{position:absolute;top:0;left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:rgba(1,1,1,.5);z-index:1}.taro-video-cover-play-button{width:40px;height:40px;background-size:50%;background-repeat:no-repeat;background-position:50% 50%}.taro-video-cover-duration{color:#fff;font-size:16px;line-height:1;margin-top:10px}.taro-video-bar{visibility:hidden;height:44px;background-color:rgba(0,0,0,.5);overflow:hidden;position:absolute;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 10px;z-index:0}.taro-video-bar.taro-video-bar-full{left:0}.taro-video-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0 8.5px}.taro-video-control-button{width:13px;height:15px;padding:14.5px 12.5px 14.5px 12.5px;margin-left:-8.5px;-webkit-box-sizing:content-box;box-sizing:content-box}.taro-video-control-button:after{content:\"\";display:block;width:100%;height:100%;background-size:100%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-control-button.taro-video-control-button-play:after,.taro-video-cover-play-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAWhJREFUSA1j+P///0cgBoHjQGzCQCsAtgJB/AMy5wCxGNXtQ9iBwvoA5BUCMQvVLEQxHpNzDSjkRhXLMM3GKrIeKKpEkYVYjcUu+AMo3ALE3GRZiN1MvKKPgbIRJFuG10j8koeA0gZEW4jfLIKyf4EqpgOxMEELCRpFnIJ3QGU5QMyM00LizCFa1SWgSkeslhFtBGkKVwGVy6FYSJp+klR/A6quB2JOkIWMIK0oNlOf8xBoZDE9LAI7nYn6HsBq4l96WHQEaLUpAyiOaASeAM2NgvuPBpaACt82IEYtfKls0UagecpwXyAzqGTRdaA57sjmYrAptAjUsCkGYlYMg9EFyLQI1IiZB8Ti6Obh5JNh0QmgHlOcBuKSIMGi50C18UDMiMssvOJEWPQLqKYbiHnxGkRIkoBF24DyaoTMIEoeh0W3geI+RBlArCI0iz4D+RVAzEasfqLVAQ19AcSg5LoYiKWI1kiiQgCMBLnEEcfDSgAAAABJRU5ErkJggg==)}.taro-video-control-button.taro-video-control-button-pause:after{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAAFlJREFUSA3tksEKACAIQ7X//5zq98wOgQayum8QaGweHhMzG/6OujzKAymn+0LMqivu1XznWmX8/echTIyMyAgTwA72iIwwAexgj8gIE8CO3aMRbDPMaEy5BRGaKcZv8YxRAAAAAElFTkSuQmCC)}.taro-video-current-time,.taro-video-duration{height:14.5px;line-height:14.5px;margin-top:15px;margin-bottom:14.5px;font-size:12px;color:#cbcbcb}.taro-video-progress-container{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;position:relative}.taro-video-progress{height:2px;margin:21px 12px;background-color:hsla(0,0%,100%,.4);position:relative}.taro-video-progress-buffered{position:absolute;left:0;top:0;width:0;height:100%;-webkit-transition:width .1s;transition:width .1s;background-color:hsla(0,0%,100%,.8)}.taro-video-ball{width:16px;height:16px;padding:14px;position:absolute;top:-21px;-webkit-box-sizing:content-box;box-sizing:content-box;left:0;margin-left:-22px}.taro-video-inner{width:100%;height:100%;background-color:#fff;border-radius:50%}.taro-video-danmu-button{white-space:nowrap;line-height:1;padding:2px 10px;border:1px solid #fff;border-radius:5px;font-size:13px;color:#fff;margin:0 8.5px}.taro-video-danmu-button.taro-video-danmu-button-active{border-color:#48c23d;color:#48c23d}.taro-video-fullscreen,.taro-video-mute{width:17px;height:17px;padding:8.5px;-webkit-box-sizing:content-box;box-sizing:content-box;background-size:50%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-fullscreen{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhUlEQVRYR+2WSwrAMAhEnZO3PfmULLooGEFTiIXJ2s/kRY2wzQeb85sE9CRA8jSzY1YfAFzhJBnU1AVgxH2dSiArCnD9QgGzRNnOech48SRABHoSyFb5in3PSbhyo6yvCPQkEM3u7BsPe/0FIvBfAh/vhKmVbO9SWun1qk/PSVi9TcVPBG6R1YIhgWwNpQAAAABJRU5ErkJggg==)}.taro-video-fullscreen.taro-video-type-fullscreen{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+2Xu0pDURBF1/ZLxNcHKNiIlfhA7C0UBSEE8RNEBNFPUEQEEbGxFiSSSrCwEHsf5E/ccsSUuWfUhKQ40947+y42Z8+ZK/pcinzf9hhwD1xJ2q/qsb0JHAOzkl5y+lGAGnCWICQtZgAS6DxQk3TeLYA6cAo0JSXxjmW7CcwBdUkJurKiDhSA4kBvHbA9CqwBQx2O7BSw8ssU3ALPFRF4knT3nQLbr8B4LjLBOdAAFgJaLUkjbYC9n+zm+i4kXWbmwCqwnRMCHiXthuZAQOzPrxSA4kBxYDAcsH0EzATCfCLpJjOINoCtgFZabg7bk7AFDAeaGpKWgitZTu5N0kQbYBmYrujo9mX0CVxL+gidAdu9vY5zXhWA4sAgOND3X7NJ4AHYCaxkB8B62gslvecSFpoDOZH/PP8Cnt7hIaM5xCEAAAAASUVORK5CYII=)}.taro-video-mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTg6MjArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3YmE4Yjg0LTFhNTYtNGM1MS04NDVkLTNiZmYyMGI0ZDc0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg1NGQ3MjlkLWUwNjctZjU0OC1hMTlhLTBlZjQ4OGRkYjJiOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA1ODY3ZDFlLWQ3NGEtNDgyNC04MDU3LTYzYmRmMTdjODk5ZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDU4NjdkMWUtZDc0YS00ODI0LTgwNTctNjNiZGYxN2M4OTllIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE4OjIwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTdiYThiODQtMWE1Ni00YzUxLTg0NWQtM2JmZjIwYjRkNzRmIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz459+FoAAABqElEQVRYhc2XPWsVQRSGnxPjF4oGRfxoRQKGWCU2Ft7CykrQWosEyf/If0hhIPgHDEmbNJZqCFxiQEgTUGxsBUVEHgvnyrjZZJO92V1fGIaZnTPvszPszNlQ6VIjnbr/DwCoDLMNak/dUVfUK0f2rQugnlcX/FevWgFQH6gf3autRgHUC+piiXHzAOmtPx9gXgug8itQx9SXwDpw47AGKXZWvXvQmNFCwE3gCXA2dY0Az4GrRzHONA9cU/vAbERsllEOyh31e8USV2mrMPdG9uyn+rDom2/BHHCm5puWKiKmgdtAnz+rvaxO5mNygEvHaZ5BfADuARvAaWBpP4DGFBHfgBngFzClTrUKkCDeA+9S837rAEnbqb7VFcCpVJ/oCmCw959aB1AfAROpudYqgDoOLKRmPyLelAF8bcD4pPoMeAtcB34AT4uDBqXXwFG8XXUU/72MIuK1OgE8Bs6l7mEvo8up7lN1Ge0n9aK6VHMFZvJTr9S3CiALaCQhqZOSvegMIAvu2UVSWpigLC1fbQ0gm6in7qpfLCQbhwGIYcyPQ53/G3YO8BtUtd35bvKcVwAAAABJRU5ErkJggg==)}.taro-video-mute.taro-video-type-mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTk6MDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzYjJmNjE2LTZmZTUtNDJjNC1iNTgwLTczNzZjZjI2NzdmNSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYzZjQ2NTYzLWE0ZjktOGQ0Mi1hM2FhLTY3ODJhNDBhYWNjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYWNjMWFlLTg4ZmMtNDBlZi1iMWM1LTNmODgwY2QzYWI2MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjJhY2MxYWUtODhmYy00MGVmLWIxYzUtM2Y4ODBjZDNhYjYyIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE5OjAzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNiMmY2MTYtNmZlNS00MmM0LWI1ODAtNzM3NmNmMjY3N2Y1IiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PmxYVAAACLklEQVRYhc2XP2sVQRRHz40hKoqaQgVBCy1EozFlGiVFxMLGh4piYWEh+hkEP4YKAVFEEFTyughaCH6DqIVpAhYWEgIxoJE8cywyi5tNHu/tJmvyg2WZO3dmzt47/zZUtoJ6Nhsg09YDiYhKDzACTAFNYH9lEpUq80TdrT5wpV5n/ZV9KoGoo+pXV2uyKkipOaLuUceAt8DhUvQd1FsCYhR4ChzaSIBMHSOi7lOfsByFWiCgEBH1GHAF2JlMPcBt4GC3HUYEaj9wF3gVEVPtfNVTwAXgWX7CDKq/1piAZTSZBmim8qJ6sQ3EgDqb/L7kU3MH2NHtl3dQX3r3Ak21UYAYAj4A/cl0JB+RF+uMRj4iQ+p8zt7KYFLdXKHuRi0gacBhV6a6pd5bA6KRNagFJPU9qv5u47toLmW1HnoR8Q5oAK1CVQu4FBHj/wUkaXsb+4pzpVaQFPqXrN7Be4Fx9VztIOr1BLEtmX4A94E/qdwHTKjDWYM6lu81dSlnn3V570BtuLxaMs2rZ/IgYxsBovaoPwsQA4VoFWEm8ql5DiysNyURsQTMpOIMcDYiPhd8xoGr/FtNC2G6FKXD6ihwGdiVHMoeeh8jYlA9ANwE3kTEp3bO6vE03qOONzR1r/q4RGrquaFFxFxE3ALOA9+6jExpdb180y55AhirhaRTatq0GXEzL8+ZIuI9cBJ4WKiartJf9nWV/mty7UfUafW7erpqRGI9EBuprffvu9n6C1KOmsqwI5A1AAAAAElFTkSuQmCC)}.taro-video-danmu{position:absolute;top:0;left:0;bottom:0;width:100%;margin-top:14px;margin-bottom:44px;font-size:14px;line-height:14px;overflow:visible}.taro-video-danmu-item{line-height:1;position:absolute;color:#fff;white-space:nowrap;left:100%;-webkit-transform:translatex(0);transform:translatex(0);-webkit-transition-property:left,-webkit-transform;transition-property:left,-webkit-transform;transition-property:left,transform;transition-property:left,transform,-webkit-transform;-webkit-transition-duration:3s;transition-duration:3s;-webkit-transition-timing-function:linear;transition-timing-function:linear}.taro-video-toast{pointer-events:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px;background-color:hsla(0,0%,100%,.8);color:#000;display:block;visibility:hidden}.taro-video-toast.taro-video-toast-volume{width:100px;height:100px;display:block}.taro-video-toast-volume .taro-video-toast-title{width:100%;font-size:12px;line-height:16px;text-align:center;margin-top:10px;display:block}.taro-video-toast-volume .taro-video-toast-icon{fill:#000;width:50%;height:50%;margin-left:25%;display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhklEQVR4Xu2aeaxfQxTHP1VBES0NIQitWtpaaxeCUkQtaYVa0tiClAq1ExIiQTVppaWxt8RWSa2tWkJQRGgtQaSIpUKEpG0ssbbk28yV2+mZO/e9e3vvu/e98897mZnfzPl+75mZs0wvurn06ub46SGgxwLqZaA3sB/wO/A+8G/V6tS5BU4BJgJbO9DvAMOB36okoQ4CNgAeBEYbQK8Bbm4zAdsBc4EdAyA/APZoKwHHAA8DG2UA/AnYrG0ErAVcD1yXA9gfQJ8c40obsqbPgH7AY8CROTVuFQFD3X7fJid4DWsNAWOAGZ0w58YTsDZwKzChA189PbTRBGwKzAYO6iT4srbAMHfTfAksjulS1iG4JzAH2Dy2YKS/qAVcCdzi1vgZOBZ4PWvNGAG6wgYCW0IwctzNmf06BcEXtYABwOeA4otEfgEOdnGGqV6IAAUopwM6zDYuAVjeKYpYwCjgCWOhH513+b2lhE+Avrj89NPyalzyuCIE6EN9BfQ1dHoPOAD40+9LE6D/5aoqSqtLsgiQC60DTiHzfGCFoaSsQAexZdlTgEuyCDgLuK8u5G7dEAHyKN8CBrtxLwDHAX8Z+l4N3GS0L3db4aN0X5opmc+2XZQAfb2LPd2eciG1lUSRJZ9qYHkZONwiYAjwSc3gs24BXWWWfzEVuMjQez13HljX8v7A28lvEgsInaBVcxLaAvr6sgJLtBWeNTrOB+4w2p8DRvoEnAPcXTVaY70QAbrbXwIONX7zBSAL/tvrk1+iviTllnRry2irr/QSEws4D7izCxMg1XQLLAQGGXpeCkw22kOWI49RMUujCJC+uwAfGtfcImAng4AtAMsBeg04pIkESOfbgQsMsNoGnxrtSrfv7rXrSlwXWN6kLZBgEBiB8iWUUZZPIN/AF1nMoiYSICDfAlt5iB4CxhpAzwXuMtqPBuY1lYB5wFEeqFeAwwyguvIUqvuiQO/xphJwP3Cmhyh0EKrOoGDIF7n+M5pKwEwXrqdBCaQSM77Ig7SSIicDs5pKwIvACA+pzFwZIF9OlKm36QyQV7jEqDDJk5VD58uFgGIGX1Se+6yJFqAKsqI6X84GdDb4Mh0Y5zUqjFYFakUTCXja5QLSmBQHbAL8ahAgT1AeYVreSKLLphGwF/CuAfLJQLldGSTFD75c5d4mNCoWyAqG9gYWGED1AOMKo12ZbiWA/idA++deY2DVTZ0Jh5UJPsFQtD/wDaAHGWl5EzgwaUi2gK4UXS11S0cTIjrMFBtYQdAk4DID0BnAAz4B6wNLgTKKG0VIDBHwqitwpOcW+OOB540FdeipNKbUWFrUtn06o5xOij4KyDuqU0IE3Obl/rLA63pTzm9XA8jKACjdniZAaSKFmUpB1yUhAlTsUEpMh913wEkuTe7rKTzPAHqO44vpKPkFhH3cWWBVV6ogJVYZUgz/tXtIYelzI3Ct0fExIGx6j7iKWBUUveyYBehv1RIjIEsfqziq8Xp4pSBJOYTVJFQcVY3wCFeKUjVGyYfQWB00+5bEVBECrNS+qsOKBpVHNCVWHs+LS7H5PV5pOu9v0+OKEOAXR39w1e1C7wM6AkJ1eLmkRcrpRQiQrqobXO5S3vL3/4kBKMsCknV0k+iasVLUMV3UX5SAPGtED8EOT+L9YENnCasUIXNO2goChFWHqAIRyxXN4qI1BCQg9dJESYq8LnbrCBAR8t50Lig6i0krCRBoVWhVlt45wkBrCRBuRZyPuAguxIPe9lXqhpd9DcZMXOvdkPF0Xu/8dohNUmZ/1QQkuitXr+d4fryuFx3jywQYm6suAqSX8vLTXKJDt4QqO6rtLYspXWZ/nQQkOJTAUJZGIav19q9MvKvN1RUIWKMAY5P3EBBjqO393d4C/gMVHwRQlpx21QAAAABJRU5ErkJggg==);background-size:50%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-toast-volume .taro-video-toast-value{width:80px;height:5px;margin-top:5px;margin-left:10px}.taro-video-toast-volume .taro-video-toast-value>.taro-video-toast-value-content{overflow:hidden}.taro-video-toast-volume-grids{width:80px;height:5px}.taro-video-toast-volume-grids-item{float:left;width:7.1px;height:5px;background-color:#000}.taro-video-toast-volume-grids-item:not(:first-child){margin-left:1px}.taro-video-toast.taro-video-toast-progress{background-color:rgba(0,0,0,.8);color:#fff;font-size:14px;line-height:18px;padding:6px}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var VideoDanmu = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this, hostRef);
        this.list = [];
        this.danmuElList = [];
        this.currentTime = 0;
        this.enable = false;
        this.danmuList = [];
    }
    class_3.prototype.ensureProperties = function (danmu) {
        var clonedDanmu = Object.assign({}, danmu);
        if (!('time' in danmu)) {
            clonedDanmu.time = this.currentTime;
        }
        clonedDanmu.key = Math.random();
        clonedDanmu.bottom = Math.random() * 90 + 5 + "%";
        return clonedDanmu;
    };
    class_3.prototype.sendDanmu = function (danmuList) {
        if (danmuList === void 0) { danmuList = []; }
        return __awaiter(this, void 0, void 0, function () {
            var danmu;
            var _this = this;
            return __generator(this, function (_c) {
                if (Array.isArray(danmuList)) {
                    this.list = __spreadArrays(this.list, danmuList.map(function (danmu) { return _this.ensureProperties(danmu); }));
                }
                else {
                    danmu = danmuList;
                    this.list = __spreadArrays(this.list, [
                        Object.assign({}, this.ensureProperties(danmu))
                    ]);
                }
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.tick = function (currentTime) {
        return __awaiter(this, void 0, void 0, function () {
            var danmuList, newDanmuList, shouldUpdate, oldDanmuList;
            return __generator(this, function (_c) {
                this.currentTime = currentTime;
                if (!this.enable)
                    return [2 /*return*/];
                danmuList = this.list;
                newDanmuList = danmuList.filter(function (_c) {
                    var time = _c.time;
                    return currentTime - time < 4 && currentTime > time;
                });
                shouldUpdate = false;
                oldDanmuList = this.danmuList;
                if (newDanmuList.length !== oldDanmuList.length) {
                    shouldUpdate = true;
                }
                else {
                    shouldUpdate = newDanmuList.some(function (_c) {
                        var key = _c.key;
                        return oldDanmuList.every(function (danmu) {
                            return key !== danmu.key;
                        });
                    });
                }
                if (shouldUpdate) {
                    this.danmuList = newDanmuList;
                }
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.componentDidUpdate = function () {
        var _this = this;
        requestAnimationFrame(function () {
            setTimeout(function () {
                var danmuElList = _this.danmuElList.splice(0);
                danmuElList.forEach(function (danmu) {
                    danmu.style.left = '0';
                    danmu.style.webkitTransform = 'translateX(-100%)';
                    danmu.style.transform = 'translateX(-100%)';
                });
            });
        });
    };
    class_3.prototype.render = function () {
        var _this = this;
        if (!this.enable)
            return '';
        return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"], { class: 'taro-video-danmu' }, this.danmuList.map(function (_c) {
            var text = _c.text, color = _c.color, bottom = _c.bottom, key = _c.key;
            return (Object(_core_42efd82a_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "f"])("p", { class: 'taro-video-danmu-item', key: key, style: {
                    color: color,
                    bottom: bottom
                }, ref: function (ref) {
                    if (ref) {
                        _this.danmuElList.push(ref);
                    }
                } }, text));
        })));
    };
    return class_3;
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