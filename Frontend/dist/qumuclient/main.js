"use strict";
(self["webpackChunkqumuclient"] = self["webpackChunkqumuclient"] || []).push([["main"],{

/***/ 3118:
/*!************************************!*\
  !*** ./src/app/MutantsExecutor.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantsExecutor": () => (/* binding */ MutantsExecutor)
/* harmony export */ });
class MutantsExecutor {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.mutantResults = [];
        this.runningMutants = false;
        this.killedMutants = 0;
        this.aliveMutants = 0;
        this.nonCompilableMutants = 0;
        this.quirkUrl = "https://algassert.com/quirk";
        this.stopped = false;
        this.JSON = JSON;
    }
    stopExecution() {
        this.showModal("Stopping execution");
        this.stopped = true;
    }
    showModal(message) {
        let existingModal = document.getElementById("modal");
        if (existingModal)
            existingModal.remove(); // Eliminar el modal existente si hay uno
        let modal = document.createElement("div");
        modal.id = "modal";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.padding = "20px";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.color = "white";
        modal.style.borderRadius = "10px";
        modal.style.textAlign = "center";
        modal.style.zIndex = "1000";
        modal.innerHTML = `<p>${message}</p>`;
        document.body.appendChild(modal);
    }
    hideModal() {
        let modal = document.getElementById("modal");
        if (modal)
            modal.remove();
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager.service */ 8842);


function AppComponent_app_side_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-side-bar");
} }
function AppComponent_app_home_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
} }
function AppComponent_app_circuits_configuration_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-circuits-configuration");
} }
function AppComponent_app_mutants_info_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mutants-info");
} }
function AppComponent_app_mutant_cycle_info_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mutant-cycle-info", 5);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mutantCycle", ctx_r4.manager.selectedMutantCycle);
} }
function AppComponent_app_save_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-save-button");
} }
class AppComponent {
    constructor(manager) {
        this.manager = manager;
        this.title = 'qumuclient';
    }
    getError() {
        return AppComponent.error;
    }
    goToHome() {
        this.manager.showHome = true;
        this.manager.showCircuit = false;
    }
}
AppComponent.error = "";
AppComponent.quirkUrl = "https://algassert.com/quirk";
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_0__.ManagerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 11, consts: [[2, "color", "red"], [4, "ngIf"], [1, "main-content"], [3, "mutantCycle", 4, "ngIf"], [1, "theme-toggle-container"], [3, "mutantCycle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_app_side_bar_3_Template, 1, 0, "app-side-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_app_home_5_Template, 1, 0, "app-home", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_app_circuits_configuration_6_Template, 1, 0, "app-circuits-configuration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_app_mutants_info_7_Template, 1, 0, "app-mutants-info", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_app_mutant_cycle_info_8_Template, 1, 1, "app-mutant-cycle-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_app_save_button_9_Template, 1, 0, "app-save-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-project-notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-theme-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getError());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.manager.showSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("with-sidebar", ctx.manager.showSidebar)("sidebar-expanded", ctx.manager.sidebarExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.manager.showHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.manager.showCircuit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.manager.showMutantsInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.manager.showMutantCycleInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.manager.showSaveButton);
    } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  transition: margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  min-height: 100vh;\r\n}\r\n\r\n.main-content.with-sidebar[_ngcontent-%COMP%] {\r\n  margin-left: 70px;\r\n}\r\n\r\n.main-content.with-sidebar.sidebar-expanded[_ngcontent-%COMP%] {\r\n  margin-left: 320px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main-content.with-sidebar[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .main-content.with-sidebar.sidebar-expanded[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 20px;\r\n  font-size: 16px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.theme-toggle-container[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 80px;\r\n  z-index: 10000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQud2l0aC1zaWRlYmFyIHtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudC53aXRoLXNpZGViYXIuc2lkZWJhci1leHBhbmRlZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFpbi1jb250ZW50LndpdGgtc2lkZWJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRlbnQud2l0aC1zaWRlYmFyLnNpZGViYXItZXhwYW5kZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50aGVtZS10b2dnbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59Il19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _operators_operators_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operators/operators.component */ 9015);
/* harmony import */ var _circuit_circuit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circuit/circuit.component */ 8252);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.component */ 4283);
/* harmony import */ var _circuits_configuration_circuits_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circuits-configuration/circuits-configuration.component */ 5512);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-bar/side-bar.component */ 9134);
/* harmony import */ var _mutants_info_mutants_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutants-info/mutants-info.component */ 743);
/* harmony import */ var _mutants_code_mutants_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mutants-code/mutants-code.component */ 180);
/* harmony import */ var _mutants_visual_mutants_visual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mutants-visual/mutants-visual.component */ 8201);
/* harmony import */ var _mutants_general_mutants_general_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mutants-general/mutants-general.component */ 9864);
/* harmony import */ var _mutant_cycle_info_mutant_cycle_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mutant-cycle-info/mutant-cycle-info.component */ 7723);
/* harmony import */ var _save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./save-button/save-button.component */ 9026);
/* harmony import */ var _project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-notes/project-notes.component */ 634);
/* harmony import */ var _components_theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/theme-toggle/theme-toggle.component */ 3289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _operators_operators_component__WEBPACK_IMPORTED_MODULE_1__.OperatorsComponent,
        _circuit_circuit_component__WEBPACK_IMPORTED_MODULE_2__.CircuitComponent,
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent,
        _circuits_configuration_circuits_configuration_component__WEBPACK_IMPORTED_MODULE_4__.CircuitsConfigurationComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__.SideBarComponent,
        _mutants_info_mutants_info_component__WEBPACK_IMPORTED_MODULE_7__.MutantsInfoComponent,
        _mutants_code_mutants_code_component__WEBPACK_IMPORTED_MODULE_8__.MutantsCodeComponent,
        _mutants_visual_mutants_visual_component__WEBPACK_IMPORTED_MODULE_9__.MutantsVisualComponent,
        _mutants_general_mutants_general_component__WEBPACK_IMPORTED_MODULE_10__.MutantsGeneralComponent,
        _mutant_cycle_info_mutant_cycle_info_component__WEBPACK_IMPORTED_MODULE_11__.MutantCycleInfoComponent,
        _save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__.SaveButtonComponent,
        _project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_13__.ProjectNotesComponent,
        _components_theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_14__.ThemeToggleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _circuits_configuration_circuits_configuration_component__WEBPACK_IMPORTED_MODULE_4__.CircuitsConfigurationComponent,
    _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__.SideBarComponent,
    _mutants_info_mutants_info_component__WEBPACK_IMPORTED_MODULE_7__.MutantsInfoComponent,
    _mutant_cycle_info_mutant_cycle_info_component__WEBPACK_IMPORTED_MODULE_11__.MutantCycleInfoComponent,
    _save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__.SaveButtonComponent,
    _project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_13__.ProjectNotesComponent,
    _components_theme_toggle_theme_toggle_component__WEBPACK_IMPORTED_MODULE_14__.ThemeToggleComponent], []);


/***/ }),

/***/ 8252:
/*!**********************************************!*\
  !*** ./src/app/circuit/circuit.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircuitComponent": () => (/* binding */ CircuitComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _model_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Project */ 9176);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _reper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reper.service */ 162);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _qumugen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../qumugen.service */ 2740);
/* harmony import */ var _qasm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../qasm.service */ 4739);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);













function CircuitComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CircuitComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "circle", 6)(6, "circle", 7)(7, "circle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Quantum Circuit Builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 11)(12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "path", 14)(15, "rect", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Circuit Identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 18)(20, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CircuitComponent_form_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.circuitName = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 21)(23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Quirk Source Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 24)(30, "div", 25)(31, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CircuitComponent_form_0_Template_textarea_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.quirkCode = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CircuitComponent_form_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.visualizeCircuit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "path", 29)(35, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Visualize in Quirk");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div", 33)(41, "div", 34)(42, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.circuitName.trim() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.circuitName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.quirkCode.trim() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.quirkCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.quirkCode.trim());
} }
class CircuitComponent {
    constructor(sanitizer, reper, manager, qumugen, qasm) {
        this.sanitizer = sanitizer;
        this.reper = reper;
        this.manager = manager;
        this.qumugen = qumugen;
        this.qasm = qasm;
        this.url = '';
        this._circuitName = '';
        this._quirkCode = '';
        this.validityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.hideQuirk = true;
        this.selectedProject = new _model_Project__WEBPACK_IMPORTED_MODULE_1__.Project();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.circuits = [];
        this.selectedTab = 'circuit';
        this.url = '';
    }
    ngOnInit() {
        this.subscription.add(this.manager.selectedProject$.subscribe(circuit => {
            this.selectedProject = circuit;
            this.loadCircuitFromManager();
            this.selectTab('circuit');
        }));
    }
    ngOnChanges() {
        this.loadCircuitFromManager();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    // Método para cargar el circuito desde el ManagerService
    loadCircuitFromManager() {
        this.selectedProject = this.manager.selectedProject || new _model_Project__WEBPACK_IMPORTED_MODULE_1__.Project();
        if (!this.selectedProject) {
            this.selectedProject = new _model_Project__WEBPACK_IMPORTED_MODULE_1__.Project();
        }
        // Cargar el nombre del circuito
        if (this.selectedProject.id) {
            this.originalCircuitName = this.selectedProject.name;
            this._circuitName = this.selectedProject.name || '';
        }
        else {
            this._circuitName = '';
        }
        // Cargar el código Quirk
        if (this.selectedProject.qProgram.qCircuit.textQuirkCode) {
            this._quirkCode = this.selectedProject.qProgram.qCircuit.textQuirkCode;
        }
        else {
            this._quirkCode = '';
        }
        this.checkValidity();
    }
    checkValidity() {
        const valid = this.circuitName.trim() !== '' && this.quirkCode.trim() !== '';
        this.validityChange.emit(valid);
    }
    get isCircuitValid() {
        return this.circuitName.trim() !== '' && this.quirkCode.trim() !== '';
    }
    get circuitName() {
        return this._circuitName;
    }
    set circuitName(value) {
        this._circuitName = value;
        if (this.selectedProject) {
            this.selectedProject.name = value;
            this.manager.setselectedProject(this.selectedProject);
            // Marcar proyecto como modificado cuando cambia el nombre
            this.manager.markProjectAsModified();
        }
        this.checkValidity();
    }
    get quirkCode() {
        return this._quirkCode;
    }
    set quirkCode(value) {
        this._quirkCode = value;
        if (this.selectedProject) {
            this.selectedProject.qProgram.qCircuit.textQuirkCode = value;
            // Solo parsear el JSON si el valor no está vacío
            if (value && value.trim() !== '') {
                try {
                    this.selectedProject.qProgram.qCircuit.quirkCode = JSON.parse(value);
                }
                catch (error) {
                    console.error('Error parsing quirk code:', error);
                    this.selectedProject.qProgram.qCircuit.quirkCode = null;
                }
            }
            else {
                this.selectedProject.qProgram.qCircuit.quirkCode = null;
            }
            this.manager.setselectedProject(this.selectedProject);
            // Marcar proyecto como modificado cuando cambia el código Quirk
            this.manager.markProjectAsModified();
        }
        this.checkValidity();
    }
    save() {
        if (!this.selectedProject) {
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.error = "No circuit selected";
            return;
        }
        if (this.selectedProject.name.trim().length == 0) {
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.error = "Please, give a name to the circuit";
            return;
        }
        if (!this.selectedProject.qProgram.qCircuit.textQuirkCode || this.selectedProject.qProgram.qCircuit.textQuirkCode.trim().length == 0) {
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.error = "Please, write the Quirk code of the circuit";
            return;
        }
        this.selectedProject.qProgram.qCircuit.quirkCode = JSON.parse(this.selectedProject.qProgram.qCircuit.textQuirkCode);
        this.reper.save(this.selectedProject).subscribe(result => {
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.error = "";
        }, error => {
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.error = error.error ? error.error.message : error;
        });
    }
    visualizeCircuit() {
        if (this.selectedProject && this.selectedProject.qProgram.qCircuit.textQuirkCode && this.selectedProject.qProgram.qCircuit.textQuirkCode.trim() !== '') {
            this.url = _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.quirkUrl + "#circuit=" + this.selectedProject.qProgram.qCircuit.textQuirkCode;
            window.open(this.url, '_blank');
        }
        else {
            console.warn('Cannot visualize circuit: no quirk code available');
        }
    }
    selectCircuit() {
        this.selectedProject = this.circuits.filter(c => c.id == this.originalCircuitName).at(0);
        this.manager.setselectedProject(this.selectedProject);
        this.qumugen.getQiskitCode(this.selectedProject.qProgram).then(result => {
            if (this.selectedProject) {
                this.selectedProject.qProgram.qCode.code = result.wholeCode.split("\n");
            }
        });
    }
    onSubmit() {
        if (this.selectedProject?.id) {
            this.circuitName = this.selectedProject.name || '';
        }
        else {
            this.circuitName = "Circuit1";
        }
        if (this.selectedProject?.qProgram.qCircuit.quirkCode) {
            this.quirkCode = this.selectedProject.qProgram.qCircuit.quirkCode;
        }
    }
    selectTab(tab) {
        if (tab === 'mutants' && !this.isCircuitValid)
            return;
        this.selectedTab = tab;
    }
}
CircuitComponent.ɵfac = function CircuitComponent_Factory(t) { return new (t || CircuitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_reper_service__WEBPACK_IMPORTED_MODULE_2__.ReperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_3__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_qumugen_service__WEBPACK_IMPORTED_MODULE_4__.QumugenService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_qasm_service__WEBPACK_IMPORTED_MODULE_5__.QasmService)); };
CircuitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CircuitComponent, selectors: [["app-circuit"]], outputs: { validityChange: "validityChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "glass-form-container", 3, "ngSubmit", 4, "ngIf"], [1, "glass-form-container", 3, "ngSubmit"], ["circuitForm", "ngForm"], [1, "glass-header"], [1, "header-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "quantum-icon"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-dasharray", "2 3", "opacity", "0.5"], ["cx", "12", "cy", "12", "r", "10.5", "stroke", "currentColor", "stroke-width", "1", "stroke-dasharray", "1 2", "opacity", "0.3"], [1, "header-title"], [1, "header-divider"], [1, "glass-card"], [1, "card-header"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "card-icon"], ["d", "M7 8h10M7 12h10M7 16h10", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x", "3", "y", "4", "width", "18", "height", "16", "rx", "2", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["for", "circuitName", 1, "card-label"], [1, "status-indicator"], [1, "input-wrapper"], ["type", "text", "id", "circuitName", "name", "circuitName", "placeholder", "Enter quantum program name...", "required", "", 1, "glass-input", 3, "ngModel", "ngModelChange"], [1, "input-underline"], [1, "glass-card", "code-card"], ["d", "M8 6L4 12L8 18M16 6L20 12L16 18M14 4L10 20", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["for", "quirkCode", 1, "card-label"], [1, "code-wrapper"], [1, "code-container"], ["id", "quirkCode", "name", "quirkCode", "placeholder", "{ \"cols\": [[\"H\"], [\"\u2022\", \"X\"]] }", "required", "", 1, "glass-textarea", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "glass-visualize-btn", "visualize-left-btn", 3, "disabled", "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "btn-icon"], ["d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", "stroke", "currentColor", "stroke-width", "2"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "arrow-icon"], ["d", "M5 12h14M12 5l7 7-7 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "particle", "particle-1"], [1, "particle", "particle-2"], [1, "particle", "particle-3"]], template: function CircuitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CircuitComponent_form_0_Template, 43, 7, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedTab !== "mutants");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\r\n.glass-form-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.glass-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n    position: relative;\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.header-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n    flex: 1;\r\n}\r\n.quantum-icon[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n}\r\n.header-divider[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    background: linear-gradient(90deg, transparent 0%, rgba(111, 168, 130, 0.3) 50%, transparent 100%);\r\n}\r\n\r\n.glass-card[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(10px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 16px;\r\n    padding: 1.5rem;\r\n    box-shadow: 0 4px 16px var(--shadow-glass), inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.glass-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 8px 24px var(--shadow-glass-strong), inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    border-color: var(--accent-primary);\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1.25rem;\r\n}\r\n.card-icon[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    flex-shrink: 0;\r\n}\r\n.card-label[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    font-weight: 600;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n    flex: 1;\r\n}\r\n.status-indicator[_ngcontent-%COMP%] {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: var(--text-muted);\r\n    transition: all 200ms ease;\r\n}\r\n.status-indicator.valid[_ngcontent-%COMP%] {\r\n    background: var(--accent-primary);\r\n    box-shadow: 0 0 0 3px rgba(111, 168, 130, 0.2);\r\n}\r\n\r\n.input-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.input-underline[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    width: 0;\r\n    background: var(--accent-gradient);\r\n    transition: width 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    margin-top: -2px;\r\n}\r\n.glass-input[_ngcontent-%COMP%]:focus + .input-underline[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.glass-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 0.75rem 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-size: 0.9375rem;\r\n    font-weight: 400;\r\n    color: var(--text-primary);\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px var(--shadow-glass);\r\n    outline: none;\r\n}\r\n.glass-input[_ngcontent-%COMP%]::placeholder {\r\n    color: var(--text-muted);\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\r\n.glass-input[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--border-glass);\r\n}\r\n.glass-input[_ngcontent-%COMP%]:focus {\r\n    background: var(--glass-bg);\r\n    border-color: var(--accent-primary);\r\n    box-shadow: 0 0 0 4px var(--shadow-glass), inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px var(--shadow-glass-strong);\r\n    transform: translateY(-1px);\r\n}\r\n\r\n.code-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.code-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.glass-textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    min-height: 300px;\r\n    padding: 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-family: 'JetBrains Mono', monospace;\r\n    font-size: 0.875rem;\r\n    line-height: 1.6;\r\n    color: var(--text-primary);\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    resize: vertical;\r\n    outline: none;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.glass-textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: var(--text-muted);\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\r\n.glass-textarea[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--border-glass);\r\n}\r\n.glass-textarea[_ngcontent-%COMP%]:focus {\r\n    background: var(--glass-bg);\r\n    border-color: var(--accent-primary);\r\n    box-shadow: 0 0 0 4px var(--shadow-glass), inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.glass-visualize-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    padding: 0.75rem 1.5rem;\r\n    background: var(--accent-gradient);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: 0 4px 12px var(--shadow-glass), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);\r\n    transition: left 600ms ease;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:hover::before {\r\n    left: 100%;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 20px var(--shadow-glass-strong), 0 3px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n    filter: brightness(1.1);\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:active {\r\n    transform: translateY(0);\r\n    box-shadow: 0 2px 8px var(--shadow-glass), inset 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:disabled {\r\n    background: var(--text-muted);\r\n    cursor: not-allowed;\r\n    transform: none;\r\n    box-shadow: none;\r\n    opacity: 0.6;\r\n}\r\n\r\n.visualize-left-btn[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    margin-left: 0;\r\n}\r\n\r\n.particle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    background: radial-gradient(circle, var(--accent-primary) 0%, rgba(111, 168, 130, 0) 70%);\r\n    border-radius: 50%;\r\n    pointer-events: none;\r\n    animation: float 10s infinite ease-in-out;\r\n}\r\n.particle-1[_ngcontent-%COMP%] {\r\n    top: 10%;\r\n    right: 10%;\r\n    animation-delay: 0s;\r\n}\r\n.particle-2[_ngcontent-%COMP%] {\r\n    bottom: 20%;\r\n    left: 5%;\r\n    animation-delay: 5s;\r\n}\r\n.particle-3[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    right: 5%;\r\n    animation-delay: 3s;\r\n}\r\n@keyframes float {\r\n\r\n    0%,\r\n    100% {\r\n        transform: translate(0, 0);\r\n        opacity: 0.4;\r\n    }\r\n\r\n    50% {\r\n        transform: translate(20px, -20px);\r\n        opacity: 0.8;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .header-content[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .glass-card[_ngcontent-%COMP%] {\r\n        padding: 1.25rem;\r\n    }\r\n\r\n    .visualize-left-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\r\n.glass-input[_ngcontent-%COMP%]:focus-visible, .glass-textarea[_ngcontent-%COMP%]:focus-visible, .glass-visualize-btn[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid var(--accent-primary);\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QjtBQUNKO0FBRUEsZUFBZTtBQUNmO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjtBQUNKO0FBRUEsa0JBQWtCO0FBQ2xCOztJQUVJOzs7UUFHSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFFQTs7O0lBR0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjaXJjdWl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDaXJjdWl0IENvbXBvbmVudCAtIEdsYXNzbW9ycGhpc20gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLmdsYXNzLWZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIEhlYWRlciBTZWN0aW9uICovXHJcbi5nbGFzcy1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5xdWFudHVtLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmhlYWRlci1kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCAwJSwgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbn1cclxuXHJcbi8qIEdsYXNzIENhcmRzICovXHJcbi5nbGFzcy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggdmFyKC0tc2hhZG93LWdsYXNzKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5nbGFzcy1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggdmFyKC0tc2hhZG93LWdsYXNzLXN0cm9uZyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIENhcmQgSGVhZGVyICovXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uY2FyZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnN0YXR1cy1pbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLnN0YXR1cy1pbmRpY2F0b3IudmFsaWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKTtcclxufVxyXG5cclxuLyogSW5wdXQgV3JhcHBlciAqL1xyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDQwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6Zm9jdXMrLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogR2xhc3MgSW5wdXQgKi9cclxuLmdsYXNzLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDFweCAycHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5nbGFzcy1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggdmFyKC0tc2hhZG93LWdsYXNzKSwgaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgNHB4IDEycHggdmFyKC0tc2hhZG93LWdsYXNzLXN0cm9uZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi8qIENvZGUgQ29udGFpbmVyICovXHJcbi5jb2RlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2RlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdsYXNzLXRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZ2xhc3MtdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmdsYXNzLXRleHRhcmVhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxufVxyXG5cclxuLmdsYXNzLXRleHRhcmVhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHZhcigtLXNoYWRvdy1nbGFzcyksIGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4vKiBWaXN1YWxpemUgQnV0dG9uICovXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdy1nbGFzcyksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmdsYXNzLXZpc3VhbGl6ZS1idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgNTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgNjAwbXMgZWFzZTtcclxufVxyXG5cclxuLmdsYXNzLXZpc3VhbGl6ZS1idG46aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG59XHJcblxyXG4uZ2xhc3MtdmlzdWFsaXplLWJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpLCAwIDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxufVxyXG5cclxuLmdsYXNzLXZpc3VhbGl6ZS1idG46YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLCBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZ2xhc3MtdmlzdWFsaXplLWJ0biBzdmcge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi8qIFZpc3VhbGl6ZSBidXR0b24gb24gdGhlIGxlZnQgKGJlbG93IHRleHRhcmVhKSAqL1xyXG4udmlzdWFsaXplLWxlZnQtYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLyogRmxvYXRpbmcgUGFydGljbGVzICovXHJcbi5wYXJ0aWNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB2YXIoLS1hY2NlbnQtcHJpbWFyeSkgMCUsIHJnYmEoMTExLCAxNjgsIDEzMCwgMCkgNzAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdCAxMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wYXJ0aWNsZS0xIHtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbi5wYXJ0aWNsZS0yIHtcclxuICAgIGJvdHRvbTogMjAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDVzO1xyXG59XHJcblxyXG4ucGFydGljbGUtMyB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG5cclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTIwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2xhc3MtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudmlzdWFsaXplLWxlZnQtYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWNjZXNzaWJpbGl0eSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG5cclxuICAgICosXHJcbiAgICAqOjpiZWZvcmUsXHJcbiAgICAqOjphZnRlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmdsYXNzLWlucHV0OmZvY3VzLXZpc2libGUsXHJcbi5nbGFzcy10ZXh0YXJlYTpmb2N1cy12aXNpYmxlLFxyXG4uZ2xhc3MtdmlzdWFsaXplLWJ0bjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 5512:
/*!****************************************************************************!*\
  !*** ./src/app/circuits-configuration/circuits-configuration.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircuitsConfigurationComponent": () => (/* binding */ CircuitsConfigurationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _circuit_circuit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../circuit/circuit.component */ 8252);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _operators_operators_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/operators.component */ 9015);








function CircuitsConfigurationComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CircuitsConfigurationComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CircuitsConfigurationComponent__svg_svg_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CircuitsConfigurationComponent__svg_svg_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "circle", 30)(2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CircuitsConfigurationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "rect", 33)(3, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function CircuitsConfigurationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-operators");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CircuitsConfigurationComponent {
    constructor(manager) {
        this.manager = manager;
        this.isCircuitValid = false;
        this.selectedTab = 'circuit';
        this.selectedCircuit = null; // Inicializar con un circuito vacío
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.manager.selectedProject$.subscribe(project => {
            this.selectedCircuit = project;
            // Cambiar a la pestaña circuit siempre que haya un cambio de circuito
            // (nuevo circuito o circuito seleccionado)
            if (project) {
                this.selectTab('circuit');
                // Asegurar que el componente circuit carga la información del circuito
                setTimeout(() => {
                    if (this.circuitComponent) {
                        this.circuitComponent.loadCircuitFromManager();
                    }
                }, 0);
            }
        }));
    }
    // Getter para validar el circuito usando ManagerService
    get isCircuitValidFromManager() {
        return this.manager.selectedProject?.name?.trim() !== '' &&
            this.manager.selectedProject?.qProgram.qCircuit.textQuirkCode?.trim() !== '';
    }
    selectTab(tab) {
        // Usar la validación del ManagerService
        if (tab === 'mutants' && !this.isCircuitValid)
            return;
        this.manager.showSaveButton = this.isCircuitValid;
        this.selectedTab = tab;
        // Si volvemos a la pestaña circuit, recargar los valores
        if (tab === 'circuit') {
            setTimeout(() => {
                if (this.circuitComponent) {
                    this.circuitComponent.loadCircuitFromManager();
                }
            });
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CircuitsConfigurationComponent.ɵfac = function CircuitsConfigurationComponent_Factory(t) { return new (t || CircuitsConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService)); };
CircuitsConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CircuitsConfigurationComponent, selectors: [["app-circuits-configuration"]], viewQuery: function CircuitsConfigurationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_circuit_circuit_component__WEBPACK_IMPORTED_MODULE_0__.CircuitComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.circuitComponent = _t.first);
    } }, decls: 37, vars: 16, consts: [[1, "glass-config-container"], [1, "glass-tabs"], [1, "glass-tab", 3, "click"], [1, "step-number"], [4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "tab-icon"], ["d", "M12 2v4M12 18v4M22 12h-4M6 12H2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-dasharray", "2 3", "opacity", "0.4"], [1, "tab-content"], [1, "tab-title"], [1, "tab-description"], [1, "tab-badge"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], [1, "tab-indicator"], [1, "glass-tab", 3, "disabled", "click"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 12h8M12 8v8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "8", "cy", "8", "r", "1.5", "fill", "currentColor"], ["cx", "16", "cy", "8", "r", "1.5", "fill", "currentColor"], ["cx", "8", "cy", "16", "r", "1.5", "fill", "currentColor"], ["cx", "16", "cy", "16", "r", "1.5", "fill", "currentColor"], ["class", "tab-lock", 4, "ngIf"], [1, "tab-content-wrapper"], [1, "tab-panel", 3, "hidden"], [3, "validityChange"], ["class", "tab-panel", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M20 6L9 17L4 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v4M12 16h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "tab-lock"], ["x", "5", "y", "11", "width", "14", "height", "10", "rx", "2", "stroke", "currentColor", "stroke-width", "2"], ["d", "M7 11V7a5 5 0 0110 0v4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "tab-panel"]], template: function CircuitsConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CircuitsConfigurationComponent_Template_button_click_2_listener() { return ctx.selectTab("circuit"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CircuitsConfigurationComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CircuitsConfigurationComponent__svg_svg_5_Template, 2, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 7)(8, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9)(10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Circuit Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Define quantum program");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CircuitsConfigurationComponent__svg_svg_15_Template, 2, 0, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CircuitsConfigurationComponent__svg_svg_16_Template, 3, 0, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CircuitsConfigurationComponent_Template_button_click_18_listener() { return ctx.selectTab("mutants"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 16)(21, "path", 17)(22, "circle", 18)(23, "circle", 19)(24, "circle", 20)(25, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 9)(27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Generate Mutants");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Select mutation operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CircuitsConfigurationComponent_div_31_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 23)(34, "div", 24)(35, "app-circuit", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("validityChange", function CircuitsConfigurationComponent_Template_app_circuit_validityChange_35_listener($event) { return ctx.isCircuitValid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CircuitsConfigurationComponent_div_36_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedTab === "circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("completed", ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("valid", ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedTab === "mutants");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCircuitValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.selectedTab !== "circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedTab === "mutants");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _operators_operators_component__WEBPACK_IMPORTED_MODULE_2__.OperatorsComponent, _circuit_circuit_component__WEBPACK_IMPORTED_MODULE_0__.CircuitComponent], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n    box-sizing: border-box;\r\n}\n\n.glass-config-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding: 1rem;\r\n}\n\n.glass-tabs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 1rem;\r\n    margin-bottom: 0.5rem;\r\n    padding: 0.75rem;\r\n    background: var(--glass-bg);\r\n    backdrop-filter: blur(12px);\r\n    -webkit-backdrop-filter: blur(12px);\r\n    border-radius: 20px;\r\n    border: 1px solid var(--border-glass);\r\n    box-shadow: 0 4px 20px var(--shadow-glass);\r\n}\n\n.glass-tab[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1.25rem;\r\n    background: var(--glass-bg-card);\r\n    border: 1px solid var(--border-glass-light);\r\n    border-radius: 16px;\r\n    cursor: pointer;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    position: relative;\r\n    overflow: hidden;\r\n    outline: none;\r\n}\n.glass-tab[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n    background: var(--glass-bg-hover);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 24px var(--shadow-glass);\r\n    border-color: var(--border-glass);\r\n}\n.glass-tab.active[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--accent-primary);\r\n    box-shadow: 0 12px 32px var(--shadow-glass-strong), inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n}\n.glass-tab[_ngcontent-%COMP%]:disabled {\r\n    opacity: 0.6;\r\n    cursor: not-allowed;\r\n    background: var(--glass-bg);\r\n    border-color: transparent;\r\n}\n\n.step-number[_ngcontent-%COMP%] {\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 50%;\r\n    background: var(--shadow-glass);\r\n    color: var(--accent-primary);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    font-size: 0.9375rem;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    border: 1px solid var(--border-glass-light);\r\n    flex-shrink: 0;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\r\n    background: var(--accent-gradient);\r\n    color: white;\r\n    box-shadow: 0 4px 12px var(--shadow-glass);\r\n    border-color: transparent;\r\n    transform: scale(1.1);\r\n}\n.step-number.completed[_ngcontent-%COMP%] {\r\n    background: #10b981;\r\n    color: white;\r\n    border-color: transparent;\r\n}\n\n.tab-icon[_ngcontent-%COMP%] {\r\n    color: var(--text-muted);\r\n    transition: all 300ms;\r\n    width: 24px;\r\n    height: 24px;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    transform: scale(1.1);\r\n}\n\n.tab-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.25rem;\r\n    flex: 1;\r\n    text-align: left;\r\n}\n.tab-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--text-secondary);\r\n    transition: color 300ms;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .tab-title[_ngcontent-%COMP%] {\r\n    color: var(--text-primary);\r\n}\n.tab-description[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    color: var(--text-muted);\r\n    font-weight: 500;\r\n}\n\n.tab-badge[_ngcontent-%COMP%] {\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 300ms;\r\n    background: var(--shadow-glass);\r\n    color: var(--text-muted);\r\n}\n.tab-badge.valid[_ngcontent-%COMP%] {\r\n    background: rgba(16, 185, 129, 0.15);\r\n    color: #10b981;\r\n}\n\n.tab-lock[_ngcontent-%COMP%] {\r\n    color: var(--text-muted);\r\n    opacity: 0.7;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 24px;\r\n    height: 24px;\r\n}\n\n.tab-indicator[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 3px;\r\n    background: var(--accent-gradient);\r\n    transform: scaleX(0);\r\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    opacity: 0;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .tab-indicator[_ngcontent-%COMP%] {\r\n    transform: scaleX(1);\r\n    opacity: 1;\r\n}\n\n.tab-content-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    perspective: 1000px;\r\n}\n.tab-panel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    animation: slideUpFade 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n@keyframes slideUpFade {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px) scale(0.98);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0) scale(1);\r\n    }\r\n}\n\n@media (max-width: 768px) {\r\n    .glass-tabs[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 0.75rem;\r\n        padding: 0.5rem;\r\n    }\r\n\r\n    .glass-tab[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .tab-description[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.glass-tab[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid var(--accent-primary);\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1aXRzLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUdBQW1HO0FBRG5HLCtEQUErRDtBQUcvRDtJQUNJLCtFQUErRTtJQUMvRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBRUEsa0VBQWtFO0FBQ2xFO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUEsaUVBQWlFO0FBQ2pFO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsMENBQTBDO0FBQzlDO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLDBGQUEwRjtBQUM5RjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IseUJBQXlCO0FBQzdCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtEQUFrRDtJQUNsRCwyQ0FBMkM7SUFDM0MsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQSxhQUFhO0FBQ2I7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osT0FBTztJQUNQLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCO0FBRUEsY0FBYztBQUNkO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQix3REFBd0Q7SUFDeEQsVUFBVTtBQUNkO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtBQUNkO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCx5REFBeUQ7QUFDN0Q7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLFVBQVU7UUFDVixpQ0FBaUM7SUFDckM7QUFDSjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFSTs7O1FBR0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQztBQUNKO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImNpcmN1aXRzLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENpcmN1aXRzIENvbmZpZ3VyYXRpb24gLSBHbGFzc21vcnBoaXNtIFJlc3RvcmVkICYgSW1wcm92ZWQgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBNYWluIENvbnRhaW5lciAtIE1hdGNoaW5nIEhUTUwgY2xhc3MgJ2dsYXNzLWNvbmZpZy1jb250YWluZXInICovXHJcbi5nbGFzcy1jb25maWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4vKiBUYWJzIE5hdmlnYXRpb24gQ29udGFpbmVyIC0gTWF0Y2hpbmcgSFRNTCBjbGFzcyAnZ2xhc3MtdGFicycgKi9cclxuLmdsYXNzLXRhYnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG59XHJcblxyXG4vKiBHbGFzcyBUYWIgQnV0dG9uICovXHJcbi5nbGFzcy10YWIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxufVxyXG5cclxuLmdsYXNzLXRhYi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzJweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5nbGFzcy10YWI6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIFN0ZXAgTnVtYmVyIENpcmNsZSAqL1xyXG4uc3RlcC1udW1iZXIge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmdsYXNzLXRhYi5hY3RpdmUgLnN0ZXAtbnVtYmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uc3RlcC1udW1iZXIuY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBUYWIgSWNvbiAqL1xyXG4udGFiLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5nbGFzcy10YWIuYWN0aXZlIC50YWItaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4vKiBUYWIgQ29udGVudCBUZXh0ICovXHJcbi50YWItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGFiLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXM7XHJcbn1cclxuXHJcbi5nbGFzcy10YWIuYWN0aXZlIC50YWItdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50YWItZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogU3RhdHVzIEJhZGdlICovXHJcbi50YWItYmFkZ2Uge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxufVxyXG5cclxuLnRhYi1iYWRnZS52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxufVxyXG5cclxuLyogTG9jayBJY29uICovXHJcbi50YWItbG9jayB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi8qIEFjdGl2ZSBJbmRpY2F0b3IgTGluZSAqL1xyXG4udGFiLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmdsYXNzLXRhYi5hY3RpdmUgLnRhYi1pbmRpY2F0b3Ige1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBUYWIgQ29udGVudCBXcmFwcGVyICovXHJcbi50YWItY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxufVxyXG5cclxuLnRhYi1wYW5lbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVVcEZhZGUgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwRmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KSBzY2FsZSgwLjk4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmdsYXNzLXRhYnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZ2xhc3MtdGFiIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFjY2Vzc2liaWxpdHkgKi9cclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuXHJcbiAgICAqLFxyXG4gICAgKjo6YmVmb3JlLFxyXG4gICAgKjo6YWZ0ZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5nbGFzcy10YWI6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fadeSlide', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    opacity: 0,
                    transform: 'translateY(20px)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    opacity: 1,
                    transform: 'translateY(0)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('hidden <=> visible', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('350ms cubic-bezier(0.4, 0, 0.2, 1)')
                ])
            ])
        ] } });


