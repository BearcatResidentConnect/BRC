(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-error-error-routing-module"],{

/***/ "1nNA":
/*!***************************************************!*\
  !*** ./src/modules/error/error-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ROUTES, ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.module */ "sJhf");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "4OUW");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404',
    },
    {
        path: '401',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error401Component"],
        data: {
            title: 'Error 401 - Bearcat Resident Connect',
        },
    },
    {
        path: '404',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error404Component"],
        data: {
            title: 'Error 404 - Bearcat Resident Connect',
        },
    },
    {
        path: '500',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error500Component"],
        data: {
            title: 'Error 500 - Bearcat Resident Connect',
        },
    },
    {
        path: '**',
        pathMatch: 'full',
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error404Component"],
    },
];
let ErrorRoutingModule = class ErrorRoutingModule {
};
ErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErrorRoutingModule);



/***/ }),

/***/ "4OUW":
/*!***********************************************!*\
  !*** ./src/modules/error/containers/index.ts ***!
  \***********************************************/
/*! exports provided: containers, Error401Component, Error404Component, Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-401/error-401.component */ "Kn7a");
/* harmony import */ var _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-404/error-404.component */ "7Dwj");
/* harmony import */ var _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-500/error-500.component */ "lunk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_0__["Error401Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_2__["Error500Component"]; });




const containers = [_error_401_error_401_component__WEBPACK_IMPORTED_MODULE_0__["Error401Component"], _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"], _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_2__["Error500Component"]];





/***/ }),

/***/ "7Dwj":
/*!***********************************************************************!*\
  !*** ./src/modules/error/containers/error-404/error-404.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-404.component.html */ "9ZS5");
/* harmony import */ var _error_404_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-404.component.scss */ "tHDC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() { }
};
Error404Component.ctorParameters = () => [];
Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-error-404',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_error_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_404_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error404Component);



/***/ }),

/***/ "9ZS5":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"mb-4 img-error\" src=\"assets/img/error-404-monochrome.svg\" />\n                    <p class=\"lead\">This requested URL was not found on this server.</p>\n                    <a routerLink=\"/dashboard\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n");

/***/ }),

/***/ "Akro":
/*!*************************************************!*\
  !*** ./src/modules/error/guards/error.guard.ts ***!
  \*************************************************/
/*! exports provided: ErrorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGuard", function() { return ErrorGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let ErrorGuard = class ErrorGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
ErrorGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorGuard);



/***/ }),

/***/ "FV2C":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <h1 class=\"display-1\">500</h1>\n                    <p class=\"lead\">Internal Server Error</p>\n                    <a routerLink=\"/dashboard\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n");

/***/ }),

/***/ "Kn7a":
/*!***********************************************************************!*\
  !*** ./src/modules/error/containers/error-401/error-401.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error401Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return Error401Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_401_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-401.component.html */ "Uv41");
/* harmony import */ var _error_401_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-401.component.scss */ "NMRR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let Error401Component = class Error401Component {
    constructor() { }
    ngOnInit() { }
};
Error401Component.ctorParameters = () => [];
Error401Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-error-401',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_error_401_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_401_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error401Component);



/***/ }),

/***/ "NMRR":
/*!*************************************************************************!*\
  !*** ./src/modules/error/containers/error-401/error-401.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "OFVe":
/*!*****************************************************!*\
  !*** ./src/modules/error/services/error.service.ts ***!
  \*****************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let ErrorService = class ErrorService {
    constructor() { }
    getError$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    }
};
ErrorService.ctorParameters = () => [];
ErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorService);



/***/ }),

/***/ "UUSV":
/*!*******************************************!*\
  !*** ./src/modules/error/guards/index.ts ***!
  \*******************************************/
/*! exports provided: guards, ErrorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _error_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.guard */ "Akro");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorGuard", function() { return _error_guard__WEBPACK_IMPORTED_MODULE_0__["ErrorGuard"]; });


const guards = [_error_guard__WEBPACK_IMPORTED_MODULE_0__["ErrorGuard"]];



/***/ }),

/***/ "UaJP":
/*!*********************************************!*\
  !*** ./src/modules/error/services/index.ts ***!
  \*********************************************/
/*! exports provided: services, ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.service */ "OFVe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return _error_service__WEBPACK_IMPORTED_MODULE_0__["ErrorService"]; });


const services = [_error_service__WEBPACK_IMPORTED_MODULE_0__["ErrorService"]];



/***/ }),

/***/ "Uv41":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <h1 class=\"display-1\">401</h1>\n                    <p class=\"lead\">Unauthorized</p>\n                    <p>Access to this resource is denied.</p>\n                    <a routerLink=\"/dashboard\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n");

/***/ }),

/***/ "Xyyl":
/*!*************************************************************************!*\
  !*** ./src/modules/error/containers/error-500/error-500.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci01MDAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lunk":
/*!***********************************************************************!*\
  !*** ./src/modules/error/containers/error-500/error-500.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-500.component.html */ "FV2C");
/* harmony import */ var _error_500_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-500.component.scss */ "Xyyl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let Error500Component = class Error500Component {
    constructor() { }
    ngOnInit() { }
};
Error500Component.ctorParameters = () => [];
Error500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-error-500',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_error_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_500_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error500Component);



/***/ }),

/***/ "s4Dx":
/*!***********************************************!*\
  !*** ./src/modules/error/components/index.ts ***!
  \***********************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
const components = [];


/***/ }),

/***/ "sJhf":
/*!*******************************************!*\
  !*** ./src/modules/error/error.module.ts ***!
  \*******************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "s4Dx");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "4OUW");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "UUSV");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "UaJP");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */

let ErrorModule = class ErrorModule {
};
ErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_10__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_9__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], ErrorModule);



/***/ }),

/***/ "tHDC":
/*!*************************************************************************!*\
  !*** ./src/modules/error/containers/error-404/error-404.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci00MDQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=modules-error-error-routing-module-es2015.js.map