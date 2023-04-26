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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"], {
    /***/
    "1WOk":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/newproperty/containers/newproperty/newproperty.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WOk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"Add New Property\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-card>\n        <div class=\"card-body\">\n            <div class=\"card-body px-6 pt-6 pb-5\">\n                <!-- <h3 class=\"card-title mb-0 text-heading fs-22 lh-15\">Add new property</h3> -->\n                <!-- <p class=\"card-text\">You can update details</p> -->\n               <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"nf.form.valid && onSubmit()\" #nf=\"ngForm\">\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"name\" class=\"text-heading\">Property name*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" required #nam=\"ngModel\" name=\"nam\" \n                        [(ngModel)]=\"name\"    >\n                        <div class=\"alert-danger\" *ngIf=\"nam.errors && nf.submitted\">\n                            <div *ngIf=\"nam.errors['required']\">Property Name is required</div>\n                            <div *ngIf=\"nam.errors['minlength']\">\n                                Property must be at least 3 characters\n                            </div>\n                            <div *ngIf=\"nam.errors['maxlength']\">\n                                Property must be at most 20 characters\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"accomtype\" class=\"text-heading\">Accommodation Type*</label>\n                        <select class=\"form-select\" aria-label=\"Default select example\" required #accomtype=\"ngModel\"\n                                id=\"accomtype\" name=\"accomtype\" [(ngModel)]=\"accomdationtype\">\n                          <option value=\"\" disabled selected>Select</option>\n                          <option value=\"Temporary\">Temporary</option>\n                          <option value=\"Permanent\">Permanent</option>\n                        </select>\n                        <div *ngIf=\"accomtype.invalid && (accomtype.dirty || accomtype.touched)\" class=\"text-danger\">\n                          <div *ngIf=\"accomtype.errors.required\">\n                            Accommodation Type is required.\n                          </div>\n                        </div>\n                      </div>\n                      \n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"numppl\" class=\"text-heading\">Num of people Currently living?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numppl\" name=\"numppl\"\n                          [(ngModel)]=\"numpeopleneed\" #numppl=\"ngModel\" min=\"0\" max=\"12\" required \n                          (keydown)=\"restrictNegativeValues($event)\" (input)=\"onInput($event.target.value)\">\n                        <div class=\"alert-danger\" *ngIf=\"numppl?.errors && nf.submitted\">\n                          <div *ngIf=\"numppl?.errors['required']\">Number People Currently living is required</div>\n                          <div *ngIf=\"numppl?.errors['negative']\">Negative values are not allowed</div>\n                          <div *ngIf=\"numppl?.errors['min']\">Number must be greater than or equal to 0</div>\n                          <div *ngIf=\"numppl?.errors['max']\">Number cannot be greater than 99</div>\n                          <div *ngIf=\"numppl?.errors['maxlength']\">Maximum length is 2 digits</div>\n                        </div>\n                      </div>\n                      \n                      \n                      \n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"numppln\" class=\"text-heading\">Num of people can accommodate?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numppln\" name=\"numppln\"\n                        [(ngModel)]=\"numpeople\"   #numppln=\"ngModel\" required min=\"0\" maxlength=\"10\" (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"numppln?.errors && nf.submitted\">\n                            <div *ngIf=\"numppln?.errors['required']\">Number of people needs accomdation is required</div>\n                            <div *ngIf=\"numppln?.errors['maxlength']\">Number cannot be greater than 99</div>\n                        </div>\n                        <!-- <div *ngIf=\"numppln.invalid && (numppln.dirty || numppln.touched)\" class=\"text-danger\">\n                            <div *ngIf=\"numppln.errors.required\">\n                                Number of people is required.\n                            </div>\n                          </div> -->\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"mobile\" class=\"text-heading\">Num of Bedrooms?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numRooms\" name=\"numRom\"\n                        [(ngModel)]=\"numRooms\" min=\"0\" maxlength=\"10\"  #numRom=\"ngModel\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"numRom?.errors && nf.submitted\">\n                            <div *ngIf=\"numRom?.errors['required']\">Number of bedrooms is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\" >\n                        <label for=\"email\" class=\"text-heading\">Num of days?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" name=\"numdays\" \n                        [(ngModel)]=\"numDays\" required  #numdays=\"ngModel\"  min=\"0\" maxlength=\"10\" (keydown)=\"restrictNegativeValues($event)\">\n                        <!-- <input type=\"number\" class=\"form-control form-control-md\" name=\"numdays\" \n                        [(ngModel)]=\"numDays\"   #numdays=\"ngModel\" style=\"visibility:hidden;\"> -->\n                        <div class=\"alert-danger\" *ngIf=\"numdays?.errors && nf.submitted\">\n                            <div *ngIf=\"numdays?.errors['required']\">Number days is required</div>\n                            \n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4\">\n                        <label for=\"mobile\" class=\"text-heading\">Num of baths?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\" id=\"numbat\" name=\"numbat\"\n                        [(ngModel)]=\"numBaths\"   #numbat=\"ngModel\" min=\"0\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"numbat?.errors && nf.submitted\">\n                            <div *ngIf=\"numbat?.errors['required']\">Number baths is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"accomStart\" class=\"text-heading\">Accommodated start date?*</label>\n                        <input type=\"date\" class=\"form-control form-control-md\" name=\"accstar\" [(ngModel)]=\"accomStart\" #accstar=\"ngModel\" required\n                               [min]=\"getCurrentDate()\" (input)=\"accstar.valid && (accstar.touched || accstar.dirty)\">\n                        <div class=\"alert-danger\" *ngIf=\"accstar?.errors && (accstar.touched || accstar.dirty)\">\n                          <div *ngIf=\"accstar?.errors.required\">Accommodated start date is required</div>\n                          <div *ngIf=\"accstar?.errors.min\">Accommodated start date must be today or later.</div>\n                        </div>\n                      </div>\n                      \n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"appRent\" class=\"text-heading\">Approx rent/Month ?*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\"  name=\"appren\"\n                        [(ngModel)]=\"appRent\" #appren=\"ngModel\" min=\"0\" required (keydown)=\"restrictNegativeValues($event)\"> \n                        <div class=\"alert-danger\" *ngIf=\"appren?.errors && nf.submitted\">\n                            <div *ngIf=\"appren?.errors['required']\">Approx rent is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"parkingAvail\" class=\"text-heading\">Parking available ?*</label>\n                        <select class=\"form-select\" aria-label=\"Default select example\" [(ngModel)]=\"parkingAvail\" \n                        >\n                            <option value=\"\" disabled selected>Select</option>\n                            <option value=\"Yes\">Yes</option>\n                            <option value=\"No\">No</option>\n                        </select>\n                        \n                    </div>\n                    <div class=\"form-group col-md-6 px-4 \">\n                        <label for=\"petFriendly\" class=\"text-heading\">Pet friendly ?*</label>\n                        <select class=\"form-select\" aria-label=\"Default select example\" [(ngModel)]=\"petFriendly\" >\n                            <option value=\"\" disabled selected>Select</option>\n                            <option value=\"Yes\">Yes</option>\n                            <option value=\"No\">No</option>\n                        </select>\n                        \n                    </div>\n                </div>\n                \n            \n                <hr>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"Address\" class=\"text-heading\">Address*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" id=\"address\" name=\"addre\"\n                        [(ngModel)]=\"address\"  #addre=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"addre?.errors && nf.submitted\">\n                            <div *ngIf=\"addre?.errors['required']\">Address is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"City\" class=\"text-heading\">City*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" name=\"cit\"\n                        [(ngModel)]=\"city\"  #cit=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"cit?.errors && nf.submitted\">\n                            <div *ngIf=\"cit?.errors['required']\">City is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"State\" class=\"text-heading\">State*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\" name=\"stat\"\n                        [(ngModel)]=\"state\"  #stat=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"stat?.errors && nf.submitted\">\n                            <div *ngIf=\"stat?.errors['required']\">State is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"Country\" class=\"text-heading\">Country*</label>\n                        <input type=\"text\" class=\"form-control form-control-md\"  name=\"countr\"\n                        [(ngModel)]=\"country\"  #countr=\"ngModel\" required>\n                        <div class=\"alert-danger\" *ngIf=\"countr?.errors && nf.submitted\">\n                            <div *ngIf=\"countr?.errors['required']\">Country is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-6 px-4 mb-md-0\">\n                        <label for=\"zipCode\" class=\"text-heading\">Zip Code*</label>\n                        <input type=\"number\" class=\"form-control form-control-md\"  name=\"zipcod\"\n                        [(ngModel)]=\"zipcode\"  #zipcod=\"ngModel\" min=\"0\" required (keydown)=\"restrictNegativeValues($event)\">\n                        <div class=\"alert-danger\" *ngIf=\"zipcod?.errors && nf.submitted\">\n                            <div *ngIf=\"zipcod?.errors['required']\">ZipCode is required</div>\n                        </div>\n                    </div>\n                    \n                </div>\n\n                <div class=\"form-row mx-n4\">\n                    <div class=\"form-group col-md-12 px-4 mb-md-0\">\n                        <label for=\"zipCode\" class=\"text-heading\">Description</label>\n                        <textarea id=\"description\"  class=\"form-control form-control-md\" \n                        name=\"descriptio\" placeholder=\"You can add details related to property\" [(ngModel)]=\"description\" #descriptio=\"\"ngModel rows=\"4\" cols=\"60\"></textarea>\n                   </div>\n                </div> \n                 <br>      \n                <div class=\"d-flex justify-content-end flex-wrap\">\n                    <!-- <button class=\"btn btn-primary mr-0\" [disabled]=\"nf.invalid\">Submit</button> -->\n                    <button class=\"btn btn-primary mr-0\" >Submit</button>\n                 </div>\n              </form>\n            </div>\n            \n        </div>\n    </sb-card>\n</sb-layout-dashboard>";
      /***/
    },

    /***/
    "Hd7s":
    /*!***********************************************************************************!*\
      !*** ./src/modules/newproperty/containers/newproperty/newproperty.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function Hd7s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdwcm9wZXJ0eS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "I6us":
    /*!*******************************************************!*\
      !*** ./src/modules/newproperty/newproperty.module.ts ***!
      \*******************************************************/

    /*! exports provided: NewpropertyModule */

    /***/
    function I6us(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewpropertyModule", function () {
        return NewpropertyModule;
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
      "YHUK");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services */
      "qfo/");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Containers */

      /* Services */


      var NewpropertyModule = function NewpropertyModule() {
        _classCallCheck(this, NewpropertyModule);
      };

      NewpropertyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_8__["services"])),
        declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]),
        exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"])
      })], NewpropertyModule);
      /***/
    },

    /***/
    "NZAA":
    /*!*********************************************************************************!*\
      !*** ./src/modules/newproperty/containers/newproperty/newproperty.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: NewpropertyComponent */

    /***/
    function NZAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewpropertyComponent", function () {
        return NewpropertyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newproperty_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newproperty.component.html */
      "1WOk");
      /* harmony import */


      var _newproperty_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newproperty.component.scss */
      "Hd7s");
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


      var _services_newproperty_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/newproperty.service */
      "QjFE");

      var NewpropertyComponent = /*#__PURE__*/function () {
        function NewpropertyComponent(newpropertyService, datePipe, route) {
          _classCallCheck(this, NewpropertyComponent);

          this.newpropertyService = newpropertyService;
          this.datePipe = datePipe;
          this.route = route;
          this.form = {
            "user_name": "string",
            "accomedation_type": "Temporary",
            "name": "string",
            "available_date": "2022-11-23",
            "num_days": 7,
            "accomedated_date": "2022-11-24",
            "num_people": 1,
            "num_people_living": 2,
            "num_bedrooms": 1,
            "num_bathrooms": 1,
            "approx_rent": 200,
            "is_pet_friendly": false,
            "parking_available": false,
            "address": "string",
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "zipcode": 0,
            "description": "any"
          };
          this.user_name = localStorage.getItem("user_name");
        }

        _createClass(NewpropertyComponent, [{
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
            this.newpropertyService.getUserrental(this.posting_id, this.user_name).subscribe(function (data) {
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
              "accomedation_type": this.accomdationtype,
              "available_date": this.accomStart,
              "num_days": this.numDays,
              "accomedated_date": this.accomStart,
              "num_people": this.numpeople,
              "num_people_living": this.numpeopleneed,
              "num_bedrooms": this.numRooms,
              "num_bathrooms": this.numBaths,
              "approx_rent": this.appRent,
              "is_pet_friendly": this.petFriendly,
              "parking_available": this.parkingAvail,
              "address": "string",
              "address1": this.address,
              "address2": "",
              "address3": "",
              "city": this.city,
              "state": this.state,
              "country": this.country,
              "zipcode": this.zipcode,
              "description": this.description
            };
            this.newpropertyService.postPropertydetails(this.form).subscribe({
              next: function next(postingproperty) {
                console.log(postingproperty, "postingproperty");
              }
            });
            alert("New property details added successfully");
          }
        }]);

        return NewpropertyComponent;
      }();

      NewpropertyComponent.ctorParameters = function () {
        return [{
          type: _services_newproperty_service__WEBPACK_IMPORTED_MODULE_6__["newpropertyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      NewpropertyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sb-newproperty',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_newproperty_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newproperty_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_newproperty_service__WEBPACK_IMPORTED_MODULE_6__["newpropertyService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], NewpropertyComponent);
      /***/
    },

    /***/
    "QjFE":
    /*!*****************************************************************!*\
      !*** ./src/modules/newproperty/services/newproperty.service.ts ***!
      \*****************************************************************/

    /*! exports provided: newpropertyService */

    /***/
    function QjFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "newpropertyService", function () {
        return newpropertyService;
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


      var newpropertyService = /*#__PURE__*/function () {
        function newpropertyService(http) {
          _classCallCheck(this, newpropertyService);

          this.http = http;
        }

        _createClass(newpropertyService, [{
          key: "postPropertydetails",
          value: function postPropertydetails(formdetails) {
            //   return this.http.post(API_URL + '/user-posting', { responseType: 'text' });
            return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + "/user-posting", formdetails);
          }
        }, {
          key: "getUserrental",
          value: function getUserrental(rental_id, user_name) {
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user-posting/' + user_name + '/postings/' + rental_id);
          }
        }]);

        return newpropertyService;
      }();

      newpropertyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      newpropertyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], newpropertyService);
      /***/
    },

    /***/
    "YHUK":
    /*!*****************************************************!*\
      !*** ./src/modules/newproperty/containers/index.ts ***!
      \*****************************************************/

    /*! exports provided: containers, NewpropertyComponent */

    /***/
    function YHUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _newproperty_newproperty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newproperty/newproperty.component */
      "NZAA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NewpropertyComponent", function () {
        return _newproperty_newproperty_component__WEBPACK_IMPORTED_MODULE_0__["NewpropertyComponent"];
      });

      var containers = [_newproperty_newproperty_component__WEBPACK_IMPORTED_MODULE_0__["NewpropertyComponent"]];
      /***/
    },

    /***/
    "qfo/":
    /*!***************************************************!*\
      !*** ./src/modules/newproperty/services/index.ts ***!
      \***************************************************/

    /*! exports provided: services, newpropertyService */

    /***/
    function qfo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "services", function () {
        return services;
      });
      /* harmony import */


      var _newproperty_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newproperty.service */
      "QjFE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "newpropertyService", function () {
        return _newproperty_service__WEBPACK_IMPORTED_MODULE_0__["newpropertyService"];
      });

      var services = [_newproperty_service__WEBPACK_IMPORTED_MODULE_0__["newpropertyService"]];
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module-es5.js.map