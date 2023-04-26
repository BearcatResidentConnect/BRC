(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "2l3G":
    /*!*************************************************!*\
      !*** ./src/modules/profile/containers/index.ts ***!
      \*************************************************/

    /*! exports provided: containers, ProfileComponent */

    /***/
    function l3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile/profile.component */
      "H2b6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"];
      });

      var containers = [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]];
      /***/
    },

    /***/
    "H2b6":
    /*!*********************************************************************!*\
      !*** ./src/modules/profile/containers/profile/profile.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function H2b6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "S44Y");
      /* harmony import */


      var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component.scss */
      "vOoA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _modules_profile_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/profile/services */
      "TN/4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF"); // import { ToastrService } from 'ngx-toastr';


      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(profileService) {
          _classCallCheck(this, ProfileComponent);

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

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profileService.getUser(this.user_name).subscribe(function (data) {
              _this.userDetails = data;
              console.log(_this.userDetails, "userDetails");
              console.log(_this.first_name, "first_name");
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.nf.form.valid) {
              if (this.isFormDirty()) {
                this.profileService.updateUser(this.userDetails).subscribe({
                  next: function next(updateuser) {
                    console.log(updateuser, "updateuser");
                    alert("User details updated successfully");
                  }
                });
              } else {
                alert("No changes made to user details");
              }
            }
          }
        }, {
          key: "isFormDirty",
          value: function isFormDirty() {
            return Object.values(this.nf.form.controls).some(function (control) {
              return control.dirty;
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _modules_profile_services__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }];
      };

      ProfileComponent.propDecorators = {
        nf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['nf', {
            "static": false
          }]
        }]
      };
      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-profile',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_profile_services__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])], ProfileComponent);
      /***/
    },

    /***/
    "S44Y":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/profile/containers/profile/profile.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S44Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Update Profile\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <h3 class=\"card-title mb-0 text-heading fs-22 lh-15\">Contact information</h3>\n            <!-- <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> -->\n            <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"nf.form.valid && onSubmit()\" #nf=\"ngForm\">\n             <div class=\"form-row mx-n4\">\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"username\" class=\"text-heading\">Username</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [ngModel]=\"user_name\"  id=\"username\" name=\"username\" disabled/>\n                </div>\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"sid\" class=\"text-heading\">SID</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [ngModel]=\"userDetails.sid\"  id=\"sid\" name=\"sid\" disabled/>\n                </div>\n            </div>\n            <div class=\"form-row mx-n4\">\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"phone\" class=\"text-heading\">FirstName</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [(ngModel)]=\"userDetails.first_name\" id=\"first_name\" name=\"first_name\" required/>\n                    <!-- <div class=\"alert-danger\" *ngIf=\"firstname.errors && nf.submitted\">\n                        <div *ngIf=\"first_name.errors['required']\">Firstname is required</div>\n                    </div> -->\n                </div>\n                <div class=\"form-group col-md-6 px-4\">\n                    <label for=\"mobile\" class=\"text-heading\">LastName</label>\n                    <input type=\"text\" class=\"form-control form-control-md\" [(ngModel)]=\"userDetails.last_name\" id=\"last_name\" name=\"last_name\" required/>\n                </div>\n            </div>\n            <div class=\"form-row mx-n4\">\n                <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                    <label for=\"email\" class=\"text-heading\">Email</label>\n                    <input type=\"email\" class=\"form-control form-control-md\" [(ngModel)]=\"userDetails.email\" id=\"email\" name=\"email\" required \n                    pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\n                    <div class=\"alert-danger\" *ngIf=\"email.errors && f.submitted\">\n                        <div *ngIf=\"email.errors['required']\">Email is required</div>\n                        <div *ngIf=\"email.errors && email.pattern\">\n                          Email must be a valid email address\n                        </div>\n                      </div>\n                </div>\n            </div>\n           \n            <div class=\"d-flex justify-content-end flex-wrap pt-3\">\n                <button class=\"btn btn-outline-primary mr-0\"  (click)=\"openDialog()\">Update</button>\n            </div>\n            </form>\n        </div>\n        \n    </sb-card>\n</sb-layout-dashboard>\n";
      /***/
    },

    /***/
    "TN/4":
    /*!***********************************************!*\
      !*** ./src/modules/profile/services/index.ts ***!
      \***********************************************/

    /*! exports provided: services, ProfileService */

    /***/
    function TN4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.service */
      "gCLp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return _profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"];
      });

      var services = [_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]];
      /***/
    },

    /***/
    "gCLp":
    /*!*********************************************************!*\
      !*** ./src/modules/profile/services/profile.service.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileService */

    /***/
    function gCLp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // const API_URL = 'http://18.207.93.25:5000/api';
      // const API_URL  = 'http://192.168.1.23:5000/api';


      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(http) {
          _classCallCheck(this, ProfileService);

          this.http = http;
        }

        _createClass(ProfileService, [{
          key: "getUser",
          value: function getUser(userName) {
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/users/' + userName);
          }
        }, {
          key: "updateUser",
          value: function updateUser(formdetails) {
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + "/user", formdetails);
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ProfileService);
      /***/
    },

    /***/
    "jMSI":
    /*!***********************************************!*\
      !*** ./src/modules/profile/profile.module.ts ***!
      \***********************************************/

    /*! exports provided: ProfileModule */

    /***/
    function jMSI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @common/app-common.module */
      "NMtB");
      /* harmony import */


      var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @modules/navigation/navigation.module */
      "hex+");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./containers */
      "2l3G");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services */
      "TN/4");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Containers */

      /* Services */


      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
        providers: _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["services"]),
        declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]),
        exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"])
      })], ProfileModule);
      /***/
    },

    /***/
    "vOoA":
    /*!***********************************************************************!*\
      !*** ./src/modules/profile/containers/profile/profile.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function vOoA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map