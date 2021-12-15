"use strict";
(self["webpackChunkworkflow_designer"] = self["webpackChunkworkflow_designer"] || []).push([["src_app_dev-harness_dev-harness_module_ts"],{

/***/ 9809:
/*!****************************************************************************************!*\
  !*** ./src/app/dev-harness/choose-control-harness/choose-control-harness.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseControlHarnessComponent": () => (/* binding */ ChooseControlHarnessComponent)
/* harmony export */ });
/* harmony import */ var _shared_enums_choose_control_choose_control_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/enums/choose-control/choose-control-types */ 2660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_common_choose_control_choose_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common/choose-control/choose-control.component */ 5235);



class ChooseControlHarnessComponent {
    constructor() {
        this.chooseControlTypes = _shared_enums_choose_control_choose_control_types__WEBPACK_IMPORTED_MODULE_0__.ChooseControlTypes;
        // Simple radiobutton scenario
        this.radiobutton1Checked = true;
        this.radiobutton2Checked = false;
        this.radiobutton3Checked = false;
        this.radiobutton4Checked = false;
        // Simple checkbox scenario
        this.checkbox1Checked = true;
        this.checkbox2Checked = false;
        this.checkbox3Checked = false;
        this.checkbox4Checked = false;
    }
    ngOnInit() { }
    onClicked(...args) {
        console.group('Harness - onClicked');
        console.log(args);
        console.groupEnd();
    }
}
ChooseControlHarnessComponent.ɵfac = function ChooseControlHarnessComponent_Factory(t) { return new (t || ChooseControlHarnessComponent)(); };
ChooseControlHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChooseControlHarnessComponent, selectors: [["k2-choose-control-harness"]], decls: 15, vars: 42, consts: [[3, "type", "displayText", "checked", "id", "name", "checkedChange"], [3, "type", "displayText", "checked", "id", "name", "disabled", "checkedChange"]], template: function ChooseControlHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Choose Control Harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Radio Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "k2-choose-control-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_5_listener($event) { return ctx.onClicked($event); })("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_5_listener($event) { return ctx.radiobutton1Checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "k2-choose-control-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_6_listener($event) { return ctx.onClicked($event); })("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_6_listener($event) { return ctx.radiobutton2Checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "k2-choose-control-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_7_listener($event) { return ctx.onClicked($event); })("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_7_listener($event) { return ctx.radiobutton3Checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "k2-choose-control-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_8_listener($event) { return ctx.onClicked($event); })("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_8_listener($event) { return ctx.radiobutton4Checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "k2-choose-control-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_11_listener($event) { return ctx.onClicked($event); })("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_11_listener($event) { return ctx.checkbox1Checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "k2-choose-control-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_12_listener($event) { return ctx.onClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "k2-choose-control-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_13_listener($event) { return ctx.onClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "k2-choose-control-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function ChooseControlHarnessComponent_Template_k2_choose_control_v2_checkedChange_14_listener($event) { return ctx.onClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.radiobutton)("displayText", "Radiobutton Display Text 1")("checked", ctx.radiobutton1Checked)("id", "radiobutton1")("name", "radiobuttonGroup1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.radiobutton)("displayText", "Radiobutton Display Text 2")("checked", ctx.radiobutton2Checked)("id", "radiobutton2")("name", "radiobuttonGroup1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.radiobutton)("displayText", "Radiobutton Display Text 3")("checked", ctx.radiobutton3Checked)("id", "radiobutton3")("name", "radiobuttonGroup1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.radiobutton)("displayText", "Radiobutton Display Text 4 (Disabled)")("checked", ctx.radiobutton4Checked)("id", "radiobutton4")("name", "radiobuttonGroup1")("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.checkbox)("displayText", "Checkbox Display Text 1")("checked", ctx.checkbox1Checked)("id", "checkbox1")("name", "checkboxGroup1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.checkbox)("displayText", "Checkbox Display Text 2")("checked", ctx.checkbox2Checked)("id", "checkbox2")("name", "checkboxGroup1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.checkbox)("displayText", "Checkbox Display Text 3")("checked", ctx.checkbox3Checked)("id", "checkbox3")("name", "checkboxGroup1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.chooseControlTypes.checkbox)("displayText", "Checkbox Display Text 4 (Disabled)")("checked", ctx.checkbox4Checked)("id", "checkbox4")("name", "checkboxGroup1")("disabled", true);
    } }, directives: [_components_common_choose_control_choose_control_component__WEBPACK_IMPORTED_MODULE_1__.ChooseControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2UtY29udHJvbC1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 5155:
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/dev-harness/config-panel/plugins/plugin-wizards/logic-steps/start-step/process-settings-tab-harness/process-settings-tab-harness.component.ts ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessSettingsTabHarnessComponent": () => (/* binding */ ProcessSettingsTabHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_config_panel_plugins_plugin_wizards_logic_steps_start_step_process_settings_tab_process_settings_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../components/config-panel/plugins/plugin-wizards/logic-steps/start-step/process-settings-tab/process-settings-tab.component */ 2826);


class ProcessSettingsTabHarnessComponent {
    constructor() { }
    ngOnInit() {
        this.process = JSON.parse(`{
            "componentId": 50001,
            "configuration": {
                "exceptionSettings": {
                    "componentId": 50012,
                    "logException": true
                },
                "outcomes": [
                    {
                        "componentId": 80021,
                        "internalId": 1,
                        "originalTitle": "Start",
                        "startWorkflow": true,
                        "title": "Start"
                    },
                    {
                        "componentId": 80021,
                        "internalId": 2,
                        "originalTitle": "Don't Start",
                        "title": "Don't Start"
                    }
                ],
                "processDefinitions": [
                    {
                        "componentId": 20000,
                        "internalId": 1
                    }
                ],
                "processPriority": 1,
                "startRule": {
                    "componentId": 80107,
                    "statements": [
                        {
                            "IfExpressions": [
                                {
                                    "componentId": 80004,
                                    "directive": "k2-group-expression",
                                    "expressions": [
                                        {
                                            "componentId": 80000,
                                            "directive": "k2-simple-expression",
                                            "internalId": 1,
                                            "leftExpression": {
                                                "componentId": 80003,
                                                "directive": "k2-endpoint",
                                                "value": {
                                                    "componentId": 10008
                                                }
                                            },
                                            "logicalOperator": "equals",
                                            "rightExpression": {
                                                "componentId": 80003,
                                                "directive": "k2-endpoint",
                                                "value": {
                                                    "componentId": 10008
                                                }
                                            }
                                        }
                                    ],
                                    "internalId": 1
                                }
                            ],
                            "componentId": 80002,
                            "elseStatements": [
                                {
                                    "componentId": 80006,
                                    "directive": "k2-outcome-statement",
                                    "internalId": 1,
                                    "linkedOutcomeReferences": [
                                        "root.configuration.outcomes[{'internalId':2}]"
                                    ]
                                }
                            ],
                            "internalId": 1,
                            "thenStatements": [
                                {
                                    "componentId": 80006,
                                    "directive": "k2-outcome-statement",
                                    "internalId": 1,
                                    "linkedOutcomeReferences": [
                                        "root.configuration.outcomes[{'internalId':1}]"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            "links": [
                {
                    "componentId": 50002,
                    "configuration": {
                        "componentId": 40013
                    },
                    "fromInternalId": 1,
                    "internalId": 1,
                    "systemName": "DefaultLine",
                    "toInternalId": 2,
                    "ui": {
                        "fromPortId": "bottomPorts_1",
                        "path": "0,84,0,104,0,112,0,112,0,120,0,140",
                        "template": "DefaultLine",
                        "toPortId": "topPorts_1"
                    }
                }
            ],
            "title": "My ergargrg",
            "trackedReferences": [
                {
                    "componentId": 70000,
                    "internalId": 1,
                    "references": [
                        "root.configuration.startRule.statements[{'internalId':1}].thenStatements[{'internalId':1}].linkedOutcomeReferences"
                    ],
                    "trackedObjectDefinitionPath": "root.configuration.outcomes[{'internalId':1}]"
                },
                {
                    "componentId": 70000,
                    "internalId": 2,
                    "references": [
                        "root.configuration.startRule.statements[{'internalId':1}].elseStatements[{'internalId':1}].linkedOutcomeReferences"
                    ],
                    "trackedObjectDefinitionPath": "root.configuration.outcomes[{'internalId':2}]"
                }
            ]
        }`);
    }
}
ProcessSettingsTabHarnessComponent.ɵfac = function ProcessSettingsTabHarnessComponent_Factory(t) { return new (t || ProcessSettingsTabHarnessComponent)(); };
ProcessSettingsTabHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProcessSettingsTabHarnessComponent, selectors: [["k2-process-settings-tab-harness"]], decls: 3, vars: 0, template: function ProcessSettingsTabHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "process-settings-tab-harness works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "k2-process-settings-tab");
    } }, directives: [_components_config_panel_plugins_plugin_wizards_logic_steps_start_step_process_settings_tab_process_settings_tab_component__WEBPACK_IMPORTED_MODULE_0__.ProcessSettingsTabComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLXNldHRpbmdzLXRhYi1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 7045:
/*!***********************************************************!*\
  !*** ./src/app/dev-harness/dev-harness-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevHarnessRoutingModule": () => (/* binding */ DevHarnessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _choose_control_harness_choose_control_harness_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-control-harness/choose-control-harness.component */ 9809);
/* harmony import */ var _dev_harness_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev-harness.component */ 8718);
/* harmony import */ var _drop_down_harness_drop_down_harness_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop-down-harness/drop-down-harness.component */ 5710);
/* harmony import */ var _filter_control_harness_filter_control_harness_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-control-harness/filter-control-harness.component */ 7187);
/* harmony import */ var _list_item_harness_list_item_harness_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item-harness/list-item-harness.component */ 5972);
/* harmony import */ var _resource_service_harness_resource_service_harness_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-service-harness/resource-service-harness.component */ 2074);
/* harmony import */ var _rules_designer_expressions_filter_expression_harness_filter_expression_harness_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules-designer/expressions/filter-expression-harness/filter-expression-harness.component */ 4947);
/* harmony import */ var _rules_designer_group_boolean_operator_expression_harness_group_boolean_operator_expression_harness_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules-designer/group-boolean-operator-expression-harness/group-boolean-operator-expression-harness.component */ 5512);
/* harmony import */ var _rules_designer_this_response_expression_harness_this_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules-designer/this-response-expression-harness/this-response-expression-harness.component */ 3312);
/* harmony import */ var _scrollbar_harness_scrollbar_harness_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scrollbar-harness/scrollbar-harness.component */ 8402);
/* harmony import */ var _text_box_harness_text_box_harness_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-box-harness/text-box-harness.component */ 8511);
/* harmony import */ var _wizard_popup_sharepoint_create_references_harness_create_references_harness_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard-popup/sharepoint/create-references-harness/create-references-harness.component */ 666);
/* harmony import */ var _wizard_popup_sharepoint_summary_harness_summary_harness_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wizard-popup/sharepoint/summary-harness/summary-harness.component */ 7595);
/* harmony import */ var _tile_select_harness_tile_select_harness_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tile-select-harness/tile-select-harness.component */ 4852);
/* harmony import */ var _wizard_popup_wizard_popup_host_harness_wizard_popup_host_harness_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wizard-popup/wizard-popup-host-harness/wizard-popup-host-harness.component */ 5412);
/* harmony import */ var _config_panel_plugins_plugin_wizards_logic_steps_start_step_process_settings_tab_harness_process_settings_tab_harness_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config-panel/plugins/plugin-wizards/logic-steps/start-step/process-settings-tab-harness/process-settings-tab-harness.component */ 5155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);



















const routes = [
    {
        path: 'dd',
        component: _drop_down_harness_drop_down_harness_component__WEBPACK_IMPORTED_MODULE_2__.DropDownHarnessComponent
    },
    {
        path: 'scroll',
        component: _scrollbar_harness_scrollbar_harness_component__WEBPACK_IMPORTED_MODULE_9__.ScrollbarHarnessComponent
    },
    {
        path: 'gbo',
        component: _rules_designer_group_boolean_operator_expression_harness_group_boolean_operator_expression_harness_component__WEBPACK_IMPORTED_MODULE_7__.GroupBooleanOperatorExpressionHarnessComponent
    },
    {
        path: 'textbox',
        component: _text_box_harness_text_box_harness_component__WEBPACK_IMPORTED_MODULE_10__.TextBoxHarnessComponent
    },
    {
        path: 'choose',
        component: _choose_control_harness_choose_control_harness_component__WEBPACK_IMPORTED_MODULE_0__.ChooseControlHarnessComponent
    },
    {
        path: '',
        component: _dev_harness_component__WEBPACK_IMPORTED_MODULE_1__.DevHarnessComponent
    },
    {
        path: 'filter',
        component: _filter_control_harness_filter_control_harness_component__WEBPACK_IMPORTED_MODULE_3__.FilterControlHarnessComponent
    },
    {
        path: 'thisresponse',
        component: _rules_designer_this_response_expression_harness_this_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_8__.ThisResponseExpressionHarnessComponent
    },
    {
        path: 'resourceservice',
        component: _resource_service_harness_resource_service_harness_component__WEBPACK_IMPORTED_MODULE_5__.ResourceServiceHarnessComponent
    },
    {
        path: 'filterexpression',
        component: _rules_designer_expressions_filter_expression_harness_filter_expression_harness_component__WEBPACK_IMPORTED_MODULE_6__.FilterExpressionHarnessComponent
    },
    {
        path: 'listitem',
        component: _list_item_harness_list_item_harness_component__WEBPACK_IMPORTED_MODULE_4__.ListItemHarnessComponent
    },
    {
        path: 'create-references',
        component: _wizard_popup_sharepoint_create_references_harness_create_references_harness_component__WEBPACK_IMPORTED_MODULE_11__.CreateReferencesHarnessComponent
    },
    {
        path: 'sp-summary',
        component: _wizard_popup_sharepoint_summary_harness_summary_harness_component__WEBPACK_IMPORTED_MODULE_12__.SharePointSummaryHarnessComponent
    },
    {
        path: 'tileselect',
        component: _tile_select_harness_tile_select_harness_component__WEBPACK_IMPORTED_MODULE_13__.TileSelectHarnessComponent
    },
    {
        path: 'wizardpopup',
        component: _wizard_popup_wizard_popup_host_harness_wizard_popup_host_harness_component__WEBPACK_IMPORTED_MODULE_14__.WizardPopupHostHarnessComponent
    },
    {
        path: 'processsettings',
        component: _config_panel_plugins_plugin_wizards_logic_steps_start_step_process_settings_tab_harness_process_settings_tab_harness_component__WEBPACK_IMPORTED_MODULE_15__.ProcessSettingsTabHarnessComponent
    }
];
class DevHarnessRoutingModule {
}
DevHarnessRoutingModule.ɵfac = function DevHarnessRoutingModule_Factory(t) { return new (t || DevHarnessRoutingModule)(); };
DevHarnessRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: DevHarnessRoutingModule });
DevHarnessRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](DevHarnessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 8718:
/*!******************************************************!*\
  !*** ./src/app/dev-harness/dev-harness.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevHarnessComponent": () => (/* binding */ DevHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _drop_down_harness_drop_down_harness_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-down-harness/drop-down-harness.component */ 5710);
/* harmony import */ var _scrollbar_harness_scrollbar_harness_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollbar-harness/scrollbar-harness.component */ 8402);
/* harmony import */ var _rules_designer_group_boolean_operator_expression_harness_group_boolean_operator_expression_harness_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules-designer/group-boolean-operator-expression-harness/group-boolean-operator-expression-harness.component */ 5512);
/* harmony import */ var _plugin_wizards_harness_plugin_wizards_harness_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin-wizards-harness/plugin-wizards-harness.component */ 9648);
/* harmony import */ var _filter_control_harness_filter_control_harness_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-control-harness/filter-control-harness.component */ 7187);






class DevHarnessComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevHarnessComponent.ɵfac = function DevHarnessComponent_Factory(t) { return new (t || DevHarnessComponent)(); };
DevHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DevHarnessComponent, selectors: [["app-dev-harness"]], decls: 14, vars: 0, template: function DevHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Dev harness component");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "k2dev-drop-down-harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "k2-scrollbar-harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "k2-group-boolean-operator-expression-harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "k2-plugin-wizards-harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "k2-filter-control-harness");
    } }, directives: [_drop_down_harness_drop_down_harness_component__WEBPACK_IMPORTED_MODULE_0__.DropDownHarnessComponent, _scrollbar_harness_scrollbar_harness_component__WEBPACK_IMPORTED_MODULE_1__.ScrollbarHarnessComponent, _rules_designer_group_boolean_operator_expression_harness_group_boolean_operator_expression_harness_component__WEBPACK_IMPORTED_MODULE_2__.GroupBooleanOperatorExpressionHarnessComponent, _plugin_wizards_harness_plugin_wizards_harness_component__WEBPACK_IMPORTED_MODULE_3__.PluginWizardsHarnessComponent, _filter_control_harness_filter_control_harness_component__WEBPACK_IMPORTED_MODULE_4__.FilterControlHarnessComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtaGFybmVzcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 7171:
/*!***************************************************!*\
  !*** ./src/app/dev-harness/dev-harness.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevHarnessModule": () => (/* binding */ DevHarnessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _drop_down_harness_drop_down_harness_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-down-harness/drop-down-harness.component */ 5710);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _dev_harness_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev-harness.component */ 8718);
/* harmony import */ var _dev_harness_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev-harness-routing.module */ 7045);
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/upgrade/static */ 386);
/* harmony import */ var _scrollbar_harness_scrollbar_harness_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollbar-harness/scrollbar-harness.component */ 8402);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/directives.module */ 8434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _plugin_wizards_harness_plugin_wizards_harness_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugin-wizards-harness/plugin-wizards-harness.component */ 9648);
/* harmony import */ var _text_box_harness_text_box_harness_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-box-harness/text-box-harness.component */ 8511);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ 5503);
/* harmony import */ var _choose_control_harness_choose_control_harness_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choose-control-harness/choose-control-harness.component */ 9809);
/* harmony import */ var _filter_control_harness_filter_control_harness_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-control-harness/filter-control-harness.component */ 7187);
/* harmony import */ var _rules_designer_this_response_expression_harness_this_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules-designer/this-response-expression-harness/this-response-expression-harness.component */ 3312);
/* harmony import */ var _rules_designer_expressions_voting_response_expression_harness_voting_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules-designer/expressions/voting-response-expression-harness/voting-response-expression-harness.component */ 3785);
/* harmony import */ var _rules_designer_group_boolean_operator_expression_harness_group_boolean_operator_expression_harness_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules-designer/group-boolean-operator-expression-harness/group-boolean-operator-expression-harness.component */ 5512);
/* harmony import */ var _resource_service_harness_resource_service_harness_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resource-service-harness/resource-service-harness.component */ 2074);
/* harmony import */ var src_testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/testing/utilities/EnsureNamespaces */ 5459);
/* harmony import */ var _shared_constants_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/constants/components */ 614);
/* harmony import */ var _list_item_harness_list_item_harness_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list-item-harness/list-item-harness.component */ 5972);
/* harmony import */ var _rules_designer_expressions_filter_expression_harness_filter_expression_harness_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules-designer/expressions/filter-expression-harness/filter-expression-harness.component */ 4947);
/* harmony import */ var _wizard_popup_sharepoint_create_references_harness_create_references_harness_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wizard-popup/sharepoint/create-references-harness/create-references-harness.component */ 666);
/* harmony import */ var _wizard_popup_sharepoint_summary_harness_summary_harness_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./wizard-popup/sharepoint/summary-harness/summary-harness.component */ 7595);
/* harmony import */ var _wizard_popup_wizard_popup_host_harness_wizard_popup_host_harness_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wizard-popup/wizard-popup-host-harness/wizard-popup-host-harness.component */ 5412);
/* harmony import */ var _wizard_popup_wizard_popup_host_harness_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wizard-popup/wizard-popup-host-harness/page-one/page-one.component */ 7356);
/* harmony import */ var _wizard_popup_wizard_popup_host_harness_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./wizard-popup/wizard-popup-host-harness/page-two/page-two.component */ 2668);
/* harmony import */ var _wizard_popup_wizard_popup_host_harness_page_three_page_three_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./wizard-popup/wizard-popup-host-harness/page-three/page-three.component */ 2412);
/* harmony import */ var _tile_select_harness_tile_select_harness_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tile-select-harness/tile-select-harness.component */ 4852);
/* harmony import */ var _config_panel_plugins_plugin_wizards_logic_steps_start_step_process_settings_tab_harness_process_settings_tab_harness_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./config-panel/plugins/plugin-wizards/logic-steps/start-step/process-settings-tab-harness/process-settings-tab-harness.component */ 5155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2316);































class DevHarnessModule {
    constructor() {
        this.component = {
            single: c => ({}),
            getReference: _ => 'root.objpath'
        };
        console.log('ensure namespaces');
        src_testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_15__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.core.externalReferenceDefinitions.ISmartObjectMethodField', {
            createInstance: (c) => (Object.assign(Object.assign({}, this.component), { componentId: _shared_constants_components__WEBPACK_IMPORTED_MODULE_16__.ComponentIdMapping.SmartObjectMethodFieldExternalReference }))
        });
        src_testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_15__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.workflow.configuredSmartFields.TextField', {
            createInstance: (c) => (Object.assign(Object.assign({}, this.component), { componentId: _shared_constants_components__WEBPACK_IMPORTED_MODULE_16__.ComponentIdMapping.TextSmartField }))
        });
        src_testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_15__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.core.externalReferenceDefinitions.SmartObjectPropertyField', {
            createInstance: (c) => (Object.assign(Object.assign({}, this.component), { componentId: _shared_constants_components__WEBPACK_IMPORTED_MODULE_16__.ComponentIdMapping.SmartObjectPropertyFieldExternalReference }))
        });
    }
}
DevHarnessModule.ɵfac = function DevHarnessModule_Factory(t) { return new (t || DevHarnessModule)(); };
DevHarnessModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: DevHarnessModule });
DevHarnessModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule,
            _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_29__.UpgradeModule,
            _dev_harness_routing_module__WEBPACK_IMPORTED_MODULE_3__.DevHarnessRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__.PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](DevHarnessModule, { declarations: [_drop_down_harness_drop_down_harness_component__WEBPACK_IMPORTED_MODULE_0__.DropDownHarnessComponent,
        _dev_harness_component__WEBPACK_IMPORTED_MODULE_2__.DevHarnessComponent,
        _scrollbar_harness_scrollbar_harness_component__WEBPACK_IMPORTED_MODULE_4__.ScrollbarHarnessComponent,
        _plugin_wizards_harness_plugin_wizards_harness_component__WEBPACK_IMPORTED_MODULE_6__.PluginWizardsHarnessComponent,
        _text_box_harness_text_box_harness_component__WEBPACK_IMPORTED_MODULE_7__.TextBoxHarnessComponent,
        _rules_designer_group_boolean_operator_expression_harness_group_boolean_operator_expression_harness_component__WEBPACK_IMPORTED_MODULE_13__.GroupBooleanOperatorExpressionHarnessComponent,
        _choose_control_harness_choose_control_harness_component__WEBPACK_IMPORTED_MODULE_9__.ChooseControlHarnessComponent,
        _filter_control_harness_filter_control_harness_component__WEBPACK_IMPORTED_MODULE_10__.FilterControlHarnessComponent,
        _rules_designer_this_response_expression_harness_this_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_11__.ThisResponseExpressionHarnessComponent,
        _rules_designer_expressions_voting_response_expression_harness_voting_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_12__.VotingResponseExpressionHarnessComponent,
        _resource_service_harness_resource_service_harness_component__WEBPACK_IMPORTED_MODULE_14__.ResourceServiceHarnessComponent,
        _rules_designer_expressions_voting_response_expression_harness_voting_response_expression_harness_component__WEBPACK_IMPORTED_MODULE_12__.VotingResponseExpressionHarnessComponent,
        _rules_designer_expressions_filter_expression_harness_filter_expression_harness_component__WEBPACK_IMPORTED_MODULE_18__.FilterExpressionHarnessComponent,
        _list_item_harness_list_item_harness_component__WEBPACK_IMPORTED_MODULE_17__.ListItemHarnessComponent,
        _wizard_popup_sharepoint_create_references_harness_create_references_harness_component__WEBPACK_IMPORTED_MODULE_19__.CreateReferencesHarnessComponent,
        _wizard_popup_sharepoint_summary_harness_summary_harness_component__WEBPACK_IMPORTED_MODULE_20__.SharePointSummaryHarnessComponent,
        _tile_select_harness_tile_select_harness_component__WEBPACK_IMPORTED_MODULE_25__.TileSelectHarnessComponent,
        _wizard_popup_wizard_popup_host_harness_wizard_popup_host_harness_component__WEBPACK_IMPORTED_MODULE_21__.WizardPopupHostHarnessComponent,
        _wizard_popup_wizard_popup_host_harness_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_22__.PageOneComponent,
        _wizard_popup_wizard_popup_host_harness_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_23__.PageTwoComponent,
        _wizard_popup_wizard_popup_host_harness_page_three_page_three_component__WEBPACK_IMPORTED_MODULE_24__.PageThreeComponent,
        _config_panel_plugins_plugin_wizards_logic_steps_start_step_process_settings_tab_harness_process_settings_tab_harness_component__WEBPACK_IMPORTED_MODULE_26__.ProcessSettingsTabHarnessComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule,
        _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_29__.UpgradeModule,
        _dev_harness_routing_module__WEBPACK_IMPORTED_MODULE_3__.DevHarnessRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__.DirectivesModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__.PipesModule] }); })();


/***/ }),

/***/ 5710:
/*!******************************************************************************!*\
  !*** ./src/app/dev-harness/drop-down-harness/drop-down-harness.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDownHarnessComponent": () => (/* binding */ DropDownHarnessComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-alignment */ 6864);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-triangle-position */ 6831);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-item-templates */ 8372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_common_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/drop-down/drop-down.component */ 2491);






function DropDownHarnessComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "k2-drop-down", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_div_10_Template_k2_drop_down_onItemSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r1.selectItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx_r0.dropdownMenuAlignment.centered)("trianglePosition", ctx_r0.dropDownMenuTrianglePosition.center)("menuItems", ctx_r0.groupBooleanOperatorItems)("isMultiSelect", false)("innerItemComponent", ctx_r0.dropdownMenuItemTemplate.GroupBooleanOperatorExpression)("footerItems", ctx_r0.footerItems)("customMenuClass", "the-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.title);
} }
class DropDownHarnessComponent {
    constructor() {
        this.isDropdownVisible = true;
        this.commandItems = [
            {
                title: 'Browse',
                key: 'browse',
                icon: 'icon-set-toolbox ic-category',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'TypeConstructMyOwn',
                key: 'typeConstructMyOwn',
                icon: 'icon-set-toolbar ic-edit',
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.defaultItems = [
            {
                title: 'Item 1',
                key: 'item1',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Item 2',
                key: 'item2',
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.groupBooleanOperatorItems = [{
                key: 'AND',
                isSeparator: false,
                title: 'AND',
                isSelected: true,
                ignoreUpdateSelection: false
            }, {
                key: 'seperator-1',
                isSeparator: true
            }, {
                key: 'OR',
                isSeparator: false,
                title: 'OR',
                isSelected: false
            }, {
                key: 'seperator-1',
                isSeparator: true
            }, {
                key: 'g',
                icon: 'icon icon-set-conditionsdropdown icon-size16 ic-groupconditions',
                isSeparator: false,
                title: 'Group Conditions',
                ignoreUpdateSelection: true,
                onSelected: () => { console.log('Do Group condition'); }
            }, {
                key: 'c',
                icon: 'icon icon-set-rulestoolbar icon-size16 ic-condition',
                isSeparator: false,
                title: 'Add Condition',
                ignoreUpdateSelection: true,
                onSelected: () => { console.log('Do add condition'); }
            }, {
                key: 't',
                icon: 'icon icon-set-rulestoolbar icon-size16 ic-taskcondition',
                isSeparator: false,
                title: 'Add Task Condition',
                ignoreUpdateSelection: true,
                onSelected: () => { console.log('Do add task condition'); }
            }];
        this.footerItems = [{
                key: 'f1',
                isSeparator: false,
                title: 'footer item',
                isSelected: false,
                ignoreUpdateSelection: false,
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.Command
            }, {
                key: 'seperator-f1',
                isSeparator: true
            }, {
                key: 'f2',
                isSeparator: false,
                title: 'Footer method',
                isSelected: false,
                ignoreUpdateSelection: true,
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.Command,
                onSelected: () => {
                    console.log('footer last item');
                }
            }];
        this.disabledItems = [
            {
                title: 'Item 1',
                key: 'item1',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Item 2',
                key: 'item2',
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.referenceItems = [
            {
                key: 'reference1',
                title: 'Item Reference 1',
                isSelected: false,
                icon: 'sprite-no-icon16',
                onSelected: this.selectItem.bind(this)
            },
            {
                key: 'reference2',
                title: 'Item Reference 2',
                isSelected: false,
                icon: 'sprite-no-icon16',
                onSelected: this.selectItem.bind(this)
            }
        ];
        this.referenceMultiItems = [
            {
                key: 'reference1',
                title: 'Item Reference 1',
                isSelected: false,
                icon: 'sprite-no-icon16',
                onSelected: this.selectItem.bind(this)
            },
            {
                key: 'reference2',
                title: 'Item Reference 2',
                isSelected: false,
                icon: 'sprite-no-icon16',
                onSelected: this.selectItem.bind(this)
            }
        ];
        this.rulesDestinationItems = [
            {
                title: 'Rule 1',
                key: 'rule1',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Rule 2',
                key: 'rule2',
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.rulesOutcomeItems = [
            {
                title: 'Outcome 1',
                key: 'outcome1',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Outcome 2',
                key: 'outcome2',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Outcome 3',
                key: 'outcome3',
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.simpleExpressionItems = [
            {
                title: 'Simple 1',
                key: 'simple1',
                icon: 'sprite-no-icon16',
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Simple 2',
                key: 'simple2',
                icon: 'sprite-no-icon16',
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.smoFilterItems = [
            {
                key: 'filter1',
                title: 'Filter 1',
                icon: 'icon icon-sprite icon-set-datatypes icon-size24 selected ',
                isSelected: false
            },
            {
                key: 'filter2',
                title: 'Filter 2',
                icon: 'icon icon-sprite icon-set-datatypes icon-size24 selected ',
                isSelected: false
            }
        ];
        this.mixedItems = [
            {
                title: 'Command',
                key: 'command',
                icon: 'icon-set-toolbox ic-category',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.Command,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Default',
                key: 'default',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.Default,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Group Boolean',
                key: 'groupbool',
                icon: 'icon-set-toolbox ic-category',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.GroupBooleanOperatorExpression,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Disabled',
                key: 'disabled',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.Disabled,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Reference',
                key: 'reference',
                icon: 'icon-set-toolbox ic-category',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.Reference,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Reference Multi',
                key: 'referencemulti',
                icon: 'icon-set-toolbar ic-edit',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.ReferenceMulti,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Rules Destination',
                key: 'rulesdest',
                icon: 'icon-set-toolbox ic-category',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.RulesDestinationSet,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Rules Outcome',
                key: 'rulesoutcome',
                icon: 'icon-set-toolbar ic-edit',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.RulesOutcome,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Simple Expression',
                key: 'typeConstructMyOwn',
                icon: 'icon-set-toolbar ic-edit',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.SimpleExpressionOperator,
                onSelected: this.selectItem.bind(this),
            },
            {
                title: 'Filter',
                key: 'filter',
                icon: 'icon-set-toolbar ic-edit',
                innerItemComponent: src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates.SmartFieldSmoFilter,
                onSelected: this.selectItem.bind(this),
            }
        ];
        this.selectedKey = 'key';
        this.title = 'Selected Title';
        this.dropdownMenuAlignment = src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_0__.DropDownMenuAlignment;
        this.dropDownMenuTrianglePosition = src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_1__.DropDownMenuTrianglePosition;
        this.dropdownMenuItemTemplate = src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates;
        this.taskEx = {
            items: [
                {
                    title: 't1',
                    titleBinding: {
                        objectReference: {
                            _clientSideOnlyProperties: ['childErrorInformation'], _isBusyWithChangedEvent: false,
                            linkedParent: { type: 'action', reference: { _clientSideOnlyProperties: ['childErrorInformation'], _isBusyWithChangedEvent: false } }
                        },
                        propertyName: 'inferredTitle'
                    },
                    key: '1',
                    icon: 'icon icon-set-picker icon-size24 ic-outcomevoting',
                    isSelected: true
                },
                {
                    title: 't2',
                    titleBinding: {
                        objectReference: {
                            _clientSideOnlyProperties: ['childErrorInformation'],
                            _isBusyWithChangedEvent: false,
                            linkedParent: { type: 'action', reference: { _clientSideOnlyProperties: ['childErrorInformation'], _isBusyWithChangedEvent: false } }
                        },
                        propertyName: 'inferredTitle'
                    }, key: '2',
                    icon: 'icon icon-set-picker icon-size24 ic-outcomevoting',
                    isSelected: false
                }
            ],
            footerItems: [{
                    icon: 'icon icon-set-steps icon-size16 ic-delete',
                    innerItemComponent: 'Command',
                    isSeparator: false,
                    key: 'delete',
                    title: 'Delete'
                }]
        };
        this.getEmptyDropDownTemplate = (templateOption) => {
            if (templateOption === 'right') {
                return `<div class='empty-state-icon'>
    <span class='icon icon-set-picker icon-size24 ic-outcomevoting alt'></span>
</div>
<div class='empty-state-message'>
    <span>ruledesigner_taskCondition_taskStep_status_noOutcomes</span>
</div>`;
            }
            else {
                return `<div class='empty-state-icon'>
    <span class='icon icon-set-picker icon-size24 ic-outcometask'></span>
</div>
<div class='empty-state-message'>
    <spanruledesigner_taskCondition_taskStep_status_noTaskSteps</span>
</div>`;
            }
        };
    }
    ngOnInit() {
    }
    onDrop() {
    }
    getMultipleConditionDropdownItems() {
        return [];
    }
    selectItem(item) {
        if (item.isSelected) {
            this.title = item.title;
        }
    }
    setHide() {
        this.isDropdownVisible = false;
    }
    setShow() {
        this.isDropdownVisible = true;
    }
}
DropDownHarnessComponent.ɵfac = function DropDownHarnessComponent_Factory(t) { return new (t || DropDownHarnessComponent)(); };
DropDownHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DropDownHarnessComponent, selectors: [["k2dev-drop-down-harness"]], decls: 52, vars: 58, consts: [[2, "height", "500px", "overflow", "scroll"], [2, "height", "2000px"], [3, "click"], ["class", "rules", 4, "ngIf"], ["data-get-menu-items", "getMultipleConditionDropdownItems", "data-selected-item-key", "selectedKey", 1, "group-operator", 3, "menuAlignment", "trianglePosition", "menuItems", "isMultiSelect", "innerItemComponent", "onItemSelected"], ["selected-item", "", 1, "group-operator-icon"], [1, "task-condition-block"], ["tabindex", "0", 1, "task-condition-input", "task-condition-dropdown-right", 3, "click"], ["k2-drop-down", "", "customMenuClass", "task-condition-dropdown status-dropdown", 1, "k2-dropdown-parent", "task-condition-dropdown", 3, "menuAlignment", "menuItems", "footerItems", "trianglePosition", "isMultiSelect", "innerItemComponent", "emptyStateTemplate", "onItemSelected"], [1, "k2-dd-flexChild", "k2-dd-rowParent", "k2-dd-container", "k2-control", "k2-dropdown-div", "icon-container"], [1, "k2-dd-flexChild", "k2-dd-text", "outcome-dd-text"], [1, "outcome-activity-title"], [1, "k2-dd-flexChild", "k2-dd-dd-sprite"], [1, "icon", "icon-set-conditionsdropdown", "icon-size16", "ic-popoverarrow"], [1, "rules"], [1, "main-container"], ["k2Droppable", "", "k2Dropped", "onDrop()", "k2-droptypes", "ruleDesignerItem ruleDesignerItem", 1, "group-operator-block"], [1, "group-operator", 3, "menuAlignment", "trianglePosition", "menuItems", "isMultiSelect", "innerItemComponent", "footerItems", "customMenuClass", "onItemSelected"]], template: function DropDownHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mock Group Boolean Expression Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "These buttons are used to test what happends to stuff when the DD is destroyed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DropDownHarnessComponent_Template_button_click_6_listener() { return ctx.setHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Unload this DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DropDownHarnessComponent_Template_button_click_8_listener() { return ctx.setShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Load this DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DropDownHarnessComponent_div_10_Template, 6, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_11_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Command Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_14_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Default Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_17_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Group Boolean Operator Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_20_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Disabled Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_23_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Reference Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_26_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Reference Multi Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_29_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Rules Destination Set Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_32_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Rules Outcome Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_35_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Simple Expression Operator Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "k2-drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_38_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Mixed Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Task expression outcome dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DropDownHarnessComponent_Template_div_click_44_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "k2-drop-down", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onItemSelected", function DropDownHarnessComponent_Template_k2_drop_down_onItemSelected_45_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Outcome Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDropdownVisible === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("menuItems", ctx.commandItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.Command);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("menuItems", ctx.defaultItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.Default);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("menuItems", ctx.groupBooleanOperatorItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.GroupBooleanOperatorExpression);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("menuItems", ctx.disabledItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.Disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("menuItems", ctx.referenceItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.Reference);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("menuItems", ctx.referenceMultiItems)("isMultiSelect", true)("innerItemComponent", ctx.dropdownMenuItemTemplate.ReferenceMulti);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.right)("menuItems", ctx.rulesDestinationItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.RulesDestinationSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.left)("menuItems", ctx.rulesOutcomeItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.RulesOutcome);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.left)("menuItems", ctx.simpleExpressionItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.SimpleExpressionOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("trianglePosition", ctx.dropDownMenuTrianglePosition.right)("menuItems", ctx.mixedItems)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.SmartFieldSmoFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuAlignment", ctx.dropdownMenuAlignment.centered)("menuItems", ctx.taskEx.items)("footerItems", ctx.taskEx.footerItems)("trianglePosition", ctx.dropDownMenuTrianglePosition.center)("isMultiSelect", false)("innerItemComponent", ctx.dropdownMenuItemTemplate.RulesOutcome)("emptyStateTemplate", ctx.getEmptyDropDownTemplate("right"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_common_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_3__.DropDownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wLWRvd24taGFybmVzcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 7187:
/*!****************************************************************************************!*\
  !*** ./src/app/dev-harness/filter-control-harness/filter-control-harness.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterControlHarnessComponent": () => (/* binding */ FilterControlHarnessComponent)
/* harmony export */ });
/* harmony import */ var _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/utilities/EnsureNamespaces */ 5459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_common_filter_control_filter_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common/filter-control/filter-control.component */ 3716);



class FilterControlHarnessComponent {
    constructor() {
        _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.core', null);
        _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.core.configuredRules', null);
        _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.core.configuredRules.ConfiguredComplexLogicalGroupExpression', {
            implementor: ''
        });
        this.configuredFilter = {
            expressions: [
                {
                    instanceOf: () => false
                }
            ]
        };
        this.configuredFilter.expressions.listen = () => { };
        this.properties = [
            {
                title: 'Browse',
                key: 'browse',
                icon: 'icon-set-toolbox ic-category'
            }
        ];
        this.initialStateDescription = 'Harness Filter';
    }
    ngOnInit() {
    }
}
FilterControlHarnessComponent.ɵfac = function FilterControlHarnessComponent_Factory(t) { return new (t || FilterControlHarnessComponent)(); };
FilterControlHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FilterControlHarnessComponent, selectors: [["k2-filter-control-harness"]], decls: 4, vars: 3, consts: [[3, "properties", "configuredFilter", "initialStateDescription"]], template: function FilterControlHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Filter Control Harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "k2-filter-control", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("properties", ctx.properties)("configuredFilter", ctx.configuredFilter)("initialStateDescription", ctx.initialStateDescription);
    } }, directives: [_components_common_filter_control_filter_control_component__WEBPACK_IMPORTED_MODULE_1__.FilterControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY29udHJvbC1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 5972:
/*!******************************************************************************!*\
  !*** ./src/app/dev-harness/list-item-harness/list-item-harness.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemHarnessComponent": () => (/* binding */ ListItemHarnessComponent)
/* harmony export */ });
/* harmony import */ var _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/utilities/EnsureNamespaces */ 5459);
/* harmony import */ var _shared_constants_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/list-item */ 9391);
/* harmony import */ var _shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enums/drop-down/drop-down-menu-item-templates */ 8372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_common_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/list-item/list-item.component */ 2751);





class ListItemHarnessComponent {
    constructor() {
        /**
         * TODO: Investigate and find a way for dev-harness components to display when they include "upgraded" components.
         * The ListItem component includes the k2-badge component, which calls super on its parent that does not exist without the K2DesignerHost project
         */
        this.formIcon = _shared_constants_list_item__WEBPACK_IMPORTED_MODULE_1__.listItemIcons.formIcon;
        this.dropdownMenuItemTemplate = _shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates;
        this.dropdownItems = [];
        this.listItemModel = {};
        _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.core.configuredSmartFields.IExpression', null);
    }
    ngOnInit() {
    }
    textBoxButtonClicked() {
    }
    toggleButtonClicked() {
    }
    dropDownItemSelected(item) {
    }
}
ListItemHarnessComponent.ɵfac = function ListItemHarnessComponent_Factory(t) { return new (t || ListItemHarnessComponent)(); };
ListItemHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListItemHarnessComponent, selectors: [["k2-list-item-harness"]], decls: 4, vars: 11, consts: [[3, "dropDownMenuItemTemplate", "leftIconData", "rightIconData", "shouldShowDropDown", "menuItems", "listItemModel", "shouldShowToggleTextbox", "shouldAllowDrop", "isEditable", "isSortable", "shouldHideBrowseButton", "textBoxButtonClicked", "toggleTextBoxButtonClicked", "dropDownItemSelected"]], template: function ListItemHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mock List Item Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "k2-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("textBoxButtonClicked", function ListItemHarnessComponent_Template_k2_list_item_textBoxButtonClicked_3_listener() { return ctx.textBoxButtonClicked(); })("toggleTextBoxButtonClicked", function ListItemHarnessComponent_Template_k2_list_item_toggleTextBoxButtonClicked_3_listener() { return ctx.toggleButtonClicked(); })("dropDownItemSelected", function ListItemHarnessComponent_Template_k2_list_item_dropDownItemSelected_3_listener($event) { return ctx.dropDownItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dropDownMenuItemTemplate", ctx.dropdownMenuItemTemplate.Recipient)("leftIconData", ctx.formIcon)("rightIconData", ctx.formIcon)("shouldShowDropDown", true)("menuItems", ctx.dropdownItems)("listItemModel", ctx.listItemModel)("shouldShowToggleTextbox", true)("shouldAllowDrop", true)("isEditable", true)("isSortable", false)("shouldHideBrowseButton", true);
    } }, directives: [_components_common_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__.ListItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWl0ZW0taGFybmVzcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 9648:
/*!****************************************************************************************!*\
  !*** ./src/app/dev-harness/plugin-wizards-harness/plugin-wizards-harness.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginWizardsHarnessComponent": () => (/* binding */ PluginWizardsHarnessComponent)
/* harmony export */ });
/* harmony import */ var _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/utilities/EnsureNamespaces */ 5459);
/* harmony import */ var _testing_utilities_TestUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/utilities/TestUtilities */ 5744);
/* harmony import */ var src_app_services_environment_environment_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/environment/environment-service-factory */ 3452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_wizard_popup_smartforms_configure_start_rule_configure_start_rule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wizard-popup/smartforms/configure-start-rule/configure-start-rule.component */ 7435);





class PluginWizardsHarnessComponent {
    constructor(_el) {
        this._el = _el;
        //Ensure namespaces in sourceCode library
        _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__.Mocks.ensureNamespace('sourceCode.k2Designer.utilities', {
            shortUid: _testing_utilities_TestUtilities__WEBPACK_IMPORTED_MODULE_1__.TestUtilities.shortUid
        });
        //Test input:
        this.config = {
            context: {
                helper: {},
                rules: []
            }
        };
    }
    ngOnInit() {
    }
}
PluginWizardsHarnessComponent.ɵfac = function PluginWizardsHarnessComponent_Factory(t) { return new (t || PluginWizardsHarnessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef)); };
PluginWizardsHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PluginWizardsHarnessComponent, selectors: [["k2-plugin-wizards-harness"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_environment_environment_service_factory__WEBPACK_IMPORTED_MODULE_2__.EnvironmentServiceFactory])], decls: 8, vars: 1, consts: [[3, "config"]], template: function PluginWizardsHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Wizard plugins:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Configure start rule component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "k2-configure-start-rule", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config);
    } }, directives: [_components_wizard_popup_smartforms_configure_start_rule_configure_start_rule_component__WEBPACK_IMPORTED_MODULE_3__.ConfigureStartRuleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbHVnaW4td2l6YXJkcy1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 2074:
/*!********************************************************************************************!*\
  !*** ./src/app/dev-harness/resource-service-harness/resource-service-harness.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceServiceHarnessComponent": () => (/* binding */ ResourceServiceHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/resource/resource.service */ 7750);


