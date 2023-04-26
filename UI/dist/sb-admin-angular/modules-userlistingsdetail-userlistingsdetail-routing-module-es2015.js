(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-userlistingsdetail-userlistingsdetail-routing-module"],{

/***/ "/QCF":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/userlistingsdetail/containers/userlistingsdetail/userlistingsdetail.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Property Listings\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <section class=\"pb-7 border-bottom\">\n                <ul class=\"list-inline d-sm-flex align-items-sm-center mb-2\">\n                    <li class=\"list-inline-item badge badge-orange mr-2\">Avialble</li>\n                    <li class=\"list-inline-item badge badge-primary mr-3\">\n                        {{ userlisting?.accomedation_type }}\n                    </li>\n                    <li class=\"list-inline-item mr-2 mt-2 mt-sm-0\">\n                        <i class=\"fal fa-clock mr-1\"></i>1 month ago\n                    </li>\n                </ul>\n                <div class=\"d-sm-flex justify-content-sm-between\">\n                    <div>\n                        <h2 class=\"fs-35 font-weight-600 lh-15 text-heading\">\n                            {{ userlisting?.name }}\n                        </h2>\n                        <p class=\"mb-0\">\n                            <i class=\"fa fa-map-marker mr-2\" style=\"font-size:20px\" aria-hidden=\"true\"></i> {{ userlisting?.address1\n                            }},{{ userlisting?.address2 }},{{ userlisting?.city }}\n                        </p>\n                    </div>\n                    <div class=\"mt-2 text-lg-right\">\n                        <!-- <p class=\"fs-22 text-heading font-weight-bold mb-0\">${{userlisting?.UserPosting?.approx_rent}}</p> -->\n                        <p class=\"mb-0\">${{ userlisting?.approx_rent }}/Person</p>\n                    </div>\n                </div>\n                <h4 class=\"fs-22 text-heading mt-6 mb-2\">Description : </h4>\n                <p class=\"mb-0 lh-214\">\n                    {{userlisting?.description}}\n                </p>\n            </section>\n\n            <section class=\"pt-6 border-bottom pb-4 pt-4\">\n                <h4 class=\"fs-22 text-heading mb-4\">Additional Details</h4>\n                <div class=\"row\">\n                     \n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Rental id : </dt>\n                        <dd>{{ userlisting?.posting_id }}</dd>\n                    </dl>\n\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Tenant Name :</dt>\n                        <dd><i>{{ userlisting?.first_name }}</i></dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Tenant Email :</dt>\n                        <dd><a href=\"{{ userlisting?.email }}\">{{ userlisting?.email }}</a></dd>\n                    </dl>\n\n                    \n\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">\n                            Property Name :\n                        </dt>\n                        <dd><i>{{ userlisting?.name }}</i></dd>\n                    </dl>\n\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Rent/Month :</dt>\n                        <dd>{{ userlisting?.approx_rent }}$/ Person</dd>\n                    </dl>\n                    \n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">\n                            Property status :\n                        </dt>\n                        <dd>Avialble</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of people living :</dt>\n                        <dd>{{ userlisting?.num_people_living }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of people can accommodate :</dt>\n                        <dd>{{ userlisting?.num_people }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of days accommodation avialble :</dt>\n                        <dd>{{ userlisting?.num_days }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of Bedrooms :</dt>\n                        <dd>{{ userlisting?.num_bedrooms }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of Bathrooms :</dt>\n                        <dd>{{ userlisting?.num_bathrooms }}</dd>\n                    </dl>\n                    \n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Property available date :</dt>\n                        <dd>{{ userlisting?.available_date }}</dd>\n                    </dl>\n                    \n    \n                </div>\n            </section>\n            <a href = \"mailto: {{userlisting?.email}}?subject=Looking for lease&body=Hi Tenent,%0A%0AGreeting of the Day!%0A%0AFrom Northwest Missouri State University am looking for a Apartment to rent. If you have any availability, please revert to me.!%0AThanks,%0AHave a great day!\">\n                <button class=\"btn btn-success mt-4 float-right\" >\n               Contact tenant\n            </button></a>\n        </div>\n    </sb-card>\n</sb-layout-dashboard>");

/***/ }),

/***/ "GTJD":
/*!**********************************************************!*\
  !*** ./src/modules/userlistingsdetail/services/index.ts ***!
  \**********************************************************/
/*! exports provided: services, UserlistingsdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _userlistingsdetail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlistingsdetail.service */ "uAWJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserlistingsdetailService", function() { return _userlistingsdetail_service__WEBPACK_IMPORTED_MODULE_0__["UserlistingsdetailService"]; });


const services = [_userlistingsdetail_service__WEBPACK_IMPORTED_MODULE_0__["UserlistingsdetailService"]];



/***/ }),

/***/ "Jdv1":
/*!************************************************************!*\
  !*** ./src/modules/userlistingsdetail/containers/index.ts ***!
  \************************************************************/
/*! exports provided: containers, UserlistingsdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _userlistingsdetail_userlistingsdetail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlistingsdetail/userlistingsdetail.component */ "W36v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserlistingsdetailComponent", function() { return _userlistingsdetail_userlistingsdetail_component__WEBPACK_IMPORTED_MODULE_0__["UserlistingsdetailComponent"]; });


