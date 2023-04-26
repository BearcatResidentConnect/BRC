(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\S547187\Desktop\Work\BRC\ui\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "LonY":
/*!***************************************************!*\
  !*** ./src/modules/auth/services/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/services/token-storage.service */ "qTWo");





// const AUTH_API = 'http://18.207.93.25:5000/api';
// const AUTH_API  = 'http://192.168.1.23:5000/api';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
let AuthService = class AuthService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.refreshToken = 'refreshToken';
        this.access_token = localStorage.getItem('access_token');
    }
    login(user_name, password) {
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
        const formData = new FormData();
        formData.append('username', user_name);
        formData.append('password', password);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ enctype: 'multipart/form-data' });
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/users/auth/token', formData, { headers });
    }
    getUserDetails(user_name) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/users/' + user_name);
    }
    getToken() {
        return localStorage.getItem('accessToken');
    }
    register(user_name, sid, first_name, last_name, email, password) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].basePath + '/user', {
            user_name,
            sid,
            first_name,
            last_name,
            email,
            password,
        }, httpOptions);
    }
    IsLoggedIn() {
        return !!this.tokenStorage.getToken('access_token');
    }
    GetToken() {
        return localStorage.getItem('access_token') || '';
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])
], AuthService);



/***/ }),

/***/ "NftP":
/*!********************************************************!*\
  !*** ./src/modules/auth/services/token-interceptor.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "LonY");
/* harmony import */ var _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/token-storage.service */ "qTWo");




