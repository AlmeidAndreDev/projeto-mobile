(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nova-solicitacao-perguntas-nova-solicitacao-perguntas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-text-center\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ subCategory.name }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"send()\">\n        Enviar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class=\"ion-padding\" lines=\"none\">\n    <ion-item>\n      Preencha o formulário abaixo para finalizar sua solicitação\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Título da Solicitação</ion-label>\n      <ion-input [(ngModel)]=\"request.title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Descreva com detalhes sua solicitação</ion-label>\n      <ion-textarea rows=\"3\" [(ngModel)]=\"request.description\"></ion-textarea>\n    </ion-item>\n    <ion-item *ngFor=\"let q of questions\">\n      <ion-label class=\"ion-text-wrap\" position=\"stacked\">{{q.question}}</ion-label>\n      <ion-input *ngIf=\"q.type === 1\" [(ngModel)]=\"anserws[q.uid]\" [(ngModel)]=\"anserws[q.uid]\"></ion-input>\n      <ion-datetime *ngIf=\"q.type === 2\" doneText=\"Ok\" cancelText=\"Cancelar\" [(ngModel)]=\"anserws[q.uid]\" displayFormat=\"DD/MM/YYYY\" pickerFormat=\"DD MM YYYY\"></ion-datetime>\n      <ion-select *ngIf=\"q.type === 3\" [(ngModel)]=\"anserws[q.uid]\" placeholder=\"Selecione\">\n        <ion-select-option *ngFor=\"let op of getOptions(q)\" [value]=\"op\">{{op}}</ion-select-option>\n      </ion-select>\n      <ion-textarea *ngIf=\"q.type === 4\" [(ngModel)]=\"anserws[q.uid]\" rows=\"6\" placeholder=\"Descreva melhor...\">\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NovaSolicitacaoPerguntasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSolicitacaoPerguntasPageModule", function() { return NovaSolicitacaoPerguntasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_solicitacao_perguntas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-solicitacao-perguntas.page */ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.ts");







var routes = [
    {
        path: '',
        component: _nova_solicitacao_perguntas_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoPerguntasPage"]
    }
];
var NovaSolicitacaoPerguntasPageModule = /** @class */ (function () {
    function NovaSolicitacaoPerguntasPageModule() {
    }
    NovaSolicitacaoPerguntasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_nova_solicitacao_perguntas_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoPerguntasPage"]]
        })
    ], NovaSolicitacaoPerguntasPageModule);
    return NovaSolicitacaoPerguntasPageModule;
}());



/***/ }),

/***/ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdmEtc29saWNpdGFjYW8tcGVyZ3VudGFzL25vdmEtc29saWNpdGFjYW8tcGVyZ3VudGFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.ts ***!
  \*******************************************************************************/
/*! exports provided: NovaSolicitacaoPerguntasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaSolicitacaoPerguntasPage", function() { return NovaSolicitacaoPerguntasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/order.service */ "./src/services/order.service.ts");
/* harmony import */ var _models_requestOrderModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/requestOrderModel */ "./src/models/requestOrderModel.ts");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/questions.service */ "./src/services/questions.service.ts");
/* harmony import */ var _models_subCategoryModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/subCategoryModel */ "./src/models/subCategoryModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");









var NovaSolicitacaoPerguntasPage = /** @class */ (function () {
    function NovaSolicitacaoPerguntasPage(router, questionsSrv, navCtrl, geolocation, orderSv) {
        this.router = router;
        this.questionsSrv = questionsSrv;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.orderSv = orderSv;
        this.subCategory = new _models_subCategoryModel__WEBPACK_IMPORTED_MODULE_4__["SubCategoryModel"]();
        this.questions = new Array();
        this.anserws = {};
        this.request = new _models_requestOrderModel__WEBPACK_IMPORTED_MODULE_2__["RequestOrderModel"]();
    }
    NovaSolicitacaoPerguntasPage.prototype.ngOnInit = function () {
        try {
            var extras = this.router.getCurrentNavigation().extras;
            if (extras && extras.state) {
                this.subCategory = extras.state;
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
    NovaSolicitacaoPerguntasPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.questionsSrv.getAllQuestions(this.subCategory.uid)];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.questions = result.data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NovaSolicitacaoPerguntasPage.prototype.getOptions = function (question) {
        return question.options.split(',').map(function (o) { return o.trim(); });
    };
    NovaSolicitacaoPerguntasPage.prototype.send = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords, _a, success, data, _b, _c, _i, key, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        coords = (_d.sent()).coords;
                        this.request.longlat = coords.longitude + ";" + coords.latitude;
                        this.request.subCategory = this.subCategory.uid;
                        return [4 /*yield*/, this.orderSv.post(this.request)];
                    case 2:
                        _a = _d.sent(), success = _a.success, data = _a.data;
                        if (!success) return [3 /*break*/, 6];
                        _b = [];
                        for (_c in this.anserws)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 3;
                    case 3:
                        if (!(_i < _b.length)) return [3 /*break*/, 6];
                        key = _b[_i];
                        return [4 /*yield*/, this.orderSv.sendAnwser({
                                answer: this.anserws[key],
                                question: key,
                                requestOrder: data.uid
                            })];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _d.sent();
                        console.log('error', error_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    NovaSolicitacaoPerguntasPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
    ]; };
    NovaSolicitacaoPerguntasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-nova-solicitacao-perguntas',
            template: __webpack_require__(/*! raw-loader!./nova-solicitacao-perguntas.page.html */ "./node_modules/raw-loader/index.js!./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.html"),
            styles: [__webpack_require__(/*! ./nova-solicitacao-perguntas.page.scss */ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], NovaSolicitacaoPerguntasPage);
    return NovaSolicitacaoPerguntasPage;
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

/***/ "./src/models/requestOrderModel.ts":
/*!*****************************************!*\
  !*** ./src/models/requestOrderModel.ts ***!
  \*****************************************/
/*! exports provided: RequestOrderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOrderModel", function() { return RequestOrderModel; });
var RequestOrderModel = /** @class */ (function () {
    function RequestOrderModel() {
    }
    return RequestOrderModel;
}());



/***/ }),

/***/ "./src/models/subCategoryModel.ts":
/*!****************************************!*\
  !*** ./src/models/subCategoryModel.ts ***!
  \****************************************/
/*! exports provided: SubCategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryModel", function() { return SubCategoryModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseModel */ "./src/models/baseModel.ts");
/* harmony import */ var _categoryModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryModel */ "./src/models/categoryModel.ts");



var SubCategoryModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubCategoryModel, _super);
    function SubCategoryModel() {
        var _this = _super.call(this) || this;
        _this.category = new _categoryModel__WEBPACK_IMPORTED_MODULE_2__["CategoryModel"]();
        return _this;
    }
    return SubCategoryModel;
}(_baseModel__WEBPACK_IMPORTED_MODULE_1__["BaseModel"]));



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



/***/ }),

/***/ "./src/services/questions.service.ts":
/*!*******************************************!*\
  !*** ./src/services/questions.service.ts ***!
  \*******************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var QuestionsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuestionsService, _super);
    function QuestionsService(http) {
        var _this = _super.call(this, 'question', http) || this;
        _this.http = http;
        return _this;
    }
    QuestionsService.prototype.getAllQuestions = function (subCategoryUid) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url_api + "/subcategory/" + subCategoryUid + "/questions");
    };
    QuestionsService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
    ]; };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], QuestionsService);
    return QuestionsService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=nova-solicitacao-perguntas-nova-solicitacao-perguntas-module-es5.js.map