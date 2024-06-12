(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-profissional-perfil-profissional-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil-profissional/perfil-profissional.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil-profissional/perfil-profissional.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>Perfil</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">\n        Salvar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <div class=\"photo-container\">\n      <img (click)=\"openLibraryPictures()\" [src]=\"!!form.photo ? form.photo : 'assets/no-picture.png'\" />\n    </div>\n    <ion-item-divider>\n      <ion-label>Dados do usuário</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Nome</ion-label>\n      <ion-input inputmode=\"text\" type=\"text\" placeholder=\"João Pedro\" [(ngModel)]=\"form.name\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">E-mail</ion-label>\n      <ion-input inputmode=\"email\" type=\"email\" placeholder=\"joao@mail.com\" [(ngModel)]=\"form.email\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Telefone</ion-label>\n      <ion-input inputmode=\"text\" [brmasker]=\"{phone: true}\" placeholder=\"(00) 00000-0000\" type=\"text\"\n        [(ngModel)]=\"form.phone\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item-divider>\n      <ion-label>Endereço</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">CEP</ion-label>\n      <ion-input inputmode=\"number\" placeholder=\"00000-000\" [(ngModel)]=\"form.zipCode\"\n        [brmasker]=\"{ mask: '99999-999', type: 'nun' }\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Endereço</ion-label>\n      <ion-input type=\"text\" placeholder=\"Rua são joão\" [(ngModel)]=\"form.address\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Complemento</ion-label>\n      <ion-input type=\"text\" placeholder=\"Próximo a travessa 10\" [(ngModel)]=\"form.addressComplement\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Estado</ion-label>\n      <ion-select [value]=\"form.state\" placeholder=\"Selecione\" (ionChange)=\"selectState($event)\">\n        <ion-select-option *ngFor=\"let state of states\" [value]=\"state.sigla\">{{state.nome}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Cidade</ion-label>\n      <ion-select [disabled]=\"cities.length === 0\" [value]=\"form.city\" placeholder=\"Selecione\">\n        <ion-select-option *ngFor=\"let city of cities\" [value]=\"city\">{{city}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item-divider>\n      <ion-label>Cidades Atendidas</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Cidades que eu atendo</ion-label>\n      <ion-select [disabled]=\"cities.length === 0\" [(ngModel)]=\"citiesCare\" multiple placeholder=\"Selecione\">\n        <ion-select-option *ngFor=\"let city of cities\" [value]=\"city\">{{city}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item-divider>\n      <ion-label>Categotis atendidas</ion-label>\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Categorias</ion-label>\n      <ion-select [(ngModel)]=\"categorySelected\" placeholder=\"Selecione\"  (ionChange)=\"loadSubCategory($event.detail.value)\">\n        <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.uid\">{{category.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">SubCategorias</ion-label>\n      <ion-select [disabled]=\"categories.length === 0\" [(ngModel)]=\"subCategoriesCare\" placeholder=\"Selecione\" multiple>\n        <ion-select-option *ngFor=\"let subCategory of subCategories\" [value]=\"subCategory.uid\">{{subCategory.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list lines=\"none\">\n    <ion-item-divider>\n      <ion-label>Aplicativo</ion-label>\n    </ion-item-divider>\n    <ion-item (click)=\"changePassword()\">\n      <ion-label>Trocar Senha</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-label>Logout</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/perfil-profissional/perfil-profissional.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/perfil-profissional/perfil-profissional.module.ts ***!
  \*******************************************************************/
/*! exports provided: PerfilProfissionalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilProfissionalPageModule", function() { return PerfilProfissionalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_profissional_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil-profissional.page */ "./src/app/perfil-profissional/perfil-profissional.page.ts");








