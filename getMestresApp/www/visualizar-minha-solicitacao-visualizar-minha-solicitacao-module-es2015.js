(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visualizar-minha-solicitacao-visualizar-minha-solicitacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Solicitação</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-divider>\n      <ion-label>Solicitação</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>\n        <h2>Título</h2>\n        <p>{{order?.title}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Descrição</h2>\n        <p>{{order?.description}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Categoria</h2>\n        <p>{{order?.subCategory?.name}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label>Respostas</ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let item of anwsers\">\n      <ion-label>\n        <h2>{{item.question.question}}</h2>\n        <p>{{item.answer}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.module.ts ***!
  \*************************************************************************************/
/*! exports provided: VisualizarMinhaSolicitacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarMinhaSolicitacaoPageModule", function() { return VisualizarMinhaSolicitacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visualizar_minha_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visualizar-minha-solicitacao.page */ "./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.ts");







const routes = [
    {
        path: '',
        component: _visualizar_minha_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarMinhaSolicitacaoPage"]
    }
];
let VisualizarMinhaSolicitacaoPageModule = class VisualizarMinhaSolicitacaoPageModule {
};
VisualizarMinhaSolicitacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_visualizar_minha_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarMinhaSolicitacaoPage"]]
    })
], VisualizarMinhaSolicitacaoPageModule);



/***/ }),

/***/ "./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  background: #f2f2f2;\n}\n\nion-label h2 {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXphci1taW5oYS1zb2xpY2l0YWNhby9DOlxcYW5kcmVcXGZhY3VsZGFkZVxcY2VsdWxhclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRNZXN0cmVzQXBwL3NyY1xcYXBwXFx2aXN1YWxpemFyLW1pbmhhLXNvbGljaXRhY2FvXFx2aXN1YWxpemFyLW1pbmhhLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlzdWFsaXphci1taW5oYS1zb2xpY2l0YWNhby92aXN1YWxpemFyLW1pbmhhLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvdmlzdWFsaXphci1taW5oYS1zb2xpY2l0YWNhby92aXN1YWxpemFyLW1pbmhhLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLWRpdmlkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuaW9uLWxhYmVsIGgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iLCJpb24taXRlbS1kaXZpZGVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuaW9uLWxhYmVsIGgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.ts ***!
  \***********************************************************************************/
/*! exports provided: VisualizarMinhaSolicitacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarMinhaSolicitacaoPage", function() { return VisualizarMinhaSolicitacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/order.service */ "./src/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let VisualizarMinhaSolicitacaoPage = class VisualizarMinhaSolicitacaoPage {
    constructor(active, orderSrv) {
        this.active = active;
        this.orderSrv = orderSrv;
        this.anwsers = [];
    }
    ngOnInit() {
        this.active.params.subscribe(p => this.getOrder(p.id));
    }
    getOrder(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const orderResult = yield this.orderSrv.GetById(uid);
            if (orderResult.success) {
                this.order = orderResult.data;
            }
            const anwsersResult = yield this.orderSrv.getAllAnwsers(uid);
            if (anwsersResult.success) {
                this.anwsers = anwsersResult.data;
            }
        });
    }
};
VisualizarMinhaSolicitacaoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
];
VisualizarMinhaSolicitacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visualizar-minha-solicitacao',
        template: __webpack_require__(/*! raw-loader!./visualizar-minha-solicitacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.html"),
        styles: [__webpack_require__(/*! ./visualizar-minha-solicitacao.page.scss */ "./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
], VisualizarMinhaSolicitacaoPage);



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


class BaseService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
        this.urlBase = '';
        this.urlBase = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url_api}/${this.url}`;
    }
    GetAll() {
        return this.http.get(this.urlBase);
    }
    GetById(uid) {
        return this.http.get(`${this.urlBase}/${uid}`);
    }
    post(model) {
        return this.http.post(this.urlBase, model);
    }
    put(model, uid) {
        return this.http.put(`${this.urlBase}/${uid}`, model);
    }
    delete(uid) {
        return this.http.delete(`${this.urlBase}/${uid}`);
    }
}
BaseService.ctorParameters = () => [
    { type: String },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }
];


/***/ })

}]);
//# sourceMappingURL=visualizar-minha-solicitacao-visualizar-minha-solicitacao-module-es2015.js.map