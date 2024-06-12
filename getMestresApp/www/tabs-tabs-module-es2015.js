(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"tabDisponiveis\" *ngIf=\"perfil === 'serviceProvider'\">\n      <ion-icon name=\"book\"></ion-icon>\n      <ion-label>Disponíveis</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tabAceitos\" *ngIf=\"perfil === 'serviceProvider'\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n      <ion-label>Aceitos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tabConcluidos\" *ngIf=\"perfil === 'serviceProvider'\">\n      <ion-icon name=\"copy\"></ion-icon>\n      <ion-label>Concluídos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tabSolicitacoes\" *ngIf=\"perfil === 'customer'\">\n      <ion-icon name=\"book\"></ion-icon>\n      <ion-label>Minhas Solicitações</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tabAtendidas\" *ngIf=\"perfil === 'customer'\">\n      <ion-icon name=\"copy\"></ion-icon>\n      <ion-label>Atendidas</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tabPerfil\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-selected {\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcYW5kcmVcXGZhY3VsZGFkZVxcY2VsdWxhclxcZ2V0bWVzdHJlcy1tYXN0ZXJcXGdldG1lc3RyZXMtbWFzdGVyXFxnZXRNZXN0cmVzQXBwL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufSIsIi50YWItc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let TabsPage = class TabsPage {
    constructor(userSrv, navCtrl, router) {
        this.userSrv = userSrv;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.subProfile = this.userSrv.ProfileAsync.subscribe(prof => {
            this.perfil = prof;
            switch (prof) {
                case 'customer':
                    setTimeout(() => {
                        this.router.navigate(['/tabs/tabSolicitacoes'], {});
                    }, 200);
                    break;
                case 'serviceProvider':
                    setTimeout(() => {
                        this.router.navigate(['/tabs/tabDisponiveis'], {});
                    }, 200);
                    break;
            }
        });
        if (!this.userSrv.IsAuth) {
            this.navCtrl.navigateRoot('/login');
        }
    }
    ngOnDestroy() {
        if (this.subProfile) {
            this.subProfile.unsubscribe();
        }
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/constants */ "./src/shared/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");





const perfil = localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].keyStore.profile);
const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'tabDisponiveis',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | disponiveis-disponiveis-module */[__webpack_require__.e("common"), __webpack_require__.e("disponiveis-disponiveis-module")]).then(__webpack_require__.bind(null, /*! ../disponiveis/disponiveis.module */ "./src/app/disponiveis/disponiveis.module.ts")).then(m => m.DisponiveisPageModule)
                    },
                    {
                        path: 'visualizar-solicitacao/:id',
                        loadChildren: () => Promise.all(/*! import() | visualizar-solicitacao-visualizar-solicitacao-module */[__webpack_require__.e("common"), __webpack_require__.e("visualizar-solicitacao-visualizar-solicitacao-module")]).then(__webpack_require__.bind(null, /*! ../visualizar-solicitacao/visualizar-solicitacao.module */ "./src/app/visualizar-solicitacao/visualizar-solicitacao.module.ts"))
                            .then(m => m.VisualizarSolicitacaoPageModule)
                    }
                ]
            },
            {
                path: 'tabAceitos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | aceitos-aceitos-module */[__webpack_require__.e("common"), __webpack_require__.e("aceitos-aceitos-module")]).then(__webpack_require__.bind(null, /*! ../aceitos/aceitos.module */ "./src/app/aceitos/aceitos.module.ts")).then(m => m.AceitosPageModule)
                    },
                    {
                        path: 'visualizar-solicitacao/:id',
                        loadChildren: () => Promise.all(/*! import() | visualizar-solicitacao-visualizar-solicitacao-module */[__webpack_require__.e("common"), __webpack_require__.e("visualizar-solicitacao-visualizar-solicitacao-module")]).then(__webpack_require__.bind(null, /*! ../visualizar-solicitacao/visualizar-solicitacao.module */ "./src/app/visualizar-solicitacao/visualizar-solicitacao.module.ts"))
                            .then(m => m.VisualizarSolicitacaoPageModule)
                    }
                ]
            },
            {
                path: 'tabConcluidos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | concluidos-concluidos-module */[__webpack_require__.e("common"), __webpack_require__.e("concluidos-concluidos-module")]).then(__webpack_require__.bind(null, /*! ../concluidos/concluidos.module */ "./src/app/concluidos/concluidos.module.ts")).then(m => m.ConcluidosPageModule)
                    },
                    {
                        path: 'visualizar-solicitacao/:id',
                        loadChildren: () => Promise.all(/*! import() | visualizar-solicitacao-visualizar-solicitacao-module */[__webpack_require__.e("common"), __webpack_require__.e("visualizar-solicitacao-visualizar-solicitacao-module")]).then(__webpack_require__.bind(null, /*! ../visualizar-solicitacao/visualizar-solicitacao.module */ "./src/app/visualizar-solicitacao/visualizar-solicitacao.module.ts"))
                            .then(m => m.VisualizarSolicitacaoPageModule)
                    }
                ]
            },
            {
                path: 'tabPerfil',
                children: [
                    {
                        path: '',
                        loadChildren: () => perfil === 'serviceProvider' ?
                            Promise.all(/*! import() | perfil-profissional-perfil-profissional-module */[__webpack_require__.e("default~perfil-perfil-module~perfil-profissional-perfil-profissional-module"), __webpack_require__.e("common"), __webpack_require__.e("perfil-profissional-perfil-profissional-module")]).then(__webpack_require__.bind(null, /*! ../perfil-profissional/perfil-profissional.module */ "./src/app/perfil-profissional/perfil-profissional.module.ts")).then(m => m.PerfilProfissionalPageModule) :
                            Promise.all(/*! import() | perfil-perfil-module */[__webpack_require__.e("default~perfil-perfil-module~perfil-profissional-perfil-profissional-module"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ../perfil/perfil.module */ "./src/app/perfil/perfil.module.ts")).then(m => m.PerfilPageModule)
                    }
                ]
            },
            {
                path: 'tabSolicitacoes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | solicitacoes-solicitacoes-module */[__webpack_require__.e("common"), __webpack_require__.e("solicitacoes-solicitacoes-module")]).then(__webpack_require__.bind(null, /*! ../solicitacoes/solicitacoes.module */ "./src/app/solicitacoes/solicitacoes.module.ts")).then(m => m.SolicitacoesPageModule)
                    },
                    {
                        path: 'nova-solicitacao',
                        loadChildren: () => Promise.all(/*! import() | nova-solicitacao-nova-solicitacao-module */[__webpack_require__.e("common"), __webpack_require__.e("nova-solicitacao-nova-solicitacao-module")]).then(__webpack_require__.bind(null, /*! ../nova-solicitacao/nova-solicitacao.module */ "./src/app/nova-solicitacao/nova-solicitacao.module.ts")).then(m => m.NovaSolicitacaoPageModule)
                    },
                    {
                        path: 'nova-solicitacao-sub-categoria',
                        loadChildren: () => Promise.all(/*! import() | nova-solicitacao-sub-categoria-nova-solicitacao-sub-categoria-module */[__webpack_require__.e("common"), __webpack_require__.e("nova-solicitacao-sub-categoria-nova-solicitacao-sub-categoria-module")]).then(__webpack_require__.bind(null, /*! ../nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.module */ "./src/app/nova-solicitacao-sub-categoria/nova-solicitacao-sub-categoria.module.ts"))
                            .then(m => m.NovaSolicitacaoSubCategoriaPageModule)
                    },
                    {
                        path: 'nova-solicitacao-perguntas',
                        loadChildren: () => Promise.all(/*! import() | nova-solicitacao-perguntas-nova-solicitacao-perguntas-module */[__webpack_require__.e("common"), __webpack_require__.e("nova-solicitacao-perguntas-nova-solicitacao-perguntas-module")]).then(__webpack_require__.bind(null, /*! ../nova-solicitacao-perguntas/nova-solicitacao-perguntas.module */ "./src/app/nova-solicitacao-perguntas/nova-solicitacao-perguntas.module.ts"))
                            .then(m => m.NovaSolicitacaoPerguntasPageModule)
                    },
                    {
                        path: 'visualizar-minha-solicitacao/:id',
                        loadChildren: () => Promise.all(/*! import() | visualizar-minha-solicitacao-visualizar-minha-solicitacao-module */[__webpack_require__.e("common"), __webpack_require__.e("visualizar-minha-solicitacao-visualizar-minha-solicitacao-module")]).then(__webpack_require__.bind(null, /*! ../visualizar-minha-solicitacao/visualizar-minha-solicitacao.module */ "./src/app/visualizar-minha-solicitacao/visualizar-minha-solicitacao.module.ts"))
                            .then(m => m.VisualizarMinhaSolicitacaoPageModule)
                    },
                ]
            },
            {
                path: 'tabAtendidas',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | atendidas-atendidas-module */ "atendidas-atendidas-module").then(__webpack_require__.bind(null, /*! ../atendidas/atendidas.module */ "./src/app/atendidas/atendidas.module.ts")).then(m => m.AtendidasPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: perfil === 'serviceProvider' ? '/tabs/tabDisponiveis' : '/tabs/tabSolicitacoes',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: perfil === 'serviceProvider' ? '/tabs/tabDisponiveis' : '/tabs/tabSolicitacoes',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map