(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-userlistings-userlistings-routing-module"],{

/***/ "CgKl":
/*!*******************************************************************!*\
  !*** ./src/modules/userlistings/services/userlistings.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserlistingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsService", function() { return UserlistingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




let UserlistingsService = class UserlistingsService {
    constructor(http) {
        this.http = http;
    }
    getUserrental() {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-postings/');
    }
};
UserlistingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserlistingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UserlistingsService);



/***/ }),

/***/ "FsR4":
/*!************************************************************************************!*\
  !*** ./src/modules/userlistings/containers/userlistings/userlistings.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserlistingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsComponent", function() { return UserlistingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_userlistings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./userlistings.component.html */ "dgjq");
/* harmony import */ var _userlistings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlistings.component.scss */ "P0zX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_userlistings_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/userlistings/services */ "hAlT");






let UserlistingsComponent = class UserlistingsComponent {
    constructor(userlistingsservice, route, router) {
        this.userlistingsservice = userlistingsservice;
        this.route = route;
        this.router = router;
        this.user_name = localStorage.getItem("user_name");
    }
    ngOnInit() {
        this.postingId = this.route.snapshot.params.id;
        this.userlistingsservice.getUserrental().subscribe({
            next: data => {
                this.userlistings = data;
                console.log(this.userlistings, "fskdjhfk");
                // console.log(this.userlistings[0].UserPosting.posting_id);
                console.log(this.userlistings.address1, "address");
                localStorage.setItem('posting_id', this.userlistings[1].posting_id);
                this.posting_id = localStorage.getItem('posting_id');
                console.log(this.posting_id, "posting_id");
            }
        });
    }
    navigateWithId(id) {
        this.router.navigate(['updnewproperty/' + id]);
    }
};
UserlistingsComponent.ctorParameters = () => [
    { type: _modules_userlistings_services__WEBPACK_IMPORTED_MODULE_5__["UserlistingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserlistingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-userlistings',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        template: _raw_loader_userlistings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_userlistings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_userlistings_services__WEBPACK_IMPORTED_MODULE_5__["UserlistingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UserlistingsComponent);



/***/ }),

/***/ "OcoX":
/*!*****************************************************************!*\
  !*** ./src/modules/userlistings/userlistings-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ROUTES, UserlistingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsRoutingModule", function() { return UserlistingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _userlistings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlistings.module */ "dOzf");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "gVeh");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["UserlistingsComponent"],
        data: {
            title: 'User listings',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'User listings',
                    active: true,
                },
            ],
        },
    },
];
let UserlistingsRoutingModule = class UserlistingsRoutingModule {
};
UserlistingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_userlistings_module__WEBPACK_IMPORTED_MODULE_3__["UserlistingsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserlistingsRoutingModule);



/***/ }),

/***/ "P0zX":
/*!**************************************************************************************!*\
  !*** ./src/modules/userlistings/containers/userlistings/userlistings.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VybGlzdGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dOzf":
/*!*********************************************************!*\
  !*** ./src/modules/userlistings/userlistings.module.ts ***!
  \*********************************************************/
/*! exports provided: UserlistingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsModule", function() { return UserlistingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "gVeh");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "hAlT");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Containers */

/* Services */

let UserlistingsModule = class UserlistingsModule {
};
UserlistingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], UserlistingsModule);



/***/ }),

/***/ "dgjq":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/userlistings/containers/userlistings/userlistings.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Property Listings\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <!-- <h3 class=\"card-title mb-0 text-heading fs-22 lh-15\">Property Listings</h3> -->\n            <div class=\"table-responsive\">\n            <table class=\"table table-hover bg-white border rounded-lg\">\n              <thead class=\"thead-sm thead-black\">\n                <tr>\n                  <th scope=\"col\" style=\"width:43%;\" colspan=\"4\" class=\"border-top-0 pt-5 pb-4\">Listing title</th>\n                  <th scope=\"col\" style=\"width:21%;\" class=\"border-top-0 pt-5 pb-4\">Date Avdailable</th>\n                  <th scope=\"col\" style=\"width:10%;\" class=\"border-top-0 pt-5 pb-4\">Status</th>\n                  <th scope=\"col\" class=\"border-top-0 pt-5 pb-4\">Type of Accommodation</th>\n                  <!-- <th scope=\"col\" class=\"border-top-0 pt-5 pb-4\">Action</th> -->\n                </tr>\n              </thead>\n              </table>\n            </div>\n            <div class=\"table-responsive\" *ngFor=\"let item of userlistings\">\n                <table class=\"table table-hover bg-white border rounded-lg\">\n                  \n                  <tbody>\n                    <tr class=\"shadow-hover-xs-2 bg-hover-white\">\n                      <td class=\"align-middle pt-6 pb-4 tbbb\">\n                        <div class=\"media\">\n                          <div class=\"w-120px mr-4 position-relative\">\n                            <a href=\"javascript:void(0)\">\n                              <img src=\"../../../../assets/img/house.png\" alt=\"Home in Metric Way\">\n                            </a>\n                        \n                          </div>\n                          <div class=\"media-body\">\n                            <a routerLink=\"../userlistingsdetail/{{item.posting_id}}\" class=\"text-dark hover-primary\">\n                              <h5 class=\"fs-16 mb-0 lh-18\">{{item.name}}</h5>\n                            </a>\n                            <p class=\"mb-1 font-weight-500\">{{item.address1}}</p>\n                            <span class=\"text-heading lh-15 font-weight-bold fs-17\">$ {{item.approx_rent}}</span>\n                            <span class=\"text-gray-light\">/Month</span>\n                          </div>\n                        </div>\n                      </td>\n                      <td class=\"align-middle\">{{item.accomedated_date | date:'MM-dd-yy'}}</td>\n                      <td class=\"align-middle\">\n                        <span class=\"badge text-capitalize font-weight-normal fs-12 badge badge-success\">Avialble</span>\n                      </td>\n                      <td class=\"align-middle\">{{item.accomedation_type}}</td>\n                      <!-- <td style=\"padding-top:40px\"><button class=\"btn btn-secondary \" (click)=\"navigateWithId(item.UserPosting.posting_id)\">Edit</button></td> -->\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              \n        </div>\n    </sb-card>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "gVeh":
/*!******************************************************!*\
  !*** ./src/modules/userlistings/containers/index.ts ***!
  \******************************************************/
/*! exports provided: containers, UserlistingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _userlistings_userlistings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlistings/userlistings.component */ "FsR4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserlistingsComponent", function() { return _userlistings_userlistings_component__WEBPACK_IMPORTED_MODULE_0__["UserlistingsComponent"]; });


const containers = [_userlistings_userlistings_component__WEBPACK_IMPORTED_MODULE_0__["UserlistingsComponent"]];



/***/ }),

/***/ "hAlT":
/*!****************************************************!*\
  !*** ./src/modules/userlistings/services/index.ts ***!
  \****************************************************/
/*! exports provided: services, UserlistingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _userlistings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlistings.service */ "CgKl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserlistingsService", function() { return _userlistings_service__WEBPACK_IMPORTED_MODULE_0__["UserlistingsService"]; });


const services = [_userlistings_service__WEBPACK_IMPORTED_MODULE_0__["UserlistingsService"]];



/***/ })

}]);
//# sourceMappingURL=modules-userlistings-userlistings-routing-module-es2015.js.map