class ResourceServiceHarnessComponent {
    constructor(_resourceService) {
        this._resourceService = _resourceService;
        this.textOne = '';
        this.textTwo = '';
        this.textThree = '';
    }
    ngOnInit() {
    }
    populateTextOne() {
        this._resourceService.getFromResx('resourceOne', 'keyOne').subscribe(msg => {
            this.textOne = msg;
        });
    }
    populateTextTwo() {
        this._resourceService.getFromResx('resourceOne', 'keyOne').subscribe(msg => {
            this.textTwo = msg;
        });
    }
    populateTextThree() {
        this._resourceService.getFromResx('resourceOne', 'keyOne').subscribe(msg => {
            this.textThree = msg;
        });
    }
}
ResourceServiceHarnessComponent.ɵfac = function ResourceServiceHarnessComponent_Factory(t) { return new (t || ResourceServiceHarnessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_0__.ResourceService)); };
ResourceServiceHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResourceServiceHarnessComponent, selectors: [["k2-resource-service"]], decls: 13, vars: 3, consts: [[3, "click"]], template: function ResourceServiceHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResourceServiceHarnessComponent_Template_button_click_7_listener() { return ctx.populateTextOne(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Text One");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResourceServiceHarnessComponent_Template_button_click_9_listener() { return ctx.populateTextTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Text Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResourceServiceHarnessComponent_Template_button_click_11_listener() { return ctx.populateTextThree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Text Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Text One: ", ctx.textOne, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Text Two: ", ctx.textTwo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Text Three: ", ctx.textThree, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZS1zZXJ2aWNlLWhhcm5lc3MuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 4947:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/dev-harness/rules-designer/expressions/filter-expression-harness/filter-expression-harness.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterExpressionHarnessComponent": () => (/* binding */ FilterExpressionHarnessComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/components */ 614);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-alignment */ 6864);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-item-templates */ 8372);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-triangle-position */ 6831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_ruleplugin_rule_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ruleplugin/rule-plugin-service */ 5852);
/* harmony import */ var _components_rules_designer_expressions_filter_expression_filter_expression_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/rules-designer/expressions/filter-expression/filter-expression.component */ 7236);







class FilterExpressionHarnessComponent {
    constructor(_rulePluginService) {
        this._rulePluginService = _rulePluginService;
        this.selectedK2Model = {
            index: 0
        };
        this.leftItems = [{ key: 'ID', title: 'ID', icon: 'icon-set-datatypes ic-guid', metaData: { type: 'Guid', componentId: 60041 }, internalId: 1, componentId: 60028, isSelected: false },
            { key: 'SectionName', title: 'SectionName', icon: 'icon-set-datatypes ic-text', metaData: { type: 'Text', componentId: 60041 }, internalId: 2, componentId: 60028, isSelected: false },
            { key: 'Name', title: 'Name', icon: 'icon-set-datatypes ic-text', metaData: { type: 'Text', componentId: 60041 }, internalId: 3, componentId: 60028, isSelected: false },
            { key: 'SettingKey', title: 'SettingKey', icon: 'icon-set-datatypes ic-text', metaData: { type: 'Text', componentId: 60041 }, internalId: 4, componentId: 60028, isSelected: false },
            { key: 'SettingValue', title: 'SettingValue', icon: 'icon-set-datatypes ic-text', metaData: { type: 'Text', componentId: 60041 }, internalId: 5, componentId: 60028, isSelected: false }];
        this.rightExpression = {
            componentId: src_app_shared_constants_components__WEBPACK_IMPORTED_MODULE_0__.ComponentIdMapping.k2ExpressionField,
            smartFields: []
        };
        this.externalDefinitionParent = {
            inputs: [
                {
                    isRequired: true,
                    systemName: 'SectionName',
                    type: 'text',
                    displayName: 'SectionName',
                    internalId: 1,
                    componentId: 70006
                }
            ],
            returns: [
                {
                    systemName: 'ID',
                    internalId: 1,
                    componentId: 70006
                },
                {
                    systemName: 'SectionName',
                    internalId: 2,
                    componentId: 70006
                },
                {
                    systemName: 'SettingKey',
                    internalId: 3,
                    componentId: 70006
                }
            ],
            systemName: 'GetList',
            internalId: 1,
            componentId: 70005
        };
        this.sortable = false;
        this.alternateColour = false;
        this.nested = false;
        this.selectedKey = 'key';
        this.title = 'Selected Title';
        this.dropdownMenuAlignment = src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_1__.DropDownMenuAlignment;
        this.dropDownMenuTrianglePosition = src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_3__.DropDownMenuTrianglePosition;
        this.dropdownMenuItemTemplate = src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates;
        this.item = {
            componentId: 80013,
            directive: 'k2-this-response-expression',
            internalId: 1,
            leftOperandType: '',
            lelftOperandValue: {
                componentId: src_app_shared_constants_components__WEBPACK_IMPORTED_MODULE_0__.ComponentIdMapping.k2ExpressionField,
                smartFields: [
                    {
                        componentId: 10004,
                        internalId: 1
                    }
                ]
            },
            logicalOperator: '',
            specialOperator: '',
            taskActionReference: 'root.nodes[{\'internalId\':2}].children[{\'internalId\':1}].configuration.actions[{\'internalId\':1}]',
            taskActionTitle: 'Approve',
            rightExpression: this.rightExpression,
            listen: () => { }
        };
        this.externalDefinitionParent.returns.single = (criteria) => this.externalDefinitionParent.returns.find(x => x.systemName === this.externalDefinitionParent.systemName);
        this.externalDefinitionParent.inputs.single = (criteria) => this.externalDefinitionParent.inputs.find(x => x.systemName === this.externalDefinitionParent.systemName);
        this.rightExpression.smartFields.listen = () => () => { };
        _rulePluginService.setDesignerContext('ruleDesignerHarness', {
            getLogicalParentModel: () => ({}),
            getParentModel: () => ({
                actionStatementRuleType: 4,
                actions: [
                    {
                        actionTitle: 'Approve',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 1,
                        oldReference: 'root.nodes[{\'internalId\':2}].children[{\'internalId\':1}].configuration.actions[{\'internalId\':1}]',
                        originalTitle: 'Approve',
                        getReference: () => 'root.test1'
                    },
                    {
                        actionTitle: 'Reject',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 2,
                        oldReference: 'root.nodes[{\'internalId\':2}].children[{\'internalId\':1}].configuration.actions[{\'internalId\':2}]',
                        originalTitle: 'Reject',
                        getReference: () => 'root.test2'
                    },
                    {
                        actionTitle: 'Action 1',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 3,
                        oldReference: 'root.nodes[{\'internalId\':2}].children[{\'internalId\':1}].configuration.actions[{\'internalId\':3}]',
                        originalTitle: 'Action 1',
                        getReference: () => 'root.test3'
                    },
                    {
                        actionTitle: 'Action 2',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 4,
                        oldReference: 'root.nodes[{\'internalId\':2}].children[{\'internalId\':1}].configuration.actions[{\'internalId\':4}]',
                        originalTitle: 'Action 2',
                        getReference: () => 'root.test4'
                    }
                ],
                allRecipients: true,
                componentId: 30010,
                destinationSets: [
                    {
                        componentId: 80010,
                        destinationItems: [
                            {
                                componentId: 10008,
                                internalId: 1,
                                smartFields: [
                                    {
                                        componentId: 10009,
                                        customTitle: 'Originator',
                                        fieldName: 'ProcessOriginatorFQN',
                                        internalId: 1,
                                        parentName: 'Originator\'s',
                                        title: 'FQN'
                                    }
                                ],
                                type: 'User'
                            }
                        ],
                        internalId: 1,
                        isRecipient: true,
                        title: 'Originator'
                    }
                ],
                destintationRule: {
                    componentId: 80102,
                    statements: [
                        {
                            IfExpressions: [
                                {
                                    componentId: 80004,
                                    directive: 'k2-group-expression',
                                    expressions: [
                                        {
                                            componentId: 80000,
                                            directive: 'k2-simple-expression',
                                            internalId: 1,
                                            leftExpression: {
                                                componentId: 80003,
                                                directive: 'k2-endpoint',
                                                value: {
                                                    componentId: 10008
                                                }
                                            },
                                            logicalOperator: 'equals',
                                            rightExpression: {
                                                componentId: 80003,
                                                directive: 'k2-endpoint',
                                                value: {
                                                    componentId: 10008
                                                }
                                            }
                                        }
                                    ],
                                    internalId: 1
                                }
                            ],
                            componentId: 80012,
                            elseStatements: [
                                {
                                    componentId: 30024,
                                    directive: 'k2-destination-set-statement',
                                    internalId: 1
                                }
                            ],
                            internalId: 1,
                            thenStatements: [
                                {
                                    componentId: 30024,
                                    directive: 'k2-destination-set-statement',
                                    internalId: 1
                                }
                            ]
                        }
                    ]
                },
                emailConfiguration: {
                    bcc: [
                        {
                            componentId: 10008,
                            internalId: 1,
                            isDecoratedPart: true
                        }
                    ],
                    body: {
                        componentId: 10008,
                        richText: true,
                        smartFields: [
                            {
                                componentId: 10004,
                                internalId: 9,
                                text: 'Dear&nbsp;'
                            },
                            {
                                componentId: 10009,
                                fieldName: 'ActivityInstanceDestUserDisplayName',
                                internalId: 2,
                                parentName: 'Task',
                                title: 'Participant Name'
                            },
                            {
                                componentId: 10004,
                                internalId: 10,
                                text: ',<br><br>Use the following link to open the worklist item:<br>'
                            },
                            {
                                assemblyId: 2,
                                className: 'SourceCode.Workflow.Functions.HTMLHelper',
                                componentId: 10002,
                                functionName: 'CreateHyperlink',
                                internalId: 8,
                                methodReturnType: 'System.String',
                                parameters: [
                                    {
                                        componentId: 10017,
                                        internalId: 1,
                                        parameterType: 'System.String',
                                        title: 'DisplayName',
                                        value: {
                                            componentId: 10008,
                                            smartFields: [
                                                {
                                                    componentId: 10004,
                                                    internalId: 1,
                                                    text: 'Click to open worklist item'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        componentId: 10017,
                                        internalId: 2,
                                        parameterType: 'System.String',
                                        title: 'URL',
                                        value: {
                                            componentId: 10008,
                                            smartFields: [
                                                {
                                                    componentId: 10009,
                                                    fieldName: 'WorkFlowItemContextData',
                                                    internalId: 1,
                                                    parentName: 'Task',
                                                    title: 'Worklist Item Link'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                returnType: 1,
                                title: 'Worklist Item Link'
                            }
                        ]
                    },
                    cc: [
                        {
                            componentId: 10008,
                            internalId: 1,
                            isDecoratedPart: true
                        }
                    ],
                    componentId: 30006,
                    exceptionSettings: {
                        componentId: 50012,
                        logException: true
                    },
                    from: {
                        componentId: 10008,
                        smartFields: [
                            {
                                componentId: 10001,
                                environmentFieldReference: 'root.externalReferenceDefinitions[{\'internalId\':1}]',
                                internalId: 1,
                                title: 'From Address'
                            }
                        ]
                    },
                    subject: {
                        componentId: 10008
                    }
                },
                exceptionSettings: {
                    componentId: 50012,
                    logException: true
                },
                formConfiguration: {
                    componentId: 30030,
                    parameters: [
                        {
                            componentId: 30018,
                            internalId: 1,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Serial Number',
                                        internalId: 1,
                                        text: 'SN'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10009,
                                        fieldName: 'SerialNo',
                                        internalId: 1,
                                        parentName: 'Task',
                                        title: 'Serial Number'
                                    }
                                ]
                            }
                        },
                        {
                            componentId: 30018,
                            internalId: 2,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Content Title',
                                        internalId: 1,
                                        text: '_title'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008
                            }
                        },
                        {
                            componentId: 30018,
                            internalId: 3,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Content URL',
                                        internalId: 1,
                                        text: '_url'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008
                            }
                        },
                        {
                            componentId: 30018,
                            internalId: 4,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Embed Content on the Form',
                                        internalId: 1,
                                        text: '_embed'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008
                            }
                        }
                    ],
                    url: {
                        componentId: 10008,
                        smartFields: [
                            {
                                componentId: 10006,
                                internalId: 1,
                                smartFormFieldReference: 'root.externalReferenceDefinitions[{\'internalId\':2}]'
                            }
                        ]
                    }
                },
                instruction: {
                    componentId: 10008,
                    multiLine: true
                },
                selectedFormTypeText: 'Basic Task Form',
                sendNotification: true,
                slots: {
                    componentId: 10008
                },
                timeLine: {
                    componentId: 30025,
                    expressDays: {
                        componentId: 10008
                    },
                    expressHours: {
                        componentId: 10008
                    },
                    expressMinutes: {
                        componentId: 10008
                    },
                    expressSeconds: {
                        componentId: 10008
                    },
                    isDefaultWorkingHours: true,
                    noDeadline: true,
                    specificDate: {
                        componentId: 10008
                    },
                    withinWorkingHoursOnly: true
                },
                useStandardTemplate: true,
                votingResolveGroupsToIndividuals: true,
                votingRule: {
                    componentId: 80105,
                    statements: [
                        {
                            IfExpressions: [
                                {
                                    componentId: 80004,
                                    directive: 'k2-group-expression',
                                    expressions: [
                                        {
                                            componentId: 80013,
                                            directive: 'k2-this-response-expression',
                                            internalId: 1,
                                            leftOperandType: 'everyResponse',
                                            leftOperandValue: {
                                                componentId: 10008,
                                                smartFields: [
                                                    {
                                                        componentId: 10004,
                                                        internalId: 1
                                                    }
                                                ]
                                            },
                                            logicalOperator: 'equals',
                                            specialOperator: 'equals'
                                        }
                                    ],
                                    internalId: 1
                                }
                            ],
                            componentId: 80014,
                            elseStatements: [
                                {
                                    componentId: 80006,
                                    directive: 'k2-outcome-statement',
                                    internalId: 1
                                }
                            ],
                            internalId: 1,
                            thenStatements: [
                                {
                                    componentId: 80006,
                                    directive: 'k2-outcome-statement',
                                    internalId: 1
                                }
                            ]
                        }
                    ]
                },
                votingRuleConsensusSelectedOutcomeReference: 'root.nodes[{\'internalId\':2}].configuration.outcomes[{\'internalId\':1}]'
            }),
        }, () => { });
    }
    ngOnInit() {
        Object.defineProperty(this.item, 'leftOperandExtended', {
            enumerable: false,
            configurable: false,
            get: () => {
                if (!!!this.item.leftOperandValue) {
                    this.item.leftOperandValue = {
                        smartFields: [
                            {
                                text: ''
                            }
                        ],
                        richText: false
                    };
                }
                return this.item.leftOperandValue;
            },
            set: (value) => {
                this.item.leftOperandValue = value;
            }
        });
        const operandValueText = {};
        operandValueText.noResponse = 'No Response';
        operandValueText.everyResponse = 'Every Response';
        Object.defineProperty(this.item, 'leftOperandValueText', {
            enumerable: false,
            configurable: false,
            get: () => operandValueText[this.item.leftOperandType]
        });
    }
    onDrop() {
        console.log('onDrop');
    }
    onDropTop() {
        console.log('onDrop');
    }
    onDropBottom() {
        console.log('drop bottom');
    }
    expressionSelected(a, b) {
        console.log('expression selected');
    }
    selectName() {
        this.leftItems.find(x => { x.isSelected = false; return x.key === 'Name'; }).isSelected = true;
    }
}
FilterExpressionHarnessComponent.ɵfac = function FilterExpressionHarnessComponent_Factory(t) { return new (t || FilterExpressionHarnessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_ruleplugin_rule_plugin_service__WEBPACK_IMPORTED_MODULE_4__.RulePluginService)); };
FilterExpressionHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FilterExpressionHarnessComponent, selectors: [["k2-filter-expression-harness"]], decls: 13, vars: 4, consts: [[1, "k2-general-control-disabled", "k2-filter-control", "ng-isolate-scope"], [1, "normal-state", "ng-scope"], [1, "content"], [1, "ruleFadeIn", "ng-isolate-scope"], [1, "complex-element", "shadow", "ng-isolate-scope"], [1, "ng-scope", "sorting"], [1, "ng-pristine", "ng-untouched", "ng-valid", "ng-isolate-scope", "ui-sortable", "ng-not-empty"], [1, "fadeMeIn", "expression-repeat", "ng-scope"], ["k2-scrollbar-focus", "", "index", "0", 1, "k2-expression-item", 3, "selectedIndex", "expression", "leftItems", "externalDefinitionParent", "onGroupExpressionDropped"], [1, "expression-top-empty-row", "expression-empty-row", "ng-isolate-scope"], [1, "expression-bottom-empty-row", "expression-empty-row", "ng-isolate-scope"], [3, "click"]], template: function FilterExpressionHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "k2-filter-expression", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onGroupExpressionDropped", function FilterExpressionHarnessComponent_Template_k2_filter_expression_onGroupExpressionDropped_8_listener() { return ctx.onDrop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterExpressionHarnessComponent_Template_button_click_11_listener() { return ctx.selectName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Select Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedIndex", ctx.selectedK2Model.index)("expression", ctx.item)("leftItems", ctx.leftItems)("externalDefinitionParent", ctx.externalDefinitionParent);
    } }, directives: [_components_rules_designer_expressions_filter_expression_filter_expression_component__WEBPACK_IMPORTED_MODULE_5__.FilterExpressionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItZXhwcmVzc2lvbi1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 3785:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/dev-harness/rules-designer/expressions/voting-response-expression-harness/voting-response-expression-harness.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VotingResponseExpressionHarnessComponent": () => (/* binding */ VotingResponseExpressionHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class VotingResponseExpressionHarnessComponent {
    constructor() { }
    ngOnInit() {
    }
}
VotingResponseExpressionHarnessComponent.ɵfac = function VotingResponseExpressionHarnessComponent_Factory(t) { return new (t || VotingResponseExpressionHarnessComponent)(); };
VotingResponseExpressionHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VotingResponseExpressionHarnessComponent, selectors: [["k2-voting-response-expression-harness"]], decls: 2, vars: 0, template: function VotingResponseExpressionHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "voting-response-expression-harness works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3RpbmctcmVzcG9uc2UtZXhwcmVzc2lvbi1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 5512:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/dev-harness/rules-designer/group-boolean-operator-expression-harness/group-boolean-operator-expression-harness.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBooleanOperatorExpressionHarnessComponent": () => (/* binding */ GroupBooleanOperatorExpressionHarnessComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-alignment */ 6864);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-item-templates */ 8372);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-triangle-position */ 6831);
/* harmony import */ var src_app_shared_enums_rules_complex_operator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/rules/complex-operator */ 6308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_ruleplugin_rule_plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ruleplugin/rule-plugin-service */ 5852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_rules_designer_expressions_group_boolean_operator_expression_group_boolean_operator_expression_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/rules-designer/expressions/group-boolean-operator-expression/group-boolean-operator-expression.component */ 8645);








function GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_div_1_k2_group_boolean_operator_expression_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "k2-group-boolean-operator-expression", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onGroupOptionSelected", function GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_div_1_k2_group_boolean_operator_expression_1_Template_k2_group_boolean_operator_expression_onGroupOptionSelected_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r5.onGroupOptionSelected(ctx_r5.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("configuredGroupOperator", ctx_r4.itm)("index", idx_r3);
} }
function GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_div_1_k2_group_boolean_operator_expression_1_Template, 1, 2, "k2-group-boolean-operator-expression", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.itm.directive === "k2-group-boolean-operator-expression");
} }
function GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.k2Model.expressions);
} }
const _c0 = function (a0, a1, a2) { return { "nested": a0, "alternate": a1, "multi-expressions": a2 }; };
class GroupBooleanOperatorExpressionHarnessComponent {
    constructor(_rulePluginService) {
        this._rulePluginService = _rulePluginService;
        this.k2Model = {
            expressions: [{}]
        };
        this.sortable = false;
        this.alternateColour = false;
        this.nested = false;
        this.selectedKey = 'key';
        this.title = 'Selected Title';
        this.dropdownMenuAlignment = src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_0__.DropDownMenuAlignment;
        this.dropDownMenuTrianglePosition = src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_2__.DropDownMenuTrianglePosition;
        this.dropdownMenuItemTemplate = src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuItemTemplates;
        this.itm = {
            expressionOperator: src_app_shared_enums_rules_complex_operator__WEBPACK_IMPORTED_MODULE_3__.ComplexOperator.And,
            directive: 'k2-group-boolean-operator-expression',
            listen: (() => { }),
            getParentModel: (() => ({
                indexOf: () => 0,
                splice: (i, len, expression) => { }
            })),
        };
        _rulePluginService.setDesignerContext('ruleDesignerHarness', {}, () => { });
    }
    ngOnInit() {
    }
    onDrop() {
        console.log('onDrop');
    }
    onDropTop() {
        console.log('onDrop');
    }
    onDropBottom() {
        console.log('drop bottom');
    }
    onGroupOptionSelected(index) {
        console.log('on group option selected - groupConditions');
    }
}
GroupBooleanOperatorExpressionHarnessComponent.ɵfac = function GroupBooleanOperatorExpressionHarnessComponent_Factory(t) { return new (t || GroupBooleanOperatorExpressionHarnessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_ruleplugin_rule_plugin_service__WEBPACK_IMPORTED_MODULE_4__.RulePluginService)); };
GroupBooleanOperatorExpressionHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GroupBooleanOperatorExpressionHarnessComponent, selectors: [["k2-group-boolean-operator-expression-harness"]], decls: 4, vars: 6, consts: [["k2-droppable", "", "k2-dropped", "onDrop()", "k2-droptypes", "ruleDesignerItem smartField configuredSmartField", 1, "complex-element", "shadow", 3, "ngClass"], ["k2-droppable", "", "k2-dropped", "onDropTop()", 1, "expression-top-empty-row", "expression-empty-row"], [4, "ngIf"], ["k2-droppable", "", "k2-dropped", "onDropBottom()", 1, "expression-bottom-empty-row", "expression-empty-row"], ["class", "fadeMeIn", 4, "ngFor", "ngForOf"], [1, "fadeMeIn"], [3, "configuredGroupOperator", "index", "onGroupOptionSelected", 4, "ngIf"], [3, "configuredGroupOperator", "index", "onGroupOptionSelected"]], template: function GroupBooleanOperatorExpressionHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, GroupBooleanOperatorExpressionHarnessComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](2, _c0, !ctx.nested, !ctx.alternateColour, ctx.k2Model.expressions.length > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.sortable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _components_rules_designer_expressions_group_boolean_operator_expression_group_boolean_operator_expression_component__WEBPACK_IMPORTED_MODULE_5__.GroupBooleanOperatorExpressionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC1ib29sZWFuLW9wZXJhdG9yLWV4cHJlc3Npb24taGFybmVzcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 3312:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/dev-harness/rules-designer/this-response-expression-harness/this-response-expression-harness.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThisResponseExpressionHarnessComponent": () => (/* binding */ ThisResponseExpressionHarnessComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/components */ 614);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-alignment */ 6864);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-menu-item-templates */ 8372);
/* harmony import */ var src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/drop-down/drop-down-triangle-position */ 6831);
/* harmony import */ var src_testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/testing/utilities/EnsureNamespaces */ 5459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_ruleplugin_rule_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ruleplugin/rule-plugin-service */ 5852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_rules_designer_expressions_this_response_expression_this_response_expression_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/rules-designer/expressions/this-response-expression/this-response-expression.component */ 996);









function ThisResponseExpressionHarnessComponent_ng_container_2_div_1_k2_this_response_expression_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "k2-this-response-expression", 7);
} if (rf & 2) {
    const idx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expression", ctx_r4.itm)("index", idx_r3);
} }
function ThisResponseExpressionHarnessComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ThisResponseExpressionHarnessComponent_ng_container_2_div_1_k2_this_response_expression_1_Template, 1, 2, "k2-this-response-expression", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.itm.directive === "k2-this-response-expression");
} }
function ThisResponseExpressionHarnessComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ThisResponseExpressionHarnessComponent_ng_container_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.k2Model.expressions);
} }
const _c0 = function (a0, a1, a2) { return { "nested": a0, "alternate": a1, "multi-expressions": a2 }; };
class ThisResponseExpressionHarnessComponent {
    constructor(_rulePluginService) {
        this._rulePluginService = _rulePluginService;
        this.k2Model = {
            expressions: [{}]
        };
        this.sortable = false;
        this.alternateColour = false;
        this.nested = false;
        this.selectedKey = 'key';
        this.title = 'Selected Title';
        this.dropdownMenuAlignment = src_app_shared_enums_drop_down_drop_down_menu_alignment__WEBPACK_IMPORTED_MODULE_1__.DropDownMenuAlignment;
        this.dropDownMenuTrianglePosition = src_app_shared_enums_drop_down_drop_down_triangle_position__WEBPACK_IMPORTED_MODULE_3__.DropDownMenuTrianglePosition;
        this.dropdownMenuItemTemplate = src_app_shared_enums_drop_down_drop_down_menu_item_templates__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItemTemplates;
        this.itm = {
            componentId: 80013,
            directive: 'k2-this-response-expression',
            internalId: 1,
            leftOperandType: '',
            //'leftOperandType': 'everyResponse',
            lelftOperandValue: {
                componentId: 10008,
                smartFields: [
                    {
                        componentId: 10004,
                        internalId: 1
                    }
                ]
            },
            logicalOperator: '',
            //'logicalOperator': 'equals',
            specialOperator: '',
            //'specialOperator': 'equals',
            taskActionReference: 'root.nodes[{\'internalId\':2}].children[{\'internalId\':1}].configuration.actions[{\'internalId\':1}]',
            taskActionTitle: 'Approve',
            listen: () => { }
        };
        src_testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_4__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.workflow.configuredSmartFields.TextField', {
            createInstance: (c) => {
                c.componentId = src_app_shared_constants_components__WEBPACK_IMPORTED_MODULE_0__.ComponentIdMapping.TextSmartField;
                return c;
            }
        });
        _rulePluginService.setDesignerContext('ruleDesignerHarness', {
            getLogicalParentModel: () => ({}),
            getParentModel: () => ({
                actionStatementRuleType: 4,
                actions: [
                    {
                        actionTitle: 'Approve',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 1,
                        oldReference: 'root.nodes[{"internalId":2}].children[{"internalId":1}].configuration.actions[{"internalId":1}]',
                        originalTitle: 'Approve',
                        getReference: () => 'root.test1'
                    },
                    {
                        actionTitle: 'Reject',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 2,
                        oldReference: 'root.nodes[{"internalId":2}].children[{"internalId":1}].configuration.actions[{"internalId":2}]',
                        originalTitle: 'Reject',
                        getReference: () => 'root.test2'
                    },
                    {
                        actionTitle: 'Action 1',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 3,
                        oldReference: 'root.nodes[{"internalId":2}].children[{"internalId":1}].configuration.actions[{"internalId":3}]',
                        originalTitle: 'Action 1',
                        getReference: () => 'root.test3'
                    },
                    {
                        actionTitle: 'Action 2',
                        alwaysVisible: true,
                        componentId: 30019,
                        continueWorkflow: true,
                        internalId: 4,
                        oldReference: 'root.nodes[{"internalId":2}].children[{"internalId":1}].configuration.actions[{"internalId":4}]',
                        originalTitle: 'Action 2',
                        getReference: () => 'root.test4'
                    }
                ],
                allRecipients: true,
                componentId: 30010,
                destinationSets: [
                    {
                        componentId: 80010,
                        destinationItems: [
                            {
                                componentId: 10008,
                                internalId: 1,
                                smartFields: [
                                    {
                                        componentId: 10009,
                                        customTitle: 'Originator',
                                        fieldName: 'ProcessOriginatorFQN',
                                        internalId: 1,
                                        parentName: 'Originator\'s',
                                        title: 'FQN'
                                    }
                                ],
                                type: 'User'
                            }
                        ],
                        internalId: 1,
                        isRecipient: true,
                        title: 'Originator'
                    }
                ],
                destintationRule: {
                    componentId: 80102,
                    statements: [
                        {
                            IfExpressions: [
                                {
                                    componentId: 80004,
                                    directive: 'k2-group-expression',
                                    expressions: [
                                        {
                                            componentId: 80000,
                                            directive: 'k2-simple-expression',
                                            internalId: 1,
                                            leftExpression: {
                                                componentId: 80003,
                                                directive: 'k2-endpoint',
                                                value: {
                                                    componentId: 10008
                                                }
                                            },
                                            logicalOperator: 'equals',
                                            rightExpression: {
                                                componentId: 80003,
                                                directive: 'k2-endpoint',
                                                value: {
                                                    componentId: 10008
                                                }
                                            }
                                        }
                                    ],
                                    internalId: 1
                                }
                            ],
                            componentId: 80012,
                            elseStatements: [
                                {
                                    componentId: 30024,
                                    directive: 'k2-destination-set-statement',
                                    internalId: 1
                                }
                            ],
                            internalId: 1,
                            thenStatements: [
                                {
                                    componentId: 30024,
                                    directive: 'k2-destination-set-statement',
                                    internalId: 1
                                }
                            ]
                        }
                    ]
                },
                emailConfiguration: {
                    bcc: [
                        {
                            componentId: 10008,
                            internalId: 1,
                            isDecoratedPart: true
                        }
                    ],
                    body: {
                        componentId: 10008,
                        richText: true,
                        smartFields: [
                            {
                                componentId: 10004,
                                internalId: 9,
                                text: 'Dear&nbsp;'
                            },
                            {
                                componentId: 10009,
                                fieldName: 'ActivityInstanceDestUserDisplayName',
                                internalId: 2,
                                parentName: 'Task',
                                title: 'Participant Name'
                            },
                            {
                                componentId: 10004,
                                internalId: 10,
                                text: ',<br><br>Use the following link to open the worklist item:<br>'
                            },
                            {
                                assemblyId: 2,
                                className: 'SourceCode.Workflow.Functions.HTMLHelper',
                                componentId: 10002,
                                functionName: 'CreateHyperlink',
                                internalId: 8,
                                methodReturnType: 'System.String',
                                parameters: [
                                    {
                                        componentId: 10017,
                                        internalId: 1,
                                        parameterType: 'System.String',
                                        title: 'DisplayName',
                                        value: {
                                            componentId: 10008,
                                            smartFields: [
                                                {
                                                    componentId: 10004,
                                                    internalId: 1,
                                                    text: 'Click to open worklist item'
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        componentId: 10017,
                                        internalId: 2,
                                        parameterType: 'System.String',
                                        title: 'URL',
                                        value: {
                                            componentId: 10008,
                                            smartFields: [
                                                {
                                                    componentId: 10009,
                                                    fieldName: 'WorkFlowItemContextData',
                                                    internalId: 1,
                                                    parentName: 'Task',
                                                    title: 'Worklist Item Link'
                                                }
                                            ]
                                        }
                                    }
                                ],
                                returnType: 1,
                                title: 'Worklist Item Link'
                            }
                        ]
                    },
                    cc: [
                        {
                            componentId: 10008,
                            internalId: 1,
                            isDecoratedPart: true
                        }
                    ],
                    componentId: 30006,
                    exceptionSettings: {
                        componentId: 50012,
                        logException: true
                    },
                    from: {
                        componentId: 10008,
                        smartFields: [
                            {
                                componentId: 10001,
                                environmentFieldReference: 'root.externalReferenceDefinitions[{"internalId":1}]',
                                internalId: 1,
                                title: 'From Address'
                            }
                        ]
                    },
                    subject: {
                        componentId: 10008
                    }
                },
                exceptionSettings: {
                    componentId: 50012,
                    logException: true
                },
                formConfiguration: {
                    componentId: 30030,
                    parameters: [
                        {
                            componentId: 30018,
                            internalId: 1,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Serial Number',
                                        internalId: 1,
                                        text: 'SN'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10009,
                                        fieldName: 'SerialNo',
                                        internalId: 1,
                                        parentName: 'Task',
                                        title: 'Serial Number'
                                    }
                                ]
                            }
                        },
                        {
                            componentId: 30018,
                            internalId: 2,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Content Title',
                                        internalId: 1,
                                        text: '_title'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008
                            }
                        },
                        {
                            componentId: 30018,
                            internalId: 3,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Content URL',
                                        internalId: 1,
                                        text: '_url'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008
                            }
                        },
                        {
                            componentId: 30018,
                            internalId: 4,
                            name: {
                                componentId: 10008,
                                smartFields: [
                                    {
                                        componentId: 10004,
                                        customTitle: 'Embed Content on the Form',
                                        internalId: 1,
                                        text: '_embed'
                                    }
                                ],
                                type: 'tworows'
                            },
                            value: {
                                componentId: 10008
                            }
                        }
                    ],
                    url: {
                        componentId: 10008,
                        smartFields: [
                            {
                                componentId: 10006,
                                internalId: 1,
                                smartFormFieldReference: 'root.externalReferenceDefinitions[{"internalId":2}]'
                            }
                        ]
                    }
                },
                instruction: {
                    componentId: 10008,
                    multiLine: true
                },
                selectedFormTypeText: 'Basic Task Form',
                sendNotification: true,
                slots: {
                    componentId: 10008
                },
                timeLine: {
                    componentId: 30025,
                    expressDays: {
                        componentId: 10008
                    },
                    expressHours: {
                        componentId: 10008
                    },
                    expressMinutes: {
                        componentId: 10008
                    },
                    expressSeconds: {
                        componentId: 10008
                    },
                    isDefaultWorkingHours: true,
                    noDeadline: true,
                    specificDate: {
                        componentId: 10008
                    },
                    withinWorkingHoursOnly: true
                },
                useStandardTemplate: true,
                votingResolveGroupsToIndividuals: true,
                votingRule: {
                    componentId: 80105,
                    statements: [
                        {
                            IfExpressions: [
                                {
                                    componentId: 80004,
                                    directive: 'k2-group-expression',
                                    expressions: [
                                        {
                                            componentId: 80013,
                                            directive: 'k2-this-response-expression',
                                            internalId: 1,
                                            leftOperandType: 'everyResponse',
                                            leftOperandValue: {
                                                componentId: 10008,
                                                smartFields: [
                                                    {
                                                        componentId: 10004,
                                                        internalId: 1
                                                    }
                                                ]
                                            },
                                            logicalOperator: 'equals',
                                            specialOperator: 'equals'
                                        }
                                    ],
                                    internalId: 1
                                }
                            ],
                            componentId: 80014,
                            elseStatements: [
                                {
                                    componentId: 80006,
                                    directive: 'k2-outcome-statement',
                                    internalId: 1
                                }
                            ],
                            internalId: 1,
                            thenStatements: [
                                {
                                    componentId: 80006,
                                    directive: 'k2-outcome-statement',
                                    internalId: 1
                                }
                            ]
                        }
                    ]
                },
                votingRuleConsensusSelectedOutcomeReference: 'root.nodes[{"internalId":2}].configuration.outcomes[{"internalId":1}]'
            }),
        }, () => { });
    }
    ngOnInit() {
        Object.defineProperty(this.itm, 'leftOperandExtended', {
            enumerable: false,
            configurable: false,
            get: () => {
                if (!!!this.itm.leftOperandValue) {
                    this.itm.leftOperandValue = {
                        smartFields: [
                            {
                                text: ''
                            }
                        ],
                        richText: false
                    };
                }
                return this.itm.leftOperandValue;
            },
            set: (value) => {
                this.itm.leftOperandValue = value;
            }
        });
        const operandValueText = {};
        operandValueText.noResponse = 'No Response';
        operandValueText.everyResponse = 'Every Response';
        Object.defineProperty(this.itm, 'leftOperandValueText', {
            enumerable: false,
            configurable: false,
            get: () => operandValueText[this.itm.leftOperandType]
        });
    }
    onDrop() {
        console.log('onDrop');
    }
    onDropTop() {
        console.log('onDrop');
    }
    onDropBottom() {
        console.log('drop bottom');
    }
    onGroupOptionSelected(index) {
        console.log('on group option selected - groupConditions');
    }
}
ThisResponseExpressionHarnessComponent.ɵfac = function ThisResponseExpressionHarnessComponent_Factory(t) { return new (t || ThisResponseExpressionHarnessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_ruleplugin_rule_plugin_service__WEBPACK_IMPORTED_MODULE_5__.RulePluginService)); };
ThisResponseExpressionHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ThisResponseExpressionHarnessComponent, selectors: [["k2-this-response-expression-harness"]], decls: 4, vars: 6, consts: [["k2-droppable", "", "k2-dropped", "onDrop()", "k2-droptypes", "ruleDesignerItem smartField configuredSmartField", 1, "complex-element", "shadow", 3, "ngClass"], ["k2-droppable", "", "k2-dropped", "onDropTop()", 1, "expression-top-empty-row", "expression-empty-row"], [4, "ngIf"], ["k2-droppable", "", "k2-dropped", "onDropBottom()", 1, "expression-bottom-empty-row", "expression-empty-row"], ["class", "fadeMeIn", 4, "ngFor", "ngForOf"], [1, "fadeMeIn"], ["k2-scrollbar-focus", "", "class", "k2-expression-item", 3, "expression", "index", 4, "ngIf"], ["k2-scrollbar-focus", "", 1, "k2-expression-item", 3, "expression", "index"]], template: function ThisResponseExpressionHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ThisResponseExpressionHarnessComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](2, _c0, !ctx.nested, !ctx.alternateColour, ctx.k2Model.expressions.length > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.sortable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_rules_designer_expressions_this_response_expression_this_response_expression_component__WEBPACK_IMPORTED_MODULE_6__.ThisResponseExpressionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGlzLXJlc3BvbnNlLWV4cHJlc3Npb24taGFybmVzcy5jb21wb25lbnQubGVzcyJ9 */"] });
function RulePluginServiceToken(RulePluginServiceToken) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 8402:
/*!******************************************************************************!*\
  !*** ./src/app/dev-harness/scrollbar-harness/scrollbar-harness.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollbarHarnessComponent": () => (/* binding */ ScrollbarHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_common_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/scrollbar/scrollbar.component */ 1228);




