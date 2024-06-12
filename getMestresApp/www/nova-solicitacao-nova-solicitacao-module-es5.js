(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nova-solicitacao-nova-solicitacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nova-solicitacao/nova-solicitacao.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nova-solicitacao/nova-solicitacao.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Selecione a categoria</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of categories\" (click)=\"selectCategory(item)\">\n        <div>{{ item.name }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/nova-solicitacao/nova-solicitacao.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/nova-solicitacao/nova-solicitacao.module.ts ***!
  \*************************************************************/
/*! exports provided: NovaSolicitacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSolicitacaoPageModule", function() { return NovaSolicitacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-solicitacao.page */ "./src/app/nova-solicitacao/nova-solicitacao.page.ts");







var routes = [
    {
        path: '',
        component: _nova_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoPage"]
    }
];
var NovaSolicitacaoPageModule = /** @class */ (function () {
    function NovaSolicitacaoPageModule() {
    }
    NovaSolicitacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nova_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoPage"]]
        })
    ], NovaSolicitacaoPageModule);
    return NovaSolicitacaoPageModule;
}());



/***/ }),

/***/ "./src/app/nova-solicitacao/nova-solicitacao.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/nova-solicitacao/nova-solicitacao.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-tertiary);\n}\n\nion-grid {\n  --ion-grid-padding: 5px;\n}\n\nion-grid ion-col > div {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fcfcfc), to(#e4e4e4));\n  background: linear-gradient(to bottom, #fcfcfc 0%, #e4e4e4 100%);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 60px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px var(--ion-color-tertiary-shade);\n  border: 1px solid var(--ion-color-tertiary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92YS1zb2xpY2l0YWNhby9DOlxcYW5kcmVcXGZhY3VsZGFkZVxcY2VsdWxhclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRNZXN0cmVzQXBwL3NyY1xcYXBwXFxub3ZhLXNvbGljaXRhY2FvXFxub3ZhLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm92YS1zb2xpY2l0YWNhby9ub3ZhLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBRENFO0VBQ0UsdUZBQUE7RUFBQSxnRUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsMkNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25vdmEtc29saWNpdGFjYW8vbm92YS1zb2xpY2l0YWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDVweDtcblxuICBpb24tY29sID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNmY2ZjIDAlLCNlNGU0ZTQgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiB9XG5cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDVweDtcbn1cbmlvbi1ncmlkIGlvbi1jb2wgPiBkaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNmY2ZjIDAlLCAjZTRlNGU0IDEwMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nova-solicitacao/nova-solicitacao.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/nova-solicitacao/nova-solicitacao.page.ts ***!
  \***********************************************************/
/*! exports provided: NovaSolicitacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSolicitacaoPage", function() { return NovaSolicitacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/category.service */ "./src/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NovaSolicitacaoPage = /** @class */ (function () {
    function NovaSolicitacaoPage(categorySrv, router) {
        this.categorySrv = categorySrv;
        this.router = router;
        this.categories = new Array();
    }
    NovaSolicitacaoPage.prototype.ngOnInit = function () {
        this.loadData();
    };
    NovaSolicitacaoPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categorySrv.GetAll()];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.categories = result.data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaSolicitacaoPage.prototype.selectCategory = function (category) {
        this.router.navigate(['/tabs/tabSolicitacoes/nova-solicitacao-sub-categoria/'], { state: category });
    };
    NovaSolicitacaoPage.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NovaSolicitacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nova-solicitacao',
            template: __webpack_require__(/*! raw-loader!./nova-solicitacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/nova-solicitacao/nova-solicitacao.page.html"),
            styles: [__webpack_require__(/*! ./nova-solicitacao.page.scss */ "./src/app/nova-solicitacao/nova-solicitacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NovaSolicitacaoPage);
    return NovaSolicitacaoPage;
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
//# sourceMappingURL=nova-solicitacao-nova-solicitacao-module-es5.js.map