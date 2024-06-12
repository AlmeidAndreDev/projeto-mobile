(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitacoes-solicitacoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/solicitacoes/solicitacoes.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/solicitacoes/solicitacoes.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>Solicitações</ion-title>\n  </ion-toolbar>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\" routerLink=\"/tabs/tabSolicitacoes/nova-solicitacao\" routerDirection=\"forward\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let request of list\"\n    [routerLink]=\"['/tabs/tabSolicitacoes/visualizar-minha-solicitacao', request.uid]\">\n    <ion-card-title>\n      {{ request.title }}\n    </ion-card-title>\n    <ion-card-subtitle>\n      Categoria: {{ request.subCategory.name }}\n    </ion-card-subtitle>\n    <ion-card-content>\n      {{ request.description | truncate:50 }}\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"list.length === 0\">\n    <ion-card-content>\n      Você ainda não fez nenhuma solicitação, clique no botão + acima para começar :D\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/solicitacoes/solicitacoes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/solicitacoes/solicitacoes.module.ts ***!
  \*****************************************************/
/*! exports provided: SolicitacoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitacoesPageModule", function() { return SolicitacoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _solicitacoes_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solicitacoes.page */ "./src/app/solicitacoes/solicitacoes.page.ts");








var routes = [
    {
        path: '',
        component: _solicitacoes_page__WEBPACK_IMPORTED_MODULE_7__["SolicitacoesPage"]
    }
];
var SolicitacoesPageModule = /** @class */ (function () {
    function SolicitacoesPageModule() {
    }
    SolicitacoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]
            ],
            declarations: [_solicitacoes_page__WEBPACK_IMPORTED_MODULE_7__["SolicitacoesPage"]]
        })
    ], SolicitacoesPageModule);
    return SolicitacoesPageModule;
}());



/***/ }),

/***/ "./src/app/solicitacoes/solicitacoes.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/solicitacoes/solicitacoes.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-tertiary);\n}\n\nion-fab {\n  margin-top: 17px;\n}\n\nion-card {\n  --background: linear-gradient(to bottom, #fcfcfc 0%,#e4e4e4 100%);\n  margin: 20px;\n  padding: 10px;\n}\n\nion-card ion-card-title {\n  font-size: 1.2rem;\n  line-height: 30px;\n}\n\nion-card ion-card-subtitle {\n  line-height: 20px;\n  color: var(--ion-color-primary);\n}\n\nion-card ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29saWNpdGFjb2VzL0M6XFxhbmRyZVxcZmFjdWxkYWRlXFxjZWx1bGFyXFxnZXRtZXN0cmVzLW1hc3RlclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldE1lc3RyZXNBcHAvc3JjXFxhcHBcXHNvbGljaXRhY29lc1xcc29saWNpdGFjb2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc29saWNpdGFjb2VzL3NvbGljaXRhY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGlFQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFRjs7QURERTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUNHSjs7QURERTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3NvbGljaXRhY29lcy9zb2xpY2l0YWNvZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5pb24tZmFiIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmY2ZjZmMgMCUsI2U0ZTRlNCAxMDAlKTtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmlvbi1mYWIge1xuICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjZmNmYyAwJSwjZTRlNGU0IDEwMCUpO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/solicitacoes/solicitacoes.page.ts":
/*!***************************************************!*\
  !*** ./src/app/solicitacoes/solicitacoes.page.ts ***!
  \***************************************************/
/*! exports provided: SolicitacoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitacoesPage", function() { return SolicitacoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/order.service */ "./src/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SolicitacoesPage = /** @class */ (function () {
    function SolicitacoesPage(orderSrv) {
        this.orderSrv = orderSrv;
        this.list = [];
    }
    SolicitacoesPage.prototype.ngOnInit = function () {
        this.loadData();
    };
    SolicitacoesPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.orderSrv.customerGetMyOrders()];
                    case 1:
                        _a = _b.sent(), success = _a.success, data = _a.data;
                        if (success) {
                            this.list = data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SolicitacoesPage.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
    ]; };
    SolicitacoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-solicitacoes',
            template: __webpack_require__(/*! raw-loader!./solicitacoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/solicitacoes/solicitacoes.page.html"),
            styles: [__webpack_require__(/*! ./solicitacoes.page.scss */ "./src/app/solicitacoes/solicitacoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], SolicitacoesPage);
    return SolicitacoesPage;
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
//# sourceMappingURL=solicitacoes-solicitacoes-module-es5.js.map