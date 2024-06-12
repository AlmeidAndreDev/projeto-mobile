(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aceitos-aceitos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/aceitos/aceitos.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aceitos/aceitos.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>Solicitações Disponiveis</ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-title>2000 moedas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let request of list\" [routerLink]=\"['/tabs/tabAceitos/visualizar-solicitacao', request.uid]\"\n    [queryParams]=\" { view: 'aceitos'  }\">\n    <ion-card-title>\n      {{ request.title }}\n    </ion-card-title>\n    <ion-card-subtitle>\n      Categoria: {{ request.subCategory.name }}\n    </ion-card-subtitle>\n    <ion-card-content>\n      {{ request.description | truncate:50 }}\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"list.length === 0\">\n    <ion-card-content>\n      Você não tem nenhuma solicitação disponível no momento, aguarde em breve chegara novas solicitações :D\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/aceitos/aceitos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aceitos/aceitos.module.ts ***!
  \*******************************************/
/*! exports provided: AceitosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceitosPageModule", function() { return AceitosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aceitos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aceitos.page */ "./src/app/aceitos/aceitos.page.ts");








var routes = [
    {
        path: '',
        component: _aceitos_page__WEBPACK_IMPORTED_MODULE_7__["AceitosPage"]
    }
];
var AceitosPageModule = /** @class */ (function () {
    function AceitosPageModule() {
    }
    AceitosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]
            ],
            declarations: [_aceitos_page__WEBPACK_IMPORTED_MODULE_7__["AceitosPage"]]
        })
    ], AceitosPageModule);
    return AceitosPageModule;
}());



/***/ }),

/***/ "./src/app/aceitos/aceitos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aceitos/aceitos.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-tertiary);\n}\n\nion-fab {\n  margin-top: 17px;\n}\n\nion-card {\n  --background: linear-gradient(to bottom, #fcfcfc 0%,#e4e4e4 100%);\n  margin: 20px;\n  padding: 10px;\n}\n\nion-card ion-card-title {\n  font-size: 1.2rem;\n  line-height: 30px;\n}\n\nion-card ion-card-subtitle {\n  line-height: 20px;\n  color: var(--ion-color-primary);\n}\n\nion-card ion-card-content {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNlaXRvcy9DOlxcYW5kcmVcXGZhY3VsZGFkZVxcY2VsdWxhclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRNZXN0cmVzQXBwL3NyY1xcYXBwXFxhY2VpdG9zXFxhY2VpdG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNlaXRvcy9hY2VpdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRERFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQ0dKOztBRERFO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYWNlaXRvcy9hY2VpdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNmY2ZjIDAlLCNlNGU0ZTQgMTAwJSk7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmY2ZjZmMgMCUsI2U0ZTRlNCAxMDAlKTtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/aceitos/aceitos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aceitos/aceitos.page.ts ***!
  \*****************************************/
/*! exports provided: AceitosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceitosPage", function() { return AceitosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/services/order.service.ts");
/* harmony import */ var _models_enums_RequestStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/enums/RequestStatus */ "./src/models/enums/RequestStatus.ts");




var AceitosPage = /** @class */ (function () {
    function AceitosPage(orderSrv) {
        this.orderSrv = orderSrv;
        this.list = [];
    }
    AceitosPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AceitosPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.orderSrv.getMyOrders(_models_enums_RequestStatus__WEBPACK_IMPORTED_MODULE_3__["RequestStatus"].accepted)];
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
    AceitosPage.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    AceitosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aceitos',
            template: __webpack_require__(/*! raw-loader!./aceitos.page.html */ "./node_modules/raw-loader/index.js!./src/app/aceitos/aceitos.page.html"),
            styles: [__webpack_require__(/*! ./aceitos.page.scss */ "./src/app/aceitos/aceitos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], AceitosPage);
    return AceitosPage;
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
//# sourceMappingURL=aceitos-aceitos-module-es5.js.map