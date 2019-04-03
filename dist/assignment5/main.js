(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");









var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"] },
    { path: 'employee/:_id', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
    { path: 'position/:_id', component: _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"] },
    { path: 'positions', component: _positions_positions_component__WEBPACK_IMPORTED_MODULE_6__["PositionsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'assignment5';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employees.service */ "./src/app/employees.service.ts");















// import { FormsModule } from '@angular/forms';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
                _positions_positions_component__WEBPACK_IMPORTED_MODULE_10__["PositionsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_14__["PositionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [_employees_service__WEBPACK_IMPORTED_MODULE_16__["EmployeesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"color-border\"> </div>\n<router-outlet></router-outlet>\n<div class=\"color-border\"> </div>"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/EmployeeRaw.ts":
/*!*************************************!*\
  !*** ./src/app/data/EmployeeRaw.ts ***!
  \*************************************/
/*! exports provided: EmployeeRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRaw", function() { return EmployeeRaw; });
var EmployeeRaw = /** @class */ (function () {
    function EmployeeRaw() {
    }
    return EmployeeRaw;
}());



/***/ }),

/***/ "./src/app/data/Positions.ts":
/*!***********************************!*\
  !*** ./src/app/data/Positions.ts ***!
  \***********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top: 40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGdCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIgeyBtYXJnaW4tdG9wOiA0MHB4OyB9Il19 */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"center\">\n  <h2>Employee: {{employee.FirstName}} {{employee.LastName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n        <div class=\"row\">\n          \n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': FirstName.errors}\">\n              <label for=\"FirstName\">First Name:</label>\n              <input #FirstName=\"ngModel\" class=\"form-control\" id=\"FirstName\" type=\"text\" name=\"FirstName\"\n                [(ngModel)]=\"employee.FirstName\" required autofocus />\n              <span class=\"helper\" *ngIf=\"FirstName.errors && FirstName.errors.required\"> First Name is Required</span>\n            </div>\n          </div>\n\n         \n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': LastName.errors}\">\n              <label for=\" LastName\">Last Name:</label>\n              <input #LastName=\"ngModel\" class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\"\n                [(ngModel)]=\"employee.LastName\" required />\n              <span class=\"helper\" *ngIf=\"LastName.errors && LastName.errors.required\"> Last Name is Required</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n        \n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"Position\">Position:</label>\n              <select class=\"form-control\" id=\"Position\" name=\"Position\" [(ngModel)]=\"employee.Position\">\n                <option *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.PositionName}}</option>\n              </select>\n            </div>\n          </div>\n\n          \n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"bonus.errors\">\n              <label for=\"SalaryBonus\" class=\"control-label\">Salary Bonus</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">$</span>\n                <input #bonus=\"ngModel\" [(ngModel)]=\"employee.SalaryBonus\" class=\"form-control\" id=\"SalaryBonus\" type=\"text\"\n                  name=\"SalaryBonus\" pattern=\"\\d+\" required />\n              </div>\n              <span class=\"help-block\" *ngIf=\"bonus.errors && bonus.errors.required\">Salary Bonus is required</span>\n              <span class=\"help-block\" *ngIf=\"bonus.errors && bonus.errors.pattern\">Salary Bonus must be a number</span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\"  [ngClass]=\"{'form-group has-error': AddressStreet.errors}\">\n              <label for=\"AddressStreet\">Address (Street):</label>\n              <input #AddressStreet=\"ngModel\" class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\"\n                [(ngModel)]=\"employee.AddressStreet\" required />\n              <span class=\"helper\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Address Street is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressCity.errors}\">\n              <label for=\"AddressCity\">Address (City):</label>\n              <input #AddressCity=\"ngModel\" class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\"\n                [(ngModel)]=\"employee.AddressCity\" required />\n              <span class=\"helper\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">Address city is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressState.errors}\">\n              <label for=\"AddressState\">Address (State):</label>\n              <input #AddressState=\"ngModel\" class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\"\n                [(ngModel)]=\"employee.AddressState\" required />\n              <span class=\"helper\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Address state is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressZip.errors}\">\n              <label for=\"AddressZip\">Address (Zip Code):</label>\n              <input #AddressZip=\"ngModel\" class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\"\n                [(ngModel)]=\"employee.AddressZip\" required />\n              <span class=\"helper\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">Address zip is\n                Required</span>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PhoneNum.errors}\">\n              <label for=\"PhoneNum\">Phone Number:</label>\n              <input #PhoneNum=\"ngModel\" class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\"\n                [(ngModel)]=\"employee.PhoneNum\"\n                pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\" required/>\n            </div>\n            <div>\n              <span class=\"helper\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.required\">Phone Number is Required</span>\n                <span class=\"helper\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.pattern\">Phone Number Pattern Must Match</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': Extension.errors}\">\n              <label for=\"Extension\">Extension:</label>\n              <input #Extension=\"ngModel\" class=\"form-control\" id=\"Extension\" type=\"Number\" name=\"Extension\"\n                [(ngModel)]=\"employee.Extension\" required />\n              <span class=\"helper\" *ngIf=\"Extension.errors && Extension.errors.required\">Extension is Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"HireDate\">Hire Date:</label>\n              <input class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"HireDate\"\n                [ngModel]=\"employee.HireDate|date:'longDate'\" readonly />\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a [routerLink]=\"['/employees']\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" [disabled]=\"!form.valid\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"successMessage==true&&employee\">\n    <strong>Success!</strong> {{ employee.FirstName }}&nbsp;{{ employee.LastName }}'s information was successfully\n    saved.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage==true&&employee\">\n    <strong>Error!</strong> {{ employee.FirstName }}&nbsp;{{ employee.LastName }}'s information could not be saved.\n  </div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_EmployeeRaw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/EmployeeRaw */ "./src/app/data/EmployeeRaw.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employees.service */ "./src/app/employees.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../position.service */ "./src/app/position.service.ts");






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(route, employeeService, positionService) {
        this.route = route;
        this.employeeService = employeeService;
        this.positionService = positionService;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employee = new _data_EmployeeRaw__WEBPACK_IMPORTED_MODULE_2__["EmployeeRaw"]();
        this.paramSubScription = this.route.params.subscribe(function (params) { return _this.id = params['_id']; }, function (err) { return console.log("unable to get id parameter"); });
        this.employeeSubscription = this.employeeService.getEmployee(this.id).subscribe(function (employees) { return _this.employee = employees[0]; }, function (err) { return console.log("unable to get employee"); });
        this.getPositionsSub = this.positionService.getPositions().subscribe(function (pos) { return _this.positions = pos; }, function (err) { return console.log("unable to get positions"); });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"], _position_service__WEBPACK_IMPORTED_MODULE_5__["PositionService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees.service.ts":
/*!**************************************!*\
  !*** ./src/app/employees.service.ts ***!
  \**************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeesService = /** @class */ (function () {
    function EmployeesService(http) {
        this.http = http;
    }
    EmployeesService.prototype.getEmployees = function () {
        return this.http.get('http://app-web422.herokuapp.com/employees');
    };
    EmployeesService.prototype.saveEmployee = function (employee) {
        return this.http.put('http://app-web422.herokuapp.com/employee/' + employee._id, employee);
    };
    EmployeesService.prototype.getEmployee = function (id) {
        // console.log("gand ma bhadako" + id);
        return this.http.get("http://app-web422.herokuapp.com/employee-raw/" + id);
    };
    EmployeesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsZUFBZSxFQUFFO0FBQzFCLGtCQUFrQixrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7IG1hcmdpbi10b3A6NDBweDsgfVxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\"\n        placeholder=\"Search Employees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUp($event)\" /><br />\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n            <td>Full Name</td>\n            <td>Address</td>\n            <td>Phone Number</td>\n            <td>Hire Date</td>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\" [hidden]=\"hidden\">\n              <td>{{ employee.FirstName }} {{ employee.LastName }}</td>\n              <td>{{ employee.AddressStreet }} . {{ employee.AddressState }}, {{ employee.AddressCity }}.\n                {{ employee.AddressZip }}</td>\n              <td>{{ employee.PhoneNum }} ext: {{ employee.Extension }}</td>\n              <td>{{ employee.HireDate | date:'longDate'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div> -->\n\n<div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\"\n        placeholder=\"Search Employees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n            <td>Full Name</td>\n            <td>Address</td>\n            <td>Phone Number</td>\n            <td>Hire Date</td>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\">\n              <td>{{ employee.FirstName }} {{ employee.LastName }}</td>\n              <td>{{ employee.AddressStreet }}. {{ employee.AddressState }}, {{ employee.AddressCity }}.\n                {{ employee.AddressZip }}</td>\n              <td>{{ employee.PhoneNum }} ext: {{ employee.Extension }}</td>\n              <td>{{ employee.HireDate | date:'longDate'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employees.service */ "./src/app/employees.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(e, router) {
        this.e = e;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("ngOnInit employees component ts");
        this.getEmployeesSub = this.e.getEmployees().subscribe(function (data) {
            _this.employees = data;
            _this.filteredEmployees = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['employee', id]);
        // console.log("tr clicked");
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var substring = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (em) {
            return ((em.FirstName.toLowerCase().indexOf(substring) != -1) ||
                (em.LastName.toLowerCase().indexOf(substring) != -1) ||
                (em.Position["PositionName"].toLowerCase().indexOf(substring) != -1));
        });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeesSub != 'undefined') {
            this.getEmployeesSub.unsubscribe();
        }
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2019 Harsh Tuwar. Design by <a\n          href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\"\n            href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\"\n            href=\"#\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n padding: 70px 0;\n}\n.no-margin {\n margin: 0;\n padding: 0;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiBwYWRkaW5nOiA3MHB4IDA7XG59XG4ubm8tbWFyZ2luIHtcbiBtYXJnaW46IDA7XG4gcGFkZGluZzogMDtcbn0gIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <section id=\"main-slider\" class=\"no-margin\">\n        <div class=\"carousel slide\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n            <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"item active\" style=\"background-image: url(assets/images/slider/bg1.jpg)\">\n              <div class=\"container\">\n                <div class=\"row slide-margin\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"carousel-content\">\n                      <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-code\"></i> API Demo</span></h1>\n                      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt\n                        laoreet</h2>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--/.item-->\n      \n            <div class=\"item\" style=\"background-image: url(assets/images/slider/bg2.jpg)\">\n              <div class=\"container\">\n                <div class=\"row slide-margin\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"carousel-content\">\n                      <h1>Typi non habent claritatem insitam</h1>\n                      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt\n                        laoreet</h2>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--/.item-->\n      \n            <div class=\"item\" style=\"background-image: url(assets/images/slider/bg3.jpg)\">\n              <div class=\"container\">\n                <div class=\"row slide-margin\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"carousel-content\">\n                      <h1>Mirum est notare quam littera gothica</h1>\n                      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt\n                        laoreet</h2>\n                      \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--/.item-->\n          </div>\n          <!--/.carousel-inner-->\n        </div>\n        <!--/.carousel-->\n        <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a\n          class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a>\n      </section>\n      <!--/#main-slider-->\n      <div class=\"color-border\"> </div>\n      <section id=\"feature\">\n        <div class=\"container\">\n          <div class=\"center\">\n            <h2>Featured Services</h2>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique\n              bibendum. Nunc quis semper sem.<br>\n              Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n          </div>\n          <div class=\"row\">\n            <div class=\"features\">\n              <div class=\"col-md-6 col-sm-6\">\n                <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n                  <h2>Employees</h2>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n                </div>\n              </div>\n              <!--/.col-md-4-->\n      \n              <div class=\"col-md-6 col-sm-6\">\n                <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\"></i>\n                  <h2>Positions</h2>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n                </div>\n              </div>  \n              <!--/.col-md-4-->\n            </div>\n            <!--/.services-->\n          </div>\n          <!--/.row-->\n        </div>\n        <!--/.container-->\n      </section>\n      <!--/#feature-->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span\n            class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span\n            class=\"icon-bar\"></span> </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\"><i class=\"fa fa-code\"></i> Harsh Tuwar (API Demo)</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html{\n  margin: 0 auto;\n  padding: 0;\n  font-weight: 800;\n}\n\nbody{\n  background: white;\n  font-family: cursive;\n}\n\nsvg {\n    display: block;\n    font: 10.5em 'Monoton';\n    width: 960px;\n    height: 300px;\n    margin: 0 auto;\n}\n\n.content{\n  text-align: center;\n}\n\nh1{\n  text-align: center;\n  font: 2em 'Roboto', sans-serif;\n  font-weight: 900;\n  color: #2f8f7f;\n  opacity: .6;\n}\n\na{\n   display: inline-block;\n   text-transform: uppercase;\n   font: 1em 'Roboto';\n   font-weight: 300;\n   border: 1px solid #2f8f7f;\n   border-radius: 4px;\n   color: #2f8f7f;\n   margin-top: 10%;\n   padding: 8px 14px;\n   text-decoration: none;\n   opacity: .6;\n}\n\n.text {\n    fill: none;\n    stroke: white;\n    stroke-dasharray: 8% 29%;\n    stroke-width: 5px;\n    stroke-dashoffset: 1%;\n    -webkit-animation: stroke-offset 5.5s infinite linear;\n            animation: stroke-offset 5.5s infinite linear;\n}\n\n.text:nth-child(1){\n\tstroke: #1c234d;\n\t-webkit-animation-delay: -1;\n\t        animation-delay: -1;\n}\n\n.text:nth-child(2){\n\tstroke: #315b2c;\n\t-webkit-animation-delay: -2s;\n\t        animation-delay: -2s;\n}\n\n.text:nth-child(3){\n\tstroke: #2f8f7f;\n\t-webkit-animation-delay: -3s;\n\t        animation-delay: -3s;\n}\n\n.text:nth-child(4){\n\tstroke: #2f8f7f;\n\t-webkit-animation-delay: -4s;\n\t        animation-delay: -4s;\n}\n\n.text:nth-child(5){\n\tstroke: #da2717;\n\t-webkit-animation-delay: -5s;\n\t        animation-delay: -5s;\n}\n\n@-webkit-keyframes stroke-offset{\n\t100% {\n    stroke-dashoffset: -35%;\n  }\n}\n\n@keyframes stroke-offset{\n\t100% {\n    stroke-dashoffset: -35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtHQUNHLHFCQUFxQjtHQUNyQix5QkFBeUI7R0FDekIsa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQix5QkFBeUI7R0FDekIsa0JBQWtCO0dBQ2xCLGNBQWM7R0FDZCxlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLHFCQUFxQjtHQUNyQixXQUFXO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHFEQUE2QztZQUE3Qyw2Q0FBNkM7QUFDakQ7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMkJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZiw0QkFBb0I7U0FBcEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLDRCQUFvQjtTQUFwQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNEJBQW9CO1NBQXBCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZiw0QkFBb0I7U0FBcEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0M7SUFDRyx1QkFBdUI7RUFDekI7QUFDRjs7QUFKQTtDQUNDO0lBQ0csdUJBQXVCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmJvZHl7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250OiAxMC41ZW0gJ01vbm90b24nO1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGVudHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250OiAyZW0gJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMmY4ZjdmO1xuICBvcGFjaXR5OiAuNjtcbn1cblxuYXtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICBmb250OiAxZW0gJ1JvYm90byc7XG4gICBmb250LXdlaWdodDogMzAwO1xuICAgYm9yZGVyOiAxcHggc29saWQgIzJmOGY3ZjtcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIGNvbG9yOiAjMmY4ZjdmO1xuICAgbWFyZ2luLXRvcDogMTAlO1xuICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICBvcGFjaXR5OiAuNjtcbn1cblxuLnRleHQge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4JSAyOSU7XG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDElO1xuICAgIGFuaW1hdGlvbjogc3Ryb2tlLW9mZnNldCA1LjVzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLnRleHQ6bnRoLWNoaWxkKDEpe1xuXHRzdHJva2U6ICMxYzIzNGQ7XG5cdGFuaW1hdGlvbi1kZWxheTogLTE7XG59XG5cbi50ZXh0Om50aC1jaGlsZCgyKXtcblx0c3Ryb2tlOiAjMzE1YjJjO1xuXHRhbmltYXRpb24tZGVsYXk6IC0ycztcbn1cblxuLnRleHQ6bnRoLWNoaWxkKDMpe1xuXHRzdHJva2U6ICMyZjhmN2Y7XG5cdGFuaW1hdGlvbi1kZWxheTogLTNzO1xufVxuXG4udGV4dDpudGgtY2hpbGQoNCl7XG5cdHN0cm9rZTogIzJmOGY3Zjtcblx0YW5pbWF0aW9uLWRlbGF5OiAtNHM7XG59XG5cbi50ZXh0Om50aC1jaGlsZCg1KXtcblx0c3Ryb2tlOiAjZGEyNzE3O1xuXHRhbmltYXRpb24tZGVsYXk6IC01cztcbn1cblxuQGtleWZyYW1lcyBzdHJva2Utb2Zmc2V0e1xuXHQxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1JTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<h1>Page not found</h1> -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <svg viewBox=\"0 0 960 300\">\n                <symbol id=\"s-text\">\n                    <text text-anchor=\"middle\" x=\"50%\" y=\"80%\">404</text>\n                </symbol>\n            \n                <g class=\"g-ants\">\n                    <use xlink:href=\"#s-text\" class=\"text\"></use>\n                    <use xlink:href=\"#s-text\" class=\"text\"></use>\n                    <use xlink:href=\"#s-text\" class=\"text\"></use>\n                    <use xlink:href=\"#s-text\" class=\"text\"></use>\n                    <use xlink:href=\"#s-text\" class=\"text\"></use>\n                </g>\n            </svg>\n            <div class=\"content\">\n                <h1>Page Not Found</h1>\n                <a routerLink=\"/home\">Back to Home</a>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position.service.ts":
/*!*************************************!*\
  !*** ./src/app/position.service.ts ***!
  \*************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get('http://app-web422.herokuapp.com/positions');
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put("http://app-web422.herokuapp.com/position/" + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        // console.log("getPosition inside position service ts");
        return this.http.get("http://app-web422.herokuapp.com/position/" + id);
    };
    PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/position/position.component.css":
/*!*************************************************!*\
  !*** ./src/app/position/position.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top: 40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGdCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIgeyBtYXJnaW4tdG9wOiA0MHB4OyB9Il19 */"

/***/ }),

/***/ "./src/app/position/position.component.html":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Position: {{position.PositionName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [class.has-error]=\"name.errors\">\n              <label for=\"PositionName\">Position Name:</label>\n              <input #name=\"ngModel\" [(ngModel)]=\"position.PositionName\" class=\"form-control\" id=\"PositionName\" type=\"text\"\n                name=\"PositionName\" required />\n              <span class=\"help-block\" *ngIf=\"name.errors && name.errors.required\">Position name is required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionDescription.errors}\">\n              <label for=\"PositionDescription\">Description:</label>\n              <textarea #PositionDescription=\"ngModel\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" [(ngModel)]=\"position.PositionDescription\" required></textarea>\n              <span class=\"helper\" *ngIf=\"PositionDescription.errors && PositionDescription.errors.required\">Position Description is required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a [routerLink]=\"['/positions']\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" [disabled]=\"!form.valid\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"successMessage==true&&position\">\n    <strong>Success!</strong> Position: {{position.PositionName}} was successfully saved.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"failMessage==true&&position\">\n    <strong>Error!</strong> Position: {{position.PositionName}} could not be saved.\n  </div>\n</div>\n<br /><br />\n"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_Positions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/Positions */ "./src/app/data/Positions.ts");





var PositionComponent = /** @class */ (function () {
    function PositionComponent(positionService, route) {
        this.positionService = positionService;
        this.route = route;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.position = new _data_Positions__WEBPACK_IMPORTED_MODULE_4__["Position"]();
        // console.log("inside position ts ngOnInit");
        this.paramSubscription = this.route.params.subscribe(function (params) { return _this.id = params['_id']; }, function (err) { return console.log("unable to get id parameter"); });
        this.positionSubscription = this.positionService.getPosition(this.id).subscribe(function (position) { return _this.position = position[0]; }, function (err) { return console.log("unable to get position"); });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnSubmit = function () {
        var _this = this;
        this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions/positions.component.css":
/*!***************************************************!*\
  !*** ./src/app/positions/positions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zL3Bvc2l0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsZUFBZSxFQUFFO0FBQzFCLGtCQUFrQixrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9ucy9wb3NpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7IG1hcmdpbi10b3A6NDBweDsgfVxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/positions/positions.component.html":
/*!****************************************************!*\
  !*** ./src/app/positions/positions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"center\">\n    <h2>Positions</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique\n      bibendum.<br>\n      Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n<div class=\"table-responsive\">\n  <table class=\"table table-condensed table-hover\">\n    <thead>\n      <th>Position Title</th>\n      <th>Position Description</th>\n      <th>Salary</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of positions\" (click)=\"routePosition(p._id)\">\n        <td>{{p.PositionName}}</td>\n        <td>{{p.PositionDescription}}</td>\n        <td>${{p.PositionBaseSalary | number:'.2'}} </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/positions/positions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/positions/positions.component.ts ***!
  \**************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(ps, router) {
        this.ps = ps;
        this.router = router;
        this.positions = [];
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("insed ngOnInit");
        this.getPositionSub = this.ps.getPositions()
            .subscribe(function (positions) { return _this.positions = positions; }, function (e) { this.loadingError = true; });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(['/position', id]);
        // console.log("tr clicked");
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        if (this.getPositionSub) {
            this.getPositionSub.unsubscribe();
        }
        ;
    };
    PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions/positions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HEDES/GitVersionOfA6/assignment6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map