const routes = [
    {
        path: '',
        component: _perfil_profissional_page__WEBPACK_IMPORTED_MODULE_7__["PerfilProfissionalPage"]
    }
];
let PerfilProfissionalPageModule = class PerfilProfissionalPageModule {
};
PerfilProfissionalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            br_mask__WEBPACK_IMPORTED_MODULE_1__["BrMaskerModule"]
        ],
        declarations: [_perfil_profissional_page__WEBPACK_IMPORTED_MODULE_7__["PerfilProfissionalPage"]]
    })
], PerfilProfissionalPageModule);



/***/ }),

/***/ "./src/app/perfil-profissional/perfil-profissional.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/perfil-profissional/perfil-profissional.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC1wcm9maXNzaW9uYWwvcGVyZmlsLXByb2Zpc3Npb25hbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/perfil-profissional/perfil-profissional.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/perfil-profissional/perfil-profissional.page.ts ***!
  \*****************************************************************/
/*! exports provided: PerfilProfissionalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilProfissionalPage", function() { return PerfilProfissionalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_sub_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/sub-category.service */ "./src/services/sub-category.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/category.service */ "./src/services/category.service.ts");
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/address.service */ "./src/services/address.service.ts");
/* harmony import */ var _services_serviceProvider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/serviceProvider.service */ "./src/services/serviceProvider.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/camera.service */ "./src/services/camera.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_serviceProviderModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/serviceProviderModel */ "./src/models/serviceProviderModel.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/alert.service */ "./src/services/alert.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");












let PerfilProfissionalPage = class PerfilProfissionalPage {
    constructor(serviceProviderSrv, userSrv, alertCtrl, alertSrv, cameraSrv, addressSrv, categorySrv, subCategorySrv) {
        this.serviceProviderSrv = serviceProviderSrv;
        this.userSrv = userSrv;
        this.alertCtrl = alertCtrl;
        this.alertSrv = alertSrv;
        this.cameraSrv = cameraSrv;
        this.addressSrv = addressSrv;
        this.categorySrv = categorySrv;
        this.subCategorySrv = subCategorySrv;
        this.form = new _models_serviceProviderModel__WEBPACK_IMPORTED_MODULE_9__["ServiceProviderModel"]();
        this.cities = new Array();
        this.citiesCare = new Array();
        this.states = new Array();
        this.categories = new Array();
        this.subCategories = new Array();
        this.subCategoriesCare = new Array();
    }
    ionViewDidEnter() {
        this.loadData();
        this.loadStates();
        this.loadCategories();
    }
    openLibraryPictures() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const base64 = yield this.cameraSrv.getPictureFromLibrary();
            this.form.photo = base64;
        });
    }
    loadStates() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, data } = yield this.addressSrv.getAllStates();
            if (success) {
                this.states = data;
            }
        });
    }
    selectState(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const state = event.detail.value;
            const { success, data } = yield this.addressSrv.getAllCities(state);
            if (success) {
                this.cities = data;
            }
        });
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, data } = yield this.serviceProviderSrv.GetById(this.userSrv.UserData.uid);
            if (success) {
                this.form = data;
                this.fixPathPhoto();
            }
        });
    }
    loadCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, data } = yield this.categorySrv.GetAll();
            if (success) {
                this.categories = data;
            }
        });
    }
    loadSubCategory(categoridUid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, data } = yield this.subCategorySrv.getAllByCategory(categoridUid);
            if (success) {
                this.subCategories = data;
            }
            else {
                this.subCategories = [];
            }
        });
    }
    fixPathPhoto() {
        if (this.form.photo) {
            this.form.photo = `${_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].url_api}/storage/${this.form.photo}`;
        }
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.form.categoriesCare = this.subCategoriesCare.join(', ');
            this.form.citiesCare = this.citiesCare.join(', ');
            const { success, data } = yield this.serviceProviderSrv.post(this.form);
            if (success) {
                this.form = data;
                this.fixPathPhoto();
                this.alertSrv.toast('Perfil atualizado com sucesso!');
            }
        });
    }
    changePasswordHandle(currentPassword, newPassword, confirmNewPassword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success } = yield this.serviceProviderSrv.changePassword(currentPassword, newPassword, confirmNewPassword);
            if (success) {
                this.alertSrv.toast('Senha alterada com sucesso');
            }
        });
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            (yield this.alertCtrl.create({
                header: 'Trocar Senha',
                inputs: [
                    { placeholder: 'Digite sua senha atual', type: 'password', name: 'currentPassword' },
                    { placeholder: 'Digite a nova senha', type: 'password', name: 'newPassword' },
                    { placeholder: 'Digite a confirmação senha', type: 'password', name: 'confirmNewPassword' }
                ],
                buttons: [
                    { text: 'Cancelar', handler: () => { } },
                    {
                        text: 'Salvar', handler: ({ currentPassword, newPassword, confirmNewPassword }) => {
                            if (!newPassword || !confirmNewPassword || !currentPassword) {
                                this.alertSrv.toast('Digite todas as informações antes de continuar!');
                                return false;
                            }
                            else {
                                this.changePasswordHandle(currentPassword, newPassword, confirmNewPassword);
                            }
                        }
                    }
                ]
            })).present();
        });
    }
    logout() {
        this.userSrv.logout();
    }
};
PerfilProfissionalPage.ctorParameters = () => [
    { type: _services_serviceProvider_service__WEBPACK_IMPORTED_MODULE_4__["ServiceProviderService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: _services_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"] },
    { type: _services_address_service__WEBPACK_IMPORTED_MODULE_3__["AddressService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _services_sub_category_service__WEBPACK_IMPORTED_MODULE_1__["SubCategoryService"] }
];
PerfilProfissionalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-perfil-profissional',
        template: __webpack_require__(/*! raw-loader!./perfil-profissional.page.html */ "./node_modules/raw-loader/index.js!./src/app/perfil-profissional/perfil-profissional.page.html"),
        styles: [__webpack_require__(/*! ./perfil-profissional.page.scss */ "./src/app/perfil-profissional/perfil-profissional.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_serviceProvider_service__WEBPACK_IMPORTED_MODULE_4__["ServiceProviderService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
        _services_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"],
        _services_address_service__WEBPACK_IMPORTED_MODULE_3__["AddressService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
        _services_sub_category_service__WEBPACK_IMPORTED_MODULE_1__["SubCategoryService"]])
], PerfilProfissionalPage);



/***/ }),

