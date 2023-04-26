(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-changepassword-changepassword-routing-module"],{

/***/ "81bO":
/*!*************************************************************!*\
  !*** ./src/modules/changepassword/changepassword.module.ts ***!
  \*************************************************************/
/*! exports provided: ChangepasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordModule", function() { return ChangepasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "D6Eb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "8dxF");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Containers */

/* Services */

let ChangepasswordModule = class ChangepasswordModule {
};
ChangepasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], ChangepasswordModule);



/***/ }),

/***/ "82Ww":
/*!*********************************************************************!*\
  !*** ./src/modules/changepassword/changepassword-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ROUTES, ChangepasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordRoutingModule", function() { return ChangepasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _changepassword_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword.module */ "81bO");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "D6Eb");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordComponent"],
        data: {
            title: 'Changepassword - BRC',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Changepassword',
                    active: true,
                },
            ],
        },
    },
];
let ChangepasswordRoutingModule = class ChangepasswordRoutingModule {
};
ChangepasswordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_changepassword_module__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangepasswordRoutingModule);



/***/ }),

/***/ "8dxF":
/*!******************************************************!*\
  !*** ./src/modules/changepassword/services/index.ts ***!
  \******************************************************/
/*! exports provided: services, ChangepasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _changepassword_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword.service */ "nGxl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordService", function() { return _changepassword_service__WEBPACK_IMPORTED_MODULE_0__["ChangepasswordService"]; });


const services = [_changepassword_service__WEBPACK_IMPORTED_MODULE_0__["ChangepasswordService"]];



/***/ }),

/***/ "Bcri":
/*!********************************************************************************************!*\
  !*** ./src/modules/changepassword/containers/changepassword/changepassword.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "CUgt":
/*!******************************************************************************************!*\
  !*** ./src/modules/changepassword/containers/changepassword/changepassword.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./changepassword.component.html */ "X0Yd");
/* harmony import */ var _changepassword_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changepassword.component.scss */ "Bcri");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_changepassword_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/changepassword/services */ "8dxF");





// import { ToastrService } from 'ngx-toastr';
let ChangepasswordComponent = class ChangepasswordComponent {
    constructor(changepasswordService) {
        this.changepasswordService = changepasswordService;
        this.username = localStorage.getItem("user_name");
        this.email = localStorage.getItem('email');
        this.first_name = localStorage.getItem('first_name');
        this.form = {
            "username": "string",
            "old_password": "string",
            "new_password": "string",
            "confirm_password": "string",
        };
        this.name = localStorage.getItem('first_name');
        this.last_name = localStorage.getItem('last_name');
        this.sid = localStorage.getItem('sid');
    }
    ngOnInit() {
        this.changepasswordService.postChangepassword(this.username).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails, "userDetails");
            console.log(this.first_name, "first_name");
        });
    }
    onSubmit() {
        this.changepasswordService.postChangepassword(this.userDetails).subscribe({
            next: updateuser => { console.log(updateuser, "updateuser"); }
        });
        alert("User details updated successfully");
    }
};
ChangepasswordComponent.ctorParameters = () => [
    { type: _modules_changepassword_services__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordService"] }
];
ChangepasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-changepassword',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_changepassword_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_changepassword_services__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordService"]])
], ChangepasswordComponent);



/***/ }),

/***/ "D6Eb":
/*!********************************************************!*\
  !*** ./src/modules/changepassword/containers/index.ts ***!
  \********************************************************/
/*! exports provided: containers, ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "CUgt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_0__["ChangepasswordComponent"]; });


const containers = [_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_0__["ChangepasswordComponent"]];



/***/ }),

/***/ "X0Yd":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/changepassword/containers/changepassword/changepassword.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Change Password\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"nf.form.valid && onSubmit()\" #nf=\"ngForm\">\n                    <div class=\"container\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-lg-5\">\n                                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                                    <!-- <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Password Recovery</h3></div> -->\n                                    <div class=\"card-body\">\n                                        <!-- <div class=\"small mb-3 text-muted\">Enter your email address and we will send you a link to reset your password.</div> -->\n                                        <form>\n                                            <div class=\"form-group\">\n                                                <div>\n                                                <label class=\"small mb-1\" for=\"username\">Email</label>\n                                                <input class=\"form-control py-4\" id=\"username\" type=\"email\" \n                                                 placeholder=\"Enter email address\" required \n                                                #username=\"ngModel\" name=\"username\" [(ngModel)]=\"username\"/>\n                                                \n                                                <!-- <div class=\"alert-danger\" *ngIf=\"username.errors && nf.submitted\">\n                                                    <div *ngIf=\"username.errors['required']\">Username is required</div>\n                                                    \n                                                </div> -->\n                                                  </div>\n                                                <label class=\"small mb-1\" for=\"old_password\">Old Password</label>\n                                                <input class=\"form-control py-4\" id=\"old_password\" type=\"password\"\n                                                 placeholder=\"Enter old password\" required\n                                                 #old_password=\"ngModel\" name=\"old_password\" [(ngModel)]=\"old_password\"/>\n                                                <label class=\"small mb-1\" for=\"new_password\">New Password</label>\n                                                <input class=\"form-control py-4\" id=\"new_password\" type=\"password\"\n                                                  placeholder=\"Enter new password\" required\n                                                  #new_password=\"ngModel\" name=\"new_password\" [(ngModel)]=\"new_password\"/>\n                                                <label class=\"small mb-1\" for=\"confirm_password\">Confirm New Password</label>\n                                                <input class=\"form-control py-4\" id=\"confirm_password\" type=\"password\"\n                                                  placeholder=\"Enter new confirm password\" required\n                                                  #confirm_password=\"ngModel\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\"/>\n                                            </div>\n                                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\">\n                                                <!-- <a class=\"btn btn-primary\" >Change Password</a> -->\n                                                <button class=\"btn btn-primary mr-0\" >Change Password</button>\n                                            </div>\n                                        </form>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                \n            </form>\n        </div>\n        \n    </sb-card>\n</sb-layout-dashboard>");

/***/ }),

/***/ "nGxl":
/*!***********************************************************************!*\
  !*** ./src/modules/changepassword/services/changepassword.service.ts ***!
  \***********************************************************************/
/*! exports provided: ChangepasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordService", function() { return ChangepasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




// const API_URL = 'http://18.207.93.25:5000/api';
// const API_URL  = 'http://192.168.1.23:5000/api';
let ChangepasswordService = class ChangepasswordService {
    constructor(http) {
        this.http = http;
    }
    postChangepassword(formdetails) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + "/user/reset_password", formdetails);
    }
};
ChangepasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChangepasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ChangepasswordService);



/***/ })

}]);
//# sourceMappingURL=modules-changepassword-changepassword-routing-module-es2015.js.map