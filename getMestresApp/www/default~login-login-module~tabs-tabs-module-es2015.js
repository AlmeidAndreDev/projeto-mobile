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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AlertService = class AlertService {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    toast(title, position = 'top') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({ message: title, position, duration: 3000 });
            yield toast.present();
        });
    }
    alert(title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message,
                buttons: ['ok'],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    confirm(title, message, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message,
                buttons: [
                    {
                        text: 'Não', role: 'Cancel', handler: () => {
                            console.log('Confirm:Say:No');
                        }
                    },
                    { text: 'Sim', handler: () => { callback(); } }
                ]
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
], AlertService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let HttpService = class HttpService {
    constructor(http, alertSrv, spinnerSrv) {
        this.http = http;
        this.alertSrv = alertSrv;
        this.spinnerSrv = spinnerSrv;
    }
    createHeader(header) {
        if (!header) {
            header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        }
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        const token = localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].keyStore.token);
        if (token) {
            header = header.append('x-token-access', token);
        }
        return header;
    }
    get(url) {
        const header = this.createHeader();
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // await this.spinnerSrv.Show();
                const res = yield this.http.get(url, { headers: header }).toPromise();
                resolve({ success: true, data: res, error: undefined });
                yield this.spinnerSrv.Hide();
            }
            catch (error) {
                yield this.spinnerSrv.Hide();
                resolve({ success: false, data: {}, error });
            }
        }));
    }
    post(url, model, headers) {
        const header = this.createHeader(headers);
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.spinnerSrv.Show();
                const res = yield this.http.post(url, model, { headers: header }).toPromise();
                resolve({ success: true, data: res, error: undefined });
                yield this.spinnerSrv.Hide();
            }
            catch (error) {
                yield this.spinnerSrv.Hide();
                if (error.status === 400) {
                    console.log(error.error);
                    let errorsText = '<ul>';
                    if (Array.isArray(error.error)) {
                        error.error.forEach(element => {
                            errorsText += `<li style="text-align: left">${element.message || element}</li>`;
                        });
                        errorsText += '</ul>';
                        yield this.alertSrv.alert('Atenção', errorsText);
                    }
                }
                if (error.status === 404) {
                    yield this.alertSrv.alert('Atenção', error.error);
                }
                resolve({ success: false, data: {}, error });
            }
        }));
    }
    put(url, model, headers) {
        const header = this.createHeader(headers);
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.spinnerSrv.Show();
                const res = yield this.http.put(url, model, { headers: header }).toPromise();
                resolve({ success: true, data: res, error: undefined });
                yield this.spinnerSrv.Hide();
            }
            catch (error) {
                yield this.spinnerSrv.Hide();
                if (error.status === 400) {
                    console.log(error.error);
                    let errorsText = '<ul>';
                    if (Array.isArray(error.error)) {
                        error.error.forEach(element => {
                            errorsText += `<li style="text-align: left">${element.message || element}</li>`;
                        });
                        errorsText += '</ul>';
                        yield this.alertSrv.alert('Atenção', errorsText);
                    }
                }
                if (error.status === 404) {
                    yield this.alertSrv.alert('Atenção', error.error);
                }
                resolve({ success: false, data: {}, error });
            }
        }));
    }
    delete(url) {
        const header = this.createHeader();
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.spinnerSrv.Show();
                const res = yield this.http.delete(url, { headers: header }).toPromise();
                resolve({ success: true, data: res, error: undefined });
                yield this.spinnerSrv.Hide();
            }
            catch (error) {
                yield this.spinnerSrv.Hide();
                resolve({ success: false, data: {}, error });
            }
        }));
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
], HttpService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SpinnerService = class SpinnerService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.spinner = null;
    }
    Show(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.spinner === null) {
                this.spinner = yield this.loadingCtrl.create({ message: (message || 'Carregando...') });
                yield this.spinner.present();
            }
        });
    }
    Hide() {
        if (this.spinner != null) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    }
};
SpinnerService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }
];
SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
], SpinnerService);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/constants */ "./src/shared/constants.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let UserService = class UserService {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.subProfile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subUserData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    login(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_api}/${user.profile === 'customer' ? 'customer' : 'serviceProvider'}/auth`, user);
    }
    saveDataLoginInfo(data, profile) {
        localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.user, JSON.stringify(data.user));
        localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.token, data.token);
        localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.profile, profile);
        this.subUserData.next(this.UserData);
        this.subProfile.next(profile);
    }
    logout() {
        localStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.user);
        localStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.token);
        localStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.profile);
        this.navCtrl.navigateRoot('/login');
    }
    get IsAuth() {
        const user = this.UserData;
        return (user && !!user.uid);
    }
    get Profile() {
        try {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.profile) || '';
        }
        catch (error) {
            return '';
        }
    }
    get UserDataAsync() {
        setTimeout(() => { this.subUserData.next(this.UserData); }, 100);
        return this.subUserData.asObservable();
    }
    get ProfileAsync() {
        setTimeout(() => { this.subProfile.next(this.Profile); }, 100);
        return this.subProfile.asObservable();
    }
    get UserData() {
        try {
            const saved = localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].keyStore.user);
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
    }
};
UserService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], UserService);



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
const Constants = {
    keyStore: {
        user: 'getMestres:User',
        token: 'getMestres:Token',
        profile: 'getmestres:perfil'
    }
};


/***/ })

}]);
//# sourceMappingURL=default~login-login-module~tabs-tabs-module-es2015.js.map