/***/ }),

/***/ 3289:
/*!*******************************************************************!*\
  !*** ./src/app/components/theme-toggle/theme-toggle.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeToggleComponent": () => (/* binding */ ThemeToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme.service */ 8140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class ThemeToggleComponent {
  constructor(themeService) {
    this.themeService = themeService;
    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  toggle() {
    this.themeService.toggleTheme();
  }

}

ThemeToggleComponent.ɵfac = function ThemeToggleComponent_Factory(t) {
  return new (t || ThemeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};

ThemeToggleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ThemeToggleComponent,
  selectors: [["app-theme-toggle"]],
  decls: 9,
  vars: 7,
  consts: [[1, "theme-toggle", 3, "click"], [1, "toggle-track"], [1, "icon", "sun"], [1, "fas", "fa-sun"], [1, "icon", "moon"], [1, "fas", "fa-moon"], [1, "toggle-thumb"]],
  template: function ThemeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThemeToggleComponent_Template_button_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dark", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.isDarkMode$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, ctx.isDarkMode$) ? "Switch to light mode" : "Switch to dark mode");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".theme-toggle[_ngcontent-%COMP%] {\r\n    background: var(--toggle-bg);\r\n    border: 1px solid var(--toggle-border);\r\n    backdrop-filter: blur(12px);\r\n    -webkit-backdrop-filter: blur(12px);\r\n    border-radius: 30px;\r\n    width: 64px;\r\n    height: 32px;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 2px;\r\n    transition: all 0.3s ease;\r\n    box-shadow: var(--shadow-glass);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.theme-toggle[_ngcontent-%COMP%]:hover {\r\n    box-shadow: var(--shadow-glass-strong);\r\n    border-color: var(--accent-primary);\r\n}\r\n\r\n.toggle-track[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 8px;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n    pointer-events: none;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: var(--text-muted);\r\n    transition: color 0.3s ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.icon.sun[_ngcontent-%COMP%] {\r\n    color: #f6ad55;\r\n}\r\n\r\n.icon.moon[_ngcontent-%COMP%] {\r\n    color: #a78bfa;\r\n}\r\n\r\n.toggle-thumb[_ngcontent-%COMP%] {\r\n    width: 26px;\r\n    height: 26px;\r\n    background: var(--accent-gradient);\r\n    border-radius: 50%;\r\n    position: relative;\r\n    z-index: 2;\r\n    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.theme-toggle.dark[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\r\n    transform: translateX(32px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLXRvZ2dsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseURBQXlEO0lBQ3pELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJ0aGVtZS10b2dnbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS10b2dnbGUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdG9nZ2xlLWJnKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRvZ2dsZS1ib3JkZXIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGhlbWUtdG9nZ2xlOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b2dnbGUtdHJhY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLnN1biB7XHJcbiAgICBjb2xvcjogI2Y2YWQ1NTtcclxufVxyXG5cclxuLmljb24ubW9vbiB7XHJcbiAgICBjb2xvcjogI2E3OGJmYTtcclxufVxyXG5cclxuLnRvZ2dsZS10aHVtYiB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnRoZW1lLXRvZ2dsZS5kYXJrIC50b2dnbGUtdGh1bWIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMycHgpO1xyXG59Il19 */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _model_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Project */ 9176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager.service */ 8842);



class HomeComponent {
    constructor(manager) {
        this.manager = manager;
    }
    ngOnInit() {
    }
    createCircuit() {
        let circuit = new _model_Project__WEBPACK_IMPORTED_MODULE_0__.Project(crypto.randomUUID(), "Project1");
        this.manager.setNewselectedProject(circuit);
        if (sessionStorage.getItem('token')) {
            this.manager.showSidebar = true;
        }
        // Cambiar visibilidad al final para asegurar que los datos estén listos
        this.manager.showHome = false;
        this.manager.showCircuit = true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 41, vars: 0, consts: [[1, "home-container"], [1, "hero-section"], [1, "hero-content"], [1, "hero-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2v4M12 18v4M22 12h-4M6 12H2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "12", "r", "8", "stroke", "currentColor", "stroke-width", "1.5", "stroke-dasharray", "2 3", "opacity", "0.4"], ["cx", "5", "cy", "5", "r", "1.5", "fill", "currentColor"], ["cx", "19", "cy", "5", "r", "1.5", "fill", "currentColor"], ["cx", "5", "cy", "19", "r", "1.5", "fill", "currentColor"], ["cx", "19", "cy", "19", "r", "1.5", "fill", "currentColor"], [1, "hero-title"], [1, "hero-subtitle"], [1, "content-grid"], [1, "glass-card", "info-card"], [1, "card-header"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "card-icon"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 16v-4M12 8h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "card-title"], [1, "card-text"], [1, "glass-card", "image-card"], [1, "image-wrapper"], ["src", "assets/quantum_mutant_image.svg", "alt", "Quantum Circuit Visualization", 1, "quantum-image"], [1, "action-section"], [1, "start-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 12h8M12 8v8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M5 12h14M12 5l7 7-7 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "particle", "particle-1"], [1, "particle", "particle-2"], [1, "particle", "particle-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "circle", 5)(6, "path", 6)(7, "circle", 7)(8, "circle", 8)(9, "circle", 9)(10, "circle", 10)(11, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Quantum Code Mutation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Generate and analyze mutants from quantum circuits");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "circle", 18)(21, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "About Quantum Mutants");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Quantum Mutants provide a powerful framework for evaluating test case reliability in quantum computing environments. By introducing strategic variations into quantum circuits, we can systematically assess how effectively test suites detect errors and anomalies. These controlled mutations serve as indicators that reveal potential weaknesses in testing coverage and validation processes. This approach not only enhances the robustness of quantum algorithms but also ensures that the verification logic is resilient against subtle faults. By simulating various types of quantum errors\u2014such as gate alterations, qubit swaps, and phase shifts\u2014developers can gain deeper insights into the stability of their quantum programs. Ultimately, this leads to more trustworthy quantum software, paving the way for reliable applications in cryptography, optimization, and simulation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 22)(27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 25)(30, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_30_listener() { return ctx.createCircuit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 28)(33, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "START CREATING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 32)(39, "div", 33)(40, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n}\n.home-container[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    background: var(--bg-gradient);\r\n    padding: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: background 0.3s ease;\r\n}\n\n.hero-section[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n.hero-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\n.hero-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(10px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 50%;\r\n    box-shadow: 0 8px 32px var(--shadow-glass), inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    color: var(--accent-primary);\r\n    animation: float 3s ease-in-out infinite;\r\n}\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    letter-spacing: -0.02em;\r\n    margin: 0;\r\n    background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n}\n.hero-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    color: var(--text-secondary);\r\n    font-weight: 400;\r\n    margin: 0;\r\n}\n\n.content-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 2rem;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\n\n.glass-card[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(10px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 16px;\r\n    padding: 2rem;\r\n    box-shadow: var(--card-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, border-color 0.3s ease;\r\n}\n.glass-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-4px);\r\n    box-shadow: var(--card-shadow-hover), inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    border-color: var(--accent-primary);\r\n}\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1.5rem;\r\n}\n.card-icon[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    flex-shrink: 0;\r\n}\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n}\n.card-text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    line-height: 1.8;\r\n    color: var(--text-secondary);\r\n    text-align: justify;\r\n}\n\n.image-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1.5rem;\r\n    background: var(--glass-bg);\r\n}\n.image-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 2rem;\r\n    background: rgba(10, 25, 41, 0.05);\r\n    \r\n    border-radius: 12px;\r\n    border: 1px solid var(--border-glass-light);\r\n}\n[data-theme='dark'][_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.05);\r\n}\n.quantum-image[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n    filter: drop-shadow(0 4px 12px var(--shadow-glass));\r\n    transition: transform 300ms ease;\r\n}\n.quantum-image[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n}\n\n.action-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 2rem 0;\r\n}\n.start-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    padding: 1.25rem 3rem;\r\n    background: var(--accent-gradient);\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n    font-size: 1.125rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: 0 8px 24px var(--shadow-glass), 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n    letter-spacing: 0.5px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\n.start-button[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);\r\n    transition: left 600ms ease;\r\n}\n.start-button[_ngcontent-%COMP%]:hover::before {\r\n    left: 100%;\r\n}\n.start-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 12px 32px var(--shadow-glass-strong), 0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n    filter: brightness(1.1);\r\n}\n.start-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 6px 20px var(--shadow-glass), inset 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\n.start-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n}\n\n.particle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 8px;\r\n    height: 8px;\r\n    background: radial-gradient(circle, var(--accent-primary) 0%, rgba(111, 168, 130, 0) 70%);\r\n    border-radius: 50%;\r\n    pointer-events: none;\r\n    animation: float-particle 20s infinite ease-in-out;\r\n    opacity: 0.6;\r\n}\n.particle-1[_ngcontent-%COMP%] {\r\n    top: 20%;\r\n    left: 10%;\r\n    animation-delay: 0s;\r\n    animation-duration: 15s;\r\n}\n.particle-2[_ngcontent-%COMP%] {\r\n    top: 60%;\r\n    right: 15%;\r\n    animation-delay: 5s;\r\n    animation-duration: 18s;\r\n}\n.particle-3[_ngcontent-%COMP%] {\r\n    bottom: 30%;\r\n    left: 20%;\r\n    animation-delay: 10s;\r\n    animation-duration: 22s;\r\n}\n\n@keyframes float {\r\n\r\n    0%,\r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-10px);\r\n    }\r\n}\n@keyframes float-particle {\r\n\r\n    0%,\r\n    100% {\r\n        transform: translate(0, 0);\r\n        opacity: 0.3;\r\n    }\r\n\r\n    25% {\r\n        transform: translate(50px, -30px);\r\n        opacity: 0.6;\r\n    }\r\n\r\n    50% {\r\n        transform: translate(100px, 20px);\r\n        opacity: 0.4;\r\n    }\r\n\r\n    75% {\r\n        transform: translate(50px, 50px);\r\n        opacity: 0.5;\r\n    }\r\n}\n\n@media (max-width: 1024px) {\r\n    .content-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n}\n@media (max-width: 768px) {\r\n    .home-container[_ngcontent-%COMP%] {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .hero-section[_ngcontent-%COMP%] {\r\n        padding: 2rem 0;\r\n    }\r\n\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .hero-subtitle[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .hero-icon[_ngcontent-%COMP%] {\r\n        width: 64px;\r\n        height: 64px;\r\n    }\r\n\r\n    .hero-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n        width: 48px;\r\n        height: 48px;\r\n    }\r\n\r\n    .glass-card[_ngcontent-%COMP%] {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .card-title[_ngcontent-%COMP%] {\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .card-text[_ngcontent-%COMP%] {\r\n        font-size: 0.9375rem;\r\n    }\r\n\r\n    .start-button[_ngcontent-%COMP%] {\r\n        padding: 1rem 2rem;\r\n        font-size: 1rem;\r\n    }\r\n}\n@media (max-width: 480px) {\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    .start-button[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.start-button[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid var(--accent-primary);\r\n    outline-offset: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCO0FBQ0o7QUFFQSxrQkFBa0I7QUFDbEI7O0lBRUk7OztRQUdJLHFDQUFxQztRQUNyQyxzQ0FBc0M7SUFDMUM7QUFDSjtBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIb21lIENvbXBvbmVudCAtIEdsYXNzbW9ycGhpc20gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWdyYWRpZW50KTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogSGVybyBTZWN0aW9uICovXHJcbi5oZXJvLXNlY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmhlcm8taWNvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggdmFyKC0tc2hhZG93LWdsYXNzKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10ZXh0LXByaW1hcnkpIDAlLCB2YXIoLS10ZXh0LXNlY29uZGFyeSkgMTAwJSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLmhlcm8tc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgR3JpZCAqL1xyXG4uY29udGVudC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEdsYXNzIENhcmRzICovXHJcbi5nbGFzcy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZ2xhc3MtY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdy1ob3ZlciksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLyogSW1hZ2UgQ2FyZCAqL1xyXG4uaW1hZ2UtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjUsIDQxLCAwLjA1KTtcclxuICAgIC8qIEtlZXAgdGhpcyBhcyBpcyBvciBtYWtlIGEgdmFyaWFibGUgZm9yIHN1YnRsZSBkYXJrIGJnICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxufVxyXG5cclxuW2RhdGEtdGhlbWU9J2RhcmsnXSAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG59XHJcblxyXG4ucXVhbnR1bS1pbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNHB4IDEycHggdmFyKC0tc2hhZG93LWdsYXNzKSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLnF1YW50dW0taW1hZ2U6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyogQWN0aW9uIFNlY3Rpb24gKi9cclxuLmFjdGlvbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gM3JlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggdmFyKC0tc2hhZG93LWdsYXNzKSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCA2MDBtcyBlYXNlO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzJweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKSwgMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHZhcigtLXNoYWRvdy1nbGFzcyksIGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24gc3ZnIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiBGbG9hdGluZyBQYXJ0aWNsZXMgKi9cclxuLnBhcnRpY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLWFjY2VudC1wcmltYXJ5KSAwJSwgcmdiYSgxMTEsIDE2OCwgMTMwLCAwKSA3MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0LXBhcnRpY2xlIDIwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnBhcnRpY2xlLTEge1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbn1cclxuXHJcbi5wYXJ0aWNsZS0yIHtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogNXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcclxufVxyXG5cclxuLnBhcnRpY2xlLTMge1xyXG4gICAgYm90dG9tOiAzMCU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjJzO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG5cclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdC1wYXJ0aWNsZSB7XHJcblxyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcblxyXG4gICAgMjUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAtMzBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDIwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDUwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29udGVudC1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1pY29uIHtcclxuICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8taWNvbiBzdmcge1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2xhc3MtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFydC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uOmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5637:
/*!************************************!*\
  !*** ./src/app/loading.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LoadingService {
    constructor() {
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    show() {
        this.loadingSubject.next(true);
    }
    hide() {
        this.loadingSubject.next(false);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8842:
/*!************************************!*\
  !*** ./src/app/manager.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerService": () => (/* binding */ ManagerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _model_QProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/QProgram */ 4228);
/* harmony import */ var _model_Mutant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Mutant */ 7168);
/* harmony import */ var _model_MutantCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/MutantCycle */ 8569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);





class ManagerService {
    constructor() {
        this.mutants = [];
        // Subject para notificar cuando se agrega un nuevo circuito
        this.newCircuitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.newCircuit$ = this.newCircuitSubject.asObservable();
        this._selectedMutant = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this._selectedProject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this._selectedMutantCycle = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        // BehaviorSubject para el estado de guardado del proyecto actual
        this._projectSavedState = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(true);
        this.projectSavedState$ = this._projectSavedState.asObservable();
        // Observable público para suscribirse
        this.selectedMutant$ = this._selectedMutant.asObservable();
        this.selectedProject$ = this._selectedProject.asObservable();
        this.selectedMutantCycle$ = this._selectedMutantCycle.asObservable();
        this.showHome = true;
        this.showCircuit = false;
        this.showSidebar = false;
        this.sidebarExpanded = false;
        this.inputQubits = "";
        this.outputQubits = "";
        this.qubitCount = 0;
        this.qubits = [];
        this.shots = 100;
        this.executionAlgorithm = "Simple";
        this.toleratedError = 0.05;
        this.generateWithAllInputs = false;
        this.showMutantsInfo = false;
        this.showMutantCycleInfo = false;
        this.showSaveButton = false;
    }
    /**
     * Marca el proyecto actual como modificado (no guardado)
     * y emite el cambio de estado
     */
    markProjectAsModified() {
        if (this.selectedProject) {
            this.selectedProject.markAsModified();
            this._projectSavedState.next(false);
            this.showSaveButton = true;
        }
    }
    /**
     * Marca el proyecto actual como guardado
     * y emite el cambio de estado
     */
    markProjectAsSaved() {
        if (this.selectedProject) {
            this.selectedProject.markAsSaved();
            this._projectSavedState.next(true);
            this.showSaveButton = false;
        }
    }
    markMutantCyclesAsSaved() {
        if (this.selectedProject && this.selectedProject.mutantCycles) {
            this.selectedProject.mutantCycles.forEach(mc => mc.newlyGenerated = false);
        }
    }
    /**
     * Obtiene el estado de guardado del proyecto actual
     */
    get isProjectSaved() {
        return this.selectedProject?.saved ?? true;
    }
    setselectedProject(circuit) {
        this.selectedProject = circuit;
        this.qubitCount = this.selectedProject.getQubits();
        // Solo procesar qubits si hay código Quirk válido
        if (this.qubitCount > 0) {
            this.qubits = Array.from({ length: this.qubitCount }, (_, i) => i);
            this.inputQubits = "";
            this.outputQubits = "";
            for (let i = 0; i < this.qubitCount; i++) {
                this.inputQubits = this.inputQubits + i + ",";
                this.outputQubits = this.outputQubits + i + ",";
            }
            if (this.inputQubits.endsWith(","))
                this.inputQubits = this.inputQubits.substring(0, this.inputQubits.length - 1);
            this.selectedProject.qProgram.inputQubits = this.inputQubits;
            if (this.outputQubits.endsWith(","))
                this.outputQubits = this.outputQubits.substring(0, this.outputQubits.length - 1);
            this.selectedProject.qProgram.outputQubits = this.outputQubits;
        }
        else {
            // Para circuitos sin código Quirk, inicializar valores por defecto
            this.qubits = [];
            this.inputQubits = "";
            this.outputQubits = "";
            this.selectedProject.qProgram.inputQubits = "";
            this.selectedProject.qProgram.outputQubits = "";
        }
        // Emitir el estado de guardado del proyecto seleccionado
        this._projectSavedState.next(circuit.saved);
        this.showSaveButton = !circuit.saved;
        // Notificar a los suscriptores del cambio de circuito
        this._selectedProject.next(circuit);
    }
    setNewselectedProject(circuit) {
        this.selectedProject = circuit;
        // Inicializar valores por defecto para nuevo proyecto
        this.qubitCount = 0;
        this.qubits = [];
        this.inputQubits = "";
        this.outputQubits = "";
        if (this.selectedProject.qProgram) {
            this.selectedProject.qProgram.inputQubits = "";
            this.selectedProject.qProgram.outputQubits = "";
        }
        if (sessionStorage.getItem('token')) {
            this.showSidebar = true;
        }
        // Los proyectos nuevos no están guardados
        this._projectSavedState.next(false);
        this.showSaveButton = true;
        // Notificar a los suscriptores del nuevo circuito seleccionado
        this._selectedProject.next(circuit);
    }
    setMutants(mutants) {
        this.mutants = [];
        console.log("Mutants received: ", mutants);
        for (let i = 0; i < mutants.length; i++) {
            let mutantIndex = mutants[i].mutantIndex;
            let mutatedColumn = mutants[i].mutatedColumn;
            let mutatedRow = mutants[i].mutatedRow;
            let mutationOperator = mutants[i].mutationOperator;
            let circuit = new _model_QProgram__WEBPACK_IMPORTED_MODULE_0__.QProgram(crypto.randomUUID(), mutants[i].quirk);
            circuit.qubits = mutants[i].qubits;
            circuit.inputQubits = this.inputQubits;
            circuit.outputQubits = this.outputQubits;
            circuit.qCircuit.mutableColumns = this.selectedProject?.qProgram.qCircuit.mutableColumns || "";
            circuit.qCircuit.mutableRows = this.selectedProject?.qProgram.qCircuit.mutableRows || "";
            let mutant = new _model_Mutant__WEBPACK_IMPORTED_MODULE_1__.Mutant(mutantIndex, mutatedColumn, mutatedRow, mutationOperator, circuit);
            this.mutants.push(mutant);
        }
        let mutantPrj = new _model_MutantCycle__WEBPACK_IMPORTED_MODULE_2__.MutantCycle(this.mutants, this.selectedProject?.mutantCycles.length);
        mutantPrj.newlyGenerated = true;
        this.selectedProject?.mutantCycles.push(mutantPrj);
        // Marcar como modificado al agregar mutantes
        this.markProjectAsModified();
    }
    getNumberOfInputQubits() {
        return this.inputQubits.split(",").length;
    }
    // Getter para compatibilidad
    get selectedMutant() {
        return this._selectedMutant.value;
    }
    // Método para actualizar el mutante seleccionado
    setSelectedMutant(mutant) {
        this._selectedMutant.next(mutant);
    }
    // Getter para MutantCycle seleccionado
    get selectedMutantCycle() {
        return this._selectedMutantCycle.value;
    }
    // Método para actualizar el MutantCycle seleccionado
    setSelectedMutantCycle(mutantCycle) {
        this._selectedMutantCycle.next(mutantCycle);
    }
}
ManagerService.ɵfac = function ManagerService_Factory(t) { return new (t || ManagerService)(); };
ManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ManagerService, factory: ManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5450:
/*!********************************************!*\
  !*** ./src/app/model/ExecConfiguration.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecConfiguration": () => (/* binding */ ExecConfiguration)
/* harmony export */ });
class ExecConfiguration {
    constructor(execConfiguration) {
        this.id = execConfiguration?.id;
        this.executionDate = execConfiguration?.executionDate ? new Date(execConfiguration.executionDate) : undefined;
        this.machine = execConfiguration?.machine;
        this.execAlgorithm = execConfiguration?.execAlgorithm;
    }
}


/***/ }),

