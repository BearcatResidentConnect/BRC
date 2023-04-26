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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-routing-module"], {
    /***/
    "3+T0":
    /*!**********************************************!*\
      !*** ./src/modules/auth/components/index.ts ***!
      \**********************************************/

    /*! exports provided: components */

    /***/
    function T0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "components", function () {
        return components;
      });

      var components = [];
      /***/
    },

    /***/
    "9ke+":
    /*!**************************************************************!*\
      !*** ./src/modules/auth/containers/login/login.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function ke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "iYnd");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "BgQx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../auth/services/auth.service */
      "LonY");
      /* harmony import */


      var _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../auth/services/token-storage.service */
      "qTWo");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, tokenStorage, myRoute) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.myRoute = myRoute;
          this.form = {
            username: null,
            password: null
          };
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.errorMessage = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            var _this$form = this.form,
                username = _this$form.username,
                password = _this$form.password;
            this.authService.login(username, password).subscribe({
              next: function next(data) {
                data && data.access_token && _this.tokenStorage.setToken('access_token', data.access_token);
                data && data.refresh_token && _this.tokenStorage.setToken('refresh_token', data.refresh_token);

                _this.tokenStorage.saveToken(data.accessToken);

                _this.tokenStorage.saveUser(data);

                _this.isLoginFailed = false;
                _this.isLoggedIn = true;
                console.log(data.access_token, "access token1");
                console.log(data.refresh_token);
                localStorage.setItem('access_token', _this.access_token);
                console.log(data.access_token, "access token1");

                _this.getdetails(username);

                _this.myRoute.navigateByUrl('dashboard');

                if (_this.tokenStorage.getToken('access_token')) {
                  _this.isLoggedIn = true;
                  console.log('sdf');
                  console.log(_this.tokenStorage.getToken('access_token'));
                }
              },
              error: function error(err) {
                _this.errorMessage = err.error.detail;
                _this.isLoginFailed = true;
              }
            });
          }
        }, {
          key: "getdetails",
          value: function getdetails(username) {
            this.authService.getUserDetails(username).subscribe({
              next: function next(data1) {
                console.log(data1, "dgdfg");
                localStorage.setItem('email', data1.email);
                localStorage.setItem('first_name', data1.first_name);
                localStorage.setItem('last_name', data1.last_name);
                localStorage.setItem('user_name', data1.user_name);
                localStorage.setItem('sid', data1.sid);
                localStorage.setItem('access_token', data1.access_token);
              }
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-login',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
      /***/
    },

    /***/
    "BczO":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BczO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-auth>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-6 bg\">\n                <img alt=\"My image\" src=\"../../../../assets/img/banner.png\">\n              </div>\n            <div class=\"col-lg-6\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Create Account</h3></div>\n                    <div class=\"card-body\">\n                        <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n                            <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"username\">Username</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required minlength=\"3\"\n                                    maxlength=\"20\" #username=\"ngModel\" placeholder=\"sam@gmail.com\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"username.errors && f.submitted\">\n                                    <div *ngIf=\"username.errors['required']\">Username is required*</div>\n                                    <div *ngIf=\"username.errors['minlength']\">\n                                      Username must be at least 3 characters\n                                    </div>\n                                    <div *ngIf=\"username.errors['maxlength']\">\n                                      Username must be at most 20 characters\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"sid\">SID(Dont have one please leave it)</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"sid\" [(ngModel)]=\"form.sid\"  minlength=\"6\"\n                                     #sid=\"ngModel\" pattern=\"^[a-zA-Z][0-9]{6}$\" placeholder=\"If u dont have one please leave it empty\" data-toggle=\"tooltip\" title=\"If u dont have SID please leave it empty\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"sid.errors && f.submitted\">\n                                    <div *ngIf=\"sid.errors['required']\">SID is required</div>\n                                    <div *ngIf=\"sid.errors['minlength']\">\n                                      sid must be at least 6 characters \n                                    </div>\n                                    <div *ngIf=\"sid.errors?.pattern\">\n                                      sid is invalid format is (S12345)\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                    \n                            <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"firstname\">FirstName*</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"form.firstname\" required\n                                    minlength=\"3\" maxlength=\"20\" #firstname=\"ngModel\" placeholder=\"Firstname\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"firstname.errors && f.submitted\">\n                                    <div *ngIf=\"firstname.errors['required']\">Firstname is required</div>\n                                    <div *ngIf=\"firstname.errors['minlength']\">\n                                      Firstname must be at least 3 characters\n                                    </div>\n                                    <div *ngIf=\"firstname.errors['maxlength']\">\n                                      Firstname must be at most 20 characters\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"lastname\">LastName*</label>\n                                  <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"form.lastname\" required minlength=\"3\"\n                                    maxlength=\"20\" #lastname=\"ngModel\" placeholder=\"Lastname\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"lastname.errors && f.submitted\">\n                                    <div *ngIf=\"lastname.errors['required']\">Lastname is required</div>\n                                    <div *ngIf=\"lastname.errors['minlength']\">\n                                      Lastname must be at least 3 characters\n                                    </div>\n                                    <div *ngIf=\"lastname.errors['maxlength']\">\n                                      Lastname must be at most 20 characters\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                  <label for=\"email\">Email*</label>\n                                  <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" required email\n                                    #email=\"ngModel\" placeholder=\"someone@gmail.com\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"email.errors && f.submitted\">\n                                    <div *ngIf=\"email.errors['required']\">Email is required</div>\n                                    <div *ngIf=\"email.errors['email']\">\n                                      Email must be a valid email address\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            \n                            <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"password\">Password*</label>\n                                  <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required minlength=\"6\" #password=\"ngModel\" placeholder=\"xxx\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"password.errors && f.submitted\">\n                                    <div *ngIf=\"password.errors['required']\">Password is required</div>\n                                    <div *ngIf=\"password.errors['minlength']\">Password must be at least 6 characters</div>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"cpassword\">Confirm Password*</label>\n                                  <input type=\"password\" class=\"form-control\" name=\"cpassword\" [(ngModel)]=\"form.cpassword\" required minlength=\"6\" #cpassword=\"ngModel\" compareWith=\"password\" placeholder=\"xxx\"/>\n                                  <div class=\"alert-danger\" *ngIf=\"cpassword.errors && f.submitted\">\n                                    <div *ngIf=\"cpassword.errors['required']\">Confirm password is required</div>\n                                    <div *ngIf=\"cpassword.errors['minlength']\">Confirm password must be at least 6 characters</div>\n                                    <div *ngIf=\"cpassword.errors['compareWith']\">Passwords do not match</div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                             \n                            <div class=\"form-group\">\n                              <button class=\"btn btn-block btn-outline-primary \" >Sign Up</button>\n                            </div>\n                    \n                            <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n                              Signup failed!<br />{{ errorMessage }}\n                            </div>\n                          </form>\n                          <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n                            Your registration is successful!\n                          </div>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/login\">Have an account ? Go to login</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth>\n";
      /***/
    },

    /***/
    "BgQx":
    /*!****************************************************************!*\
      !*** ./src/modules/auth/containers/login/login.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function BgQx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DrEB":
    /*!*************************************************!*\
      !*** ./src/modules/auth/auth-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ROUTES, AuthRoutingModule */

    /***/
    function DrEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.module */
      "OELk");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers */
      "ccMp");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards */
      "olz4");
      /* tslint:disable: ordered-imports*/

      /* Module */

      /* Containers */

      /* Routes */


      var ROUTES = [{
        path: '',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: {
          title: 'Pages Login - Bearcat Resident Connect'
        }
      }, {
        path: 'register',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: {
          title: 'Pages Register - Bearcat Resident Connect'
        }
      }, {
        path: 'forgot-password',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
        data: {
          title: 'Pages Forgot Password - Bearcat Resident Connect'
        }
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthRoutingModule);
      /***/
    },

    /***/
    "NkfZ":
    /*!**********************************************************************!*\
      !*** ./src/modules/auth/containers/register/register.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function NkfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OELk":
    /*!*****************************************!*\
      !*** ./src/modules/auth/auth.module.ts ***!
      \*****************************************/

    /*! exports provided: AuthModule */

    /***/
    function OELk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components */
      "3+T0");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers */
      "ccMp");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./guards */
      "olz4");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services */
      "+nzF");
      /* tslint:disable: ordered-imports*/

      /* Modules */

      /* Components */

      /* Containers */

      /* Guards */

      /* Services */


      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
        providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_10__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_9__["guards"]), [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]),
        declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"])),
        exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
      })], AuthModule);
      /***/
    },

    /***/
    "XOd+":
    /*!********************************************************************!*\
      !*** ./src/modules/auth/containers/register/register.component.ts ***!
      \********************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "BczO");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "NkfZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../auth/services/auth.service */
      "LonY");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authService) {
          _classCallCheck(this, RegisterComponent);

          this.authService = authService;
          this.form = {
            username: null,
            sid: null,
            firstname: null,
            lastname: null,
            email: null,
            password: null
          };
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.errorMessage = '';
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            var _this$form2 = this.form,
                username = _this$form2.username,
                sid = _this$form2.sid,
                firstname = _this$form2.firstname,
                lastname = _this$form2.lastname,
                email = _this$form2.email,
                password = _this$form2.password;
            this.authService.register(username, sid, firstname, lastname, email, password).subscribe({
              next: function next(data) {
                console.log(data);
                _this2.isSuccessful = true;
                _this2.isSignUpFailed = false;
              },
              error: function error(err) {
                _this2.errorMessage = err.error.message;
                _this2.isSignUpFailed = true;
              }
            });
          }
        }, {
          key: "comparePasswords",
          value: function comparePasswords(form) {
            if (form.controls['password'].value !== form.controls['cpassword'].value) {
              form.controls['cpassword'].setErrors({
                compareWith: true
              });
            } else {
              form.controls['cpassword'].setErrors(null);
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-register',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], RegisterComponent);
      /***/
    },

    /***/
    "ccMp":
    /*!**********************************************!*\
      !*** ./src/modules/auth/containers/index.ts ***!
      \**********************************************/

    /*! exports provided: containers, LoginComponent, RegisterComponent, ForgotPasswordComponent */

    /***/
    function ccMp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containers", function () {
        return containers;
      });
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "q8Nc");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "9ke+");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register/register.component */
      "XOd+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"];
      });

      var containers = [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"]];
      /***/
    },

    /***/
    "iYnd":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iYnd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-6 bg\">\n                <img alt=\"My image\" src=\"../../../../assets/img/banner.png\">\n              </div>\n            <div class=\"col-lg-6\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Login</h3></div>\n                    <div class=\"card-body\">\n                        <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                            <div class=\"form-group\">\n                              <label for=\"username\">Username</label>\n                              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required\n                                #username=\"ngModel\" />\n                              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"username.errors && f.submitted\">\n                                Username is required!\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"password\">Password</label>\n                              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required\n                                minlength=\"6\" #password=\"ngModel\" />\n                              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.errors && f.submitted\">\n                                <div *ngIf=\"password.errors['required']\">Password is required</div>\n                                <div *ngIf=\"password.errors['minlength']\">\n                                  Password must be at least 6 characters\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"form-group\">\n                              <button class=\"btn btn-block btn-outline-primary\" >\n                                Login\n                              </button>\n                              <!-- <button class=\"btn btn-block btn-outline-primary\" [disabled]=\"f.invalid\">\n                                Login\n                              </button> -->\n                            </div>\n                            <div class=\"form-group\">\n                              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">\n                                Login failed: {{ errorMessage }}\n                              </div>\n                            </div>\n                          </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\n                    </div>\n                    <!-- <div class=\"card-footer text-center\">\n                      <div class=\"small\"><a routerLink=\"http://3.224.253.213:5000/api/user/reset_password\">Change password!</a></div>\n                  </div> -->\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth>\n";
      /***/
    },

    /***/
    "ka7e":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password/forgot-password.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ka7e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<sb-layout-auth>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Password Recovery</h3></div>\n                    <div class=\"card-body\">\n                        <div class=\"small mb-3 text-muted\">Enter your email address and we will send you a link to reset your password.</div>\n                        <form>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" type=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email address\" /></div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\"><a class=\"small\" routerLink=\"/auth/login\">Return to login</a><a class=\"btn btn-primary\" routerLink=\"/auth/login\">Reset Password</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-auth>\n";
      /***/
    },

    /***/
    "mz3Y":
    /*!************************************************************************************!*\
      !*** ./src/modules/auth/containers/forgot-password/forgot-password.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function mz3Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "q8Nc":
    /*!**********************************************************************************!*\
      !*** ./src/modules/auth/containers/forgot-password/forgot-password.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function q8Nc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "ka7e");
      /* harmony import */


      var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.component.scss */
      "mz3Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent() {
          _classCallCheck(this, ForgotPasswordComponent);
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [];
      };

      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sb-forgot-password',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ForgotPasswordComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-auth-auth-routing-module-es5.js.map