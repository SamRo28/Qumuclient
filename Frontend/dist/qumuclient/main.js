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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mutant-cycle-info", 4);
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
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 11, consts: [[2, "color", "red"], [4, "ngIf"], [1, "main-content"], [3, "mutantCycle", 4, "ngIf"], [3, "mutantCycle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
    } }, styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  transition: margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  min-height: 100vh;\r\n}\r\n\r\n.main-content.with-sidebar[_ngcontent-%COMP%] {\r\n  margin-left: 70px;\r\n  \r\n}\r\n\r\n.main-content.with-sidebar.sidebar-expanded[_ngcontent-%COMP%] {\r\n  margin-left: 320px;\r\n  \r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .main-content.with-sidebar[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .main-content.with-sidebar.sidebar-expanded[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 20px;\r\n  font-size: 16px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQud2l0aC1zaWRlYmFyIHtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAvKiBFc3BhY2lvIHBhcmEgZWwgc2lkZWJhciBjb2xhcHNhZG8gKi9cclxufVxyXG5cclxuLm1haW4tY29udGVudC53aXRoLXNpZGViYXIuc2lkZWJhci1leHBhbmRlZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMyMHB4O1xyXG4gIC8qIEVzcGFjaW8gcGFyYSBlbCBzaWRlYmFyIGV4cGFuZGlkbyAqL1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIHBhcmEgZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluLWNvbnRlbnQud2l0aC1zaWRlYmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGVudC53aXRoLXNpZGViYXIuc2lkZWJhci1leHBhbmRlZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
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
        _project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_13__.ProjectNotesComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _circuits_configuration_circuits_configuration_component__WEBPACK_IMPORTED_MODULE_4__.CircuitsConfigurationComponent,
    _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__.SideBarComponent,
    _mutants_info_mutants_info_component__WEBPACK_IMPORTED_MODULE_7__.MutantsInfoComponent,
    _mutant_cycle_info_mutant_cycle_info_component__WEBPACK_IMPORTED_MODULE_11__.MutantCycleInfoComponent,
    _save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__.SaveButtonComponent,
    _project_notes_project_notes_component__WEBPACK_IMPORTED_MODULE_13__.ProjectNotesComponent], []);


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\r\n.glass-form-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.glass-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n    position: relative;\r\n}\r\n.header-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.header-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n    flex: 1;\r\n}\r\n.quantum-icon[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n}\r\n.header-divider[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    background: linear-gradient(90deg, transparent 0%, rgba(111, 168, 130, 0.3) 50%, transparent 100%);\r\n}\r\n\r\n.glass-card[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.7);\r\n    backdrop-filter: blur(10px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid rgba(111, 168, 130, 0.4);\r\n    border-radius: 16px;\r\n    padding: 1.5rem;\r\n    box-shadow: 0 4px 16px rgba(111, 168, 130, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.glass-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 8px 24px rgba(111, 168, 130, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1.25rem;\r\n}\r\n.card-icon[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n    flex-shrink: 0;\r\n}\r\n.card-label[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    font-weight: 600;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n    flex: 1;\r\n}\r\n.status-indicator[_ngcontent-%COMP%] {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: #cbd5e0;\r\n    transition: all 200ms ease;\r\n}\r\n.status-indicator.valid[_ngcontent-%COMP%] {\r\n    background: #6fa882;\r\n    box-shadow: 0 0 0 3px rgba(111, 168, 130, 0.2);\r\n}\r\n\r\n.input-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.input-underline[_ngcontent-%COMP%] {\r\n    height: 2px;\r\n    width: 0;\r\n    background: linear-gradient(90deg, #6fa882 0%, #5d8f6f 100%);\r\n    transition: width 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    margin-top: -2px;\r\n}\r\n.glass-input[_ngcontent-%COMP%]:focus + .input-underline[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.glass-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 0.75rem 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-size: 0.9375rem;\r\n    font-weight: 400;\r\n    color: #1a1f2e;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(111, 168, 130, 0.1);\r\n    outline: none;\r\n}\r\n.glass-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #718096;\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\r\n.glass-input[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.65);\r\n    border-color: rgba(111, 168, 130, 0.3);\r\n}\r\n.glass-input[_ngcontent-%COMP%]:focus {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    border-color: #6fa882;\r\n    box-shadow: 0 0 0 4px rgba(111, 168, 130, 0.15), inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(111, 168, 130, 0.2);\r\n    transform: translateY(-1px);\r\n}\r\n\r\n.code-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.code-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.glass-textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    min-height: 300px;\r\n    padding: 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-family: 'JetBrains Mono', monospace;\r\n    font-size: 0.875rem;\r\n    line-height: 1.6;\r\n    color: #1a1f2e;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    resize: vertical;\r\n    outline: none;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.glass-textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: #718096;\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\r\n.glass-textarea[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.65);\r\n    border-color: rgba(111, 168, 130, 0.3);\r\n}\r\n.glass-textarea[_ngcontent-%COMP%]:focus {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    border-color: #6fa882;\r\n    box-shadow: 0 0 0 4px rgba(111, 168, 130, 0.15), inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.glass-visualize-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    padding: 0.75rem 1.5rem;\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: 0 4px 12px rgba(111, 168, 130, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);\r\n    transition: left 600ms ease;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:hover::before {\r\n    left: 100%;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(135deg, #5d8f6f 0%, #8bc4a0 100%);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 20px rgba(111, 168, 130, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:active {\r\n    transform: translateY(0);\r\n    box-shadow: 0 2px 8px rgba(111, 168, 130, 0.3), inset 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n.glass-visualize-btn[_ngcontent-%COMP%]:disabled {\r\n    background: #cbd5e0;\r\n    cursor: not-allowed;\r\n    transform: none;\r\n    box-shadow: none;\r\n    opacity: 0.6;\r\n}\r\n\r\n.visualize-left-btn[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    margin-left: 0;\r\n}\r\n\r\n.particle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    background: radial-gradient(circle, rgba(111, 168, 130, 0.6) 0%, rgba(111, 168, 130, 0) 70%);\r\n    border-radius: 50%;\r\n    pointer-events: none;\r\n    animation: float 10s infinite ease-in-out;\r\n}\r\n.particle-1[_ngcontent-%COMP%] {\r\n    top: 10%;\r\n    right: 10%;\r\n    animation-delay: 0s;\r\n}\r\n.particle-2[_ngcontent-%COMP%] {\r\n    bottom: 20%;\r\n    left: 5%;\r\n    animation-delay: 5s;\r\n}\r\n.particle-3[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    right: 5%;\r\n    animation-delay: 3s;\r\n}\r\n@keyframes float {\r\n\r\n    0%,\r\n    100% {\r\n        transform: translate(0, 0);\r\n        opacity: 0.4;\r\n    }\r\n\r\n    50% {\r\n        transform: translate(20px, -20px);\r\n        opacity: 0.8;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .header-content[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .glass-card[_ngcontent-%COMP%] {\r\n        padding: 1.25rem;\r\n    }\r\n\r\n    .visualize-left-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\r\n.glass-input[_ngcontent-%COMP%]:focus-visible, .glass-textarea[_ngcontent-%COMP%]:focus-visible, .glass-visualize-btn[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid #6fa882;\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1aXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUdBQW1HO0FBQ25HLGdHQUFnRztBQUZoRyxzQ0FBc0M7QUFJdEM7SUFDSSwrRUFBK0U7SUFDL0UsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULE9BQU87QUFDWDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtHQUFrRztBQUN0RztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsa0RBQWtEO0lBQ2xELDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdGQUF3RjtJQUN4RixrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksdUZBQXVGO0FBQzNGO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULE9BQU87QUFDWDtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsNERBQTREO0lBQzVELG9EQUFvRDtJQUNwRCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLGtEQUFrRDtJQUNsRCxtRkFBbUY7SUFDbkYsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLHlIQUF5SDtJQUN6SCwyQkFBMkI7QUFDL0I7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0RBQWtEO0FBQ3REO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsb0ZBQW9GO0FBQ3hGO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDZEQUE2RDtJQUM3RCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrREFBa0Q7SUFDbEQscUhBQXFIO0lBQ3JILGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtHQUFrRztJQUNsRywyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksNkRBQTZEO0lBQzdELDJCQUEyQjtJQUMzQixzSEFBc0g7QUFDMUg7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrRkFBa0Y7QUFDdEY7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsNEZBQTRGO0lBQzVGLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUNBQXlDO0FBQzdDO0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBRUE7O0lBRUk7O1FBRUksMEJBQTBCO1FBQzFCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsWUFBWTtJQUNoQjtBQUNKO0FBRUEsZUFBZTtBQUNmO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjtBQUNKO0FBRUEsa0JBQWtCO0FBQ2xCOztJQUVJOzs7UUFHSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFFQTs7O0lBR0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjaXJjdWl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDaXJjdWl0IENvbXBvbmVudCAtIEdsYXNzbW9ycGhpc20gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLmdsYXNzLWZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIEhlYWRlciBTZWN0aW9uICovXHJcbi5nbGFzcy1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5xdWFudHVtLWljb24ge1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbn1cclxuXHJcbi5oZWFkZXItZGl2aWRlciB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKSA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG59XHJcblxyXG4vKiBHbGFzcyBDYXJkcyAqL1xyXG4uZ2xhc3MtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxNjgsIDEzMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZ2xhc3MtY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbn1cclxuXHJcbi8qIENhcmQgSGVhZGVyICovXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNhcmQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zdGF0dXMtaW5kaWNhdG9yIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNjYmQ1ZTA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLnN0YXR1cy1pbmRpY2F0b3IudmFsaWQge1xyXG4gICAgYmFja2dyb3VuZDogIzZmYTg4MjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbn1cclxuXHJcbi8qIElucHV0IFdyYXBwZXIgKi9cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC11bmRlcmxpbmUge1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZmYTg4MiAwJSwgIzVkOGY2ZiAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDQwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6Zm9jdXMrLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogR2xhc3MgSW5wdXQgKi9cclxuLmdsYXNzLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5nbGFzcy1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5nbGFzcy1pbnB1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMyk7XHJcbn1cclxuXHJcbi5nbGFzcy1pbnB1dDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KSwgaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgNHB4IDEycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiBDb2RlIENvbnRhaW5lciAqL1xyXG4uY29kZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29kZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5nbGFzcy10ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5nbGFzcy10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5nbGFzcy10ZXh0YXJlYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMyk7XHJcbn1cclxuXHJcbi5nbGFzcy10ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KSwgaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuXHJcbi8qIFZpc3VhbGl6ZSBCdXR0b24gKi9cclxuLmdsYXNzLXZpc3VhbGl6ZS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZmE4ODIgMCUsICM1ZDhmNmYgMTAwJSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpLCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDYwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLmdsYXNzLXZpc3VhbGl6ZS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzVkOGY2ZiAwJSwgIzhiYzRhMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjQpLCAwIDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbn1cclxuXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpLCBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZ2xhc3MtdmlzdWFsaXplLWJ0biBzdmcge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNjYmQ1ZTA7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLyogVmlzdWFsaXplIGJ1dHRvbiBvbiB0aGUgbGVmdCAoYmVsb3cgdGV4dGFyZWEpICovXHJcbi52aXN1YWxpemUtbGVmdC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBGbG9hdGluZyBQYXJ0aWNsZXMgKi9cclxuLnBhcnRpY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTExLCAxNjgsIDEzMCwgMC42KSAwJSwgcmdiYSgxMTEsIDE2OCwgMTMwLCAwKSA3MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0IDEwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBhcnRpY2xlLTEge1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuLnBhcnRpY2xlLTIge1xyXG4gICAgYm90dG9tOiAyMCU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogNXM7XHJcbn1cclxuXHJcbi5wYXJ0aWNsZS0zIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcblxyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMjBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5nbGFzcy1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC52aXN1YWxpemUtbGVmdC1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcclxuLmdsYXNzLXRleHRhcmVhOmZvY3VzLXZpc2libGUsXHJcbi5nbGFzcy12aXN1YWxpemUtYnRuOmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM2ZmE4ODI7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59Il19 */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _operators_operators_component__WEBPACK_IMPORTED_MODULE_2__.OperatorsComponent, _circuit_circuit_component__WEBPACK_IMPORTED_MODULE_0__.CircuitComponent], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n    box-sizing: border-box;\r\n}\n\n.glass-config-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding: 1rem;\r\n}\n\n.glass-tabs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 1rem;\r\n    margin-bottom: 0.5rem;\r\n    padding: 0.75rem;\r\n    background: rgba(255, 255, 255, 0.25);\r\n    backdrop-filter: blur(12px);\r\n    -webkit-backdrop-filter: blur(12px);\r\n    border-radius: 20px;\r\n    border: 1px solid rgba(111, 168, 130, 0.2);\r\n    box-shadow: 0 4px 20px rgba(111, 168, 130, 0.05);\r\n}\n\n.glass-tab[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1.25rem;\r\n    background: rgba(255, 255, 255, 0.4);\r\n    border: 1px solid rgba(111, 168, 130, 0.15);\r\n    border-radius: 16px;\r\n    cursor: pointer;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    position: relative;\r\n    overflow: hidden;\r\n    outline: none;\r\n}\n.glass-tab[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n    background: rgba(255, 255, 255, 0.65);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 24px rgba(111, 168, 130, 0.12);\r\n    border-color: rgba(111, 168, 130, 0.3);\r\n}\n.glass-tab.active[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);\r\n    border-color: #6fa882;\r\n    box-shadow: 0 12px 32px rgba(111, 168, 130, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1);\r\n}\n.glass-tab[_ngcontent-%COMP%]:disabled {\r\n    opacity: 0.6;\r\n    cursor: not-allowed;\r\n    background: rgba(255, 255, 255, 0.15);\r\n    border-color: transparent;\r\n}\n\n.step-number[_ngcontent-%COMP%] {\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 50%;\r\n    background: rgba(111, 168, 130, 0.1);\r\n    color: #6fa882;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    font-size: 0.9375rem;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    border: 1px solid rgba(111, 168, 130, 0.1);\r\n    flex-shrink: 0;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    color: white;\r\n    box-shadow: 0 4px 12px rgba(111, 168, 130, 0.3);\r\n    border-color: transparent;\r\n    transform: scale(1.1);\r\n}\n.step-number.completed[_ngcontent-%COMP%] {\r\n    background: #10b981;\r\n    color: white;\r\n    border-color: transparent;\r\n}\n\n.tab-icon[_ngcontent-%COMP%] {\r\n    color: #718096;\r\n    transition: all 300ms;\r\n    width: 24px;\r\n    height: 24px;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n    transform: scale(1.1);\r\n}\n\n.tab-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.25rem;\r\n    flex: 1;\r\n    text-align: left;\r\n}\n.tab-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: #4a5568;\r\n    transition: color 300ms;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .tab-title[_ngcontent-%COMP%] {\r\n    color: #1a1f2e;\r\n}\n.tab-description[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    color: #718096;\r\n    font-weight: 500;\r\n}\n\n.tab-badge[_ngcontent-%COMP%] {\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 300ms;\r\n    background: rgba(111, 168, 130, 0.1);\r\n    color: #718096;\r\n}\n.tab-badge.valid[_ngcontent-%COMP%] {\r\n    background: rgba(16, 185, 129, 0.15);\r\n    color: #10b981;\r\n}\n\n.tab-lock[_ngcontent-%COMP%] {\r\n    color: #a0aec0;\r\n    opacity: 0.7;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 24px;\r\n    height: 24px;\r\n}\n\n.tab-indicator[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 3px;\r\n    background: linear-gradient(90deg, #6fa882, #5d8f6f);\r\n    transform: scaleX(0);\r\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    opacity: 0;\r\n}\n.glass-tab.active[_ngcontent-%COMP%]   .tab-indicator[_ngcontent-%COMP%] {\r\n    transform: scaleX(1);\r\n    opacity: 1;\r\n}\n\n.tab-content-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    perspective: 1000px;\r\n}\n.tab-panel[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    animation: slideUpFade 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n@keyframes slideUpFade {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px) scale(0.98);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0) scale(1);\r\n    }\r\n}\n\n@media (max-width: 768px) {\r\n    .glass-tabs[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 0.75rem;\r\n        padding: 0.5rem;\r\n    }\r\n\r\n    .glass-tab[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .tab-description[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.glass-tab[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid #6fa882;\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1aXRzLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUdBQW1HO0FBRG5HLCtEQUErRDtBQUcvRDtJQUNJLCtFQUErRTtJQUMvRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBRUEsa0VBQWtFO0FBQ2xFO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUEsaUVBQWlFO0FBQ2pFO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0FBQ3BEO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixnREFBZ0Q7SUFDaEQsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSwrRkFBK0Y7SUFDL0YscUJBQXFCO0lBQ3JCLHVGQUF1RjtBQUMzRjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUJBQXlCO0FBQzdCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtEQUFrRDtJQUNsRCwwQ0FBMEM7SUFDMUMsY0FBYztBQUNsQjtBQUVBO0lBQ0ksNkRBQTZEO0lBQzdELFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQSxhQUFhO0FBQ2I7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osT0FBTztJQUNQLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsY0FBYztBQUNsQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEI7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxvREFBb0Q7SUFDcEQsb0JBQW9CO0lBQ3BCLHdEQUF3RDtJQUN4RCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlEQUF5RDtBQUM3RDtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGlDQUFpQztJQUNyQztBQUNKO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUEsa0JBQWtCO0FBQ2xCOztJQUVJOzs7UUFHSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY2lyY3VpdHMtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2lyY3VpdHMgQ29uZmlndXJhdGlvbiAtIEdsYXNzbW9ycGhpc20gUmVzdG9yZWQgJiBJbXByb3ZlZCAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIE1haW4gQ29udGFpbmVyIC0gTWF0Y2hpbmcgSFRNTCBjbGFzcyAnZ2xhc3MtY29uZmlnLWNvbnRhaW5lcicgKi9cclxuLmdsYXNzLWNvbmZpZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi8qIFRhYnMgTmF2aWdhdGlvbiBDb250YWluZXIgLSBNYXRjaGluZyBIVE1MIGNsYXNzICdnbGFzcy10YWJzJyAqL1xyXG4uZ2xhc3MtdGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4wNSk7XHJcbn1cclxuXHJcbi8qIEdsYXNzIFRhYiBCdXR0b24gKi9cclxuLmdsYXNzLXRhYiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xMik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKTtcclxufVxyXG5cclxuLmdsYXNzLXRhYi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMTAwJSk7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi5nbGFzcy10YWI6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBTdGVwIE51bWJlciBDaXJjbGUgKi9cclxuLnN0ZXAtbnVtYmVyIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjEpO1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMSk7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmdsYXNzLXRhYi5hY3RpdmUgLnN0ZXAtbnVtYmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZmE4ODIgMCUsICM1ZDhmNmYgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zdGVwLW51bWJlci5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzEwYjk4MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIFRhYiBJY29uICovXHJcbi50YWItaWNvbiB7XHJcbiAgICBjb2xvcjogIzcxODA5NjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLmFjdGl2ZSAudGFiLWljb24ge1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi8qIFRhYiBDb250ZW50IFRleHQgKi9cclxuLnRhYi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50YWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXM7XHJcbn1cclxuXHJcbi5nbGFzcy10YWIuYWN0aXZlIC50YWItdGl0bGUge1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbn1cclxuXHJcbi50YWItZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFkZ2UgKi9cclxuLnRhYi1iYWRnZSB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMSk7XHJcbiAgICBjb2xvcjogIzcxODA5NjtcclxufVxyXG5cclxuLnRhYi1iYWRnZS52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxufVxyXG5cclxuLyogTG9jayBJY29uICovXHJcbi50YWItbG9jayB7XHJcbiAgICBjb2xvcjogI2EwYWVjMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLyogQWN0aXZlIEluZGljYXRvciBMaW5lICovXHJcbi50YWItaW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmZhODgyLCAjNWQ4ZjZmKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLmFjdGl2ZSAudGFiLWluZGljYXRvciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIFRhYiBDb250ZW50IFdyYXBwZXIgKi9cclxuLnRhYi1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4udGFiLXBhbmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwRmFkZSA0MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXBGYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKDAuOTgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZ2xhc3MtdGFicyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDAuNzVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5nbGFzcy10YWIge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWNjZXNzaWJpbGl0eSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG5cclxuICAgICosXHJcbiAgICAqOjpiZWZvcmUsXHJcbiAgICAqOjphZnRlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmdsYXNzLXRhYjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjNmZhODgyO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufSJdfQ== */"], data: { animation: [
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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n}\n.home-container[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #e8f5e9 100%);\r\n    padding: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\n\n.hero-section[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n.hero-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\n.hero-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: rgba(255, 255, 255, 0.7);\r\n    backdrop-filter: blur(10px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid rgba(111, 168, 130, 0.4);\r\n    \r\n    border-radius: 50%;\r\n    box-shadow: 0 8px 32px rgba(111, 168, 130, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n    color: #6fa882;\r\n    \r\n    animation: float 3s ease-in-out infinite;\r\n}\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    \r\n    letter-spacing: -0.02em;\r\n    margin: 0;\r\n    background: linear-gradient(135deg, #1a1f2e 0%, #4a5568 100%);\r\n    \r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n}\n.hero-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    color: #4a5568;\r\n    \r\n    font-weight: 400;\r\n    margin: 0;\r\n}\n\n.content-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 2rem;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\n\n.glass-card[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.7);\r\n    backdrop-filter: blur(10px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid rgba(111, 168, 130, 0.3);\r\n    \r\n    border-radius: 16px;\r\n    padding: 2rem;\r\n    box-shadow: 0 8px 32px rgba(111, 168, 130, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n.glass-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-4px);\r\n    box-shadow: 0 12px 48px rgba(111, 168, 130, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1);\r\n}\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1.5rem;\r\n}\n.card-icon[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n    \r\n    flex-shrink: 0;\r\n}\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    color: #1a1f2e;\r\n    \r\n    margin: 0;\r\n}\n.card-text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    \r\n    text-align: justify;\r\n}\n\n.image-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1.5rem;\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\n.image-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 2rem;\r\n    background: rgba(10, 25, 41, 0.05);\r\n    border-radius: 12px;\r\n    border: 1px solid rgba(111, 168, 130, 0.25);\r\n}\n.quantum-image[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: auto;\r\n    filter: drop-shadow(0 4px 12px rgba(111, 168, 130, 0.3));\r\n    transition: transform 300ms ease;\r\n}\n.quantum-image[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n}\n\n.action-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 2rem 0;\r\n}\n.start-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    padding: 1.25rem 3rem;\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    \r\n    border: none;\r\n    border-radius: 50px;\r\n    color: white;\r\n    font-size: 1.125rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: 0 8px 24px rgba(111, 168, 130, 0.4), 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n    letter-spacing: 0.5px;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\n.start-button[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);\r\n    transition: left 600ms ease;\r\n}\n.start-button[_ngcontent-%COMP%]:hover::before {\r\n    left: 100%;\r\n}\n.start-button[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(135deg, #5d8f6f 0%, #8bc4a0 100%);\r\n    \r\n    transform: translateY(-3px);\r\n    box-shadow: 0 12px 32px rgba(111, 168, 130, 0.5), 0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\n.start-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 6px 20px rgba(111, 168, 130, 0.4), inset 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\n.start-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n}\n\n.particle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 8px;\r\n    height: 8px;\r\n    background: radial-gradient(circle, rgba(111, 168, 130, 0.6) 0%, rgba(111, 168, 130, 0) 70%);\r\n    border-radius: 50%;\r\n    pointer-events: none;\r\n    animation: float-particle 20s infinite ease-in-out;\r\n}\n.particle-1[_ngcontent-%COMP%] {\r\n    top: 20%;\r\n    left: 10%;\r\n    animation-delay: 0s;\r\n    animation-duration: 15s;\r\n}\n.particle-2[_ngcontent-%COMP%] {\r\n    top: 60%;\r\n    right: 15%;\r\n    animation-delay: 5s;\r\n    animation-duration: 18s;\r\n}\n.particle-3[_ngcontent-%COMP%] {\r\n    bottom: 30%;\r\n    left: 20%;\r\n    animation-delay: 10s;\r\n    animation-duration: 22s;\r\n}\n\n@keyframes float {\r\n\r\n    0%,\r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-10px);\r\n    }\r\n}\n@keyframes float-particle {\r\n\r\n    0%,\r\n    100% {\r\n        transform: translate(0, 0);\r\n        opacity: 0.3;\r\n    }\r\n\r\n    25% {\r\n        transform: translate(50px, -30px);\r\n        opacity: 0.6;\r\n    }\r\n\r\n    50% {\r\n        transform: translate(100px, 20px);\r\n        opacity: 0.4;\r\n    }\r\n\r\n    75% {\r\n        transform: translate(50px, 50px);\r\n        opacity: 0.5;\r\n    }\r\n}\n\n@media (max-width: 1024px) {\r\n    .content-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n}\n@media (max-width: 768px) {\r\n    .home-container[_ngcontent-%COMP%] {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .hero-section[_ngcontent-%COMP%] {\r\n        padding: 2rem 0;\r\n    }\r\n\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .hero-subtitle[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .hero-icon[_ngcontent-%COMP%] {\r\n        width: 64px;\r\n        height: 64px;\r\n    }\r\n\r\n    .hero-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n        width: 48px;\r\n        height: 48px;\r\n    }\r\n\r\n    .glass-card[_ngcontent-%COMP%] {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .card-title[_ngcontent-%COMP%] {\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .card-text[_ngcontent-%COMP%] {\r\n        font-size: 0.9375rem;\r\n    }\r\n\r\n    .start-button[_ngcontent-%COMP%] {\r\n        padding: 1rem 2rem;\r\n        font-size: 1rem;\r\n    }\r\n}\n@media (max-width: 480px) {\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    .start-button[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.start-button[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid #6fa882;\r\n    \r\n    outline-offset: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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RUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjtBQUNKO0FBRUEsa0JBQWtCO0FBQ2xCOztJQUVJOzs7UUFHSSxxQ0FBcUM7UUFDckMsc0NBQXNDO0lBQzFDO0FBQ0o7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhvbWUgQ29tcG9uZW50IC0gR2xhc3Ntb3JwaGlzbSAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhvbWUtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2U4ZjVlOSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIEhlcm8gU2VjdGlvbiAqL1xyXG4uaGVyby1zZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5oZXJvLWljb24ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuNCk7XHJcbiAgICAvKiAjNmZhODgyIHdpdGggb3BhY2l0eSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMiksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbiAgICAvKiAjOWRjMGE5IC0+ICM2ZmE4ODIgKi9cclxuICAgIGFuaW1hdGlvbjogZmxvYXQgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIC8qICMxZjI5MzcgLT4gIzFhMWYyZSAqL1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExZjJlIDAlLCAjNGE1NTY4IDEwMCUpO1xyXG4gICAgLyogIzRiNTU2MyAtPiAjNGE1NTY4ICovXHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLmhlcm8tc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICAvKiAjNmI3MjgwIC0+ICM0YTU1NjggKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgR3JpZCAqL1xyXG4uY29udGVudC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEdsYXNzIENhcmRzICovXHJcbi5nbGFzcy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG4gICAgLyogIzZmYTg4MiB3aXRoIG9wYWNpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZ2xhc3MtY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggNDhweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMiksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIGNvbG9yOiAjNmZhODgyO1xyXG4gICAgLyogIzlkYzBhOSAtPiAjNmZhODgyICovXHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICAvKiAjMWYyOTM3IC0+ICMxYTFmMmUgKi9cclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICAvKiAjNGI1NTYzIC0+ICM0YTU1NjggKi9cclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi8qIEltYWdlIENhcmQgKi9cclxuLmltYWdlLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAsIDI1LCA0MSwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjI1KTtcclxufVxyXG5cclxuLnF1YW50dW0taW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCAxMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLnF1YW50dW0taW1hZ2U6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyogQWN0aW9uIFNlY3Rpb24gKi9cclxuLmFjdGlvbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gM3JlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZmE4ODIgMCUsICM1ZDhmNmYgMTAwJSk7XHJcbiAgICAvKiAjOWRjMGE5IC0+ICM2ZmE4ODIsICM4YWIwOTUgLT4gIzVkOGY2ZiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC40KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCA2MDBtcyBlYXNlO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNWQ4ZjZmIDAlLCAjOGJjNGEwIDEwMCUpO1xyXG4gICAgLyogIzhhYjA5NSAtPiAjNWQ4ZjZmLCAjN2RhODhhIC0+ICM4YmM0YTAgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC41KSwgMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuNCksIGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24gc3ZnIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiBGbG9hdGluZyBQYXJ0aWNsZXMgKi9cclxuLnBhcnRpY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTExLCAxNjgsIDEzMCwgMC42KSAwJSwgcmdiYSgxMTEsIDE2OCwgMTMwLCAwKSA3MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0LXBhcnRpY2xlIDIwcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBhcnRpY2xlLTEge1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbn1cclxuXHJcbi5wYXJ0aWNsZS0yIHtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogNXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcclxufVxyXG5cclxuLnBhcnRpY2xlLTMge1xyXG4gICAgYm90dG9tOiAzMCU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjJzO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmxvYXQge1xyXG5cclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdC1wYXJ0aWNsZSB7XHJcblxyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB9XHJcblxyXG4gICAgMjUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAtMzBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDIwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDUwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29udGVudC1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8tc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVyby1pY29uIHtcclxuICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8taWNvbiBzdmcge1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2xhc3MtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFydC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uOmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM2ZmE4ODI7XHJcbiAgICAvKiAjOWRjMGE5IC0+ICM2ZmE4ODIgKi9cclxuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XHJcbn0iXX0= */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\r\n.mutant-cycle-container[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.6);\r\n  backdrop-filter: blur(16px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n  border: 1px solid rgba(157, 192, 169, 0.3);\r\n  border-radius: 16px;\r\n  padding: 2rem;\r\n  box-shadow:\r\n    0 4px 24px rgba(157, 192, 169, 0.08),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 2.5rem;\r\n  padding-bottom: 1.5rem;\r\n  border-bottom: 2px solid rgba(157, 192, 169, 0.3);\r\n}\r\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  color: #1a1f2e;\r\n  letter-spacing: -0.02em;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n}\r\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #6fa882;\r\n  filter: drop-shadow(0 2px 4px rgba(111, 168, 130, 0.2));\r\n}\r\n.execute-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background: linear-gradient(135deg, #9dc0a9 0%, #8ab095 100%);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 12px;\r\n  padding: 0.75rem 1.25rem;\r\n  font-size: 0.875rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  letter-spacing: 0.05em;\r\n  box-shadow:\r\n    0 4px 12px rgba(157, 192, 169, 0.3),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n.execute-btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow:\r\n    0 6px 16px rgba(157, 192, 169, 0.4),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\r\n.execute-btn[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n}\r\n.execute-text[_ngcontent-%COMP%] {\r\n  margin-right: 0.75rem;\r\n}\r\n.execute-icon[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0 0 1.5rem 0;\r\n  font-size: 1.125rem;\r\n  font-weight: 600;\r\n  color: #1a1f2e;\r\n  letter-spacing: 0.01em;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #6fa882;\r\n}\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  align-items: flex-end;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  gap: 0.5rem;\r\n}\r\n.machine-group[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n}\r\n.algorithm-group[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #4a5568;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n}\r\n.form-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.875rem 1rem;\r\n  border: 2px solid transparent;\r\n  border-radius: 10px;\r\n  font-size: 0.9375rem;\r\n  color: #1a1f2e;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  transition: all 200ms ease;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n.form-input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  box-shadow: inset 0 0 0 2px rgba(157, 192, 169, 0.5);\r\n}\r\n\r\n.killing-matrix-container[_ngcontent-%COMP%] {\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n  background: rgba(255, 255, 255, 0.4);\r\n  border: 1px solid rgba(157, 192, 169, 0.2);\r\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-size: 0.875rem;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background: rgba(157, 192, 169, 0.15);\r\n  border-bottom: 1px solid rgba(157, 192, 169, 0.2);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 1rem 0.75rem;\r\n  text-align: left;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n  color: #1a1f2e;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  transition: all 200ms ease;\r\n  border-bottom: 1px solid rgba(157, 192, 169, 0.1);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background: rgba(157, 192, 169, 0.1);\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.875rem 0.75rem;\r\n  vertical-align: middle;\r\n  color: #4a5568;\r\n}\r\n\r\n.killing-matrix-table[_ngcontent-%COMP%]   .index-column[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  color: #1a1f2e;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   .operator-column[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  font-weight: 500;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   .position-column[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  text-align: center;\r\n  font-family: 'JetBrains Mono', monospace;\r\n  font-size: 0.8125rem;\r\n}\r\n.killing-matrix-table[_ngcontent-%COMP%]   .result-column[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  text-align: center;\r\n}\r\n\r\n.killing-matrix-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%] {\r\n  color: #9ca3af;\r\n  font-style: italic;\r\n}\r\n\r\n.result-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.25rem 0.75rem;\r\n  border-radius: 20px;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n  min-width: 80px;\r\n}\r\n.result-badge.killed[_ngcontent-%COMP%] {\r\n  background: rgba(239, 68, 68, 0.1);\r\n  color: #ef4444;\r\n  border: 1px solid rgba(239, 68, 68, 0.2);\r\n}\r\n.result-badge.alive[_ngcontent-%COMP%] {\r\n  background: rgba(16, 185, 129, 0.1);\r\n  color: #10b981;\r\n  border: 1px solid rgba(16, 185, 129, 0.2);\r\n}\r\n.result-badge.error[_ngcontent-%COMP%] {\r\n  background: rgba(245, 158, 11, 0.1);\r\n  color: #f59e0b;\r\n  border: 1px solid rgba(245, 158, 11, 0.2);\r\n}\r\n.result-badge.zombie[_ngcontent-%COMP%] {\r\n  background: rgba(139, 92, 246, 0.1);\r\n  color: #8b5cf6;\r\n  border: 1px solid rgba(139, 92, 246, 0.2);\r\n}\r\n.result-badge.pending[_ngcontent-%COMP%] {\r\n  background: rgba(107, 114, 128, 0.1);\r\n  color: #6b7280;\r\n  border: 1px solid rgba(107, 114, 128, 0.2);\r\n}\r\n\r\n.killing-matrix-empty[_ngcontent-%COMP%] {\r\n  border: 2px dashed rgba(157, 192, 169, 0.3);\r\n  border-radius: 12px;\r\n  padding: 3rem;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  min-height: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  transition: all 300ms ease;\r\n}\r\n.killing-matrix-empty[_ngcontent-%COMP%]:hover {\r\n  border-color: rgba(157, 192, 169, 0.5);\r\n  background: rgba(255, 255, 255, 0.3);\r\n}\r\n.killing-matrix-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #9dc0a9;\r\n  opacity: 0.5;\r\n}\r\n.empty-text[_ngcontent-%COMP%] {\r\n  color: #4a5568;\r\n  font-style: italic;\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n.no-selection[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 400px;\r\n  background: rgba(255, 255, 255, 0.4);\r\n  -webkit-backdrop-filter: blur(8px);\r\n          backdrop-filter: blur(8px);\r\n  border-radius: 16px;\r\n  border: 2px dashed rgba(157, 192, 169, 0.3);\r\n  gap: 1.5rem;\r\n}\r\n.no-selection[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #9dc0a9;\r\n  opacity: 0.4;\r\n}\r\n.no-selection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #4a5568;\r\n  font-size: 1.125rem;\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .mutant-cycle-container[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .form-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    text-align: center;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .execute-btn[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n  }\r\n\r\n  \r\n  .killing-matrix-container[_ngcontent-%COMP%] {\r\n    overflow-x: auto;\r\n  }\r\n\r\n  .killing-matrix-table[_ngcontent-%COMP%] {\r\n    min-width: 600px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudC1jeWNsZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1HQUFtRztBQUNuRyxvR0FBb0c7QUFGcEcsd0RBQXdEO0FBSXhEO0VBQ0UsY0FBYztFQUNkLCtFQUErRTtFQUMvRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMsa0RBQWtEO0VBQ2xELDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiOzswQ0FFd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1REFBdUQ7QUFDekQ7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaURBQWlEO0FBQ25EO0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0VBQ2QsdURBQXVEO0FBQ3pEO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELHNCQUFzQjtFQUN0Qjs7MENBRXdDO0FBQzFDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0I7OzBDQUV3QztBQUMxQztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixT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QWM7RUFDZCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGO0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoibXV0YW50LWN5Y2xlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE11dGFudCBDeWNsZSBJbmZvIENvbXBvbmVudCAtIEdsYXNzbW9ycGhpc20gUXVhbnR1bSAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpldEJyYWlucytNb25vOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLm11dGFudC1jeWNsZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA0cHggMjRweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMDgpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpO1xyXG59XHJcblxyXG4uaGVhZGVyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxYTFmMmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLmhlYWRlciBoMiBzdmcge1xyXG4gIGNvbG9yOiAjNmZhODgyO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKSk7XHJcbn1cclxuXHJcbi5leGVjdXRlLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5ZGMwYTkgMCUsICM4YWIwOTUgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgNHB4IDEycHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5leGVjdXRlLWJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDZweCAxNnB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC40KSxcclxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4uZXhlY3V0ZS1idG46YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5leGVjdXRlLXRleHQge1xyXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxufVxyXG5cclxuLmV4ZWN1dGUtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24gaDMge1xyXG4gIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzFhMWYyZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24gaDMgc3ZnIHtcclxuICBjb2xvcjogIzZmYTg4MjtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLm1hY2hpbmUtZ3JvdXAge1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5hbGdvcml0aG0tZ3JvdXAge1xyXG4gIGZsZXg6IDM7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNGE1NTY4O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgY29sb3I6ICMxYTFmMmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjUpO1xyXG59XHJcblxyXG4vKiBLaWxsaW5nIE1hdHJpeCBUYWJsZSBTdHlsZXMgKi9cclxuLmtpbGxpbmctbWF0cml4LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIHRoZWFkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1NywgMTkyLCAxNjksIDAuMTUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMik7XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGNvbG9yOiAjMWExZjJlO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgdGJvZHkgdHIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMSk7XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4xKTtcclxufVxyXG5cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAwLjc1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICM0YTU1Njg7XHJcbn1cclxuXHJcbi8qIENvbHVtbiBzcGVjaWZpYyBzdHlsZXMgKi9cclxuLmtpbGxpbmctbWF0cml4LXRhYmxlIC5pbmRleC1jb2x1bW4ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMWExZjJlO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtdGFibGUgLm9wZXJhdG9yLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSAucG9zaXRpb24tY29sdW1uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSAucmVzdWx0LWNvbHVtbiB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogRW1wdHkgY2VsbCBzdHlsaW5nICovXHJcbi5raWxsaW5nLW1hdHJpeC10YWJsZSAuZW1wdHktY2VsbCB7XHJcbiAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vKiBSZXN1bHQgc3RhdHVzIGJhZGdlcyAqL1xyXG4ucmVzdWx0LWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHQtYmFkZ2Uua2lsbGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM5LCA2OCwgNjgsIDAuMik7XHJcbn1cclxuXHJcbi5yZXN1bHQtYmFkZ2UuYWxpdmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xyXG4gIGNvbG9yOiAjMTBiOTgxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjIpO1xyXG59XHJcblxyXG4ucmVzdWx0LWJhZGdlLmVycm9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4xKTtcclxuICBjb2xvcjogI2Y1OWUwYjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4yKTtcclxufVxyXG5cclxuLnJlc3VsdC1iYWRnZS56b21iaWUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjEpO1xyXG4gIGNvbG9yOiAjOGI1Y2Y2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjIpO1xyXG59XHJcblxyXG4ucmVzdWx0LWJhZGdlLnBlbmRpbmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA3LCAxMTQsIDEyOCwgMC4xKTtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwNywgMTE0LCAxMjgsIDAuMik7XHJcbn1cclxuXHJcbi8qIEVtcHR5IHN0YXRlICovXHJcbi5raWxsaW5nLW1hdHJpeC1lbXB0eSB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5raWxsaW5nLW1hdHJpeC1lbXB0eTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1NywgMTkyLCAxNjksIDAuNSk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4ua2lsbGluZy1tYXRyaXgtZW1wdHkgc3ZnIHtcclxuICBjb2xvcjogIzlkYzBhOTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5lbXB0eS10ZXh0IHtcclxuICBjb2xvcjogIzRhNTU2ODtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4zKTtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLm5vLXNlbGVjdGlvbiBzdmcge1xyXG4gIGNvbG9yOiAjOWRjMGE5O1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLm5vLXNlbGVjdGlvbiBwIHtcclxuICBjb2xvcjogIzRhNTU2ODtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubXV0YW50LWN5Y2xlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZm9ybS1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciBoMiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmV4ZWN1dGUtYnRuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSB0YWJsZSBzdHlsZXMgKi9cclxuICAua2lsbGluZy1tYXRyaXgtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAua2lsbGluZy1tYXRyaXgtdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICB9XHJcbn0iXX0= */"] });


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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #f0f9f4 0%, #e8f5ed 100%);\r\n    color: #1a1f2e;\r\n    line-height: 1.6;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.code-section[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    border: 1px solid rgba(157, 192, 169, 0.3);\r\n    border-radius: 16px;\r\n    overflow: hidden;\r\n    box-shadow:\r\n        0 4px 24px rgba(157, 192, 169, 0.08),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n.code-section[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.75);\r\n    box-shadow:\r\n        0 8px 32px rgba(157, 192, 169, 0.12),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n    border-color: rgba(157, 192, 169, 0.4);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    color: white;\r\n    padding: 1rem 1.5rem;\r\n    margin: 0;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid rgba(255, 255, 255, 0.2);\r\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n.section-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.code-textarea[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    border: none;\r\n    background: rgba(255, 255, 255, 0.3);\r\n    resize: none;\r\n    font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;\r\n    font-size: 0.875rem;\r\n    line-height: 1.7;\r\n    color: #1a1f2e;\r\n    min-height: 500px;\r\n    overflow-y: auto;\r\n    transition: all 200ms ease;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background: rgba(255, 255, 255, 0.4);\r\n    box-shadow: inset 0 0 0 2px rgba(157, 192, 169, 0.3);\r\n}\r\n\r\n.code-display[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 1.5rem;\r\n    border: none;\r\n    background: rgba(255, 255, 255, 0.3);\r\n    font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;\r\n    font-size: 0.875rem;\r\n    line-height: 1.7;\r\n    color: #1a1f2e;\r\n    min-height: 500px;\r\n    overflow-y: auto;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: rgba(157, 192, 169, 0.05);\r\n    border-radius: 4px;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgba(157, 192, 169, 0.3);\r\n    border-radius: 4px;\r\n}\r\n.code-textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .code-display[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: rgba(157, 192, 169, 0.5);\r\n}\r\n\r\n.code-display[_ngcontent-%COMP%]     .highlight {\r\n    background: rgba(16, 185, 129, 0.15);\r\n    border-radius: 3px;\r\n    padding: 0 4px;\r\n    font-weight: 600;\r\n    color: #10b981;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .keyword {\r\n    color: #6fa882;\r\n    font-weight: 600;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .string {\r\n    color: #84cc16;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .comment {\r\n    color: #9ca3af;\r\n    font-style: italic;\r\n}\r\n.code-display[_ngcontent-%COMP%]     .number {\r\n    color: #f59e0b;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        max-width: 900px;\r\n        padding: 0;\r\n    }\r\n\r\n    .code-section[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.875rem 1.25rem;\r\n        font-size: 0.8125rem;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        padding: 1.25rem;\r\n        font-size: 0.8125rem;\r\n        min-height: 350px;\r\n    }\r\n}\r\n@media (max-width: 480px) {\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.75rem 1rem;\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n        font-size: 0.75rem;\r\n        min-height: 300px;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\r\n\r\n@media print {\r\n    .container[_ngcontent-%COMP%] {\r\n        box-shadow: none;\r\n        border: 1px solid #ccc;\r\n        padding: 1rem;\r\n        background: white;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        background: #f0f0f0 !important;\r\n        color: #333 !important;\r\n        border-bottom: 2px solid #333;\r\n    }\r\n\r\n    .code-textarea[_ngcontent-%COMP%], .code-display[_ngcontent-%COMP%] {\r\n        background: white !important;\r\n        border: 1px solid #ccc;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtR0FBbUc7QUFDbkcsb0dBQW9HO0FBRnBHLG1EQUFtRDtBQUluRDtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLCtFQUErRTtJQUMvRSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVBLHFDQUFxQztBQUNyQztJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsa0RBQWtEO0lBQ2xELDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCOzs4Q0FFMEM7SUFDMUMsa0RBQWtEO0lBQ2xELHVEQUF1RDtBQUMzRDtBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDOzs4Q0FFMEM7SUFDMUMsc0NBQXNDO0FBQzFDO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksNkRBQTZEO0lBQzdELFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixpREFBaUQ7SUFDakQsa0RBQWtEO0lBQ2xELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaURBQWlEO0FBQ3JEO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWiwyRUFBMkU7SUFDM0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsb0RBQW9EO0FBQ3hEO0FBRUEsc0RBQXNEO0FBQ3REO0lBQ0ksT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDJFQUEyRTtJQUMzRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7QUFFQSxzQkFBc0I7QUFDdEI7O0lBRUksVUFBVTtBQUNkO0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxvQ0FBb0M7QUFDeEM7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7O1FBRUksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLG9CQUFvQjtJQUN4Qjs7SUFFQTs7UUFFSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFSTs7O1FBR0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQztBQUNKO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQzs7SUFFQTs7UUFFSSw0QkFBNEI7UUFDNUIsc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoibXV0YW50cy1jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNdXRhbnRzIENvZGUgQ29tcG9uZW50IC0gR2xhc3Ntb3JwaGlzbSBRdWFudHVtICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwZjlmNCAwJSwgI2U4ZjVlZCAxMDAlKTtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4vKiBDb2RlIFNlY3Rpb24gU3R5bGVzIC0gR2xhc3MgQ2FyZCAqL1xyXG4uY29kZS1zZWN0aW9uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgNHB4IDI0cHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjA4KSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5VcCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxufVxyXG5cclxuLmNvZGUtc2VjdGlvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDhweCAzMnB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4xMiksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC40KTtcclxufVxyXG5cclxuLyogU2VjdGlvbiBUaXRsZSBTdHlsZXMgKi9cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZmYTg4MiAwJSwgIzVkOGY2ZiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHN2ZyB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbn1cclxuXHJcbi8qIENvZGUgVGV4dGFyZWEgU3R5bGVzICovXHJcbi5jb2RlLXRleHRhcmVhIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgJ0ZpcmEgQ29kZScsICdNb25hY28nLCAnQ29uc29sYXMnLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5jb2RlLXRleHRhcmVhOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpO1xyXG59XHJcblxyXG4vKiBDb2RlIERpc3BsYXkgU3R5bGVzIChmb3IgaGlnaGxpZ2h0ZWQgZGlmZmVyZW5jZXMpICovXHJcbi5jb2RlLWRpc3BsYXkge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCAnRmlyYSBDb2RlJywgJ01vbmFjbycsICdDb25zb2xhcycsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBTdHlsaW5nICovXHJcbi5jb2RlLXRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmNvZGUtZGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuLmNvZGUtdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4uY29kZS1kaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NywgMTkyLCAxNjksIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY29kZS10ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5jb2RlLWRpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNvZGUtdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxyXG4uY29kZS1kaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1NywgMTkyLCAxNjksIDAuNSk7XHJcbn1cclxuXHJcbi8qIFN5bnRheCBIaWdobGlnaHRpbmcgU3VwcG9ydCAqL1xyXG4uY29kZS1kaXNwbGF5IDo6bmctZGVlcCAuaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG59XHJcblxyXG4uY29kZS1kaXNwbGF5IDo6bmctZGVlcCAua2V5d29yZCB7XHJcbiAgICBjb2xvcjogIzZmYTg4MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb2RlLWRpc3BsYXkgOjpuZy1kZWVwIC5zdHJpbmcge1xyXG4gICAgY29sb3I6ICM4NGNjMTY7XHJcbn1cclxuXHJcbi5jb2RlLWRpc3BsYXkgOjpuZy1kZWVwIC5jb21tZW50IHtcclxuICAgIGNvbG9yOiAjOWNhM2FmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY29kZS1kaXNwbGF5IDo6bmctZGVlcCAubnVtYmVyIHtcclxuICAgIGNvbG9yOiAjZjU5ZTBiO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29kZS1zZWN0aW9uIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29kZS10ZXh0YXJlYSxcclxuICAgIC5jb2RlLWRpc3BsYXkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvZGUtdGV4dGFyZWEsXHJcbiAgICAuY29kZS1kaXNwbGF5IHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2RlLXRleHRhcmVhLFxyXG4gICAgLmNvZGUtZGlzcGxheSB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEFjY2Vzc2liaWxpdHkgKi9cclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuXHJcbiAgICAqLFxyXG4gICAgKjo6YmVmb3JlLFxyXG4gICAgKjo6YWZ0ZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFByaW50IHN0eWxlcyAqL1xyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjAgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2RlLXRleHRhcmVhLFxyXG4gICAgLmNvZGUtZGlzcGxheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG59Il19 */"] });


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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n.container[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\n\nh1[_ngcontent-%COMP%] {\r\n  color: #1a1f2e;\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n  letter-spacing: -0.02em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.75rem;\r\n}\nh1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #6fa882;\r\n  flex-shrink: 0;\r\n  filter: drop-shadow(0 2px 4px rgba(111, 168, 130, 0.2));\r\n}\nh2[_ngcontent-%COMP%] {\r\n  color: #1a1f2e;\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  margin: 2rem 0 1.5rem 0;\r\n  letter-spacing: -0.01em;\r\n}\n\n.section[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.6);\r\n  backdrop-filter: blur(16px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n  border: 1px solid rgba(157, 192, 169, 0.3);\r\n  border-radius: 16px;\r\n  padding: 2rem;\r\n  margin-bottom: 1.5rem;\r\n  box-shadow:\r\n    0 4px 24px rgba(157, 192, 169, 0.08),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n.section[_ngcontent-%COMP%]:hover {\r\n  background: rgba(255, 255, 255, 0.75);\r\n  box-shadow:\r\n    0 8px 32px rgba(157, 192, 169, 0.12),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n  border-color: rgba(157, 192, 169, 0.4);\r\n}\n\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  align-items: flex-end;\r\n}\n.row[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}\n\n.field[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 2;\r\n  min-width: 200px;\r\n  gap: 0.5rem;\r\n}\n.field-small[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  min-width: 120px;\r\n  gap: 0.5rem;\r\n}\n\n.two-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1.5rem;\r\n  margin-top: 1rem;\r\n}\n.column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  gap: 0.5rem;\r\n}\n\nlabel[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #4a5568;\r\n  font-size: 0.75rem;\r\n  letter-spacing: 0.05em;\r\n  text-transform: uppercase;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\nlabel[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  color: #6fa882;\r\n  flex-shrink: 0;\r\n}\n\n.input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.875rem 1rem;\r\n  border: 2px solid transparent;\r\n  border-radius: 10px;\r\n  font-size: 0.9375rem;\r\n  font-weight: 500;\r\n  color: #1a1f2e;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  transition: all 200ms ease;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n  font-family: 'Inter', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\n\n.input[_ngcontent-%COMP%]:disabled, .input[readonly][_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.3);\r\n  color: #4a5568;\r\n  cursor: default;\r\n  border-color: rgba(157, 192, 169, 0.15);\r\n}\n.input[_ngcontent-%COMP%]:disabled:focus, .input[readonly][_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: rgba(157, 192, 169, 0.15);\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n}\n\n.input[disabled][_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  appearance: none;\r\n  background-image: none;\r\n  padding-right: 0.875rem;\r\n}\nselect.input[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234a5568' d='M6 9L1 4h10z'/%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 1rem center;\r\n  padding-right: 2.5rem;\r\n}\nselect.input[_ngcontent-%COMP%]:disabled {\r\n  background-image: none;\r\n  padding-right: 0.875rem;\r\n}\n\n.input[type=\"number\"][readonly][_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: 600;\r\n  color: #6fa882;\r\n}\n\n.debug-info[_ngcontent-%COMP%] {\r\n  background: rgba(239, 68, 68, 0.05);\r\n  border: 1px solid rgba(239, 68, 68, 0.2);\r\n  border-radius: 8px;\r\n  padding: 1rem;\r\n  margin-top: 2rem;\r\n  font-size: 0.875rem;\r\n  color: #4a5568;\r\n}\n.debug-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #ef4444;\r\n  font-size: 1rem;\r\n  margin: 0 0 0.5rem 0;\r\n}\n.debug-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0.25rem 0;\r\n  font-family: 'Monaco', 'Consolas', monospace;\r\n  font-size: 0.8125rem;\r\n}\n\n@media (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n\r\n  .section[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n    border-radius: 12px;\r\n  }\r\n\r\n  .row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .two-column[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .field[_ngcontent-%COMP%], .field-small[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n  }\r\n}\n@media (max-width: 480px) {\r\n  .section[_ngcontent-%COMP%] {\r\n    padding: 1.25rem;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .input[_ngcontent-%COMP%] {\r\n    padding: 0.75rem 0.875rem;\r\n    font-size: 0.875rem;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 0.6875rem;\r\n  }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    animation-duration: 0.01ms !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\n.input[_ngcontent-%COMP%]:focus-visible {\r\n  outline: 2px solid #6fa882;\r\n  outline-offset: 2px;\r\n}\n\n.section[_ngcontent-%COMP%] {\r\n  animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtZ2VuZXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtR0FBbUc7QUFEbkcsc0RBQXNEO0FBR3REO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsK0VBQStFO0VBQy9FLHVCQUF1QjtBQUN6QjtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCx1REFBdUQ7QUFDekQ7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLGtEQUFrRDtFQUNsRCwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckI7OzBDQUV3QztFQUN4QyxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLHFDQUFxQztFQUNyQzs7MENBRXdDO0VBQ3hDLHNDQUFzQztBQUN4QztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztBQUNiO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLCtDQUErQztFQUMvQyxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCO0FBRUEsa0NBQWtDO0FBQ2xDOztFQUVFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVDQUF1QztBQUN6QztBQUVBOztFQUVFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsK0NBQStDO0FBQ2pEO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSwwTEFBMEw7RUFDMUwsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxtQ0FBbUM7RUFDbkMsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxvQkFBb0I7QUFDdEI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjtBQUVBLGtCQUFrQjtBQUNsQjs7RUFFRTs7O0lBR0UscUNBQXFDO0lBQ3JDLHNDQUFzQztFQUN4QztBQUNGO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsdURBQXVEO0FBQ3pEO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0YiLCJmaWxlIjoibXV0YW50cy1nZW5lcmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNdXRhbnRzIEdlbmVyYWwgQ29tcG9uZW50IC0gR2xhc3Ntb3JwaGlzbSBRdWFudHVtICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLyogSGVhZGVyIFN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgY29sb3I6ICMxYTFmMmU7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuaDEgc3ZnIHtcclxuICBjb2xvcjogIzZmYTg4MjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMikpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICMxYTFmMmU7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAycmVtIDAgMS41cmVtIDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi8qIFNlY3Rpb24gU3R5bGVzIC0gR2xhc3MgQ2FyZCAqL1xyXG4uc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCA0cHggMjRweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMDgpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDhweCAzMnB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4xMiksXHJcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC40KTtcclxufVxyXG5cclxuLyogUm93IExheW91dCAtIEFkZCBmbGV4LXdyYXAgdG8gcHJldmVudCBvdmVybGFwICovXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5yb3c6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogRmllbGQgU3R5bGVzICovXHJcbi5maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDI7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmZpZWxkLXNtYWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4vKiBUd28gQ29sdW1uIExheW91dCAqL1xyXG4udHdvLWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLyogTGFiZWwgU3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNGE1NTY4O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG5sYWJlbCBzdmcge1xyXG4gIGNvbG9yOiAjNmZhODgyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiBGb3JtIENvbnRyb2xzIC0gR2xhc3MgSW5wdXQgKi9cclxuLmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzFhMWYyZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLyogUmVhZC1vbmx5IGFuZCBkaXNhYmxlZCBzdGF0ZXMgKi9cclxuLmlucHV0OmRpc2FibGVkLFxyXG4uaW5wdXRbcmVhZG9ubHldIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgY29sb3I6ICM0YTU1Njg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjE1KTtcclxufVxyXG5cclxuLmlucHV0OmRpc2FibGVkOmZvY3VzLFxyXG4uaW5wdXRbcmVhZG9ubHldOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjE1KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxufVxyXG5cclxuLyogU2VsZWN0IHNwZWNpZmljIHN0eWxlcyAqL1xyXG4uaW5wdXRbZGlzYWJsZWRdIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuODc1cmVtO1xyXG59XHJcblxyXG5zZWxlY3QuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzRhNTU2OCcgZD0nTTYgOUwxIDRoMTB6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMXJlbSBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xyXG59XHJcblxyXG5zZWxlY3QuaW5wdXQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgcGFkZGluZy1yaWdodDogMC44NzVyZW07XHJcbn1cclxuXHJcbi8qIElucHV0IG51bWJlciBzcGVjaWZpYyBzdHlsZXMgKi9cclxuLmlucHV0W3R5cGU9XCJudW1iZXJcIl1bcmVhZG9ubHldIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzZmYTg4MjtcclxufVxyXG5cclxuLyogRGVidWcgSW5mbyAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbi5kZWJ1Zy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzRhNTU2ODtcclxufVxyXG5cclxuLmRlYnVnLWluZm8gaDMge1xyXG4gIGNvbG9yOiAjZWY0NDQ0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxufVxyXG5cclxuLmRlYnVnLWluZm8gcCB7XHJcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcbiAgZm9udC1mYW1pbHk6ICdNb25hY28nLCAnQ29uc29sYXMnLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG5cclxuICAudHdvLWNvbHVtbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLFxyXG4gIC5maWVsZC1zbWFsbCB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMC44NzVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjY4NzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgIzZmYTg4MjtcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gZm9yIHNtb290aCBlbnRyYW5jZSAqL1xyXG4uc2VjdGlvbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCA0MDBtcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn0iXX0= */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _mutants_code_mutants_code_component__WEBPACK_IMPORTED_MODULE_1__.MutantsCodeComponent, _mutants_visual_mutants_visual_component__WEBPACK_IMPORTED_MODULE_2__.MutantsVisualComponent, _mutants_general_mutants_general_component__WEBPACK_IMPORTED_MODULE_3__.MutantsGeneralComponent], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n[_nghost-%COMP%] {\r\n    display: block;\r\n    padding: 2rem;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\n\n.mutant-title[_ngcontent-%COMP%] {\r\n    color: #1a1f2e;\r\n    font-size: 2rem;\r\n    margin: 0 0 2rem 0;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    padding-bottom: 1rem;\r\n    border-bottom: 2px solid rgba(157, 192, 169, 0.3);\r\n    letter-spacing: -0.02em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.75rem;\r\n}\n.mutant-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 2px 4px rgba(111, 168, 130, 0.2));\r\n}\n\n.tabs[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    margin-bottom: 2rem;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    backdrop-filter: blur(8px);\r\n    -webkit-backdrop-filter: blur(8px);\r\n    border: 1px solid rgba(157, 192, 169, 0.25);\r\n    border-radius: 12px;\r\n    padding: 0.5rem;\r\n    box-shadow: 0 2px 12px rgba(157, 192, 169, 0.08);\r\n}\n\n.tab[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 0.875rem 1.5rem;\r\n    background: transparent;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-weight: 600;\r\n    font-size: 0.875rem;\r\n    color: #4a5568;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.5rem;\r\n}\n.tab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    transition: transform 200ms;\r\n}\n.tab[_ngcontent-%COMP%]:hover:not([disabled]):not(.active) {\r\n    background: rgba(157, 192, 169, 0.1);\r\n    color: #1a1f2e;\r\n}\n.tab[_ngcontent-%COMP%]:hover:not([disabled]):not(.active)   svg[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\n.tab.active[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #9dc0a9 0%, #8ab095 100%);\r\n    color: white;\r\n    box-shadow:\r\n        0 4px 12px rgba(157, 192, 169, 0.3),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\n.tab.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\r\n}\n.tab[disabled][_ngcontent-%COMP%] {\r\n    opacity: 0.4;\r\n    cursor: not-allowed;\r\n}\n\n.info-content[_ngcontent-%COMP%], .code-content[_ngcontent-%COMP%], .visualization-content[_ngcontent-%COMP%] {\r\n    animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\n\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\n\n@media (max-width: 768px) {\r\n    [_nghost-%COMP%] {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .mutant-title[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .tabs[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 0.5rem;\r\n    }\r\n\r\n    .tab[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n\r\n    .tab.active[_ngcontent-%COMP%] {\r\n        background: linear-gradient(135deg, #9dc0a9 0%, #8ab095 100%);\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.tab[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid #6fa882;\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtR0FBbUc7QUFEbkcsbURBQW1EO0FBR25EO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwrRUFBK0U7SUFDL0UsdUJBQXVCO0FBQzNCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaURBQWlEO0lBQ2pELHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHVEQUF1RDtBQUMzRDtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdEQUFnRDtBQUNwRDtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLE9BQU87SUFDUCx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxZQUFZO0lBQ1o7OzhDQUUwQztBQUM5QztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUEsMkJBQTJCO0FBQzNCOzs7SUFHSSx1REFBdUQ7QUFDM0Q7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksNkRBQTZEO0lBQ2pFO0FBQ0o7QUFFQSxrQkFBa0I7QUFDbEI7O0lBRUk7OztRQUdJLHFDQUFxQztRQUNyQyxzQ0FBc0M7SUFDMUM7QUFDSjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJtdXRhbnRzLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE11dGFudHMgSW5mbyBDb21wb25lbnQgLSBHbGFzc21vcnBoaXNtIFF1YW50dW0gKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcblxyXG4vKiBNdXRhbnQgVGl0bGUgKi9cclxuLm11dGFudC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5tdXRhbnQtdGl0bGUgc3ZnIHtcclxuICAgIGNvbG9yOiAjNmZhODgyO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMikpO1xyXG59XHJcblxyXG4vKiBUYWJzIENvbnRhaW5lciAqL1xyXG4udGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4wOCk7XHJcbn1cclxuXHJcbi8qIFRhYiBCdXR0b25zICovXHJcbi50YWIge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi50YWIgc3ZnIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xyXG59XHJcblxyXG4udGFiOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLmFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjEpO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbn1cclxuXHJcbi50YWI6aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCguYWN0aXZlKSBzdmcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4udGFiLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWRjMGE5IDAlLCAjOGFiMDk1IDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDRweCAxMnB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4zKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnRhYi5hY3RpdmUgc3ZnIHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbn1cclxuXHJcbi50YWJbZGlzYWJsZWRdIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi8qIFRhYiBDb250ZW50IENvbnRhaW5lcnMgKi9cclxuLmluZm8tY29udGVudCxcclxuLmNvZGUtY29udGVudCxcclxuLnZpc3VhbGl6YXRpb24tY29udGVudCB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDQwMG1zIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm11dGFudC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWIuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWRjMGE5IDAlLCAjOGFiMDk1IDEwMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFiOmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM2ZmE4ODI7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59Il19 */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #f0f9f4 0%, #e8f5ed 100%);\r\n    color: #1a1f2e;\r\n    line-height: 1.6;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.code-section[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    border: 1px solid rgba(157, 192, 169, 0.3);\r\n    border-radius: 16px;\r\n    overflow: hidden;\r\n    box-shadow:\r\n        0 4px 24px rgba(157, 192, 169, 0.08),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    animation: fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n.code-section[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.75);\r\n    box-shadow:\r\n        0 8px 32px rgba(157, 192, 169, 0.12),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n    border-color: rgba(157, 192, 169, 0.4);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    color: white;\r\n    padding: 1rem 1.5rem;\r\n    margin: 0;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    letter-spacing: 0.05em;\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid rgba(255, 255, 255, 0.2);\r\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n.section-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.circuit-iframe-container[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1.5rem;\r\n    background: rgba(255, 255, 255, 0.3);\r\n    min-height: 500px;\r\n}\r\n.circuit-iframe[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n    border-radius: 12px;\r\n    background-color: white;\r\n    box-shadow:\r\n        0 2px 12px rgba(157, 192, 169, 0.1),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.circuit-iframe[_ngcontent-%COMP%]:hover {\r\n    box-shadow:\r\n        0 4px 16px rgba(157, 192, 169, 0.15),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.6);\r\n}\r\n.no-circuit-message[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    color: #4a5568;\r\n    font-style: italic;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n.no-circuit-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: #9dc0a9;\r\n    opacity: 0.3;\r\n}\r\n.no-circuit-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        max-width: 900px;\r\n        padding: 0;\r\n    }\r\n\r\n    .code-section[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        min-height: 400px;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.875rem 1.25rem;\r\n        font-size: 0.8125rem;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        padding: 1.25rem;\r\n        min-height: 350px;\r\n    }\r\n\r\n    .no-circuit-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 0.9375rem;\r\n    }\r\n}\r\n@media (max-width: 480px) {\r\n    .section-title[_ngcontent-%COMP%] {\r\n        padding: 0.75rem 1rem;\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n        min-height: 300px;\r\n    }\r\n\r\n    .no-circuit-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n        width: 48px;\r\n        height: 48px;\r\n    }\r\n\r\n    .no-circuit-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 0.875rem;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\r\n\r\n@media print {\r\n    .container[_ngcontent-%COMP%] {\r\n        box-shadow: none;\r\n        border: 1px solid #ccc;\r\n        padding: 1rem;\r\n        background: white;\r\n    }\r\n\r\n    .section-title[_ngcontent-%COMP%] {\r\n        background: #f0f0f0 !important;\r\n        color: #333 !important;\r\n        border-bottom: 2px solid #333;\r\n    }\r\n\r\n    .circuit-iframe-container[_ngcontent-%COMP%] {\r\n        background: white !important;\r\n        border: 1px solid #ccc;\r\n    }\r\n\r\n    .circuit-iframe[_ngcontent-%COMP%] {\r\n        box-shadow: none !important;\r\n        border: 1px solid #ccc !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGFudHMtdmlzdWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1HQUFtRztBQUNuRyxvR0FBb0c7QUFGcEcscURBQXFEO0FBSXJEO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsK0VBQStFO0lBQy9FLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksNkRBQTZEO0lBQzdELGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxrREFBa0Q7SUFDbEQsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7OzhDQUUwQztJQUMxQyxrREFBa0Q7SUFDbEQsdURBQXVEO0FBQzNEO0FBRUE7SUFDSSxxQ0FBcUM7SUFDckM7OzhDQUUwQztJQUMxQyxzQ0FBc0M7QUFDMUM7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSw2REFBNkQ7SUFDN0QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZCxpREFBaUQ7QUFDckQ7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qjs7OENBRTBDO0lBQzFDLGtEQUFrRDtBQUN0RDtBQUVBO0lBQ0k7OzhDQUUwQztBQUM5QztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFSTs7O1FBR0kscUNBQXFDO1FBQ3JDLHNDQUFzQztJQUMxQztBQUNKO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDRCQUE0QjtRQUM1QixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IsaUNBQWlDO0lBQ3JDO0FBQ0oiLCJmaWxlIjoibXV0YW50cy12aXN1YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE11dGFudHMgVmlzdWFsIENvbXBvbmVudCAtIEdsYXNzbW9ycGhpc20gUXVhbnR1bSAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpldEJyYWlucytNb25vOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGY5ZjQgMCUsICNlOGY1ZWQgMTAwJSk7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLyogQ29kZSBTZWN0aW9uIFN0eWxlcyAtIEdsYXNzIENhcmQgKi9cclxuLmNvZGUtc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDRweCAyNHB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC4wOCksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcbi5jb2RlLXNlY3Rpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA4cHggMzJweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMTIpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1NywgMTkyLCAxNjksIDAuNCk7XHJcbn1cclxuXHJcbi8qIFNlY3Rpb24gVGl0bGUgU3R5bGVzICovXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZmE4ODIgMCUsICM1ZDhmNmYgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBzdmcge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG59XHJcblxyXG4vKiBDaXJjdWl0IGlmcmFtZSBjb250YWluZXIgc3R5bGVzICovXHJcbi5jaXJjdWl0LWlmcmFtZS1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5jaXJjdWl0LWlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCAycHggMTJweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMSksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmNpcmN1aXQtaWZyYW1lOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA0cHggMTZweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMTUpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG59XHJcblxyXG4ubm8tY2lyY3VpdC1tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5uby1jaXJjdWl0LW1lc3NhZ2Ugc3ZnIHtcclxuICAgIGNvbG9yOiAjOWRjMGE5O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ubm8tY2lyY3VpdC1tZXNzYWdlIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvZGUtc2VjdGlvbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXQtaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2lyY3VpdC1pZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1jaXJjdWl0LW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXQtaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubm8tY2lyY3VpdC1tZXNzYWdlIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1jaXJjdWl0LW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWNjZXNzaWJpbGl0eSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG5cclxuICAgICosXHJcbiAgICAqOjpiZWZvcmUsXHJcbiAgICAqOjphZnRlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLyogUHJpbnQgc3R5bGVzICovXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXQtaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjdWl0LWlmcmFtZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n    box-sizing: border-box;\r\n}\n.operators-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    padding-bottom: 2rem;\r\n}\n\n.glass-card[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    backdrop-filter: blur(16px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(16px) saturate(180%);\r\n    border: 1px solid rgba(111, 168, 130, 0.3);\r\n    border-radius: 16px;\r\n    padding: 1.5rem;\r\n    box-shadow: 0 4px 24px rgba(111, 168, 130, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\n.glass-card[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.75);\r\n    box-shadow: 0 8px 32px rgba(111, 168, 130, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);\r\n    border-color: rgba(111, 168, 130, 0.4);\r\n}\n\n.card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 1.25rem;\r\n    padding-bottom: 0.75rem;\r\n    border-bottom: 1px solid rgba(111, 168, 130, 0.15);\r\n}\n.card-icon[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n    flex-shrink: 0;\r\n    filter: drop-shadow(0 2px 4px rgba(111, 168, 130, 0.2));\r\n}\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    font-weight: 600;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n    flex: 1;\r\n}\n\n.config-grid-horizontal[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: minmax(100px, auto) 1fr 1fr 1.2fr;\r\n    gap: 1.5rem;\r\n    align-items: start;\r\n}\n.config-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\n.config-label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    font-size: 0.75rem;\r\n    font-weight: 600;\r\n    color: #4a5568;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.05em;\r\n}\n.config-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: #6fa882;\r\n    width: 16px;\r\n    height: 16px;\r\n}\n\n.glass-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0.625rem 0.875rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 10px;\r\n    font-size: 0.875rem;\r\n    font-weight: 500;\r\n    color: #1a1f2e;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    transition: all 200ms ease;\r\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);\r\n}\n.glass-input[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    border-color: rgba(111, 168, 130, 0.2);\r\n}\n.glass-input[_ngcontent-%COMP%]:focus {\r\n    background: #ffffff;\r\n    border-color: #6fa882;\r\n    box-shadow: 0 0 0 4px rgba(111, 168, 130, 0.15);\r\n    outline: none;\r\n}\n.glass-input[_ngcontent-%COMP%]:read-only {\r\n    background: rgba(255, 255, 255, 0.3);\r\n    color: #4a5568;\r\n    cursor: default;\r\n}\n.input-hint[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    color: #718096;\r\n    font-style: italic;\r\n    margin-left: 0.25rem;\r\n}\n\n.output-qubits-inline[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem;\r\n    background: rgba(255, 255, 255, 0.4);\r\n    border: 1px solid rgba(111, 168, 130, 0.15);\r\n    border-radius: 10px;\r\n    min-height: 42px;\r\n}\n.qubit-checkbox[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.375rem 0.75rem;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    border: 1px solid rgba(111, 168, 130, 0.2);\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n    font-size: 0.8125rem;\r\n    font-weight: 500;\r\n    color: #1a1f2e;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\n.qubit-checkbox[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    border-color: #6fa882;\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 2px 8px rgba(111, 168, 130, 0.1);\r\n}\n\n.glass-checkbox[_ngcontent-%COMP%] {\r\n    appearance: none;\r\n    width: 16px;\r\n    height: 16px;\r\n    border: 2px solid #6fa882;\r\n    border-radius: 4px;\r\n    background: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: all 200ms;\r\n}\n.glass-checkbox[_ngcontent-%COMP%]:checked {\r\n    background: #6fa882;\r\n    border-color: #6fa882;\r\n}\n.glass-checkbox[_ngcontent-%COMP%]:checked::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 4px;\r\n    top: 1px;\r\n    width: 4px;\r\n    height: 8px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(45deg);\r\n}\n\n.operators-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    padding: 0 0.5rem;\r\n}\n.operators-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n}\n.select-all-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem 1rem;\r\n    background: rgba(255, 255, 255, 0.8);\r\n    border: 1px solid rgba(111, 168, 130, 0.3);\r\n    border-radius: 8px;\r\n    color: #4a5568;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n}\n.select-all-btn[_ngcontent-%COMP%]:hover {\r\n    background: #ffffff;\r\n    border-color: #6fa882;\r\n    color: #6fa882;\r\n    box-shadow: 0 4px 12px rgba(111, 168, 130, 0.15);\r\n}\n\n.families-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1rem;\r\n}\n.family-card[_ngcontent-%COMP%] {\r\n    padding: 1.25rem;\r\n}\n.family-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    padding-bottom: 0.75rem;\r\n    border-bottom: 1px solid rgba(111, 168, 130, 0.15);\r\n}\n.family-name[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n}\n.family-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 0.75rem;\r\n}\n.select-family-btn[_ngcontent-%COMP%] {\r\n    background: rgba(111, 168, 130, 0.1);\r\n    color: #6fa882;\r\n    border: none;\r\n    padding: 0.375rem 0.75rem;\r\n    border-radius: 6px;\r\n    font-size: 0.75rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    transition: all 200ms;\r\n}\n.select-family-btn[_ngcontent-%COMP%]:hover {\r\n    background: rgba(111, 168, 130, 0.2);\r\n    transform: translateY(-1px);\r\n}\n.info-btn[_ngcontent-%COMP%] {\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    border: 1px solid rgba(111, 168, 130, 0.2);\r\n    background: white;\r\n    color: #6fa882;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n}\n.info-btn[_ngcontent-%COMP%]:hover {\r\n    background: #6fa882;\r\n    color: white;\r\n    border-color: #6fa882;\r\n    transform: rotate(15deg);\r\n}\n\n.operators-list-horizontal[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.75rem;\r\n}\n.operator-label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.625rem;\r\n    padding: 0.5rem 0.875rem;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border: 1px solid rgba(111, 168, 130, 0.2);\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    transition: all 200ms;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\n.operator-label[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    border-color: #6fa882;\r\n    box-shadow: 0 4px 12px rgba(111, 168, 130, 0.1);\r\n}\n.operator-name[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    font-weight: 500;\r\n    color: #1a1f2e;\r\n}\n\n.actions-bar[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    bottom: 1rem;\r\n    background: rgba(255, 255, 255, 0.85);\r\n    backdrop-filter: blur(20px);\r\n    -webkit-backdrop-filter: blur(20px);\r\n    border: 1px solid rgba(111, 168, 130, 0.3);\r\n    border-radius: 16px;\r\n    padding: 1rem 1.5rem;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\r\n    z-index: 100;\r\n    margin-top: auto;\r\n}\n.generate-btn[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    color: white;\r\n    border: none;\r\n    padding: 0.875rem 2rem;\r\n    border-radius: 12px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    transition: all 300ms;\r\n    box-shadow: 0 4px 16px rgba(111, 168, 130, 0.4);\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.025em;\r\n}\n.generate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 24px rgba(111, 168, 130, 0.5);\r\n    background: linear-gradient(135deg, #5d8f6f 0%, #4a7a5e 100%);\r\n}\n.generate-btn[_ngcontent-%COMP%]:active:not(:disabled) {\r\n    transform: translateY(0);\r\n}\n.generate-btn[_ngcontent-%COMP%]:disabled {\r\n    background: linear-gradient(135deg, #cbd5e0 0%, #a0aec0 100%);\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(26, 31, 46, 0.6);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    z-index: 2000;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation: fadeIn 300ms;\r\n}\n.modal-content[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.95);\r\n    width: 90%;\r\n    max-width: 600px;\r\n    max-height: 85vh;\r\n    border-radius: 20px;\r\n    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    animation: slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1);\r\n}\n.modal-header[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n    border-bottom: 1px solid rgba(111, 168, 130, 0.2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: rgba(111, 168, 130, 0.05);\r\n}\n.modal-title[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin: 0;\r\n}\n.modal-close[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border: none;\r\n    color: #718096;\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 50%;\r\n    transition: all 200ms;\r\n    display: flex;\r\n}\n.modal-close[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.1);\r\n    color: #ef4444;\r\n}\n.modal-body[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n    overflow-y: auto;\r\n}\n.operator-info[_ngcontent-%COMP%] {\r\n    background: white;\r\n    border: 1px solid rgba(111, 168, 130, 0.15);\r\n    border-radius: 12px;\r\n    padding: 1.25rem;\r\n    margin-bottom: 1rem;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\r\n}\n.operator-info-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    margin-bottom: 0.5rem;\r\n    color: #1a1f2e;\r\n    font-weight: 600;\r\n}\n.operator-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #4a5568;\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    font-size: 0.9375rem;\r\n}\n\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\n@keyframes slideUp {\r\n    from {\r\n        transform: translateY(40px);\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 1;\r\n    }\r\n}\n\n@media (max-width: 1024px) {\r\n    .config-grid-horizontal[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\n@media (max-width: 640px) {\r\n    .config-grid-horizontal[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .operators-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        gap: 1rem;\r\n    }\r\n\r\n    .select-all-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n\r\n    .actions-bar[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n    }\r\n\r\n    .generate-btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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Z0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG9CQUFvQjtBQUN4QjtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7QUFDSjtBQUVBLGVBQWU7QUFDZjtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7QUFDSiIsImZpbGUiOiJvcGVyYXRvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9wZXJhdG9ycyBDb21wb25lbnQgLSBHbGFzc21vcnBoaXNtIFJlZmluZWQgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ub3BlcmF0b3JzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLyogR2xhc3MgQ2FyZCBCYXNlIFN0eWxlICovXHJcbi5nbGFzcy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjA4KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmdsYXNzLWNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjEyKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC40KTtcclxufVxyXG5cclxuLyogQ2FyZCBIZWFkZXIgKi9cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKSk7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4vKiBDb25maWd1cmF0aW9uIEdyaWQgLSBIb3Jpem9udGFsIExheW91dCAqL1xyXG4uY29uZmlnLWdyaWQtaG9yaXpvbnRhbCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIGF1dG8pIDFmciAxZnIgMS4yZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmNvbmZpZy1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb25maWctbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG59XHJcblxyXG4uY29uZmlnLWxhYmVsIHN2ZyB7XHJcbiAgICBjb2xvcjogIzZmYTg4MjtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4vKiBHbGFzcyBJbnB1dCBGaWVsZHMgKi9cclxuLmdsYXNzLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbn1cclxuXHJcbi5nbGFzcy1pbnB1dDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZhODgyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xNSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6cmVhZC1vbmx5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uaW5wdXQtaGludCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogIzcxODA5NjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBPdXRwdXQgUXViaXRzIElubGluZSBDb250YWluZXIgKi9cclxuLm91dHB1dC1xdWJpdHMtaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDJweDtcclxufVxyXG5cclxuLnF1Yml0LWNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnF1Yml0LWNoZWNrYm94OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmYTg4MjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMSk7XHJcbn1cclxuXHJcbi8qIEN1c3RvbSBDaGVja2JveCAqL1xyXG4uZ2xhc3MtY2hlY2tib3gge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzZmYTg4MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG59XHJcblxyXG4uZ2xhc3MtY2hlY2tib3g6Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmZhODgyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZhODgyO1xyXG59XHJcblxyXG4uZ2xhc3MtY2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4vKiBPcGVyYXRvcnMgU2VjdGlvbiBIZWFkZXIgKi9cclxuLm9wZXJhdG9ycy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG59XHJcblxyXG4ub3BlcmF0b3JzLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VsZWN0LWFsbC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxufVxyXG5cclxuLnNlbGVjdC1hbGwtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbiAgICBjb2xvcjogIzZmYTg4MjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KTtcclxufVxyXG5cclxuLyogRmFtaWxpZXMgR3JpZCAqL1xyXG4uZmFtaWxpZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5mYW1pbHktY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uZmFtaWx5LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMTUpO1xyXG59XHJcblxyXG4uZmFtaWx5LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZmFtaWx5LWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLnNlbGVjdC1mYW1pbHktYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xKTtcclxuICAgIGNvbG9yOiAjNmZhODgyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG59XHJcblxyXG4uc2VsZWN0LWZhbWlseS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uaW5mby1idG4ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNmZhODgyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxufVxyXG5cclxuLmluZm8tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2ZmE4ODI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbn1cclxuXHJcbi8qIE9wZXJhdG9ycyBMaXN0ICovXHJcbi5vcGVyYXRvcnMtbGlzdC1ob3Jpem9udGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5vcGVyYXRvci1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC44NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLm9wZXJhdG9yLWxhYmVsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmYTg4MjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjEpO1xyXG59XHJcblxyXG4ub3BlcmF0b3ItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG59XHJcblxyXG4vKiBBY3Rpb25zIEJhciAtIFN0aWNreSBGb290ZXIgKi9cclxuLmFjdGlvbnMtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLmdlbmVyYXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmZhODgyIDAlLCAjNWQ4ZjZmIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC40KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG5cclxuLmdlbmVyYXRlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDhmNmYgMCUsICM0YTdhNWUgMTAwJSk7XHJcbn1cclxuXHJcbi5nZW5lcmF0ZS1idG46YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmdlbmVyYXRlLWJ0bjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjY2JkNWUwIDAlLCAjYTBhZWMwIDEwMCUpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxlcyAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAzMSwgNDYsIDAuNik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMzAwbXM7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAyNHB4IDQ4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDQwMG1zIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4wNSk7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubW9kYWwtY2xvc2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xKTtcclxuICAgIGNvbG9yOiAjZWY0NDQ0O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ub3BlcmF0b3ItaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxNjgsIDEzMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxufVxyXG5cclxuLm9wZXJhdG9yLWluZm8taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ub3BlcmF0b3ItaW5mbyBwIHtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmNvbmZpZy1ncmlkLWhvcml6b250YWwge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuY29uZmlnLWdyaWQtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLm9wZXJhdG9ycy1oZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtYWxsLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMtYmFyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZ2VuZXJhdGUtYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n*[_ngcontent-%COMP%] {\r\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n    letter-spacing: -0.01em;\r\n}\n\n.fab-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 20px;\r\n    \r\n    right: 20px;\r\n    \r\n    z-index: 999;\r\n}\n.fab-button[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 48px;\r\n    \r\n    height: 48px;\r\n    \r\n    border-radius: 50%;\r\n    border: none;\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    box-shadow:\r\n        0 8px 24px rgba(111, 168, 130, 0.35),\r\n        0 4px 12px rgba(0, 0, 0, 0.15),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n    cursor: pointer;\r\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n.fab-button[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border-radius: 50%;\r\n    background: rgba(255, 255, 255, 0.25);\r\n    transform: translate(-50%, -50%);\r\n    transition: width 400ms ease, height 400ms ease;\r\n}\n.fab-button[_ngcontent-%COMP%]:hover::before {\r\n    width: 100%;\r\n    height: 100%;\r\n}\n.fab-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-4px) scale(1.05);\r\n    box-shadow:\r\n        0 12px 32px rgba(111, 168, 130, 0.45),\r\n        0 6px 16px rgba(0, 0, 0, 0.2),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\n.fab-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(-2px) scale(1.02);\r\n    box-shadow:\r\n        0 6px 20px rgba(111, 168, 130, 0.4),\r\n        0 3px 8px rgba(0, 0, 0, 0.15);\r\n}\n.fab-button.active[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #5d8f6f 0%, #4a7559 100%);\r\n}\n.fab-icon[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n    \r\n    height: 22px;\r\n    \r\n    color: white;\r\n    position: relative;\r\n    z-index: 2;\r\n    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\r\n}\n.fab-glow[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 80%;\r\n    height: 80%;\r\n    border-radius: 50%;\r\n    background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);\r\n    transform: translate(-50%, -50%);\r\n    pointer-events: none;\r\n    animation: pulse 2s ease-in-out infinite;\r\n}\n@keyframes pulse {\r\n\r\n    0%,\r\n    100% {\r\n        opacity: 0.6;\r\n        transform: translate(-50%, -50%) scale(0.9);\r\n    }\r\n\r\n    50% {\r\n        opacity: 1;\r\n        transform: translate(-50%, -50%) scale(1.1);\r\n    }\r\n}\n\n.notes-panel-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    -webkit-backdrop-filter: blur(4px);\r\n            backdrop-filter: blur(4px);\r\n    z-index: 1000;\r\n    animation: fadeIn 300ms ease;\r\n}\n.notes-panel[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: -450px;\r\n    width: 420px;\r\n    max-width: 90vw;\r\n    height: 100vh;\r\n    background: rgba(255, 255, 255, 0.85);\r\n    backdrop-filter: blur(20px) saturate(180%);\r\n    -webkit-backdrop-filter: blur(20px) saturate(180%);\r\n    border-left: 1px solid rgba(111, 168, 130, 0.3);\r\n    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);\r\n    transition: right 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    z-index: 1001;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\n.notes-panel.open[_ngcontent-%COMP%] {\r\n    right: 0;\r\n}\n\n.panel-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1.5rem;\r\n    border-bottom: 1px solid rgba(111, 168, 130, 0.2);\r\n    background: rgba(255, 255, 255, 0.6);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n}\n.panel-header-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n}\n.panel-icon[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n    height: 24px;\r\n    color: #6fa882;\r\n}\n.panel-title[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n}\n.close-button[_ngcontent-%COMP%] {\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    cursor: pointer;\r\n    transition: all 200ms ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n.close-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.1);\r\n    transform: scale(1.05);\r\n}\n.close-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    color: #4a5568;\r\n}\n.close-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    color: #ef4444;\r\n}\n\n.notes-list[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: rgba(111, 168, 130, 0.05);\r\n    border-radius: 4px;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgba(111, 168, 130, 0.3);\r\n    border-radius: 4px;\r\n    -webkit-transition: background 200ms ease;\r\n    transition: background 200ms ease;\r\n}\n.notes-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: rgba(111, 168, 130, 0.5);\r\n}\n\n.note-item[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.7);\r\n    -webkit-backdrop-filter: blur(10px) saturate(180%);\r\n            backdrop-filter: blur(10px) saturate(180%);\r\n    border: 1px solid rgba(111, 168, 130, 0.3);\r\n    border-radius: 12px;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: 0 2px 8px rgba(111, 168, 130, 0.1);\r\n}\n.note-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 16px rgba(111, 168, 130, 0.2);\r\n    border-color: #6fa882;\r\n}\n.note-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n}\n.note-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n    flex: 1;\r\n    line-height: 1.4;\r\n}\n.note-type[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 0.125rem 0.5rem;\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    color: white;\r\n    font-size: 0.75rem;\r\n    font-weight: 600;\r\n    border-radius: 6px;\r\n    white-space: nowrap;\r\n}\n.note-preview[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    color: #4a5568;\r\n    margin: 0 0 0.75rem 0;\r\n    line-height: 1.5;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\n.note-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\n.note-date[_ngcontent-%COMP%] {\r\n    font-size: 0.75rem;\r\n    color: #718096;\r\n    font-weight: 500;\r\n}\n\n.empty-state[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 3rem 1rem;\r\n    text-align: center;\r\n    opacity: 0.7;\r\n}\n.empty-icon[_ngcontent-%COMP%] {\r\n    width: 64px;\r\n    height: 64px;\r\n    color: #cbd5e0;\r\n    margin-bottom: 1rem;\r\n}\n.empty-text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: #4a5568;\r\n    margin: 0 0 0.5rem 0;\r\n}\n.empty-subtext[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    color: #718096;\r\n    margin: 0;\r\n}\n\n.panel-footer[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n    border-top: 1px solid rgba(111, 168, 130, 0.2);\r\n    background: rgba(255, 255, 255, 0.6);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n}\n.add-note-button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.75rem;\r\n    padding: 0.875rem 1.5rem;\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-size: 0.9375rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow:\r\n        0 4px 12px rgba(111, 168, 130, 0.3),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\n.add-note-button[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(135deg, #5d8f6f 0%, #8bc4a0 100%);\r\n    transform: translateY(-2px);\r\n    box-shadow:\r\n        0 6px 20px rgba(111, 168, 130, 0.4),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\n.add-note-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(0);\r\n}\n.add-note-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    z-index: 1100;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n    animation: fadeIn 300ms ease;\r\n}\n.modal-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    max-height: 90vh;\r\n    background: rgba(255, 255, 255, 0.95);\r\n    -webkit-backdrop-filter: blur(30px) saturate(180%);\r\n            backdrop-filter: blur(30px) saturate(180%);\r\n    border: 1px solid rgba(111, 168, 130, 0.4);\r\n    border-radius: 20px;\r\n    box-shadow:\r\n        0 20px 60px rgba(0, 0, 0, 0.3),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    animation: slideUp 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    overflow: hidden;\r\n}\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\n@keyframes slideUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px) scale(0.95);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0) scale(1);\r\n    }\r\n}\n\n.modal-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1.5rem;\r\n    border-bottom: 1px solid rgba(111, 168, 130, 0.2);\r\n    background: rgba(255, 255, 255, 0.7);\r\n}\n.modal-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    font-size: 1.375rem;\r\n    font-weight: 700;\r\n    color: #1a1f2e;\r\n    margin: 0;\r\n}\n.modal-icon[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n    height: 24px;\r\n    color: #6fa882;\r\n}\n.modal-close-button[_ngcontent-%COMP%] {\r\n    width: 36px;\r\n    height: 36px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    cursor: pointer;\r\n    transition: all 200ms ease;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n.modal-close-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.1);\r\n    transform: scale(1.05);\r\n}\n.modal-close-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    color: #4a5568;\r\n}\n.modal-close-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    color: #ef4444;\r\n}\n\n.modal-body[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    padding: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.25rem;\r\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: rgba(111, 168, 130, 0.05);\r\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: rgba(111, 168, 130, 0.3);\r\n    border-radius: 4px;\r\n}\n.form-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\n.form-label[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    color: #4a5568;\r\n    margin-left: 0.25rem;\r\n}\n.glass-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 0.875rem 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-size: 0.9375rem;\r\n    font-weight: 400;\r\n    color: #1a1f2e;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n    outline: none;\r\n}\n.glass-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #718096;\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\n.glass-input[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.75);\r\n    border-color: rgba(111, 168, 130, 0.3);\r\n}\n.glass-input[_ngcontent-%COMP%]:focus {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    border-color: #6fa882;\r\n    box-shadow:\r\n        0 0 0 4px rgba(111, 168, 130, 0.15),\r\n        inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n    transform: translateY(-1px);\r\n}\n.glass-textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    box-sizing: border-box;\r\n    min-height: 200px;\r\n    padding: 0.875rem 1rem;\r\n    border: 2px solid transparent;\r\n    border-radius: 12px;\r\n    font-size: 0.9375rem;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n    color: #1a1f2e;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    resize: vertical;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n    outline: none;\r\n}\n.glass-textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: #718096;\r\n    font-style: italic;\r\n    opacity: 0.8;\r\n}\n.glass-textarea[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.75);\r\n    border-color: rgba(111, 168, 130, 0.3);\r\n}\n.glass-textarea[_ngcontent-%COMP%]:focus {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    border-color: #6fa882;\r\n    box-shadow:\r\n        0 0 0 4px rgba(111, 168, 130, 0.15),\r\n        inset 0 1px 3px rgba(0, 0, 0, 0.05);\r\n}\n\n.date-display[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.75rem 1rem;\r\n    background: rgba(111, 168, 130, 0.08);\r\n    border-radius: 12px;\r\n    color: #4a5568;\r\n    font-size: 0.875rem;\r\n    font-weight: 500;\r\n}\n.date-icon[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    color: #6fa882;\r\n}\n\n.modal-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 1.5rem;\r\n    border-top: 1px solid rgba(111, 168, 130, 0.2);\r\n    background: rgba(255, 255, 255, 0.7);\r\n}\n.modal-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 0.75rem;\r\n}\n.delete-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    padding: 0.75rem 1.25rem;\r\n    background: rgba(239, 68, 68, 0.1);\r\n    border: 1px solid rgba(239, 68, 68, 0.3);\r\n    border-radius: 10px;\r\n    color: #dc2626;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms ease;\r\n}\n.delete-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(239, 68, 68, 0.15);\r\n    border-color: #dc2626;\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);\r\n}\n.delete-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\n.cancel-button[_ngcontent-%COMP%] {\r\n    padding: 0.75rem 1.5rem;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border: 1px solid rgba(111, 168, 130, 0.3);\r\n    border-radius: 10px;\r\n    color: #4a5568;\r\n    font-size: 0.9375rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms ease;\r\n}\n.cancel-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    border-color: #6fa882;\r\n    transform: translateY(-1px);\r\n}\n.save-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    padding: 0.75rem 1.5rem;\r\n    background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-size: 0.9375rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    box-shadow:\r\n        0 4px 12px rgba(111, 168, 130, 0.3),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\n.save-button[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(135deg, #5d8f6f 0%, #8bc4a0 100%);\r\n    transform: translateY(-2px);\r\n    box-shadow:\r\n        0 6px 20px rgba(111, 168, 130, 0.4),\r\n        inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n}\n.save-button[_ngcontent-%COMP%]:active {\r\n    transform: translateY(0);\r\n}\n.save-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\n\n@media (max-width: 768px) {\r\n    .fab-container[_ngcontent-%COMP%] {\r\n        top: 15px;\r\n        right: 15px;\r\n    }\r\n\r\n    .fab-button[_ngcontent-%COMP%] {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .fab-icon[_ngcontent-%COMP%] {\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n\r\n    .notes-panel[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        max-width: 100vw;\r\n    }\r\n\r\n    .modal-content[_ngcontent-%COMP%] {\r\n        border-radius: 16px;\r\n        max-height: 95vh;\r\n    }\r\n\r\n    .modal-footer[_ngcontent-%COMP%] {\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .delete-button[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n\r\n    .modal-actions[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .cancel-button[_ngcontent-%COMP%], .save-button[_ngcontent-%COMP%] {\r\n        flex: 1;\r\n    }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n    *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n        animation-duration: 0.01ms !important;\r\n        transition-duration: 0.01ms !important;\r\n    }\r\n}\n.fab-button[_ngcontent-%COMP%]:focus-visible, .add-note-button[_ngcontent-%COMP%]:focus-visible, .save-button[_ngcontent-%COMP%]:focus-visible, .cancel-button[_ngcontent-%COMP%]:focus-visible, .delete-button[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 2px solid #6fa882;\r\n    outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7O1FBRUksT0FBTztJQUNYO0FBQ0o7QUFFQSx3Q0FBd0M7QUFDeEM7O0lBRUk7OztRQUdJLHFDQUFxQztRQUNyQyxzQ0FBc0M7SUFDMUM7QUFDSjtBQUVBOzs7OztJQUtJLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoicHJvamVjdC1ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUHJvamVjdCBOb3RlcyAtIEdsYXNzbW9ycGhpc20gUXVhbnR1bSAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG5cclxuLyogPT09PT09PT09PSBGQUIgKEZsb2F0aW5nIEFjdGlvbiBCdXR0b24pID09PT09PT09PT0gKi9cclxuLmZhYi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgLyogVG9wIHBvc2l0aW9uICovXHJcbiAgICByaWdodDogMjBweDtcclxuICAgIC8qIFJpZ2h0IHBvc2l0aW9uIC0gaW4gdG9wLXJpZ2h0IGNvcm5lciAqL1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uZmFiLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIC8qIFJlZHVjZWQgZnJvbSA2NHB4ICovXHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAvKiBSZWR1Y2VkIGZyb20gNjRweCAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZmYTg4MiAwJSwgIzVkOGY2ZiAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA4cHggMjRweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMzUpLFxyXG4gICAgICAgIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgZWFzZSwgaGVpZ2h0IDQwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCAxMnB4IDMycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjQ1KSxcclxuICAgICAgICAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxufVxyXG5cclxuLmZhYi1idXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA2cHggMjBweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuNCksXHJcbiAgICAgICAgMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNWQ4ZjZmIDAlLCAjNGE3NTU5IDEwMCUpO1xyXG59XHJcblxyXG4uZmFiLWljb24ge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICAvKiBSZWR1Y2VkIGZyb20gMjhweCAqL1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgLyogUmVkdWNlZCBmcm9tIDI4cHggKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG59XHJcblxyXG4uZmFiLWdsb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMCUsIHRyYW5zcGFyZW50IDcwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcblxyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45KTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PSBQYW5lbCBMYXRlcmFsIGRlIE5vdGFzID09PT09PT09PT0gKi9cclxuLm5vdGVzLXBhbmVsLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLm5vdGVzLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAtNDUwcHg7XHJcbiAgICB3aWR0aDogNDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAtOHB4IDAgMzJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIHotaW5kZXg6IDEwMDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm5vdGVzLXBhbmVsLm9wZW4ge1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIEhlYWRlciBkZWwgUGFuZWwgKi9cclxuLnBhbmVsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLnBhbmVsLWljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzZmYTg4MjtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHN2ZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHN2ZyB7XHJcbiAgICBjb2xvcjogI2VmNDQ0NDtcclxufVxyXG5cclxuLyogTGlzdGEgZGUgTm90YXMgKi9cclxuLm5vdGVzLWxpc3Qge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5ub3Rlcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4ubm90ZXMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLm5vdGVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLm5vdGVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC41KTtcclxufVxyXG5cclxuLyogSXRlbSBkZSBOb3RhICovXHJcbi5ub3RlLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMSk7XHJcbn1cclxuXHJcbi5ub3RlLWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbn1cclxuXHJcbi5ub3RlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLm5vdGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMWExZjJlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxleDogMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5ub3RlLXR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xMjVyZW0gMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZmYTg4MiAwJSwgIzVkOGY2ZiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubm90ZS1wcmV2aWV3IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIG1hcmdpbjogMCAwIDAuNzVyZW0gMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIGxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4ubm90ZS1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ub3RlLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBFc3RhZG8gVmFjw61vICovXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmVtcHR5LWljb24ge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBjb2xvcjogI2NiZDVlMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5lbXB0eS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG59XHJcblxyXG4uZW1wdHktc3VidGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBkZWwgUGFuZWwgKi9cclxuLnBhbmVsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLmFkZC1ub3RlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmZhODgyIDAlLCAjNWQ4ZjZmIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDRweCAxMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmFkZC1ub3RlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNWQ4ZjZmIDAlLCAjOGJjNGEwIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDZweCAyMHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC40KSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxufVxyXG5cclxuLmFkZC1ub3RlLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uYWRkLW5vdGUtYnV0dG9uIHN2ZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PSBNb2RhbCA9PT09PT09PT09ICovXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgei1pbmRleDogMTEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCA0MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHNjYWxlKDAuOTUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogSGVhZGVyIGRlbCBNb2RhbCAqL1xyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1vZGFsLWljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzZmYTg4MjtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlLWJ1dHRvbiBzdmcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxufVxyXG5cclxuLm1vZGFsLWNsb3NlLWJ1dHRvbjpob3ZlciBzdmcge1xyXG4gICAgY29sb3I6ICNlZjQ0NDQ7XHJcbn1cclxuXHJcbi8qIEN1ZXJwbyBkZWwgTW9kYWwgKi9cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS4yNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMDUpO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5nbGFzcy1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxYTFmMmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZhODgyO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDAgMCA0cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KSxcclxuICAgICAgICBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmdsYXNzLXRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBjb2xvcjogIzFhMWYyZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZ2xhc3MtdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzE4MDk2O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZ2xhc3MtdGV4dGFyZWE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG59XHJcblxyXG4uZ2xhc3MtdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZhODgyO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDAgMCA0cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KSxcclxuICAgICAgICBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLyogRmVjaGEgKi9cclxuLmRhdGUtZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjA4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZGF0ZS1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM2ZmE4ODI7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBkZWwgTW9kYWwgKi9cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbn1cclxuXHJcbi5tb2RhbC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiBzdmcge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmYTg4MjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmZhODgyIDAlLCAjNWQ4ZjZmIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDRweCAxMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKSxcclxuICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDhmNmYgMCUsICM4YmM0YTAgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgNnB4IDIwcHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjQpLFxyXG4gICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHN2ZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PSBSZXNwb25zaXZlID09PT09PT09PT0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmFiLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYWItYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhYi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGVzLXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWxldGUtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtYWN0aW9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbmNlbC1idXR0b24sXHJcbiAgICAuc2F2ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT0gQWNjZXNzaWJpbGl0eSA9PT09PT09PT09ICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblxyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmFiLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxyXG4uYWRkLW5vdGUtYnV0dG9uOmZvY3VzLXZpc2libGUsXHJcbi5zYXZlLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxyXG4uY2FuY2VsLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxyXG4uZGVsZXRlLWJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjNmZhODgyO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufSJdfQ== */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\r\n\r\n.save-button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 80px;\r\n  z-index: 1000;\r\n\r\n  \r\n  background: linear-gradient(135deg, #9dc0a9 0%, #8ab095 100%);\r\n  color: white;\r\n  border: 1px solid rgba(157, 192, 169, 0.3);\r\n  border-radius: 12px;\r\n  padding: 0.875rem 1.5rem;\r\n  font-size: 0.9375rem;\r\n  font-weight: 600;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  letter-spacing: -0.01em;\r\n  cursor: pointer;\r\n\r\n  \r\n  box-shadow:\r\n    0 4px 16px rgba(157, 192, 169, 0.4),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n  backdrop-filter: blur(12px);\r\n  -webkit-backdrop-filter: blur(12px);\r\n\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.625rem;\r\n\r\n  \r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, #8ab095 0%, #7da88a 100%);\r\n  box-shadow:\r\n    0 6px 20px rgba(157, 192, 169, 0.5),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.4);\r\n  transform: translateY(-2px);\r\n  border-color: rgba(157, 192, 169, 0.5);\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n  box-shadow:\r\n    0 2px 8px rgba(157, 192, 169, 0.3),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  box-shadow:\r\n    0 0 0 4px rgba(157, 192, 169, 0.2),\r\n    0 4px 16px rgba(157, 192, 169, 0.4),\r\n    inset 0 1px 0 rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .save-button[_ngcontent-%COMP%] {\r\n    bottom: 15px;\r\n    right: 60px;\r\n    padding: 0.75rem 1.25rem;\r\n    font-size: 0.875rem;\r\n  }\r\n\r\n  .save-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@keyframes slideIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.save-button[_ngcontent-%COMP%] {\r\n  animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);\r\n}\r\n\r\n.modal-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1050;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n  max-width: 420px;\r\n  width: 90%;\r\n  max-height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.5rem 2rem;\r\n  border-bottom: 1px solid #e5e7eb;\r\n  background-color: #f0f7f3;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: #4c5866;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  color: #6b7280;\r\n  padding: 0;\r\n  width: 32px;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 6px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover {\r\n  background-color: #f3f4f6;\r\n  color: #374151;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n}\r\n\r\n\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 500;\r\n  color: #374151;\r\n  font-size: 0.875rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.05em;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.75rem;\r\n  font-size: 0.95rem;\r\n  font-weight: 400;\r\n  border: 2px solid #e5e7eb;\r\n  border-radius: 8px;\r\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\r\n  box-sizing: border-box;\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: #9dc0a9;\r\n  box-shadow: 0 0 0 3px rgba(157, 192, 169, 0.1);\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: #9ca3af;\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 2rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-decoration: none;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  font-family: 'Inter', sans-serif;\r\n  letter-spacing: -0.01em;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #9dc0a9;\r\n  color: #1f2937;\r\n  min-width: 140px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background-color: #8ab095;\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 4px 12px rgba(157, 192, 169, 0.3);\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f6;\r\n  color: #6b7280;\r\n  border: 2px solid #e5e7eb;\r\n}\r\n\r\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background-color: #e5e7eb;\r\n  color: #374151;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n  transform: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%] {\r\n  color: #ef4444;\r\n  font-size: 0.75rem;\r\n  margin-top: 0.25rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.ml-2[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n\r\n\r\n.spinner-border[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  vertical-align: text-bottom;\r\n  border: 0.125em solid currentColor;\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n  animation: spinner-border-spin 0.75s linear infinite;\r\n}\r\n\r\n.spinner-border-sm[_ngcontent-%COMP%] {\r\n  width: 0.875rem;\r\n  height: 0.875rem;\r\n  border-width: 0.125em;\r\n}\r\n\r\n@keyframes spinner-border-spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n  .modal-content[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    margin: 10px;\r\n  }\r\n\r\n  .modal-header[_ngcontent-%COMP%] {\r\n    padding: 1.25rem 1.5rem;\r\n  }\r\n\r\n  .modal-body[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .modal-title[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUdBQW1HOztBQUVuRztFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7O0VBRWIsa0NBQWtDO0VBQ2xDLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwrRUFBK0U7RUFDL0UsdUJBQXVCO0VBQ3ZCLGVBQWU7O0VBRWYsNkJBQTZCO0VBQzdCOzswQ0FFd0M7RUFDeEMsMkJBQTJCO0VBQzNCLG1DQUFtQzs7RUFFbkMsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTs7RUFFYiw4QkFBOEI7RUFDOUIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RDs7MENBRXdDO0VBQ3hDLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEI7OzBDQUV3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYjs7OzBDQUd3QztBQUMxQzs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFJQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwSEFBMEg7RUFDMUgsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGdCQUFnQjs7QUFDaEI7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3REFBd0Q7RUFDeEQsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzYXZlLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNhdmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gIC8qIEdsYXNzbW9ycGhpc20gUXVhbnR1bSBTdHlsaW5nICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzlkYzBhOSAwJSwgIzhhYjA5NSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMC44NzVyZW0gMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC8qIEdsYXNzIGVmZmVjdCB3aXRoIHNoYWRvdyAqL1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDRweCAxNnB4IHJnYmEoMTU3LCAxOTIsIDE2OSwgMC40KSxcclxuICAgIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuXHJcbiAgLyogRmxleGJveCBmb3IgaWNvbiBhbmQgdGV4dCBhbGlnbm1lbnQgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjYyNXJlbTtcclxuXHJcbiAgLyogU21vb3RoIHRyYW5zaXRpb24gZWZmZWN0cyAqL1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b24gc3ZnIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4YWIwOTUgMCUsICM3ZGE4OGEgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgNnB4IDIwcHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjUpLFxyXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjUpO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b246YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIDAgMnB4IDhweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMyksXHJcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDAgMCA0cHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjIpLFxyXG4gICAgMCA0cHggMTZweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuNCksXHJcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNhdmUtYnV0dG9uIHtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcblxyXG4gIC5zYXZlLWJ1dHRvbiBzdmcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb24gZm9yIHdoZW4gdGhlIGJ1dHRvbiBhcHBlYXJzICovXHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbiB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbn1cclxuXHJcblxyXG5cclxuLm1vZGFsLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjdmMztcclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzRjNTg2NjtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLyogRm9ybSBzdHlsZXMgKi9cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWRjMGE5O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE1NywgMTkyLCAxNjksIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzljYTNhZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vKiBCdXR0b24gc3R5bGVzICovXHJcbi5idG4ge1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkYzBhOTtcclxuICBjb2xvcjogIzFmMjkzNztcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YWIwOTU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNTcsIDE5MiwgMTY5LCAwLjMpO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcclxuICBjb2xvcjogIzM3NDE1MTtcclxufVxyXG5cclxuLmJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBVdGlsaXR5IGNsYXNzZXMgKi9cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1sLTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi8qIFNwaW5uZXIgc3R5bGVzICovXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyLXNwaW4gMC43NXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uc3Bpbm5lci1ib3JkZXItc20ge1xyXG4gIHdpZHRoOiAwLjg3NXJlbTtcclxuICBoZWlnaHQ6IDAuODc1cmVtO1xyXG4gIGJvcmRlci13aWR0aDogMC4xMjVlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlci1zcGluIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIG1vZGFsICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbn0iXX0= */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100vh;\r\n  width: 70px;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  backdrop-filter: blur(12px) saturate(180%);\r\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\r\n  border-right: 1px solid rgba(111, 168, 130, 0.4);\r\n  box-shadow: 2px 0 24px rgba(111, 168, 130, 0.15);\r\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  z-index: 1000;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\n.sidebar.open[_ngcontent-%COMP%] {\r\n  width: 320px;\r\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(111, 168, 130, 0.3);\r\n  background: rgba(255, 255, 255, 0.7);\r\n  color: #6fa882;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 200ms;\r\n  box-shadow: 0 2px 8px rgba(111, 168, 130, 0.1);\r\n  z-index: 10;\r\n  margin: 1rem auto;\r\n  flex-shrink: 0;\r\n}\n.sidebar.open[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 0;\r\n  transform: none;\r\n  margin: 1rem 1rem 1rem auto;\r\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\r\n  background: rgba(255, 255, 255, 0.9);\r\n  border-color: #6fa882;\r\n  transform: translateX(-50%) scale(1.05);\r\n  box-shadow: 0 4px 12px rgba(111, 168, 130, 0.2);\r\n}\n.sidebar.open[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n}\n.toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transition: transform 200ms;\r\n}\n.toggle-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n\n.loading-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem 1rem;\r\n  gap: 1rem;\r\n}\n.loading-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  color: #6fa882;\r\n}\n\n.tree-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  overflow: hidden;\r\n}\n\n.tree-header[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.25rem;\r\n  border-bottom: 1px solid rgba(111, 168, 130, 0.25);\r\n  background: rgba(255, 255, 255, 0.5);\r\n  flex-shrink: 0;\r\n}\n.header-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n  margin-bottom: 0.75rem;\r\n}\n.tree-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #1a1f2e;\r\n  margin: 0;\r\n  flex: 1;\r\n}\n.new-btn[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 8px;\r\n  border: none;\r\n  background: linear-gradient(135deg, #6fa882 0%, #5d8f6f 100%);\r\n  color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 200ms;\r\n  box-shadow: 0 2px 8px rgba(111, 168, 130, 0.3);\r\n}\n.new-btn[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, #5d8f6f 0%, #8bc4a0 100%);\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 4px 12px rgba(111, 168, 130, 0.4);\r\n}\n.new-btn[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n}\n.new-btn[_ngcontent-%COMP%]:disabled, .new-btn.creating[_ngcontent-%COMP%] {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n  pointer-events: none;\r\n}\n.new-btn[_ngcontent-%COMP%]:disabled:hover, .new-btn.creating[_ngcontent-%COMP%]:hover {\r\n  transform: none;\r\n  box-shadow: 0 2px 8px rgba(111, 168, 130, 0.3);\r\n}\n\n.refresh-btn[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 8px;\r\n  border: none;\r\n  background: rgba(111, 168, 130, 0.15);\r\n  color: #5d8f6f;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  border: 1px solid rgba(111, 168, 130, 0.2);\r\n}\n.refresh-btn[_ngcontent-%COMP%]:hover {\r\n  background: rgba(111, 168, 130, 0.25);\r\n  color: #4a7a5e;\r\n  transform: rotate(180deg);\r\n  box-shadow: 0 0 12px rgba(111, 168, 130, 0.2);\r\n  border-color: rgba(111, 168, 130, 0.4);\r\n}\n.refresh-btn[_ngcontent-%COMP%]:active {\r\n  transform: rotate(180deg) scale(0.95);\r\n}\n.refresh-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\n\n.tree-list[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow-y: auto;\r\n  flex: 1;\r\n}\n.tree-sublist[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-left: 1.5rem;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .tree-sublist[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n.tree-item[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n\n.tree-node[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.625rem;\r\n  padding: 0.625rem 0.75rem;\r\n  cursor: pointer;\r\n  transition: all 200ms;\r\n  position: relative;\r\n  border-radius: 8px;\r\n  margin: 0.125rem 0.25rem;\r\n  min-height: 40px;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .tree-node[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  padding: 0.625rem 0.5rem;\r\n}\n.tree-node[_ngcontent-%COMP%]:hover {\r\n  background: rgba(111, 168, 130, 0.15);\r\n}\n.tree-node[_ngcontent-%COMP%]:active {\r\n  background: rgba(111, 168, 130, 0.2);\r\n}\n\n.expand-icon[_ngcontent-%COMP%] {\r\n  color: #718096;\r\n  flex-shrink: 0;\r\n  transition: transform 200ms;\r\n  font-size: 0.75rem;\r\n  width: 12px;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .expand-icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n.expand-icon.expanded[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n\n.node-icon[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  transition: all 200ms;\r\n  font-size: 1.125rem;\r\n  width: 20px;\r\n  height: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\n.circuit-icon[_ngcontent-%COMP%] {\r\n  color: #6fa882;\r\n}\n.project-icon[_ngcontent-%COMP%] {\r\n  color: #5d8f6f;\r\n}\n.mutant-icon[_ngcontent-%COMP%] {\r\n  color: #8bc4a0;\r\n}\n.tree-node[_ngcontent-%COMP%]:hover   .node-icon[_ngcontent-%COMP%] {\r\n  transform: scale(1.15);\r\n}\n\n.node-label[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  color: #1a1f2e;\r\n  font-weight: 500;\r\n  flex: 1;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: all 200ms;\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .node-label[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  width: 0;\r\n  overflow: hidden;\r\n}\n.tree-node[_ngcontent-%COMP%]:hover   .node-label[_ngcontent-%COMP%] {\r\n  color: #6fa882;\r\n}\n.node-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  opacity: 0.7;\r\n}\n\n.unsaved-indicator[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(135deg, #ff0055 0%, #ff00ff 100%);\r\n  margin-left: 0.5rem;\r\n  position: relative;\r\n  animation: pulse-glow 1.5s ease-in-out infinite;\r\n  box-shadow:\r\n    0 0 6px rgba(255, 0, 85, 0.8),\r\n    0 0 10px rgba(255, 0, 255, 0.4);\r\n  border: 1px solid rgba(255, 255, 255, 0.8);\r\n}\n.unsaved-indicator[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 14px;\r\n  height: 14px;\r\n  border-radius: 50%;\r\n  background: rgba(255, 0, 85, 0.3);\r\n  animation: pulse-ring 1.5s ease-in-out infinite;\r\n}\n@keyframes pulse-glow {\r\n\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.8;\r\n    transform: scale(1.2);\r\n  }\r\n}\n@keyframes pulse-ring {\r\n  0% {\r\n    transform: translate(-50%, -50%) scale(1);\r\n    opacity: 0.6;\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-50%, -50%) scale(1.8);\r\n    opacity: 0.3;\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(2.4);\r\n    opacity: 0;\r\n  }\r\n}\n\n.badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.125rem 0.5rem;\r\n  background: rgba(111, 168, 130, 0.15);\r\n  border-radius: 12px;\r\n  font-size: 0.6875rem;\r\n  font-weight: 600;\r\n  color: #6fa882;\r\n  margin-left: 0.5rem;\r\n}\n\n.operator-tag[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0.125rem 0.375rem;\r\n  background: rgba(111, 168, 130, 0.1);\r\n  border-radius: 4px;\r\n  font-size: 0.6875rem;\r\n  font-weight: 500;\r\n  color: #4a5568;\r\n  margin-left: 0.375rem;\r\n}\n\n.tooltip[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  margin-left: 0.75rem;\r\n  padding: 0.5rem 0.875rem;\r\n  background: rgba(26, 31, 46, 0.95);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  color: white;\r\n  font-size: 0.75rem;\r\n  font-weight: 500;\r\n  border-radius: 6px;\r\n  white-space: nowrap;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: opacity 200ms;\r\n  z-index: 1001;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n}\n.sidebar[_ngcontent-%COMP%]:not(.open)   .tree-node[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\n.sidebar.open[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n\n.empty-state[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 3rem 1rem;\r\n  gap: 1rem;\r\n  color: #718096;\r\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n  font-size: 2rem;\r\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\n\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: rgba(111, 168, 130, 0.05);\r\n  border-radius: 3px;\r\n}\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: rgba(111, 168, 130, 0.3);\r\n  border-radius: 3px;\r\n}\n.tree-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(111, 168, 130, 0.5);\r\n}\n\n@media (max-width: 768px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 0;\r\n  }\r\n\r\n  .sidebar.open[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n  }\r\n\r\n  .toggle-btn[_ngcontent-%COMP%] {\r\n    right: -50px;\r\n    left: auto;\r\n    transform: none;\r\n  }\r\n\r\n  .sidebar.open[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\r\n    right: 1rem;\r\n  }\r\n}\n\n@media (prefers-reduced-motion: reduce) {\r\n\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    animation-duration: 0.01ms !important;\r\n    transition-duration: 0.01ms !important;\r\n  }\r\n}\n.toggle-btn[_ngcontent-%COMP%]:focus-visible, .new-btn[_ngcontent-%COMP%]:focus-visible, .tree-node[_ngcontent-%COMP%]:focus-visible {\r\n  outline: 2px solid #6fa882;\r\n  outline-offset: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSxzQkFBc0I7QUFDdEI7O0VBRUUsVUFBVTtBQUNaO0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUEsa0JBQWtCO0FBQ2xCOztFQUVFOzs7SUFHRSxxQ0FBcUM7SUFDckMsc0NBQXNDO0VBQ3hDO0FBQ0Y7QUFFQTs7O0VBR0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2lkZWJhciBDb21wb25lbnQgLSBHbGFzc21vcnBoaXNtIFJlZmluZWQgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDI0cHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWRlYmFyLm9wZW4ge1xyXG4gIHdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuLyogVG9nZ2xlIEJ1dHRvbiAqL1xyXG4udG9nZ2xlLWJ0biB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMyk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIGNvbG9yOiAjNmZhODgyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMSk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLm9wZW4gLnRvZ2dsZS1idG4ge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gYXV0bztcclxufVxyXG5cclxuLnRvZ2dsZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBib3JkZXItY29sb3I6ICM2ZmE4ODI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDEuMDUpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjIpO1xyXG59XHJcblxyXG4uc2lkZWJhci5vcGVuIC50b2dnbGUtYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ0biBpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XHJcbn1cclxuXHJcbi50b2dnbGUtYnRuOmhvdmVyIGkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLyogTG9hZGluZyBDb250YWluZXIgKi9cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiAjNmZhODgyO1xyXG59XHJcblxyXG4vKiBUcmVlIENvbnRhaW5lciAqL1xyXG4udHJlZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBUcmVlIEhlYWRlciAqL1xyXG4udHJlZS1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjI1KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG4udHJlZS1oZWFkZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMWExZjJlO1xyXG4gIG1hcmdpbjogMDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubmV3LWJ0biB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZmYTg4MiAwJSwgIzVkOGY2ZiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKTtcclxufVxyXG5cclxuLm5ldy1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDhmNmYgMCUsICM4YmM0YTAgMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjQpO1xyXG59XHJcblxyXG4ubmV3LWJ0bjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLm5ldy1idG46ZGlzYWJsZWQsXHJcbi5uZXctYnRuLmNyZWF0aW5nIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLm5ldy1idG46ZGlzYWJsZWQ6aG92ZXIsXHJcbi5uZXctYnRuLmNyZWF0aW5nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4zKTtcclxufVxyXG5cclxuLyogUmVmcmVzaCBCdXR0b24gLSBHbGFzc21vcnBoaXNtIFF1YW50dW0gKi9cclxuLnJlZnJlc2gtYnRuIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMTUpO1xyXG4gIGNvbG9yOiAjNWQ4ZjZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMik7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjI1KTtcclxuICBjb2xvcjogIzRhN2E1ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4yKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC40KTtcclxufVxyXG5cclxuLnJlZnJlc2gtYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuLnJlZnJlc2gtYnRuIGkge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vKiBUcmVlIExpc3QgKi9cclxuLnRyZWUtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50cmVlLXN1Ymxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyOm5vdCgub3BlbikgLnRyZWUtc3VibGlzdCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRyZWUtaXRlbSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBUcmVlIE5vZGUgKi9cclxuLnRyZWUtbm9kZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC42MjVyZW07XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMC43NXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luOiAwLjEyNXJlbSAwLjI1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyOm5vdCgub3BlbikgLnRyZWUtbm9kZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG4udHJlZS1ub2RlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMTUpO1xyXG59XHJcblxyXG4udHJlZS1ub2RlOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjIpO1xyXG59XHJcblxyXG4vKiBFeHBhbmQgSWNvbiAqL1xyXG4uZXhwYW5kLWljb24ge1xyXG4gIGNvbG9yOiAjNzE4MDk2O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDEycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyOm5vdCgub3BlbikgLmV4cGFuZC1pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZXhwYW5kLWljb24uZXhwYW5kZWQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLyogTm9kZSBJY29ucyAqL1xyXG4ubm9kZS1pY29uIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2lyY3VpdC1pY29uIHtcclxuICBjb2xvcjogIzZmYTg4MjtcclxufVxyXG5cclxuLnByb2plY3QtaWNvbiB7XHJcbiAgY29sb3I6ICM1ZDhmNmY7XHJcbn1cclxuXHJcbi5tdXRhbnQtaWNvbiB7XHJcbiAgY29sb3I6ICM4YmM0YTA7XHJcbn1cclxuXHJcbi50cmVlLW5vZGU6aG92ZXIgLm5vZGUtaWNvbiB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxufVxyXG5cclxuLyogTm9kZSBMYWJlbCAqL1xyXG4ubm9kZS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzFhMWYyZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxufVxyXG5cclxuLnNpZGViYXI6bm90KC5vcGVuKSAubm9kZS1sYWJlbCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHJlZS1ub2RlOmhvdmVyIC5ub2RlLWxhYmVsIHtcclxuICBjb2xvcjogIzZmYTg4MjtcclxufVxyXG5cclxuLm5vZGUtbGFiZWwgc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIFVuc2F2ZWQgSW5kaWNhdG9yIC0gSGlnaCBWaXNpYmlsaXR5IE5lb24gKi9cclxuLnVuc2F2ZWQtaW5kaWNhdG9yIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmMDA1NSAwJSwgI2ZmMDBmZiAxMDAlKTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IHB1bHNlLWdsb3cgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBib3gtc2hhZG93OlxyXG4gICAgMCAwIDZweCByZ2JhKDI1NSwgMCwgODUsIDAuOCksXHJcbiAgICAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMjU1LCAwLjQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLnVuc2F2ZWQtaW5kaWNhdG9yOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgODUsIDAuMyk7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZS1yaW5nIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2UtZ2xvdyB7XHJcblxyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjgpO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgyLjQpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEJhZGdlICovXHJcbi5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDE2OCwgMTMwLCAwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2ZmE4ODI7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLyogT3BlcmF0b3IgVGFnICovXHJcbi5vcGVyYXRvci10YWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjM3NXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM0YTU1Njg7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtO1xyXG59XHJcblxyXG4vKiBUb29sdGlwICovXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDAuODc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjYsIDMxLCA0NiwgMC45NSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5zaWRlYmFyOm5vdCgub3BlbikgLnRyZWUtbm9kZTpob3ZlciAudG9vbHRpcCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNpZGViYXIub3BlbiAudG9vbHRpcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogRW1wdHkgU3RhdGUgKi9cclxuLmVtcHR5LXN0YXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcmVtIDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGNvbG9yOiAjNzE4MDk2O1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgaSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFNjcm9sbGJhciBTdHlsaW5nICovXHJcbi50cmVlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi50cmVlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTExLCAxNjgsIDEzMCwgMC4wNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udHJlZS1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udHJlZS1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExMSwgMTY4LCAxMzAsIDAuNSk7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci5vcGVuIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICB9XHJcblxyXG4gIC50b2dnbGUtYnRuIHtcclxuICAgIHJpZ2h0OiAtNTBweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci5vcGVuIC50b2dnbGUtYnRuIHtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogQWNjZXNzaWJpbGl0eSAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG5cclxuICAqLFxyXG4gICo6OmJlZm9yZSxcclxuICAqOjphZnRlciB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlLWJ0bjpmb2N1cy12aXNpYmxlLFxyXG4ubmV3LWJ0bjpmb2N1cy12aXNpYmxlLFxyXG4udHJlZS1ub2RlOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmZhODgyO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XHJcbn0iXX0= */"] });


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