let TokenInterceptor = class TokenInterceptor {
    constructor(inject, tokenStorage, auth) {
        this.inject = inject;
        this.tokenStorage = tokenStorage;
        this.auth = auth;
    }
    intercept(req, next) {
        let key = this.tokenStorage.getToken('access_token');
        if (key) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${key}` }
            });
        }
        //     let authservice = this.inject.get(AuthService);
        //     let jwtToken = req.clone ({
        //     setHeaders: {
        //         Authorization: 'bearer ' + this.tokenStorage.getToken('access_token'),
        //     }
        //  });
        return next.handle(req);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], TokenInterceptor);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let AppComponent = class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.title = 'sb-admin-angular';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildActivationEnd"]))
            .subscribe(event => {
            let snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            this.titleService.setTitle(snapshot.data.title || 'BRC');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WVvL":
/*!***********************************************!*\
  !*** ./src/modules/auth/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "LonY");




let AuthGuard = class AuthGuard {
    constructor(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    canActivate() {
        if (this.auth.IsLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['../auth/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _modules_auth_services_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/auth/services/token-interceptor */ "NftP");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modules_auth_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/auth/guards */ "olz4");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "7O5W");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");





// import { ToastrModule } from 'ngx-toastr';










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fas"]);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _modules_auth_services_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"], multi: true }, _modules_auth_guards__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "olz4":
/*!******************************************!*\
  !*** ./src/modules/auth/guards/index.ts ***!
  \******************************************/
/*! exports provided: guards, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "WVvL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });


const guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]];



/***/ }),

/***/ "qTWo":
/*!************************************************************!*\
  !*** ./src/modules/auth/services/token-storage.service.ts ***!
  \************************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    }
    setToken(key, token) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, token);
    }
    getToken(key) {
        return window.sessionStorage.getItem(key);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
};
TokenStorageService.ctorParameters = () => [];
TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TokenStorageService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/guards/auth.guard */ "WVvL");




const routes = [
    {
        path: '',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'profile',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-profile-profile-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("common"), __webpack_require__.e("modules-profile-profile-routing-module")]).then(__webpack_require__.bind(null, /*! @modules/profile/profile-routing.module */ "qTM7")).then(m => m.ProfileRoutingModule),
    },
    {
        path: 'changepassword',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-changepassword-changepassword-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-changepassword-changepassword-routing-module")]).then(__webpack_require__.bind(null, /*! @modules/changepassword/changepassword-routing.module */ "82Ww")).then(m => m.ChangepasswordRoutingModule),
    },
    {
        path: 'myuserlistings',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-myuserlistings-myuserlistings-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-myuserlistings-myuserlistings-routing-module")]).then(__webpack_require__.bind(null, /*! modules/myuserlistings/myuserlistings-routing.module */ "PmoG")).then(m => m.MyuserlistingsRoutingModule),
    },
    {
        path: 'myuserlistingsdetail/:id',
        loadChildren: () => Promise.all(/*! import() | modules-myuserlistingsdetail-myuserlistingsdetail-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-myuserlistingsdetail-myuserlistingsdetail-routing-module")]).then(__webpack_require__.bind(null, /*! modules/myuserlistingsdetail/myuserlistingsdetail-routing.module */ "Kajr")).then(m => m.MyuserlistingsdetailRoutingModule),
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'updnewproperty',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-updnewproperty-updnewproperty-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-updnewproperty-updnewproperty-routing-module")]).then(__webpack_require__.bind(null, /*! modules/updnewproperty/updnewproperty-routing.module */ "LyxQ")).then(m => m.UpdnewpropertyRoutingModule),
    },
    {
        path: 'updnewproperty/:id',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-updnewproperty-updnewproperty-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-updnewproperty-updnewproperty-routing-module")]).then(__webpack_require__.bind(null, /*! modules/updnewproperty/updnewproperty-routing.module */ "LyxQ")).then(m => m.UpdnewpropertyRoutingModule),
    },
    {
        path: 'userlistings',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-userlistings-userlistings-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-userlistings-userlistings-routing-module")]).then(__webpack_require__.bind(null, /*! modules/userlistings/userlistings-routing.module */ "OcoX")).then(m => m.UserlistingsRoutingModule),
    },
    {
        path: 'rentallistings',
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | modules-rentallistings-rentallistings-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-rentallistings-rentallistings-routing-module")]).then(__webpack_require__.bind(null, /*! modules/rentallistings/rentallistings-routing.module */ "43zm")).then(m => m.RentallistingsRoutingModule),
    },
    {
        path: 'userlistingsdetail/:id',
        loadChildren: () => Promise.all(/*! import() | modules-userlistingsdetail-userlistingsdetail-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-userlistingsdetail-userlistingsdetail-routing-module")]).then(__webpack_require__.bind(null, /*! modules/userlistingsdetail/userlistingsdetail-routing.module */ "Z5z4")).then(m => m.UserlistingsdetailRoutingModule),
    },
    {
        path: 'rentallistingsdetail/:id',
        loadChildren: () => Promise.all(/*! import() | modules-rentallistingsdetail-rentallistings-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-rentallistingsdetail-rentallistings-routing-module")]).then(__webpack_require__.bind(null, /*! @modules/rentallistingsdetail/rentallistings-routing.module */ "X43j")).then(m => m.RentallistingsdetailRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | modules-dashboard-dashboard-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-dashboard-dashboard-routing-module")]).then(__webpack_require__.bind(null, /*! modules/dashboard/dashboard-routing.module */ "IlwM")).then(m => m.DashboardRoutingModule),
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-auth-auth-routing-module")]).then(__webpack_require__.bind(null, /*! modules/auth/auth-routing.module */ "DrEB")).then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () => Promise.all(/*! import() | modules-error-error-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null, /*! modules/error/error-routing.module */ "1nNA")).then(m => m.ErrorRoutingModule),
    },
    {
        path: 'newproperty',
        loadChildren: () => Promise.all(/*! import() | modules-newproperty-newproperty-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"), __webpack_require__.e("modules-newproperty-newproperty-routing-module")]).then(__webpack_require__.bind(null, /*! modules/newproperty/newproperty-routing.module */ "fOEd")).then(m => m.NewpropertyRoutingModule),
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'newproperty/:id',
        loadChildren: () => Promise.all(/*! import() | modules-newproperty-newproperty-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-newproperty-newproperty-routing-module"), __webpack_require__.e("modules-newproperty-newproperty-routing-module")]).then(__webpack_require__.bind(null, /*! modules/newproperty/newproperty-routing.module */ "fOEd")).then(m => m.NewpropertyRoutingModule),
        canActivate: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'version',
        loadChildren: () => Promise.all(/*! import() | modules-utility-utility-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-utility-utility-routing-module")]).then(__webpack_require__.bind(null, /*! modules/utility/utility-routing.module */ "W7dZ")).then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() | modules-error-error-routing-module */[__webpack_require__.e("default~modules-auth-auth-routing-module~modules-changepassword-changepassword-routing-module~module~1e01d149"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null, /*! modules/error/error-routing.module */ "1nNA")).then(m => m.ErrorRoutingModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        providers: [_modules_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map