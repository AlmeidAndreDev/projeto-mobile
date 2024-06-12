(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>Perfil</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">\n        Salvar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <div class=\"photo-container\">\n      <img (click)=\"openLibraryPictures()\" [src]=\"!!form.photo ? form.photo : 'assets/no-picture.png'\" />\n    </div>\n    <ion-item-divider>\n      <ion-label>Dados do usuário</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Nome</ion-label>\n      <ion-input inputmode=\"text\" type=\"text\" placeholder=\"João Pedro\" [(ngModel)]=\"form.name\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">E-mail</ion-label>\n      <ion-input inputmode=\"email\" type=\"email\" placeholder=\"joao@mail.com\" [(ngModel)]=\"form.email\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Telefone</ion-label>\n      <ion-input inputmode=\"text\" [brmasker]=\"{phone: true}\" placeholder=\"(00) 00000-0000\" type=\"text\"\n        [(ngModel)]=\"form.phone\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item-divider>\n      <ion-label>Aplicativo</ion-label>\n    </ion-item-divider>\n    <ion-item (click)=\"changePassword()\">\n      <ion-label>Trocar Senha</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-label>Logout</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");








var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_7__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                br_mask__WEBPACK_IMPORTED_MODULE_5__["BrMaskerModule"]
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_7__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-container img {\n  max-height: 200px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFxhbmRyZVxcZmFjdWxkYWRlXFxjZWx1bGFyXFxnZXRtZXN0cmVzLW1hc3RlclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldE1lc3RyZXNBcHAvc3JjXFxhcHBcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiIsIi5waG90by1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/camera.service */ "./src/services/camera.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/customer.service */ "./src/services/customer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_customerModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/customerModel */ "./src/models/customerModel.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");









var PerfilPage = /** @class */ (function () {
    function PerfilPage(customerSrv, userSrv, alertCtrl, alertSrv, cameraSrv) {
        this.customerSrv = customerSrv;
        this.userSrv = userSrv;
        this.alertCtrl = alertCtrl;
        this.alertSrv = alertSrv;
        this.cameraSrv = cameraSrv;
        this.form = new _models_customerModel__WEBPACK_IMPORTED_MODULE_7__["CustomerModel"]();
    }
    PerfilPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    PerfilPage.prototype.openLibraryPictures = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var base64;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cameraSrv.getPictureFromLibrary()];
                    case 1:
                        base64 = _a.sent();
                        this.form.photo = base64;
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.customerSrv.GetById(this.userSrv.UserData.uid)];
                    case 1:
                        _a = _b.sent(), success = _a.success, data = _a.data;
                        if (success) {
                            this.form = data;
                            this.fixPathPhoto();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.fixPathPhoto = function () {
        if (this.form.photo) {
            this.form.photo = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url_api + "/storage/" + this.form.photo;
        }
    };
    PerfilPage.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.customerSrv.post(this.form)];
                    case 1:
                        _a = _b.sent(), success = _a.success, data = _a.data;
                        if (success) {
                            this.form = data;
                            this.fixPathPhoto();
                            this.alertSrv.toast('Perfil atualizado com sucesso!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.changePasswordHandle = function (currentPassword, newPassword, confirmNewPassword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customerSrv.changePassword(currentPassword, newPassword, confirmNewPassword)];
                    case 1:
                        success = (_a.sent()).success;
                        if (success) {
                            this.alertSrv.toast('Senha alterada com sucesso');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.changePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Trocar Senha',
                            inputs: [
                                { placeholder: 'Digite sua senha atual', type: 'password', name: 'currentPassword' },
                                { placeholder: 'Digite a nova senha', type: 'password', name: 'newPassword' },
                                { placeholder: 'Digite a confirmação senha', type: 'password', name: 'confirmNewPassword' }
                            ],
                            buttons: [
                                { text: 'Cancelar', handler: function () { } },
                                {
                                    text: 'Salvar', handler: function (_a) {
                                        var currentPassword = _a.currentPassword, newPassword = _a.newPassword, confirmNewPassword = _a.confirmNewPassword;
                                        if (!newPassword || !confirmNewPassword || !currentPassword) {
                                            _this.alertSrv.toast('Digite todas as informações antes de continuar!');
                                            return false;
                                        }
                                        else {
                                            _this.changePasswordHandle(currentPassword, newPassword, confirmNewPassword);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.logout = function () {
        this.userSrv.logout();
    };
    PerfilPage.ctorParameters = function () { return [
        { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: _services_camera_service__WEBPACK_IMPORTED_MODULE_1__["CameraService"] }
    ]; };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _services_camera_service__WEBPACK_IMPORTED_MODULE_1__["CameraService"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ }),

/***/ "./src/models/customerModel.ts":
/*!*************************************!*\
  !*** ./src/models/customerModel.ts ***!
  \*************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseModel */ "./src/models/baseModel.ts");


var CustomerModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerModel, _super);
    function CustomerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomerModel;
}(_baseModel__WEBPACK_IMPORTED_MODULE_1__["BaseModel"]));



/***/ }),

/***/ "./src/services/customer.service.ts":
/*!******************************************!*\
  !*** ./src/services/customer.service.ts ***!
  \******************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");




var CustomerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerService, _super);
    function CustomerService(http) {
        var _this = _super.call(this, 'customer', http) || this;
        _this.http = http;
        return _this;
    }
    CustomerService.prototype.changePassword = function (currentPassword, newPassword, confirmNewPassword) {
        return this.http.post(this.urlBase + "/changepassword", { currentPassword: currentPassword, newPassword: newPassword, confirmNewPassword: confirmNewPassword });
    };
    CustomerService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], CustomerService);
    return CustomerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es5.js.map