class ScrollbarHarnessComponent {
    constructor() {
        this.testTextControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
    }
    ngOnInit() {
    }
}
ScrollbarHarnessComponent.ɵfac = function ScrollbarHarnessComponent_Factory(t) { return new (t || ScrollbarHarnessComponent)(); };
ScrollbarHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ScrollbarHarnessComponent, selectors: [["k2-scrollbar-harness"]], decls: 17, vars: 8, consts: [["type", "text", 2, "width", "100%", 3, "formControl"], ["k2-scrollbar", "", 2, "width", "400px", "height", "100px", "overflow", "auto"], ["k2-scrollbar", "", 2, "width", "400px", "height", "auto", "overflow", "auto", 3, "horizontal", "vertical"], [2, "width", "1000px"], [2, "width", "500px", "height", "50px"]], template: function ScrollbarHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Test Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\nScrollbar Test Harness\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.testTextControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testTextControl.value, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("horizontal", true)("vertical", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testTextControl.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("horizontal", true)("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.testTextControl.value, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _components_common_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__.ScrollbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JvbGxiYXItaGFybmVzcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 8511:
/*!****************************************************************************!*\
  !*** ./src/app/dev-harness/text-box-harness/text-box-harness.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextBoxHarnessComponent": () => (/* binding */ TextBoxHarnessComponent)
/* harmony export */ });
/* harmony import */ var _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/utilities/EnsureNamespaces */ 5459);
/* harmony import */ var _shared_constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/components */ 614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_common_text_box_text_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/text-box/text-box.component */ 5679);




const _c0 = ["editor1"];
class TextBoxHarnessComponent {
    constructor() {
        this.k2Expression1 = {};
        this.k2Expression1.multiLine = true;
        this.k2Expression1.richText = true;
        this.k2Expression1.isParentOf = (a) => this.k2Expression1.smartFields.includes(a);
        this.k2Expression1.smartFields = [
            {
                text: '<i>Dear&nbsp;',
                internalId: 9,
                componentId: 10004
            },
            {
                fieldName: 'ActivityInstanceDestUserDisplayName',
                parentName: 'Task',
                title: 'Participant Name',
                internalId: 2,
                componentId: 10009
            },
            {
                fieldName: 'ActivityInstanceDestUserDisplayName',
                parentName: 'Task',
                title: 'Participant Name',
                internalId: 2,
                componentId: 10009
            },
            {
                text: '</i>,<br><br>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.<br><br>Use the following link to open the worklist item:<br>',
                internalId: 10,
                componentId: 10004
            },
            {
                parameters: [
                    {
                        parameterType: 'System.String',
                        title: 'DisplayName',
                        value: {
                            smartFields: [
                                {
                                    text: 'Click to open worklist item',
                                    internalId: 1,
                                    componentId: 10004
                                }
                            ],
                            componentId: 10008
                        },
                        internalId: 1,
                        componentId: 10017
                    },
                    {
                        parameterType: 'System.String',
                        title: 'URL',
                        value: {
                            smartFields: [
                                {
                                    fieldName: 'WorkFlowItemContextData',
                                    parentName: 'Task',
                                    title: 'Worklist Item Link',
                                    internalId: 1,
                                    componentId: 10009
                                }
                            ],
                            componentId: 10008
                        },
                        internalId: 2,
                        componentId: 10017
                    }
                ],
                functionName: 'CreateHyperlink',
                assemblyId: 2,
                className: 'SourceCode.Workflow.Functions.HTMLHelper',
                methodReturnType: 'System.String',
                title: 'Worklist Item Link',
                returnType: 1,
                internalId: 8,
                componentId: 10002
            }
        ];
        this.k2Expression2 = {};
        this.k2Expression2.multiLine = true;
        this.k2Expression2.isParentOf = (a) => this.k2Expression2.smartFields.includes(a);
        ;
        this.k2Expression1.smartFields.forEach((s) => {
            s.clone = () => $.extend(true, {}, s);
            s.getLogicalParentModel = () => this.k2Expression1;
            s.moveTo = () => { };
            s.errorInformation = [];
            s.childErrorInformation = [];
            s.associateWithParent = (p) => {
                s.getLogicalParentModel = () => p;
            };
        });
        _testing_utilities_EnsureNamespaces__WEBPACK_IMPORTED_MODULE_0__.Mocks.ensureNamespace('sourceCode.k2Designer.objectModel.workflow.configuredSmartFields.TextField', {
            createInstance: (c) => {
                c.componentId = _shared_constants_components__WEBPACK_IMPORTED_MODULE_1__.ComponentIdMapping.TextSmartField;
                return c;
            }
        });
    }
    ngOnInit() {
        this.k2Expression2.smartFields = [
            {
                componentId: 10004,
                internalId: 5,
                text: 'Lorem ipsum dolor sit amet, '
            },
            {
                componentId: 10009,
                fieldName: 'ProcessStartDate',
                internalId: 4,
                parentName: 'Workflow',
                returnType: 4,
                title: 'Start Date'
            },
            {
                componentId: 10004,
                internalId: 6,
                text: ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r\n\r\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \r\n\r\n'
            },
            {
                componentId: 10009,
                fieldName: 'ProcessOriginatorName',
                internalId: 2,
                parentName: 'Originator\'s',
                returnType: 1,
                title: 'Name'
            }
        ];
        this.k2Expression2.smartFields.forEach((s) => {
            s.clone = () => $.extend(true, {}, s);
            s.getLogicalParentModel = () => this.k2Expression2;
            s.moveTo = () => { };
            s.errorInformation = [];
            s.childErrorInformation = [];
            s.associateWithParent = (p) => {
                s.getLogicalParentModel = () => p;
            };
        });
    }
    toggleHtml() {
        this.editor.codeView = !this.editor.codeView;
        this.editor.reRender();
    }
}
TextBoxHarnessComponent.ɵfac = function TextBoxHarnessComponent_Factory(t) { return new (t || TextBoxHarnessComponent)(); };
TextBoxHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TextBoxHarnessComponent, selectors: [["k2-text-box-harness"]], viewQuery: function TextBoxHarnessComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, decls: 7, vars: 4, consts: [[3, "k2Expression", "k2CanDrop"], ["editor1", ""], [1, "btn", "btn-primary", 2, "margin-top", "3px", "margin-bottom", "10px", 3, "click"]], template: function TextBoxHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "k2-text-box", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TextBoxHarnessComponent_Template_button_click_2_listener() { return ctx.toggleHtml(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "k2-text-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("k2Expression", ctx.k2Expression1)("k2CanDrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("k2Expression", ctx.k2Expression2)("k2CanDrop", true);
    } }, directives: [_components_common_text_box_text_box_component__WEBPACK_IMPORTED_MODULE_2__.TextboxComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWJveC1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 4852:
/*!**********************************************************************************!*\
  !*** ./src/app/dev-harness/tile-select-harness/tile-select-harness.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileSelectHarnessComponent": () => (/* binding */ TileSelectHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_tile_select_tile_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tile-select/tile-select.component */ 6445);


class TileSelectHarnessComponent {
    constructor() {
        this.tiles = [];
        this.changeMessage = '';
    }
    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            this.tiles.push({
                id: `tile_${i}`,
                iconClass: 'icon',
                title: `Item ${i}`,
                value: `value ${i}`,
                enabled: true,
                selected: false,
                tooltip: `tooltip ${i}`,
                description: `Description ${1}`
            });
        }
    }
    onSelectionChanged(change) {
        var _a;
        this.changeMessage = `Was '${(_a = change.previous) === null || _a === void 0 ? void 0 : _a.value}', now '${change.current.value}'`;
    }
}
TileSelectHarnessComponent.ɵfac = function TileSelectHarnessComponent_Factory(t) { return new (t || TileSelectHarnessComponent)(); };
TileSelectHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TileSelectHarnessComponent, selectors: [["k2-tile-select-harness"]], decls: 6, vars: 2, consts: [[3, "tiles", "selectionChanged"], ["type", "text", 2, "width", "300px", 3, "value"]], template: function TileSelectHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tile Select Harness");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "k2-tile-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChanged", function TileSelectHarnessComponent_Template_k2_tile_select_selectionChanged_3_listener($event) { return ctx.onSelectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tiles", ctx.tiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.changeMessage);
    } }, directives: [_components_tile_select_tile_select_component__WEBPACK_IMPORTED_MODULE_0__.TileSelectComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWxlLXNlbGVjdC1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 666:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dev-harness/wizard-popup/sharepoint/create-references-harness/create-references-harness.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateReferencesHarnessComponent": () => (/* binding */ CreateReferencesHarnessComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_plugins_share_point_share_point_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/plugins/share-point/share-point.service */ 3216);
/* harmony import */ var src_testing_mock_services_share_point_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/testing/mock-services/share-point.service */ 5777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_wizard_popup_sharepoint_create_references_create_references_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/wizard-popup/sharepoint/create-references/create-references.component */ 1638);




class CreateReferencesHarnessComponent {
    constructor() {
        this.config = {
            buttons: {},
            context: {
                changesHeading: '',
                createItemReferencesHeading: '',
                createReferenceSubHeading: '',
                createReferencesHeading: '',
                createStartEventsHeading: '',
                existingIntegration: false,
                existingItemReferences: [],
                heading: 'Use columns from your List/Library in this Workflow.',
                hideIndicators: true,
                isDocLib: true,
                itemName: 'Documents',
                listId: 'b21da2cc-a0ad-40f1-9ab2-8cb17c86e518',
                newItemReferences: [],
                pages: [
                    {
                        $$hashKey: 'object:606',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            disabled: true,
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/createReferences.html'
                    },
                    {
                        $$hashKey: 'object:607',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/startWorkflowEvents.aspx'
                    },
                    {
                        $$hashKey: 'object:608',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                    },
                    {
                        $$hashKey: 'object:609',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: true
                        },
                        hidden: false,
                        hidePageIndicator: true,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: false
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                    }
                ],
                savedEvents: [],
                serviceInstance: 'sa_sp_previous_denallix_com',
                settingId: '',
                siteUrl: '',
                smartObjectName: '',
                sourceItemReferences: [],
                status: 1,
                subSiteRelativeUrl: '',
                triggerHeading: 'Select when the<strong>Documents Library</strong>should start the Workflow.',
                unmappedFieldsHeading: '',
                updateListHeading: ''
            },
            heading: 'Start Workflow from a List/Library',
            hideInfoButton: true,
            modal: true,
            pages: [
                {
                    $$hashKey: 'object:606',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        disabled: true,
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/createReferences.html'
                },
                {
                    $$hashKey: 'object:607',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/startWorkflowEvents.aspx'
                },
                {
                    $$hashKey: 'object:608',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                },
                {
                    $$hashKey: 'object:609',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: true
                    },
                    hidden: false,
                    hidePageIndicator: true,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: false
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                }
            ],
            url: '',
            validationModel: {},
            width: 400
        };
    }
    ngOnInit() {
    }
}
CreateReferencesHarnessComponent.ɵfac = function CreateReferencesHarnessComponent_Factory(t) { return new (t || CreateReferencesHarnessComponent)(); };
CreateReferencesHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateReferencesHarnessComponent, selectors: [["k2-create-references-harness"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: src_app_services_plugins_share_point_share_point_service__WEBPACK_IMPORTED_MODULE_0__.SharePointService, useClass: src_testing_mock_services_share_point_service__WEBPACK_IMPORTED_MODULE_1__.MockSharePointService }
        ])], decls: 1, vars: 1, consts: [[3, "config"]], template: function CreateReferencesHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "k2-create-references", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
    } }, directives: [_components_wizard_popup_sharepoint_create_references_create_references_component__WEBPACK_IMPORTED_MODULE_2__.CreateReferencesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcmVmZXJlbmNlcy1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 7595:
/*!**************************************************************************************************!*\
  !*** ./src/app/dev-harness/wizard-popup/sharepoint/summary-harness/summary-harness.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePointSummaryHarnessComponent": () => (/* binding */ SharePointSummaryHarnessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_wizard_popup_sharepoint_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/wizard-popup/sharepoint/summary/summary.component */ 5236);