const containers = [_userlistingsdetail_userlistingsdetail_component__WEBPACK_IMPORTED_MODULE_0__["UserlistingsdetailComponent"]];



/***/ }),

/***/ "W36v":
/*!******************************************************************************************************!*\
  !*** ./src/modules/userlistingsdetail/containers/userlistingsdetail/userlistingsdetail.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UserlistingsdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsdetailComponent", function() { return UserlistingsdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_userlistingsdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./userlistingsdetail.component.html */ "/QCF");
/* harmony import */ var _userlistingsdetail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlistingsdetail.component.scss */ "ZLQb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_userlistingsdetail_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/userlistingsdetail/services */ "GTJD");






let UserlistingsdetailComponent = class UserlistingsdetailComponent {
    constructor(userlistingsdetailservice, route) {
        this.userlistingsdetailservice = userlistingsdetailservice;
        this.route = route;
        this.userName = localStorage.getItem("user_name");
    }
    ngOnInit() {
        this.postingId = this.route.snapshot.params.id;
        this.userlistingsdetailservice.getUserrental(this.userName, this.postingId).subscribe((data) => {
            this.userlisting = data;
            console.log(this.userlisting, "abcd");
        });
    }
    ngAfterViewInit() {
    }
    submitForm() {
        let mockData = {
            subject: "subject",
            rental_name: this.userlisting.UserPosting.name,
            rental_email: "newuser@gmail.com",
            user_email: "k.narendar111@gmail.com",
            user_name: this.userName,
            body: ""
        };
        this.userlistingsdetailservice.setFormData(mockData).subscribe((data) => {
            this.userlisting = data;
            console.log(data);
        });
    }
};
UserlistingsdetailComponent.ctorParameters = () => [
    { type: _modules_userlistingsdetail_services__WEBPACK_IMPORTED_MODULE_5__["UserlistingsdetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UserlistingsdetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-userlistingsdetail',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        template: _raw_loader_userlistingsdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_userlistingsdetail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_userlistingsdetail_services__WEBPACK_IMPORTED_MODULE_5__["UserlistingsdetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], UserlistingsdetailComponent);

// export interface UserListings {
//     Address: Address;
// }
// export interface Address {
//     address1: string;
//     address2: string;
//     address3: string;
// }


/***/ }),

/***/ "Z5z4":
/*!*****************************************************************************!*\
  !*** ./src/modules/userlistingsdetail/userlistingsdetail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ROUTES, UserlistingsdetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsdetailRoutingModule", function() { return UserlistingsdetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _userlistingsdetail_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlistingsdetail.module */ "lf22");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "Jdv1");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["UserlistingsdetailComponent"],
        data: {
            title: 'Profile - BRC',
            breadcrumbs: [
                {
                    text: 'User Listings',
                    link: '/userlistings',
                },
                {
                    text: 'User listing details',
                    active: true,
                },
            ],
        },
    },
];
let UserlistingsdetailRoutingModule = class UserlistingsdetailRoutingModule {
};
UserlistingsdetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_userlistingsdetail_module__WEBPACK_IMPORTED_MODULE_3__["UserlistingsdetailModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserlistingsdetailRoutingModule);



/***/ }),

/***/ "ZLQb":
/*!********************************************************************************************************!*\
  !*** ./src/modules/userlistingsdetail/containers/userlistingsdetail/userlistingsdetail.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VybGlzdGluZ3NkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lf22":
/*!*********************************************************************!*\
  !*** ./src/modules/userlistingsdetail/userlistingsdetail.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserlistingsdetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsdetailModule", function() { return UserlistingsdetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "Jdv1");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "GTJD");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Containers */

/* Services */

let UserlistingsdetailModule = class UserlistingsdetailModule {
};
UserlistingsdetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], UserlistingsdetailModule);



/***/ }),

/***/ "uAWJ":
/*!*******************************************************************************!*\
  !*** ./src/modules/userlistingsdetail/services/userlistingsdetail.service.ts ***!
  \*******************************************************************************/
/*! exports provided: UserlistingsdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistingsdetailService", function() { return UserlistingsdetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




// const API_URL = 'http://18.207.93.25:5000/api';
// const API_URL  = 'http://192.168.1.23:5000/api';
let UserlistingsdetailService = class UserlistingsdetailService {
    constructor(http) {
        this.http = http;
    }
    // getUserrental(userName: string, postingId:number): Observable<any> {
    //   return this.http.get(environment.basePath + '/user-posting/'+  userName + '/postings/' + postingId ) 
    // }
    // setFormData(userData: any): Observable<any> {
    //   return this.http.post(environment.basePath + '/mail-service', userData) 
    // }
    getUserrental(userName, postingId) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-posting/' + 'postings/' + postingId);
    }
    setFormData(userData) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/mail-service', userData);
    }
};
UserlistingsdetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserlistingsdetailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UserlistingsdetailService);



/***/ })

}]);
//# sourceMappingURL=modules-userlistingsdetail-userlistingsdetail-routing-module-es2015.js.map