/***/ "./src/models/serviceProviderModel.ts":
/*!********************************************!*\
  !*** ./src/models/serviceProviderModel.ts ***!
  \********************************************/
/*! exports provided: ServiceProviderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderModel", function() { return ServiceProviderModel; });
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ "./src/models/baseModel.ts");

class ServiceProviderModel extends _baseModel__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
}


/***/ }),

/***/ "./src/services/address.service.ts":
/*!*****************************************!*\
  !*** ./src/services/address.service.ts ***!
  \*****************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AddressService = class AddressService {
    constructor(http) {
        this.http = http;
    }
    getAllStates() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api}/address`);
    }
    getAllCities(state) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api}/address/${state}`);
    }
};
AddressService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], AddressService);



/***/ }),

/***/ "./src/services/serviceProvider.service.ts":
/*!*************************************************!*\
  !*** ./src/services/serviceProvider.service.ts ***!
  \*************************************************/
/*! exports provided: ServiceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderService", function() { return ServiceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");




let ServiceProviderService = class ServiceProviderService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super('serviceProvider', http);
        this.http = http;
    }
    changePassword(currentPassword, newPassword, confirmNewPassword) {
        return this.http.post(`${this.urlBase}/changepassword`, { currentPassword, newPassword, confirmNewPassword });
    }
};
ServiceProviderService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }
];
ServiceProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
], ServiceProviderService);



/***/ })

}]);
//# sourceMappingURL=perfil-profissional-perfil-profissional-module-es2015.js.map