/***/ 7168:
/*!*********************************!*\
  !*** ./src/app/model/Mutant.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutant": () => (/* binding */ Mutant)
/* harmony export */ });
/* harmony import */ var _OperatorFamily__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperatorFamily */ 7525);

class Mutant {
    constructor(mutantIndex, mutatedColumn, mutatedRow, mutationOperator, circuit) {
        this.mutantIndex = mutantIndex;
        this.mutatedColumn = mutatedColumn;
        this.mutatedRow = mutatedRow;
        this.mutationOperator = mutationOperator;
        this.circuit = circuit;
        this.operator = new _OperatorFamily__WEBPACK_IMPORTED_MODULE_0__.Operator({});
        this.operator.name = mutationOperator;
    }
}


/***/ }),

/***/ 8569:
/*!**************************************!*\
  !*** ./src/app/model/MutantCycle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantCycle": () => (/* binding */ MutantCycle)
/* harmony export */ });
/* harmony import */ var _ExecConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExecConfiguration */ 5450);

class MutantCycle {
    constructor(mutants, id, execConfiguration) {
        this.id = 0;
        this.mutants = [];
        this.date = new Date();
        this.newlyGenerated = false;
        if (mutants) {
            this.mutants = [...mutants];
        }
        if (id) {
            this.id = id;
        }
        if (execConfiguration) {
            this.execConfiguration = execConfiguration;
        }
        else {
            this.execConfiguration = new _ExecConfiguration__WEBPACK_IMPORTED_MODULE_0__.ExecConfiguration();
        }
        this.date = new Date();
    }
    addMutant(mutant) {
        this.mutants.push(mutant);
    }
}


/***/ }),

/***/ 4882:
/*!***************************************!*\
  !*** ./src/app/model/MutantResult.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantResult": () => (/* binding */ MutantResult),
/* harmony export */   "Result": () => (/* binding */ Result)
/* harmony export */ });
var Result;
(function (Result) {
    Result["KILLED"] = "Killed";
    Result["ALIVE"] = "Alive";
    Result["ZOMBIE"] = "Zombie";
})(Result || (Result = {}));
class MutantResult {
    constructor(MutantResult) {
        this.id = MutantResult.id;
        this.result = MutantResult.result;
    }
}


/***/ }),

/***/ 7525:
/*!*****************************************!*\
  !*** ./src/app/model/OperatorFamily.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Operator": () => (/* binding */ Operator),
/* harmony export */   "OperatorFamily": () => (/* binding */ OperatorFamily)
/* harmony export */ });
class OperatorFamily {
    constructor(name, operators) {
        this.operators = [];
        this.name = name;
        for (let i = 0; i < operators.length; i++)
            this.operators.push(new Operator(operators[i]));
    }
    select() {
        this.operators.forEach(op => op.selected = !op.selected);
    }
}
class Operator {
    constructor(operator) {
        this.selected = false;
        this.name = operator.name;
        this.id = operator.id;
        // Si enabled no está definido, asumimos true para que se muestre
        this.enabled = operator.enabled !== undefined ? operator.enabled : true;
        this.description = operator.description;
        this.selected = operator.selected || false;
    }
}


/***/ }),

/***/ 9176:
/*!**********************************!*\
  !*** ./src/app/model/Project.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _QProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QProgram */ 4228);

class Project {
    constructor(id, name, qProgram, mutantCycles, fromServer = false, projectNotes) {
        this.id = crypto.randomUUID();
        this.name = "";
        this.qProgram = new _QProgram__WEBPACK_IMPORTED_MODULE_0__.QProgram();
        this.mutantCycles = [];
        this.projectNotes = [];
        /**
         * Estado de guardado del proyecto (solo frontend, no se persiste en backend)
         * - false: El proyecto tiene cambios sin guardar
         * - true: El proyecto está guardado y sincronizado
         */
        this._saved = false;
        if (id) {
            this.id = id;
        }
        if (name) {
            this.name = name;
        }
        if (qProgram) {
            this.qProgram = qProgram;
        }
        if (mutantCycles) {
            this.mutantCycles = mutantCycles;
        }
        if (projectNotes) {
            this.projectNotes = projectNotes;
        }
        // Si viene del servidor, está guardado; si es nuevo, no lo está
        this._saved = fromServer;
    }
    get saved() {
        return this._saved;
    }
    set saved(value) {
        this._saved = value;
    }
    /**
     * Marca el proyecto como modificado (no guardado)
     */
    markAsModified() {
        this._saved = false;
    }
    /**
     * Marca el proyecto como guardado
     */
    markAsSaved() {
        this._saved = true;
    }
    addMutantCycle(mutantCycle) {
        this.mutantCycles.push(mutantCycle);
    }
    getQubits() {
        return this.qProgram.getQubits();
    }
}


/***/ }),

/***/ 4454:
/*!**************************************!*\
  !*** ./src/app/model/ProjectNote.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectNote": () => (/* binding */ ProjectNote)
/* harmony export */ });
/**
 * Modelo para las notas del proyecto
 */
class ProjectNote {
    constructor(title = '', text = '', type = 'QuMu', id, timestamp) {
        this.id = id || crypto.randomUUID();
        this.title = title;
        this.text = text;
        this.type = type;
        this.timestamp = timestamp || new Date();
    }
    /**
     * Actualiza el timestamp a la fecha/hora actual
     */
    updateTimestamp() {
        this.timestamp = new Date();
    }
    /**
     * Clona la nota
     */
    clone() {
        return new ProjectNote(this.title, this.text, this.type, crypto.randomUUID(), // Nuevo ID para el clon
        new Date());
    }
}


/***/ }),

/***/ 1999:
/*!***********************************!*\
  !*** ./src/app/model/QCircuit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QCircuit": () => (/* binding */ QCircuit)
/* harmony export */ });
class QCircuit {
    constructor(id, quirkCode) {
        this.id = crypto.randomUUID();
        this.textQuirkCode = "";
        this.mutableColumns = "-1,";
        this.mutableRows = "";
        if (id) {
            this.id = id;
        }
        if (quirkCode) {
            this.quirkCode = quirkCode;
            this.textQuirkCode = JSON.stringify(quirkCode);
            if (quirkCode.cols && Array.isArray(quirkCode.cols)) {
                for (let i = 0; i < quirkCode.cols.length; i++) {
                    this.mutableColumns += i + ",";
                }
                if (this.mutableColumns.endsWith(",")) {
                    this.mutableColumns = this.mutableColumns.substring(0, this.mutableColumns.length - 1);
                }
                for (let i = 0; i < quirkCode.qubits; i++) {
                    this.mutableRows += i + ",";
                }
                if (this.mutableRows.endsWith(",")) {
                    this.mutableRows = this.mutableRows.substring(0, this.mutableRows.length - 1);
                }
            }
        }
    }
    calculateMutableColumns() {
        if (!this.quirkCode) {
            return "";
        }
        let mutableColumns = "";
        for (let i = 0; i < this.quirkCode.cols.length; i++) {
            mutableColumns += i + ",";
        }
        if (mutableColumns.endsWith(",")) {
            mutableColumns = mutableColumns.substring(0, mutableColumns.length - 1);
        }
        return mutableColumns;
    }
    calculateMutableRows() {
        if (!this.quirkCode) {
            return "";
        }
        let numQubits = 0;
        if (this.quirkCode.qubits) {
            numQubits = this.quirkCode.qubits;
        }
        else if (this.quirkCode.cols) {
            for (let i = 0; i < this.quirkCode.cols.length; i++) {
                if (this.quirkCode.cols[i].length > numQubits) {
                    numQubits = this.quirkCode.cols[i].length;
                }
            }
        }
        let mutableRows = "";
        for (let i = 0; i < numQubits; i++) {
            mutableRows += i + ",";
        }
        if (mutableRows.endsWith(",")) {
            mutableRows = mutableRows.substring(0, mutableRows.length - 1);
        }
        return mutableRows;
    }
}


/***/ }),

/***/ 9044:
/*!********************************!*\
  !*** ./src/app/model/QCode.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QCode": () => (/* binding */ QCode)
/* harmony export */ });
class QCode {
    constructor(id, code, platform) {
        this.id = id;
        this.code = code;
        this.platform = platform;
    }
}


/***/ }),

/***/ 4228:
/*!***********************************!*\
  !*** ./src/app/model/QProgram.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QProgram": () => (/* binding */ QProgram)
/* harmony export */ });
/* harmony import */ var _QCircuit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QCircuit */ 1999);
/* harmony import */ var _QCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QCode */ 9044);


class QProgram {
    constructor(id, quirkCode) {
        this.id = crypto.randomUUID();
        this.qubits = -1;
        if (id)
            this.id = id;
        this.qCircuit = new _QCircuit__WEBPACK_IMPORTED_MODULE_0__.QCircuit(crypto.randomUUID(), quirkCode);
        this.qCode = new _QCode__WEBPACK_IMPORTED_MODULE_1__.QCode();
        //this.qubits = this.getQubits();
    }
    getNumberOfInputQubits() {
        return this.inputQubits.split(",").length;
    }
    getColumns() {
        if (this.qCircuit.quirkCode && this.qCircuit.quirkCode.cols)
            return this.qCircuit.quirkCode.cols.length;
        return 0; // Retornar 0 en lugar de -1 para circuitos sin código
    }
    getQubits() {
        if (this.qubits == -1) {
            // Verificar si quirkCode existe y tiene la estructura correcta
            if (!this.qCircuit.quirkCode || !this.qCircuit.quirkCode.cols || this.qCircuit.quirkCode.cols.length == 0)
                return 0; // Retornar 0 en lugar de -1 para circuitos sin código
            let columns = this.qCircuit.quirkCode.cols;
            for (let i = 0; i < columns.length; i++)
                if (columns[i].length > this.qubits)
                    this.qubits = columns[i].length;
        }
        return this.qubits;
    }
    buildFromQiskitCode(code) {
        let tokenStart = "q = QuantumRegister(";
        let tokenEnd = ", 'q')";
        let start = code.indexOf(tokenStart) + tokenStart.length;
        let end = code.indexOf(tokenEnd);
        let qubits = parseInt(code.substring(start, end));
        this.qubits = qubits;
        tokenStart = "qc.add_register(c)";
        start = code.indexOf(tokenStart) + tokenStart.length;
        tokenEnd = "qc.measure(";
        end = code.indexOf(tokenEnd);
        let gatesCode = code.substring(start, end).trim();
        let gates = gatesCode.split("\n");
        let cols = [];
        for (let i = 0; i < gates.length; i++) {
            let gate = gates[i];
            gate = gate.substring(3);
            let gateName = gate.substring(0, gate.indexOf("("));
            let gateQubits = this.getGateQubits(gate);
            let col = [];
            if (gateQubits.length == 1) {
                for (let j = 0; j < gateQubits[0]; j++)
                    col.push(1);
                col.push(gateName.toUpperCase());
            }
            else {
                for (let j = 0; j < gateQubits.length - 1; j++) {
                    if (gateName == "ccx")
                        col.push("•");
                }
                if (gateName == "ccx")
                    col.push("X");
            }
            cols.push(col);
        }
        let result = {
            cols: cols
        };
        this.qCircuit.quirkCode = result;
        this.qCircuit.textQuirkCode = JSON.stringify(this.qCircuit.quirkCode);
        tokenStart = "qc.measure(";
        tokenEnd = "job = ";
        start = code.indexOf(tokenStart);
        end = code.indexOf(tokenEnd);
        let measures = code.substring(start, end).trim().split("\n");
        this.outputQubits = "";
        for (let i = 0; i < measures.length; i++) {
            let measure = measures[i];
            let posIzdo = measure.indexOf("q[");
            let posDcho = measure.indexOf("],");
            let qubit = measure.substring(posIzdo + 3, posDcho - 1);
            this.outputQubits = this.outputQubits + qubit + ",";
        }
        this.outputQubits = this.outputQubits.substring(0, this.outputQubits.length - 1);
    }
    getGateQubits(gate) {
        let posIzdo = [];
        let posDcho = [];
        for (let i = 0; i < gate.length; i++) {
            if (gate[i] == "[")
                posIzdo.push(i);
            else if (gate[i] == "]")
                posDcho.push(i);
        }
        let qubits = [];
        for (let i = 0; i < posIzdo.length; i++) {
            let qubit = gate.substring(posIzdo[i] + 1, posDcho[i]);
            qubits.push(parseInt(qubit));
        }
        return qubits;
    }
    setMutableColumns() {
        if (this.qCircuit.quirkCode && this.qCircuit.quirkCode.cols && Array.isArray(this.qCircuit.quirkCode.cols)) {
            this.qCircuit.mutableColumns = "-1,"; // Reiniciar
            for (let i = 0; i < this.qCircuit.quirkCode.cols.length; i++)
                this.qCircuit.mutableColumns = this.qCircuit.mutableColumns + i + ",";
            if (this.qCircuit.mutableColumns.endsWith(","))
                this.qCircuit.mutableColumns = this.qCircuit.mutableColumns.substring(0, this.qCircuit.mutableColumns.length - 1);
        }
    }
    setMutableRows() {
        if (this.qubits > 0) {
            this.qCircuit.mutableRows = ""; // Reiniciar
            for (let i = 0; i < this.qubits; i++)
                this.qCircuit.mutableRows = this.qCircuit.mutableRows + i + ",";
            if (this.qCircuit.mutableRows.endsWith(","))
                this.qCircuit.mutableRows = this.qCircuit.mutableRows.substring(0, this.qCircuit.mutableRows.length - 1);
        }
    }
}


/***/ }),

/***/ 7723:
/*!******************************************************************!*\
  !*** ./src/app/mutant-cycle-info/mutant-cycle-info.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantCycleInfoComponent": () => (/* binding */ MutantCycleInfoComponent)
/* harmony export */ });
/* harmony import */ var _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/MutantResult */ 4882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _MutantsExecutor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MutantsExecutor */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _qumugen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../qumugen.service */ 2740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);