class SharePointSummaryHarnessComponent {
    constructor() {
        this.config = {
            buttons: {},
            context: {
                changesHeading: '',
                createItemReferencesHeading: '',
                createReferenceSubHeading: '',
                createReferencesHeading: '',
                createStartEventsHeading: '',
                existingIntegration: false,
                existingItemReferences: [],
                heading: 'Use columns from your List/Library in this Workflow.',
                hideIndicators: true,
                isDocLib: true,
                itemName: 'Documents',
                listId: 'b21da2cc-a0ad-40f1-9ab2-8cb17c86e518',
                newItemReferences: [],
                pages: [
                    {
                        $$hashKey: 'object:606',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            disabled: true,
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/createReferences.html'
                    },
                    {
                        $$hashKey: 'object:607',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/startWorkflowEvents.aspx'
                    },
                    {
                        $$hashKey: 'object:608',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                    },
                    {
                        $$hashKey: 'object:609',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: true
                        },
                        hidden: false,
                        hidePageIndicator: true,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: false
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                    }
                ],
                savedEvents: [],
                serviceInstance: 'sa_sp_previous_denallix_com',
                settingId: '',
                siteUrl: '',
                smartObjectName: '',
                sourceItemReferences: [],
                status: 1,
                subSiteRelativeUrl: '',
                triggerHeading: 'Select when the<strong>Documents Library</strong>should start the Workflow.',
                unmappedFieldsHeading: '',
                updateListHeading: ''
            },
            heading: 'Start Workflow from a List/Library',
            hideInfoButton: true,
            modal: true,
            pages: [
                {
                    $$hashKey: 'object:606',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        disabled: true,
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/createReferences.html'
                },
                {
                    $$hashKey: 'object:607',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/startWorkflowEvents.aspx'
                },
                {
                    $$hashKey: 'object:608',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                },
                {
                    $$hashKey: 'object:609',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: true
                    },
                    hidden: false,
                    hidePageIndicator: true,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: false
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.aspx'
                }
            ],
            url: '',
            validationModel: {},
            width: 400
        };
    }
    ngOnInit() {
    }
}
SharePointSummaryHarnessComponent.ɵfac = function SharePointSummaryHarnessComponent_Factory(t) { return new (t || SharePointSummaryHarnessComponent)(); };
SharePointSummaryHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SharePointSummaryHarnessComponent, selectors: [["k2-summary-harness"]], decls: 1, vars: 1, consts: [[3, "config"]], template: function SharePointSummaryHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "k2-sp-summary", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
    } }, directives: [_components_wizard_popup_sharepoint_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__.SharePointSummaryComponent], encapsulation: 2 });


/***/ }),

/***/ 7356:
/*!***************************************************************************************************!*\
  !*** ./src/app/dev-harness/wizard-popup/wizard-popup-host-harness/page-one/page-one.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOneComponent": () => (/* binding */ PageOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/wizard-popup/page/page.component */ 9863);
/* harmony import */ var src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/resource/resource.service */ 7750);




function PageOneComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "page-one works! Template name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageOneComponent_ng_template_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.changeSomething(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "change something");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.contextBody);
} }
class PageOneComponent extends src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent {
    constructor(resourceService) {
        super(resourceService);
        this.resourceService = resourceService;
        this.isPageTwoIncluded = false;
        this.isPageTwoIncludedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        console.log('page one ctor');
    }
    beforePageDisplayed() {
        this.buttonConfig = {
            next: {
                isDisabled: true
            }
        };
    }
    beforeNavigateNext() {
    }
    beforeNavigatePrevious() { }
    ngOnInit() {
        console.log('page one init');
    }
    changeSomething() {
        this.buttonConfig.next.isDisabled = false;
        this.isPageTwoIncluded = true;
        this.isPageTwoIncludedChange.emit(this.isPageTwoIncluded);
        this.notifyConfigChanged();
    }
}
PageOneComponent.ɵfac = function PageOneComponent_Factory(t) { return new (t || PageOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_1__.ResourceService)); };
PageOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageOneComponent, selectors: [["k2-page-one"]], inputs: { isPageTwoIncluded: "isPageTwoIncluded" }, outputs: { isPageTwoIncludedChange: "isPageTwoIncludedChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent, useExisting: PageOneComponent }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["pageTemplate", ""], [3, "click"]], template: function PageOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PageOneComponent_ng_template_0_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9uZS5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 2412:
/*!*******************************************************************************************************!*\
  !*** ./src/app/dev-harness/wizard-popup/wizard-popup-host-harness/page-three/page-three.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageThreeComponent": () => (/* binding */ PageThreeComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/wizard-popup/page/page.component */ 9863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/resource/resource.service */ 7750);



function PageThreeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "page-three works!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contextBody_r2 = ctx.contextBody;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](contextBody_r2);
} }
class PageThreeComponent extends src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent {
    constructor(resourceService) {
        super(resourceService);
        this.resourceService = resourceService;
        console.log('page three ctor');
        this.isHiddenPage = true;
    }
    ngOnInit() {
        console.log('page three init');
    }
    beforePageDisplayed() {
    }
    beforeNavigateNext() {
    }
    beforeNavigatePrevious() { }
}
PageThreeComponent.ɵfac = function PageThreeComponent_Factory(t) { return new (t || PageThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_1__.ResourceService)); };
PageThreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageThreeComponent, selectors: [["k2-page-three"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent, useExisting: PageThreeComponent }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["pageTemplate", ""]], template: function PageThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PageThreeComponent_ng_template_0_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRocmVlLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 2668:
/*!***************************************************************************************************!*\
  !*** ./src/app/dev-harness/wizard-popup/wizard-popup-host-harness/page-two/page-two.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTwoComponent": () => (/* binding */ PageTwoComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/wizard-popup/page/page.component */ 9863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/resource/resource.service */ 7750);



const _c0 = ["pageTemplate"];
function PageTwoComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "page-two works!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contextBody_r2 = ctx.contextBody;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](contextBody_r2);
} }
class PageTwoComponent extends src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent {
    constructor(resourceService) {
        super(resourceService);
        this.resourceService = resourceService;
        this.isEnabled = false;
        console.log('page two ctor');
    }
    beforePageDisplayed() {
    }
    beforeNavigateNext() {
    }
    beforeNavigatePrevious() { }
    ngOnInit() {
        console.log('page two init');
    }
}
PageTwoComponent.ɵfac = function PageTwoComponent_Factory(t) { return new (t || PageTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_1__.ResourceService)); };
PageTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageTwoComponent, selectors: [["k2-page-two"]], viewQuery: function PageTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: src_app_components_wizard_popup_page_page_component__WEBPACK_IMPORTED_MODULE_0__.PageComponent, useExisting: PageTwoComponent }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [["pageTemplate", ""]], template: function PageTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PageTwoComponent_ng_template_0_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXR3by5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 5412:
/*!***********************************************************************************************************!*\
  !*** ./src/app/dev-harness/wizard-popup/wizard-popup-host-harness/wizard-popup-host-harness.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardPopupHostHarnessComponent": () => (/* binding */ WizardPopupHostHarnessComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_plugins_share_point_share_point_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/plugins/share-point/share-point.service */ 3216);
/* harmony import */ var src_testing_mock_services_share_point_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/testing/mock-services/share-point.service */ 5777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_wizard_popup_wizard_popup_host_wizard_popup_host_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/wizard-popup/wizard-popup-host/wizard-popup-host.component */ 8273);
/* harmony import */ var _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-one/page-one.component */ 7356);
/* harmony import */ var _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-two/page-two.component */ 2668);
/* harmony import */ var _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-three/page-three.component */ 2412);
/* harmony import */ var _components_wizard_popup_sharepoint_create_references_create_references_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/wizard-popup/sharepoint/create-references/create-references.component */ 1638);
/* harmony import */ var _components_wizard_popup_sharepoint_start_workflow_events_start_workflow_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/wizard-popup/sharepoint/start-workflow-events/start-workflow-events.component */ 717);
/* harmony import */ var _components_wizard_popup_sharepoint_summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/wizard-popup/sharepoint/summary/summary.component */ 5236);











