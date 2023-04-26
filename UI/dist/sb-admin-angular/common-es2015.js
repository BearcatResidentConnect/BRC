(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2l3G":
/*!*************************************************!*\
  !*** ./src/modules/profile/containers/index.ts ***!
  \*************************************************/
/*! exports provided: containers, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "H2b6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });


const containers = [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]];



/***/ }),

/***/ "H2b6":
/*!*********************************************************************!*\
  !*** ./src/modules/profile/containers/profile/profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "S44Y");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "vOoA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_profile_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/profile/services */ "TN/4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");





// import { ToastrService } from 'ngx-toastr';


let ProfileComponent = class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.user_name = localStorage.getItem("user_name");
        this.email = localStorage.getItem('email');
        this.access_token = localStorage.getItem('access_token');
        this.first_name = localStorage.getItem('first_name');
        this.name = localStorage.getItem('first_name');
        this.last_name = localStorage.getItem('last_name');
        this.username = localStorage.getItem('user_name');
        this.sid = localStorage.getItem('sid');
    }
    ngOnInit() {
        this.profileService.getUser(this.user_name).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails, "userDetails");
            console.log(this.first_name, "first_name");
        });
    }
    onSubmit() {
        if (this.nf.form.valid) {
            if (this.isFormDirty()) {
                this.profileService.updateUser(this.userDetails).subscribe({
                    next: updateuser => {
                        console.log(updateuser, "updateuser");
                        alert("User details updated successfully");
                    }
                });
            }
            else {
                alert("No changes made to user details");
            }
        }
    }
    isFormDirty() {
        return Object.values(this.nf.form.controls).some(control => control.dirty);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _modules_profile_services__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }
];
ProfileComponent.propDecorators = {
    nf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['nf', { static: false },] }]
};
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-profile',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_profile_services__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
], ProfileComponent);



/***/ }),

/***/ "S44Y":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/profile/containers/profile/profile.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Update Profile\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <h3 class=\"card-title mb-0 text-heading fs-22 lh-15\">Contact information</h3>\n            <!-- <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> -->\n            <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"nf.form.valid && onSubmit()\" #nf=\"ngForm\">\n             <div class=\"form-row mx-n4\">\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"username\" class=\"text-heading\">Username</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [ngModel]=\"user_name\"  id=\"username\" name=\"username\" disabled/>\n                </div>\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"sid\" class=\"text-heading\">SID</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [ngModel]=\"userDetails.sid\"  id=\"sid\" name=\"sid\" disabled/>\n                </div>\n            </div>\n            <div class=\"form-row mx-n4\">\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"phone\" class=\"text-heading\">FirstName</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [(ngModel)]=\"userDetails.first_name\" id=\"first_name\" name=\"first_name\" required/>\n                    <!-- <div class=\"alert-danger\" *ngIf=\"firstname.errors && nf.submitted\">\n                        <div *ngIf=\"first_name.errors['required']\">Firstname is required</div>\n                    </div> -->\n                </div>\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"mobile\" class=\"text-heading\">LastName</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [(ngModel)]=\"userDetails.last_name\" id=\"last_name\" name=\"last_name\" required/>\n                </div>\n            </div>\n            <div class=\"form-row mx-n4\">\n                <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                    <label for=\"email\" class=\"text-heading\">Email</label>\n                    <input type=\"email\" class=\"form-control form-control-md\" [(ngModel)]=\"userDetails.email\" id=\"email\" name=\"email\" required \n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\n                    <div class=\"alert-danger\" *ngIf=\"email.errors && f.submitted\">\n                        <div *ngIf=\"email.errors['required']\">Email is required</div>\n                        <div *ngIf=\"email.errors && email.pattern\">\n                          Email must be a valid email address\n                        </div>\n                      </div>\n                </div>\n            </div>\n           \n            <div class=\"d-flex justify-content-end flex-wrap pt-3\">\n                <button class=\"btn btn-outline-primary mr-0\"  (click)=\"openDialog()\">Update</button>\n            </div>\n            </form>\n        </div>\n        \n    </sb-card>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "TN/4":
/*!***********************************************!*\
  !*** ./src/modules/profile/services/index.ts ***!
  \***********************************************/
/*! exports provided: services, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ "gCLp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]; });


const services = [_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]];



/***/ }),

/***/ "gCLp":
/*!*********************************************************!*\
  !*** ./src/modules/profile/services/profile.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




// const API_URL = 'http://18.207.93.25:5000/api';
// const API_URL  = 'http://192.168.1.23:5000/api';
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getUser(userName) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/users/' + userName);
    }
    updateUser(formdetails) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + "/user", formdetails);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProfileService);



/***/ }),

/***/ "jMSI":
/*!***********************************************!*\
  !*** ./src/modules/profile/profile.module.ts ***!
  \***********************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "NMtB");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "hex+");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "2l3G");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "TN/4");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Containers */

/* Services */

let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], ProfileModule);



/***/ }),

/***/ "vOoA":
/*!***********************************************************************!*\
  !*** ./src/modules/profile/containers/profile/profile.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map