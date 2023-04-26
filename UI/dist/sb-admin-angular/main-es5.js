(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\S547187\Desktop\Work\BRC\ui\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        basePath: 'http://3.224.253.213:5000/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "LonY":
    /*!***************************************************!*\
      !*** ./src/modules/auth/services/auth.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthService */

    /***/
    function LonY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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
      /* harmony import */


      var _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/services/token-storage.service */
      "qTWo"); // const AUTH_API = 'http://18.207.93.25:5000/api';
      // const AUTH_API  = 'http://192.168.1.23:5000/api';


      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, tokenStorage) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.tokenStorage = tokenStorage;
          this.refreshToken = 'refreshToken';
          this.access_token = localStorage.getItem('access_token');
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(user_name, password) {
            /*  var formData: any = new FormData();
            formData.append("name", this.form.get('name').value);
            formData.append("avatar", this.form.get('avatar').value);
            return this.http.post(AUTH_API + '/users/auth/token', formData).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
            ) */
            //         /*  const formData = new FormData();
            //   formData.append("username", user_name);
            //   formData.append("password", password);
            //   const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
            //   console.log({formData}); */
            var formData = new FormData();
            formData.append('username', user_name);
            formData.append('password', password);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              enctype: 'multipart/form-data'
            });
            return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/users/auth/token', formData, {
              headers: headers
            });
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails(user_name) {
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/users/' + user_name);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('accessToken');
          }
        }, {
          key: "register",
          value: function register(user_name, sid, first_name, last_name, email, password) {
            return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user', {
              user_name: user_name,
              sid: sid,
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password
            }, httpOptions);
          }
        }, {
          key: "IsLoggedIn",
          value: function IsLoggedIn() {
            return !!this.tokenStorage.getToken('access_token');
          }
        }, {
          key: "GetToken",
          value: function GetToken() {
            return localStorage.getItem('access_token') || '';
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])], AuthService);
      /***/
    },

    /***/
    "NftP":
    /*!********************************************************!*\
      !*** ./src/modules/auth/services/token-interceptor.ts ***!
      \********************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function NftP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "LonY");
      /* harmony import */


      var _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../auth/services/token-storage.service */
      "qTWo");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(inject, tokenStorage, auth) {
          _classCallCheck(this, TokenInterceptor);

          this.inject = inject;
          this.tokenStorage = tokenStorage;
          this.auth = auth;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var key = this.tokenStorage.getToken('access_token');

            if (key) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(key)
                }
              });
            } //     let authservice = this.inject.get(AuthService);
            //     let jwtToken = req.clone ({
            //     setHeaders: {
            //         Authorization: 'bearer ' + this.tokenStorage.getToken('access_token'),
            //     }
            //  });


            return next.handle(req);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], TokenInterceptor);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = function AppComponent(router, titleService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.titleService = titleService;
        this.title = 'sb-admin-angular';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildActivationEnd"];
        })).subscribe(function (event) {
          var snapshot = event.snapshot;

          while (snapshot.firstChild !== null) {
            snapshot = snapshot.firstChild;
          }

          _this.titleService.setTitle(snapshot.data.title || 'BRC');
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "WVvL":
    /*!***********************************************!*\
      !*** ./src/modules/auth/guards/auth.guard.ts ***!
      \***********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function WVvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "LonY");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth, route, router) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
          this.route = route;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.auth.IsLoggedIn()) {
              return true;
            } else {
              this.router.navigate(['../auth/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _modules_auth_services_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/auth/services/token-interceptor */
      "NftP");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _modules_auth_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @modules/auth/guards */
      "olz4");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "Nv++");
      /* harmony import */


      var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/fontawesome-svg-core */
      "7O5W");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu"); // import { ToastrModule } from 'ngx-toastr';


      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fas"]);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _modules_auth_services_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"],
          multi: true
        }, _modules_auth_guards__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "olz4":
    /*!******************************************!*\
      !*** ./src/modules/auth/guards/index.ts ***!
      \******************************************/

    /*! exports provided: guards, AuthGuard */

    /***/
    function olz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "guards", function () {
        return guards;
      });
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "WVvL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });

      var guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]];
      /***/
    },

    /***/
    "qTWo":
    /*!************************************************************!*\
      !*** ./src/modules/auth/services/token-storage.service.ts ***!
      \************************************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function qTWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TOKEN_KEY = 'auth-token';
      var USER_KEY = 'auth-user';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            localStorage.setItem(TOKEN_KEY, token);
          }
        }, {
          key: "setToken",
          value: function setToken(key, token) {
            window.sessionStorage.removeItem(key);
            window.sessionStorage.setItem(key, token);
          }
        }, {
          key: "getToken",
          value: function getToken(key) {
            return window.sessionStorage.getItem(key);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var user = window.sessionStorage.getItem(USER_KEY);

            if (user) {
              return JSON.parse(user);
            }

            return {};
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ctorParameters = function () {
        return [];
      };

      TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TokenStorageService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @modules/auth/guards/auth.guard */
      "WVvL");

      var routes = [{
        path: '',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        pathMatch: 'full',
        redirectTo: '/auth/login'
      }, {
        path: 'profile',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-profile-profile-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("common"), __webpack_require__.e("modules-profile-profile-routing-module")]).then(__webpack_require__.bind(null,
          /*! @modules/profile/profile-routing.module */
          "qTM7")).then(function (m) {
            return m.ProfileRoutingModule;
          });
        }
      }, {
        path: 'changepassword',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-changepassword-changepassword-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-changepassword-changepassword-routing-module")]).then(__webpack_require__.bind(null,
          /*! @modules/changepassword/changepassword-routing.module */
          "82Ww")).then(function (m) {
            return m.ChangepasswordRoutingModule;
          });
        }
      }, {
        path: 'myuserlistings',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-myuserlistings-myuserlistings-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-myuserlistings-myuserlistings-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/myuserlistings/myuserlistings-routing.module */
          "PmoG")).then(function (m) {
            return m.MyuserlistingsRoutingModule;
          });
        }
      }, {
        path: 'myuserlistingsdetail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-myuserlistingsdetail-myuserlistingsdetail-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-myuserlistingsdetail-myuserlistingsdetail-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/myuserlistingsdetail/myuserlistingsdetail-routing.module */
          "Kajr")).then(function (m) {
            return m.MyuserlistingsdetailRoutingModule;
          });
        },
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'updnewproperty',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-updnewproperty-updnewproperty-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-updnewproperty-updnewproperty-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/updnewproperty/updnewproperty-routing.module */
          "LyxQ")).then(function (m) {
            return m.UpdnewpropertyRoutingModule;
          });
        }
      }, {
        path: 'updnewproperty/:id',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-updnewproperty-updnewproperty-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-updnewproperty-updnewproperty-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/updnewproperty/updnewproperty-routing.module */
          "LyxQ")).then(function (m) {
            return m.UpdnewpropertyRoutingModule;
          });
        }
      }, {
        path: 'userlistings',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-userlistings-userlistings-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-userlistings-userlistings-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/userlistings/userlistings-routing.module */
          "OcoX")).then(function (m) {
            return m.UserlistingsRoutingModule;
          });
        }
      }, {
        path: 'rentallistings',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-rentallistings-rentallistings-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-rentallistings-rentallistings-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/rentallistings/rentallistings-routing.module */
          "43zm")).then(function (m) {
            return m.RentallistingsRoutingModule;
          });
        }
      }, {
        path: 'userlistingsdetail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-userlistingsdetail-userlistingsdetail-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-userlistingsdetail-userlistingsdetail-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/userlistingsdetail/userlistingsdetail-routing.module */
          "Z5z4")).then(function (m) {
            return m.UserlistingsdetailRoutingModule;
          });
        }
      }, {
        path: 'rentallistingsdetail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-rentallistingsdetail-rentallistings-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-rentallistingsdetail-rentallistings-routing-module")]).then(__webpack_require__.bind(null,
          /*! @modules/rentallistingsdetail/rentallistings-routing.module */
          "X43j")).then(function (m) {
            return m.RentallistingsdetailRoutingModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-dashboard-dashboard-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-dashboard-dashboard-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/dashboard/dashboard-routing.module */
          "IlwM")).then(function (m) {
            return m.DashboardRoutingModule;
          });
        },
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-auth-auth-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-auth-auth-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/auth/auth-routing.module */
          "DrEB")).then(function (m) {
            return m.AuthRoutingModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-error-error-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }, {
        path: 'newproperty',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-newproperty-newproperty-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"), __webpack_require__.e("modules-newproperty-newproperty-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/newproperty/newproperty-routing.module */
          "fOEd")).then(function (m) {
            return m.NewpropertyRoutingModule;
          });
        },
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'newproperty/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-newproperty-newproperty-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"), __webpack_require__.e("modules-newproperty-newproperty-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/newproperty/newproperty-routing.module */
          "fOEd")).then(function (m) {
            return m.NewpropertyRoutingModule;
          });
        },
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'version',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-utility-utility-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-utility-utility-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/utility/utility-routing.module */
          "W7dZ")).then(function (m) {
            return m.UtilityRoutingModule;
          });
        }
      }, {
        path: '**',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-error-error-routing-module */
          [__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null,
          /*! modules/error/error-routing.module */
          "1nNA")).then(function (m) {
            return m.ErrorRoutingModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        providers: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map