function WizardPopupHostHarnessComponent_k2_wizard_popup_host_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "k2-wizard-popup-host", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("closeDialog", function WizardPopupHostHarnessComponent_k2_wizard_popup_host_8_Template_k2_wizard_popup_host_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r2.closeSharepointPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "k2-page-one", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "k2-page-two", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "k2-page-three", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "k2-create-references", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "k2-start-workflow-events", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "k2-sp-summary", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "k2-sp-summary", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("body", ctx_r0.pageOneBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("body", ctx_r0.pageTwoBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("body", ctx_r0.pageThreeBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx_r0.sharepointConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx_r0.sharepointConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx_r0.sharepointConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx_r0.sharepointConfig);
} }
function WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_k2_page_two_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "k2-page-two");
} }
function WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_k2_page_two_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "k2-page-two");
} }
function WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "k2-wizard-popup-host", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("closeDialog", function WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_Template_k2_wizard_popup_host_closeDialog_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.closeFormsPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_k2_page_two_1_Template, 1, 0, "k2-page-two", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "k2-page-one", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("isPageTwoIncludedChange", function WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_Template_k2_page_one_isPageTwoIncludedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.isPageTwoIncluded = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_k2_page_two_3_Template, 1, 0, "k2-page-two", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "k2-page-three");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isPageTwoIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isPageTwoIncluded", ctx_r1.isPageTwoIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isPageTwoIncluded);
} }
class WizardPopupHostHarnessComponent {
    constructor() {
        this.sharepointConfig = this.getSharepointConfig();
        this.formsConfig = this.getFormsConfig();
        this.pageOneBody = 'Page One body (From component parent).';
        this.pageTwoBody = 'Page Two body (From component parent).';
        this.pageThreeBody = 'Page Three body (From component parent).';
        this.isSharepointPopupShown = false;
        this.isFormsPopupShown = false;
        this.isPageTwoIncluded = false;
        this.closeSharepointPopup = () => {
            this.isSharepointPopupShown = false;
        };
        this.openFormsPopup = () => {
            this.isFormsPopupShown = true;
        };
        this.closeFormsPopup = () => {
            console.log('closing forms popup');
            this.isFormsPopupShown = false;
        };
        this.logVars = () => {
            console.log('isPageTwoIncluded: ', this.isPageTwoIncluded);
        };
    }
    ngOnInit() {
    }
    openSharepointPopup() {
        this.isSharepointPopupShown = true;
    }
    getFormsConfig() {
        return {
            buttons: {},
            context: {
                addActionToRule: false,
                addItemReferences: false,
                checkOutForm: false,
                checkedOutBy: '',
                configureFormRuleDescription: '',
                cotainMatchingReferences: false,
                createItemReferencesHeading: '',
                createNewState: true,
                editMode: false,
                existingItemReferences: {
                    collection: []
                },
                folio: '',
                form: {
                    key: '2c441ad8-011a-4e9b-9774-3eb4c9198b19',
                    name: 'TestSmo1',
                    title: 'TestSmo1'
                },
                formItemReferences: {
                    collection: []
                },
                formUpdateDone: false,
                foundWorkflowActionOnForm: false,
                fqn: 'WPH\\\\W27',
                helper: {},
                hideIndicators: true,
                isUserForm: false,
                makeStateDefault: true,
                newItemReferences: {
                    collection: []
                },
                newStateName: '',
                pageIndex: 0,
                pages: [
                    {
                        $$hashKey: 'object:584',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            disabled: false,
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'smartforms_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/createSmartFields.aspx'
                    },
                    {
                        $$hashKey: 'object:585',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'smartforms_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/configureFormRule.html'
                    },
                    {
                        $$hashKey: 'object:586',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: true,
                        hidePageIndicator: false,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'smartforms_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/configureState.aspx'
                    },
                    {
                        $$hashKey: 'object:587',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: true,
                        hidePageIndicator: false,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'smartforms_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/configureStartRule.aspx'
                    },
                    {
                        $$hashKey: 'object:588',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: true
                        },
                        pageTitleToken: 'smartforms_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/summary.aspx'
                    },
                    {
                        $$hashKey: 'object:589',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: true
                        },
                        hidden: false,
                        hidePageIndicator: true,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: false
                        },
                        pageTitleToken: 'smartforms_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/summaryResults.aspx'
                    }
                ],
                processDefinition: {
                    _clientSideOnlyProperties: [
                        'childErrorInformation'
                    ],
                    _isBusyWithChangedEvent: false
                },
                ruleConfigureLaterDescription: '',
                ruleConfigureNowDescription: '',
                ruleId: '',
                showSuccessSummary: true,
                states: [],
                unmappedFieldsHeading: '',
                updatedFormSuccesfully: true
            },
            heading: '',
            hideInfoButton: true,
            modal: true,
            pages: [
                {
                    $$hashKey: 'object:584',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        disabled: false,
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'smartforms_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/createSmartFields.aspx'
                },
                {
                    $$hashKey: 'object:585',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'smartforms_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/configureFormRule.html'
                },
                {
                    $$hashKey: 'object:586',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: true,
                    hidePageIndicator: false,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'smartforms_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/configureState.aspx'
                },
                {
                    $$hashKey: 'object:587',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: true,
                    hidePageIndicator: false,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'smartforms_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/configureStartRule.aspx'
                },
                {
                    $$hashKey: 'object:588',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: true
                    },
                    pageTitleToken: 'smartforms_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/summary.aspx'
                },
                {
                    $$hashKey: 'object:589',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: true
                    },
                    hidden: false,
                    hidePageIndicator: true,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: false
                    },
                    pageTitleToken: 'smartforms_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/smartforms/summaryResults.aspx'
                }
            ],
            url: '',
            validationModel: {},
            width: 400
        };
    }
    getSharepointConfig() {
        return {
            buttons: {},
            context: {
                changesHeading: '',
                createItemReferencesHeading: null,
                createReferenceSubHeading: '',
                createReferencesHeading: '',
                createStartEventsHeading: '',
                existingIntegration: false,
                existingItemReferences: [],
                heading: 'Use columns from your List/Library in this Workflow.',
                hideIndicators: true,
                isDocLib: true,
                itemName: 'Documents',
                listId: 'b21da2cc-a0ad-40f1-9ab2-8cb17c86e518',
                newItemReferences: [],
                pages: [
                    {
                        $$hashKey: 'object:567',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            disabled: true,
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/createReferences.html'
                    },
                    {
                        $$hashKey: 'object:568',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            titleToken: 'workflow_contextPopup_nextButton',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/startWorkflowEvents.html'
                    },
                    {
                        $$hashKey: 'object:569',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: false
                        },
                        hidden: false,
                        hidePageIndicator: false,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: true
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: true
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.html'
                    },
                    {
                        $$hashKey: 'object:570',
                        finishButton: {
                            titleToken: 'workflow_contextPopup_okButton',
                            visible: true
                        },
                        hidden: false,
                        hidePageIndicator: true,
                        nextButton: {
                            class: 'modal-button primary large',
                            titleToken: 'workflow_contextPopup_saveAndFinish',
                            visible: false
                        },
                        pageTitleToken: 'sharePoint_integration_create_smartfield',
                        previousButton: {
                            titleToken: 'workflow_contextPopup_prevButton',
                            visible: false
                        },
                        url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.html'
                    }
                ],
                savedEvents: [],
                serviceInstance: 'sa_sp_previous_denallix_com',
                settingId: '',
                siteUrl: '',
                smartObjectName: '',
                sourceItemReferences: [],
                status: 1,
                subSiteRelativeUrl: '',
                triggerHeading: '',
                unmappedFieldsHeading: null,
                updateListHeading: '',
                workflowFqn: 'WPH\\W1'
            },
            heading: 'Start Workflow from a List/Library',
            hideInfoButton: true,
            modal: true,
            pages: [
                {
                    $$hashKey: 'object:567',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        disabled: true,
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/createReferences.html'
                },
                {
                    $$hashKey: 'object:568',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        titleToken: 'workflow_contextPopup_nextButton',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/startWorkflowEvents.html'
                },
                {
                    $$hashKey: 'object:569',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: false
                    },
                    hidden: false,
                    hidePageIndicator: false,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: true
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: true
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.html'
                },
                {
                    $$hashKey: 'object:570',
                    finishButton: {
                        titleToken: 'workflow_contextPopup_okButton',
                        visible: true
                    },
                    hidden: false,
                    hidePageIndicator: true,
                    nextButton: {
                        class: 'modal-button primary large',
                        titleToken: 'workflow_contextPopup_saveAndFinish',
                        visible: false
                    },
                    pageTitleToken: 'sharePoint_integration_create_smartfield',
                    previousButton: {
                        titleToken: 'workflow_contextPopup_prevButton',
                        visible: false
                    },
                    url: 'uiComponents/configPanel/plugins/pluginWizards/sharePoint/summary.html'
                }
            ],
            url: '',
            validationModel: {},
            width: 400
        };
    }
}
WizardPopupHostHarnessComponent.ɵfac = function WizardPopupHostHarnessComponent_Factory(t) { return new (t || WizardPopupHostHarnessComponent)(); };
WizardPopupHostHarnessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: WizardPopupHostHarnessComponent, selectors: [["k2-wizard-popup-host-harness"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([
            { provide: src_app_services_plugins_share_point_share_point_service__WEBPACK_IMPORTED_MODULE_0__.SharePointService, useClass: src_testing_mock_services_share_point_service__WEBPACK_IMPORTED_MODULE_1__.MockSharePointService }
        ])], decls: 10, vars: 3, consts: [[3, "click"], ["heading", "Sharepoint tests popup", 3, "closeDialog", 4, "ngIf"], ["heading", "forms test popup", 3, "closeDialog", 4, "ngIf"], ["heading", "Sharepoint tests popup", 3, "closeDialog"], [3, "body"], [3, "config"], ["isFinish", "true", 3, "config"], ["heading", "forms test popup", 3, "closeDialog"], [4, "ngIf"], [3, "isPageTwoIncluded", "isPageTwoIncludedChange"]], template: function WizardPopupHostHarnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WizardPopupHostHarnessComponent_Template_button_click_0_listener() { return ctx.openSharepointPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Open Sharepoint Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WizardPopupHostHarnessComponent_Template_button_click_2_listener() { return ctx.openFormsPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Open Forms Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WizardPopupHostHarnessComponent_Template_button_click_4_listener() { return ctx.logVars(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Log vars");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, WizardPopupHostHarnessComponent_k2_wizard_popup_host_8_Template, 8, 7, "k2-wizard-popup-host", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, WizardPopupHostHarnessComponent_k2_wizard_popup_host_9_Template, 5, 3, "k2-wizard-popup-host", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("is Page two included: ", ctx.isPageTwoIncluded, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSharepointPopupShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isFormsPopupShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_wizard_popup_wizard_popup_host_wizard_popup_host_component__WEBPACK_IMPORTED_MODULE_2__.WizardPopupHostComponent, _page_one_page_one_component__WEBPACK_IMPORTED_MODULE_3__.PageOneComponent, _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_4__.PageTwoComponent, _page_three_page_three_component__WEBPACK_IMPORTED_MODULE_5__.PageThreeComponent, _components_wizard_popup_sharepoint_create_references_create_references_component__WEBPACK_IMPORTED_MODULE_6__.CreateReferencesComponent, _components_wizard_popup_sharepoint_start_workflow_events_start_workflow_events_component__WEBPACK_IMPORTED_MODULE_7__.StartWorkflowEventsComponent, _components_wizard_popup_sharepoint_summary_summary_component__WEBPACK_IMPORTED_MODULE_8__.SharePointSummaryComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXphcmQtcG9wdXAtaG9zdC1oYXJuZXNzLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 5777:
/*!**********************************************************!*\
  !*** ./src/testing/mock-services/share-point.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockSharePointService": () => (/* binding */ MockSharePointService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class MockSharePointService {
    constructor() {
    }
    /**
     * Helper method to call to determine pages, buttons and page indicators.
     *
     * @param pluginContext
     */
    detectChanges(scopePluginContext) {
        //Build event string for back-end ; seperated.
        scopePluginContext.eventReceiverString = '';
        for (let i = 0; i < scopePluginContext.remoteEventReceivers.EventDataCollection.length; i++) {
            if (scopePluginContext.remoteEventReceivers.EventDataCollection[i].Selected) {
                scopePluginContext.eventReceiverString = scopePluginContext.eventReceiverString + scopePluginContext.remoteEventReceivers.EventDataCollection[i].Id + ';';
            }
        }
        //Remove the last ;
        if (scopePluginContext.eventReceiverString.length > 0) {
            scopePluginContext.eventReceiverString = scopePluginContext.eventReceiverString.substring(0, scopePluginContext.eventReceiverString.length - 1);
        }
        scopePluginContext.hideIndicators = false;
    }
    saveSharePointSettings(serviceInstance, listId, subSiteRelativeUrl) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
            //'api/sharePoint/SaveSharePointSettings'
            console.log('saveSharePointSettings');
            setTimeout(() => {
                const settingResult = {
                    SettingId: '123d2c89-5ce6-468b-b5b1-49435eda44dd',
                    SharePointSiteUrl: 'https://sa-sp-previous.denallix.com',
                    ListSmartObject: 'sa_sp_previous_denallix_com_Shared_Documents'
                };
                subscriber.next(settingResult);
            }, 1000);
        });
    }
    getItemReferences(smartObjectName, isDocLib) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
            //'api/sharePoint/GetSharePointAvailableEvents'
            console.log('getItemReferences');
            setTimeout(() => {
                const itemReferences = [{
                        displayName: 'Documents',
                        name: 'sa_sp_previous_denallix_com_Shared_Documents',
                        objectNames: [
                            'Shared_Documents'
                        ],
                        objectTypes: [
                            'Document'
                        ],
                        primary: true,
                        serviceTypes: [
                            'SourceCode.SmartObjects.Services.SharePoint.SharePointService'
                        ],
                        smartObjectDisplayName: 'Documents',
                        smartObjectID: 'a4d6b21f-776c-48b0-ad0a-236e42bb44c7',
                        smartObjectMehtodType: 'read',
                        smartObjectMethodDisplyName: 'Get Document By Id',
                        smartObjectMethodName: 'GetDocumentById',
                        smartObjectName: 'sa_sp_previous_denallix_com_Shared_Documents',
                        smartObjectSourceID: 'a4d6b21f-776c-48b0-ad0a-236e42bb44c7',
                        startMode: 'sharePointEvent'
                    }];
                subscriber.next(itemReferences);
            }, 1000);
        });
    }
    getSharePointAvailableEvents() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
            //'api/sharePoint/GetSharePointAvailableEvents'
            console.log('getSharePointAvailableEvents');
            setTimeout(() => {
                const events = {
                    EventDataCollection: [
                        {
                            Description: 'Workflow is manually started\\t\\t\\t\\t\\t',
                            Id: 1111,
                            Name: 'Manual'
                        },
                        {
                            Description: 'An item was added',
                            Id: 10001,
                            Name: 'ItemAdded'
                        },
                        {
                            Description: 'An item was updated',
                            Id: 10002,
                            Name: 'ItemUpdated'
                        },
                        {
                            Description: 'An item was deleted',
                            Id: 10003,
                            Name: 'ItemDeleted'
                        },
                        {
                            Description: 'An item was checked in',
                            Id: 10004,
                            Name: 'ItemCheckedIn'
                        },
                        {
                            Description: 'An item was checked out',
                            Id: 10005,
                            Name: 'ItemCheckedOut'
                        },
                        {
                            Description: 'An item check out was discarded',
                            Id: 10006,
                            Name: 'ItemUncheckedOut'
                        },
                        {
                            Description: 'An attachment was added to the item',
                            Id: 10007,
                            Name: 'ItemAttachmentAdded'
                        }
                    ]
                };
                subscriber.next(events);
            }, 1000);
        });
    }
    getSharePointSettingEvents(settingId) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
            //'api/sharePoint/getSharePointSettingEvents'
            console.log('getSharePointSettingEvents');
            setTimeout(() => {
                const eventReceivers = { EventDataCollection: [] };
                console.error('No config for this yet');
                subscriber.next(eventReceivers);
            }, 1000);
        });
    }
    getEventsForWorkflowSetting(settingId, workflowName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
            //'api/sharePoint/getEventsForWorkflowSetting'
            console.log('getEventsForWorkflowSetting');
            setTimeout(() => {
                const eventReceivers = [];
                subscriber.next(eventReceivers);
            }, 1000);
        });
    }
}
MockSharePointService.ɵfac = function MockSharePointService_Factory(t) { return new (t || MockSharePointService)(); };
MockSharePointService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MockSharePointService, factory: MockSharePointService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5744:
/*!************************************************!*\
  !*** ./src/testing/utilities/TestUtilities.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestUtilities": () => (/* binding */ TestUtilities)
/* harmony export */ });
/* harmony import */ var _app_shared_utils_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/shared/utils/general */ 3867);
/* harmony import */ var _EnsureNamespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnsureNamespaces */ 5459);


/**
 * Unit testing helper class to expose sourceCode.utilities helper classes.
 * Add all sourceCode.utilities helper classes here as needed for testing.
 * To use in a test spec:
 *  import { TestUtilities } from '../../../types/mocks/TestUtilities';
 *  Call TestUtilities.initTestUtilities(); in beforeEach
 *  Call TestUtilities.dispose(); in afterEach
 * */
var TestUtilities;
(function (TestUtilities) {
    function initTestUtilities() {
        //Extend string
        if (!String.prototype.format) {
            String.prototype.format = function () {
                const args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined'
                        ? args[number]
                        : match;
                });
            };
        }
        //Register namespace
        _EnsureNamespaces__WEBPACK_IMPORTED_MODULE_1__.Mocks.ensureNamespace('sourceCode.k2Designer.utilities', {
            ellipsePath,
            highlight,
            appendStrings,
            isGuid,
            isNonEmptyGuid,
            isUndefinedOrNull: _app_shared_utils_general__WEBPACK_IMPORTED_MODULE_0__.isUndefinedOrNull,
            forEachAsync,
            getsmartFormsBaseUrl,
            shortUid: () => 'xxxx'
        });
        _EnsureNamespaces__WEBPACK_IMPORTED_MODULE_1__.Mocks.ensureNamespace('sourceCode.k2Designer.utilities.IForEachFunctionAsync', {});
    }
    TestUtilities.initTestUtilities = initTestUtilities;
    function dispose() {
        _EnsureNamespaces__WEBPACK_IMPORTED_MODULE_1__.Mocks.destroyNamespace('sourceCode.k2Designer.utilities', true);
    }
    TestUtilities.dispose = dispose;
    function ellipsePath(value, location) {
        if (value) {
            const split = value.split('/');
            const last = split.length - 1;
            if (split.length > 3) {
                switch (location) {
                    case 'start': {
                        value = '.../' + split[last];
                        break;
                    }
                    case 'end': {
                        value = split[0] + '/...';
                        break;
                    }
                    default: {
                        value = split[0] + '/.../' + split[last];
                        break;
                    }
                }
            }
        }
        return value;
    }
    /**
     * highlights a given search string within a given text string, if the highlighted search text is supplied
     *
     * @param text string in which highlight should occur
     * @param highlight string to highlight
     * @param sce ISCEService in AngularJS to ensure that HTML are trusted before updating the DOM
     */
    function highlight(text, highlight, sce) {
        if (!highlight) {
            return text;
        }
        const unsafe = text.replace(new RegExp(highlight, 'gi'), '<span class="search-highlight">$&</span>');
        let safe = '';
        safe = sce.trustAsHtml(unsafe);
        // implicit string converstion
        return safe.toString();
    }
    TestUtilities.highlight = highlight;
    /**
     * Appends array of strings into a single string.
     *
     * @param strings
     */
    function appendStrings(strings) {
        let result;
        const validTypes = ['string', 'boolean', 'number'];
        if (strings.length > 0) {
            for (let i = 0; i < strings.length; i++) {
                const isNotUndefined_Null_EmptyString = validTypes.indexOf(typeof strings[i]) > -1 ? strings[i].toString().length > 0 : false;
                if (isNotUndefined_Null_EmptyString) {
                    result = result ? result + strings[i].toString() : strings[i].toString();
                }
            }
        }
        return result;
    }
    TestUtilities.appendStrings = appendStrings;
    /**
     * Determines whether a string is a valid guid
     *
     * @param guidStr
     */
    function isGuid(guidStr) {
        const guidPattern = new RegExp('^(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})$', 'i');
        return guidPattern.test(guidStr);
    }
    TestUtilities.isGuid = isGuid;
    /**
     * Determines whether a string is an non-empty guid
     *
     * @param guidStr
     */
    function isNonEmptyGuid(guidStr) {
        if (sourceCode.k2Designer.utilities.isUndefinedOrNull(guidStr) || guidStr === '00000000-0000-0000-0000-000000000000') {
            return false;
        }
        return isGuid(guidStr);
    }
    TestUtilities.isNonEmptyGuid = isNonEmptyGuid;
    /**
     * Generate short unique ID
     */
    function shortUid() {
        return Math.random().toString(36).slice(-6);
    }
    TestUtilities.shortUid = shortUid;
    /** Asynchronously iterates through an array of items, calling the handler for each item. The onFinish handler will only be invoked when ALL item handlers have invoked their respective onCompleted callbacks
     *
     * @param items array of items to iterate
     * @param handler asdasd
     * @param returns asdasdasdas
     */
    function forEachAsync(items, handler, onFinish) {
        let ct = items ? items.length : 0;
        if (ct > 0) {
            items.forEach(function (item, idx) {
                handler(item, idx, function () {
                    ct--;
                    if (ct == 0) {
                        if (onFinish != null)
                            onFinish();
                    }
                });
            });
        }
        else {
            if (onFinish != null)
                onFinish();
        }
    }
    TestUtilities.forEachAsync = forEachAsync;
    function getsmartFormsBaseUrl(environmentService) {
        //Get the base url from web.config for environments that have splitted workspace, runtime and webservice applications in IIS.
        const smartFormsRuntimeBaseUrl = environmentService.appSettings.SmartFormsRuntimeBaseUrl;
        if (!sourceCode.k2Designer.utilities.isUndefinedOrNull(smartFormsRuntimeBaseUrl) && smartFormsRuntimeBaseUrl.length > 0) {
            if (smartFormsRuntimeBaseUrl[smartFormsRuntimeBaseUrl.length - 1] === '/') {
                return smartFormsRuntimeBaseUrl.substring(0, smartFormsRuntimeBaseUrl.length - 1);
            }
            else {
                return smartFormsRuntimeBaseUrl;
            }
        }
        else {
            //Use autodiscover webserviceUrl
            return environmentService.autoDiscoverResult.webService.Value;
        }
    }
    TestUtilities.getsmartFormsBaseUrl = getsmartFormsBaseUrl;
})(TestUtilities || (TestUtilities = {}));


/***/ })

}]);
//# sourceMappingURL=src_app_dev-harness_dev-harness_module_ts.js.map