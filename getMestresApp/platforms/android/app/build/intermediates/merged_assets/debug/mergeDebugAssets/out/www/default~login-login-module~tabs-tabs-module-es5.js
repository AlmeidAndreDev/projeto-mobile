(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~tabs-tabs-module"],{

/***/ "./src/services/alert.service.ts":
/*!***************************************!*\
  !*** ./src/services/alert.service.ts ***!
  \***************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AlertService.prototype.toast = function (title, position) {
        if (position === void 0) { position = 'top'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: title, position: position, duration: 3000 })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.prototype.alert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: ['ok'],
                            backdropDismiss: false
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.prototype.confirm = function (title, message, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: [
                                {
                                    text: 'Não', role: 'Cancel', handler: function () {
                                        console.log('Confirm:Say:No');
                                    }
                                },
                                { text: 'Sim', handler: function () { callback(); } }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/services/http.service.ts":
/*!**************************************!*\
  !*** ./src/services/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/constants */ "./src/shared/constants.ts");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.service */ "./src/services/spinner.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var HttpService = /** @class */ (function () {
    function HttpService(http, alertSrv, spinnerSrv) {
        this.http = http;
        this.alertSrv = alertSrv;
        this.spinnerSrv = spinnerSrv;
    }
    HttpService.prototype.createHeader = function (header) {
        if (!header) {
            header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        }
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        var token = localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].keyStore.token);
        if (token) {
            header = header.append('x-token-access', token);
        }
        return header;
    };
    HttpService.prototype.get = function (url) {
        var _this = this;
        var header = this.createHeader();
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 1:
                        res = _a.sent();
                        resolve({ success: true, data: res, error: undefined });
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 4:
                        _a.sent();
                        resolve({ success: false, data: {}, error: error_1 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    HttpService.prototype.post = function (url, model, headers) {
        var _this = this;
        var header = this.createHeader(headers);
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var res, error_2, errorsText_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 10]);
                        return [4 /*yield*/, this.spinnerSrv.Show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.http.post(url, model, { headers: header }).toPromise()];
                    case 2:
                        res = _a.sent();
                        resolve({ success: true, data: res, error: undefined });
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 4:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 5:
                        _a.sent();
                        if (!(error_2.status === 400)) return [3 /*break*/, 7];
                        console.log(error_2.error);
                        errorsText_1 = '<ul>';
                        if (!Array.isArray(error_2.error)) return [3 /*break*/, 7];
                        error_2.error.forEach(function (element) {
                            errorsText_1 += "<li style=\"text-align: left\">" + (element.message || element) + "</li>";
                        });
                        errorsText_1 += '</ul>';
                        return [4 /*yield*/, this.alertSrv.alert('Atenção', errorsText_1)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(error_2.status === 404)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.alertSrv.alert('Atenção', error_2.error)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        resolve({ success: false, data: {}, error: error_2 });
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        }); });
    };
    HttpService.prototype.put = function (url, model, headers) {
        var _this = this;
        var header = this.createHeader(headers);
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var res, error_3, errorsText_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 10]);
                        return [4 /*yield*/, this.spinnerSrv.Show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.http.put(url, model, { headers: header }).toPromise()];
                    case 2:
                        res = _a.sent();
                        resolve({ success: true, data: res, error: undefined });
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 4:
                        error_3 = _a.sent();
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 5:
                        _a.sent();
                        if (!(error_3.status === 400)) return [3 /*break*/, 7];
                        console.log(error_3.error);
                        errorsText_2 = '<ul>';
                        if (!Array.isArray(error_3.error)) return [3 /*break*/, 7];
                        error_3.error.forEach(function (element) {
                            errorsText_2 += "<li style=\"text-align: left\">" + (element.message || element) + "</li>";
                        });
                        errorsText_2 += '</ul>';
                        return [4 /*yield*/, this.alertSrv.alert('Atenção', errorsText_2)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(error_3.status === 404)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.alertSrv.alert('Atenção', error_3.error)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        resolve({ success: false, data: {}, error: error_3 });
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        }); });
    };
    HttpService.prototype.delete = function (url) {
        var _this = this;
        var header = this.createHeader();
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var res, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.spinnerSrv.Show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.http.delete(url, { headers: header }).toPromise()];
                    case 2:
                        res = _a.sent();
                        resolve({ success: true, data: res, error: undefined });
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_4 = _a.sent();
                        return [4 /*yield*/, this.spinnerSrv.Hide()];
                    case 5:
                        _a.sent();
                        resolve({ success: false, data: {}, error: error_4 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/services/spinner.service.ts":
/*!*****************************************!*\
  !*** ./src/services/spinner.service.ts ***!
  \*****************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SpinnerService = /** @class */ (function () {
    function SpinnerService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.spinner = null;
    }
    SpinnerService.prototype.Show = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.spinner === null)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: (message || 'Carregando...') })];
                    case 1:
                        _a.spinner = _b.sent();
                        return [4 /*yield*/, this.spinner.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SpinnerService.prototype.Hide = function () {
        if (this.spinner != null) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    };
    SpinnerService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }
    ]; };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/constants */ "./src/shared/constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var UserService = /** @class */ (function () {
    function UserService(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.subProfile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subUserData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserService.prototype.login = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_api + "/" + (user.profile === 'customer' ? 'customer' : 'serviceProvider') + "/auth", user);
    };
    UserService.prototype.saveDataLoginInfo = function (data, profile) {
        localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.user, JSON.stringify(data.user));
        localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.token, data.token);
        localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.profile, profile);
        this.subUserData.next(this.UserData);
        this.subProfile.next(profile);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.user);
        localStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.token);
        localStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.profile);
        this.navCtrl.navigateRoot('/login');
    };
    Object.defineProperty(UserService.prototype, "IsAuth", {
        get: function () {
            var user = this.UserData;
            return (user && !!user.uid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "Profile", {
        get: function () {
            try {
                return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.profile) || '';
            }
            catch (error) {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "UserDataAsync", {
        get: function () {
            var _this = this;
            setTimeout(function () { _this.subUserData.next(_this.UserData); }, 100);
            return this.subUserData.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "ProfileAsync", {
        get: function () {
            var _this = this;
            setTimeout(function () { _this.subProfile.next(_this.Profile); }, 100);
            return this.subProfile.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "UserData", {
        get: function () {
            try {
                var saved = localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.user);
                if (saved) {
                    return JSON.parse(saved);
                }
                else {
                    return {};
                }
            }
            catch (error) {
                return {};
            }
        },
        enumerable: true,
        configurable: true
    });
    UserService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/shared/constants.ts":
/*!*********************************!*\
  !*** ./src/shared/constants.ts ***!
  \*********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = {
    keyStore: {
        user: 'getMestres:User',
        token: 'getMestres:Token',
        profile: 'getmestres:perfil'
    }
};


/***/ })

}]);
//# sourceMappingURL=default~login-login-module~tabs-tabs-module-es5.js.map