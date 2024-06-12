(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disponiveis-disponiveis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/disponiveis/disponiveis.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/disponiveis/disponiveis.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>Solicitações Disponiveis</ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>2000 moedas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let request of list\" [routerLink]=\"['/tabs/tabDisponiveis/visualizar-solicitacao', request.uid]\">\n    <ion-card-title>\n      {{ request.title }}\n    </ion-card-title>\n    <ion-card-subtitle>\n      Categoria: {{ request.subCategory.name }}\n    </ion-card-subtitle>\n    <ion-card-content>\n      {{ request.description | truncate:50 }}\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"list.length === 0\">\n    <ion-card-content>\n      Você não tem nenhuma solicitação disponível no momento, aguarde em breve chegara novas solicitações :D\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/disponiveis/disponiveis.module.ts":
/*!***************************************************!*\
  !*** ./src/app/disponiveis/disponiveis.module.ts ***!
  \***************************************************/
/*! exports provided: DisponiveisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisponiveisPageModule", function() { return DisponiveisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _disponiveis_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./disponiveis.page */ "./src/app/disponiveis/disponiveis.page.ts");








var routes = [
    {
        path: '',
        component: _disponiveis_page__WEBPACK_IMPORTED_MODULE_7__["DisponiveisPage"]
    }
];
var DisponiveisPageModule = /** @class */ (function () {
    function DisponiveisPageModule() {
    }
    DisponiveisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]
            ],
            declarations: [_disponiveis_page__WEBPACK_IMPORTED_MODULE_7__["DisponiveisPage"]]
        })
    ], DisponiveisPageModule);
    return DisponiveisPageModule;
}());



/***/ }),

/***/ "./src/app/disponiveis/disponiveis.page.scss":
/*!***************************************************!*\
  !*** ./src/app/disponiveis/disponiveis.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-tertiary);\n}\n\nion-fab {\n  margin-top: 17px;\n}\n\nion-card {\n  --background: linear-gradient(to bottom, #fcfcfc 0%,#e4e4e4 100%);\n  margin: 20px;\n  padding: 10px;\n}\n\nion-card ion-card-title {\n  font-size: 1.2rem;\n  line-height: 30px;\n}\n\nion-card ion-card-subtitle {\n  line-height: 20px;\n  color: var(--ion-color-primary);\n}\n\nion-card ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcG9uaXZlaXMvQzpcXGFuZHJlXFxmYWN1bGRhZGVcXGNlbHVsYXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRtZXN0cmVzLW1hc3RlclxcZ2V0TWVzdHJlc0FwcC9zcmNcXGFwcFxcZGlzcG9uaXZlaXNcXGRpc3Bvbml2ZWlzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGlzcG9uaXZlaXMvZGlzcG9uaXZlaXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxpRUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUY7O0FEREU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREU7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FDR0o7O0FEREU7RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9kaXNwb25pdmVpcy9kaXNwb25pdmVpcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi1mYWIge1xuICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjZmNmYyAwJSwjZTRlNGU0IDEwMCUpO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNmY2ZjIDAlLCNlNGU0ZTQgMTAwJSk7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/disponiveis/disponiveis.page.ts":
/*!*************************************************!*\
  !*** ./src/app/disponiveis/disponiveis.page.ts ***!
  \*************************************************/
/*! exports provided: DisponiveisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisponiveisPage", function() { return DisponiveisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/services/order.service.ts");



var DisponiveisPage = /** @class */ (function () {
    function DisponiveisPage(orderSrv) {
        this.orderSrv = orderSrv;
        this.list = [];
    }
    DisponiveisPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    DisponiveisPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.orderSrv.getOrdersAvailable()];
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
    DisponiveisPage.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    DisponiveisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-disponiveis',
            template: __webpack_require__(/*! raw-loader!./disponiveis.page.html */ "./node_modules/raw-loader/index.js!./src/app/disponiveis/disponiveis.page.html"),
            styles: [__webpack_require__(/*! ./disponiveis.page.scss */ "./src/app/disponiveis/disponiveis.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], DisponiveisPage);
    return DisponiveisPage;
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
//# sourceMappingURL=disponiveis-disponiveis-module-es5.js.map