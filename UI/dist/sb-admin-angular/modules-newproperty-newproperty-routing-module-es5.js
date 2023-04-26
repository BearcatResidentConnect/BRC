(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-newproperty-newproperty-routing-module"], {
    /***/
    "fOEd":
    /*!***************************************************************!*\
      !*** ./src/modules/newproperty/newproperty-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ROUTES, NewpropertyRoutingModule */

    /***/
    function fOEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewpropertyRoutingModule", function () {
        return NewpropertyRoutingModule;
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


      var _newproperty_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newproperty.module */
      "I6us");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "YHUK");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["NewpropertyComponent"],
        data: {
          title: 'New Property',
          breadcrumbs: [{
            text: 'Dashboard',
            link: '/dashboard'
          }, {
            text: 'Add new property',
            active: true
          }]
        }
      }];

      var NewpropertyRoutingModule = function NewpropertyRoutingModule() {
        _classCallCheck(this, NewpropertyRoutingModule);
      };

      NewpropertyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_newproperty_module__WEBPACK_IMPORTED_MODULE_3__["NewpropertyModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewpropertyRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-newproperty-newproperty-routing-module-es5.js.map