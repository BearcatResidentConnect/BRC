(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-myuserlistingsdetail-myuserlistingsdetail-routing-module"], {
    /***/
    "CFWQ":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/myuserlistingsdetail/containers/myuserlistingsdetail/myuserlistingsdetail.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CFWQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Property Listings\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <section class=\"pb-7 border-bottom\">\n                <ul class=\"list-inline d-sm-flex align-items-sm-center mb-2\">\n                    <li class=\"list-inline-item badge badge-orange mr-2\">Avialble</li>\n                    <li class=\"list-inline-item badge badge-primary mr-3\">\n                        {{ userlisting?.accomedation_type }}\n                    </li>\n                    <li class=\"list-inline-item mr-2 mt-2 mt-sm-0\">\n                        <i class=\"fal fa-clock mr-1\"></i>1 months ago\n                    </li>\n                </ul>\n                <div class=\"d-sm-flex justify-content-sm-between\">\n                    <div>\n                        <h2 class=\"fs-35 font-weight-600 lh-15 text-heading\">\n                            {{ userlisting?.name }}\n                        </h2>\n                        <p class=\"mb-0\">\n                            <i class=\"fal fa-map-marker-alt mr-2\"></i>{{ userlisting?.address1\n                            }}{{ userlisting?.city }}\n                        </p>\n                    </div>\n                    <div class=\"mt-2 text-lg-right\">\n                        <!-- <p class=\"fs-22 text-heading font-weight-bold mb-0\">${{userlisting?.UserPosting?.approx_rent}}</p> -->\n                        <p class=\"mb-0\">${{ userlisting?.approx_rent }}/Person</p>\n                    </div>\n                </div>\n                <h4 class=\"fs-22 text-heading mt-6 mb-2\">Description</h4>\n                <p class=\"mb-0 lh-214\">\n                    {{userlisting?.description}}\n                </p>\n            </section>\n\n            <section class=\"pt-6 border-bottom pb-4 pt-4\">\n                <h4 class=\"fs-22 text-heading mb-4\">Additional Details</h4>\n                <div class=\"row\">\n                     \n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Rental id</dt>\n                        <dd>{{ userlisting?.posting_id }}</dd>\n                    </dl>\n\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Tenant Name</dt>\n                        <dd><i>{{ userlisting?.first_name }}</i></dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Tenant Email ID</dt>\n                        <dd><a href=\"{{ userlisting?.email }}\">{{ userlisting?.email }}</a></dd>\n                    </dl>\n\n                    \n\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">\n                            Property Name\n                        </dt>\n                        <dd><i>{{ userlisting?.name }}</i></dd>\n                    </dl>\n\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Price</dt>\n                        <dd>{{ userlisting?.approx_rent }}$/ Person</dd>\n                    </dl>\n                    \n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">\n                            Property status\n                        </dt>\n                        <dd>Avialble</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of people living</dt>\n                        <dd>{{ userlisting?.num_people_living }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of people wants accommodation</dt>\n                        <dd>{{ userlisting?.num_people }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of days accommodation avialble</dt>\n                        <dd>{{ userlisting?.num_days }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of Bedrooms</dt>\n                        <dd>{{ userlisting?.num_bedrooms }}</dd>\n                    </dl>\n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">No of Bathrooms</dt>\n                        <dd>{{ userlisting?.num_bathrooms }}</dd>\n                    </dl>\n                    \n                    <dl class=\"col-sm-6 mb-0 d-flex\">\n                        <dt class=\"w-110px fs-14 font-weight-500 text-heading pr-2\">Property available date</dt>\n                        <dd>{{ userlisting?.available_date }}</dd>\n                    </dl>\n                    \n    \n                </div>\n            </section>\n            <td style=\"padding-top:40px;float:right\"><button class=\"btn btn-danger mt-4 \" (click)=\"deleteUserrental()\">Delete</button></td>\n\n        </div>\n    </sb-card>\n</sb-layout-dashboard>";
      /***/
    },

    /***/
    "Kajr":
    /*!*********************************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/myuserlistingsdetail-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ROUTES, MyuserlistingsdetailRoutingModule */

    /***/
    function Kajr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyuserlistingsdetailRoutingModule", function () {
        return MyuserlistingsdetailRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _myuserlistingsdetail_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myuserlistingsdetail.module */
      "flZa");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "l9vE");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["MyuserlistingsdetailComponent"],
        data: {
          title: 'Profile - BRC',
          breadcrumbs: [{
            text: 'User Listings',
            link: '/myuserlistings'
          }, {
            text: 'User listing details',
            active: true
          }]
        }
      }];

      var MyuserlistingsdetailRoutingModule = function MyuserlistingsdetailRoutingModule() {
        _classCallCheck(this, MyuserlistingsdetailRoutingModule);
      };

      MyuserlistingsdetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_myuserlistingsdetail_module__WEBPACK_IMPORTED_MODULE_3__["MyuserlistingsdetailModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyuserlistingsdetailRoutingModule);
      /***/
    },

    /***/
    "YHt6":
    /*!**************************************************************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/containers/myuserlistingsdetail/myuserlistingsdetail.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YHt6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXVzZXJsaXN0aW5nc2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "flZa":
    /*!*************************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/myuserlistingsdetail.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MyuserlistingsdetailModule */

    /***/
    function flZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyuserlistingsdetailModule", function () {
        return MyuserlistingsdetailModule;
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
      "l9vE");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services */
      "tnH9");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Containers */

      /* Services */


      var MyuserlistingsdetailModule = function MyuserlistingsdetailModule() {
        _classCallCheck(this, MyuserlistingsdetailModule);
      };

      MyuserlistingsdetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
        providers: _toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["services"]),
        declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]),
        exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"])
      })], MyuserlistingsdetailModule);
      /***/
    },

    /***/
    "l9vE":
    /*!**************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/containers/index.ts ***!
      \**************************************************************/

    /*! exports provided: containers, MyuserlistingsdetailComponent */

    /***/
    function l9vE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _myuserlistingsdetail_myuserlistingsdetail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myuserlistingsdetail/myuserlistingsdetail.component */
      "rASI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MyuserlistingsdetailComponent", function () {
        return _myuserlistingsdetail_myuserlistingsdetail_component__WEBPACK_IMPORTED_MODULE_0__["MyuserlistingsdetailComponent"];
      });

      var containers = [_myuserlistingsdetail_myuserlistingsdetail_component__WEBPACK_IMPORTED_MODULE_0__["MyuserlistingsdetailComponent"]];
      /***/
    },

    /***/
    "rASI":
    /*!************************************************************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/containers/myuserlistingsdetail/myuserlistingsdetail.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: MyuserlistingsdetailComponent */

    /***/
    function rASI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyuserlistingsdetailComponent", function () {
        return MyuserlistingsdetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_myuserlistingsdetail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./myuserlistingsdetail.component.html */
      "CFWQ");
      /* harmony import */


      var _myuserlistingsdetail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./myuserlistingsdetail.component.scss */
      "YHt6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _modules_myuserlistingsdetail_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/myuserlistingsdetail/services */
      "tnH9");

      var MyuserlistingsdetailComponent = /*#__PURE__*/function () {
        function MyuserlistingsdetailComponent(myuserlistingsdetailservice, route, router) {
          _classCallCheck(this, MyuserlistingsdetailComponent);

          this.myuserlistingsdetailservice = myuserlistingsdetailservice;
          this.route = route;
          this.router = router;
          this.userName = localStorage.getItem("user_name");
          this.posting_id = localStorage.getItem("posting_id");
        }

        _createClass(MyuserlistingsdetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.posting_id = this.route.snapshot.params.id;
            this.myuserlistingsdetailservice.getUserrental(this.userName, this.posting_id).subscribe(function (data) {
              _this.userlisting = data;
              console.log(_this.userlisting, "abcd");
              console.log(_this.posting_id, "abcd");
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "deleteUserrental",
          value: function deleteUserrental() {
            var _this2 = this;

            console.log(this.posting_id, "abcd");
            var text = 'Are you sure you want to delete this item?';

            if (confirm(text) == true) {
              alert("Property details deleted successfully");
              this.router.navigate(["myuserlistings"]);
            } else {
              this.router.navigate(["myuserlistings"]);
            }

            this.myuserlistingsdetailservice.deleteUserrental(this.posting_id).subscribe(function () {
              return console.log("User rental with ID = ".concat(_this2.posting_id, " Deleted"));
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return MyuserlistingsdetailComponent;
      }();

      MyuserlistingsdetailComponent.ctorParameters = function () {
        return [{
          type: _modules_myuserlistingsdetail_services__WEBPACK_IMPORTED_MODULE_5__["MyuserlistingsdetailService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      MyuserlistingsdetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-myuserlistingsdetail',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        template: _raw_loader_myuserlistingsdetail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_myuserlistingsdetail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_myuserlistingsdetail_services__WEBPACK_IMPORTED_MODULE_5__["MyuserlistingsdetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], MyuserlistingsdetailComponent); // export interface UserListings {
      //     Address: Address;
      // }
      // export interface Address {
      //     address1: string;
      //     address2: string;
      //     address3: string;
      // }

      /***/
    },

    /***/
    "sole":
    /*!***********************************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/services/myuserlistingsdetail.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: MyuserlistingsdetailService */

    /***/
    function sole(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyuserlistingsdetailService", function () {
        return MyuserlistingsdetailService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // const API_URL = 'http://18.207.93.25:5000/api';
      // const API_URL  = 'http://192.168.1.23:5000/api';


      var MyuserlistingsdetailService = /*#__PURE__*/function () {
        function MyuserlistingsdetailService(http) {
          _classCallCheck(this, MyuserlistingsdetailService);

          this.http = http;
        } // getUserrental(userName: string, postingId:number): Observable<any> {
        //   return this.http.get(environment.basePath + '/user-posting/'+  userName + '/postings/' + postingId ) 
        // }
        // setFormData(userData: any): Observable<any> {
        //   return this.http.post(environment.basePath + '/mail-service', userData) 
        // }


        _createClass(MyuserlistingsdetailService, [{
          key: "getUserrental",
          value: function getUserrental(userName, postingId) {
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-posting/' + 'postings/' + postingId);
          }
        }, {
          key: "deleteUserrental",
          value: function deleteUserrental(posting_id) {
            return this.http["delete"](environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-postings/' + posting_id);
          }
        }, {
          key: "setFormData",
          value: function setFormData(userData) {
            return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/mail-service', userData);
          }
        }]);

        return MyuserlistingsdetailService;
      }();

      MyuserlistingsdetailService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      MyuserlistingsdetailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], MyuserlistingsdetailService);
      /***/
    },

    /***/
    "tnH9":
    /*!************************************************************!*\
      !*** ./src/modules/myuserlistingsdetail/services/index.ts ***!
      \************************************************************/

    /*! exports provided: services, MyuserlistingsdetailService */

    /***/
    function tnH9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _myuserlistingsdetail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myuserlistingsdetail.service */
      "sole");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MyuserlistingsdetailService", function () {
        return _myuserlistingsdetail_service__WEBPACK_IMPORTED_MODULE_0__["MyuserlistingsdetailService"];
      });

      var services = [_myuserlistingsdetail_service__WEBPACK_IMPORTED_MODULE_0__["MyuserlistingsdetailService"]];
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-myuserlistingsdetail-myuserlistingsdetail-routing-module-es5.js.map