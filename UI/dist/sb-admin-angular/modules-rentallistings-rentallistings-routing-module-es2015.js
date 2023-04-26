(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-rentallistings-rentallistings-routing-module"],{

/***/ "43zm":
/*!*********************************************************************!*\
  !*** ./src/modules/rentallistings/rentallistings-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ROUTES, RentallistingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentallistingsRoutingModule", function() { return RentallistingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _rentallistings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rentallistings.module */ "YqS4");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "KRC2");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["RentallistingsComponent"],
        data: {
            title: 'Rental listings - BRC',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Rental listings',
                    active: true,
                },
            ],
        },
    },
];
let RentallistingsRoutingModule = class RentallistingsRoutingModule {
};
RentallistingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_rentallistings_module__WEBPACK_IMPORTED_MODULE_3__["RentallistingsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RentallistingsRoutingModule);



/***/ }),

/***/ "EXC+":
/*!********************************************************************************************!*\
  !*** ./src/modules/rentallistings/containers/rentallistings/rentallistings.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW50YWxsaXN0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "KRC2":
/*!********************************************************!*\
  !*** ./src/modules/rentallistings/containers/index.ts ***!
  \********************************************************/
/*! exports provided: containers, RentallistingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _rentallistings_rentallistings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rentallistings/rentallistings.component */ "Rw7/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RentallistingsComponent", function() { return _rentallistings_rentallistings_component__WEBPACK_IMPORTED_MODULE_0__["RentallistingsComponent"]; });


const containers = [_rentallistings_rentallistings_component__WEBPACK_IMPORTED_MODULE_0__["RentallistingsComponent"]];



/***/ }),

/***/ "MyV0":
/*!***********************************************************************!*\
  !*** ./src/modules/rentallistings/services/rentallistings.service.ts ***!
  \***********************************************************************/
/*! exports provided: RentallistingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentallistingsService", function() { return RentallistingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




// const API_URL = 'http://18.207.93.25:5000/api';
// const API_URL  = 'http://192.168.1.23:5000/api';
let RentallistingsService = class RentallistingsService {
    constructor(http) {
        this.http = http;
    }
    getRentallistings() {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + "/rental-postings");
    }
};
RentallistingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RentallistingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], RentallistingsService);



/***/ }),

/***/ "Rw7/":
/*!******************************************************************************************!*\
  !*** ./src/modules/rentallistings/containers/rentallistings/rentallistings.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RentallistingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentallistingsComponent", function() { return RentallistingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rentallistings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rentallistings.component.html */ "no1e");
/* harmony import */ var _rentallistings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rentallistings.component.scss */ "EXC+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_rentallistings_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/rentallistings/services */ "YVdo");






let RentallistingsComponent = class RentallistingsComponent {
    constructor(rentallistingsservice, route, router) {
        this.rentallistingsservice = rentallistingsservice;
        this.route = route;
        this.router = router;
        this.user_name = localStorage.getItem("user_name");
    }
    ngOnInit() {
        this.rentalid = this.route.snapshot.params.id;
        this.rentallistingsservice.getRentallistings().subscribe({
            next: data => {
                this.rentallistings = data;
                console.log(this.rental_id, "xxxxx");
                // localStorage.setItem('rental_id',this.rentallistings[1].rental_id); 
                this.rental_id = localStorage.getItem('rental_id');
                console.log(this.rental_id, "rental id sfsdf");
                console.log(this.rental_id, "Rental id");
            }
        });
    }
    navigateWithId(id) {
        this.router.navigate(['newproperty/' + id]);
    }
};
RentallistingsComponent.ctorParameters = () => [
    { type: _modules_rentallistings_services__WEBPACK_IMPORTED_MODULE_5__["RentallistingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RentallistingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-rentallistings',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        template: _raw_loader_rentallistings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rentallistings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_rentallistings_services__WEBPACK_IMPORTED_MODULE_5__["RentallistingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RentallistingsComponent);



/***/ }),