function MutantCycleInfoComponent_div_0_div_39_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 33)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 34)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 34)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 35)(14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const mutant_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("empty-cell", mutant_r6.mutantIndex === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mutant_r6.mutantIndex !== undefined ? mutant_r6.mutantIndex : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("empty-cell", !mutant_r6.mutationOperator);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mutant_r6.mutationOperator || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("empty-cell", mutant_r6.mutatedRow === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mutant_r6.mutatedRow !== undefined ? mutant_r6.mutatedRow : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("empty-cell", mutant_r6.mutatedColumn === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mutant_r6.mutatedColumn !== undefined ? mutant_r6.mutatedColumn : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r5.getResultBadgeClass(mutant_r6.result == null ? null : mutant_r6.result.result));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r5.getResultDisplayText(mutant_r6.result == null ? null : mutant_r6.result.result), " ");
} }
function MutantCycleInfoComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "table", 31)(3, "thead")(4, "tr")(5, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00CDndice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Operador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Fila");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Columna");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Resultado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, MutantCycleInfoComponent_div_0_div_39_tr_16_Template, 16, 14, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.mutantCycle.mutants)("ngForTrackBy", ctx_r2.trackByMutantIndex);
} }
function MutantCycleInfoComponent_div_0_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No hay mutantes en este ciclo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function MutantCycleInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MutantCycleInfoComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.runMutants()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "EXECUTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "path", 15)(18, "circle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Execution Configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Execution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function MutantCycleInfoComponent_div_0_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.updateExecutionDate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 21)(26, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Machine");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function MutantCycleInfoComponent_div_0_Template_input_input_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.updateMachine($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17)(30, "div", 24)(31, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Execution Algorithm");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function MutantCycleInfoComponent_div_0_Template_input_input_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.updateExecAlgorithm($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 13)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Killing Matrix ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, MutantCycleInfoComponent_div_0_div_39_Template, 17, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, MutantCycleInfoComponent_div_0_ng_template_40_Template, 5, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Mutant Cycle: ", ctx_r0.mutantCycle.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.getFormattedDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", (ctx_r0.mutantCycle.execConfiguration == null ? null : ctx_r0.mutantCycle.execConfiguration.machine) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", (ctx_r0.mutantCycle.execConfiguration == null ? null : ctx_r0.mutantCycle.execConfiguration.execAlgorithm) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.mutantCycle.mutants && ctx_r0.mutantCycle.mutants.length > 0)("ngIfElse", _r3);
} }
function MutantCycleInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "circle", 44)(3, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Select a Mutant Cycle to view its information");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
class MutantCycleInfoComponent extends _MutantsExecutor__WEBPACK_IMPORTED_MODULE_2__.MutantsExecutor {
    constructor(sanitizer, manager, /* public qe: QiskitExecutorService, */ qumugen) {
        super(sanitizer);
        this.sanitizer = sanitizer;
        this.manager = manager;
        this.qumugen = qumugen;
    }
    runOne(circuit, program) {
        throw new Error('Method not implemented.');
    }
    onExecute() {
        console.log('Executing mutant cycle:', this.mutantCycle);
        // Aquí puedes agregar la lógica para ejecutar el ciclo de mutantes
    }
    formatDate(date) {
        if (!date)
            return '';
        return date.toLocaleDateString();
    }
    updateExecutionDate(event) {
        const dateValue = event.target.value;
        if (this.mutantCycle?.execConfiguration && dateValue) {
            this.mutantCycle.execConfiguration.executionDate = new Date(dateValue);
        }
    }
    updateMachine(event) {
        const machineValue = event.target.value;
        if (this.mutantCycle?.execConfiguration) {
            this.mutantCycle.execConfiguration.machine = machineValue;
        }
    }
    updateExecAlgorithm(event) {
        const algorithmValue = event.target.value;
        if (this.mutantCycle?.execConfiguration) {
            this.mutantCycle.execConfiguration.execAlgorithm = algorithmValue;
        }
    }
    getFormattedDate() {
        if (!this.mutantCycle?.execConfiguration?.executionDate)
            return '';
        const date = this.mutantCycle.execConfiguration.executionDate;
        return date.toISOString().split('T')[0];
    }
    // Métodos para la tabla de killing matrix
    trackByMutantIndex(index, mutant) {
        return mutant.mutantIndex || index;
    }
    getResultBadgeClass(result) {
        if (!result)
            return 'pending';
        switch (result) {
            case _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__.Result.KILLED:
                return 'killed';
            case _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__.Result.ALIVE:
                return 'alive';
            case _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__.Result.ZOMBIE:
                return 'zombie';
            default:
                return 'pending';
        }
    }
    getResultDisplayText(result) {
        if (!result)
            return 'Pendiente';
        switch (result) {
            case _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__.Result.KILLED:
                return 'Eliminado';
            case _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__.Result.ALIVE:
                return 'Vivo';
            case _model_MutantResult__WEBPACK_IMPORTED_MODULE_0__.Result.ZOMBIE:
                return 'Zombie';
            default:
                return 'Pendiente';
        }
    }
    runMutants() {
        _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error = "";
        this.runningMutants = true;
        this.originalResults = [];
        this.mutantResults = [];
        this.aliveMutants = 0;
        this.killedMutants = 0;
        if (this.stopped)
            return;
        this.showModal("Executing original");
        // TODO: Reemplazar con ExecuterService.runOne()
        /* this.qe.runOne(this.manager.selectedProject!.qProgram, this.manager.inputQubits, this.manager.outputQubits, this.manager.executionAlgorithm, this.manager.selectedProject!.qProgram.qubits, false).subscribe(
          originalResults => {
            this.hideModal()
            if (this.stopped)
              return
    
            this.originalResults = originalResults
            let header1 = document.getElementById("header1")
            let header2 = document.getElementById("header2")
            let children = header1!.childElementCount
            for (let i = 1; i < children; i++) {
              let child = header1?.childNodes.item(1)
              header1?.removeChild(child!)
              child = header2?.childNodes.item(3)
              header2?.removeChild(child!)
            }
            if (this.stopped)
              return
    
            // TODO: Reemplazar con ExecuterService.getCores()
            this.qe.getCores().subscribe(
              result => {
                let chunkSize = 2 * result
                this._runMutants(0, chunkSize)
              },
              error => {
                this.hideModal()
                throw error
              }
            )
          }
        ) */
    }
    _runMutants(start, chunkSize) {
        let end = start + chunkSize;
        if (end > this.manager.mutants.length)
            end = this.manager.mutants.length;
        this.showModal(`Running mutants from ${start} to ${end}`); // Mostrar el modal con el rango de mutantes
        let mutants = this.manager.mutants.slice(start, end);
        if (mutants.length > 0) {
            this.qumugen.getMultipleQiskitCode(mutants).subscribe(results => {
                // TODO: Reemplazar con ExecuterService.executeWithoutStrategy()
                /* this.qe.executeWithoutStrategy(results, this.originalResults, this.manager.executionAlgorithm, this.manager.toleratedError).subscribe(
                  result => {
      
                    start = start + chunkSize
                    if (this.stopped)
                      return
      
                    if (start >= this.manager.mutants.length) {
                      this.hideModal(); // Ocultar el modal cuando termine la ejecución de todos los mutantes
                    } else {
                      this._runMutants(start, chunkSize); // Continuar con el siguiente lote de mutantes
                    }
                  },
                  error => {
                    this.hideModal()
                    throw error
                  }
                ) */
            }, error => {
                this.hideModal();
                throw error;
            });
        }
    }
}
MutantCycleInfoComponent.ɵfac = function MutantCycleInfoComponent_Factory(t) { return new (t || MutantCycleInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_3__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_qumugen_service__WEBPACK_IMPORTED_MODULE_4__.QumugenService)); };
MutantCycleInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MutantCycleInfoComponent, selectors: [["app-mutant-cycle-info"]], inputs: { mutantCycle: "mutantCycle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "mutant-cycle-container", 4, "ngIf"], ["class", "no-selection", 4, "ngIf"], [1, "mutant-cycle-container"], [1, "header"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "title-text"], [1, "execute-btn", 3, "click"], [1, "execute-text"], [1, "execute-icon"], ["width", "10", "height", "10", "viewBox", "0 0 24 24", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5 3l14 9-14 9V3z"], [1, "content"], [1, "section"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "form-row"], [1, "form-group"], ["for", "executionDate"], ["type", "date", "id", "executionDate", "name", "executionDate", 1, "form-input", 3, "value", "change"], [1, "form-group", "machine-group"], ["for", "machine"], ["type", "text", "id", "machine", "name", "machine", "placeholder", "Enter machine name", 1, "form-input", "machine-input", 3, "value", "input"], [1, "form-group", "algorithm-group"], ["for", "execAlgorithm"], ["type", "text", "id", "execAlgorithm", "name", "execAlgorithm", "placeholder", "Enter execution algorithm", 1, "form-input", "algorithm-input", 3, "value", "input"], ["d", "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [4, "ngIf", "ngIfElse"], ["emptyMatrix", ""], [1, "killing-matrix-container"], [1, "killing-matrix-table"], [1, "index-column"], [1, "operator-column"], [1, "position-column"], [1, "result-column"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "result-badge", 3, "ngClass"], [1, "killing-matrix-empty"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "empty-text"], [1, "no-selection"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 16v-4M12 8h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"]], template: function MutantCycleInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MutantCycleInfoComponent_div_0_Template, 42, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MutantCycleInfoComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mutantCycle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.mutantCycle);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\r\n.mutant-cycle-container[_ngcontent-%COMP%] {\r\n  background: var(--glass-bg-card);\r\n  backdrop-filter: blur(16px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n  border: 1px solid var(--border-glass);\r\n  border-radius: 16px;\r\n  padding: 2rem;\r\n  box-shadow:\r\n    0 4px 24px var(--shadow-glass),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 2.5rem;\r\n  padding-bottom: 1.5rem;\r\n  border-bottom: 2px solid var(--border-glass);\r\n}\r\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  color: var(--text-primary);\r\n  letter-spacing: -0.02em;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n}\r\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n  filter: drop-shadow(0 2px 4px var(--shadow-glass));\r\n}\r\n.execute-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background: var(--accent-gradient);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 12px;\r\n  padding: 0.75rem 1.25rem;\r\n  font-size: 0.875rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  letter-spacing: 0.05em;\r\n  box-shadow:\r\n    0 4px 12px var(--shadow-glass),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n.execute-btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow:\r\n    0 6px 16px var(--shadow-glass-strong),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n  filter: brightness(1.1);\r\n}\r\n.execute-btn[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n}\r\n.execute-text[_ngcontent-%COMP%] {\r\n  margin-right: 0.75rem;\r\n}\r\n.execute-icon[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0 0 1.5rem 0;\r\n  font-size: 1.125rem;\r\n  font-weight: 600;\r\n  color: var(--text-primary);\r\n  letter-spacing: 0.01em;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n}\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  align-items: flex-end;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  gap: 0.5rem;\r\n}\r\n.machine-group[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n.algorithm-group[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: var(--text-secondary);\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n}\r\n.form-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.875rem 1rem;\r\n  border: 2px solid transparent;\r\n  border-radius: 10px;\r\n  font-size: 0.9375rem;\r\n  color: var(--text-primary);\r\n  background: var(--glass-bg-card);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  transition: all 200ms ease;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n.form-input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  background: var(--glass-bg);\r\n  box-shadow: inset 0 0 0 2px var(--border-glass);\r\n  border-color: var(--accent-primary);\r\n}\r\n\r\n.killing-matrix-container[_ngcontent-%COMP%] {\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n  background: var(--glass-bg);\r\n  border: 1px solid var(--border-glass);\r\n  box-shadow: 0 4px 16px var(--shadow-glass);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-size: 0.875rem;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background: var(--glass-bg-hover);\r\n  border-bottom: 1px solid var(--border-glass);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 1rem 0.75rem;\r\n  text-align: left;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n  color: var(--text-primary);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  transition: all 200ms ease;\r\n  border-bottom: 1px solid var(--border-glass-light);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background: var(--glass-bg-hover);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.875rem 0.75rem;\r\n  vertical-align: middle;\r\n  color: var(--text-secondary);\r\n}\r\n\r\n.killing-matrix-table[_ngcontent-%COMP%]   .index-column[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  color: var(--text-primary);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   .operator-column[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  font-weight: 500;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   .position-column[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  text-align: center;\r\n  font-family: 'JetBrains Mono', monospace;\r\n  font-size: 0.8125rem;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   .result-column[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n.killing-matrix-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  font-style: italic;\r\n}\r\n\r\n.result-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.25rem 0.75rem;\r\n  border-radius: 20px;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n  min-width: 80px;\r\n}\r\n.result-badge.killed[_ngcontent-%COMP%] {\r\n  background: rgba(239, 68, 68, 0.1);\r\n  color: #ef4444;\r\n  border: 1px solid rgba(239, 68, 68, 0.2);\r\n}\r\n.result-badge.alive[_ngcontent-%COMP%] {\r\n  background: rgba(16, 185, 129, 0.1);\r\n  color: #10b981;\r\n  border: 1px solid rgba(16, 185, 129, 0.2);\r\n}\r\n.result-badge.error[_ngcontent-%COMP%] {\r\n  background: rgba(245, 158, 11, 0.1);\r\n  color: #f59e0b;\r\n  border: 1px solid rgba(245, 158, 11, 0.2);\r\n}\r\n.result-badge.zombie[_ngcontent-%COMP%] {\r\n  background: rgba(139, 92, 246, 0.1);\r\n  color: #8b5cf6;\r\n  border: 1px solid rgba(139, 92, 246, 0.2);\r\n}\r\n.result-badge.pending[_ngcontent-%COMP%] {\r\n  background: rgba(107, 114, 128, 0.1);\r\n  color: #6b7280;\r\n  border: 1px solid rgba(107, 114, 128, 0.2);\r\n}\r\n\r\n.killing-matrix-empty[_ngcontent-%COMP%] {\r\n  border: 2px dashed var(--border-glass);\r\n  border-radius: 12px;\r\n  padding: 3rem;\r\n  text-align: center;\r\n  background: var(--glass-bg-card);\r\n  min-height: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  transition: all 300ms ease;\r\n}\r\n.killing-matrix-empty[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--accent-primary);\r\n  background: var(--glass-bg-hover);\r\n}\r\n.killing-matrix-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n  opacity: 0.5;\r\n}\r\n.empty-text[_ngcontent-%COMP%] {\r\n  color: var(--text-secondary);\r\n  font-style: italic;\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n.no-selection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 400px;\r\n  background: var(--glass-bg-card);\r\n  -webkit-backdrop-filter: blur(8px);\r\n          backdrop-filter: blur(8px);\r\n  border-radius: 16px;\r\n  border: 2px dashed var(--border-glass);\r\n  gap: 1.5rem;\r\n}\r\n.no-selection[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n  opacity: 0.4;\r\n}\r\n.no-selection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--text-secondary);\r\n  font-size: 1.125rem;\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .mutant-cycle-container[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .form-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    text-align: center;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .execute-btn[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n  }\r\n\r\n  \r\n  .killing-matrix-container[_ngcontent-%COMP%] {\r\n    overflow-x: auto;\r\n  }\r\n\r\n  .killing-matrix-table[_ngcontent-%COMP%] {\r\n    min-width: 600px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudC1jeWNsZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1HQUFtRztBQUNuRyxvR0FBb0c7QUFGcEcsd0RBQXdEO0FBSXhEO0VBQ0UsY0FBYztFQUNkLCtFQUErRTtFQUMvRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywwQ0FBMEM7RUFDMUMsa0RBQWtEO0VBQ2xELHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiOzswQ0FFd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1REFBdUQ7QUFDekQ7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0RBQWtEO0FBQ3BEO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELHNCQUFzQjtFQUN0Qjs7MENBRXdDO0FBQzFDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0I7OzBDQUV3QztFQUN4Qyx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztBQUNiO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFFQTtFQUNFLE9BQU87QUFDVDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLCtDQUErQztFQUMvQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsK0NBQStDO0VBQy9DLG1DQUFtQztBQUNyQztBQUVBLGdDQUFnQztBQUNoQztFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQywwQ0FBMEM7QUFDNUM7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2Qsd0NBQXdDO0FBQzFDO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QseUNBQXlDO0FBQzNDO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLDBDQUEwQztBQUM1QztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUVBLGVBQWU7QUFDZjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBLDRCQUE0QjtFQUM1QjtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6Im11dGFudC1jeWNsZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNdXRhbnQgQ3ljbGUgSW5mbyBDb21wb25lbnQgLSBHbGFzc21vcnBoaXNtIFF1YW50dW0gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi5tdXRhbnQtY3ljbGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgNHB4IDI0cHggdmFyKC0tc2hhZG93LWdsYXNzKSxcclxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluVXAgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyIGgyIHN2ZyB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCB2YXIoLS1zaGFkb3ctZ2xhc3MpKTtcclxufVxyXG5cclxuLmV4ZWN1dGUtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA0cHggMTJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5leGVjdXRlLWJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDZweCAxNnB4IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XHJcbn1cclxuXHJcbi5leGVjdXRlLWJ0bjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmV4ZWN1dGUtdGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG59XHJcblxyXG4uZXhlY3V0ZS1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiBoMyB7XHJcbiAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiBoMyBzdmcge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDE7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tYWNoaW5lLWdyb3VwIHtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4uYWxnb3JpdGhtLWdyb3VwIHtcclxuICBmbGV4OiAzO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG59XHJcblxyXG4vKiBLaWxsaW5nIE1hdHJpeCBUYWJsZSBTdHlsZXMgKi9cclxuLmtpbGxpbmctbWF0cml4LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSB0aGVhZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgdGgge1xyXG4gIHBhZGRpbmc6IDFyZW0gMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIHRib2R5IHRyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDAuNzVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4vKiBDb2x1bW4gc3BlY2lmaWMgc3R5bGVzICovXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSAuaW5kZXgtY29sdW1uIHtcclxuICB3aWR0aDogODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIC5vcGVyYXRvci1jb2x1bW4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgLnBvc2l0aW9uLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgLnJlc3VsdC1jb2x1bW4ge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEVtcHR5IGNlbGwgc3R5bGluZyAqL1xyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgLmVtcHR5LWNlbGwge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi8qIFJlc3VsdCBzdGF0dXMgYmFkZ2VzICovXHJcbi5yZXN1bHQtYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuLnJlc3VsdC1iYWRnZS5raWxsZWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMSk7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4yKTtcclxufVxyXG5cclxuLnJlc3VsdC1iYWRnZS5hbGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMSk7XHJcbiAgY29sb3I6ICMxMGI5ODE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XHJcbn1cclxuXHJcbi5yZXN1bHQtYmFkZ2UuZXJyb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjEpO1xyXG4gIGNvbG9yOiAjZjU5ZTBiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAxNTgsIDExLCAwLjIpO1xyXG59XHJcblxyXG4ucmVzdWx0LWJhZGdlLnpvbWJpZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMzksIDkyLCAyNDYsIDAuMSk7XHJcbiAgY29sb3I6ICM4YjVjZjY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzksIDkyLCAyNDYsIDAuMik7XHJcbn1cclxuXHJcbi5yZXN1bHQtYmFkZ2UucGVuZGluZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMDcsIDExNCwgMTI4LCAwLjEpO1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA3LCAxMTQsIDEyOCwgMC4yKTtcclxufVxyXG5cclxuLyogRW1wdHkgc3RhdGUgKi9cclxuLmtpbGxpbmctbWF0cml4LWVtcHR5IHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LWVtcHR5OmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1ob3Zlcik7XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC1lbXB0eSBzdmcge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZW1wdHktdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLm5vLXNlbGVjdGlvbiBzdmcge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4ubm8tc2VsZWN0aW9uIHAge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm11dGFudC1jeWNsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgaDIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5leGVjdXRlLWJ0biB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgdGFibGUgc3R5bGVzICovXHJcbiAgLmtpbGxpbmctbWF0cml4LWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmtpbGxpbmctbWF0cml4LXRhYmxlIHtcclxuICAgIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 180:
/*!********************************************************!*\
  !*** ./src/app/mutants-code/mutants-code.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantsCodeComponent": () => (/* binding */ MutantsCodeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);




class MutantsCodeComponent {
    constructor(manager, sanitizer) {
        this.manager = manager;
        this.sanitizer = sanitizer;
        this.selectedMutant = null;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.highlightedMutantCode = '';
    }
    ngOnInit() {
        this.subscription.add(this.manager.selectedMutant$.subscribe(mutant => {
            this.selectedMutant = mutant;
            this.updateHighlightedCode();
        }));
    }
    ngAfterViewInit() {
        this.updateHighlightedCode();
    }
    updateHighlightedCode() {
        if (this.selectedMutant?.circuit?.qCode.code && this.manager.selectedProject?.qProgram.qCode.code) {
            const originalCode = Array.isArray(this.manager.selectedProject?.qProgram.qCode.code)
                ? this.manager.selectedProject.qProgram.qCode.code.join('\n')
                : this.manager.selectedProject.qProgram.qCode.code;
            const mutantCode = Array.isArray(this.selectedMutant.circuit.qCode.code)
                ? this.selectedMutant.circuit.qCode.code.join('\n')
                : this.selectedMutant.circuit.qCode.code;
            this.highlightedMutantCode = this.sanitizer.bypassSecurityTrustHtml(this.highlightDifferences(originalCode, mutantCode));
        }
        else {
            const fallbackCode = this.selectedMutant?.circuit?.qCode.code;
            this.highlightedMutantCode = Array.isArray(fallbackCode)
                ? fallbackCode.join('\n')
                : (fallbackCode || '');
        }
    }
    highlightDifferences(original, mutant) {
        const originalLines = original.split('\n');
        const mutantLines = mutant.split('\n');
        const maxLines = Math.max(originalLines.length, mutantLines.length);
        let result = '';
        for (let i = 0; i < maxLines; i++) {
            const originalLine = originalLines[i] || '';
            const mutantLine = mutantLines[i] || '';
            if (originalLine !== mutantLine) {
                // Línea completa diferente - resaltar en amarillo
                result += `<span style="background-color: yellow;">${this.escapeHtml(mutantLine)}</span>`;
            }
            else {
                // Línea igual
                result += this.escapeHtml(mutantLine);
            }
            if (i < maxLines - 1) {
                result += '\n';
            }
        }
        return result;
    }
    getOriginalCode() {
        const code = this.manager.selectedProject?.qProgram.qCode.code;
        return Array.isArray(code) ? code.join('\n') : (code || '');
    }
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
MutantsCodeComponent.ɵfac = function MutantsCodeComponent_Factory(t) { return new (t || MutantsCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_0__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer)); };
MutantsCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MutantsCodeComponent, selectors: [["app-mutants-code"]], decls: 16, vars: 2, consts: [[1, "container"], [1, "code-section"], [1, "section-title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 18l6-6-6-6M8 6l-6 6 6 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "originalCode", "readonly", "", 1, "code-textarea"], ["cx", "12", "cy", "12", "r", "2", "fill", "currentColor"], [1, "code-display", 3, "innerHTML"]], template: function MutantsCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body")(1, "div", 0)(2, "div", 1)(3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " ORIGINAL CODE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 4)(13, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " MUTANT CODE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getOriginalCode());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.highlightedMutantCode, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    background: var(--bg-gradient);\r\n    color: var(--text-primary);\r\n    line-height: 1.6;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.code-section[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 16px;\r\n    overflow: hidden;\r\n    box-shadow:\r\n        0 4px 24px var(--shadow-glass),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n.code-section[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    box-shadow:\r\n        0 8px 32px var(--shadow-glass-strong),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    border-color: var(--accent-primary);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    background: var(--accent-gradient);\r\n    color: white;\r\n    padding: 1rem 1.5rem;\r\n    margin: 0;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid rgba(255, 255, 255, 0.2);\r\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n.section-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.code-textarea[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    border: none;\r\n    background: var(--glass-bg);\r\n    resize: none;\r\n    font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;\r\n    font-size: 0.875rem;\r\n    line-height: 1.7;\r\n    color: var(--text-primary);\r\n    min-height: 500px;\r\n    overflow-y: auto;\r\n    transition: all 200ms ease;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background: var(--glass-bg-hover);\r\n    box-shadow: inset 0 0 0 2px var(--border-glass);\r\n}\r\n\r\n.code-display[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    border: none;\r\n    background: var(--glass-bg);\r\n    font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;\r\n    font-size: 0.875rem;\r\n    line-height: 1.7;\r\n    color: var(--text-primary);\r\n    min-height: 500px;\r\n    overflow-y: auto;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: rgba(157, 192, 169, 0.05);\r\n    border-radius: 4px;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: var(--border-glass);\r\n    border-radius: 4px;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: var(--accent-primary);\r\n}\r\n\r\n.code-display[_ngcontent-%COMP%]     .highlight {\r\n    background: rgba(16, 185, 129, 0.15);\r\n    border-radius: 3px;\r\n    padding: 0 4px;\r\n    font-weight: 600;\r\n    color: #10b981;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .keyword {\r\n    color: var(--accent-primary);\r\n    font-weight: 600;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .string {\r\n    color: #84cc16;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .comment {\r\n    color: var(--text-muted);\r\n    font-style: italic;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .number {\r\n    color: #f59e0b;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        max-width: 900px;\r\n        padding: 0;\r\n    }\r\n\r\n    .code-section[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.875rem 1.25rem;\r\n        font-size: 0.8125rem;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        padding: 1.25rem;\r\n        font-size: 0.8125rem;\r\n        min-height: 350px;\r\n    }\r\n}\r\n@media (max-width: 480px) {\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.75rem 1rem;\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n        font-size: 0.75rem;\r\n        min-height: 300px;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\r\n\r\n@media print {\r\n    .container[_ngcontent-%COMP%] {\r\n        box-shadow: none;\r\n        border: 1px solid #ccc;\r\n        padding: 1rem;\r\n        background: white;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        background: #f0f0f0 !important;\r\n        color: #333 !important;\r\n        border-bottom: 2px solid #333;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        background: white !important;\r\n        border: 1px solid #ccc;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtR0FBbUc7QUFDbkcsb0dBQW9HO0FBRnBHLG1EQUFtRDtBQUluRDtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLCtFQUErRTtJQUMvRSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVBLHFDQUFxQztBQUNyQztJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQywwQ0FBMEM7SUFDMUMsa0RBQWtEO0lBQ2xELHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCOzs4Q0FFMEM7SUFDMUMsa0RBQWtEO0lBQ2xELHVEQUF1RDtBQUMzRDtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDOzs4Q0FFMEM7SUFDMUMsbUNBQW1DO0FBQ3ZDO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixpREFBaUQ7SUFDakQsa0RBQWtEO0lBQ2xELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaURBQWlEO0FBQ3JEO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7SUFDWiwyRUFBMkU7SUFDM0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsK0NBQStDO0FBQ25EO0FBRUEsc0RBQXNEO0FBQ3REO0lBQ0ksT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDJFQUEyRTtJQUMzRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7QUFFQSxzQkFBc0I7QUFDdEI7O0lBRUksVUFBVTtBQUNkO0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7O1FBRUksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLG9CQUFvQjtJQUN4Qjs7SUFFQTs7UUFFSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFSTs7O1FBR0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQztBQUNKO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQzs7SUFFQTs7UUFFSSw0QkFBNEI7UUFDNUIsc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoibXV0YW50cy1jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNdXRhbnRzIENvZGUgQ29tcG9uZW50IC0gR2xhc3Ntb3JwaGlzbSBRdWFudHVtICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctZ3JhZGllbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIENvZGUgU2VjdGlvbiBTdHlsZXMgLSBHbGFzcyBDYXJkICovXHJcbi5jb2RlLXNlY3Rpb24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA0cHggMjRweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDQwMG1zIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG59XHJcblxyXG4uY29kZS1zZWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA4cHggMzJweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG59XHJcblxyXG4vKiBTZWN0aW9uIFRpdGxlIFN0eWxlcyAqL1xyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgc3ZnIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxufVxyXG5cclxuLyogQ29kZSBUZXh0YXJlYSBTdHlsZXMgKi9cclxuLmNvZGUtdGV4dGFyZWEge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCAnRmlyYSBDb2RlJywgJ01vbmFjbycsICdDb25zb2xhcycsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLmNvZGUtdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG59XHJcblxyXG4vKiBDb2RlIERpc3BsYXkgU3R5bGVzIChmb3IgaGlnaGxpZ2h0ZWQgZGlmZmVyZW5jZXMpICovXHJcbi5jb2RlLWRpc3BsYXkge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCAnRmlyYSBDb2RlJywgJ01vbmFjbycsICdDb25zb2xhcycsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBTdHlsaW5nICovXHJcbi5jb2RlLXRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmNvZGUtZGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuLmNvZGUtdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4uY29kZS1kaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NywgMTkyLCAxNjksIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY29kZS10ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5jb2RlLWRpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jb2RlLXRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLmNvZGUtZGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG59XHJcblxyXG4vKiBTeW50YXggSGlnaGxpZ2h0aW5nIFN1cHBvcnQgKi9cclxuLmNvZGUtZGlzcGxheSA6Om5nLWRlZXAgLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxufVxyXG5cclxuLmNvZGUtZGlzcGxheSA6Om5nLWRlZXAgLmtleXdvcmQge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb2RlLWRpc3BsYXkgOjpuZy1kZWVwIC5zdHJpbmcge1xyXG4gICAgY29sb3I6ICM4NGNjMTY7XHJcbn1cclxuXHJcbi5jb2RlLWRpc3BsYXkgOjpuZy1kZWVwIC5jb21tZW50IHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmNvZGUtZGlzcGxheSA6Om5nLWRlZXAgLm51bWJlciB7XHJcbiAgICBjb2xvcjogI2Y1OWUwYjtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvZGUtc2VjdGlvbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvZGUtdGV4dGFyZWEsXHJcbiAgICAuY29kZS1kaXNwbGF5IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2RlLXRleHRhcmVhLFxyXG4gICAgLmNvZGUtZGlzcGxheSB7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29kZS10ZXh0YXJlYSxcclxuICAgIC5jb2RlLWRpc3BsYXkge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBQcmludCBzdHlsZXMgKi9cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcclxuICAgIH1cclxuXHJcbiAgICAuY29kZS10ZXh0YXJlYSxcclxuICAgIC5jb2RlLWRpc3BsYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 9864:
/*!**************************************************************!*\
  !*** ./src/app/mutants-general/mutants-general.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantsGeneralComponent": () => (/* binding */ MutantsGeneralComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager.service */ 8842);



class MutantsGeneralComponent {
    constructor(manager) {
        this.manager = manager;
        this.selectedMutant = null;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.manager.selectedMutant$.subscribe(mutant => {
            this.selectedMutant = mutant;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
MutantsGeneralComponent.ɵfac = function MutantsGeneralComponent_Factory(t) { return new (t || MutantsGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_0__.ManagerService)); };
MutantsGeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MutantsGeneralComponent, selectors: [["app-mutants-general"]], decls: 26, vars: 3, consts: [[1, "container"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "section"], [1, "row"], [1, "field"], ["for", "operator"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 12h8M12 8v8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "string", "id", "operator", "name", "operator", "readonly", "", 1, "input", 3, "value"], [1, "field-small"], ["for", "column"], ["d", "M6 4v16M12 4v16M18 4v16", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "number", "id", "column", "name", "column", "min", "-1", "readonly", "", 1, "input", 3, "value"], ["for", "row"], ["d", "M4 6h16M4 12h16M4 18h16", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "number", "id", "row", "name", "row", "min", "1", "readonly", "", 1, "input", 3, "value"]], template: function MutantsGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Mutant Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "circle", 8)(11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " OPERATOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " COLUMN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " ROW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (ctx.selectedMutant == null ? null : ctx.selectedMutant.operator == null ? null : ctx.selectedMutant.operator.name) || (ctx.selectedMutant == null ? null : ctx.selectedMutant.mutationOperator));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedMutant == null ? null : ctx.selectedMutant.mutatedColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedMutant == null ? null : ctx.selectedMutant.mutatedRow);
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n.container[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\n\nh1[_ngcontent-%COMP%] {\r\n  color: var(--text-primary);\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  letter-spacing: -0.02em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.75rem;\r\n}\nh1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n  flex-shrink: 0;\r\n  filter: drop-shadow(0 2px 4px var(--shadow-glass));\r\n}\nh2[_ngcontent-%COMP%] {\r\n  color: var(--text-primary);\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  margin: 2rem 0 1.5rem 0;\r\n  letter-spacing: -0.01em;\r\n}\n\n.section[_ngcontent-%COMP%] {\r\n  background: var(--glass-bg-card);\r\n  backdrop-filter: blur(16px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n  border: 1px solid var(--border-glass);\r\n  border-radius: 16px;\r\n  padding: 2rem;\r\n  margin-bottom: 1.5rem;\r\n  box-shadow:\r\n    0 4px 24px var(--shadow-glass),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n.section[_ngcontent-%COMP%]:hover {\r\n  background: var(--glass-bg-hover);\r\n  box-shadow:\r\n    0 8px 32px var(--shadow-glass-strong),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n  border-color: var(--accent-primary);\r\n}\n\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  align-items: flex-end;\r\n}\n.row[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}\n\n.field[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 2;\r\n  min-width: 200px;\r\n  gap: 0.5rem;\r\n}\n.field-small[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  min-width: 120px;\r\n  gap: 0.5rem;\r\n}\n\n.two-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1.5rem;\r\n  margin-top: 1rem;\r\n}\n.column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  gap: 0.5rem;\r\n}\n\nlabel[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: var(--text-secondary);\r\n  font-size: 0.75rem;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\nlabel[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n  flex-shrink: 0;\r\n}\n\n.input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.875rem 1rem;\r\n  border: 2px solid transparent;\r\n  border-radius: 10px;\r\n  font-size: 0.9375rem;\r\n  font-weight: 500;\r\n  color: var(--text-primary);\r\n  background: var(--glass-bg-card);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  transition: all 200ms ease;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n  font-family: 'Inter', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\n\n.input[_ngcontent-%COMP%]:disabled, .input[readonly][_ngcontent-%COMP%] {\r\n  background: var(--glass-bg);\r\n  color: var(--text-muted);\r\n  cursor: default;\r\n  border-color: var(--border-glass-light);\r\n}\n.input[_ngcontent-%COMP%]:disabled:focus, .input[readonly][_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: var(--border-glass-light);\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n}\n\n.input[disabled][_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  appearance: none;\r\n  background-image: none;\r\n  padding-right: 0.875rem;\r\n}\nselect.input[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 1rem center;\r\n  padding-right: 2.5rem;\r\n}\n[data-theme='dark'][_ngcontent-%COMP%]   select.input[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\r\n}\nselect.input[_ngcontent-%COMP%]:disabled {\r\n  background-image: none;\r\n  padding-right: 0.875rem;\r\n}\n\n.input[type=\"number\"][readonly][_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: 600;\r\n  color: var(--accent-primary);\r\n}\n\n.debug-info[_ngcontent-%COMP%] {\r\n  background: rgba(239, 68, 68, 0.05);\r\n  border: 1px solid rgba(239, 68, 68, 0.2);\r\n  border-radius: 8px;\r\n  padding: 1rem;\r\n  margin-top: 2rem;\r\n  font-size: 0.875rem;\r\n  color: var(--text-secondary);\r\n}\n.debug-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #ef4444;\r\n  font-size: 1rem;\r\n  margin: 0 0 0.5rem 0;\r\n}\n.debug-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0.25rem 0;\r\n  font-family: 'Monaco', 'Consolas', monospace;\r\n  font-size: 0.8125rem;\r\n}\n\n@media (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n\r\n  .section[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n    border-radius: 12px;\r\n  }\r\n\r\n  .row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .two-column[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%], .field-small[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n  }\r\n}\n@media (max-width: 480px) {\r\n  .section[_ngcontent-%COMP%] {\r\n    padding: 1.25rem;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .input[_ngcontent-%COMP%] {\r\n    padding: 0.75rem 0.875rem;\r\n    font-size: 0.875rem;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 0.6875rem;\r\n  }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    animation-duration: 0.01ms !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\n.input[_ngcontent-%COMP%]:focus-visible {\r\n  outline: 2px solid var(--accent-primary);\r\n  outline-offset: 2px;\r\n}\n\n.section[_ngcontent-%COMP%] {\r\n  animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtZ2VuZXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtR0FBbUc7QUFEbkcsc0RBQXNEO0FBR3REO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsK0VBQStFO0VBQy9FLHVCQUF1QjtBQUN6QjtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxnQ0FBZ0M7RUFDaEMsMENBQTBDO0VBQzFDLGtEQUFrRDtFQUNsRCxxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckI7OzBDQUV3QztFQUN4QyxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLGlDQUFpQztFQUNqQzs7MENBRXdDO0VBQ3hDLG1DQUFtQztBQUNyQztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztBQUNiO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLCtDQUErQztFQUMvQyxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCO0FBRUEsa0NBQWtDO0FBQ2xDOztFQUVFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVDQUF1QztBQUN6QztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsK0NBQStDO0FBQ2pEO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSwwTEFBMEw7RUFDMUwsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDBMQUEwTDtBQUM1TDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0FBQzlCO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxvQkFBb0I7QUFDdEI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjtBQUVBLGtCQUFrQjtBQUNsQjs7RUFFRTs7O0lBR0UscUNBQXFDO0lBQ3JDLHNDQUFzQztFQUN4QztBQUNGO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsdURBQXVEO0FBQ3pEO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0YiLCJmaWxlIjoibXV0YW50cy1nZW5lcmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNdXRhbnRzIEdlbmVyYWwgQ29tcG9uZW50IC0gR2xhc3Ntb3JwaGlzbSBRdWFudHVtICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLyogSGVhZGVyIFN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuaDEgc3ZnIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHZhcigtLXNoYWRvdy1nbGFzcykpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAycmVtIDAgMS41cmVtIDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi8qIFNlY3Rpb24gU3R5bGVzIC0gR2xhc3MgQ2FyZCAqL1xyXG4uc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA0cHggMjRweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1ob3Zlcik7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgOHB4IDMycHggdmFyKC0tc2hhZG93LWdsYXNzLXN0cm9uZyksXHJcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLyogUm93IExheW91dCAtIEFkZCBmbGV4LXdyYXAgdG8gcHJldmVudCBvdmVybGFwICovXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5yb3c6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogRmllbGQgU3R5bGVzICovXHJcbi5maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDI7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmZpZWxkLXNtYWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBUd28gQ29sdW1uIExheW91dCAqL1xyXG4udHdvLWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLyogTGFiZWwgU3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbmxhYmVsIHN2ZyB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLyogRm9ybSBDb250cm9scyAtIEdsYXNzIElucHV0ICovXHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLyogUmVhZC1vbmx5IGFuZCBkaXNhYmxlZCBzdGF0ZXMgKi9cclxuLmlucHV0OmRpc2FibGVkLFxyXG4uaW5wdXRbcmVhZG9ubHldIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbn1cclxuXHJcbi5pbnB1dDpkaXNhYmxlZDpmb2N1cyxcclxuLmlucHV0W3JlYWRvbmx5XTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbn1cclxuXHJcbi8qIFNlbGVjdCBzcGVjaWZpYyBzdHlsZXMgKi9cclxuLmlucHV0W2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjg3NXJlbTtcclxufVxyXG5cclxuc2VsZWN0LmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgMTIgMTInJTNFJTNDcGF0aCBmaWxsPSclMjM0YTU1NjgnIGQ9J002IDlMMSA0aDEweicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDFyZW0gY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcclxufVxyXG5cclxuW2RhdGEtdGhlbWU9J2RhcmsnXSBzZWxlY3QuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzk0YTNiOCcgZD0nTTYgOUwxIDRoMTB6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG5zZWxlY3QuaW5wdXQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgcGFkZGluZy1yaWdodDogMC44NzVyZW07XHJcbn1cclxuXHJcbi8qIElucHV0IG51bWJlciBzcGVjaWZpYyBzdHlsZXMgKi9cclxuLmlucHV0W3R5cGU9XCJudW1iZXJcIl1bcmVhZG9ubHldIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG59XHJcblxyXG4vKiBEZWJ1ZyBJbmZvIChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cclxuLmRlYnVnLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LCA2OCwgNjgsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5kZWJ1Zy1pbmZvIGgzIHtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbn1cclxuXHJcbi5kZWJ1Zy1pbmZvIHAge1xyXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9uYWNvJywgJ0NvbnNvbGFzJywgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnR3by1jb2x1bW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5maWVsZCxcclxuICAuZmllbGQtc21hbGwge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuODc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogQWNjZXNzaWJpbGl0eSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG5cclxuICAqLFxyXG4gICo6OmJlZm9yZSxcclxuICAqOjphZnRlciB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gZm9yIHNtb290aCBlbnRyYW5jZSAqL1xyXG4uc2VjdGlvbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 743:
/*!********************************************************!*\
  !*** ./src/app/mutants-info/mutants-info.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantsInfoComponent": () => (/* binding */ MutantsInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _mutants_code_mutants_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mutants-code/mutants-code.component */ 180);
/* harmony import */ var _mutants_visual_mutants_visual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mutants-visual/mutants-visual.component */ 8201);
/* harmony import */ var _mutants_general_mutants_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mutants-general/mutants-general.component */ 9864);






function MutantsInfoComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-mutants-general");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MutantsInfoComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-mutants-code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MutantsInfoComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-mutants-visual");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class MutantsInfoComponent {
    constructor(manager) {
        this.manager = manager;
        this.isCircuitValid = false;
        this.selectedTab = 'info';
    }
    ngOnInit() {
    }
    selectTab(tab) {
        this.selectedTab = tab;
    }
}
MutantsInfoComponent.ɵfac = function MutantsInfoComponent_Factory(t) { return new (t || MutantsInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_0__.ManagerService)); };
MutantsInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MutantsInfoComponent, selectors: [["app-mutants-info"]], decls: 39, vars: 10, consts: [[1, "mutant-title"], ["width", "24", "height", "24", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "qubit-glow-emerald", "x", "-50%", "y", "-50%", "width", "200%", "height", "200%"], ["stdDeviation", "3", "result", "blur"], ["flood-color", "#10b981", "result", "color"], ["in", "color", "in2", "blur", "operator", "in", "result", "glow"], ["in", "glow"], ["in", "SourceGraphic"], ["id", "qubit-glow-lime", "x", "-50%", "y", "-50%", "width", "200%", "height", "200%"], ["flood-color", "#84cc16", "result", "color"], ["d", "M35 50 Q 50 35, 65 50", "stroke", "rgba(16, 185, 129, 0.5)", "stroke-width", "2", "fill", "none", "stroke-linecap", "round"], ["cx", "35", "cy", "50", "r", "8", "fill", "#10b981", "filter", "url(#qubit-glow-emerald)"], ["cx", "65", "cy", "50", "r", "8", "fill", "#84cc16", "filter", "url(#qubit-glow-lime)"], [1, "tabs"], [1, "tab", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 16v-4M12 8h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M16 18l6-6-6-6M8 6l-6 6 6 6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [4, "ngIf"], [1, "info-content"], [1, "code-content"], [1, "visualization-content"]], template: function MutantsInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 1)(2, "defs")(3, "filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "feGaussianBlur", 3)(5, "feFlood", 4)(6, "feComposite", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "feMerge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "feMergeNode", 6)(9, "feMergeNode", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "filter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "feGaussianBlur", 3)(12, "feFlood", 9)(13, "feComposite", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "feMerge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "feMergeNode", 6)(16, "feMergeNode", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 10)(18, "circle", 11)(19, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MutantsInfoComponent_Template_button_click_22_listener() { return ctx.selectTab("info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "circle", 16)(25, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " INFO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MutantsInfoComponent_Template_button_click_27_listener() { return ctx.selectTab("code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " CODE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MutantsInfoComponent_Template_button_click_31_listener() { return ctx.selectTab("visualization"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "path", 19)(34, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " VISUALIZATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, MutantsInfoComponent_div_36_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, MutantsInfoComponent_div_37_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, MutantsInfoComponent_div_38_Template, 3, 0, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Mutant ", ctx.manager.selectedMutant == null ? null : ctx.manager.selectedMutant.mutantIndex, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.selectedTab === "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.selectedTab === "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.selectedTab === "visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedTab === "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedTab === "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedTab === "visualization");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _mutants_code_mutants_code_component__WEBPACK_IMPORTED_MODULE_1__.MutantsCodeComponent, _mutants_visual_mutants_visual_component__WEBPACK_IMPORTED_MODULE_2__.MutantsVisualComponent, _mutants_general_mutants_general_component__WEBPACK_IMPORTED_MODULE_3__.MutantsGeneralComponent], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n[_nghost-%COMP%] {\r\n    display: block;\r\n    padding: 2rem;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\n\n.mutant-title[_ngcontent-%COMP%] {\r\n    color: var(--text-primary);\r\n    font-size: 2rem;\r\n    margin: 0 0 2rem 0;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding-bottom: 1rem;\r\n    border-bottom: 2px solid var(--border-glass);\r\n    letter-spacing: -0.02em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.75rem;\r\n}\n.mutant-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 2px 4px var(--shadow-glass));\r\n}\n\n.tabs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    margin-bottom: 2rem;\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    border: 1px solid var(--border-glass-light);\r\n    border-radius: 12px;\r\n    padding: 0.5rem;\r\n    box-shadow: 0 2px 12px var(--shadow-glass);\r\n}\n\n.tab[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 0.875rem 1.5rem;\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-weight: 600;\r\n    font-size: 0.875rem;\r\n    color: var(--text-secondary);\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.5rem;\r\n}\n.tab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    transition: transform 200ms;\r\n}\n.tab[_ngcontent-%COMP%]:hover:not([disabled]):not(.active) {\r\n    background: var(--glass-bg-hover);\r\n    color: var(--text-primary);\r\n}\n.tab[_ngcontent-%COMP%]:hover:not([disabled]):not(.active)   svg[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\n.tab.active[_ngcontent-%COMP%] {\r\n    background: var(--accent-gradient);\r\n    color: white;\r\n    box-shadow:\r\n        0 4px 12px var(--shadow-glass),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\n.tab.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\r\n}\n.tab[disabled][_ngcontent-%COMP%] {\r\n    opacity: 0.4;\r\n    cursor: not-allowed;\r\n}\n\n.info-content[_ngcontent-%COMP%], .code-content[_ngcontent-%COMP%], .visualization-content[_ngcontent-%COMP%] {\r\n    animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\n\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\n\n@media (max-width: 768px) {\r\n    [_nghost-%COMP%] {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .mutant-title[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .tabs[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 0.5rem;\r\n    }\r\n\r\n    .tab[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n\r\n    .tab.active[_ngcontent-%COMP%] {\r\n        background: var(--accent-gradient);\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.tab[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid var(--accent-primary);\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtR0FBbUc7QUFEbkcsbURBQW1EO0FBR25EO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwrRUFBK0U7SUFDL0UsdUJBQXVCO0FBQzNCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtEQUFrRDtBQUN0RDtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBDQUEwQztBQUM5QztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLE9BQU87SUFDUCx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGlDQUFpQztJQUNqQywwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWjs7OENBRTBDO0FBQzlDO0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQSwyQkFBMkI7QUFDM0I7OztJQUdJLHVEQUF1RDtBQUMzRDtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQ0FBa0M7SUFDdEM7QUFDSjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFSTs7O1FBR0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQztBQUNKO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6Im11dGFudHMtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTXV0YW50cyBJbmZvIENvbXBvbmVudCAtIEdsYXNzbW9ycGhpc20gUXVhbnR1bSAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi8qIE11dGFudCBUaXRsZSAqL1xyXG4ubXV0YW50LXRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5tdXRhbnQtdGl0bGUgc3ZnIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHZhcigtLXNoYWRvdy1nbGFzcykpO1xyXG59XHJcblxyXG4vKiBUYWJzIENvbnRhaW5lciAqL1xyXG4udGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MtbGlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxufVxyXG5cclxuLyogVGFiIEJ1dHRvbnMgKi9cclxuLnRhYiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udGFiIHN2ZyB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcclxufVxyXG5cclxuLnRhYjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4udGFiOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLmFjdGl2ZSkgc3ZnIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLnRhYi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA0cHggMTJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4udGFiLmFjdGl2ZSBzdmcge1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxufVxyXG5cclxuLnRhYltkaXNhYmxlZF0ge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLyogVGFiIENvbnRlbnQgQ29udGFpbmVycyAqL1xyXG4uaW5mby1jb250ZW50LFxyXG4uY29kZS1jb250ZW50LFxyXG4udmlzdWFsaXphdGlvbi1jb250ZW50IHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubXV0YW50LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGFicyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGFiIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFjY2Vzc2liaWxpdHkgKi9cclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuXHJcbiAgICAqLFxyXG4gICAgKjo6YmVmb3JlLFxyXG4gICAgKjo6YWZ0ZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWI6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 8201:
/*!************************************************************!*\
  !*** ./src/app/mutants-visual/mutants-visual.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutantsVisualComponent": () => (/* binding */ MutantsVisualComponent)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function MutantsVisualComponent_iframe_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.originalCircuitUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
function MutantsVisualComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "rect", 14)(3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No circuit visualization available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function MutantsVisualComponent_iframe_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.mutantCircuitUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
function MutantsVisualComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "rect", 14)(3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No circuit visualization available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class MutantsVisualComponent {
    constructor(manager, sanitizer) {
        this.manager = manager;
        this.sanitizer = sanitizer;
        // URLs or paths for circuit visualizations
        this.originalCircuitUrl = null;
        this.mutantCircuitUrl = null;
        this.selectedMutant = null;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    ngOnInit() {
        // Initialize original circuit URL
        this.updateOriginalCircuitUrl();
        // Subscribe to selected mutant changes
        this.subscription.add(this.manager.selectedMutant$.subscribe(mutant => {
            this.selectedMutant = mutant;
            this.updateCircuitUrls();
        }));
    }
    updateOriginalCircuitUrl() {
        if (this.manager.selectedProject?.qProgram.qCircuit.textQuirkCode) {
            const url = _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.quirkUrl + "#circuit=" + this.manager.selectedProject.qProgram.qCircuit.textQuirkCode;
            this.originalCircuitUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    }
    updateCircuitUrls() {
        // Update original circuit URL
        this.updateOriginalCircuitUrl();
        // Update mutant circuit URL
        if (this.selectedMutant?.circuit?.qCircuit.textQuirkCode) {
            const url = _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.quirkUrl + "#circuit=" + this.selectedMutant.circuit.qCircuit.textQuirkCode;
            this.mutantCircuitUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            this.mutantCircuitUrl = null;
        }
    }
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this.subscription.unsubscribe();
    }
}
MutantsVisualComponent.ɵfac = function MutantsVisualComponent_Factory(t) { return new (t || MutantsVisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer)); };
MutantsVisualComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MutantsVisualComponent, selectors: [["app-mutants-visual"]], decls: 19, vars: 4, consts: [[1, "container"], [1, "code-section"], [1, "section-title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v8M8 12h8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "circuit-iframe-container"], ["class", "circuit-iframe", "frameborder", "0", "title", "Original QProgram Visualization", 3, "src", 4, "ngIf"], ["class", "no-circuit-message", 4, "ngIf"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "circuit-iframe", "frameborder", "0", "title", "Mutant QProgram Visualization", 3, "src", 4, "ngIf"], ["frameborder", "0", "title", "Original QProgram Visualization", 1, "circuit-iframe", 3, "src"], [1, "no-circuit-message"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 9h18M9 3v18", "stroke", "currentColor", "stroke-width", "2"], ["frameborder", "0", "title", "Mutant QProgram Visualization", 1, "circuit-iframe", 3, "src"]], template: function MutantsVisualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body")(1, "div", 0)(2, "div", 1)(3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "circle", 4)(6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " ORIGINAL CIRCUIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MutantsVisualComponent_iframe_9_Template, 1, 1, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MutantsVisualComponent_div_10_Template, 6, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " MUTANT CIRCUIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MutantsVisualComponent_iframe_17_Template, 1, 1, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MutantsVisualComponent_div_18_Template, 6, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.originalCircuitUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.originalCircuitUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mutantCircuitUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mutantCircuitUrl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    background: var(--bg-gradient);\r\n    color: var(--text-primary);\r\n    line-height: 1.6;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.code-section[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 16px;\r\n    overflow: hidden;\r\n    box-shadow:\r\n        0 4px 24px var(--shadow-glass),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n.code-section[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    box-shadow:\r\n        0 8px 32px var(--shadow-glass-strong),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    border-color: var(--accent-primary);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    background: var(--accent-gradient);\r\n    color: white;\r\n    padding: 1rem 1.5rem;\r\n    margin: 0;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid rgba(255, 255, 255, 0.2);\r\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n.section-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.circuit-iframe-container[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1.5rem;\r\n    background: var(--glass-bg);\r\n    min-height: 500px;\r\n}\r\n.circuit-iframe[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n    border-radius: 12px;\r\n    background-color: white;\r\n    \r\n    box-shadow:\r\n        0 2px 12px var(--shadow-glass),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n\r\n.circuit-iframe[_ngcontent-%COMP%]:hover {\r\n    box-shadow:\r\n        0 4px 16px var(--shadow-glass-strong),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.6);\r\n}\r\n.no-circuit-message[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    color: var(--text-secondary);\r\n    font-style: italic;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n.no-circuit-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    opacity: 0.3;\r\n}\r\n.no-circuit-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        max-width: 900px;\r\n        padding: 0;\r\n    }\r\n\r\n    .code-section[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.875rem 1.25rem;\r\n        font-size: 0.8125rem;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        padding: 1.25rem;\r\n        min-height: 350px;\r\n    }\r\n\r\n    .no-circuit-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 0.9375rem;\r\n    }\r\n}\r\n@media (max-width: 480px) {\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.75rem 1rem;\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n        min-height: 300px;\r\n    }\r\n\r\n    .no-circuit-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n        width: 48px;\r\n        height: 48px;\r\n    }\r\n\r\n    .no-circuit-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 0.875rem;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\r\n\r\n@media print {\r\n    .container[_ngcontent-%COMP%] {\r\n        box-shadow: none;\r\n        border: 1px solid #ccc;\r\n        padding: 1rem;\r\n        background: white;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        background: #f0f0f0 !important;\r\n        color: #333 !important;\r\n        border-bottom: 2px solid #333;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        background: white !important;\r\n        border: 1px solid #ccc;\r\n    }\r\n\r\n    .circuit-iframe[_ngcontent-%COMP%] {\r\n        box-shadow: none !important;\r\n        border: 1px solid #ccc !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtdmlzdWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1HQUFtRztBQUNuRyxvR0FBb0c7QUFGcEcscURBQXFEO0FBSXJEO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsK0VBQStFO0lBQy9FLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLDBDQUEwQztJQUMxQyxrREFBa0Q7SUFDbEQscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7OzhDQUUwQztJQUMxQyxrREFBa0Q7SUFDbEQsdURBQXVEO0FBQzNEO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakM7OzhDQUUwQztJQUMxQyxtQ0FBbUM7QUFDdkM7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCxpREFBaUQ7QUFDckQ7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpRkFBaUY7SUFDakY7OzhDQUUwQztJQUMxQyxrREFBa0Q7QUFDdEQ7QUFFQTs7Ozs7Q0FLQztBQUNEOzs7O0NBSUM7QUFFRDtJQUNJOzs4Q0FFMEM7QUFDOUM7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFFQSxrQkFBa0I7QUFDbEI7O0lBRUk7OztRQUdJLHFDQUFxQztRQUNyQyxzQ0FBc0M7SUFDMUM7QUFDSjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw0QkFBNEI7UUFDNUIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLGlDQUFpQztJQUNyQztBQUNKIiwiZmlsZSI6Im11dGFudHMtdmlzdWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNdXRhbnRzIFZpc3VhbCBDb21wb25lbnQgLSBHbGFzc21vcnBoaXNtIFF1YW50dW0gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ncmFkaWVudCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLyogQ29kZSBTZWN0aW9uIFN0eWxlcyAtIEdsYXNzIENhcmQgKi9cclxuLmNvZGUtc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDRweCAyNHB4IHZhcigtLXNoYWRvdy1nbGFzcyksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcbi5jb2RlLXNlY3Rpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDhweCAzMnB4IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIFNlY3Rpb24gVGl0bGUgU3R5bGVzICovXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBzdmcge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG59XHJcblxyXG4vKiBDaXJjdWl0IGlmcmFtZSBjb250YWluZXIgc3R5bGVzICovXHJcbi5jaXJjdWl0LWlmcmFtZS1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5jaXJjdWl0LWlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIEtlZXAgaWZyYW1lIGJnIHdoaXRlIGZvciBub3cgYXMgaXQgbWlnaHQgY29udGFpbiBjb250ZW50IHRoYXQgbmVlZHMgbGlnaHQgYmcgKi9cclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCAycHggMTJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi8qIEluIGRhcmsgbW9kZSwgd2UgbWlnaHQgd2FudCB0byBpbnZlcnQgdGhlIGlmcmFtZSBpZiBwb3NzaWJsZSwgb3IganVzdCBrZWVwIGl0IHdoaXRlLiBcclxuICAgVXN1YWxseSBpZnJhbWVzIGFyZSBibGFjayBib3hlcy4gSWYgdGhlIGNvbnRlbnQgaW5zaWRlIHN1cHBvcnRzIGRhcmsgbW9kZSwgZ3JlYXQuIFxyXG4gICBJZiBub3QsIGtlZXBpbmcgaXQgd2hpdGUgaXMgc2FmZXIuIFxyXG4gICBIb3dldmVyLCB3ZSBjYW4gdHJ5IHRvIGZpbHRlciBpdCBpZiB0aGUgdXNlciB3YW50cyBmdWxsIGRhcmsgbW9kZS4gXHJcbiAgIEZvciBub3csIEknbGwgbGVhdmUgaXQgd2hpdGUgYnV0IGFkZCBhIGZpbHRlciBydWxlIHRoYXQgY2FuIGJlIHVuY29tbWVudGVkLlxyXG4qL1xyXG4vKlxyXG5bZGF0YS10aGVtZT0nZGFyayddIC5jaXJjdWl0LWlmcmFtZSB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxKSBodWUtcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuKi9cclxuXHJcbi5jaXJjdWl0LWlmcmFtZTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgNHB4IDE2cHggdmFyKC0tc2hhZG93LWdsYXNzLXN0cm9uZyksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbn1cclxuXHJcbi5uby1jaXJjdWl0LW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubm8tY2lyY3VpdC1tZXNzYWdlIHN2ZyB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ubm8tY2lyY3VpdC1tZXNzYWdlIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvZGUtc2VjdGlvbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXQtaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2lyY3VpdC1pZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1jaXJjdWl0LW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXQtaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubm8tY2lyY3VpdC1tZXNzYWdlIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1jaXJjdWl0LW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWNjZXNzaWJpbGl0eSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG5cclxuICAgICosXHJcbiAgICAqOjpiZWZvcmUsXHJcbiAgICAqOjphZnRlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLyogUHJpbnQgc3R5bGVzICovXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXQtaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjdWl0LWlmcmFtZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 9015:
/*!**************************************************!*\
  !*** ./src/app/operators/operators.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorsComponent": () => (/* binding */ OperatorsComponent)
/* harmony export */ });
/* harmony import */ var _model_OperatorFamily__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/OperatorFamily */ 7525);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _qumugen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../qumugen.service */ 2740);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function OperatorsComponent_div_33_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 42)(1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OperatorsComponent_div_33_label_6_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const qubitIndex_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]((ctx_r5.outputQubitsSelection[qubitIndex_r4] = $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const qubitIndex_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.outputQubitsSelection[qubitIndex_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Q", qubitIndex_r4, "");
} }
function OperatorsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Output Qubits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, OperatorsComponent_div_33_label_6_Template, 4, 2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getOutputQubitsIndices());
} }
function OperatorsComponent_div_46_label_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 54)(1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OperatorsComponent_div_46_label_14_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const op_r9 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](op_r9.selected = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const op_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", op_r9.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](op_r9.name);
} }
function OperatorsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 47)(5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_div_46_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const family_r7 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.selectFamily(family_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Select All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_div_46_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const family_r7 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.showInfo(family_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "circle", 12)(12, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, OperatorsComponent_div_46_label_14_Template, 4, 2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const family_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](family_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getEnabledOperators(family_r7));
} }
function OperatorsComponent_div_56_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const op_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](op_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](op_r16.description);
} }
function OperatorsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_div_56_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_div_56_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 58)(3, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "circle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_div_56_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, OperatorsComponent_div_56_div_11_Template, 8, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedFamily == null ? null : ctx_r2.selectedFamily.name, " Operators ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.getEnabledOperators(ctx_r2.selectedFamily));
} }
class OperatorsComponent {
    constructor(service, manager, loading) {
        this.service = service;
        this.manager = manager;
        this.loading = loading;
        this.families = [];
        this.error = "";
        this.qubitCount = -1;
        this.outputQubitsSelection = {};
        this.selectedFamily = null;
        this.isModalOpen = false;
    }
    get outputQubitsArray() {
        if (!this.manager.outputQubits || this.manager.outputQubits.trim() === '') {
            return [];
        }
        return this.manager.outputQubits.split(',').filter(item => item.trim() !== '');
    }
    getOutputQubitsIndices() {
        return this.outputQubitsArray.map((_, index) => index);
    }
    getSelectedOutputQubitsCount() {
        return Object.values(this.outputQubitsSelection).filter(selected => selected).length;
    }
    ngOnInit() {
        // Cargar datos iniciales
        this.loadData();
        // Suscribirse a cambios en el proyecto seleccionado
        this.projectSubscription = this.manager.selectedProject$.subscribe(project => {
            if (project) {
                this.loadData();
            }
        });
        // Cargar familias de operadores
        this.service.getOperatorsByFamily().subscribe(families => {
            this.families = []; // Limpiar familias existentes
            for (let familyData of families) {
                let family = new _model_OperatorFamily__WEBPACK_IMPORTED_MODULE_0__.OperatorFamily(familyData.name, familyData.operators);
                this.families.push(family);
            }
        }, error => {
            this.error = error;
        });
    }
    ngOnDestroy() {
        // Limpiar suscripción
        if (this.projectSubscription) {
            this.projectSubscription.unsubscribe();
        }
    }
    loadData() {
        // Recargar qubitCount
        this.qubitCount = this.manager.selectedProject ? this.manager.selectedProject.getQubits() : -1;
        if (this.manager.selectedProject) {
            this.manager.selectedProject.qProgram.qubits = this.qubitCount;
            // Calcular mutableColumns y mutableRows si están vacíos o son valores por defecto
            const qCircuit = this.manager.selectedProject.qProgram.qCircuit;
            // Si mutableColumns está vacío o es el valor por defecto "-1,", calcularlo
            if (!qCircuit.mutableColumns || qCircuit.mutableColumns === '' || qCircuit.mutableColumns === '-1,') {
                qCircuit.mutableColumns = qCircuit.calculateMutableColumns();
            }
            // Si mutableRows está vacío, calcularlo
            if (!qCircuit.mutableRows || qCircuit.mutableRows === '') {
                qCircuit.mutableRows = qCircuit.calculateMutableRows();
            }
        }
        // Reinicializar outputQubitsSelection
        this.outputQubitsSelection = {};
        this.outputQubitsArray.forEach((_, index) => {
            this.outputQubitsSelection[index] = true; // Por defecto todos seleccionados
        });
    }
    selectAll() {
        this.families.forEach(f => f.select());
    }
    selectFamily(family) {
        family.select();
    }
    generateMutants() {
        _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error = "";
        let selectedCircuit = this.manager.selectedProject;
        if (!selectedCircuit) {
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error = "Please, select the circuit you want to mutate";
            return;
        }
        selectedCircuit.qProgram.setMutableColumns();
        selectedCircuit.qProgram.setMutableRows();
        let selectedOperators = [];
        for (let i = 0; i < this.families.length; i++) {
            for (let j = 0; j < this.families[i].operators.length; j++) {
                if (this.families[i].operators[j].selected)
                    selectedOperators.push(this.families[i].operators[j].name);
            }
        }
        if (selectedOperators.length > 0) {
            this.loading.show();
            this.service.generateMutants(selectedCircuit.qProgram, selectedOperators).subscribe(mutants => {
                this.manager.showSidebar = true;
                this.manager.setMutants(mutants);
                this.loading.hide();
            }, error => {
                _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error = error.error ? error.error.message : error.error;
                if (!_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error)
                    _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error = "Se ha producido un error, probablemente un 500. Intenta generar menos mutantes seleccionando menos operadores, menos columnas o filas. Si has marcado lo de \"Generate with all inputs\", puedes desmarcarlo o disminuir el número de Input qubits";
                this.loading.hide();
            });
        }
        else
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.error = "Please, select one operator at least";
    }
    reloadOriginalCode() {
        this.service.getQiskitCode(this.manager.selectedProject.qProgram).then(result => {
            this.manager.selectedProject.qProgram.qCode.code = result.wholeCode.split("\n");
        });
    }
    showInfo(family) {
        this.selectedFamily = family;
        this.isModalOpen = true;
    }
    closeModal() {
        this.selectedFamily = null;
        this.isModalOpen = false;
    }
    getEnabledOperators(family) {
        return family.operators.filter(op => op.enabled);
    }
    hasSelectedOperators() {
        return this.families.some(family => family.operators.some(op => op.selected));
    }
}
OperatorsComponent.ɵfac = function OperatorsComponent_Factory(t) { return new (t || OperatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_qumugen_service__WEBPACK_IMPORTED_MODULE_2__.QumugenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_3__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService)); };
OperatorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OperatorsComponent, selectors: [["app-operators"]], decls: 57, vars: 7, consts: [[1, "operators-container"], [1, "glass-card", "config-section"], [1, "card-header"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "card-icon"], ["d", "M12 2L2 7L12 12L22 7L12 2Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 17L12 22L22 17", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12L12 17L22 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card-title"], [1, "config-grid-horizontal"], [1, "config-item"], ["for", "qubits", 1, "config-label"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "3", "fill", "currentColor"], ["type", "number", "id", "qubits", "min", "1", "readonly", "", 1, "glass-input", 3, "ngModel", "ngModelChange"], ["for", "mutableColumns", 1, "config-label"], ["d", "M4 6h16M4 12h16M4 18h16", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "text", "id", "mutableColumns", "placeholder", "-1,0,1,2", 1, "glass-input", 3, "ngModel", "ngModelChange"], [1, "input-hint"], ["for", "mutableRows", 1, "config-label"], ["d", "M6 4v16M12 4v16M18 4v16", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["type", "text", "id", "mutableRows", "placeholder", "0,1,2", 1, "glass-input", 3, "ngModel", "ngModelChange"], ["class", "config-item", 4, "ngIf"], [1, "operators-header"], [1, "operators-title"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 12h8M12 8v8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "select-all-btn", 3, "click"], ["d", "M9 11l3 3L22 4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "families-grid"], ["class", "glass-card family-card", 4, "ngFor", "ngForOf"], [1, "actions-bar"], [1, "generate-btn", 3, "disabled", "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M5 12h14M12 5l7 7-7 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "config-label"], ["d", "M9 5l7 7-7 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "output-qubits-inline"], ["class", "qubit-checkbox", 4, "ngFor", "ngForOf"], [1, "qubit-checkbox"], ["type", "checkbox", 1, "glass-checkbox", 3, "ngModel", "ngModelChange"], [1, "glass-card", "family-card"], [1, "family-header"], [1, "family-name"], [1, "family-actions"], ["title", "Select all operators in this family", 1, "select-family-btn", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none"], ["title", "View operator descriptions", 1, "info-btn", 3, "click"], ["d", "M12 16v-4M12 8h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "operators-list-horizontal"], ["class", "operator-label", 4, "ngFor", "ngForOf"], [1, "operator-label"], [1, "operator-name"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none"], ["type", "button", 1, "modal-close", 3, "click"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "modal-body"], ["class", "operator-info", 4, "ngFor", "ngForOf"], [1, "operator-info"], [1, "operator-info-header"]], template: function OperatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 4)(5, "path", 5)(6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Circuit Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "circle", 12)(14, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Qubits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OperatorsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.qubitCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9)(18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Mutable Columns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OperatorsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.manager.selectedProject.qProgram.qCircuit.mutableColumns = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "(-1 for all)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 9)(26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Mutable Rows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OperatorsComponent_Template_input_ngModelChange_30_listener($event) { return ctx.manager.selectedProject.qProgram.qCircuit.mutableRows = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "(qubit indices)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, OperatorsComponent_div_33_Template, 7, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "path", 26)(38, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Mutation Operators ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_Template_button_click_40_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "path", 29)(43, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Select All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, OperatorsComponent_div_46_Template, 15, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 33)(48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperatorsComponent_Template_button_click_48_listener() { return ctx.generateMutants(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "path", 26)(51, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Generate Mutants");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, OperatorsComponent_div_56_Template, 12, 2, "div", 37);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.qubitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.manager.selectedProject.qProgram.qCircuit.mutableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.manager.selectedProject.qProgram.qCircuit.mutableRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.manager.outputQubits && ctx.manager.outputQubits.trim() !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.families);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.hasSelectedOperators());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isModalOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n    box-sizing: border-box;\r\n}\n.operators-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding-bottom: 2rem;\r\n}\n\n.glass-card[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg-card);\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 16px;\r\n    padding: 1.5rem;\r\n    box-shadow: 0 4px 24px var(--shadow-glass), inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n.glass-card[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    box-shadow: 0 8px 32px var(--shadow-glass-strong), inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    border-color: var(--accent-primary);\r\n}\n\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1.25rem;\r\n    padding-bottom: 0.75rem;\r\n    border-bottom: 1px solid var(--border-glass-light);\r\n}\n.card-icon[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 2px 4px var(--shadow-glass));\r\n}\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    font-weight: 600;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n    flex: 1;\r\n}\n\n.config-grid-horizontal[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: minmax(100px, auto) 1fr 1fr 1.2fr;\r\n    gap: 1.5rem;\r\n    align-items: start;\r\n}\n.config-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\n.config-label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    font-size: 0.75rem;\r\n    font-weight: 600;\r\n    color: var(--text-secondary);\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.05em;\r\n}\n.config-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: var(--accent-primary);\r\n    width: 16px;\r\n    height: 16px;\r\n}\n\n.glass-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0.625rem 0.875rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 10px;\r\n    font-size: 0.875rem;\r\n    font-weight: 500;\r\n    color: var(--text-primary);\r\n    background: var(--glass-bg-card);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    transition: all 200ms ease;\r\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n}\n.glass-input[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--border-glass);\r\n}\n.glass-input[_ngcontent-%COMP%]:focus {\r\n    background: var(--glass-bg);\r\n    border-color: var(--accent-primary);\r\n    box-shadow: 0 0 0 4px var(--shadow-glass);\r\n    outline: none;\r\n}\n.glass-input[_ngcontent-%COMP%]:read-only {\r\n    background: var(--glass-bg);\r\n    color: var(--text-muted);\r\n    cursor: default;\r\n}\n.input-hint[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    color: var(--text-muted);\r\n    font-style: italic;\r\n    margin-left: 0.25rem;\r\n}\n\n.output-qubits-inline[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem;\r\n    background: var(--glass-bg);\r\n    border: 1px solid var(--border-glass-light);\r\n    border-radius: 10px;\r\n    min-height: 42px;\r\n}\n.qubit-checkbox[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.375rem 0.75rem;\r\n    background: var(--glass-bg-card);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n    font-size: 0.8125rem;\r\n    font-weight: 500;\r\n    color: var(--text-primary);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\n.qubit-checkbox[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--accent-primary);\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 2px 8px var(--shadow-glass);\r\n}\n\n.glass-checkbox[_ngcontent-%COMP%] {\r\n    appearance: none;\r\n    width: 16px;\r\n    height: 16px;\r\n    border: 2px solid var(--accent-primary);\r\n    border-radius: 4px;\r\n    background: var(--glass-bg);\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: all 200ms;\r\n}\n.glass-checkbox[_ngcontent-%COMP%]:checked {\r\n    background: var(--accent-primary);\r\n    border-color: var(--accent-primary);\r\n}\n.glass-checkbox[_ngcontent-%COMP%]:checked::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 4px;\r\n    top: 1px;\r\n    width: 4px;\r\n    height: 8px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(45deg);\r\n}\n\n.operators-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    padding: 0 0.5rem;\r\n}\n.operators-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n}\n.select-all-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem 1rem;\r\n    background: var(--glass-bg-card);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 8px;\r\n    color: var(--text-secondary);\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n}\n.select-all-btn[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--accent-primary);\r\n    color: var(--accent-primary);\r\n    box-shadow: 0 4px 12px var(--shadow-glass);\r\n}\n\n.families-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1rem;\r\n}\n.family-card[_ngcontent-%COMP%] {\r\n    padding: 1.25rem;\r\n}\n.family-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    padding-bottom: 0.75rem;\r\n    border-bottom: 1px solid var(--border-glass-light);\r\n}\n.family-name[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n}\n.family-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 0.75rem;\r\n}\n.select-family-btn[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg);\r\n    color: var(--accent-primary);\r\n    border: 1px solid var(--border-glass-light);\r\n    padding: 0.375rem 0.75rem;\r\n    border-radius: 6px;\r\n    font-size: 0.75rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    transition: all 200ms;\r\n}\n.select-family-btn[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    transform: translateY(-1px);\r\n    border-color: var(--accent-primary);\r\n}\n.info-btn[_ngcontent-%COMP%] {\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    border: 1px solid var(--border-glass);\r\n    background: var(--glass-bg);\r\n    color: var(--accent-primary);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n}\n.info-btn[_ngcontent-%COMP%]:hover {\r\n    background: var(--accent-primary);\r\n    color: white;\r\n    border-color: var(--accent-primary);\r\n    transform: rotate(15deg);\r\n}\n\n.operators-list-horizontal[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.75rem;\r\n}\n.operator-label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.625rem;\r\n    padding: 0.5rem 0.875rem;\r\n    background: var(--glass-bg-card);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\n.operator-label[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--accent-primary);\r\n    box-shadow: 0 4px 12px var(--shadow-glass);\r\n}\n.operator-name[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    font-weight: 500;\r\n    color: var(--text-primary);\r\n}\n\n.actions-bar[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    bottom: 1rem;\r\n    background: var(--glass-bg-sidebar);\r\n    backdrop-filter: blur(20px);\r\n    -webkit-backdrop-filter: blur(20px);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 16px;\r\n    padding: 1rem 1.5rem;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    box-shadow: 0 8px 32px var(--shadow-glass);\r\n    z-index: 100;\r\n    margin-top: auto;\r\n}\n.generate-btn[_ngcontent-%COMP%] {\r\n    background: var(--accent-gradient);\r\n    color: white;\r\n    border: none;\r\n    padding: 0.875rem 2rem;\r\n    border-radius: 12px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    transition: all 300ms;\r\n    box-shadow: 0 4px 16px var(--shadow-glass);\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.025em;\r\n}\n.generate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 24px var(--shadow-glass-strong);\r\n    filter: brightness(1.1);\r\n}\n.generate-btn[_ngcontent-%COMP%]:active:not(:disabled) {\r\n    transform: translateY(0);\r\n}\n.generate-btn[_ngcontent-%COMP%]:disabled {\r\n    background: var(--text-muted);\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n    box-shadow: 0 2px 8px var(--shadow-glass);\r\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    z-index: 2000;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation: fadeIn 300ms;\r\n}\n.modal-content[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg);\r\n    width: 90%;\r\n    max-width: 600px;\r\n    max-height: 85vh;\r\n    border-radius: 20px;\r\n    box-shadow: 0 24px 48px var(--shadow-glass-strong);\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    animation: slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n    border: 1px solid var(--border-glass);\r\n}\n.modal-header[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n    border-bottom: 1px solid var(--border-glass-light);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: var(--glass-bg-card);\r\n}\n.modal-title[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin: 0;\r\n}\n.modal-close[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border: none;\r\n    color: var(--text-muted);\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 50%;\r\n    transition: all 200ms;\r\n    display: flex;\r\n}\n.modal-close[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.1);\r\n    color: #ef4444;\r\n}\n.modal-body[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n    overflow-y: auto;\r\n}\n.operator-info[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg-card);\r\n    border: 1px solid var(--border-glass-light);\r\n    border-radius: 12px;\r\n    padding: 1.25rem;\r\n    margin-bottom: 1rem;\r\n    box-shadow: 0 2px 8px var(--shadow-glass);\r\n}\n.operator-info-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 0.5rem;\r\n    color: var(--text-primary);\r\n    font-weight: 600;\r\n}\n.operator-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: var(--text-secondary);\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    font-size: 0.9375rem;\r\n}\n\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\n@keyframes slideUp {\r\n    from {\r\n        transform: translateY(40px);\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n}\n\n@media (max-width: 1024px) {\r\n    .config-grid-horizontal[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\n@media (max-width: 640px) {\r\n    .config-grid-horizontal[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .operators-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        gap: 1rem;\r\n    }\r\n\r\n    .select-all-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n\r\n    .actions-bar[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n    }\r\n\r\n    .generate-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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eUM7QUFDN0M7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0FBQ0o7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsU0FBUztJQUNiOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoib3BlcmF0b3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPcGVyYXRvcnMgQ29tcG9uZW50IC0gR2xhc3Ntb3JwaGlzbSBSZWZpbmVkICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm9wZXJhdG9ycy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi8qIEdsYXNzIENhcmQgQmFzZSBTdHlsZSAqL1xyXG4uZ2xhc3MtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHZhcigtLXNoYWRvdy1nbGFzcyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5nbGFzcy1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggdmFyKC0tc2hhZG93LWdsYXNzLXN0cm9uZyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIENhcmQgSGVhZGVyICovXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MtbGlnaHQpO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHZhcigtLXNoYWRvdy1nbGFzcykpO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLyogQ29uZmlndXJhdGlvbiBHcmlkIC0gSG9yaXpvbnRhbCBMYXlvdXQgKi9cclxuLmNvbmZpZy1ncmlkLWhvcml6b250YWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCBhdXRvKSAxZnIgMWZyIDEuMmZyO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5jb25maWctaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY29uZmlnLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG59XHJcblxyXG4uY29uZmlnLWxhYmVsIHN2ZyB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi8qIEdsYXNzIElucHV0IEZpZWxkcyAqL1xyXG4uZ2xhc3MtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjg3NXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6cmVhZC1vbmx5IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmlucHV0LWhpbnQge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbn1cclxuXHJcbi8qIE91dHB1dCBRdWJpdHMgSW5saW5lIENvbnRhaW5lciAqL1xyXG4ub3V0cHV0LXF1Yml0cy1pbmxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4ucXViaXQtY2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucXViaXQtY2hlY2tib3g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxufVxyXG5cclxuLyogQ3VzdG9tIENoZWNrYm94ICovXHJcbi5nbGFzcy1jaGVja2JveCB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbn1cclxuXHJcbi5nbGFzcy1jaGVja2JveDpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG59XHJcblxyXG4uZ2xhc3MtY2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4vKiBPcGVyYXRvcnMgU2VjdGlvbiBIZWFkZXIgKi9cclxuLm9wZXJhdG9ycy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG59XHJcblxyXG4ub3BlcmF0b3JzLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VsZWN0LWFsbC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG59XHJcblxyXG4uc2VsZWN0LWFsbC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG59XHJcblxyXG4vKiBGYW1pbGllcyBHcmlkICovXHJcbi5mYW1pbGllcy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmZhbWlseS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5mYW1pbHktaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbn1cclxuXHJcbi5mYW1pbHktbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mYW1pbHktYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uc2VsZWN0LWZhbWlseS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbn1cclxuXHJcbi5zZWxlY3QtZmFtaWx5LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1ob3Zlcik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmluZm8tYnRuIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG59XHJcblxyXG4uaW5mby1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbi8qIE9wZXJhdG9ycyBMaXN0ICovXHJcbi5vcGVyYXRvcnMtbGlzdC1ob3Jpem9udGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5vcGVyYXRvci1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLm9wZXJhdG9yLWxhYmVsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG59XHJcblxyXG4ub3BlcmF0b3ItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4vKiBBY3Rpb25zIEJhciAtIFN0aWNreSBGb290ZXIgKi9cclxuLmFjdGlvbnMtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1zaWRlYmFyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLmdlbmVyYXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XHJcbn1cclxuXHJcbi5nZW5lcmF0ZS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4uZ2VuZXJhdGUtYnRuOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5nZW5lcmF0ZS1idG46ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxlcyAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMzAwbXM7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogODV2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDI0cHggNDhweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xyXG4gICAgY29sb3I6ICNlZjQ0NDQ7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5vcGVyYXRvci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG59XHJcblxyXG4ub3BlcmF0b3ItaW5mby1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5vcGVyYXRvci1pbmZvIHAge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jb25maWctZ3JpZC1ob3Jpem9udGFsIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgLmNvbmZpZy1ncmlkLWhvcml6b250YWwge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcGVyYXRvcnMtaGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWFsbC1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zLWJhciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmdlbmVyYXRlLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 634:
/*!**********************************************************!*\
  !*** ./src/app/project-notes/project-notes.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectNotesComponent": () => (/* binding */ ProjectNotesComponent)
