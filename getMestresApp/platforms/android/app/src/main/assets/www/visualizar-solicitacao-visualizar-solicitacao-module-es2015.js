(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visualizar-solicitacao-visualizar-solicitacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visualizar-solicitacao/visualizar-solicitacao.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visualizar-solicitacao/visualizar-solicitacao.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Visualizar Solicitação</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"section\">\n    <div id=\"map\" class=\"map\"></div>\n  </div>\n  <ion-list>\n    <ion-item-divider>\n      <ion-label>Solicitação</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>\n        <h2>Título</h2>\n        <p>{{order?.title}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <h2>Descrição</h2>\n        <p>{{order?.description}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>Categoria</h2>\n        <p>{{order?.subCategory?.name}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label>Respostas</ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let item of anwsers\">\n      <ion-label>\n        <h2>{{item.question.question}}</h2>\n        <p>{{item.answer}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\" *ngIf=\"view === 'disponiveis' && order?.statusOrder === 1\">\n    <ion-button (click)=\"accept()\" expand=\"block\" fill=\"solid\">\n      Aceitar\n    </ion-button>\n  </div>\n  <div class=\"ion-padding\" *ngIf=\"order?.statusOrder === 2\">\n    <ion-button color=\"secondary\" (click)=\"done()\" expand=\"block\" fill=\"solid\">\n      Finalizar\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/visualizar-solicitacao/visualizar-solicitacao.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/visualizar-solicitacao/visualizar-solicitacao.module.ts ***!
  \*************************************************************************/
/*! exports provided: VisualizarSolicitacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarSolicitacaoPageModule", function() { return VisualizarSolicitacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visualizar_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visualizar-solicitacao.page */ "./src/app/visualizar-solicitacao/visualizar-solicitacao.page.ts");







const routes = [
    {
        path: '',
        component: _visualizar_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarSolicitacaoPage"]
    }
];
let VisualizarSolicitacaoPageModule = class VisualizarSolicitacaoPageModule {
};
VisualizarSolicitacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_visualizar_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarSolicitacaoPage"]]
    })
], VisualizarSolicitacaoPageModule);



/***/ }),

/***/ "./src/app/visualizar-solicitacao/visualizar-solicitacao.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/visualizar-solicitacao/visualizar-solicitacao.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  background: #f2f2f2;\n}\n\nion-label h2 {\n  color: var(--ion-color-primary);\n}\n\n.section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.map {\n  height: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXphci1zb2xpY2l0YWNhby9DOlxcYW5kcmVcXGZhY3VsZGFkZVxcY2VsdWxhclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRNZXN0cmVzQXBwL3NyY1xcYXBwXFx2aXN1YWxpemFyLXNvbGljaXRhY2FvXFx2aXN1YWxpemFyLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlzdWFsaXphci1zb2xpY2l0YWNhby92aXN1YWxpemFyLXNvbGljaXRhY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC92aXN1YWxpemFyLXNvbGljaXRhY2FvL3Zpc3VhbGl6YXItc29saWNpdGFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5pb24tbGFiZWwgaDIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDMwdmg7XG59IiwiaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbmlvbi1sYWJlbCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1hcCB7XG4gIGhlaWdodDogMzB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/visualizar-solicitacao/visualizar-solicitacao.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/visualizar-solicitacao/visualizar-solicitacao.page.ts ***!
  \***********************************************************************/
/*! exports provided: VisualizarSolicitacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarSolicitacaoPage", function() { return VisualizarSolicitacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./src/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let VisualizarSolicitacaoPage = class VisualizarSolicitacaoPage {
    constructor(active, orderSrv, alertSrv, navCtrl) {
        this.active = active;
        this.orderSrv = orderSrv;
        this.alertSrv = alertSrv;
        this.navCtrl = navCtrl;
        this.anwsers = [];
    }
    ngOnInit() {
        this.active.params.subscribe(p => this.getOrder(p.id));
        this.active.queryParams.subscribe(p => this.view = p['view'] || 'disponives');
    }
    getOrder(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const orderResult = yield this.orderSrv.GetById(uid);
            if (orderResult.success) {
                this.order = orderResult.data;
                const geo = this.order.longlat.split(';').map(x => parseFloat(x));
                this.populateMap(geo[1], geo[0]);
            }
            const anwsersResult = yield this.orderSrv.getAllAnwsers(uid);
            if (anwsersResult.success) {
                this.anwsers = anwsersResult.data;
            }
        });
    }
    populateMap(lat, lng) {
        const point = { lat, lng };
        const start = { lat: -34.397, lng: 150.644 };
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: start,
            zoom: 15,
            disableDefaultUI: true,
        });
        setTimeout(() => {
            this.map.setCenter(point);
            const maker = new google.maps.Marker({
                position: point,
                map: this.map
            });
        }, 1000);
    }
    accept() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, data } = yield this.orderSrv.accpet(this.order.uid);
            if (success) {
                this.alertSrv.toast(data.message);
                this.navCtrl.pop();
            }
        });
    }
    done() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, data } = yield this.orderSrv.done(this.order.uid);
            if (success) {
                this.alertSrv.toast(data.message);
                this.navCtrl.pop();
            }
        });
    }
};
VisualizarSolicitacaoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
VisualizarSolicitacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-visualizar-solicitacao',
        template: __webpack_require__(/*! raw-loader!./visualizar-solicitacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/visualizar-solicitacao/visualizar-solicitacao.page.html"),
        styles: [__webpack_require__(/*! ./visualizar-solicitacao.page.scss */ "./src/app/visualizar-solicitacao/visualizar-solicitacao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], VisualizarSolicitacaoPage);



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
//# sourceMappingURL=visualizar-solicitacao-visualizar-solicitacao-module-es2015.js.map