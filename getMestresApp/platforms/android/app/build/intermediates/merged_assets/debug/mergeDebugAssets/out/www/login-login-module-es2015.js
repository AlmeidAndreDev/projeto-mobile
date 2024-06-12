(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input inputmode=\"email\" type=\"email\" [(ngModel)]=\"userForm.email\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Senha</ion-label>\n      <ion-input inputmode=\"text\" type=\"password\" [(ngModel)]=\"userForm.password\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Tipo de Usuário</ion-label>\n      <ion-select [(ngModel)]=\"userForm.profile\" placeholder=\"selecione o tipo de login\" cancelText=\"Cancelar\">\n        <ion-select-option *ngFor=\"let item of profiles\" [value]=\"item.value\">{{item.label}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"login()\" expand=\"block\" fill=\"solid\">\n      Entrar\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  background: #f2f2f2;\n  box-shadow: 4px 6px 10px rgba(156, 156, 156, 0.6);\n}\n\nion-item {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXGFuZHJlXFxmYWN1bGRhZGVcXGNlbHVsYXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRtZXN0cmVzLW1hc3RlclxcZ2V0TWVzdHJlc0FwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpREFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm94LXNoYWRvdzogNHB4IDZweCAxMHB4IHJnYmEoMTU2LDE1NiwxNTYsIDAuNik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iLCJpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJveC1zaGFkb3c6IDRweCA2cHggMTBweCByZ2JhKDE1NiwgMTU2LCAxNTYsIDAuNik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_userAuthModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/userAuthModel */ "./src/models/userAuthModel.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let LoginPage = class LoginPage {
    constructor(userSrv, router, alertSrv) {
        this.userSrv = userSrv;
        this.router = router;
        this.alertSrv = alertSrv;
        this.userForm = new _models_userAuthModel__WEBPACK_IMPORTED_MODULE_3__["UserAuthModel"]();
        this.profiles = [
            { value: 'customer', label: 'Cliente' },
            { value: 'serviceProvider', label: 'Prestador' }
        ];
    }
    ngOnInit() {
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password, profile } = this.userForm;
            if (!email || !password || !profile) {
                this.alertSrv.alert('Atenção', 'Preencha todos os dados para efetuar o login!');
                return;
            }
            const { success, data } = yield this.userSrv.login(this.userForm);
            if (success) {
                this.userSrv.saveDataLoginInfo(data, this.userForm.profile);
                this.router.navigateByUrl('/tabs');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
], LoginPage);



/***/ }),

/***/ "./src/models/userAuthModel.ts":
/*!*************************************!*\
  !*** ./src/models/userAuthModel.ts ***!
  \*************************************/
/*! exports provided: UserAuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthModel", function() { return UserAuthModel; });
class UserAuthModel {
}


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map