/* harmony export */ });
/* harmony import */ var _model_ProjectNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ProjectNote */ 4454);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function ProjectNotesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.togglePanel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 6)(4, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isPanelOpen);
} }
function ProjectNotesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.togglePanel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProjectNotesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_14_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const note_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.openEditNoteModal(note_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25)(2, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 29)(9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const note_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](note_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", note_r9.type, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](note_r9.text || "Sin contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatDate(note_r9.timestamp));
} }
function ProjectNotesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "rect", 33)(3, "line", 34)(4, "line", 35)(5, "line", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "No hay notas a\u00FAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Crea tu primera nota para comenzar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ProjectNotesComponent_div_22_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00DAltima modificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 63)(6, "line", 64)(7, "line", 65)(8, "line", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r12.formatDate(ctx_r12.selectedNote.timestamp));
} }
function ProjectNotesComponent_div_22_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_22_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.deleteNote()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProjectNotesComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_22_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.stopPropagation($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41)(3, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_22_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 46)(11, "div", 47)(12, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "T\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectNotesComponent_div_22_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.noteForm.title = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 47)(16, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectNotesComponent_div_22_Template_textarea_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.noteForm.text = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProjectNotesComponent_div_22_div_19_Template, 11, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProjectNotesComponent_div_22_button_21_Template, 4, 0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 55)(23, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_22_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_div_22_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.saveNote()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 58)(28, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.isEditMode ? "Editar Nota" : "Nueva Nota", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.noteForm.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.noteForm.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.isEditMode && ctx_r4.selectedNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.isEditMode ? "Guardar Cambios" : "Crear Nota", " ");
} }
class ProjectNotesComponent {
    constructor(manager) {
        this.manager = manager;
        // Estado del componente
        this.isPanelOpen = false;
        this.isModalOpen = false;
        this.isEditMode = false;
        // Formulario de nota
        this.noteForm = {
            title: '',
            text: ''
        };
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    ngOnInit() {
        // Suscribirse a cambios en el proyecto seleccionado
        this.subscriptions.add(this.manager.selectedProject$.subscribe(project => {
            this.currentProject = project || undefined;
            // Cerrar panel si no hay proyecto
            if (!this.currentProject) {
                this.isPanelOpen = false;
                this.isModalOpen = false;
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * Verifica si hay un proyecto cargado
     */
    get hasProject() {
        return !!this.currentProject;
    }
    /**
     * Obtiene las notas ordenadas por timestamp descendente (más reciente primero)
     */
    get sortedNotes() {
        if (!this.currentProject?.projectNotes) {
            return [];
        }
        return [...this.currentProject.projectNotes].sort((a, b) => {
            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        });
    }
    /**
     * Abre/cierra el panel de notas
     */
    togglePanel() {
        if (!this.hasProject)
            return;
        this.isPanelOpen = !this.isPanelOpen;
        if (!this.isPanelOpen) {
            // Cerrar modal también si se cierra el panel
            this.isModalOpen = false;
        }
    }
    /**
     * Abre el modal para crear una nueva nota
     */
    openCreateNoteModal() {
        this.isEditMode = false;
        this.selectedNote = undefined;
        this.noteForm = {
            title: '',
            text: ''
        };
        this.isModalOpen = true;
    }
    /**
     * Abre el modal para editar una nota existente
     */
    openEditNoteModal(note) {
        this.isEditMode = true;
        this.selectedNote = note;
        this.noteForm = {
            title: note.title,
            text: note.text
        };
        this.isModalOpen = true;
    }
    /**
     * Cierra el modal
     */
    closeModal() {
        this.isModalOpen = false;
        this.selectedNote = undefined;
        this.noteForm = {
            title: '',
            text: ''
        };
    }
    /**
     * Guarda la nota (crear o editar)
     */
    saveNote() {
        if (!this.currentProject)
            return;
        // Validación básica
        if (!this.noteForm.title.trim()) {
            alert('El título es obligatorio');
            return;
        }
        if (this.isEditMode && this.selectedNote) {
            // Editar nota existente
            this.selectedNote.title = this.noteForm.title;
            this.selectedNote.text = this.noteForm.text;
            this.selectedNote.updateTimestamp();
        }
        else {
            // Crear nueva nota
            const newNote = new _model_ProjectNote__WEBPACK_IMPORTED_MODULE_0__.ProjectNote(this.noteForm.title, this.noteForm.text, 'QuMu' // Siempre QuMu para notas creadas desde la interfaz
            );
            this.currentProject.projectNotes.push(newNote);
        }
        // Marcar proyecto como modificado
        this.manager.markProjectAsModified();
        // Cerrar modal
        this.closeModal();
    }
    /**
     * Elimina una nota
     */
    deleteNote() {
        if (!this.currentProject || !this.selectedNote)
            return;
        const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar la nota "${this.selectedNote.title}"?`);
        if (!confirmDelete)
            return;
        const index = this.currentProject.projectNotes.findIndex(n => n.id === this.selectedNote.id);
        if (index !== -1) {
            this.currentProject.projectNotes.splice(index, 1);
            this.manager.markProjectAsModified();
            this.closeModal();
        }
    }
    /**
     * Formatea la fecha para mostrar
     */
    formatDate(date) {
        const d = new Date(date);
        const now = new Date();
        const diffMs = now.getTime() - d.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        if (diffMins < 1)
            return 'Ahora mismo';
        if (diffMins < 60)
            return `Hace ${diffMins} min`;
        if (diffHours < 24)
            return `Hace ${diffHours}h`;
        if (diffDays < 7)
            return `Hace ${diffDays}d`;
        return d.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
    /**
     * Previene el cierre del modal al hacer click dentro del contenido
     */
    stopPropagation(event) {
        event.stopPropagation();
    }
}
ProjectNotesComponent.ɵfac = function ProjectNotesComponent_Factory(t) { return new (t || ProjectNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService)); };
ProjectNotesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectNotesComponent, selectors: [["app-project-notes"]], decls: 23, vars: 7, consts: [["class", "fab-container", 4, "ngIf"], ["class", "notes-panel-overlay", 3, "click", 4, "ngIf"], [1, "notes-panel"], [1, "panel-header"], [1, "panel-header-content"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "panel-icon"], ["d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M9 12h6m-6 4h6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "panel-title"], ["title", "Cerrar", 1, "close-button", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6 18L18 6M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "notes-list"], ["class", "note-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "panel-footer"], [1, "add-note-button", 3, "click"], ["d", "M12 5v14m-7-7h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "fab-container"], ["title", "Notas del Proyecto", 1, "fab-button", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "fab-icon"], [1, "fab-glow"], [1, "notes-panel-overlay", 3, "click"], [1, "note-item", 3, "click"], [1, "note-header"], [1, "note-title"], [1, "note-type"], [1, "note-preview"], [1, "note-footer"], [1, "note-date"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "empty-icon"], ["x", "5", "y", "4", "width", "14", "height", "17", "rx", "2", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "9", "y1", "13", "x2", "15", "y2", "13", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "9", "y1", "17", "x2", "12", "y2", "17", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "empty-text"], [1, "empty-subtext"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "modal-icon"], ["d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Cerrar", 1, "modal-close-button", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "note-title", 1, "form-label"], ["id", "note-title", "type", "text", "placeholder", "Escribe un t\u00EDtulo para la nota...", "maxlength", "100", "autofocus", "", 1, "glass-input", 3, "ngModel", "ngModelChange"], ["for", "note-text", 1, "form-label"], ["id", "note-text", "placeholder", "Escribe el contenido de la nota...", "rows", "8", 1, "glass-textarea", 3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "modal-footer"], ["class", "delete-button", "title", "Eliminar nota", 3, "click", 4, "ngIf"], [1, "modal-actions"], [1, "cancel-button", 3, "click"], [1, "save-button", 3, "click"], ["d", "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 21v-8H7v8M7 3v5h8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "form-label"], [1, "date-display"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "date-icon"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10", "stroke", "currentColor", "stroke-width", "2"], ["title", "Eliminar nota", 1, "delete-button", 3, "click"], ["d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function ProjectNotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProjectNotesComponent_div_0_Template, 6, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectNotesComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 6)(7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Notas del Proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_Template_button_click_10_listener() { return ctx.togglePanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProjectNotesComponent_div_14_Template, 11, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProjectNotesComponent_div_15_Template, 10, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15)(17, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectNotesComponent_Template_button_click_17_listener() { return ctx.openCreateNoteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Agregar Nota");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProjectNotesComponent_div_22_Template, 30, 6, "div", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPanelOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isPanelOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sortedNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortedNotes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isModalOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\n\n.fab-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n    z-index: 999;\r\n}\n.fab-button[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    background: var(--accent-gradient);\r\n    box-shadow:\r\n        0 8px 24px var(--shadow-glass),\r\n        0 4px 12px rgba(0, 0, 0, 0.15),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n    cursor: pointer;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n.fab-button[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 50%;\r\n    background: rgba(255, 255, 255, 0.25);\r\n    transform: translate(-50%, -50%);\r\n    transition: width 400ms ease, height 400ms ease;\r\n}\n.fab-button[_ngcontent-%COMP%]:hover::before {\r\n    width: 100%;\r\n    height: 100%;\r\n}\n.fab-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-4px) scale(1.05);\r\n    box-shadow:\r\n        0 12px 32px var(--shadow-glass-strong),\r\n        0 6px 16px rgba(0, 0, 0, 0.2),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\n.fab-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(-2px) scale(1.02);\r\n    box-shadow:\r\n        0 6px 20px var(--shadow-glass),\r\n        0 3px 8px rgba(0, 0, 0, 0.15);\r\n}\n.fab-button.active[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, var(--accent-secondary) 0%, #4a7559 100%);\r\n}\n.fab-icon[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n    height: 22px;\r\n    color: white;\r\n    position: relative;\r\n    z-index: 2;\r\n    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\r\n}\n.fab-glow[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 80%;\r\n    height: 80%;\r\n    border-radius: 50%;\r\n    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);\r\n    transform: translate(-50%, -50%);\r\n    pointer-events: none;\r\n    animation: pulse 2s ease-in-out infinite;\r\n}\n@keyframes pulse {\r\n\r\n    0%,\r\n    100% {\r\n        opacity: 0.6;\r\n        transform: translate(-50%, -50%) scale(0.9);\r\n    }\r\n\r\n    50% {\r\n        opacity: 1;\r\n        transform: translate(-50%, -50%) scale(1.1);\r\n    }\r\n}\n\n.notes-panel-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    -webkit-backdrop-filter: blur(4px);\r\n            backdrop-filter: blur(4px);\r\n    z-index: 1000;\r\n    animation: fadeIn 300ms ease;\r\n}\n.notes-panel[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: -450px;\r\n    width: 420px;\r\n    max-width: 90vw;\r\n    height: 100vh;\r\n    background: var(--glass-bg-sidebar);\r\n    backdrop-filter: blur(20px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(20px) saturate(180%);\r\n    border-left: 1px solid var(--border-glass);\r\n    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);\r\n    transition: right 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    z-index: 1001;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\n.notes-panel.open[_ngcontent-%COMP%] {\r\n    right: 0;\r\n}\n\n.panel-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1.5rem;\r\n    border-bottom: 1px solid var(--border-glass-light);\r\n    background: var(--glass-bg-card);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n}\n.panel-header-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n}\n.panel-icon[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n    height: 24px;\r\n    color: var(--accent-primary);\r\n}\n.panel-title[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n}\n.close-button[_ngcontent-%COMP%] {\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: var(--glass-bg);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    cursor: pointer;\r\n    transition: all 200ms ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n.close-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.1);\r\n    transform: scale(1.05);\r\n}\n.close-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    color: var(--text-secondary);\r\n}\n.close-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    color: #ef4444;\r\n}\n\n.notes-list[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: transparent;\r\n    border-radius: 4px;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: var(--border-glass);\r\n    border-radius: 4px;\r\n    -webkit-transition: background 200ms ease;\r\n    transition: background 200ms ease;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: var(--accent-primary);\r\n}\n\n.note-item[_ngcontent-%COMP%] {\r\n    background: var(--glass-bg-card);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n            backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 12px;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: 0 2px 8px var(--shadow-glass);\r\n}\n.note-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 16px var(--shadow-glass-strong);\r\n    border-color: var(--accent-primary);\r\n}\n.note-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n}\n.note-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n    flex: 1;\r\n    line-height: 1.4;\r\n}\n.note-type[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 0.125rem 0.5rem;\r\n    background: var(--accent-gradient);\r\n    color: white;\r\n    font-size: 0.75rem;\r\n    font-weight: 600;\r\n    border-radius: 6px;\r\n    white-space: nowrap;\r\n}\n.note-preview[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    color: var(--text-secondary);\r\n    margin: 0 0 0.75rem 0;\r\n    line-height: 1.5;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\n.note-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\n.note-date[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    color: var(--text-muted);\r\n    font-weight: 500;\r\n}\n\n.empty-state[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 3rem 1rem;\r\n    text-align: center;\r\n    opacity: 0.7;\r\n}\n.empty-icon[_ngcontent-%COMP%] {\r\n    width: 64px;\r\n    height: 64px;\r\n    color: var(--text-muted);\r\n    margin-bottom: 1rem;\r\n}\n.empty-text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: var(--text-secondary);\r\n    margin: 0 0 0.5rem 0;\r\n}\n.empty-subtext[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    color: var(--text-muted);\r\n    margin: 0;\r\n}\n\n.panel-footer[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    border-top: 1px solid var(--border-glass-light);\r\n    background: var(--glass-bg-card);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n}\n.add-note-button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.75rem;\r\n    padding: 0.875rem 1.5rem;\r\n    background: var(--accent-gradient);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-size: 0.9375rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow:\r\n        0 4px 12px var(--shadow-glass),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\n.add-note-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow:\r\n        0 6px 20px var(--shadow-glass-strong),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n    filter: brightness(1.1);\r\n}\n.add-note-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(0);\r\n}\n.add-note-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    z-index: 1100;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n    animation: fadeIn 300ms ease;\r\n}\n.modal-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    max-height: 90vh;\r\n    background: var(--glass-bg);\r\n    -webkit-backdrop-filter: blur(30px) saturate(180%);\r\n            backdrop-filter: blur(30px) saturate(180%);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 20px;\r\n    box-shadow:\r\n        0 20px 60px rgba(0, 0, 0, 0.3),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    animation: slideUp 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    overflow: hidden;\r\n}\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\n@keyframes slideUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px) scale(0.95);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0) scale(1);\r\n    }\r\n}\n\n.modal-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1.5rem;\r\n    border-bottom: 1px solid var(--border-glass-light);\r\n    background: var(--glass-bg-card);\r\n}\n.modal-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    font-size: 1.375rem;\r\n    font-weight: 700;\r\n    color: var(--text-primary);\r\n    margin: 0;\r\n}\n.modal-icon[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n    height: 24px;\r\n    color: var(--accent-primary);\r\n}\n.modal-close-button[_ngcontent-%COMP%] {\r\n    width: 36px;\r\n    height: 36px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: var(--glass-bg);\r\n    cursor: pointer;\r\n    transition: all 200ms ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n.modal-close-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.1);\r\n    transform: scale(1.05);\r\n}\n.modal-close-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    color: var(--text-secondary);\r\n}\n.modal-close-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    color: #ef4444;\r\n}\n\n.modal-body[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    padding: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.25rem;\r\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: transparent;\r\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: var(--border-glass);\r\n    border-radius: 4px;\r\n}\n.form-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\n.form-label[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    color: var(--text-secondary);\r\n    margin-left: 0.25rem;\r\n}\n.glass-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 0.875rem 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-size: 0.9375rem;\r\n    font-weight: 400;\r\n    color: var(--text-primary);\r\n    background: var(--glass-bg-card);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n    outline: none;\r\n}\n.glass-input[_ngcontent-%COMP%]::placeholder {\r\n    color: var(--text-muted);\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\n.glass-input[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--border-glass);\r\n}\n.glass-input[_ngcontent-%COMP%]:focus {\r\n    background: var(--glass-bg);\r\n    border-color: var(--accent-primary);\r\n    box-shadow:\r\n        0 0 0 4px var(--shadow-glass),\r\n        inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n    transform: translateY(-1px);\r\n}\n.glass-textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    min-height: 200px;\r\n    padding: 0.875rem 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-size: 0.9375rem;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n    color: var(--text-primary);\r\n    background: var(--glass-bg-card);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    resize: vertical;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n    outline: none;\r\n}\n.glass-textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: var(--text-muted);\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\n.glass-textarea[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--border-glass);\r\n}\n.glass-textarea[_ngcontent-%COMP%]:focus {\r\n    background: var(--glass-bg);\r\n    border-color: var(--accent-primary);\r\n    box-shadow:\r\n        0 0 0 4px var(--shadow-glass),\r\n        inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n}\n\n.date-display[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.75rem 1rem;\r\n    background: var(--shadow-glass);\r\n    border-radius: 12px;\r\n    color: var(--text-secondary);\r\n    font-size: 0.875rem;\r\n    font-weight: 500;\r\n}\n.date-icon[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    color: var(--accent-primary);\r\n}\n\n.modal-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 1.5rem;\r\n    border-top: 1px solid var(--border-glass-light);\r\n    background: var(--glass-bg-card);\r\n}\n.modal-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 0.75rem;\r\n}\n.delete-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.75rem 1.25rem;\r\n    background: rgba(239, 68, 68, 0.1);\r\n    border: 1px solid rgba(239, 68, 68, 0.3);\r\n    border-radius: 10px;\r\n    color: #dc2626;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms ease;\r\n}\n.delete-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.15);\r\n    border-color: #dc2626;\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);\r\n}\n.delete-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\n.cancel-button[_ngcontent-%COMP%] {\r\n    padding: 0.75rem 1.5rem;\r\n    background: var(--glass-bg);\r\n    border: 1px solid var(--border-glass);\r\n    border-radius: 10px;\r\n    color: var(--text-secondary);\r\n    font-size: 0.9375rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms ease;\r\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\r\n    background: var(--glass-bg-hover);\r\n    border-color: var(--accent-primary);\r\n    transform: translateY(-1px);\r\n}\n.save-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    padding: 0.75rem 1.5rem;\r\n    background: var(--accent-gradient);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-size: 0.9375rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow:\r\n        0 4px 12px var(--shadow-glass),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\n.save-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow:\r\n        0 6px 20px var(--shadow-glass-strong),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n    filter: brightness(1.1);\r\n}\n.save-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(0);\r\n}\n.save-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\n\n@media (max-width: 768px) {\r\n    .fab-container[_ngcontent-%COMP%] {\r\n        top: 15px;\r\n        right: 15px;\r\n    }\r\n\r\n    .fab-button[_ngcontent-%COMP%] {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .fab-icon[_ngcontent-%COMP%] {\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n\r\n    .notes-panel[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        max-width: 100vw;\r\n    }\r\n\r\n    .modal-content[_ngcontent-%COMP%] {\r\n        border-radius: 16px;\r\n        max-height: 95vh;\r\n    }\r\n\r\n    .modal-footer[_ngcontent-%COMP%] {\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .delete-button[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n\r\n    .modal-actions[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .cancel-button[_ngcontent-%COMP%], .save-button[_ngcontent-%COMP%] {\r\n        flex: 1;\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.fab-button[_ngcontent-%COMP%]:focus-visible, .add-note-button[_ngcontent-%COMP%]:focus-visible, .save-button[_ngcontent-%COMP%]:focus-visible, .cancel-button[_ngcontent-%COMP%]:focus-visible, .delete-button[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid var(--accent-primary);\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Qtbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUdBQW1HO0FBRG5HLDBDQUEwQztBQUcxQztJQUNJLCtFQUErRTtJQUMvRSx1QkFBdUI7QUFDM0I7QUFFQSx1REFBdUQ7QUFDdkQ7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQzs7OzhDQUcwQztJQUMxQyxlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQ0FBZ0M7SUFDaEMsK0NBQStDO0FBQ25EO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDOzs7OENBRzBDO0FBQzlDO0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkM7O3FDQUVpQztBQUNyQztBQUVBO0lBQ0ksNkVBQTZFO0FBQ2pGO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlEQUFpRDtBQUNyRDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUZBQWlGO0lBQ2pGLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsd0NBQXdDO0FBQzVDO0FBRUE7O0lBRUk7O1FBRUksWUFBWTtRQUNaLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7SUFD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O1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBOztRQUVJLE9BQU87SUFDWDtBQUNKO0FBRUEsd0NBQXdDO0FBQ3hDOztJQUVJOzs7UUFHSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFFQTs7Ozs7SUFLSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InByb2plY3Qtbm90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2plY3QgTm90ZXMgLSBHbGFzc21vcnBoaXNtIFF1YW50dW0gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi8qID09PT09PT09PT0gRkFCIChGbG9hdGluZyBBY3Rpb24gQnV0dG9uKSA9PT09PT09PT09ICovXHJcbi5mYWItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgOHB4IDI0cHggdmFyKC0tc2hhZG93LWdsYXNzKSxcclxuICAgICAgICAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDQwMG1zIGVhc2UsIGhlaWdodCA0MDBtcyBlYXNlO1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgMTJweCAzMnB4IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpLFxyXG4gICAgICAgIDAgNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDIpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDZweCAyMHB4IHZhcigtLXNoYWRvdy1nbGFzcyksXHJcbiAgICAgICAgMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KSAwJSwgIzRhNzU1OSAxMDAlKTtcclxufVxyXG5cclxuLmZhYi1pY29uIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbn1cclxuXHJcbi5mYWItZ2xvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuXHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09IFBhbmVsIExhdGVyYWwgZGUgTm90YXMgPT09PT09PT09PSAqL1xyXG4ubm90ZXMtcGFuZWwtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4ubm90ZXMtcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IC00NTBweDtcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1zaWRlYmFyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gICAgYm94LXNoYWRvdzogLThweCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ub3Rlcy1wYW5lbC5vcGVuIHtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgZGVsIFBhbmVsICovXHJcbi5wYW5lbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5wYW5lbC1pY29uIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHN2ZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b246aG92ZXIgc3ZnIHtcclxuICAgIGNvbG9yOiAjZWY0NDQ0O1xyXG59XHJcblxyXG4vKiBMaXN0YSBkZSBOb3RhcyAqL1xyXG4ubm90ZXMtbGlzdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLm5vdGVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi5ub3Rlcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLm5vdGVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5ub3Rlcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIEl0ZW0gZGUgTm90YSAqL1xyXG4ubm90ZS1pdGVtIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxufVxyXG5cclxuLm5vdGUtaXRlbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5ub3RlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLm5vdGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxleDogMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5ub3RlLXR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xMjVyZW0gMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubm90ZS1wcmV2aWV3IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgbWFyZ2luOiAwIDAgMC43NXJlbSAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbi5ub3RlLWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5vdGUtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBFc3RhZG8gVmFjw61vICovXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmVtcHR5LWljb24ge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZW1wdHktdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG59XHJcblxyXG4uZW1wdHktc3VidGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGb290ZXIgZGVsIFBhbmVsICovXHJcbi5wYW5lbC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MtbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi5hZGQtbm90ZS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyYWRpZW50KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA0cHggMTJweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uYWRkLW5vdGUtYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA2cHggMjBweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4uYWRkLW5vdGUtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5hZGQtbm90ZS1idXR0b24gc3ZnIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09IE1vZGFsID09PT09PT09PT0gKi9cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICB6LWluZGV4OiAxMTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDQwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCkgc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBIZWFkZXIgZGVsIE1vZGFsICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtaWNvbiB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZS1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jbG9zZS1idXR0b24gc3ZnIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlLWJ1dHRvbjpob3ZlciBzdmcge1xyXG4gICAgY29sb3I6ICNlZjQ0NDQ7XHJcbn1cclxuXHJcbi8qIEN1ZXJwbyBkZWwgTW9kYWwgKi9cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS4yNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDAgMCA0cHggdmFyKC0tc2hhZG93LWdsYXNzKSxcclxuICAgICAgICBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmdsYXNzLXRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5nbGFzcy10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZ2xhc3MtdGV4dGFyZWE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG59XHJcblxyXG4uZ2xhc3MtdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgMCAwIDRweCB2YXIoLS1zaGFkb3ctZ2xhc3MpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4vKiBGZWNoYSAqL1xyXG4uZGF0ZS1kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmRhdGUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBkZWwgTW9kYWwgKi9cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MtbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctY2FyZCk7XHJcbn1cclxuXHJcbi5tb2RhbC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiBzdmcge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgNHB4IDEycHggdmFyKC0tc2hhZG93LWdsYXNzKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA2cHggMjBweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHN2ZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PSBSZXNwb25zaXZlID09PT09PT09PT0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmFiLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYWItYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhYi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGVzLXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxldGUtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtYWN0aW9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbmNlbC1idXR0b24sXHJcbiAgICAuc2F2ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT0gQWNjZXNzaWJpbGl0eSA9PT09PT09PT09ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmFiLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxyXG4uYWRkLW5vdGUtYnV0dG9uOmZvY3VzLXZpc2libGUsXHJcbi5zYXZlLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxyXG4uY2FuY2VsLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxyXG4uZGVsZXRlLWJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 4739:
/*!*********************************!*\
  !*** ./src/app/qasm.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QasmService": () => (/* binding */ QasmService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class QasmService {
    constructor(client) {
        this.client = client;
    }
    import(qasmURL) {
        return this.client.get(qasmURL, { responseType: 'text' });
    }
}
QasmService.ɵfac = function QasmService_Factory(t) { return new (t || QasmService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
QasmService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QasmService, factory: QasmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2740:
/*!************************************!*\
  !*** ./src/app/qumugen.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QumugenService": () => (/* binding */ QumugenService)
/* harmony export */ });
/* harmony import */ var C_Users_samue_alarcos_projects_Qumuclient_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.service */ 8842);




class QumugenService {
  constructor(client, manager) {
    this.client = client;
    this.manager = manager;
    this.qiskitTemplate = "qiskitTemplateWindows.txt";
  }

  getOperatorsByFamily() {
    return this.client.get("http://localhost:8080/qumureper/getoperatorsByFamily");
  }

  getOperators(family) {
    return this.client.get("http://localhost:8500/qumugen/getOperators/" + family);
  }

  generateMutants(circuit, selectedOperators) {
    let info = {
      circuit: circuit.qCircuit.quirkCode,
      operatorNames: selectedOperators,
      mutableColumns: circuit.qCircuit.mutableColumns,
      mutableRows: circuit.qCircuit.mutableRows,
      inputQubits: this.manager.inputQubits,
      generateWithAllInputs: this.manager.generateWithAllInputs
    };
    return this.client.put("http://localhost:8500/qumugen/generateQuirkMutants", info);
  }

  getQiskitCode(circuit) {
    var _this = this;

    return (0,C_Users_samue_alarcos_projects_Qumuclient_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      circuit.inputQubits = _this.manager.inputQubits;
      circuit.outputQubits = _this.manager.outputQubits;

      try {
        let code = _this.client.put("http://localhost:8500/qumugen/getQiskitCode?useTemplate=true&shots=" + _this.manager.shots + "&qiskitTemplate=" + _this.qiskitTemplate, circuit).toPromise();

        return code;
      } catch (error) {
        throw error;
      }
    })();
  }

  getMultipleQiskitCode(mutants) {
    let info = {
      outputQubits: this.manager.outputQubits,
      mutants: mutants
    };
    return this.client.put("http://localhost:8500/qumugen/getMultipleQiskitCode?shots=" + this.manager.shots + "&qiskitTemplate=" + this.qiskitTemplate, info);
  }

  buildUnexCurls(id, mutants) {
    let info = {
      circuitId: id,
      mutants: mutants
    };
    return this.client.post("http://localhost:8500/qumugen/buildUnexCurls", info);
  }

  sendToUnex(curl) {
    curl.result = -1;
    return this.client.post("http://localhost:8500/qumugen/sendToUnex", curl);
  }

}

QumugenService.ɵfac = function QumugenService_Factory(t) {
  return new (t || QumugenService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_manager_service__WEBPACK_IMPORTED_MODULE_1__.ManagerService));
};

QumugenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: QumugenService,
  factory: QumugenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 162:
/*!**********************************!*\
  !*** ./src/app/reper.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReperService": () => (/* binding */ ReperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ReperService {
    constructor(client) {
        this.client = client;
        this.right = "?db=quantum_mutation&collection=";
    }
    getCircuits(email, token) {
        return this.client.post("http://localhost:8080/projects/getAllByUser", { email, token });
    }
    save(circuit) {
        // Crear una copia del circuito para no modificar el original
        const circuitToSend = { ...circuit };
        // Filtrar ciclos de mutantes: solo enviar los nuevos
        if (circuit.mutantCycles) {
            circuitToSend.mutantCycles = circuit.mutantCycles.filter(mc => mc.newlyGenerated);
        }
        return this.client.put("http://localhost:8080/projects/save", {
            circuit: circuitToSend, user: {
                id: sessionStorage.getItem('email')
            }
        });
    }
    /*saveMutants(id: string, mutants: Mutant[]) {
      let info = {
        circuitId: id,
        mutants: mutants
      }
      return this.client.put<any>(this.dict.getReperURL() + "saveJSONs" + this.right + "mutants", info)
    }*/
    getUser(token) {
        return this.client.post("http://localhost:8080/users/getUser", { token });
    }
    getProjects(token, id) {
        return this.client.post("http://localhost:8080/projects/getAllByUser", { token, email: sessionStorage.getItem('email'), id });
    }
}
ReperService.ɵfac = function ReperService_Factory(t) { return new (t || ReperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ReperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReperService, factory: ReperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9026:
/*!******************************************************!*\
  !*** ./src/app/save-button/save-button.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveButtonComponent": () => (/* binding */ SaveButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _reper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reper.service */ 162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function SaveButtonComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El usuario o email es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SaveButtonComponent_div_6_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La contrase\u00F1a es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SaveButtonComponent_div_6_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
} }
function SaveButtonComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveButtonComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveButtonComponent_div_6_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7)(3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveButtonComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10)(8, "form", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SaveButtonComponent_div_6_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onLogin()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 13)(11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Usuario/Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SaveButtonComponent_div_6_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.username = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SaveButtonComponent_div_6_div_15_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SaveButtonComponent_div_6_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.password = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SaveButtonComponent_div_6_div_21_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 21)(23, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SaveButtonComponent_div_6_span_24_Template, 1, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveButtonComponent_div_6_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.closeModal()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r1.invalid || ctx_r0.isLoggingIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoggingIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.isLoggingIn ? "Iniciando sesi\u00F3n..." : "Iniciar Sesi\u00F3n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isLoggingIn);
} }
class SaveButtonComponent {
    constructor(manager, userService, reperService) {
        this.manager = manager;
        this.userService = userService;
        this.reperService = reperService;
        this.isLoginOpen = false;
        this.username = '';
        this.password = '';
        this.isLoggingIn = false;
        // Flag para recordar la intención de guardar cuando se abre el modal de login
        this.pendingSave = false;
        this.saveClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    onSave() {
        if (!sessionStorage.getItem('token')) {
            // marcar intención de guardar y abrir modal
            this.pendingSave = true;
            this.openLoginModal();
            return;
        }
        else {
            this.performSave();
        }
    }
    // Nuevo método centralizado para realizar el guardado
    performSave() {
        const project = this.manager.selectedProject;
        if (!project) {
            console.warn('No project selected to save.');
            return;
        }
        this.reperService.save(project).subscribe({
            next: (response) => {
                // Marcar el proyecto como guardado
                this.manager.markProjectAsSaved();
                this.manager.markMutantCyclesAsSaved();
                this.saveClick.emit();
                console.log('Project saved successfully');
            },
            error: (error) => {
                console.error('Error al guardar:', error);
            }
        });
    }
    openLoginModal() {
        this.isLoginOpen = true;
    }
    closeModal() {
        this.isLoginOpen = false;
        this.username = '';
        this.password = '';
        this.isLoggingIn = false;
        this.pendingSave = false; // limpiar si cierra sin loguear
    }
    onLogin() {
        if (this.username.trim() && this.password.trim()) {
            this.isLoggingIn = true;
            this.userService.login(this.username, this.password)
                .subscribe({
                next: (token) => {
                    this.isLoggingIn = false;
                    // Guardar token si el servicio lo devuelve
                    if (token) {
                        sessionStorage.setItem('token', token);
                    }
                    this.isLoginOpen = false;
                    // Si había intención de guardar, ejecutar el guardado aquí
                    if (this.pendingSave) {
                        // emitir con pequeño retardo para garantizar que el cierre del modal se procese
                        setTimeout(() => {
                            this.performSave();
                            this.pendingSave = false;
                        }, 0);
                    }
                    else {
                        // seguir emitiendo el evento por compatibilidad
                        setTimeout(() => this.saveClick.emit(), 0);
                    }
                },
                error: (error) => {
                    console.error('Login failed:', error);
                    this.isLoggingIn = false;
                }
            });
        }
    }
}
SaveButtonComponent.ɵfac = function SaveButtonComponent_Factory(t) { return new (t || SaveButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_0__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_reper_service__WEBPACK_IMPORTED_MODULE_2__.ReperService)); };
SaveButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SaveButtonComponent, selectors: [["app-save-button"]], outputs: { saveClick: "saveClick" }, decls: 7, vars: 1, consts: [["aria-label", "Save", 1, "save-button", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 21v-8H7v8M7 3v5h8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "placeholder", "Ingrese su usuario o email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["usernameInput", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "Ingrese su contrase\u00F1a", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordInput", "ngModel"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "ml-2", 3, "disabled", "click"], [1, "text-danger"], ["role", "status", 1, "spinner-border", "spinner-border-sm"]], template: function SaveButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveButtonComponent_Template_button_click_0_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 2)(3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SaveButtonComponent_div_6_Template, 28, 8, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoginOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n\r\n.save-button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 80px;\r\n  z-index: 1000;\r\n\r\n  \r\n  background: var(--accent-gradient);\r\n  color: white;\r\n  border: 1px solid var(--border-glass);\r\n  border-radius: 12px;\r\n  padding: 0.875rem 1.5rem;\r\n  font-size: 0.9375rem;\r\n  font-weight: 600;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  letter-spacing: -0.01em;\r\n  cursor: pointer;\r\n\r\n  \r\n  box-shadow:\r\n    0 4px 16px var(--shadow-glass),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n  backdrop-filter: blur(12px);\r\n  -webkit-backdrop-filter: blur(12px);\r\n\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.625rem;\r\n\r\n  \r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, var(--accent-secondary) 0%, #7da88a 100%);\r\n  box-shadow:\r\n    0 6px 20px var(--shadow-glass-strong),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n  transform: translateY(-2px);\r\n  border-color: var(--accent-primary);\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n  box-shadow:\r\n    0 2px 8px var(--shadow-glass),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  box-shadow:\r\n    0 0 0 4px rgba(157, 192, 169, 0.2),\r\n    0 4px 16px var(--shadow-glass),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .save-button[_ngcontent-%COMP%] {\r\n    bottom: 15px;\r\n    right: 60px;\r\n    padding: 0.75rem 1.25rem;\r\n    font-size: 0.875rem;\r\n  }\r\n\r\n  .save-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@keyframes slideIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%] {\r\n  animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1050;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: var(--glass-bg);\r\n  -webkit-backdrop-filter: blur(16px);\r\n          backdrop-filter: blur(16px);\r\n  border: 1px solid var(--border-glass);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 10px var(--shadow-glass);\r\n  max-width: 420px;\r\n  width: 90%;\r\n  max-height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.5rem 2rem;\r\n  border-bottom: 1px solid var(--border-glass-light);\r\n  background-color: var(--glass-bg-card);\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: var(--text-primary);\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  color: var(--text-muted);\r\n  padding: 0;\r\n  width: 32px;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 6px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--glass-bg-hover);\r\n  color: var(--text-primary);\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n}\r\n\r\n\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 500;\r\n  color: var(--text-secondary);\r\n  font-size: 0.875rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.75rem;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  border: 2px solid var(--border-glass-light);\r\n  border-radius: 8px;\r\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\r\n  box-sizing: border-box;\r\n  font-family: 'Inter', sans-serif;\r\n  background: var(--glass-bg-card);\r\n  color: var(--text-primary);\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: var(--accent-primary);\r\n  box-shadow: 0 0 0 3px rgba(157, 192, 169, 0.1);\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: var(--text-muted);\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 2rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-decoration: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  font-family: 'Inter', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background: var(--accent-gradient);\r\n  color: white;\r\n  min-width: 140px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  filter: brightness(1.1);\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 4px 12px var(--shadow-glass);\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%] {\r\n  background-color: var(--glass-bg-card);\r\n  color: var(--text-secondary);\r\n  border: 2px solid var(--border-glass-light);\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background-color: var(--glass-bg-hover);\r\n  color: var(--text-primary);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n  transform: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%] {\r\n  color: #ef4444;\r\n  font-size: 0.75rem;\r\n  margin-top: 0.25rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.ml-2[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n\r\n\r\n.spinner-border[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  vertical-align: text-bottom;\r\n  border: 0.125em solid currentColor;\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n  animation: spinner-border-spin 0.75s linear infinite;\r\n}\r\n\r\n.spinner-border-sm[_ngcontent-%COMP%] {\r\n  width: 0.875rem;\r\n  height: 0.875rem;\r\n  border-width: 0.125em;\r\n}\r\n\r\n@keyframes spinner-border-spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n  .modal-content[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    margin: 10px;\r\n  }\r\n\r\n  .modal-header[_ngcontent-%COMP%] {\r\n    padding: 1.25rem 1.5rem;\r\n  }\r\n\r\n  .modal-body[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .modal-title[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUdBQW1HOztBQUVuRztFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7O0VBRWIsa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwrRUFBK0U7RUFDL0UsdUJBQXVCO0VBQ3ZCLGVBQWU7O0VBRWYsNkJBQTZCO0VBQzdCOzswQ0FFd0M7RUFDeEMsMkJBQTJCO0VBQzNCLG1DQUFtQzs7RUFFbkMsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTs7RUFFYiw4QkFBOEI7RUFDOUIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLDZFQUE2RTtFQUM3RTs7MENBRXdDO0VBQ3hDLDJCQUEyQjtFQUMzQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEI7OzBDQUV3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYjs7OzBDQUd3QztBQUMxQzs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFJQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFD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RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNhdmUtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uc2F2ZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgLyogR2xhc3Ntb3JwaGlzbSBRdWFudHVtIFN0eWxpbmcgKi9cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMC44NzVyZW0gMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC8qIEdsYXNzIGVmZmVjdCB3aXRoIHNoYWRvdyAqL1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDRweCAxNnB4IHZhcigtLXNoYWRvdy1nbGFzcyksXHJcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcblxyXG4gIC8qIEZsZXhib3ggZm9yIGljb24gYW5kIHRleHQgYWxpZ25tZW50ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC42MjVyZW07XHJcblxyXG4gIC8qIFNtb290aCB0cmFuc2l0aW9uIGVmZmVjdHMgKi9cclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHN2ZyB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KSAwJSwgIzdkYTg4YSAxMDAlKTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA2cHggMjBweCB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKSxcclxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDJweCA4cHggdmFyKC0tc2hhZG93LWdsYXNzKSxcclxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgMCAwIDRweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMiksXHJcbiAgICAwIDRweCAxNnB4IHZhcigtLXNoYWRvdy1nbGFzcyksXHJcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNhdmUtYnV0dG9uIHtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcblxyXG4gIC5zYXZlLWJ1dHRvbiBzdmcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb24gZm9yIHdoZW4gdGhlIGJ1dHRvbiBhcHBlYXJzICovXHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbiB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcblxyXG5cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2xhc3MtYmcpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbiAgbWF4LXdpZHRoOiA0MjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLyogRm9ybSBzdHlsZXMgKi9cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjEpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBzdHlsZXMgKi9cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZ3JhZGllbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nbGFzcy1iZy1jYXJkKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcy1saWdodCk7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nbGFzcy1iZy1ob3Zlcik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5idG46ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVXRpbGl0eSBjbGFzc2VzICovXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5tbC0yIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBTcGlubmVyIHN0eWxlcyAqL1xyXG4uc3Bpbm5lci1ib3JkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyLWJvcmRlci1zcGluIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNwaW5uZXItYm9yZGVyLXNtIHtcclxuICB3aWR0aDogMC44NzVyZW07XHJcbiAgaGVpZ2h0OiAwLjg3NXJlbTtcclxuICBib3JkZXItd2lkdGg6IDAuMTI1ZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXItc3BpbiB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBtb2RhbCAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ThemeService {
    constructor() {
        this.darkMode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isDarkMode$ = this.darkMode.asObservable();
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.setDarkMode(true);
        }
        else if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setDarkMode(true);
        }
        else {
            this.setDarkMode(false);
        }
    }
    toggleTheme() {
        this.setDarkMode(!this.darkMode.value);
    }
    setDarkMode(isDark) {
        this.darkMode.next(isDark);
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9134:
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarComponent": () => (/* binding */ SideBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _model_QProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/QProgram */ 4228);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _model_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Project */ 9176);
/* harmony import */ var _model_QCircuit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/QCircuit */ 1999);
/* harmony import */ var _model_ProjectNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProjectNote */ 4454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _reper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reper.service */ 162);
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manager.service */ 8842);
/* harmony import */ var _qumugen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../qumugen.service */ 2740);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ 2785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
















function SideBarComponent_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Loading circuits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SideBarComponent_div_4_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.menuAbierto);
} }
function SideBarComponent_div_5_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_div_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.refreshCircuits()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Circuits");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SideBarComponent_div_5_div_1_button_4_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.createNewCircuit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("creating", ctx_r3.isCreatingProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r3.isCreatingProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r3.isCreatingProject ? "fa-spinner fa-spin" : "fa-plus");
} }
function SideBarComponent_div_5_li_3_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 29);
} }
function SideBarComponent_div_5_li_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_li_3_span_4_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18); const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); ctx_r16.selectCircuit(circuit_r11); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SideBarComponent_div_5_li_3_span_4_span_2_Template, 1, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", circuit_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !circuit_r11.saved);
} }
function SideBarComponent_div_5_li_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](circuit_r11.id);
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_li_3_ul_6_li_1_span_4_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28); const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); ctx_r26.selectMutantCycle(project_r22); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" Mutant Cycle ", project_r22.id, " (", project_r22.mutants.length, " mutants) ");
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Project ", project_r22.id, "");
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const mutant_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Mutant ", mutant_r32.mutantIndex, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", mutant_r32.mutationOperator, ")");
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mutant_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Mutant ", mutant_r32.mutantIndex, " ");
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 36)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38); const mutant_r32 = restoredCtx.$implicit; const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.selectMutant(mutant_r32, circuit_r11)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_span_3_Template, 4, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_span_4_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r31.menuAbierto);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r31.menuAbierto);
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_li_1_Template, 5, 2, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", project_r22.mutants);
} }
function SideBarComponent_div_5_li_3_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 33)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_li_3_ul_6_li_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const project_r22 = restoredCtx.$implicit; const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.toggleProject(ctx_r41.getProjectKey(circuit_r11.name, project_r22.id))); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 22)(3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SideBarComponent_div_5_li_3_ul_6_li_1_span_4_Template, 2, 2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SideBarComponent_div_5_li_3_ul_6_li_1_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SideBarComponent_div_5_li_3_ul_6_li_1_ul_6_Template, 2, 1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r22 = ctx.$implicit;
    const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("expanded", ctx_r21.isProjectExpanded(ctx_r21.getProjectKey(circuit_r11.name, project_r22.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r21.menuAbierto);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r21.menuAbierto);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r21.isProjectExpanded(ctx_r21.getProjectKey(circuit_r11.name, project_r22.id)));
} }
function SideBarComponent_div_5_li_3_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SideBarComponent_div_5_li_3_ul_6_li_1_Template, 7, 5, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const circuit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", circuit_r11.mutantCycles);
} }
function SideBarComponent_div_5_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_div_5_li_3_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const circuit_r11 = restoredCtx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.toggleCircuit(circuit_r11.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 22)(3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SideBarComponent_div_5_li_3_span_4_Template, 3, 2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SideBarComponent_div_5_li_3_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SideBarComponent_div_5_li_3_ul_6_Template, 2, 1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const circuit_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("expanded", ctx_r4.isCircuitExpanded(circuit_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.menuAbierto);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r4.menuAbierto);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.isCircuitExpanded(circuit_r11.name));
} }
function SideBarComponent_div_5_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "No circuits available");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SideBarComponent_div_5_div_4_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.menuAbierto);
} }
function SideBarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SideBarComponent_div_5_div_1_Template, 7, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SideBarComponent_div_5_li_3_Template, 7, 5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SideBarComponent_div_5_div_4_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.menuAbierto);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.circuits);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.circuits.length === 0);
} }
class SideBarComponent {
    constructor(router, el, reperService, manager, qumugen, sanitizer, userService) {
        this.router = router;
        this.el = el;
        this.reperService = reperService;
        this.manager = manager;
        this.qumugen = qumugen;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.menuAbierto = false;
        this.mostrarInicio = true;
        this.circuits = [];
        this.expandedCircuits = new Set();
        this.expandedProjects = new Set();
        this.loading = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
        this.isCreatingProject = false; // Protección contra doble-click (público para el template)
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd) {
                this.mostrarInicio = this.router.url === '/home';
            }
        });
    }
    ngOnInit() {
        this.manager.sidebarExpanded = this.menuAbierto;
        if (sessionStorage.getItem('token')) {
            this.loadCircuitsFromService();
        }
        // Suscribirse a eventos de login
        this.subs.add(this.userService.login$.subscribe(() => {
            this.loadCircuitsFromService();
        }));
        // Suscribirse a cambios en el proyecto seleccionado
        // Esta es la ÚNICA fuente de verdad para agregar proyectos nuevos
        this.subs.add(this.manager.selectedProject$.subscribe((project) => {
            if (project) {
                // Buscar si ya existe por ID o por referencia
                const existingIndex = this.circuits.findIndex(c => (c.id && project.id && c.id === project.id) || c === project);
                if (existingIndex === -1) {
                    // No existe, agregarlo
                    this.circuits.push(project);
                    // Expandir automáticamente el nuevo proyecto
                    if (project.name) {
                        this.expandedCircuits.add(project.name);
                    }
                }
                else {
                    // Ya existe, actualizarlo en su posición
                    this.circuits[existingIndex] = project;
                }
            }
        }));
        // Agregar el proyecto actual si existe y no está en la lista
        if (this.manager.selectedProject) {
            const exists = this.circuits.some(c => (c.id && this.manager.selectedProject.id && c.id === this.manager.selectedProject.id) ||
                c === this.manager.selectedProject);
            if (!exists) {
                this.circuits.push(this.manager.selectedProject);
            }
        }
    }
    itToList(circuit) {
        // Verificar si el circuito ya existe en la lista
        const existingIndex = this.circuits.findIndex(c => c.id === circuit.id);
        if (existingIndex >= 0) {
            // Si existe, reemplazarlo
            this.circuits[existingIndex] = circuit;
        }
        else {
            // Si no existe, agregarlo
            this.circuits.push(circuit);
        }
        // Expandir automáticamente el circuito recién agregado
        this.expandedCircuits.add(circuit.name);
    }
    getuserEmail() {
        this.reperService.getUser(sessionStorage.getItem('token')).subscribe({
            next: (data) => {
                sessionStorage.setItem('email', data);
            }
        });
    }
    toggleCircuit(circuitId) {
        if (this.expandedCircuits.has(circuitId)) {
            this.expandedCircuits.delete(circuitId);
        }
        else {
            this.expandedCircuits.add(circuitId);
        }
    }
    toggleProject(projectKey) {
        if (this.expandedProjects.has(projectKey)) {
            this.expandedProjects.delete(projectKey);
        }
        else {
            this.expandedProjects.add(projectKey);
        }
    }
    isCircuitExpanded(circuitId) {
        return this.expandedCircuits.has(circuitId);
    }
    isProjectExpanded(projectKey) {
        return this.expandedProjects.has(projectKey);
    }
    selectCircuit(circuit) {
        this.manager.setselectedProject(circuit);
        this.manager.showCircuit = true;
        this.manager.showHome = false;
        this.manager.showMutantsInfo = false;
        this.manager.showMutantCycleInfo = false;
    }
    selectMutant(mutant, project) {
        this.manager.setselectedProject(project);
        this.manager.setSelectedMutant(mutant);
        this.manager.showCircuit = false;
        this.manager.showHome = false;
        this.manager.showMutantsInfo = true;
        this.manager.showMutantCycleInfo = false;
        //Modificar para que no se haga aqui
        if (this.manager.selectedProject) {
            this.qumugen.getQiskitCode(this.manager.selectedProject.qProgram).then(code => {
                this.manager.selectedProject.qProgram.qCode.code = code.wholeCode.split("\n");
            }).catch(error => {
                console.error('Error getting qiskit code for selected circuit:', error);
            });
        }
        if (mutant.circuit && mutant.circuit.qCircuit.textQuirkCode) {
            this.qumugen.getQiskitCode(mutant.circuit).then(code => {
                this.url = this.sanitizer.bypassSecurityTrustResourceUrl(_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent.quirkUrl + "#circuit=" + mutant.circuit.qCircuit.textQuirkCode);
                mutant.circuit.qCode.code = code.wholeCode.split("\n");
            }).catch(error => {
                console.error('Error getting qiskit code for mutant circuit:', error);
            });
        }
        else {
            console.warn('Cannot process mutant: circuit or quirk code not available');
        }
    }
    selectMutantCycle(mutantCycle) {
        this.manager.setSelectedMutantCycle(mutantCycle);
        this.manager.showCircuit = false;
        this.manager.showHome = false;
        this.manager.showMutantsInfo = false;
        this.manager.showMutantCycleInfo = true;
    }
    getProjectKey(circuitId, projectId) {
        return `${circuitId}_${projectId}`;
    }
    ngAfterViewInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.2 // Aparece cuando el 20% del elemento es visible
        });
        const hiddenElements = this.el.nativeElement.querySelectorAll('.fade-in');
        hiddenElements.forEach((el) => observer.observe(el));
    }
    onActivate() {
        this.mostrarInicio = false;
    }
    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
        this.manager.sidebarExpanded = this.menuAbierto;
    }
    /**
     * Crea un nuevo proyecto/circuito
     * IMPORTANTE: No agregamos manualmente a this.circuits aquí.
     * La suscripción a selectedProject$ se encarga de eso automáticamente.
     */
    createNewCircuit() {
        // Protección contra doble-click
        if (this.isCreatingProject) {
            return;
        }
        this.isCreatingProject = true;
        // Generar nombre único
        let name = 'Project' + (this.circuits.length + 1);
        let newCircuit = new _model_Project__WEBPACK_IMPORTED_MODULE_2__.Project();
        newCircuit.name = name;
        // Configurar el manager
        this.manager.setNewselectedProject(newCircuit);
        this.manager.showCircuit = true;
        this.manager.showMutantsInfo = false;
        this.manager.showSaveButton = false;
        this.manager.showMutantCycleInfo = false;
        // Resetear protección después de un breve delay
        setTimeout(() => {
            this.isCreatingProject = false;
        }, 500);
    }
    goToHome() {
        this.manager.showHome = true;
        this.manager.showCircuit = false;
        this.manager.showMutantsInfo = false;
    }
    ngOnDestroy() {
        // Limpiar suscripciones para evitar memory leaks
        this.subscriptions.unsubscribe();
        this.subs.unsubscribe();
    }
    isLoggedIn() {
        return !!sessionStorage.getItem('token');
    }
    refreshCircuits() {
        // Verificar si hay cambios sin guardar en el proyecto actual
        if (this.manager.selectedProject && !this.manager.selectedProject.saved) {
            const confirmRefresh = confirm('You have unsaved changes in the current project. If you refresh, these changes will be lost. Do you want to continue?');
            if (!confirmRefresh) {
                return;
            }
        }
        this.loadCircuitsFromService();
    }
    loadCircuitsFromService() {
        const email = sessionStorage.getItem('email');
        const token = sessionStorage.getItem('token');
        this.loading = true;
        let email$ = email
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(email)
            : this.reperService.getUser(token).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(userEmail => sessionStorage.setItem('email', userEmail)));
        email$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(userEmail => this.reperService.getCircuits(userEmail, token))).subscribe({
            next: (data) => {
                this.circuits = data.map((circuitData) => {
                    // Mapeo profundo a clases
                    const project = new _model_Project__WEBPACK_IMPORTED_MODULE_2__.Project(undefined, undefined, undefined, undefined, true);
                    project.id = circuitData.id;
                    project.name = circuitData.name;
                    // QProgram
                    if (circuitData.qProgram) {
                        const qProgram = new _model_QProgram__WEBPACK_IMPORTED_MODULE_0__.QProgram();
                        Object.assign(qProgram, circuitData.qProgram);
                        // QCircuit
                        if (circuitData.qProgram.qCircuit) {
                            const qCircuit = new _model_QCircuit__WEBPACK_IMPORTED_MODULE_3__.QCircuit(circuitData.qProgram.qCircuit.id, circuitData.qProgram.qCircuit.quirkCode);
                            qProgram.qCircuit = qCircuit;
                        }
                        project.qProgram = qProgram;
                    }
                    // MutantCycles
                    project.mutantCycles = (circuitData.mutantCycles || []).map((cycleData) => {
                        const mutantCycle = new ((__webpack_require__(/*! ../model/MutantCycle */ 8569).MutantCycle))();
                        mutantCycle.id = cycleData.id;
                        mutantCycle.date = cycleData.date;
                        mutantCycle.execConfig = cycleData.execConfig;
                        // Mutants
                        mutantCycle.mutants = (cycleData.mutants || []).map((mutantData) => {
                            const mutant = new ((__webpack_require__(/*! ../model/Mutant */ 7168).Mutant))();
                            mutant.id = mutantData.id;
                            mutant.mutantResults = mutantData.mutantResults;
                            mutant.mutantIndex = mutantData.mutantIndex;
                            mutant.mutatedColumn = mutantData.mutatedColumn;
                            mutant.mutatedRow = mutantData.mutatedRow;
                            mutant.operator.name = mutantData.operator.name;
                            mutant.mutationOperator = mutantData.operator.name; // <--- The fix
                            mutant.operator.id = mutantData.operator.type;
                            mutant.operator.enabled = mutantData.operator.enabled;
                            mutant.operator.description = mutantData.operator.description;
                            // Circuit (QProgram)
                            if (mutantData.circuit) {
                                const mutantQProgram = new _model_QProgram__WEBPACK_IMPORTED_MODULE_0__.QProgram();
                                Object.assign(mutantQProgram, mutantData.circuit);
                                if (mutantData.circuit.qCircuit) {
                                    const mutantQCircuit = new _model_QCircuit__WEBPACK_IMPORTED_MODULE_3__.QCircuit(mutantData.circuit.qCircuit.id, mutantData.circuit.qCircuit.quirkCode);
                                    mutantQProgram.qCircuit = mutantQCircuit;
                                }
                                mutant.circuit = mutantQProgram;
                            }
                            return mutant;
                        });
                        return mutantCycle;
                    });
                    if (circuitData.projectNotes) {
                        project.projectNotes = (circuitData.projectNotes || []).map((noteData) => {
                            const note = new _model_ProjectNote__WEBPACK_IMPORTED_MODULE_4__.ProjectNote(noteData.title, noteData.text, noteData.type, noteData.id, new Date(noteData.timestamp));
                            return note;
                        });
                    }
                    return project;
                });
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading circuits:', error);
                this.loading = false;
            }
        });
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_reper_service__WEBPACK_IMPORTED_MODULE_5__.ReperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_manager_service__WEBPACK_IMPORTED_MODULE_6__.ManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_qumugen_service__WEBPACK_IMPORTED_MODULE_7__.QumugenService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService)); };
SideBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 6, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"], [1, "sidebar"], ["aria-label", "Toggle menu", 1, "toggle-btn", 3, "click"], [1, "fas", 3, "ngClass"], ["class", "loading-container", 4, "ngIf"], ["class", "tree-container", 4, "ngIf"], [1, "loading-container"], [1, "fas", "fa-spinner", "fa-spin"], [4, "ngIf"], [1, "tree-container"], ["class", "tree-header", 4, "ngIf"], [1, "tree-list"], ["class", "tree-item circuit-item", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "tree-header"], [1, "header-content"], ["class", "refresh-btn", "title", "Refresh project list", "aria-label", "Refresh project list", 3, "click", 4, "ngIf"], ["aria-label", "Create new quantum circuit project", 1, "new-btn", 3, "disabled", "click"], ["title", "Refresh project list", "aria-label", "Refresh project list", 1, "refresh-btn", 3, "click"], [1, "fas", "fa-sync-alt"], [1, "tree-item", "circuit-item"], [1, "tree-node", 3, "click"], [1, "fas", "fa-chevron-right", "expand-icon"], [1, "fas", "fa-microchip", "circuit-icon"], ["class", "node-label", 3, "click", 4, "ngIf"], ["class", "tooltip", 4, "ngIf"], ["class", "tree-sublist", 4, "ngIf"], [1, "node-label", 3, "click"], ["class", "unsaved-indicator", "title", "Unsaved changes", "aria-label", "This project has unsaved changes", 4, "ngIf"], ["title", "Unsaved changes", "aria-label", "This project has unsaved changes", 1, "unsaved-indicator"], [1, "tooltip"], [1, "tree-sublist"], ["class", "tree-item project-item", 4, "ngFor", "ngForOf"], [1, "tree-item", "project-item"], [1, "fas", "fa-folder", "project-icon"], ["class", "tree-item mutant-item", 4, "ngFor", "ngForOf"], [1, "tree-item", "mutant-item"], [1, "fas", "fa-bug", "mutant-icon"], ["class", "node-label", 4, "ngIf"], [1, "node-label"], [1, "empty-state"], [1, "fas", "fa-exclamation-circle"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SideBarComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SideBarComponent_div_5_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("open", ctx.menuAbierto);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.menuAbierto ? "fa-times" : "fa-bars");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100vh;\r\n  width: 70px;\r\n  background: var(--glass-bg-sidebar);\r\n  backdrop-filter: blur(12px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\r\n  border-right: 1px solid var(--border-glass);\r\n  box-shadow: 2px 0 24px var(--shadow-glass);\r\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, border-color 0.3s ease;\r\n  z-index: 1000;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\n.sidebar.open[_ngcontent-%COMP%] {\r\n  width: 320px;\r\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  border: 1px solid var(--border-glass);\r\n  background: var(--glass-bg);\r\n  color: var(--accent-primary);\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 200ms;\r\n  box-shadow: 0 2px 8px var(--shadow-glass);\r\n  z-index: 10;\r\n  margin: 1rem auto;\r\n  flex-shrink: 0;\r\n}\n.sidebar.open[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 0;\r\n  transform: none;\r\n  margin: 1rem 1rem 1rem auto;\r\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\r\n  background: var(--glass-bg-hover);\r\n  border-color: var(--accent-primary);\r\n  transform: translateX(-50%) scale(1.05);\r\n  box-shadow: 0 4px 12px var(--shadow-glass-strong);\r\n}\n.sidebar.open[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n}\n.toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transition: transform 200ms;\r\n}\n.toggle-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n\n.loading-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem 1rem;\r\n  gap: 1rem;\r\n}\n.loading-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  color: var(--accent-primary);\r\n}\n\n.tree-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  overflow: hidden;\r\n}\n\n.tree-header[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.25rem;\r\n  border-bottom: 1px solid var(--border-glass-light);\r\n  background: var(--glass-bg-card);\r\n  flex-shrink: 0;\r\n}\n.header-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n  margin-bottom: 0.75rem;\r\n}\n.tree-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: var(--text-primary);\r\n  margin: 0;\r\n  flex: 1;\r\n}\n.new-btn[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 8px;\r\n  border: none;\r\n  background: var(--accent-gradient);\r\n  color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 200ms;\r\n  box-shadow: 0 2px 8px var(--shadow-glass);\r\n}\n.new-btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 4px 12px var(--shadow-glass-strong);\r\n  filter: brightness(1.1);\r\n}\n.new-btn[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n}\n.new-btn[_ngcontent-%COMP%]:disabled, .new-btn.creating[_ngcontent-%COMP%] {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n  pointer-events: none;\r\n}\n.new-btn[_ngcontent-%COMP%]:disabled:hover, .new-btn.creating[_ngcontent-%COMP%]:hover {\r\n  transform: none;\r\n  box-shadow: 0 2px 8px var(--shadow-glass);\r\n}\n\n.refresh-btn[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 8px;\r\n  border: none;\r\n  background: var(--shadow-glass);\r\n  color: var(--accent-secondary);\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  border: 1px solid var(--border-glass-light);\r\n}\n.refresh-btn[_ngcontent-%COMP%]:hover {\r\n  background: var(--shadow-glass-strong);\r\n  color: var(--accent-primary);\r\n  transform: rotate(180deg);\r\n  box-shadow: 0 0 12px var(--shadow-glass);\r\n  border-color: var(--border-glass);\r\n}\n.refresh-btn[_ngcontent-%COMP%]:active {\r\n  transform: rotate(180deg) scale(0.95);\r\n}\n.refresh-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\n\n.tree-list[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow-y: auto;\r\n  flex: 1;\r\n}\n.tree-sublist[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-left: 1.5rem;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .tree-sublist[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n.tree-item[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n\n.tree-node[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.625rem;\r\n  padding: 0.625rem 0.75rem;\r\n  cursor: pointer;\r\n  transition: all 200ms;\r\n  position: relative;\r\n  border-radius: 8px;\r\n  margin: 0.125rem 0.25rem;\r\n  min-height: 40px;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .tree-node[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  padding: 0.625rem 0.5rem;\r\n}\n.tree-node[_ngcontent-%COMP%]:hover {\r\n  background: var(--shadow-glass);\r\n}\n.tree-node[_ngcontent-%COMP%]:active {\r\n  background: var(--shadow-glass-strong);\r\n}\n\n.expand-icon[_ngcontent-%COMP%] {\r\n  color: var(--text-muted);\r\n  flex-shrink: 0;\r\n  transition: transform 200ms;\r\n  font-size: 0.75rem;\r\n  width: 12px;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .expand-icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n.expand-icon.expanded[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n\n.node-icon[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  transition: all 200ms;\r\n  font-size: 1.125rem;\r\n  width: 20px;\r\n  height: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\n.circuit-icon[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n}\n.project-icon[_ngcontent-%COMP%] {\r\n  color: var(--accent-secondary);\r\n}\n.mutant-icon[_ngcontent-%COMP%] {\r\n  color: var(--accent-tertiary);\r\n}\n.tree-node[_ngcontent-%COMP%]:hover   .node-icon[_ngcontent-%COMP%] {\r\n  transform: scale(1.15);\r\n}\n\n.node-label[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  color: var(--text-primary);\r\n  font-weight: 500;\r\n  flex: 1;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 200ms;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .node-label[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  width: 0;\r\n  overflow: hidden;\r\n}\n.tree-node[_ngcontent-%COMP%]:hover   .node-label[_ngcontent-%COMP%] {\r\n  color: var(--accent-primary);\r\n}\n.node-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  opacity: 0.7;\r\n}\n\n.unsaved-indicator[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(135deg, #ff0055 0%, #ff00ff 100%);\r\n  margin-left: 0.5rem;\r\n  position: relative;\r\n  animation: pulse-glow 1.5s ease-in-out infinite;\r\n  box-shadow:\r\n    0 0 6px rgba(255, 0, 85, 0.8),\r\n    0 0 10px rgba(255, 0, 255, 0.4);\r\n  border: 1px solid rgba(255, 255, 255, 0.8);\r\n}\n.unsaved-indicator[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 14px;\r\n  height: 14px;\r\n  border-radius: 50%;\r\n  background: rgba(255, 0, 85, 0.3);\r\n  animation: pulse-ring 1.5s ease-in-out infinite;\r\n}\n@keyframes pulse-glow {\r\n\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.8;\r\n    transform: scale(1.2);\r\n  }\r\n}\n@keyframes pulse-ring {\r\n  0% {\r\n    transform: translate(-50%, -50%) scale(1);\r\n    opacity: 0.6;\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-50%, -50%) scale(1.8);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(2.4);\r\n    opacity: 0;\r\n  }\r\n}\n\n.badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.125rem 0.5rem;\r\n  background: var(--shadow-glass);\r\n  border-radius: 12px;\r\n  font-size: 0.6875rem;\r\n  font-weight: 600;\r\n  color: var(--accent-primary);\r\n  margin-left: 0.5rem;\r\n}\n\n.operator-tag[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0.125rem 0.375rem;\r\n  background: var(--shadow-glass);\r\n  border-radius: 4px;\r\n  font-size: 0.6875rem;\r\n  font-weight: 500;\r\n  color: var(--text-secondary);\r\n  margin-left: 0.375rem;\r\n}\n\n.tooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  margin-left: 0.75rem;\r\n  padding: 0.5rem 0.875rem;\r\n  background: rgba(26, 31, 46, 0.95);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  color: white;\r\n  font-size: 0.75rem;\r\n  font-weight: 500;\r\n  border-radius: 6px;\r\n  white-space: nowrap;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n  z-index: 1001;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .tree-node[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\n.sidebar.open[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n\n.empty-state[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 3rem 1rem;\r\n  gap: 1rem;\r\n  color: var(--text-muted);\r\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  font-size: 2rem;\r\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\n\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: transparent;\r\n  border-radius: 3px;\r\n}\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: var(--border-glass);\r\n  border-radius: 3px;\r\n}\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: var(--accent-primary);\r\n}\n\n@media (max-width: 768px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 0;\r\n  }\r\n\r\n  .sidebar.open[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n  }\r\n\r\n  .toggle-btn[_ngcontent-%COMP%] {\r\n    right: -50px;\r\n    left: auto;\r\n    transform: none;\r\n  }\r\n\r\n  .sidebar.open[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\r\n    right: 1rem;\r\n  }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    animation-duration: 0.01ms !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\n.toggle-btn[_ngcontent-%COMP%]:focus-visible, .new-btn[_ngcontent-%COMP%]:focus-visible, .tree-node[_ngcontent-%COMP%]:focus-visible {\r\n  outline: 2px solid var(--accent-primary);\r\n  outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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a0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSxzQkFBc0I7QUFDdEI7O0VBRUUsVUFBVTtBQUNaO0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxpQ0FBaUM7QUFDbkM7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUEsa0JBQWtCO0FBQ2xCOztFQUVFOzs7SUFHRSxxQ0FBcUM7SUFDckMsc0NBQXNDO0VBQ3hDO0FBQ0Y7QUFFQTs7O0VBR0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2lkZWJhciBDb21wb25lbnQgLSBHbGFzc21vcnBoaXNtIFJlZmluZWQgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLXNpZGViYXIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDI0cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2lkZWJhci5vcGVuIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbi8qIFRvZ2dsZSBCdXR0b24gKi9cclxuLnRvZ2dsZS1idG4ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nbGFzcy1iZyk7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnNpZGViYXIub3BlbiAudG9nZ2xlLWJ0biB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMXJlbSBhdXRvO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ2xhc3MtYmctaG92ZXIpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpO1xyXG59XHJcblxyXG4uc2lkZWJhci5vcGVuIC50b2dnbGUtYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ0biBpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XHJcbn1cclxuXHJcbi50b2dnbGUtYnRuOmhvdmVyIGkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLyogTG9hZGluZyBDb250YWluZXIgKi9cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi8qIFRyZWUgQ29udGFpbmVyICovXHJcbi50cmVlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIFRyZWUgSGVhZGVyICovXHJcbi50cmVlLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xhc3MtbGlnaHQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdsYXNzLWJnLWNhcmQpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLnRyZWUtaGVhZGVyIGgzIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBtYXJnaW46IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm5ldy1idG4ge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ncmFkaWVudCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG59XHJcblxyXG4ubmV3LWJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggdmFyKC0tc2hhZG93LWdsYXNzLXN0cm9uZyk7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XHJcbn1cclxuXHJcbi5uZXctYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4ubmV3LWJ0bjpkaXNhYmxlZCxcclxuLm5ldy1idG4uY3JlYXRpbmcge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubmV3LWJ0bjpkaXNhYmxlZDpob3ZlcixcclxuLm5ldy1idG4uY3JlYXRpbmc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxufVxyXG5cclxuLyogUmVmcmVzaCBCdXR0b24gLSBHbGFzc21vcnBoaXNtIFF1YW50dW0gKi9cclxuLnJlZnJlc2gtYnRuIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkb3ctZ2xhc3MpO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzLWxpZ2h0KTtcclxufVxyXG5cclxuLnJlZnJlc2gtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkb3ctZ2xhc3Mtc3Ryb25nKTtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEycHggdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1nbGFzcyk7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0bjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0biBpIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLyogVHJlZSBMaXN0ICovXHJcbi50cmVlLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udHJlZS1zdWJsaXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhcjpub3QoLm9wZW4pIC50cmVlLXN1Ymxpc3Qge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50cmVlLWl0ZW0ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogVHJlZSBOb2RlICovXHJcbi50cmVlLW5vZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMC4xMjVyZW0gMC4yNXJlbTtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhcjpub3QoLm9wZW4pIC50cmVlLW5vZGUge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLnRyZWUtbm9kZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZG93LWdsYXNzKTtcclxufVxyXG5cclxuLnRyZWUtbm9kZTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoYWRvdy1nbGFzcy1zdHJvbmcpO1xyXG59XHJcblxyXG4vKiBFeHBhbmQgSWNvbiAqL1xyXG4uZXhwYW5kLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICBmbGV4LXNocmluazogMDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxMnB4O1xyXG59XHJcblxyXG4uc2lkZWJhcjpub3QoLm9wZW4pIC5leHBhbmQtaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmV4cGFuZC1pY29uLmV4cGFuZGVkIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi8qIE5vZGUgSWNvbnMgKi9cclxuLm5vZGUtaWNvbiB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNpcmN1aXQtaWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnByb2plY3QtaWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4ubXV0YW50LWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG59XHJcblxyXG4udHJlZS1ub2RlOmhvdmVyIC5ub2RlLWljb24ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuXHJcbi8qIE5vZGUgTGFiZWwgKi9cclxuLm5vZGUtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmbGV4OiAxO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbn1cclxuXHJcbi5zaWRlYmFyOm5vdCgub3BlbikgLm5vZGUtbGFiZWwge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRyZWUtbm9kZTpob3ZlciAubm9kZS1sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLm5vZGUtbGFiZWwgc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIFVuc2F2ZWQgSW5kaWNhdG9yIC0gSGlnaCBWaXNpYmlsaXR5IE5lb24gKi9cclxuLnVuc2F2ZWQtaW5kaWNhdG9yIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmMDA1NSAwJSwgI2ZmMDBmZiAxMDAlKTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IHB1bHNlLWdsb3cgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCAwIDZweCByZ2JhKDI1NSwgMCwgODUsIDAuOCksXHJcbiAgICAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMjU1LCAwLjQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLnVuc2F2ZWQtaW5kaWNhdG9yOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgODUsIDAuMyk7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZS1yaW5nIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2UtZ2xvdyB7XHJcblxyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjgpO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgyLjQpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEJhZGdlICovXHJcbi5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZG93LWdsYXNzKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBPcGVyYXRvciBUYWcgKi9cclxuLm9wZXJhdG9yLXRhZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuMzc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoYWRvdy1nbGFzcyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICBtYXJnaW4tbGVmdDogMC4zNzVyZW07XHJcbn1cclxuXHJcbi8qIFRvb2x0aXAgKi9cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC44NzVyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNiwgMzEsIDQ2LCAwLjk1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XHJcbiAgei1pbmRleDogMTAwMTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnNpZGViYXI6bm90KC5vcGVuKSAudHJlZS1ub2RlOmhvdmVyIC50b29sdGlwIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2lkZWJhci5vcGVuIC50b29sdGlwIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBFbXB0eSBTdGF0ZSAqL1xyXG4uZW1wdHktc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICBnYXA6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgaSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBTdHlsaW5nICovXHJcbi50cmVlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi50cmVlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnRyZWUtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5zaWRlYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWdsYXNzKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi50cmVlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxyXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLm9wZW4ge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZS1idG4ge1xyXG4gICAgcmlnaHQ6IC01MHB4O1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLm9wZW4gLnRvZ2dsZS1idG4ge1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGUtYnRuOmZvY3VzLXZpc2libGUsXHJcbi5uZXctYnRuOmZvY3VzLXZpc2libGUsXHJcbi50cmVlLW5vZGU6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 4283:
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class SpinnerComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
  }

}

SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
};

SpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SpinnerComponent,
  selectors: [["app-spinner"]],
  decls: 2,
  vars: 3,
  consts: [["class", "spinner-overlay", 4, "ngIf"], [1, "spinner-overlay"], [1, "spinner"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loadingService.loading$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".spinner-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n  }\r\n  \r\n  .spinner[_ngcontent-%COMP%] {\r\n    border: 16px solid #f3f3f3;\r\n    border-top: 16px solid #3498db;\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0VBQ3BDIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIHtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxuICAiXX0= */"]
});

/***/ }),

/***/ 2785:
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserService {
    constructor(client) {
        this.client = client;
        this.login$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    login(email, pwd) {
        return this.client.post(`http://localhost:8080/users/login`, { email, pwd }, { responseType: 'text' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(token => {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('email', email);
            this.login$.next();
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


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
    production: false
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