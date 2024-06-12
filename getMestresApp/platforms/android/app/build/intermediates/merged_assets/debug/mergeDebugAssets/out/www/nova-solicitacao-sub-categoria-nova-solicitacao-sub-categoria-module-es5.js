(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nova-solicitacao-sub-categoria-nova-solicitacao-sub-categoria-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ category.name }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of subCategories\" (click)=\"selectSubCategory(item)\">\n        <div>{{ item.name }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"empty\" *ngIf=\"subCategories.length === 0\">\n    Não existem SubCategorias na categoria {{ category.name }}\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: NovaSolicitacaoSubCategoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSolicitacaoSubCategoriaPageModule", function() { return NovaSolicitacaoSubCategoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_solicitacao_sub_categoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-solicitacao-sub-categoria.page */ "./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.ts");







var routes = [
    {
        path: '',
        component: _nova_solicitacao_sub_categoria_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoSubCategoriaPage"]
    }
];
var NovaSolicitacaoSubCategoriaPageModule = /** @class */ (function () {
    function NovaSolicitacaoSubCategoriaPageModule() {
    }
    NovaSolicitacaoSubCategoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nova_solicitacao_sub_categoria_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoSubCategoriaPage"]]
        })
    ], NovaSolicitacaoSubCategoriaPageModule);
    return NovaSolicitacaoSubCategoriaPageModule;
}());



/***/ }),

/***/ "./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-tertiary);\n}\n\nion-grid {\n  --ion-grid-padding: 5px;\n}\n\nion-grid ion-col > div {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fcfcfc), to(#e4e4e4));\n  background: linear-gradient(to bottom, #fcfcfc 0%, #e4e4e4 100%);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 60px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px var(--ion-color-tertiary-shade);\n  border: 1px solid var(--ion-color-tertiary);\n}\n\n.empty {\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92YS1zb2xpY2l0YWNhby1zdWItY2F0ZWdvcmlhL0M6XFxhbmRyZVxcZmFjdWxkYWRlXFxjZWx1bGFyXFxnZXRtZXN0cmVzLW1hc3RlclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldE1lc3RyZXNBcHAvc3JjXFxhcHBcXG5vdmEtc29saWNpdGFjYW8tc3ViLWNhdGVnb3JpYVxcbm92YS1zb2xpY2l0YWNhby1zdWItY2F0ZWdvcmlhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm92YS1zb2xpY2l0YWNhby1zdWItY2F0ZWdvcmlhL25vdmEtc29saWNpdGFjYW8tc3ViLWNhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURDRTtFQUNFLHVGQUFBO0VBQUEsZ0VBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLDJDQUFBO0FDQ0o7O0FESUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL25vdmEtc29saWNpdGFjYW8tc3ViLWNhdGVnb3JpYS9ub3ZhLXNvbGljaXRhY2FvLXN1Yi1jYXRlZ29yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiA1cHg7XG5cbiAgaW9uLWNvbCA+IGRpdiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjZmNmYyAwJSwjZTRlNGU0IDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gfVxuXG59XG5cbi5lbXB0eSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMjBweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDVweDtcbn1cbmlvbi1ncmlkIGlvbi1jb2wgPiBkaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNmY2ZjIDAlLCAjZTRlNGU0IDEwMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4uZW1wdHkge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.ts ***!
  \***************************************************************************************/
/*! exports provided: NovaSolicitacaoSubCategoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSolicitacaoSubCategoriaPage", function() { return NovaSolicitacaoSubCategoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_sub_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/sub-category.service */ "./src/services/sub-category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_categoryModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/categoryModel */ "./src/models/categoryModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var NovaSolicitacaoSubCategoriaPage = /** @class */ (function () {
    function NovaSolicitacaoSubCategoriaPage(router, subCategorySrv, navCtrl) {
        this.router = router;
        this.subCategorySrv = subCategorySrv;
        this.navCtrl = navCtrl;
        this.category = new _models_categoryModel__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"]();
        this.subCategories = new Array();
    }
    NovaSolicitacaoSubCategoriaPage.prototype.ngOnInit = function () {
        try {
            var extras = this.router.getCurrentNavigation().extras;
            if (extras && extras.state) {
                this.category = extras.state;
                this.loadData();
            }
            else {
                this.navCtrl.navigateRoot('/tabs');
            }
        }
        catch (error) {
            this.navCtrl.navigateRoot('/tabs');
        }
    };
    NovaSolicitacaoSubCategoriaPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subCategorySrv.getAllByCategory(this.category.uid)];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.subCategories = result.data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaSolicitacaoSubCategoriaPage.prototype.selectSubCategory = function (subCategory) {
        this.router.navigate(['/tabs/tabSolicitacoes/nova-solicitacao-perguntas/'], { state: subCategory });
    };
    NovaSolicitacaoSubCategoriaPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_sub_category_service__WEBPACK_IMPORTED_MODULE_1__["SubCategoryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    NovaSolicitacaoSubCategoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-nova-solicitacao-sub-categoria',
            template: __webpack_require__(/*! raw-loader!./nova-solicitacao-sub-categoria.page.html */ "./node_modules/raw-loader/index.js!./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.html"),
            styles: [__webpack_require__(/*! ./nova-solicitacao-sub-categoria.page.scss */ "./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_sub_category_service__WEBPACK_IMPORTED_MODULE_1__["SubCategoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], NovaSolicitacaoSubCategoriaPage);
    return NovaSolicitacaoSubCategoriaPage;
}());



/***/ }),

/***/ "./src/models/baseModel.ts":
/*!*********************************!*\
  !*** ./src/models/baseModel.ts ***!
  \*********************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());



/***/ }),

/***/ "./src/services/base.service.ts":
/*!**************************************!*\
  !*** ./src/services/base.service.ts ***!
  \**************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/http.service */ "./src/services/http.service.ts");


var BaseService = /** @class */ (function () {
    function BaseService(url, http) {
        this.url = url;
        this.http = http;
        this.urlBase = '';
        this.urlBase = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api + "/" + this.url;
    }
    BaseService.prototype.GetAll = function () {
        return this.http.get(this.urlBase);
    };
    BaseService.prototype.GetById = function (uid) {
        return this.http.get(this.urlBase + "/" + uid);
    };
    BaseService.prototype.post = function (model) {
        return this.http.post(this.urlBase, model);
    };
    BaseService.prototype.put = function (model, uid) {
        return this.http.put(this.urlBase + "/" + uid, model);
    };
    BaseService.prototype.delete = function (uid) {
        return this.http.delete(this.urlBase + "/" + uid);
    };
    BaseService.ctorParameters = function () { return [
        { type: String },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }
    ]; };
    return BaseService;
}());



/***/ })

}]);
//# sourceMappingURL=nova-solicitacao-sub-categoria-nova-solicitacao-sub-categoria-module-es5.js.map