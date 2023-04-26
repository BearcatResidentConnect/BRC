(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-routing-module"],{

/***/ "+IJA":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/containers/index.ts ***!
  \***************************************************/
/*! exports provided: containers, DashboardComponent, LightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "Q2T/");
/* harmony import */ var _light_light_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light/light.component */ "u30O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightComponent", function() { return _light_light_component__WEBPACK_IMPORTED_MODULE_1__["LightComponent"]; });



const containers = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], _light_light_component__WEBPACK_IMPORTED_MODULE_1__["LightComponent"]];




/***/ }),

/***/ "+ZFO":
/*!***********************************************!*\
  !*** ./src/modules/dashboard/guards/index.ts ***!
  \***********************************************/
/*! exports provided: guards, DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _dashboard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.guard */ "zq2N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return _dashboard_guard__WEBPACK_IMPORTED_MODULE_0__["DashboardGuard"]; });


const guards = [_dashboard_guard__WEBPACK_IMPORTED_MODULE_0__["DashboardGuard"]];



/***/ }),

/***/ "1r2h":
/*!*************************************************!*\
  !*** ./src/modules/dashboard/services/index.ts ***!
  \*************************************************/
/*! exports provided: services, DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.service */ "QXO3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return _dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"]; });


const services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"]];



/***/ }),

/***/ "8AI6":
/*!*****************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "DCsZ":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Dashboard\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-dashboard-cards></sb-dashboard-cards>\n</sb-layout-dashboard>");

/***/ }),

/***/ "DuCT":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/dashboard.module.ts ***!
  \***************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/profile/profile.module */ "jMSI");
/* harmony import */ var _modules_newproperty_newproperty_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/newproperty/newproperty.module */ "I6us");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "qvVY");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "+IJA");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards */ "+ZFO");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services */ "1r2h");

/* tslint:disable: ordered-imports*/




/* Modules */




/* Components */

/* Containers */

/* Guards */

/* Services */

let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"],
            _modules_newproperty_newproperty_module__WEBPACK_IMPORTED_MODULE_8__["NewpropertyModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_12__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_11__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_10__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_9__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_10__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_9__["components"]],
    })
], DashboardModule);



/***/ }),

/***/ "EGDz":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/containers/light/light.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWdodC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "HG3J":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    <div class=\"col-md-9\">\n\n        <h4 class=\"mb-0 text-heading\">Welcome , {{name}}!</h4>\n\n    </div>\n\n    <!-- <div class=\"col-md-3\">\n        <a class=\"btn btn-outline-primary float-right\"  routerlink=\"./../newproperty\">Add Property</a>\n    </div> -->\n    <br><br><br>\n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/profile\" background=\"bg-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to profile page\">\n            <div class=\"card-body\">{{dashDetails.num_users}} Total Users</div>\n        </sb-card-view-details>\n    </div>\n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/newproperty\" background=\"bg-danger\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to add new property page\">\n            <div class=\"card-body\">{{dashDetails.num_visitors}} Total No of Visitors</div>\n        </sb-card-view-details>\n    </div>\n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/rentallistings\" background=\"bg-warning\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to rental listings page\">\n            <div class=\"card-body\">{{dashDetails.num_rental_postings}} Total Rental Postings</div>\n        </sb-card-view-details>\n    </div>\n    \n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/userlistings\" background=\"bg-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to user listings page\">\n            <div class=\"card-body\">{{dashDetails.num_user_postings}} Total User Postings</div>\n        </sb-card-view-details>\n    </div>\n    \n</div>");

/***/ }),

/***/ "IlwM":
/*!***********************************************************!*\
  !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ROUTES, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.module */ "DuCT");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "+IJA");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        data: {
            title: 'Dashboard - Bearcat Resident Connect',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    },
    {
        path: 'light',
        data: {
            title: 'Dashboard Light - Bearcat Resident Connect',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LightComponent"],
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "Q2T/":
/*!***************************************************************************!*\
  !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "DCsZ");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "dhcA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "QXO3":
/*!*************************************************************!*\
  !*** ./src/modules/dashboard/services/dashboard.service.ts ***!
  \*************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getDash() {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/dashboard/analytics');
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DashboardService);



/***/ }),

/***/ "TibX":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard [light]=\"true\">\n    <sb-dashboard-head title=\"Dashboard Light\" [hideBreadcrumbs]=\"false\">\n\n    </sb-dashboard-head>\n\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "dhcA":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qvVY":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/components/index.ts ***!
  \***************************************************/
/*! exports provided: components, DashboardCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-cards/dashboard-cards.component */ "yDlM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function() { return _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__["DashboardCardsComponent"]; });


const components = [_dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__["DashboardCardsComponent"]];



/***/ }),

/***/ "u30O":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/containers/light/light.component.ts ***!
  \*******************************************************************/
/*! exports provided: LightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightComponent", function() { return LightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_light_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./light.component.html */ "TibX");
/* harmony import */ var _light_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./light.component.scss */ "EGDz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let LightComponent = class LightComponent {
    constructor() { }
    ngOnInit() { }
};
LightComponent.ctorParameters = () => [];
LightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-light',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_light_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_light_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LightComponent);



/***/ }),

/***/ "yDlM":
/*!***************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function() { return DashboardCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_cards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard-cards.component.html */ "HG3J");
/* harmony import */ var _dashboard_cards_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-cards.component.scss */ "8AI6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_dashboard_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/dashboard/services */ "1r2h");





let DashboardCardsComponent = class DashboardCardsComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.name = localStorage.getItem('first_name');
    }
    ngOnInit() {
        this.dashboardService.getDash().subscribe(data => {
            this.dashDetails = data;
            console.log(this.dashDetails, "userDetails");
        });
    }
};
DashboardCardsComponent.ctorParameters = () => [
    { type: _modules_dashboard_services__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }
];
DashboardCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard-cards',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_cards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_cards_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]])
], DashboardCardsComponent);



/***/ }),

/***/ "zq2N":
/*!*********************************************************!*\
  !*** ./src/modules/dashboard/guards/dashboard.guard.ts ***!
  \*********************************************************/
/*! exports provided: DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return DashboardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let DashboardGuard = class DashboardGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DashboardGuard);



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-routing-module-es2015.js.map