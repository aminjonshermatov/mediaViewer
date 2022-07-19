"use strict";
(self["webpackChunkmediaViewer"] = self["webpackChunkmediaViewer"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node/node.component */ 6341);
/* harmony import */ var _node_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/gallery-modal/gallery-modal.component */ 7761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', component: _node_node_component__WEBPACK_IMPORTED_MODULE_0__.NodeComponent, pathMatch: 'full' },
    {
        path: ':folderName',
        component: _node_node_component__WEBPACK_IMPORTED_MODULE_0__.NodeComponent,
        children: [
            { path: 'file/:fileId', component: _node_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_1__.GalleryModalComponent, }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [["role", "main", 1, "content"], [1, "app-container"], ["color", "primary"], ["routerLink", "/"], [1, "content-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "header")(3, "mat-toolbar", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Media Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar], styles: [".content-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node/node.component */ 6341);
/* harmony import */ var _node_file_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node/file/file.component */ 2170);
/* harmony import */ var _node_folder_folder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node/folder/folder.component */ 8478);
/* harmony import */ var _node_elevation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node/elevation.directive */ 9277);
/* harmony import */ var _node_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node/gallery-modal/gallery-modal.component */ 7761);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_19__.SwiperModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _node_node_component__WEBPACK_IMPORTED_MODULE_2__.NodeComponent,
        _node_file_file_component__WEBPACK_IMPORTED_MODULE_3__.FileComponent,
        _node_folder_folder_component__WEBPACK_IMPORTED_MODULE_4__.FolderComponent,
        _node_elevation_directive__WEBPACK_IMPORTED_MODULE_5__.ElevationDirective,
        _node_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_6__.GalleryModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_19__.SwiperModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule] }); })();


/***/ }),

