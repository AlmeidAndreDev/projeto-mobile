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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visualizar_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visualizar-solicitacao.page */ "./src/app/visualizar-solicitacao/visualizar-solicitacao.page.ts");







var routes = [
    {
        path: '',
        component: _visualizar_solicitacao_page__WEBPACK_IMPORTED_MODULE_6__["VisualizarSolicitacaoPage"]
    }
];
var VisualizarSolicitacaoPageModule = /** @class */ (function () {
    function VisualizarSolicitacaoPageModule() {
    }
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
    return VisualizarSolicitacaoPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ "./src/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var VisualizarSolicitacaoPage = /** @class */ (function () {
    function VisualizarSolicitacaoPage(active, orderSrv, alertSrv, navCtrl) {
        this.active = active;
        this.orderSrv = orderSrv;
        this.alertSrv = alertSrv;
        this.navCtrl = navCtrl;
        this.anwsers = [];
    }
    VisualizarSolicitacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.active.params.subscribe(function (p) { return _this.getOrder(p.id); });
        this.active.queryParams.subscribe(function (p) { return _this.view = p['view'] || 'disponives'; });
    };
    VisualizarSolicitacaoPage.prototype.getOrder = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var orderResult, geo, anwsersResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderSrv.GetById(uid)];
                    case 1:
                        orderResult = _a.sent();
                        if (orderResult.success) {
                            this.order = orderResult.data;
                            geo = this.order.longlat.split(';').map(function (x) { return parseFloat(x); });
                            this.populateMap(geo[1], geo[0]);
                        }
                        return [4 /*yield*/, this.orderSrv.getAllAnwsers(uid)];
                    case 2:
                        anwsersResult = _a.sent();
                        if (anwsersResult.success) {
                            this.anwsers = anwsersResult.data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    VisualizarSolicitacaoPage.prototype.populateMap = function (lat, lng) {
        var _this = this;
        var point = { lat: lat, lng: lng };
        var start = { lat: -34.397, lng: 150.644 };
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: start,
            zoom: 15,
            disableDefaultUI: true,
        });
        setTimeout(function () {
            _this.map.setCenter(point);
            var maker = new google.maps.Marker({
                position: point,
                map: _this.map
            });
        }, 1000);
    };
    VisualizarSolicitacaoPage.prototype.accept = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.orderSrv.accpet(this.order.uid)];
                    case 1:
                        _a = _b.sent(), success = _a.success, data = _a.data;
                        if (success) {
                            this.alertSrv.toast(data.message);
                            this.navCtrl.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    VisualizarSolicitacaoPage.prototype.done = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.orderSrv.done(this.order.uid)];
                    case 1:
                        _a = _b.sent(), success = _a.success, data = _a.data;
                        if (success) {
                            this.alertSrv.toast(data.message);
                            this.navCtrl.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    VisualizarSolicitacaoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
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
    return VisualizarSolicitacaoPage;
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
//# sourceMappingURL=visualizar-solicitacao-visualizar-solicitacao-module-es5.js.map