/***/ "YVdo":
/*!******************************************************!*\
  !*** ./src/modules/rentallistings/services/index.ts ***!
  \******************************************************/
/*! exports provided: services, RentallistingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _rentallistings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rentallistings.service */ "MyV0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RentallistingsService", function() { return _rentallistings_service__WEBPACK_IMPORTED_MODULE_0__["RentallistingsService"]; });


const services = [_rentallistings_service__WEBPACK_IMPORTED_MODULE_0__["RentallistingsService"]];



/***/ }),

/***/ "YqS4":
/*!*************************************************************!*\
  !*** ./src/modules/rentallistings/rentallistings.module.ts ***!
  \*************************************************************/
/*! exports provided: RentallistingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentallistingsModule", function() { return RentallistingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "KRC2");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "YVdo");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Containers */

/* Services */

let RentallistingsModule = class RentallistingsModule {
};
RentallistingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_8__["services"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_7__["containers"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_7__["containers"]],
    })
], RentallistingsModule);



/***/ }),

/***/ "no1e":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/rentallistings/containers/rentallistings/rentallistings.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Property Rental Listings\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover bg-white border rounded-lg\">\n              <thead class=\"thead-sm thead-black\">\n                <tr>\n                  <th scope=\"col\" style=\"width:47%;\" colspan=\"4\" class=\"border-top-0 pt-5 pb-4\">Listing title</th>\n                  <th scope=\"col\"  class=\"border-top-0 pt-5 pb-4\">Email</th>\n                  <th scope=\"col\"  class=\"border-top-0 pt-5 pb-4\">Avdailable</th>\n                  <th scope=\"col\" class=\"border-top-0 pt-5 pb-4\">Phone</th>\n                </tr>\n              </thead>\n              </table>\n            </div>\n            <!-- <h3 class=\"card-title mb-0 text-heading fs-22 lh-15\">Property Listings</h3> -->\n            <div class=\"table-responsive\" *ngFor=\"let item of rentallistings\">\n                <table class=\"table table-hover bg-white border rounded-lg\">\n                  <tbody>\n                    <tr class=\"shadow-hover-xs-2 bg-hover-white\">\n                      <td class=\"align-middle pt-6 pb-4 px-6 tbbb\">\n                        <div class=\"media\">\n                          <div class=\"w-120px mr-4 position-relative\">\n                            <a routerLink=\"../rentallistingsdetail/{{item.rental_id}}\">\n                              <img src=\"../../../../assets/img/house.png\" alt=\"Home in Metric Way\">\n                            </a>\n                        \n                          </div>\n                          <div class=\"media-body\">\n                            <a routerLink=\"../rentallistingsdetail/{{item.rental_id}}\" class=\"text-dark hover-primary\">\n                              <h5 class=\"fs-16 mb-0 lh-18\">{{item.name}}</h5>\n                            </a>\n                            <p class=\"mb-1 font-weight-500\">{{item.address1}},{{item.address2}}</p>\n                            <!-- <span class=\"text-heading lh-15 font-weight-bold fs-17\">$2500</span> -->\n                            <!-- <span class=\"text-gray-light\">/month</span> -->\n                          </div>\n                        </div>\n                      </td>\n                      <td class=\"align-middle tccc\"><a href=\"javascript:void(0)\">{{ item?.email }}</a></td>\n                      <td class=\"align-middle\">\n                        <span class=\"badge text-capitalize font-weight-normal fs-12 badge-success\">Avialble</span>\n                      </td>\n                      <td class=\"align-middle\"><a href=\"javascript:void(0)\">{{ item?.phone }}</a></td>\n                      \n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n    </sb-card>\n</sb-layout-dashboard>\n");

/***/ })

}]);
//# sourceMappingURL=modules-rentallistings-rentallistings-routing-module-es2015.js.map