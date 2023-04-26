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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-updnewproperty-updnewproperty-routing-module"], {
    /***/
    "+Tf4":
    /*!******************************************************!*\
      !*** ./src/modules/updnewproperty/services/index.ts ***!
      \******************************************************/

    /*! exports provided: services, updnewpropertyService */

    /***/
    function Tf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _updnewproperty_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./updnewproperty.service */
      "/bfu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updnewpropertyService", function () {
        return _updnewproperty_service__WEBPACK_IMPORTED_MODULE_0__["updnewpropertyService"];
      });

      var services = [_updnewproperty_service__WEBPACK_IMPORTED_MODULE_0__["updnewpropertyService"]];
      /***/
    },

    /***/
    "/bfu":
    /*!***********************************************************************!*\
      !*** ./src/modules/updnewproperty/services/updnewproperty.service.ts ***!
      \***********************************************************************/

    /*! exports provided: updnewpropertyService */

    /***/
    function bfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updnewpropertyService", function () {
        return updnewpropertyService;
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


      var updnewpropertyService = /*#__PURE__*/function () {
        function updnewpropertyService(http) {
          _classCallCheck(this, updnewpropertyService);

          this.http = http;
        }

        _createClass(updnewpropertyService, [{
          key: "updatePropertydetails",
          value: function updatePropertydetails(formdetails) {
            //   return this.http.post(API_URL + '/user-posting', { responseType: 'text' });
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-posting', formdetails);
          }
        }, {
          key: "getUserrental",
          value: function getUserrental(rental_id) {
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-posting' + '/postings/' + rental_id);
          }
        }]);

        return updnewpropertyService;
      }();

      updnewpropertyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      updnewpropertyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], updnewpropertyService);
      /***/
    },

    /***/
    "3R3d":
    /*!******************************************************************************************!*\
      !*** ./src/modules/updnewproperty/containers/updnewproperty/updnewproperty.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: UpdnewpropertyComponent */

    /***/
    function R3d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdnewpropertyComponent", function () {
        return UpdnewpropertyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_updnewproperty_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./updnewproperty.component.html */
      "hQBH");
      /* harmony import */


      var _updnewproperty_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./updnewproperty.component.scss */
      "gX3M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_updnewproperty_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/updnewproperty.service */
      "/bfu");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var UpdnewpropertyComponent = /*#__PURE__*/function () {
        function UpdnewpropertyComponent(updnewpropertyService, datePipe, route, router) {
          _classCallCheck(this, UpdnewpropertyComponent);

          this.updnewpropertyService = updnewpropertyService;
          this.datePipe = datePipe;
          this.route = route;
          this.router = router;
          this.form = {
            "user_name": "string",
            "accomedation_type": "string",
            "name": "string",
            "available_date": "any",
            "num_days": "any",
            "accomedated_date": "any",
            "num_people": "any",
            "num_people_living": "any",
            "num_bedrooms": "any",
            "num_bathrooms": "any",
            "approx_rent": "any",
            "is_pet_friendly": "any",
            "parking_available": "any",
            "address": "string",
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "zipcode": "any",
            "description": "any"
          };
          this.user_name = "";
          this.posting_id = localStorage.getItem("posting_id");
        }

        _createClass(UpdnewpropertyComponent, [{
          key: "restrictNegativeValues",
          value: function restrictNegativeValues(event) {
            if (event.key === '-' || event.key === '+') {
              event.preventDefault();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.posting_id = this.route.snapshot.params.id;
            this.updnewpropertyService.getUserrental(this.posting_id).subscribe(function (data) {
              _this.rentallisting = data;
              console.log(_this.rentallisting, "user listing detils");
            });
          }
        }, {
          key: "getCurrentDate",
          value: function getCurrentDate() {
            var today = new Date();
            var year = today.getFullYear();
            var month = (today.getMonth() + 1).toString().padStart(2, '0');
            var day = today.getDate().toString().padStart(2, '0');
            return "".concat(year, "-").concat(month, "-").concat(day);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.form = {
              "user_name": this.user_name,
              "name": this.name,
              "accomedation_type": this.accomedation_type,
              "available_date": this.available_date,
              "num_days": this.numDays,
              "accomedated_date": this.accomedated_date,
              "num_people": this.num_people,
              "num_people_living": this.numpeopleneed,
              "num_bedrooms": this.numRooms,
              "num_bathrooms": this.numBaths,
              "approx_rent": this.appRent,
              "is_pet_friendly": this.petFriendly,
              "parking_available": this.parking_available,
              "address": this.address,
              "address1": "",
              "address2": "",
              "address3": "",
              "city": this.city,
              "state": this.state,
              "country": this.country,
              "zipcode": this.zipcode,
              "description": this.description
            };

            if (this.nf.form.valid) {
              this.updnewpropertyService.updatePropertydetails(this.rentallisting).subscribe({
                next: function next(postingproperty) {
                  console.log(postingproperty, "updatingproperty");
                }
              });

              if (this.isFormDirty()) {
                this.router.navigate(["myuserlistings"]);
                alert("Property details updated successfully");
              } else {
                alert("No changes made to property details");
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

        return UpdnewpropertyComponent;
      }();

      UpdnewpropertyComponent.ctorParameters = function () {
        return [{
          type: _services_updnewproperty_service__WEBPACK_IMPORTED_MODULE_6__["updnewpropertyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      UpdnewpropertyComponent.propDecorators = {
        nf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nf', {
            "static": false
          }]
        }]
      };
      UpdnewpropertyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sb-updnewproperty',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_updnewproperty_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_updnewproperty_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_updnewproperty_service__WEBPACK_IMPORTED_MODULE_6__["updnewpropertyService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], UpdnewpropertyComponent);
      /***/
    },

    /***/
    "9Mpl":
    /*!*************************************************************!*\
      !*** ./src/modules/updnewproperty/updnewproperty.module.ts ***!
      \*************************************************************/

    /*! exports provided: UpdnewpropertyModule */

    /***/
    function Mpl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdnewpropertyModule", function () {
        return UpdnewpropertyModule;
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
      "o4c6");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services */
      "+Tf4");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Containers */

      /* Services */


      var UpdnewpropertyModule = function UpdnewpropertyModule() {
        _classCallCheck(this, UpdnewpropertyModule);
      };

      UpdnewpropertyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["services"])),
        declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]),
        exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"])
      })], UpdnewpropertyModule);
      /***/
    },

    /***/
    "LyxQ":
    /*!*********************************************************************!*\
      !*** ./src/modules/updnewproperty/updnewproperty-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ROUTES, UpdnewpropertyRoutingModule */

    /***/
    function LyxQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdnewpropertyRoutingModule", function () {
        return UpdnewpropertyRoutingModule;
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


      var _updnewproperty_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./updnewproperty.module */
      "9Mpl");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "o4c6");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["UpdnewpropertyComponent"],
        data: {
          title: 'New Property',
          breadcrumbs: [{
            text: 'Dashboard',
            link: '/dashboard'
          }, {
            text: 'Update property',
            active: true
          }]
        }
      }];

      var UpdnewpropertyRoutingModule = function UpdnewpropertyRoutingModule() {
        _classCallCheck(this, UpdnewpropertyRoutingModule);
      };

      UpdnewpropertyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_updnewproperty_module__WEBPACK_IMPORTED_MODULE_3__["UpdnewpropertyModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UpdnewpropertyRoutingModule);
      /***/
    },

    /***/
    "gX3M":
    /*!********************************************************************************************!*\
      !*** ./src/modules/updnewproperty/containers/updnewproperty/updnewproperty.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function gX3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRuZXdwcm9wZXJ0eS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "hQBH":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/updnewproperty/containers/updnewproperty/updnewproperty.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hQBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Update Property\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <div class=\"card-body px-6 pt-6 pb-5\">\n                <!-- <h3 class=\"card-title mb-0 text-heading fs-22 lh-15\">Add new property</h3> -->\n                <!-- <p class=\"card-text\">You can update details</p> -->\n               <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"nf.form.valid && onSubmit()\" #nf=\"ngForm\">\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"name\" class=\"text-heading\">Property name*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" required #nam=\"ngModel\" name=\"nam\" \n                        [(ngModel)]=\"rentallisting.name\"    minlength=\"3\" maxlength=\"30\">\n                        <div class=\"alert-danger\" *ngIf=\"nam.errors && nf.submitted\">\n                            <div *ngIf=\"nam.errors['required']\">Property Name is required</div>\n                            <div *ngIf=\"nam.errors['minlength']\">\n                                Property must be at least 3 characters\n                            </div>\n                            <div *ngIf=\"nam.errors['maxlength']\">\n                                Property must be at most 20 characters\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"accomtype\" class=\"text-heading\">Accomedation Type*</label>\n                        <!-- <select class=\"form-select\" aria-label=\"Default select example\" required #accomtype=\"ngModel\" id=\"accomtype\" name=\"accomtype\"\n                                [(ngModel)]=\"accomdationtype\" onchange=\"if (this.selectedIndex==1){this.form['numdays'].style.visibility='visible'}else {this.form['numdays'].style.visibility='hidden'};\"> -->\n                        <select class=\"form-select\" aria-label=\"Default select example\" required #accomtype=\"ngModel\" id=\"accomtype\" name=\"accomtype\"\n                                [(ngModel)]=\"rentallisting.accomedation_type\" >\n                            <option value=\"\" disabled selected>Select</option>\n                            <option value=\"Temporary\">Temporary</option>\n                            <option value=\"Permanent\">Permanent</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"numppl\" class=\"text-heading\">Num people Currently living?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numppl\" name=\"numppl\"\n                        [(ngModel)]=\"rentallisting.num_people_living\" min=\"0\"  #numppl=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\" maxlength=\"10\">\n                        <div class=\"alert-danger\" *ngIf=\"numppl?.errors && nf.submitted\">\n                            <div *ngIf=\"numppl?.errors['required']\">Number People Currently living is required</div>\n                            <div *ngIf=\"numppl?.errors['maxlength']\">Number People Currently living is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"numppln\" class=\"text-heading\">Num people can accommodate?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numppln\" name=\"numppln\"\n                        [(ngModel)]=\"rentallisting.num_people\"  min=\"0\" #numppln=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"numppln?.errors && nf.submitted\">\n                            <div *ngIf=\"numppln?.errors['required']\">Number People needs accomdation is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"mobile\" class=\"text-heading\">Num of Bedrooms?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numRooms\" name=\"numRom\"\n                        [(ngModel)]=\"rentallisting.num_bedrooms\" min=\"0\"  #numRom=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"numRom?.errors && nf.submitted\">\n                            <div *ngIf=\"numRom?.errors['required']\">Number of bedrooms is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\" >\n                        <label for=\"email\" class=\"text-heading\">Num of days?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" name=\"numdays\" \n                        [(ngModel)]=\"rentallisting.num_days\" min=\"0\"  #numdays=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <!-- <input type=\"number\" class=\"form-control form-control-md\" name=\"numdays\" \n                        [(ngModel)]=\"numDays\"   #numdays=\"ngModel\" style=\"visibility:hidden;\"> -->\n                        <div class=\"alert-danger\" *ngIf=\"numdays?.errors && nf.submitted\">\n                            <div *ngIf=\"numdays?.errors['required']\">Number days is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"mobile\" class=\"text-heading\">Num Of baths?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numbat\" name=\"numbat\"\n                        [(ngModel)]=\"rentallisting.num_bathrooms\"  min=\"0\" #numbat=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"numbat?.errors && nf.submitted\">\n                            <div *ngIf=\"numbat?.errors['required']\">Number baths is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"accomStart\" class=\"text-heading\">Accomedated start date?*</label>\n                        <input type=\"date\" class=\"form-control form-control-md\"  name=\"accstar\"\n                        [(ngModel)]=\"rentallisting.available_date\"   #accstar=\"ngModel\" required min=\"{{getCurrentDate()}}\">\n                        <div class=\"alert-danger\" *ngIf=\"accstar?.errors && nf.submitted\">\n                            <div *ngIf=\"accstar?.errors['required']\">Accomedated start date is required</div>\n                            <div *ngIf=\"nf.submitted && accstar?.errors?.min\">Accommodated start date must be today or later.</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"appRent\" class=\"text-heading\">Approx rent/Month ?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\"  name=\"appren\"\n                        [(ngModel)]=\"rentallisting.approx_rent\" min=\"0\" #appren=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"appren?.errors && nf.submitted\">\n                            <div *ngIf=\"appren?.errors['required']\">Approx rent is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"parkingAvail\" class=\"text-heading\">Parking available ?*</label>\n                        <select class=\"form-select\" aria-label=\"Default select example\"\n                        #parki=\"ngModel\" id=\"parki\" name=\"parki\" [(ngModel)]=\"rentallisting.parking_available\" >\n                            <option value=\"\" disabled selected>Select</option>\n                            <option value=\"true\">Yes</option>\n                            <option value=\"false\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4 \">\n                        <label for=\"petFriendly\" class=\"text-heading\">Pets friendly ?*</label>\n                        <select class=\"form-select\" aria-label=\"Default select example\" \n                        #pet=\"ngModel\" id=\"pet\" name=\"pet\" [(ngModel)]=\"rentallisting.is_pet_friendly\" >\n                            <option value=\"\" disabled selected>Select</option>\n                            <option value=\"true\">Yes</option>\n                            <option value=\"false\">No</option>\n                        </select>\n                    </div>\n                </div>\n                \n            \n                <hr>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"Address\" class=\"text-heading\">Address*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" id=\"address\" name=\"addre\"\n                        [(ngModel)]=\"rentallisting.address1\"  #addre=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"addre?.errors && nf.submitted\">\n                            <div *ngIf=\"addre?.errors['required']\">Address is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"City\" class=\"text-heading\">City*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" name=\"cit\"\n                        [(ngModel)]=\"rentallisting.city\"  #cit=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"cit?.errors && nf.submitted\">\n                            <div *ngIf=\"cit?.errors['required']\">City is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"State\" class=\"text-heading\">State*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" name=\"stat\"\n                        [(ngModel)]=\"rentallisting.state\"  #stat=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"stat?.errors && nf.submitted\">\n                            <div *ngIf=\"stat?.errors['required']\">State is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"Country\" class=\"text-heading\">Country*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\"  name=\"countr\"\n                        [(ngModel)]=\"rentallisting.country\"  #countr=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"countr?.errors && nf.submitted\">\n                            <div *ngIf=\"countr?.errors['required']\">Country is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"zipCode\" class=\"text-heading\">Zip Code*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\"  name=\"zipcod\"\n                        [(ngModel)]=\"rentallisting.zipcode\"  #zipcod=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"zipcod?.errors && nf.submitted\">\n                            <div *ngIf=\"zipcod?.errors['required']\">ZipCode is required</div>\n                        </div>\n                    </div>\n                    \n                </div>\n\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-12 px-4 mb-md-0\">\n                        <label for=\"des\" class=\"text-heading\">Description</label>\n                        <textarea id=\"description\"  class=\"form-control form-control-md\" \n                        name=\"description\" [(ngModel)]=\"rentallisting.description\" rows=\"4\" cols=\"60\"></textarea>\n                   </div>\n                </div>  <br>      \n                <div class=\"d-flex justify-content-end flex-wrap\">\n                    <button class=\"btn btn-primary mr-0\" >Submit</button>\n                 </div>\n              </form>\n            </div>\n            \n        </div>\n    </sb-card>\n</sb-layout-dashboard>";
      /***/
    },

    /***/
    "o4c6":
    /*!********************************************************!*\
      !*** ./src/modules/updnewproperty/containers/index.ts ***!
      \********************************************************/

    /*! exports provided: containers, UpdnewpropertyComponent */

    /***/
    function o4c6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _updnewproperty_updnewproperty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./updnewproperty/updnewproperty.component */
      "3R3d");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UpdnewpropertyComponent", function () {
        return _updnewproperty_updnewproperty_component__WEBPACK_IMPORTED_MODULE_0__["UpdnewpropertyComponent"];
      });

      var containers = [_updnewproperty_updnewproperty_component__WEBPACK_IMPORTED_MODULE_0__["UpdnewpropertyComponent"]];
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-updnewproperty-updnewproperty-routing-module-es5.js.map