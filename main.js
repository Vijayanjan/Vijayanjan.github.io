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



var routes = [];
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

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'VIDEO-LIST';
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbCell {\r\n    display: table-cell;\r\n  width: 500px;\r\n    padding: 10px;\r\n  }\r\n  .heading{\r\n    font-family: fantasy;\r\n    text-align: center;\r\n  }\r\n  .bg-img {\r\n    background-image: url(\"https://previews.123rf.com/images/ratanakhailee/ratanakhailee1506/ratanakhailee150600568/41612694-grunge-background-texture-gradient-color.jpg\");\r\n    min-height: 380px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n  .pagger{\r\n    text-align: center;\r\n  }\r\n  a {\r\n    -webkit-text-decoration: royalblue;\r\n            text-decoration: royalblue;\r\n    display: inline-block;\r\n    padding: 8px 16px;\r\n    align-self: center;\r\n  }\r\n  a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  .previous {\r\n    background-color: #f1f1f1;\r\n    color: black;\r\n  }\r\n  .next {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  .page-footer {\r\n    background:#333333;\r\n    margin-left:auto;\r\n    text-align: center;\r\n    margin-right:auto;\r\n    margin-top:2em;\r\n    padding: 1%;\r\n}\r\n  .footer1{\r\n  color: white;\r\n}\r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7RUFDdEIsYUFBYTtJQUNYLGNBQWM7R0FDZjtFQUNEO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0Usd0tBQXdLO0lBQ3hLLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtHQUNwQjtFQUNBO0lBQ0MsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZDtFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7R0FDZDtFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7R0FDZDtFQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0NBQ2Y7RUFDRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1iQ2VsbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5ne1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wcmV2aWV3cy4xMjNyZi5jb20vaW1hZ2VzL3JhdGFuYWtoYWlsZWUvcmF0YW5ha2hhaWxlZTE1MDYvcmF0YW5ha2hhaWxlZTE1MDYwMDU2OC80MTYxMjY5NC1ncnVuZ2UtYmFja2dyb3VuZC10ZXh0dXJlLWdyYWRpZW50LWNvbG9yLmpwZ1wiKTtcclxuICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5wYWdnZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiByb3lhbGJsdWU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnByZXZpb3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5uZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5wYWdlLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMzMzMzM7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjJlbTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcbi5mb290ZXIxe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <form style=\"margin:auto;max-width:300px;position: absolute; right: 0\">\n    <input type=\"text\" placeholder=\"Search..\" name=\"search2\">\n    <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n  </form>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\">More</a>\n      <a class=\"nav-item nav-link\" >About us</a>\n      <a class=\"nav-item nav-link\">Help</a>\n    </div>\n  </div>\n</nav>\n<div class=\"bg-img\">\n    <div class=\"caption center-align\">\n      </div>  \n<h1 class=\"heading\">VIDEO-LIST</h1><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n        <div class=\"thumbCell\">\n      <h2>1.<video id=\"video\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video></h2><br>\n       <i><b>TITLE: (NEXUS Q)<br>DESCRIPTION: </b></i>Image result for nexus q description\n       Each Nexus Q device is designed to control the equipment in one room: speakers, AV systems, TVs, and more. Each room with a Nexus Q appears in the Nexus Q app, where you can control what's playing and at what volume, or (for music only) stream to multiple rooms at the same time.<br>\n      (mpd only)\n    </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"thumbCell\">\n            <h2>2.<video id=\"video2\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video></h2><br>\n      <i><b>TITLE: (A SELF-DRIVING CAR)<br>DESCRIPTION: </b></i>A self-driving car (sometimes called an autonomous car or driverless car) is a vehicle that uses a combination of sensors, cameras, radar and artificial intelligence (AI) to travel between destinations without a human operator.<br>\n     (mpd only)\n    </div>\n    </div>\n    <div class=\"w-100\"></div>\n    <div class=\"col\"> \n        <div class=\"thumbCell\">\n            <h2>3.<video id=\"video3\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video></h2><br>\n      <i><b>TITLE: (GOOGLE GLASS)<br>DESCRIPTION:</b></i> Google Glass is a wearable, voice-controlled Android device that resembles a pair of eyeglasses and displays information directly in the user's field of vision.<br>\n     (mpd only)\n    </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"thumbCell\"> \n            <h2>4.<video id=\"video4\"\n      width=\"100%\"\n      poster=\"//shaka-player-demo.appspot.com/assets/poster.jpg\"\n      controls play></video></h2><br>\n      <i><b>TITLE: (GMAIL MOTION)<br>DESCRIPTION: </b></i>The mouse and keyboard were invented before the Internet even existed. Since then, countless technological advancements have allowed for much more efficient human computer interaction. Why then do we continue to use outdated technology? Introducing Gmail Motion -- now you can control Gmail with your body.<br>\n     (mpd only)\n    </div>\n    </div>\n  </div>\n  </div>\n  <br>\n  <div class=\"pagger\">\n<a  class=\"previous\">&laquo; Previous</a>\n<a  class=\"next\">Next &raquo;</a>\n</div>\n  <footer class=\"page-footer\">\n      <div class=\"col m4 l4 logo\">\n          <img src=\"data:image/jpeg;base64,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\" alt=\"Mobiotics\" class=\"responsive-img\" width=\"15%\" height=\"15%\" title=\"Mobiotics\">\n      </div>\n      <div class=\"footer1\">\n\t\t<div>\n\t\t© Copyright. All rights reserved.\n\t\t</div>\n\t</div>\n</footer>\n\n  \n\n\n\n"

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
        this.myurl = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd';
        this.manifestUri = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/oops-20120802-manifest.mpd';
        this.myurl2 = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/feelings_vp9-20130806-manifest.mpd';
        this.myurl3 = 'https://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-manifest.mpd';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initApp();
    };
    HomeComponent.prototype.initApp = function () {
        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();
        // Check to see if the browser supports the basic APIs Shaka needs.
        if (shaka.Player.isBrowserSupported()) {
            // Everything looks good!
            this.initPlayer();
            this.initPlayer2();
            this.initPlayer3();
            this.initPlayer4();
        }
        else {
            // This browser does not have the minimum set of APIs we need.
            console.error('Browser not supported!');
        }
    };
    HomeComponent.prototype.initPlayer = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.manifestUri).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent.prototype.initPlayer2 = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video2');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent2);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.myurl).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError2(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent2 = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError2 = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent.prototype.initPlayer3 = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video3');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent3);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.myurl2).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError3(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent3 = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError3 = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    };
    HomeComponent.prototype.initPlayer4 = function () {
        var _this = this;
        // Create a Player instance.
        var video = document.getElementById('video4');
        var player = new shaka.Player(video);
        // Attach player to the window to make it easy to access in the JS console.
        //window.player = player;
        // Listen for error events.
        player.addEventListener('error', this.onErrorEvent4);
        // Try to load a manifest.
        // This is an asynchronous process.
        player.load(this.myurl3).then(function () {
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        }).catch(function (error) { _this.onError4(error); }); // onError is executed if the asynchronous load fails.
    };
    HomeComponent.prototype.onErrorEvent4 = function (event) {
        // Extract the shaka.util.Error object from the event.
        this.onError(event.detail);
    };
    HomeComponent.prototype.onError4 = function (error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
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

module.exports = __webpack_require__(/*! C:\Users\Shruthi Gowda\video-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map