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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nova_solicitacao_perguntas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nova-solicitacao-perguntas.page */ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.page.ts");







const routes = [
    {
        path: '',
        component: _nova_solicitacao_perguntas_page__WEBPACK_IMPORTED_MODULE_6__["NovaSolicitacaoPerguntasPage"]
    }
];
let NovaSolicitacaoPerguntasPageModule = class NovaSolicitacaoPerguntasPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");









let NovaSolicitacaoPerguntasPage = class NovaSolicitacaoPerguntasPage {
    constructor(router, questionsSrv, navCtrl, geolocation, orderSv) {
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
    ngOnInit() {
        try {
            const { extras } = this.router.getCurrentNavigation();
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
    }
    loadData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.questionsSrv.getAllQuestions(this.subCategory.uid);
            if (result.success) {
                this.questions = result.data;
            }
        });
    }
    getOptions(question) {
        return question.options.split(',').map(o => o.trim());
    }
    send() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const { coords } = yield this.geolocation.getCurrentPosition();
                this.request.longlat = `${coords.longitude};${coords.latitude}`;
                this.request.subCategory = this.subCategory.uid;
                const { success, data } = yield this.orderSv.post(this.request);
                if (success) {
                    // tslint:disable-next-line: forin
                    for (const key in this.anserws) {
                        yield this.orderSv.sendAnwser({
                            answer: this.anserws[key],
                            question: key,
                            requestOrder: data.uid
                        });
                    }
                }
            }
            catch (error) {
                console.log('error', error);
            }
        });
    }
};
NovaSolicitacaoPerguntasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }
];
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
class BaseModel {
}


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
class RequestOrderModel {
}


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
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ "./src/models/baseModel.ts");
/* harmony import */ var _categoryModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryModel */ "./src/models/categoryModel.ts");


class SubCategoryModel extends _baseModel__WEBPACK_IMPORTED_MODULE_0__["BaseModel"] {
    constructor() {
        super();
        this.category = new _categoryModel__WEBPACK_IMPORTED_MODULE_1__["CategoryModel"]();
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/services/base.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/services/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





let QuestionsService = class QuestionsService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super('question', http);
        this.http = http;
    }
    getAllQuestions(subCategoryUid) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url_api}/subcategory/${subCategoryUid}/questions`);
    }
};
QuestionsService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], QuestionsService);



/***/ })

}]);
//# sourceMappingURL=nova-solicitacao-perguntas-nova-solicitacao-perguntas-module-es2015.js.map