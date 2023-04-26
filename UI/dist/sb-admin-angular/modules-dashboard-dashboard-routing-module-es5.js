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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-routing-module"], {
    /***/
    "+IJA":
    /*!***************************************************!*\
      !*** ./src/modules/dashboard/containers/index.ts ***!
      \***************************************************/

    /*! exports provided: containers, DashboardComponent, LightComponent */

    /***/
    function IJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Q2T/");
      /* harmony import */


      var _light_light_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./light/light.component */
      "u30O");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
        return _light_light_component__WEBPACK_IMPORTED_MODULE_1__["LightComponent"];
      });

      var containers = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], _light_light_component__WEBPACK_IMPORTED_MODULE_1__["LightComponent"]];
      /***/
    },

    /***/
    "+ZFO":
    /*!***********************************************!*\
      !*** ./src/modules/dashboard/guards/index.ts ***!
      \***********************************************/

    /*! exports provided: guards, DashboardGuard */

    /***/
    function ZFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _dashboard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.guard */
      "zq2N");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
        return _dashboard_guard__WEBPACK_IMPORTED_MODULE_0__["DashboardGuard"];
      });

      var guards = [_dashboard_guard__WEBPACK_IMPORTED_MODULE_0__["DashboardGuard"]];
      /***/
    },

    /***/
    "1r2h":
    /*!*************************************************!*\
      !*** ./src/modules/dashboard/services/index.ts ***!
      \*************************************************/

    /*! exports provided: services, DashboardService */

    /***/
    function r2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.service */
      "QXO3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return _dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"];
      });

      var services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"]];
      /***/
    },

    /***/
    "8AI6":
    /*!*****************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function AI6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "DCsZ":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DCsZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Dashboard\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-dashboard-cards></sb-dashboard-cards>\n</sb-layout-dashboard>";
      /***/
    },

    /***/
    "DuCT":
    /*!***************************************************!*\
      !*** ./src/modules/dashboard/dashboard.module.ts ***!
      \***************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function DuCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @modules/profile/profile.module */
      "jMSI");
      /* harmony import */


      var _modules_newproperty_newproperty_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @modules/newproperty/newproperty.module */
      "I6us");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components */
      "qvVY");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./containers */
      "+IJA");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./guards */
      "+ZFO");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services */
      "1r2h");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Guards */

      /* Services */


      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"], _modules_newproperty_newproperty_module__WEBPACK_IMPORTED_MODULE_8__["NewpropertyModule"]],
        providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_11__["guards"])),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_9__["components"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_9__["components"]))
      })], DashboardModule);
      /***/
    },

    /***/
    "EGDz":
    /*!*********************************************************************!*\
      !*** ./src/modules/dashboard/containers/light/light.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function EGDz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWdodC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "HG3J":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HG3J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n\n    <div class=\"col-md-9\">\n\n        <h4 class=\"mb-0 text-heading\">Welcome , {{name}}!</h4>\n\n    </div>\n\n    <!-- <div class=\"col-md-3\">\n        <a class=\"btn btn-outline-primary float-right\"  routerlink=\"./../newproperty\">Add Property</a>\n    </div> -->\n    <br><br><br>\n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/profile\" background=\"bg-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to profile page\">\n            <div class=\"card-body\">{{dashDetails.num_users}} Total Users</div>\n        </sb-card-view-details>\n    </div>\n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/newproperty\" background=\"bg-danger\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to add new property page\">\n            <div class=\"card-body\">{{dashDetails.num_visitors}} Total No of Visitors</div>\n        </sb-card-view-details>\n    </div>\n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/rentallistings\" background=\"bg-warning\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to rental listings page\">\n            <div class=\"card-body\">{{dashDetails.num_rental_postings}} Total Rental Postings</div>\n        </sb-card-view-details>\n    </div>\n    \n    <div class=\"col-md-6\">\n        <sb-card-view-details link=\"/userlistings\" background=\"bg-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click will redirect to user listings page\">\n            <div class=\"card-body\">{{dashDetails.num_user_postings}} Total User Postings</div>\n        </sb-card-view-details>\n    </div>\n    \n</div>";
      /***/
    },

    /***/
    "IlwM":
    /*!***********************************************************!*\
      !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ROUTES, DashboardRoutingModule */

    /***/
    function IlwM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.module */
      "DuCT");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "+IJA");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        data: {
          title: 'Dashboard - Bearcat Resident Connect',
          breadcrumbs: [{
            text: 'Dashboard',
            active: true
          }]
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: 'light',
        data: {
          title: 'Dashboard Light - Bearcat Resident Connect',
          breadcrumbs: [{
            text: 'Dashboard',
            link: '/dashboard'
          }, {
            text: 'Light',
            active: true
          }]
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LightComponent"]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    },

    /***/
    "Q2T/":
    /*!***************************************************************************!*\
      !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.ts ***!
      \***************************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Q2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "DCsZ");
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      "dhcA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardComponent);
      /***/
    },

    /***/
    "QXO3":
    /*!*************************************************************!*\
      !*** ./src/modules/dashboard/services/dashboard.service.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardService */

    /***/
    function QXO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return DashboardService;
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
      "AytR");

      var DashboardService = /*#__PURE__*/function () {
        function DashboardService(http) {
          _classCallCheck(this, DashboardService);

          this.http = http;
        }

        _createClass(DashboardService, [{
          key: "getDash",
          value: function getDash() {
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/dashboard/analytics');
          }
        }]);

        return DashboardService;
      }();

      DashboardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DashboardService);
      /***/
    },

    /***/
    "TibX":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TibX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard [light]=\"true\">\n    <sb-dashboard-head title=\"Dashboard Light\" [hideBreadcrumbs]=\"false\">\n\n    </sb-dashboard-head>\n\n</sb-layout-dashboard>\n";
      /***/
    },

    /***/
    "dhcA":
    /*!*****************************************************************************!*\
      !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function dhcA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "qvVY":
    /*!***************************************************!*\
      !*** ./src/modules/dashboard/components/index.ts ***!
      \***************************************************/

    /*! exports provided: components, DashboardCardsComponent */

    /***/
    function qvVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });
      /* harmony import */


      var _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-cards/dashboard-cards.component */
      "yDlM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
        return _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__["DashboardCardsComponent"];
      });

      var components = [_dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_0__["DashboardCardsComponent"]];
      /***/
    },

    /***/
    "u30O":
    /*!*******************************************************************!*\
      !*** ./src/modules/dashboard/containers/light/light.component.ts ***!
      \*******************************************************************/

    /*! exports provided: LightComponent */

    /***/
    function u30O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
        return LightComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_light_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./light.component.html */
      "TibX");
      /* harmony import */


      var _light_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./light.component.scss */
      "EGDz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LightComponent = /*#__PURE__*/function () {
        function LightComponent() {
          _classCallCheck(this, LightComponent);
        }

        _createClass(LightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LightComponent;
      }();

      LightComponent.ctorParameters = function () {
        return [];
      };

      LightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-light',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_light_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_light_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LightComponent);
      /***/
    },

    /***/
    "yDlM":
    /*!***************************************************************************************!*\
      !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: DashboardCardsComponent */

    /***/
    function yDlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
        return DashboardCardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_cards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard-cards.component.html */
      "HG3J");
      /* harmony import */


      var _dashboard_cards_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-cards.component.scss */
      "8AI6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _modules_dashboard_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/dashboard/services */
      "1r2h");

      var DashboardCardsComponent = /*#__PURE__*/function () {
        function DashboardCardsComponent(dashboardService) {
          _classCallCheck(this, DashboardCardsComponent);

          this.dashboardService = dashboardService;
          this.name = localStorage.getItem('first_name');
        }

        _createClass(DashboardCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dashboardService.getDash().subscribe(function (data) {
              _this.dashDetails = data;
              console.log(_this.dashDetails, "userDetails");
            });
          }
        }]);

        return DashboardCardsComponent;
      }();

      DashboardCardsComponent.ctorParameters = function () {
        return [{
          type: _modules_dashboard_services__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]
        }];
      };

      DashboardCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-dashboard-cards',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_dashboard_cards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_cards_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]])], DashboardCardsComponent);
      /***/
    },

    /***/
    "zq2N":
    /*!*********************************************************!*\
      !*** ./src/modules/dashboard/guards/dashboard.guard.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardGuard */

    /***/
    function zq2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
        return DashboardGuard;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DashboardGuard = /*#__PURE__*/function () {
        function DashboardGuard() {
          _classCallCheck(this, DashboardGuard);
        }

        _createClass(DashboardGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }
        }]);

        return DashboardGuard;
      }();

      DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DashboardGuard);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-dashboard-dashboard-routing-module-es5.js.map