/***/ 9277:
/*!*********************************************!*\
  !*** ./src/app/node/elevation.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElevationDirective": () => (/* binding */ ElevationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ElevationDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    ngOnChanges(_changes) {
        this.setElevation(this.defaultElevation);
    }
    onMouseEnter() {
        this.setElevation(this.raisedElevation);
    }
    onMouseLeave() {
        this.setElevation(this.defaultElevation);
    }
    setElevation(amount) {
        Array
            .from(this.element.nativeElement.classList)
            .filter(c => c.startsWith('mat-elevation-z'))
            .forEach(c => this.renderer.removeClass(this.element.nativeElement, c));
        const newClass = `mat-elevation-z${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
ElevationDirective.ɵfac = function ElevationDirective_Factory(t) { return new (t || ElevationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ElevationDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ElevationDirective, selectors: [["", "appElevation", ""]], hostBindings: function ElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 2170:
/*!*********************************************!*\
  !*** ./src/app/node/file/file.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileComponent": () => (/* binding */ FileComponent)
/* harmony export */ });
/* harmony import */ var _gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gallery-modal/gallery-modal.component */ 7761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _elevation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elevation.directive */ 9277);





class FileComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() { }
    openModal() {
        this.dialog.open(_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_0__.GalleryModalComponent, {
            maxHeight: '100vh',
            maxWidth: '100vw',
            height: '80%',
            width: '80%',
        });
    }
}
FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
FileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FileComponent, selectors: [["app-file"]], inputs: { file: "file" }, decls: 5, vars: 1, consts: [["appElevation", "", 3, "click"], ["mat-card-lg-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"]], template: function FileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileComponent_Template_mat_card_click_0_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.file.title, " ");
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitleGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardLgImage, _elevation_directive__WEBPACK_IMPORTED_MODULE_1__.ElevationDirective], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.node[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 4px;\n  height: 99%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  height: calc(100% - 70px);\n}\n\n.log-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJmaWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm9kZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogOTklO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbn1cblxuLmxvZy10ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6YXV0bztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8478:
/*!*************************************************!*\
  !*** ./src/app/node/folder/folder.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderComponent": () => (/* binding */ FolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _elevation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elevation.directive */ 9277);




const _c0 = function (a0) { return [a0]; };
class FolderComponent {
    constructor() { }
    ngOnInit() { }
}
FolderComponent.ɵfac = function FolderComponent_Factory(t) { return new (t || FolderComponent)(); };
FolderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FolderComponent, selectors: [["app-folder"]], inputs: { folder: "folder" }, decls: 5, vars: 4, consts: [["appElevation", "", 3, "routerLink"], ["mat-card-lg-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"]], template: function FolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.folder.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.folder.name, " ");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitleGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardLgImage, _elevation_directive__WEBPACK_IMPORTED_MODULE_0__.ElevationDirective], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.node[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 4px;\n  height: 99%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  height: calc(100% - 70px);\n}\n\n.log-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImZvbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDk5JTtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG59XG5cbi5sb2ctdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOmF1dG87XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"] });


/***/ }),

/***/ 7761:
/*!***************************************************************!*\
  !*** ./src/app/node/gallery-modal/gallery-modal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryModalComponent": () => (/* binding */ GalleryModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node.service */ 174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);










const _c0 = ["swiper"];

function GalleryModalComponent_10_ng_template_0_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
  }

  if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", file_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-src", ctx_r4.baseUrl + "/" + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx_r4.currentFolder$) + "/" + file_r2.id);
  }
}

function GalleryModalComponent_10_ng_template_0_video_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "video", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "source", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Browser not supported ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-poster", ctx_r5.baseUrl + "/" + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, ctx_r5.currentFolder$) + "/" + file_r2.id)("data-src", ctx_r5.baseUrl + "/" + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, ctx_r5.currentFolder$) + "/" + file_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", file_r2.m_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-src", ctx_r5.baseUrl + "/" + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, ctx_r5.currentFolder$) + "/" + file_r2.id);
  }
}

function GalleryModalComponent_10_ng_template_0_audio_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "audio", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "source", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.baseUrl + "/" + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r6.currentFolder$) + "/" + file_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("type", file_r2.m_type);
  }
}

function GalleryModalComponent_10_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleryModalComponent_10_ng_template_0_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.openFile(file_r2.id, file_r2.m_type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Download File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r2.title);
  }
}

function GalleryModalComponent_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GalleryModalComponent_10_ng_template_0_img_0_Template, 2, 4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleryModalComponent_10_ng_template_0_video_1_Template, 6, 10, "video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GalleryModalComponent_10_ng_template_0_audio_2_Template, 4, 4, "audio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GalleryModalComponent_10_ng_template_0_div_3_Template, 7, 1, "div", 9);
  }

  if (rf & 2) {
    const file_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", file_r2.m_type.includes("image/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", file_r2.m_type.includes("video/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", file_r2.m_type.includes("audio/"));
  }
}

function GalleryModalComponent_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GalleryModalComponent_10_ng_template_0_Template, 4, 3, "ng-template", 5);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", true);
  }
}

const _c1 = function () {
  return {
    enabled: true
  };
};

const _c2 = function () {
  return {
    clickable: true
  };
};

const _c3 = function (a0) {
  return {
    swiper: a0
  };
};

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Lazy, swiper__WEBPACK_IMPORTED_MODULE_0__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Keyboard]);
class GalleryModalComponent {
  constructor(nodeService) {
    this.nodeService = nodeService;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
    this.currentFolder$ = this.nodeService.currentFolderSub$.asObservable();
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.files = [];
  }

  ngOnInit() {
    this.nodeService.filesSub$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(files => {
      this.files = files;
    });
  }

  openFile(fileId, type) {
    this.nodeService.getFileBlob(fileId, type + "; charset=utf-8").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(blob => URL.createObjectURL(blob)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(dataObj => window.open(dataObj, '_blank'))).subscribe({});
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}

GalleryModalComponent.ɵfac = function GalleryModalComponent_Factory(t) {
  return new (t || GalleryModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_node_service__WEBPACK_IMPORTED_MODULE_2__.NodeService));
};

GalleryModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalleryModalComponent,
  selectors: [["app-gallery-modal"]],
  viewQuery: function GalleryModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    }
  },
  decls: 11,
  vars: 15,
  consts: [["mat-dialog-title", "", 1, "dialog-title"], ["mat-icon-button", "", "aria-label", "close dialog", "mat-dialog-close", "true"], ["noSwipingClass", "swiper-no-swiping", 1, "mySwiper2", 2, "--swiper-navigation-color", "#fff", "--swiper-pagination-color", "#fff", 3, "spaceBetween", "lazy", "navigation", "mousewheel", "keyboard", "pagination", "thumbs"], ["swiper", ""], [4, "ngFor", "ngForOf"], ["swiperSlide", "", 3, "ngSwitch"], ["class", "swiper-lazy", 3, "alt", 4, "ngSwitchCase"], ["autoplay", "false", "preload", "none", "muted", "muted", "playsinline", "", "controls", "", "class", "swiper-lazy", 4, "ngSwitchCase"], ["controls", "", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "swiper-lazy", 3, "alt"], ["autoplay", "false", "preload", "none", "muted", "muted", "playsinline", "", "controls", "", 1, "swiper-lazy"], [3, "type"], ["controls", ""], [3, "src", "type"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
  template: function GalleryModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 1)(5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-dialog-content")(8, "swiper", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GalleryModalComponent_10_Template, 1, 1, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, ctx.currentFolder$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("spaceBetween", 10)("lazy", true)("navigation", true)("mousewheel", true)("keyboard", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c2))("thumbs", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx.thumbsSwiper));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.files);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchDefault, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, swiper_angular__WEBPACK_IMPORTED_MODULE_11__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_11__.SwiperSlideDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".dialog-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  /* Center slide text vertically */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.swiper-slide img, .swiper-slide video, .swiper-slide audio {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.swiper {\n  width: 100%;\n  height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.swiper-slide {\n  background-size: cover;\n  background-position: center;\n}\n\n.mySwiper2 {\n  height: 80%;\n  width: 100%;\n}\n\n.mySwiper {\n  height: 20%;\n  box-sizing: border-box;\n  padding: 10px 0;\n}\n\n.mySwiper .swiper-slide {\n  width: 25%;\n  height: 100%;\n  opacity: 0.4;\n}\n\n.mySwiper .swiper-slide-thumb-active {\n  opacity: 1;\n}\n\n.swiper-slide img img, .swiper-slide img video, .swiper-slide img audio {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.swiper-button-next, .swiper-button-prev {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsaUNBQUE7RUFJQSxhQUFBO0VBSUEsdUJBQUE7RUFJQSxtQkFBQTtBQUFGOztBQUlFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtBQUZGOztBQU1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFPQTtFQUNFLFlBQUE7QUFKRiIsImZpbGUiOiJnYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3aXBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGltZywgdmlkZW8sIGF1ZGlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLnN3aXBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubXlTd2lwZXIyIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXlTd2lwZXIge1xuICBoZWlnaHQ6IDIwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4ubXlTd2lwZXIgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ubXlTd2lwZXIgLnN3aXBlci1zbGlkZS10aHVtYi1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIGltZywgdmlkZW8sIGF1ZGlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 3985:
/*!*************************************!*\
  !*** ./src/app/node/models/File.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": () => (/* binding */ File)
/* harmony export */ });
class File {
    constructor(data) {
        [this.id, this.title, this.m_type] = data;
    }
}


/***/ }),

/***/ 4363:
/*!*****************************************!*\
  !*** ./src/app/node/models/FileType.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileType": () => (/* binding */ FileType)
/* harmony export */ });
var FileType;
(function (FileType) {
    FileType[FileType["File"] = 0] = "File";
    FileType[FileType["Folder"] = 1] = "Folder";
})(FileType || (FileType = {}));


/***/ }),

/***/ 5729:
/*!***************************************!*\
  !*** ./src/app/node/models/Folder.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Folder": () => (/* binding */ Folder)
/* harmony export */ });
class Folder {
    constructor(folder) {
        [this.name] = folder;
    }
}


/***/ }),

/***/ 6341:
/*!****************************************!*\
  !*** ./src/app/node/node.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeComponent": () => (/* binding */ NodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.service */ 174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file/file.component */ 2170);
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder/folder.component */ 8478);











function NodeComponent_mat_grid_tile_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-file", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("file", file_r1);
  }
}

function NodeComponent_mat_grid_tile_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-folder", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("folder", file_r1);
  }
}

function NodeComponent_mat_grid_tile_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NodeComponent_mat_grid_tile_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NodeComponent_mat_grid_tile_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r0.isFiles$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx_r0.isFiles$));
  }
}

class NodeComponent {
  constructor(route, nodeService, breakpointObserver) {
    this.route = route;
    this.nodeService = nodeService;
    this.breakpointObserver = breakpointObserver;
    this.files$ = this.nodeService.filesSub$.asObservable();
    this.isFiles$ = this.nodeService.isFilesSub$.asObservable();
    this.gridColsByBreakpoint = new Map([[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall, 1], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small, 2], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium, 4], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large, 6], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XLarge, 8]]);
    this.cols$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XLarge]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(result => {
      for (const [query, cols] of this.gridColsByBreakpoint.entries()) if (result.breakpoints[query]) return cols;

      return 4;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.shareReplay)());
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (!params.has('folderName')) this.nodeService.getFolders();else {
        const folderName = params.get('folderName');
        this.nodeService.getFiles(folderName || '');
        if (folderName) this.nodeService.currentFolderSub$.next(folderName);
      }
    });
  }

}

NodeComponent.ɵfac = function NodeComponent_Factory(t) {
  return new (t || NodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_node_service__WEBPACK_IMPORTED_MODULE_0__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver));
};

NodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NodeComponent,
  selectors: [["app-node"]],
  decls: 4,
  vars: 6,
  consts: [["rowHeight", "11:10", 3, "cols"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "file"], [3, "folder"]],
  template: function NodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NodeComponent_mat_grid_tile_2_Template, 5, 6, "mat-grid-tile", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.cols$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.files$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridTile, _file_file_component__WEBPACK_IMPORTED_MODULE_1__.FileComponent, _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__.FolderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub2RlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 174:
/*!**************************************!*\
  !*** ./src/app/node/node.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeService": () => (/* binding */ NodeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _models_Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Folder */ 5729);
/* harmony import */ var _models_File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/File */ 3985);
/* harmony import */ var _models_FileType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/FileType */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notification.service */ 7440);








class NodeService {
    constructor(httpClient, notificationService) {
        this.httpClient = httpClient;
        this.notificationService = notificationService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.filesSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.isFilesSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(true);
        this.currentFolderSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    }
    getFolders() {
        this.httpClient.get(`${this.baseUrl}/`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(folders => folders.map(folderData => NodeService._filesFactory(_models_FileType__WEBPACK_IMPORTED_MODULE_3__.FileType.Folder, folderData))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(folders => this.filesSub$.next(folders)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isFilesSub$.next(false))).subscribe({
            error: (err) => {
                this.notificationService.error(NodeService._getErrorMsg(err));
                this.filesSub$.next([]);
            }
        });
    }
    getFiles(folderName) {
        this.httpClient.get(`${this.baseUrl}/${folderName}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(files => files.map(fileData => NodeService._filesFactory(_models_FileType__WEBPACK_IMPORTED_MODULE_3__.FileType.File, fileData))), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(files => this.filesSub$.next(files)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.isFilesSub$.next(true))).subscribe({
            error: (err) => {
                this.notificationService.error(NodeService._getErrorMsg(err));
                this.filesSub$.next([]);
            }
        });
    }
    getFileBlob(fileId, type) {
        return this.httpClient.get(`${this.baseUrl}/${this.currentFolderSub$.value}/${fileId}`, { responseType: 'blob' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(data => new Blob([data], { type })));
    }
    static _filesFactory(type, args) {
        switch (type) {
            case _models_FileType__WEBPACK_IMPORTED_MODULE_3__.FileType.File:
                return new _models_File__WEBPACK_IMPORTED_MODULE_2__.File(args);
            case _models_FileType__WEBPACK_IMPORTED_MODULE_3__.FileType.Folder:
                return new _models_Folder__WEBPACK_IMPORTED_MODULE_1__.Folder(args);
        }
    }
    static _getErrorMsg(err) {
        return err?.error['detail'] || err?.message || 'Unknown error!';
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService)); };
NodeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7440:
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);


class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "bottom",
        };
    }
    _changeClasses(classList) {
        this.config.panelClass = classList;
    }
    success(msg) {
        this._changeClasses(['success', 'notification']);
        this.snackBar.open(msg, 'Close', this.config);
    }
    error(msg) {
        this._changeClasses(['error', 'notification']);
        this.snackBar.open(msg, 'Close', this.config);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://127.0.0.1:8000/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map