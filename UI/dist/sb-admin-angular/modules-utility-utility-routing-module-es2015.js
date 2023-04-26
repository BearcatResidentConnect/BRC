(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-utility-utility-routing-module"],{

/***/ "+D/G":
/*!***********************************************************************!*\
  !*** ./src/modules/utility/containers/version/version.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "/PVB":
/*!*********************************************************************!*\
  !*** ./src/modules/utility/containers/version/version.component.ts ***!
  \*********************************************************************/
/*! exports provided: VersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function() { return VersionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./version.component.html */ "yWnc");
/* harmony import */ var _version_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version.component.scss */ "+D/G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_utility_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/utility/services */ "WsTT");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let VersionComponent = class VersionComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    ngOnInit() {
        this.utilityService.version$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(v => (this.version = v));
    }
};
VersionComponent.ctorParameters = () => [
    { type: _modules_utility_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
VersionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-version',
        template: _raw_loader_version_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_version_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_utility_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
], VersionComponent);



/***/ }),

/***/ "CEN6":
/*!*********************************************************!*\
  !*** ./src/modules/utility/services/utility.service.ts ***!
  \*********************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let UtilityService = class UtilityService {
    constructor(http) {
        this.http = http;
    }
    get version$() {
        return this.http.get('/assets/version', { responseType: 'text' });
    }
};
UtilityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UtilityService);



/***/ }),

/***/ "Je4Y":
/*!***********************************************!*\
  !*** ./src/modules/utility/utility.module.ts ***!
  \***********************************************/
/*! exports provided: UtilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityModule", function() { return UtilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "fUAW");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "TARH");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "OAo4");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "WsTT");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */

let UtilityModule = class UtilityModule {
};
UtilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], UtilityModule);



/***/ }),

/***/ "OAo4":
/*!*********************************************!*\
  !*** ./src/modules/utility/guards/index.ts ***!
  \*********************************************/
/*! exports provided: guards, UtilityGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _utility_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.guard */ "YZ3t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilityGuard", function() { return _utility_guard__WEBPACK_IMPORTED_MODULE_0__["UtilityGuard"]; });


const guards = [_utility_guard__WEBPACK_IMPORTED_MODULE_0__["UtilityGuard"]];



/***/ }),

/***/ "TARH":
/*!*************************************************!*\
  !*** ./src/modules/utility/containers/index.ts ***!
  \*************************************************/
/*! exports provided: containers, VersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _version_version_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version/version.component */ "/PVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function() { return _version_version_component__WEBPACK_IMPORTED_MODULE_0__["VersionComponent"]; });


const containers = [
    _version_version_component__WEBPACK_IMPORTED_MODULE_0__["VersionComponent"],
];



/***/ }),

/***/ "W7dZ":
/*!*******************************************************!*\
  !*** ./src/modules/utility/utility-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES, UtilityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityRoutingModule", function() { return UtilityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.module */ "Je4Y");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "TARH");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["VersionComponent"],
    },
];
let UtilityRoutingModule = class UtilityRoutingModule {
};
UtilityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UtilityRoutingModule);



/***/ }),

/***/ "WsTT":
/*!***********************************************!*\
  !*** ./src/modules/utility/services/index.ts ***!
  \***********************************************/
/*! exports provided: services, UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.service */ "CEN6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return _utility_service__WEBPACK_IMPORTED_MODULE_0__["UtilityService"]; });


const services = [
    _utility_service__WEBPACK_IMPORTED_MODULE_0__["UtilityService"],
];



/***/ }),

/***/ "YZ3t":
/*!*****************************************************!*\
  !*** ./src/modules/utility/guards/utility.guard.ts ***!
  \*****************************************************/
/*! exports provided: UtilityGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityGuard", function() { return UtilityGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let UtilityGuard = class UtilityGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
UtilityGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UtilityGuard);



/***/ }),

/***/ "fUAW":
/*!*************************************************!*\
  !*** ./src/modules/utility/components/index.ts ***!
  \*************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
const components = [];


/***/ }),

/***/ "yWnc":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/utility/containers/version/version.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>{{version}}</span>\n");

/***/ })

}]);
//# sourceMappingURL=modules-utility-utility-routing-module-es2015.js.map