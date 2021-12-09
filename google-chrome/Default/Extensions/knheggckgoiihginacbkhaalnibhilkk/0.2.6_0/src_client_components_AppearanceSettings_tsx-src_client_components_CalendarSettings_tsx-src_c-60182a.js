"use strict";
(self["webpackChunknotion_next"] = self["webpackChunknotion_next"] || []).push([["src_client_components_AppearanceSettings_tsx-src_client_components_CalendarSettings_tsx-src_c-60182a"],{

/***/ "./src/client/components/AppearanceSettings.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/AppearanceSettings.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _ButtonMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonMenuItem */ "./src/client/components/ButtonMenuItem.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuList */ "./src/client/components/MenuList.tsx");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _actions_themeActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/themeActions */ "./src/client/actions/themeActions.ts");
/* harmony import */ var _stores_AppearanceSettingsStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../stores/AppearanceSettingsStore */ "./src/client/stores/AppearanceSettingsStore.ts");





/* =============================================================================

	AppearanceSettings.

============================================================================= */














const options = ["system", "light", "dark"];
const messages = (0,notion_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  systemLabel: {
    id: "appearanceSetting.system.label",
    defaultMessage: "Use system setting"
  },
  lightLabel: {
    id: "appearanceSetting.light.label",
    defaultMessage: "Light"
  },
  darkLabel: {
    id: "appearanceSetting.dark.label",
    defaultMessage: "Dark"
  }
});

class AppearanceSettings extends _Component__WEBPACK_IMPORTED_MODULE_9__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "storeTypes", {
      appearanceStore: _stores_AppearanceSettingsStore__WEBPACK_IMPORTED_MODULE_17__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleChangeAppearance", appearance => {
      (0,_actions_themeActions__WEBPACK_IMPORTED_MODULE_16__.saveAppearanceSettings)(this.environment, appearance);
      this.stores.appearanceStore.setState({
        appearanceSetting: appearance
      });
    });
  }

  componentDidMount() {
    const appearance = (0,_actions_themeActions__WEBPACK_IMPORTED_MODULE_16__.getAppearanceSettings)(this.environment);
    this.stores.appearanceStore.setState({
      appearanceSetting: appearance
    });
  } // ===========================================================================
  // Render.
  // ===========================================================================


  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, this.renderHeader(), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: this.getSettingsOptionStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_15__.default, {
      isSmall: true,
      isMultiline: true,
      style: {
        marginTop: 2,
        width: "80%"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "appearanceSettings.description.message",
      defaultMessage: "Customize how Notion looks on your device."
    })), this.renderAppearanceButton()));
  }

  renderHeader() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_14__.default, {
      large: device.isMobile ? undefined : true,
      divider: device.isMobile ? undefined : "full"
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "appearanceSettings.title",
      defaultMessage: "Appearance"
    }));
  }

  renderAppearanceButton() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default, {
      popupType: device.isMobile ? _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.PopupType.SlideUp : _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.PopupType.Popup,
      placementToOrigin: _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.Placement.Right,
      renderOrigin: events => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_OutlineButton__WEBPACK_IMPORTED_MODULE_12__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, events, {
        isLarge: true,
        style: {
          marginTop: 12,
          marginBottom: 4
        }
      }), AppearanceSettings.getAppearanceLabel(this.stores.appearanceStore.state.appearanceSetting), _shared_icons__WEBPACK_IMPORTED_MODULE_6__.default.chevronDown({
        width: 10,
        marginLeft: 4,
        fill: this.theme.lightIconColor
      })),
      render: parent => {
        let menuProps;

        if (device.isMobile) {
          menuProps = {
            menuType: _Menu__WEBPACK_IMPORTED_MODULE_10__.default.MenuType.Modal,
            title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              defaultMessage: "Appearance",
              id: "appearanceSettings.modal.title"
            }),
            right: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              defaultMessage: "Done",
              id: "appearanceSettings.modal.done"
            }),
            onClickRight: parent.close
          };
        } else {
          menuProps = {
            menuType: _Menu__WEBPACK_IMPORTED_MODULE_10__.default.MenuType.Popup,
            width: 250
          };
        }

        const menuItems = options.map(option => {
          const menuItem = {
            key: option,
            action: args => {
              this.handleChangeAppearance(option);
              parent.close();
            },
            render: (props, parent) => {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ButtonMenuItem__WEBPACK_IMPORTED_MODULE_8__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
                title: AppearanceSettings.getAppearanceLabel(option)
              }));
            }
          };
          return menuItem;
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__.default, menuProps, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MenuList__WEBPACK_IMPORTED_MODULE_11__.default, {
          type: _MenuList__WEBPACK_IMPORTED_MODULE_11__.default.Type.Vertical,
          sections: [{
            key: "appearance section",
            render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_13__.default, args),
            items: menuItems
          }],
          initialFocus: undefined
        }));
      }
    });
  } // ===========================================================================
  // Events
  // ===========================================================================


  static getAppearanceLabel(appearance) {
    switch (appearance) {
      case "light":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, messages.lightLabel);

      case "dark":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, messages.darkLabel);

      case "system":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, messages.systemLabel);
    }
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getSettingsOptionStyle() {
    const {
      device,
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      paddingLeft: device.isMobile ? WindowSizeStore.state.paddingLeftCSS : 0,
      paddingRight: device.isMobile ? WindowSizeStore.state.paddingRightCSS : 0
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppearanceSettings);

/***/ }),

/***/ "./src/client/components/CalendarSettings.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/CalendarSettings.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");
/* harmony import */ var _SwitcherButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwitcherButton */ "./src/client/components/SwitcherButton.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");


/* =============================================================================

	CalendarSettings.

============================================================================= */







class CalendarSettings extends _Component__WEBPACK_IMPORTED_MODULE_3__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getSettingsOptionStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "calendarSettings.startWeekOnMonday.label",
      defaultMessage: "Start week on Monday"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      onClick: this.props.onClick,
      style: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: 12,
        cursor: "pointer",
        width: "100%"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        flex: 1
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      isSmall: true,
      isMultiline: true,
      style: {
        width: "80%"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "calendarSettings.startWeekOnMonday.message",
      defaultMessage: "This will change how all calendars in your app look."
    }))), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        marginTop: 5
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SwitcherButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      on: this.props.startDayOfWeek === 1,
      isAndroid: device.isAndroid
    }))));
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getSettingsOptionStyle() {
    const {
      device,
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      paddingLeft: device.isMobile ? WindowSizeStore.state.paddingLeftCSS : 0,
      paddingRight: device.isMobile ? WindowSizeStore.state.paddingRightCSS : 0
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarSettings);

/***/ }),

/***/ "./src/client/components/GuestPagesPopup.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/GuestPagesPopup.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/routerActions */ "./src/client/actions/routerActions.ts");
/* harmony import */ var _stores_BlockStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/BlockStore */ "./src/client/stores/BlockStore.ts");
/* harmony import */ var _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/ButtonPopupStore */ "./src/client/stores/ButtonPopupStore.ts");
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MenuList */ "./src/client/components/MenuList.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _RecordMenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RecordMenuItem */ "./src/client/components/RecordMenuItem.tsx");
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _MessageMenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MessageMenuItem */ "./src/client/components/MessageMenuItem.tsx");
/* harmony import */ var _actions_dialogActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/dialogActions */ "./src/client/actions/dialogActions.ts");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/api */ "./src/client/actions/api.ts");
/* harmony import */ var _actions_subscriptionActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/subscriptionActions */ "./src/client/actions/subscriptionActions.tsx");
/* harmony import */ var _helpers_getBlockUrl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../helpers/getBlockUrl */ "./src/client/helpers/getBlockUrl.ts");
/* harmony import */ var _actions_transactionActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actions/transactionActions */ "./src/client/actions/transactionActions.ts");
/* harmony import */ var _actions_permissionsActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../actions/permissionsActions */ "./src/client/actions/permissionsActions.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../actions/loadingStateActions */ "./src/client/actions/loadingStateActions.ts");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../helpers/subscriptionHelpers */ "./src/client/helpers/subscriptionHelpers.tsx");
/* harmony import */ var _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../stores/SubscriptionDataStore */ "./src/client/stores/SubscriptionDataStore.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _shared_Block__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/Block */ "./src/shared/Block.ts");





/* =============================================================================

	GuestPagesPopup.

============================================================================= */




























// =============================================================================
// Messages.
// =============================================================================
const messages = (0,notion_intl__WEBPACK_IMPORTED_MODULE_30__.defineMessages)({
  removingGuest: {
    id: "guestPagesPopup.removeGuest.updatingMessage",
    defaultMessage: "Updating…"
  },
  addingMember: {
    id: "guestPagesPopup.addMemberPermission.updatingMessage",
    defaultMessage: "Updating…"
  }
}); // =============================================================================
// GuestPagesPopup component.
// =============================================================================

class GuestPagesPopup extends _Component__WEBPACK_IMPORTED_MODULE_5__.default {
  constructor(..._args) {
    super(..._args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "storeTypes", {
      buttonPopupStore: _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_8__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderPopup", () => {
      const {
        device
      } = this.environment;
      const {
        store,
        guest
      } = this.props;
      const isAdmin = store.canAdmin();
      const menuListItems = guest.guestPageIds.map(pageId => {
        const pageStore = _stores_BlockStore__WEBPACK_IMPORTED_MODULE_7__.default.createChildStore(store, {
          table: _shared_Block__WEBPACK_IMPORTED_MODULE_31__.BlockTable,
          id: pageId
        });
        const item = {
          key: pageId,
          render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_RecordMenuItem__WEBPACK_IMPORTED_MODULE_12__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, args, {
            store: pageStore,
            placeholder: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
              id: "guestPagesPopup.privatePagePlaceholder",
              defaultMessage: "Private page"
            })
          })),
          action: () => {
            const pageStore = _stores_BlockStore__WEBPACK_IMPORTED_MODULE_7__.default.createChildStore(store, {
              table: _shared_Block__WEBPACK_IMPORTED_MODULE_31__.BlockTable,
              id: pageId
            });
            const url = (0,_helpers_getBlockUrl__WEBPACK_IMPORTED_MODULE_18__.default)({
              store: pageStore,
              fullyQualified: false
            });
            _actions_routerActions__WEBPACK_IMPORTED_MODULE_6__.navigate({
              environment: this.environment,
              url,
              metaClick: true
            });
          }
        };
        return item;
      });
      let menuProps;

      if (device.isMobile) {
        menuProps = {
          menuType: _Menu__WEBPACK_IMPORTED_MODULE_11__.default.MenuType.ActionSheet
        };
      } else {
        menuProps = {
          menuType: _Menu__WEBPACK_IMPORTED_MODULE_11__.default.MenuType.Popup,
          width: 300
        };
      }

      let convertToMemberButton;

      if ((0,_helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_28__.subscriptionAllowsMembers)(this.environment)) {
        convertToMemberButton = /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_21__.default, {
          renderTooltip: () => this.isSubscribed() ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.addMemberPermissionButton.tooltip",
            defaultMessage: "This guest will become a member of this workspace."
          }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.addAdminPermissionButton.tooltip",
            defaultMessage: "This guest will become an admin of this workspace."
          }),
          render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_OutlineButton__WEBPACK_IMPORTED_MODULE_25__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            isLarge: true,
            onClick: this.handleConvertToMemberClick
          }, tooltipEvents), this.isSubscribed() ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.addMemberPermissionButton.label",
            defaultMessage: "Convert to member"
          }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.addAdminPermissionButton.label",
            defaultMessage: "Convert to admin"
          }))
        });
      } // TODO: Better abstraction for these custom elements in the menu.


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_11__.default, menuProps, isAdmin &&
      /*#__PURE__*/
      // TODO: @sergey restyle this?
      _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MenuItem__WEBPACK_IMPORTED_MODULE_22__.default, {
        title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: {
            paddingTop: 12,
            paddingBottom: 8,
            display: "flex",
            alignItems: "flex-start"
          }
        }, void 0, convertToMemberButton, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_21__.default, {
          renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.removeGuestButton.tooltip",
            defaultMessage: "This guest will be removed from all pages in this Workspace."
          }),
          render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_OutlineButton__WEBPACK_IMPORTED_MODULE_25__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            isLarge: true,
            isRed: true,
            style: {
              marginLeft: convertToMemberButton ? 8 : 0
            },
            onClick: this.handleRemoveClick
          }, tooltipEvents), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.removeGuestButton.label",
            defaultMessage: "Remove"
          }))
        }))
      }), isAdmin && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MessageMenuItem__WEBPACK_IMPORTED_MODULE_14__.default, {
        title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
          id: "guestPagesPopup.guestAccessiblePagesCaption",
          defaultMessage: "This guest can access these pages"
        })
      }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MenuList__WEBPACK_IMPORTED_MODULE_10__.default, {
        type: _MenuList__WEBPACK_IMPORTED_MODULE_10__.default.Type.Vertical,
        initialFocus: 0,
        sections: [{
          key: "pages",
          render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_13__.default, args),
          items: menuListItems
        }]
      }));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleRemoveClick", () => {
      _actions_dialogActions__WEBPACK_IMPORTED_MODULE_15__.showDialog({
        showCancel: true,
        keepFocus: false,
        message: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
          id: "guestPagesPopup.removeGuestModal.confirmationMessage",
          defaultMessage: "Are you sure you want to remove this person? They will lose access to all shared pages."
        }),
        items: [{
          label: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
            id: "guestPagesPopup.removeGuestModal.removeButton.label",
            defaultMessage: "Remove"
          }),
          color: "red",
          onAccept: async () => {
            const {
              guest,
              store
            } = this.props;
            this.stores.buttonPopupStore.setState({ ...this.stores.buttonPopupStore.state,
              open: false
            });
            _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__.display({
              message: messages.removingGuest
            });
            const response = await _actions_api__WEBPACK_IMPORTED_MODULE_16__.removeUsersFromSpace(this.environment, {
              userIds: [guest.userId],
              spaceId: store.id,
              removePagePermissions: true,
              revokeUserTokens: false
            });

            if (response.type === "success") {
              await _actions_subscriptionActions__WEBPACK_IMPORTED_MODULE_17__.refresh(this.environment);
              _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_23__.trackRemoveGuest(this.environment);
            }

            _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__.close();
          }
        }]
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleConvertToMemberClick", async () => {
      const transaction = _actions_transactionActions__WEBPACK_IMPORTED_MODULE_19__.create(this.environment);
      const {
        store,
        guest,
        isSubscribed
      } = this.props;
      const done = _actions_permissionsActions__WEBPACK_IMPORTED_MODULE_20__.setPermissionItems({
        environment: this.environment,
        store: store,
        permissionItems: [{
          type: "user_permission",
          role: isSubscribed ? "read_and_write" : "editor",
          user_id: guest.userId
        }],
        transaction: transaction
      });
      void _actions_transactionActions__WEBPACK_IMPORTED_MODULE_19__.commit({
        environment: this.environment,
        transaction
      });
      this.stores.buttonPopupStore.setState({ ...this.stores.buttonPopupStore.state,
        open: false
      });
      _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__.display({
        message: messages.addingMember
      });

      try {
        await done;
        await _actions_subscriptionActions__WEBPACK_IMPORTED_MODULE_17__.refresh(this.environment);
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_23__.trackConvertGuestToMember(this.environment, {
          member_user_id: guest.userId
        });
      } finally {
        _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__.close();
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    const {
      buttonPopupStore
    } = this.stores;
    const {
      store,
      guest
    } = this.props; // Preload all pages.

    guest.guestPageIds.map(pageId => {
      const pageStore = _stores_BlockStore__WEBPACK_IMPORTED_MODULE_7__.default.createChildStore(store, {
        table: _shared_Block__WEBPACK_IMPORTED_MODULE_31__.BlockTable,
        id: pageId
      });
      pageStore.getValue();
    });

    if (guest.guestPageIds.length === 0) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
        id: "guestPagesPopup.permissionsForUserGuest.label",
        defaultMessage: "Guest"
      });
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_9__.default, {
      popupType: device.isMobile ? _ButtonPopup__WEBPACK_IMPORTED_MODULE_9__.default.PopupType.SlideUp : _ButtonPopup__WEBPACK_IMPORTED_MODULE_9__.default.PopupType.Popup,
      renderOrigin: buttonPopupEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_PlainButton__WEBPACK_IMPORTED_MODULE_26__.default, buttonPopupEvents, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_30__.FormattedMessage, {
        id: "guestPagesButton.label",
        defaultMessage: "{numberOfAccessiblePages, plural, one {{numberOfAccessiblePages} page} other {{numberOfAccessiblePages} pages}}",
        values: {
          numberOfAccessiblePages: guest.guestPageIds.length
        }
      }), _shared_icons__WEBPACK_IMPORTED_MODULE_27__.default.chevronDown({
        width: 10,
        marginLeft: 4,
        fill: this.theme.lightIconColor
      })),
      buttonPopupStore: buttonPopupStore,
      render: this.renderPopup
    });
  }

  // ===========================================================================
  // Helpers.
  // ===========================================================================
  isSubscribed() {
    const {
      data
    } = _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_29__.default.state;
    return Boolean(data && (0,_helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_28__.isSubscribed)(data));
  } // ===========================================================================
  // Events.
  // ===========================================================================


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_30__.injectIntl)(GuestPagesPopup));

/***/ }),

/***/ "./src/client/components/HelpButtonSettingsCaption.tsx":
/*!*************************************************************!*\
  !*** ./src/client/components/HelpButtonSettingsCaption.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./src/client/components/Link.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");


/* =============================================================================

	HelpButtonSettingsCaption.

============================================================================= */







class HelpButtonSettingsCaption extends _Component__WEBPACK_IMPORTED_MODULE_2__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Link__WEBPACK_IMPORTED_MODULE_3__.default, {
      style: {
        display: "flex",
        marginLeft: -6
      },
      className: "notion-print-ignore",
      href: this.props.href,
      external: true,
      onClick: () => _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_5__.trackClickHelpButton(this.environment, {
        from: this.props.analyticsFrom
      })
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_6__.default, {
      icon: _shared_icons__WEBPACK_IMPORTED_MODULE_4__.default.help,
      isSmall: true,
      isLightGray: true,
      shouldShrink: this.props.shouldShrink
    }, void 0, this.props.title));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelpButtonSettingsCaption);

/***/ }),

/***/ "./src/client/components/HighlightSelectionButton.tsx":
/*!************************************************************!*\
  !*** ./src/client/components/HighlightSelectionButton.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _helpers_mergeEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/mergeEvents */ "./src/client/helpers/mergeEvents.ts");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/TextSelectionStore */ "./src/client/stores/TextSelectionStore.ts");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MenuList */ "./src/client/components/MenuList.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _actions_textAnnotationActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/textAnnotationActions */ "./src/client/actions/textAnnotationActions.ts");
/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/colors */ "./src/shared/colors.ts");
/* harmony import */ var _BlockColorMenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./BlockColorMenuItem */ "./src/client/components/BlockColorMenuItem.tsx");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/typography */ "./src/shared/typography.ts");
/* harmony import */ var _stores_HighlightStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../stores/HighlightStore */ "./src/client/stores/HighlightStore.ts");
/* harmony import */ var _IgnoreSelectionArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IgnoreSelectionArea */ "./src/client/components/IgnoreSelectionArea.tsx");
/* harmony import */ var _stores_IgnoreSelectionAreaStore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../stores/IgnoreSelectionAreaStore */ "./src/client/stores/IgnoreSelectionAreaStore.ts");
/* harmony import */ var _shared_textHelpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/textHelpers */ "./src/shared/textHelpers.ts");
/* harmony import */ var _KeyboardShortcut__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./KeyboardShortcut */ "./src/client/components/KeyboardShortcut.tsx");
/* harmony import */ var _helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../helpers/textSelectionHelpers */ "./src/client/helpers/textSelectionHelpers.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _MobileModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./MobileModal */ "./src/client/components/MobileModal.tsx");





/* =============================================================================

	HighlightSelectionButton.

============================================================================= */

























const Fragment = (react__WEBPACK_IMPORTED_MODULE_4___default().Fragment);

class HighlightSelectionButton extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "storeTypes", {
      ignoreSelectionAreaStore: _stores_IgnoreSelectionAreaStore__WEBPACK_IMPORTED_MODULE_22__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderHighlightColorMenuItem", (highlightColor, overrideDisplayName, triggerRestoreSelection, parent) => {
      const menuItem = {
        key: overrideDisplayName || highlightColor,
        action: () => {
          triggerRestoreSelection();
          this.menuItemAction(highlightColor);
          parent.close();
        },
        render: props => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_BlockColorMenuItem__WEBPACK_IMPORTED_MODULE_18__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
            color: highlightColor,
            overrideDisplayName: overrideDisplayName
          }));
        }
      };
      return menuItem;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleToggleHighlightAnnotation", () => {
      _actions_textAnnotationActions__WEBPACK_IMPORTED_MODULE_16__.annotateSelection({
        environment: this.environment,
        annotation: ["h", _stores_HighlightStore__WEBPACK_IMPORTED_MODULE_20__.default.state.color]
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_9__.trackRichTextMenuClick(this.environment, {
        action: "h",
        color: _stores_HighlightStore__WEBPACK_IMPORTED_MODULE_20__.default.state.color
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleButtonPopupClick", e => {
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_9__.trackRichTextMenuClick(this.environment, {
        action: "h"
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleClose", () => {
      // Refocus on text selection
      _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_11__.default.emit();
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "menuItemAction", highlightColor => {
      // Unanotate first to make sure it changes the color.
      _actions_textAnnotationActions__WEBPACK_IMPORTED_MODULE_16__.unannotateSelection({
        environment: this.environment,
        annotationType: "h"
      });

      if (highlightColor !== "default") {
        _stores_HighlightStore__WEBPACK_IMPORTED_MODULE_20__.default.setHighlightColor(highlightColor);
        this.handleToggleHighlightAnnotation();
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    const {
      intl
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_5__.default, {
      popupType: device.isMobile ? _ButtonPopup__WEBPACK_IMPORTED_MODULE_5__.default.PopupType.SlideUp : _ButtonPopup__WEBPACK_IMPORTED_MODULE_5__.default.PopupType.Popup,
      originGap: 4,
      onClose: this.handleClose,
      onClick: this.handleButtonPopupClick,
      renderOrigin: buttonPopupEvents => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default, {
        renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
          defaultMessage: "Text color",
          id: "highlightSelectionButton.textColor.tooltip"
        })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_24__.default, {
          style: {
            color: this.theme.mediumInvertedTextColor
          },
          name: "toggleHighlight"
        }))),
        render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_10__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          style: {
            display: "flex",
            alignItems: "center",
            paddingLeft: 7,
            paddingRight: 6,
            whiteSpace: "nowrap",
            ...this.props.style
          },
          disabled: this.props.disabled,
          disabledFeedback: this.props.disabled
        }, (0,_helpers_mergeEvents__WEBPACK_IMPORTED_MODULE_8__.default)(buttonPopupEvents, tooltipEvents)), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
          style: this.getColorIconStyle()
        }, void 0, device.isMobile ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
          defaultMessage: "Color",
          id: "highlightSelectionButton.mobileColorIcon.label"
        }) : "A"), _shared_icons__WEBPACK_IMPORTED_MODULE_12__.default.chevronDown({
          width: 10,
          marginLeft: device.isMobile ? 4 : 3,
          fill: this.theme.mode === "dark" ? _shared_colors__WEBPACK_IMPORTED_MODULE_17__.default.white : this.theme.lightIconColor
        }))
      }),
      render: parent => {
        let menuProps;

        if (device.isMobile) {
          menuProps = {
            menuType: _Menu__WEBPACK_IMPORTED_MODULE_14__.default.MenuType.Modal,
            title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
              defaultMessage: "Text color",
              id: "highlightSelectionButton.mobileTextColor.label"
            }),
            right: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_MobileModal__WEBPACK_IMPORTED_MODULE_27__.CancelMenuText, {}),
            onClickRight: () => {
              parent.close();
            }
          };
        } else {
          menuProps = {
            menuType: _Menu__WEBPACK_IMPORTED_MODULE_14__.default.MenuType.Popup
          };
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_14__.default, menuProps, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_IgnoreSelectionArea__WEBPACK_IMPORTED_MODULE_21__.default, {
          capture: device.isMobile,
          store: this.stores.ignoreSelectionAreaStore,
          ignoreBlockSelection: false,
          restoreSelection: true,
          focusOffscreenInput: false,
          render: triggerRestoreSelection => {
            const textColorMenuItems = _shared_colors__WEBPACK_IMPORTED_MODULE_17__.blockTextColors.map(highlightColor => this.renderHighlightColorMenuItem(highlightColor, undefined, triggerRestoreSelection, parent));
            const backgroundColorMenuItems = [this.renderHighlightColorMenuItem("default", intl.formatMessage({
              defaultMessage: "Default background",
              id: "highlightSelectionButton.defaultBackground.label"
            }), triggerRestoreSelection, parent), ..._shared_colors__WEBPACK_IMPORTED_MODULE_17__.blockBackgroundColors.map(highlightColor => this.renderHighlightColorMenuItem(highlightColor, undefined, triggerRestoreSelection, parent))];
            const lastUsedColor = _stores_HighlightStore__WEBPACK_IMPORTED_MODULE_20__.default.state.color;
            return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_MenuList__WEBPACK_IMPORTED_MODULE_13__.default, {
              type: _MenuList__WEBPACK_IMPORTED_MODULE_13__.default.Type.Vertical,
              sections: [{
                key: 0,
                items: [{
                  key: 0,
                  action: () => {
                    triggerRestoreSelection();
                    this.menuItemAction(lastUsedColor);
                    parent.close();
                  },
                  render: props => {
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_BlockColorMenuItem__WEBPACK_IMPORTED_MODULE_18__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
                      color: lastUsedColor,
                      shortcuts: ["toggleHighlight"]
                    }));
                  }
                }],
                render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_15__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, args, {
                  title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
                    defaultMessage: "Last used",
                    id: "highlightSelectionButton.lastUsedSection.label"
                  }),
                  isTitleUppercase: true
                }))
              }, {
                key: 1,
                items: textColorMenuItems,
                render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_15__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, args, {
                  title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
                    defaultMessage: "Color",
                    id: "highlightSelectionButton.colorSection.label"
                  }),
                  isTitleUppercase: true
                }))
              }, {
                key: 2,
                items: backgroundColorMenuItems,
                render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_15__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, args, {
                  title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_26__.FormattedMessage, {
                    defaultMessage: "Background",
                    id: "highlightSelectionButton.backgroundSection.label"
                  }),
                  isTitleUppercase: true
                }))
              }],
              initialFocus: undefined
            });
          }
        }));
      }
    });
  }

  // ===========================================================================
  // Helpers.
  // ===========================================================================
  getTextSelectionColor() {
    const highlightAnnotation = (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_25__.getActiveAnnotationForType)("h");

    if (!highlightAnnotation) {
      return "default";
    }

    return _shared_textHelpers__WEBPACK_IMPORTED_MODULE_23__.getHighlightAnnotationData(highlightAnnotation);
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getColorIconStyle() {
    const {
      device
    } = this.environment;
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 18,
      textAlign: "center",
      fontSize: 15,
      borderRadius: 2,
      ...(!device.isMobile && {
        width: 18,
        fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_19__.default.fontWeight.medium,
        marginBottom: 2
      }),
      ...(0,_shared_colors__WEBPACK_IMPORTED_MODULE_17__.getHighlightColorStyle)(this.getTextSelectionColor(), this.theme)
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_26__.injectIntl)(HighlightSelectionButton));

/***/ }),

/***/ "./src/client/components/InlineCommentButton.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/InlineCommentButton.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_newDiscussionMenuActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/newDiscussionMenuActions */ "./src/client/actions/newDiscussionMenuActions.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyboardShortcut */ "./src/client/components/KeyboardShortcut.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/TextSelectionStore */ "./src/client/stores/TextSelectionStore.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _helpers_multiTextSelectionHelpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/multiTextSelectionHelpers */ "./src/client/helpers/multiTextSelectionHelpers.ts");





/* =============================================================================

	InlineCommentButton.

============================================================================= */













class InlineCommentButton extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleClick", e => {
      const textSelectionState = _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_11__.default.state;

      if (textSelectionState.mode === "editing") {
        const storeSelection = (0,_helpers_multiTextSelectionHelpers__WEBPACK_IMPORTED_MODULE_14__.TODO_getSingleTextStoreSelection)("InlineCommentButton", textSelectionState.multiSelection);

        if (!storeSelection) {
          return;
        }

        const textStore = storeSelection.store;
        void _actions_newDiscussionMenuActions__WEBPACK_IMPORTED_MODULE_5__.openNewInlineDiscussionMenu({
          environment: this.environment,
          textStore: textStore,
          blockStore: this.props.blockStore,
          selection: storeSelection.selection
        });
      }

      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_10__.trackRichTextMenuClick(this.environment, {
        action: "comment"
      });
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    const isMobile = device.isMobile;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default, {
      renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
        defaultMessage: "Comment on selected text",
        id: "inlineCommentButton.tooltip"
      })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__.default, {
        style: {
          color: this.theme.mediumInvertedTextColor
        },
        name: "comment"
      }))),
      render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_12__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        style: {
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          whiteSpace: "nowrap",
          ...this.props.style
        },
        disabled: this.props.disabled,
        disabledFeedback: this.props.disabled,
        onClick: this.handleClick
      }, tooltipEvents), _shared_icons__WEBPACK_IMPORTED_MODULE_9__.default.speechBubbleThin({
        width: isMobile ? 18 : 16,
        height: isMobile ? 18 : 16,
        marginTop: isMobile ? 0 : 1,
        marginRight: 4
      }), !isMobile && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
        defaultMessage: "Comment",
        id: "inlineCommentButton.commentLabel"
      }))
    });
  } // ===========================================================================
  // Events.
  // ===========================================================================


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineCommentButton);

/***/ }),

/***/ "./src/client/components/MentionsBadge.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/MentionsBadge.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/typography */ "./src/shared/typography.ts");
/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/colors */ "./src/shared/colors.ts");



/* =============================================================================

	MentionsBadge. Renders only if it has non-zero count value.

============================================================================= */




var MentionsBadgeColor;

(function (MentionsBadgeColor) {
  MentionsBadgeColor[MentionsBadgeColor["Red"] = 0] = "Red";
  MentionsBadgeColor[MentionsBadgeColor["Gray"] = 1] = "Gray";
})(MentionsBadgeColor || (MentionsBadgeColor = {}));

class MentionsBadge extends _Component__WEBPACK_IMPORTED_MODULE_3__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      count
    } = this.props;
    const isRed = this.props.color === MentionsBadgeColor.Red;

    if (!count || count <= 0) {
      return;
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: { ...MentionsBadge.style,
        ...this.props.style,
        ...(count > 99 && {
          width: undefined,
          padding: 2
        }),
        background: isRed ? _shared_colors__WEBPACK_IMPORTED_MODULE_5__.default.red : this.theme.lightIconColor
      }
    }, void 0, this.renderNumber());
  }

  renderNumber() {
    const {
      count
    } = this.props;

    if (!count) {
      return;
    }

    if (count === 1) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
        style: {
          marginBottom: 1,
          marginLeft: -0.5,
          // Optical alignment.
          letterSpacing: undefined,
          ...this.props.numberStyle
        }
      }, void 0, "1");
    } else if (count > 99) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
        style: {
          marginBottom: 1,
          letterSpacing: -0.5,
          ...this.props.numberStyle
        }
      }, void 0, "99+");
    } else if (count > 9) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
        style: {
          marginBottom: 1,
          letterSpacing: -0.5,
          marginLeft: -0.5,
          // Alignment fix for double digits.
          ...this.props.numberStyle
        }
      }, void 0, count);
    } else {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {
        style: {
          marginBottom: 1,
          ...this.props.numberStyle
        }
      }, void 0, count);
    }
  } // ===========================================================================
  // Styles.
  // ===========================================================================


}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MentionsBadge, "Color", MentionsBadgeColor);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MentionsBadge, "style", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 16,
  height: 16,
  fontSize: 10,
  textAlign: "center",
  fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_4__.default.fontWeight.semibold,
  borderRadius: 3,
  color: _shared_colors__WEBPACK_IMPORTED_MODULE_5__.default.white,
  position: "static",
  marginLeft: 6,
  // Sidebar has a different font smoothing, this makes the mention badge
  // font weight identical across the entire app.
  ["WebkitFontSmoothing"]: "auto"
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MentionsBadge);

/***/ }),

/***/ "./src/client/components/NotificationSettings.tsx":
/*!********************************************************!*\
  !*** ./src/client/components/NotificationSettings.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ "./src/client/components/Divider.tsx");
/* harmony import */ var _SwitcherButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwitcherButton */ "./src/client/components/SwitcherButton.tsx");
/* harmony import */ var _actions_recordActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/recordActions */ "./src/client/actions/recordActions.ts");
/* harmony import */ var _actions_transactionActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/transactionActions */ "./src/client/actions/transactionActions.ts");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _HelpButtonSettingsCaption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HelpButtonSettingsCaption */ "./src/client/components/HelpButtonSettingsCaption.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _helpers_routeHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/routeHelpers */ "./src/client/helpers/routeHelpers.ts");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");


/* =============================================================================

	NotificationSettings.

============================================================================= */















class NotificationSettings extends _Component__WEBPACK_IMPORTED_MODULE_2__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    const {
      intl
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, this.renderNotificationHeader(), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getSettingsOptionStyle(),
      className: "notifications-settings"
    }, void 0, this.renderSettingsOption(intl.formatMessage({
      id: "notificationSettings.mobilePushNotificationSettings.title",
      defaultMessage: "Mobile push notifications"
    }), intl.formatMessage({
      id: "notificationSettings.mobilePushNotificationSettings.description",
      defaultMessage: "Receive push notifications on mentions and comments via your mobile app."
    }), "notify_mobile"), device.isElectron && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Divider__WEBPACK_IMPORTED_MODULE_3__.default, {
      size: 24
    }), this.renderSettingsOption(intl.formatMessage({
      id: "notificationSettings.desktopNotificationSettings.title",
      defaultMessage: "Desktop push notifications"
    }), intl.formatMessage({
      id: "notificationSettings.desktopNotificationSettings.description",
      defaultMessage: "Receive push notifications on mentions and comments immediately via your desktop app."
    }), "notify_desktop")), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Divider__WEBPACK_IMPORTED_MODULE_3__.default, {
      size: 24
    }), this.renderSettingsOption(intl.formatMessage({
      id: "notificationSettings.emailNotificationSettings.title",
      defaultMessage: "Email notifications"
    }), intl.formatMessage({
      id: "notificationSettings.emailNotificationSettings.description",
      defaultMessage: "Receive email updates on mentions, comments, and edit digests for all the pages you have followed."
    }), "notify_email"), this.getSwitchValue("notify_email") && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Divider__WEBPACK_IMPORTED_MODULE_3__.default, {
      size: 24
    }), this.renderSettingsOption(intl.formatMessage({
      id: "notificationSettings.emailAlwaysNotificationSettings.title",
      defaultMessage: "Always send email notifications"
    }), intl.formatMessage({
      id: "notificationSettings.emailAlwaysNotificationSettings.description",
      defaultMessage: "Receive updates by email, even when you’re active on the app."
    }), "notify_email_always")), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Divider__WEBPACK_IMPORTED_MODULE_3__.default, {
      size: 24
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        marginTop: 4
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_HelpButtonSettingsCaption__WEBPACK_IMPORTED_MODULE_9__.default, {
      title: intl.formatMessage({
        id: "notificationSettings.helpButton.caption",
        defaultMessage: "Learn about mobile and desktop notifications"
      }),
      href: (0,_helpers_routeHelpers__WEBPACK_IMPORTED_MODULE_12__.getLocalizedUrl)("guides.notificationSettings"),
      analyticsFrom: "notifications_settings"
    }))));
  }

  renderNotificationHeader() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_13__.default, {
      large: device.isMobile ? undefined : true,
      divider: "full"
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
      id: "notificationSettings.notificationSection.title",
      defaultMessage: "Notifications"
    }));
  }

  renderSettingsOption(title, caption, switchType) {
    const {
      device
    } = this.environment;
    const switchValue = this.getSwitchValue(switchType);

    const handleClick = () => {
      this.handleToggle(switchType);

      if (switchType === "notify_mobile") {
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_7__.trackSetMobileNotification(this.environment, {
          is_on: !switchValue
        });
      } else if (switchType === "notify_desktop") {
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_7__.trackSetDesktopNotification(this.environment, {
          is_on: !switchValue
        });
      } else if (switchType === "notify_email") {
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_7__.trackSetEmailNotification(this.environment, {
          is_on: !switchValue
        });
      } else if (switchType === "notify_email_always") {
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_7__.trackSetEmailNotification(this.environment, {
          is_on: !switchValue
        });
      }
    };

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      onClick: handleClick,
      style: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        cursor: "pointer"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        flex: 1
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        fontSize: 14
      }
    }, void 0, title), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_10__.default, {
      isSmall: true,
      isMultiline: true,
      style: {
        width: "80%",
        marginTop: 4
      }
    }, void 0, caption)), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SwitcherButton__WEBPACK_IMPORTED_MODULE_4__.default, {
      on: Boolean(switchValue),
      disabled: switchValue === undefined,
      isAndroid: device.isAndroid
    }));
  } // ===========================================================================
  // Helpers.
  // ===========================================================================


  getSwitchValue(prop) {
    const {
      currentSpaceViewStore
    } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_8__.default.state;

    if (currentSpaceViewStore) {
      const spaceViewValue = currentSpaceViewStore.getValue();

      if (spaceViewValue) {
        return spaceViewValue[prop];
      }
    }
  } // ===========================================================================
  // Events.
  // ===========================================================================


  handleToggle(prop) {
    const {
      currentSpaceViewStore
    } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_8__.default.state;

    if (currentSpaceViewStore) {
      const spaceViewValue = currentSpaceViewStore.getValue();

      if (spaceViewValue) {
        const value = spaceViewValue[prop];
        _actions_transactionActions__WEBPACK_IMPORTED_MODULE_6__.createAndCommit(this.environment, transaction => {
          _actions_recordActions__WEBPACK_IMPORTED_MODULE_5__.updateValue({
            store: currentSpaceViewStore,
            data: {
              [prop]: !value
            },
            transaction
          });
        });
      }
    }
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getSettingsOptionStyle() {
    const {
      device,
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      paddingLeft: device.isMobile ? WindowSizeStore.state.paddingLeftCSS : 0,
      paddingRight: device.isMobile ? WindowSizeStore.state.paddingRightCSS : 0
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_11__.injectIntl)(NotificationSettings));

/***/ }),

/***/ "./src/client/components/PasswordSettings.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/PasswordSettings.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Request */ "./src/client/components/Request.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _stores_Value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/Value */ "./src/client/stores/Value.ts");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/PasswordModalStore */ "./src/client/stores/PasswordModalStore.ts");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/api */ "./src/client/actions/api.ts");
/* harmony import */ var _actions_dialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/dialogActions */ "./src/client/actions/dialogActions.ts");
/* harmony import */ var _helpers_classNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/classNames */ "./src/client/helpers/classNames.ts");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modal */ "./src/client/components/Modal.tsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Input */ "./src/client/components/Input.tsx");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _BlueButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BlueButton */ "./src/client/components/BlueButton.tsx");
/* harmony import */ var _SettingLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SettingLabel */ "./src/client/components/SettingLabel.tsx");
/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/colors */ "./src/shared/colors.ts");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _SmallButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SmallButton */ "./src/client/components/SmallButton.tsx");
/* harmony import */ var _IgnoreArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IgnoreArea */ "./src/client/components/IgnoreArea.tsx");
/* harmony import */ var _shared_passwordHelpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/passwordHelpers */ "./src/shared/passwordHelpers.ts");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");
/* harmony import */ var _helpers_errorMessages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../helpers/errorMessages */ "./src/client/helpers/errorMessages.ts");




/* =============================================================================

	PasswordSetting.

============================================================================= */
























class PasswordSettings extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "storeTypes", {
      hasPasswordStore: _stores_Value__WEBPACK_IMPORTED_MODULE_7__.default.of(false),
      emailStore: _stores_Value__WEBPACK_IMPORTED_MODULE_7__.default.of("")
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleChangePasswordClick", () => {
      _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({
        open: true,
        setNewPassword: true,
        password: "",
        repeatPassword: ""
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleOldPasswordChange", event => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal() || _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isRemovePasswordModal()) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          oldPassword: event.target.value,
          alert: undefined
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleClearOldPassword", () => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal() || _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isRemovePasswordModal()) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          oldPassword: "",
          alert: undefined
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePasswordChange", event => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          password: event.target.value,
          alert: undefined
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleCancelChangePassword", () => {
      const {
        onCancel
      } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
      _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.reset();

      if (onCancel) {
        onCancel();
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleClearPassword", () => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          password: "",
          repeatPassword: "",
          alert: undefined
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleRepeatPasswordChange", event => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          repeatPassword: event.target.value,
          alert: undefined
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleClearRepeatPassword", () => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          repeatPassword: "",
          alert: undefined
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePasswordBlur", () => {
      if (_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
        const {
          password,
          repeatPassword
        } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;

        if (password && repeatPassword && password !== repeatPassword) {
          _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
            alert: this.props.intl.formatMessage({
              id: "passwordSettings.changePasswordModal.newPasswordMismatchError",
              defaultMessage: "Your new password does not match."
            })
          });
        }
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleSubmit", async () => {
      if (!_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
        return;
      }

      const {
        oldPassword,
        password,
        repeatPassword
      } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
      const hasPassword = this.stores.hasPasswordStore.get();
      const {
        intl
      } = this.props;
      let errorMessage;

      if (hasPassword && !oldPassword) {
        errorMessage = intl.formatMessage({
          id: "passwordSettings.changePasswordModal.oldPasswordMissingError",
          defaultMessage: "Please enter your old password."
        });
      } else if (!password) {
        errorMessage = intl.formatMessage({
          id: "passwordSettings.changePasswordModal.passwordNotEnteredError",
          defaultMessage: "Please enter a password."
        });
      } else {
        const testResult = (0,_shared_passwordHelpers__WEBPACK_IMPORTED_MODULE_22__.testPasswordStrength)(password);

        if (!testResult.success) {
          errorMessage = this.getPasswordErrorMessage(testResult.reason);
        } else if (!repeatPassword) {
          errorMessage = intl.formatMessage({
            id: "passwordSettings.changePasswordModal.newPasswordNotRepeatedError",
            defaultMessage: "Please repeat your new password."
          });
        } else if (password !== repeatPassword) {
          errorMessage = intl.formatMessage({
            id: "passwordSettings.changePasswordModal.newPasswordsMismatchError",
            defaultMessage: "Your passwords do not match."
          });
        }
      }

      if (errorMessage) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          alert: errorMessage
        });
        return;
      }

      const response = await _actions_api__WEBPACK_IMPORTED_MODULE_10__.setPassword(this.environment, {
        oldPassword,
        newPassword: password
      });

      if (response.type === "success") {
        void this.props.requestStore.refresh();

        if (oldPassword === undefined) {
          this.saveNewPasswordSuccess();
        } else {
          this.changePasswordSuccess();
        }
      } else {
        const message = (0,_helpers_errorMessages__WEBPACK_IMPORTED_MODULE_24__.getMessageFromErrorResponse)(this.props.intl, response);
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          alert: message
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleShowRemovePasswordModalClick", () => {
      _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({
        open: true,
        removePassword: true,
        oldPassword: ""
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleRemovePasswordClick", async () => {
      if (!_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isRemovePasswordModal()) {
        return;
      }

      const {
        oldPassword
      } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;

      if (!oldPassword) {
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          alert: this.props.intl.formatMessage({
            id: "passwordSettings.removePasswordModal.oldPasswordNotEnteredError",
            defaultMessage: "Please enter your current password.",
            description: "We require users to enter their password in a text box before they can delete it. This error message appears if the user attempts to delete their password but hasn't entered it into the text box."
          })
        });
        return;
      }

      const response = await _actions_api__WEBPACK_IMPORTED_MODULE_10__.setPassword(this.environment, {
        oldPassword,
        clearPassword: true
      });

      if (response.type === "success") {
        void this.props.requestStore.refresh();
        this.removePasswordSuccess();
      } else {
        const responseError = (0,_helpers_errorMessages__WEBPACK_IMPORTED_MODULE_24__.getMessageFromErrorResponse)(this.props.intl, response);
        _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.setState({ ..._stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state,
          alert: responseError || this.props.intl.formatMessage({
            id: "passwordSettings.removePasswordModal.message",
            defaultMessage: "Error removing password. Please try again later."
          })
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "defaultErrorMessage", this.props.intl.formatMessage({
      id: "passwordSettings.genericPasswordSaveError",
      defaultMessage: "Error saving password. Please try again later."
    }));
  }

  willMount(props) {
    super.willMount(props);
    const {
      currentUserStore
    } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_8__.default.state;

    if (currentUserStore) {
      const userValue = currentUserStore.getValue();

      if (userValue) {
        this.stores.emailStore.set(userValue.email);
      }
    }
  } // ===========================================================================
  // Render.
  // ===========================================================================


  renderComponent() {
    const email = this.stores.emailStore.get();

    if (!email) {
      return;
    }

    const {
      requestStore
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getSettingsOptionStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_23__.default, {
      smallMarginBottom: true
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.title",
      defaultMessage: "Password"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Request__WEBPACK_IMPORTED_MODULE_5__.default, {
      request: {},
      requestStore: requestStore,
      performRequest: async () => {
        const response = await _actions_api__WEBPACK_IMPORTED_MODULE_10__.checkEmailType(this.environment, {
          email,
          allowAdminBypass: true
        });

        if (response.type === "success") {
          const {
            samlRedirect,
            hasPassword
          } = response.data;
          return {
            samlEnforced: samlRedirect && samlRedirect.enforced,
            hasPassword
          };
        } else {
          throw response.error;
        }
      },
      render: (error, result) => {
        if (error) {
          return PasswordSettings.renderLabel( /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "passwordSettings.passwordSetError.message",
            defaultMessage: "Your password cannot be set at this time. Please try again later."
          }));
        }

        if (result) {
          const {
            samlEnforced,
            hasPassword
          } = result;

          if (samlEnforced) {
            return PasswordSettings.renderLabel( /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "passwordSettings.passwordManagedThroughSAMLProvider.message",
              defaultMessage: "Your password is managed through your SAML Single Sign-on Provider.",
              description: "Message letting users know that their password is managed through a 3rd-party provider, which is why they can't set their password on Notion's password settings page."
            }));
          }

          this.stores.hasPasswordStore.set(Boolean(hasPassword));
          return this.renderPasswordActions();
        }
      }
    }));
  }

  renderPasswordActions() {
    const {
      isEducationPlan
    } = this.props;
    const hasPassword = this.stores.hasPasswordStore.get();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, PasswordSettings.renderLabel( /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.passwordSetInstructions",
      defaultMessage: "You can set a permanent password if you don't want to use temporary login codes."
    })), isEducationPlan && PasswordSettings.renderLabel(this.renderEducationPlanInfo()), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_15__.default, {
      isLarge: true,
      onClick: this.handleChangePasswordClick,
      style: {
        marginTop: 12,
        marginBottom: 4
      }
    }, void 0, hasPassword ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.changePasswordButton.label",
      defaultMessage: "Change password"
    }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.setPasswordButton.label",
      defaultMessage: "Set a password"
    })), this.canRemovePassword() && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SmallButton__WEBPACK_IMPORTED_MODULE_20__.default, {
      onClick: this.handleShowRemovePasswordModalClick,
      style: {
        marginLeft: 5,
        marginTop: 12,
        marginBottom: 4
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.removePasswordButton.label",
      defaultMessage: "Remove password"
    }))), this.renderPasswordModal());
  }

  static renderLabel(text) {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_19__.default, {
      isSmall: true,
      isMultiline: true,
      style: {
        marginTop: 2,
        width: "80%"
      }
    }, void 0, text);
  }

  renderPasswordModal() {
    const {
      device
    } = this.environment;
    const {
      open
    } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Modal__WEBPACK_IMPORTED_MODULE_13__.default, {
      open: open,
      onDismiss: this.handleCancelChangePassword,
      innerStyle: {
        width: device.isPhone ? "90%" : 460,
        minHeight: 270,
        padding: 24
      },
      className: _helpers_classNames__WEBPACK_IMPORTED_MODULE_12__.passwordModal,
      preventHideChildrenWhileOpening: true,
      render: () => {
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_IgnoreArea__WEBPACK_IMPORTED_MODULE_21__.default, {
          capture: true,
          allowEsc: true,
          render: () => {
            return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, this.renderSaveNewPassword(), this.renderRemovePassword());
          }
        });
      }
    });
  }

  renderSaveNewPassword() {
    const {
      isEducationPlan
    } = this.props;

    if (!_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isSetNewPasswordModal()) {
      return;
    }

    const {
      password,
      repeatPassword,
      oldPassword,
      alert
    } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
    const hasPassword = this.stores.hasPasswordStore.get();
    const email = this.stores.emailStore.get();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_14__.default // this hidden field is for password managers: https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands
    , {
      style: {
        display: "none"
      },
      type: "text",
      value: email,
      autoComplete: "username",
      disabled: true
    }), hasPassword && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingLabel__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.changePasswordModal.oldPasswordInput.label",
      defaultMessage: "Old Password"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_14__.default, {
      type: "password",
      value: oldPassword,
      onChange: this.handleOldPasswordChange,
      showClearButton: true,
      onClearButtonClick: this.handleClearOldPassword,
      placeholder: this.props.intl.formatMessage({
        id: "passwordSettings.oldPasswordInput.placeholder",
        defaultMessage: "Enter old password..."
      }),
      style: {
        padding: "4px 8px"
      },
      focusInitial: true,
      autoComplete: "current-password"
    })), hasPassword ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingLabel__WEBPACK_IMPORTED_MODULE_17__.default, {
      hasMarginTop: true
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.newPasswordInput.label",
      defaultMessage: "New password"
    })) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingLabel__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.passwordInput.label",
      defaultMessage: "Password"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_14__.default, {
      type: "password",
      value: password,
      onChange: this.handlePasswordChange,
      onSubmit: this.handleSubmit,
      showClearButton: true,
      onClearButtonClick: this.handleClearPassword,
      placeholder: this.props.intl.formatMessage({
        id: "passwordSettings.newPasswordInput.placeholder",
        defaultMessage: "Enter new password..."
      }),
      style: {
        padding: "4px 8px"
      },
      focusInitial: !hasPassword,
      onBlur: this.handlePasswordBlur,
      autoComplete: "new-password"
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingLabel__WEBPACK_IMPORTED_MODULE_17__.default, {
      hasMarginTop: true
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.repeatPasswordInput.label",
      defaultMessage: "Repeat password"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_14__.default, {
      type: "password",
      value: repeatPassword,
      onChange: this.handleRepeatPasswordChange,
      onSubmit: this.handleSubmit,
      showClearButton: true,
      onClearButtonClick: this.handleClearRepeatPassword,
      placeholder: this.props.intl.formatMessage({
        id: "passwordSettings.repeatPasswordInput.placeholder",
        defaultMessage: "Repeat new password..."
      }),
      style: {
        padding: "4px 8px"
      },
      onBlur: this.handlePasswordBlur,
      autoComplete: "new-password"
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_19__.default, {
      isMultiline: true,
      isSecondaryColor: true,
      style: {
        marginTop: 14
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.passwordGuidelines",
      defaultMessage: "Use a password at least 15 letters long, or at least 8 characters long with both letters and numbers."
    })), isEducationPlan && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_19__.default, {
      isMultiline: true,
      isSecondaryColor: true,
      style: {
        marginTop: 14
      }
    }, void 0, this.renderEducationPlanInfo()), this.renderAlert(alert), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_BlueButton__WEBPACK_IMPORTED_MODULE_16__.default, {
      isLarge: true,
      style: {
        marginTop: 14
      },
      onClick: this.handleSubmit
    }, void 0, hasPassword ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.changePasswordButton.label",
      defaultMessage: "Change password"
    }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.setPasswordButton.label",
      defaultMessage: "Set a password"
    })));
  }

  renderRemovePassword() {
    const {
      isEducationPlan
    } = this.props;

    if (!_stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.isRemovePasswordModal()) {
      return;
    }

    const {
      oldPassword,
      alert
    } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        fontSize: 14,
        width: "100%"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.removePasswordModal.text",
      defaultMessage: "You're about to remove your password. We'll email you temporary login codes to access Notion going forward.",
      description: "Message warning the user that they're about to delete their password, and telling them how to log in after their password has been deleted."
    }), isEducationPlan && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.removePasswordModal.educationPlanWarning",
      defaultMessage: "If you lose access to your school email, you'll be unable to log back into Notion.",
      description: "Warning for users on the Education Plan that if they lose access to their school email, they won't be able to log into Notion without a password."
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingLabel__WEBPACK_IMPORTED_MODULE_17__.default, {
      hasMarginTop: true
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.deletePasswordModal.passwordInput.label",
      defaultMessage: "Password"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_14__.default, {
      type: "password",
      value: oldPassword,
      onChange: this.handleOldPasswordChange,
      onSubmit: this.handleRemovePasswordClick,
      showClearButton: true,
      onClearButtonClick: this.handleClearOldPassword,
      placeholder: this.props.intl.formatMessage({
        id: "passwordSettings.removePasswordModal.passwordInput.placeholder",
        defaultMessage: "Enter your password..."
      }),
      style: {
        padding: "4px 8px"
      },
      focusInitial: true,
      autoComplete: "current-password"
    }), this.renderAlert(alert), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_BlueButton__WEBPACK_IMPORTED_MODULE_16__.default, {
      isLarge: true,
      style: {
        marginTop: 14
      },
      onClick: this.handleRemovePasswordClick
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.removePasswordModal.removePasswordButton.label",
      defaultMessage: "Remove password"
    })));
  }

  renderAlert(alert) {
    if (alert) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_19__.default, {
        isMultiline: true,
        style: {
          marginTop: 8,
          color: _shared_colors__WEBPACK_IMPORTED_MODULE_18__.default.red
        }
      }, void 0, alert);
    }
  }
  /**
   * Render a warning about the importance of passwords for Education Plan users.
   */


  renderEducationPlanInfo() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "passwordSettings.educationPlanGuidelines",
      defaultMessage: "If you lose access to your school email address, you'll be able to log in using your password."
    });
  } // ===========================================================================
  // Events.
  // ===========================================================================


  // ===========================================================================
  // Styles.
  // ===========================================================================
  getSettingsOptionStyle() {
    const {
      device,
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      paddingLeft: device.isMobile ? WindowSizeStore.state.paddingLeftCSS : 0,
      paddingRight: device.isMobile ? WindowSizeStore.state.paddingRightCSS : 0
    };
  } // ===========================================================================
  // Helpers.
  // ===========================================================================


  saveNewPasswordSuccess() {
    const {
      intl,
      isEducationPlan
    } = this.props;
    const {
      onSubmit
    } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
    _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.reset();
    const message = isEducationPlan ? intl.formatMessage({
      id: "passwordSettings.setPasswordSuccess.educationMessage",
      defaultMessage: "Your password is all set! You'll be able to log in, even if you lose access to your school email address."
    }) : intl.formatMessage({
      id: "passwordSettings.setPasswordSuccess.message",
      defaultMessage: "Your password is all set!"
    });
    _actions_dialogActions__WEBPACK_IMPORTED_MODULE_11__.showMessage({
      message,
      onAccept: onSubmit
    });
  }

  changePasswordSuccess() {
    const {
      onSubmit
    } = _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.state;
    _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.reset();
    _actions_dialogActions__WEBPACK_IMPORTED_MODULE_11__.showMessage({
      message: this.props.intl.formatMessage({
        id: "passwordSettings.changePasswordSuccess.message",
        defaultMessage: "Your new password has been saved."
      }),
      onAccept: onSubmit
    });
  }

  removePasswordSuccess() {
    _stores_PasswordModalStore__WEBPACK_IMPORTED_MODULE_9__.default.reset();
    _actions_dialogActions__WEBPACK_IMPORTED_MODULE_11__.showMessage({
      message: this.props.intl.formatMessage({
        id: "passwordSettings.removePasswordSuccess.message",
        defaultMessage: "Your password has been removed."
      })
    });
  }

  getPasswordErrorMessage(passwordErrorData) {
    const message = _helpers_errorMessages__WEBPACK_IMPORTED_MODULE_24__.passwordErrorMessages[passwordErrorData.type];
    return message ? this.props.intl.formatMessage(message) : this.defaultErrorMessage;
  }
  /**
   * Users can remove their passwords if:
   * - A password is set.
   * - They are not on the Education Plan, since Education Plan users need passwords to access to their account if they lose their institutional email.
   */


  canRemovePassword() {
    const {
      isEducationPlan
    } = this.props;
    const hasPassword = this.stores.hasPasswordStore.get(); // Education Plan users need a password to maintain access to their account after they lose their institutional email.

    if (isEducationPlan) {
      return false;
    }

    return hasPassword;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(PasswordSettings));

/***/ }),

/***/ "./src/client/components/PublicTopbarMoreButton.tsx":
/*!**********************************************************!*\
  !*** ./src/client/components/PublicTopbarMoreButton.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _ActionMenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ActionMenuList */ "./src/client/components/ActionMenuList.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var _actions_selectionActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/selectionActions */ "./src/client/actions/selectionActions.ts");
/* harmony import */ var _actions_actionRegistry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/actionRegistry */ "./src/client/actions/actionRegistry.tsx");





/* =============================================================================

	PublicTopbarMoreButton.

============================================================================= */












class PublicTopbarMoreButton extends _Component__WEBPACK_IMPORTED_MODULE_8__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderOrigin", buttonPopupEvents => {
      const {
        device
      } = this.environment;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_12__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        style: this.getButtonStyle(),
        mobileFeedback: device.isMobile
      }, buttonPopupEvents), _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.dots({
        width: 18,
        height: 18
      }));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderPopup", () => {
      const {
        device
      } = this.environment;
      const {
        store
      } = this.props;
      const context = {
        environment: this.environment,
        blocks: [store]
      };
      let menuProps;

      if (device.isMobile) {
        menuProps = {
          menuType: _Menu__WEBPACK_IMPORTED_MODULE_10__.default.MenuType.ActionSheet
        };
      } else {
        menuProps = {
          menuType: _Menu__WEBPACK_IMPORTED_MODULE_10__.default.MenuType.Popup,
          width: 210,
          maxHeight: "80vh"
        };
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__.default, menuProps, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_ActionMenuList__WEBPACK_IMPORTED_MODULE_9__.default, {
        sections: _actions_actionRegistry__WEBPACK_IMPORTED_MODULE_14__.publicTopbarMoreActions,
        onAccept: this.handleAccept,
        context: context
      }));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleClick", () => {
      _actions_selectionActions__WEBPACK_IMPORTED_MODULE_13__.clear(this.environment);
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_6__.trackOpenPublicMoreMenu(this.environment);
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleDismiss", () => {
      this.props.buttonPopupStore.setState({ ...this.props.buttonPopupStore.state,
        open: false
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleAccept", action => {
      const {
        currentBlockStore
      } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__.default.state;

      if (currentBlockStore) {
        const blockType = currentBlockStore.getType();

        if (blockType) {
          _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_6__.trackBlockAction(this.environment, {
            analyticsName: action.analyticsName,
            from: "public_topbar_more_menu",
            block_type: blockType
          });
        }
      }

      if (action.closeParentMenu) {
        this.handleDismiss();
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default, {
      popupType: device.isMobile ? _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.PopupType.SlideUp : _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.PopupType.Popup,
      buttonPopupStore: this.props.buttonPopupStore,
      renderOrigin: this.renderOrigin,
      onClick: this.handleClick,
      render: this.renderPopup,
      originGap: 8
    });
  }

  // ===========================================================================
  // Styles.
  // ===========================================================================
  getButtonStyle() {
    const {
      device
    } = this.environment;

    if (device.isMobile) {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        // Easier to tap.
        marginLeft: 8,
        marginRight: 8
      };
    } else {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 28,
        borderRadius: 3
      };
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicTopbarMoreButton);

/***/ }),

/***/ "./src/client/components/SearchSectionMenuItem.tsx":
/*!*********************************************************!*\
  !*** ./src/client/components/SearchSectionMenuItem.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");




/* =============================================================================

    SearchSectionMenuItem is a variant of SectionMenuItem with props
    used throughout the Search UI.

============================================================================= */




class SearchSectionMenuItem extends _Component__WEBPACK_IMPORTED_MODULE_5__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "styles", {
      desktopTitleStyle: {
        marginBottom: 4
      },
      marginAfter: {
        marginBottom: 16
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      title,
      marginAfter,
      desktopStyle,
      desktopTitleStyle,
      ...props
    } = this.props;
    const styles = this.styles;
    const mergedDesktopStyle = (marginAfter || desktopStyle) && { ...(marginAfter && styles.marginAfter),
      ...desktopStyle
    };
    const mergedDesktopTitleStyle = desktopTitleStyle ? { ...styles.desktopTitleStyle,
      ...desktopTitleStyle
    } : styles.desktopTitleStyle;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_4__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      isTitleUppercase: true,
      disableDesktopPadding: true,
      enableActionSheetTitle: true,
      desktopStyle: mergedDesktopStyle,
      desktopTitleStyle: mergedDesktopTitleStyle,
      shouldShowBottomDivider: false,
      title: title
    }, props));
  } // ===========================================================================
  // Styles.
  // ===========================================================================


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSectionMenuItem);

/***/ }),

/***/ "./src/client/components/SearchSortMenu.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/SearchSortMenu.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AlignBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlignBox */ "./src/client/components/AlignBox.tsx");
/* harmony import */ var _ButtonMenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonMenuItem */ "./src/client/components/ButtonMenuItem.tsx");
/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/colors */ "./src/shared/colors.ts");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _SearchSectionMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchSectionMenuItem */ "./src/client/components/SearchSectionMenuItem.tsx");
/* harmony import */ var _SelectButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SelectButton */ "./src/client/components/SelectButton.tsx");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/typography */ "./src/shared/typography.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _hooks_useEnvironment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useEnvironment */ "./src/client/hooks/useEnvironment.ts");
/* harmony import */ var _hooks_useStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useStyles */ "./src/client/hooks/useStyles.ts");



/* =============================================================================

    SearchSortMenu allows the user to sort advanced search results.

============================================================================= */












function SearchSortMenu(props) {
  const selectButton = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();
  const device = (0,_hooks_useEnvironment__WEBPACK_IMPORTED_MODULE_11__.useDevice)();
  const {
    isMobile
  } = device;
  const {
    activeOption,
    items
  } = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => getCurrentItems({ ...props,
    selectButton
  }), [props, selectButton]);
  const styles = (0,_hooks_useStyles__WEBPACK_IMPORTED_MODULE_12__.useStyles)(theme => ({
    selectedTitle: {
      color: theme.mediumTextColor
    },
    label: {
      // Cancel "margin-right: auto;" from SelectButton.
      marginRight: 2,
      fontSize: isMobile ? _shared_typography__WEBPACK_IMPORTED_MODULE_9__.default.fontSize.UISmall.mobile : _shared_typography__WEBPACK_IMPORTED_MODULE_9__.default.fontSize.UISmall.desktop,
      // Fixes baseline alignment offset due to pixel rounding.
      transform: "translateY(0.5px)"
    },
    innerButton: {
      color: theme.mediumTextColor,
      fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_9__.default.fontWeight.medium,
      fontSize: isMobile ? _shared_typography__WEBPACK_IMPORTED_MODULE_9__.default.fontSize.UISmall.mobile : _shared_typography__WEBPACK_IMPORTED_MODULE_9__.default.fontSize.UISmall.desktop,
      // Unset PlainButton defaults.
      height: 20,
      padding: "2px 4px",
      marginRight: 1,
      // Give room for focus ring.
      transform: "translateY(0.5px)"
    },
    menu: {
      // Allow enough room for "Last edited: newest" to render with a checkmark.
      minWidth: 200
    }
  }), [isMobile]); // Don't show the section title on mobile, since dropdown is aligned
  // to the labeled origin.

  const title = isMobile ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
    id: "search.sort.sortMenuTitle",
    defaultMessage: "Sort By"
  }) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SelectButton__WEBPACK_IMPORTED_MODULE_8__.default, {
    ref: node => {
      if (node) {
        selectButton.current = node;
      }
    },
    alignmentToOrigin: _AlignBox__WEBPACK_IMPORTED_MODULE_3__.Alignment.Start,
    selectedTitle: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: styles.selectedTitle
    }, void 0, activeOption.formattedName),
    label: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
      id: "search.sort.sortButtonPrefixLabel",
      defaultMessage: "Sort:",
      description: "Will be displayed next to a sortOrder"
    }),
    renderMenuSections: () => [{
      key: "searchSortOrder",
      render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SearchSectionMenuItem__WEBPACK_IMPORTED_MODULE_7__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, args, {
        title: title,
        desktopStyle: styles.menu,
        disableDesktopPadding: false
      })),
      items
    }],
    labelStyle: styles.label,
    innerButtonStyle: styles.innerButton
  });
}

function getCurrentItems(args) {
  const {
    currentSortBy,
    setSortBy,
    sortOptions,
    selectButton
  } = args;
  let activeOption = sortOptions[0];
  const items = sortOptions.map(sortOption => {
    const isActive = sortOption.key === currentSortBy;

    if (isActive) {
      activeOption = sortOption;
    }

    return {
      key: sortOption.key,
      action: () => {
        setSortBy(sortOption.key); // Close the menu if it's open.

        if (selectButton && selectButton.current) {
          selectButton.current.closeMenu();
        }
      },
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ButtonMenuItem__WEBPACK_IMPORTED_MODULE_4__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        title: sortOption.formattedName,
        right: isActive && _shared_icons__WEBPACK_IMPORTED_MODULE_6__.default.check({
          fill: _shared_colors__WEBPACK_IMPORTED_MODULE_5__.default.blue,
          width: 12,
          height: 12
        })
      }))
    };
  });
  return {
    activeOption,
    items
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSortMenu);

/***/ }),

/***/ "./src/client/components/SelectButton.tsx":
/*!************************************************!*\
  !*** ./src/client/components/SelectButton.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuList */ "./src/client/components/MenuList.tsx");
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _stores_SelectButtonStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/SelectButtonStore */ "./src/client/stores/SelectButtonStore.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stores/ButtonPopupStore */ "./src/client/stores/ButtonPopupStore.ts");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _DropdownMenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DropdownMenuItem */ "./src/client/components/DropdownMenuItem.tsx");





/* =============================================================================

	SelectButton.
	Show a menu when the user clicks the button.
	When rendering your menu actions, remember to call parent.close() if needed.

============================================================================= */











class SelectButton extends _Component__WEBPACK_IMPORTED_MODULE_5__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "storeTypes", {
      buttonPopupStore: _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_10__.default,
      SelectButtonStore: _stores_SelectButtonStore__WEBPACK_IMPORTED_MODULE_8__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderMenuItemOrigin", events => {
      const {
        style
      } = this.props;

      if (this.props.isMenuItem) {
        // If label is provided, render the label as title and selected option to the right.
        const labelProps = this.props.label ? {
          title: this.props.label,
          right: this.props.selectedTitle
        } : // If no label is provided, just render the selected option.
        {
          title: this.props.selectedTitle
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_DropdownMenuItem__WEBPACK_IMPORTED_MODULE_13__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, events, {
          focused: !!this.props.focused,
          disabled: this.props.disabled,
          style: style
        }, labelProps));
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderButtonOrigin", events => {
      const {
        innerButtonStyle
      } = this.props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_PlainButton__WEBPACK_IMPORTED_MODULE_11__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        disabled: this.props.disabled,
        disabledFeedback: true,
        style: {
          marginRight: -6,
          ...innerButtonStyle
        }
      }, events), this.props.selectedTitle, this.chevronDownIcon());
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleSelection", key => {
      this.stores.SelectButtonStore.setState({
        selectedKey: key
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "closeMenu", () => {
      const {
        buttonPopupStore
      } = this.stores;
      buttonPopupStore.setState({ ...buttonPopupStore.state,
        open: false
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "chevronDownIcon", () => {
      const {
        device
      } = this.environment;
      return _shared_icons__WEBPACK_IMPORTED_MODULE_12__.default.chevronDown({
        width: device.isMobile ? 14 : 10,
        marginLeft: 4,
        fill: this.theme.lightIconColor
      });
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      isMenuItem,
      style,
      labelStyle
    } = this.props;

    if (isMenuItem) {
      return this.renderButtonPopup(this.renderMenuItemOrigin);
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        display: "flex",
        alignItems: "center",
        height: 32,
        ...style
      }
    }, void 0, this.props.label && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        marginRight: "auto",
        color: this.theme.lightTextColor,
        fontSize: 14,
        ...labelStyle
      }
    }, void 0, this.props.label), this.renderButtonPopup(this.renderButtonOrigin));
  }

  renderButtonPopup(renderOrigin) {
    const {
      device
    } = this.environment;
    const {
      alignmentToOrigin
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default, {
      popupType: device.isMobile ? _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.PopupType.SlideUp : _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.PopupType.Popup,
      buttonPopupStore: this.stores.buttonPopupStore,
      alignmentToOrigin: alignmentToOrigin !== undefined ? alignmentToOrigin : _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.Alignment.End,
      renderOrigin: renderOrigin,
      placementToOrigin: this.props.isMenuItem ? _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.Placement.Right : _ButtonPopup__WEBPACK_IMPORTED_MODULE_7__.default.Placement.Bottom,
      render: parent => {
        let menuProps;

        if (device.isMobile) {
          menuProps = {
            menuType: _Menu__WEBPACK_IMPORTED_MODULE_9__.default.MenuType.ActionSheet
          };
        } else {
          menuProps = {
            menuType: _Menu__WEBPACK_IMPORTED_MODULE_9__.default.MenuType.Popup
          };
        }

        const {
          focusedIndex,
          menuSections
        } = this.getMenuSections(parent);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_9__.default, menuProps, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_MenuList__WEBPACK_IMPORTED_MODULE_6__.default, {
          type: _MenuList__WEBPACK_IMPORTED_MODULE_6__.default.Type.Vertical,
          initialFocus: focusedIndex,
          sections: menuSections
        }));
      }
    });
  }

  getMenuSections(parent) {
    let focusedIndex = undefined;
    let totalIndex = 0;
    const originalMenuSections = this.props.renderMenuSections(parent);
    const menuSections = originalMenuSections.map(section => {
      return { ...section,
        items: section.items.map(item => {
          if (item.key === this.stores.SelectButtonStore.state.selectedKey) {
            focusedIndex = totalIndex;
          }

          totalIndex++;
          return { ...item,
            action: action => {
              item.action(action);
              this.handleSelection(item.key);
            }
          };
        })
      };
    });
    return {
      menuSections,
      focusedIndex
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectButton);

/***/ }),

/***/ "./src/client/components/SelectionAnnotationButton.tsx":
/*!*************************************************************!*\
  !*** ./src/client/components/SelectionAnnotationButton.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_textAnnotationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/textAnnotationActions */ "./src/client/actions/textAnnotationActions.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/TextSelectionStore */ "./src/client/stores/TextSelectionStore.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/colors */ "./src/shared/colors.ts");
/* harmony import */ var _helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/textSelectionHelpers */ "./src/client/helpers/textSelectionHelpers.ts");





/* =============================================================================

	SelectionAnnotationButton.

============================================================================= */










class SelectionAnnotationButton extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleClick", e => {
      _actions_textAnnotationActions__WEBPACK_IMPORTED_MODULE_5__.annotateSelection({
        environment: this.environment,
        annotation: [this.props.type]
      });

      if (this.props.onClick) {
        this.props.onClick();
      }

      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_8__.trackRichTextMenuClick(this.environment, {
        action: this.props.type
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "isDisabledStore", this.createComputedStore(() => {
      return this.props.disabled || _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_9__.default.state.mode !== "editing";
    }));
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default, {
      renderTooltip: () => this.props.tooltipLabel,
      render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_10__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        style: this.getButtonStyle(),
        disabled: this.isDisabledStore.state,
        disabledFeedback: this.isDisabledStore.state,
        onClick: this.handleClick
      }, tooltipEvents), this.props.children)
    });
  } // ===========================================================================
  // Events.
  // ===========================================================================


  // ===========================================================================
  // Styles.
  // ===========================================================================
  getButtonStyle() {
    const isSelected = (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_12__.getActiveAnnotationForType)(this.props.type);
    return {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      color: isSelected ? _shared_colors__WEBPACK_IMPORTED_MODULE_11__.default.blue : this.theme.regularTextColor,
      ...this.props.style
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionAnnotationButton);

/***/ }),

/***/ "./src/client/components/SelectionEquationButton.tsx":
/*!***********************************************************!*\
  !*** ./src/client/components/SelectionEquationButton.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/textHelpers */ "./src/shared/textHelpers.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var _actions_equationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/equationActions */ "./src/client/actions/equationActions.ts");
/* harmony import */ var _stores_EquationAnnotationStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/EquationAnnotationStore */ "./src/client/stores/EquationAnnotationStore.ts");
/* harmony import */ var _helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/textSelectionHelpers */ "./src/client/helpers/textSelectionHelpers.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _KeyboardShortcut__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KeyboardShortcut */ "./src/client/components/KeyboardShortcut.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../stores/TextSelectionStore */ "./src/client/stores/TextSelectionStore.ts");





/* =============================================================================

    SelectionEquationButton creates an equation from the selected text.

============================================================================= */












class SelectionEquationButton extends _Component__WEBPACK_IMPORTED_MODULE_12__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderMenuTooltip", () => {
      const colors = this.getThemeColors();
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
        id: "richTextMenu.equationButton.tooltip",
        defaultMessage: "Create equation"
      })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_11__.default, {
        style: colors.keyboardShortcut,
        name: "openEquationMenu"
      })));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleButtonPopupClick", e => {
      const {
        onClick
      } = this.props;
      _actions_equationActions__WEBPACK_IMPORTED_MODULE_7__.openMenu({
        environment: this.environment,
        analyticsFrom: "rich_text_menu"
      });

      if (onClick) {
        onClick(e);
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "isSelected", () => {
      return (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_9__.getActiveAnnotationForType)(_shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Equation);
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "isDisabled", () => {
      const {
        disabled
      } = this.props;

      if (disabled) {
        return true;
      } // User must be editing text or in the equation menu.


      if (_stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_14__.default.state.mode !== "editing" && !_stores_EquationAnnotationStore__WEBPACK_IMPORTED_MODULE_8__.default.isOpen()) {
        return true;
      }

      const disallowedAnnotations = {
        [_shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.User]: _shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.User,
        [_shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Page]: _shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Page,
        [_shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Bot]: _shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Bot,
        [_shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Date]: _shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.Date,
        [_shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.TemporaryPage]: _shared_textHelpers__WEBPACK_IMPORTED_MODULE_5__.annotationType.TemporaryPage
      };

      for (const annotation of Object.values(disallowedAnnotations)) {
        // Equations cannot be created from these annotation types.
        if ((0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_9__.textSelectionContainsAnnotationType)(annotation)) {
          return true;
        }
      }

      return false;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "styles", {
      equationButton: {
        display: "flex",
        alignItems: "center",
        borderRadius: 0,
        paddingLeft: 7,
        paddingRight: 8
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      style,
      children
    } = this.props;
    const colors = this.getThemeColors();
    const isDisabled = this.isDisabled();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_13__.default, {
      renderTooltip: this.renderMenuTooltip,
      render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        style: { ...this.styles.equationButton,
          ...colors.equationButton,
          ...style
        },
        disabled: isDisabled,
        disabledFeedback: isDisabled,
        onClick: this.handleButtonPopupClick
      }, tooltipEvents), children)
    });
  }

  // ===========================================================================
  // Styles.
  // ===========================================================================
  getThemeColors() {
    return {
      equationButton: {
        color: this.isSelected() ? this.theme.blueColor : this.theme.regularTextColor
      },
      keyboardShortcut: {
        color: this.theme.mediumInvertedTextColor
      }
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_10__.injectIntl)(SelectionEquationButton));

/***/ }),

/***/ "./src/client/components/SelectionLinkButton.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/SelectionLinkButton.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_linkAnnotationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/linkAnnotationActions */ "./src/client/actions/linkAnnotationActions.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyboardShortcut */ "./src/client/components/KeyboardShortcut.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var _stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/TextSelectionStore */ "./src/client/stores/TextSelectionStore.ts");
/* harmony import */ var _stores_LinkAnnotationStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stores/LinkAnnotationStore */ "./src/client/stores/LinkAnnotationStore.ts");
/* harmony import */ var _helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/textSelectionHelpers */ "./src/client/helpers/textSelectionHelpers.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/textHelpers */ "./src/shared/textHelpers.ts");





/* =============================================================================

	SelectionLinkButton.

============================================================================= */














class SelectionLinkButton extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleButtonPopupClick", () => {
      _actions_linkAnnotationActions__WEBPACK_IMPORTED_MODULE_5__.openLinkAnnotationMenu({
        focus: true
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_9__.trackRichTextMenuClick(this.environment, {
        action: _shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__.annotationType.Link
      });
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const isSelected = (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_13__.getActiveAnnotationForType)(_shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__.annotationType.Link);
    const isDisabled = this.isDisabled();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default, {
      renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_14__.FormattedMessage, {
        defaultMessage: "Add link",
        id: "selectionLinkButton.addLink.tooltip",
        description: "Prompt for the user to add a URL to link to from the selected text."
      })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__.default, {
        style: {
          color: this.theme.mediumInvertedTextColor
        },
        name: "openLinkMenu"
      }))),
      render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_10__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        style: {
          display: "flex",
          alignItems: "center",
          borderRadius: 0,
          paddingLeft: 7,
          paddingRight: 8,
          ...(isSelected && {
            color: this.theme.blueColor
          }),
          whiteSpace: "nowrap",
          ...this.props.style
        },
        disabled: isDisabled,
        disabledFeedback: isDisabled
      }, tooltipEvents, {
        onClick: this.handleButtonPopupClick
      }), this.props.children)
    });
  }

  isDisabled() {
    if (this.props.disabled) {
      return true;
    } // User must be editing text or in the link menu.


    if (_stores_TextSelectionStore__WEBPACK_IMPORTED_MODULE_11__.default.state.mode !== "editing" && !_stores_LinkAnnotationStore__WEBPACK_IMPORTED_MODULE_12__.default.state.open) {
      return true;
    } // Links cannot be created from these annotation types.


    if ((0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_13__.textSelectionContainsAnnotationType)(_shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__.annotationType.User) || (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_13__.textSelectionContainsAnnotationType)(_shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__.annotationType.Bot) || (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_13__.textSelectionContainsAnnotationType)(_shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__.annotationType.Date) || (0,_helpers_textSelectionHelpers__WEBPACK_IMPORTED_MODULE_13__.textSelectionContainsAnnotationType)(_shared_textHelpers__WEBPACK_IMPORTED_MODULE_15__.annotationType.Page)) {
      return true;
    }

    return false;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_14__.injectIntl)(SelectionLinkButton));

/***/ }),

/***/ "./src/client/components/SettingBox.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/SettingBox.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Divider */ "./src/client/components/Divider.tsx");
/* harmony import */ var _Scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scroller */ "./src/client/components/Scroller.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");


/* ================================================================================

	SettingBox.

================================================================================ */





class SettingBox extends _Component__WEBPACK_IMPORTED_MODULE_4__.default {
  static renderDivider() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Divider__WEBPACK_IMPORTED_MODULE_2__.default, {
      size: 37
    });
  }

  renderComponent() {
    const {
      device
    } = this.environment;
    const {
      children,
      controlRow
    } = this.props;

    const getPaddingLeftRight = () => device.isMobile ? 18 : 60;

    const getPaddingTopBottom = () => device.isMobile ? 18 : 36;

    const controlRowPaddingTopBottom = 16;

    if (!this.props.disableScroller) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: this.theme.contentBackground
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Scroller__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: _Scroller__WEBPACK_IMPORTED_MODULE_3__.OverflowType.All,
        style: {
          flexGrow: 1,
          WebkitOverflowScrolling: "touch",
          // Necessary for smooth scrolling in safari.
          transform: "translateZ(0)",
          paddingLeft: getPaddingLeftRight(),
          paddingRight: getPaddingLeftRight(),
          paddingTop: getPaddingTopBottom(),
          paddingBottom: getPaddingTopBottom()
        }
      }, void 0, children), controlRow && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          flexGrow: 0,
          flexShrink: 0,
          paddingLeft: getPaddingLeftRight(),
          paddingRight: getPaddingLeftRight(),
          paddingTop: controlRowPaddingTopBottom,
          paddingBottom: controlRowPaddingTopBottom,
          boxShadow: "0 -1px 0 ".concat(this.theme.regularDividerColor)
        }
      }, void 0, controlRow));
    } else {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          paddingLeft: getPaddingLeftRight(),
          paddingRight: getPaddingLeftRight()
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          paddingTop: getPaddingTopBottom(),
          paddingBottom: getPaddingTopBottom()
        }
      }, void 0, children), controlRow && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          paddingTop: controlRowPaddingTopBottom,
          paddingBottom: controlRowPaddingTopBottom,
          boxShadow: "0 -1px 0 ".concat(this.theme.regularDividerColor)
        }
      }, void 0, controlRow));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingBox);

/***/ }),

/***/ "./src/client/components/SidebarItem.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/SidebarItem.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");



/* =============================================================================

	SidebarItem.

============================================================================= */



class SidebarItem extends _Component__WEBPACK_IMPORTED_MODULE_3__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getStyle(),
      onMouseMove: this.props.onMouseMove,
      onMouseLeave: this.props.onMouseLeave,
      className: this.props.className
    }, void 0, this.props.left && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getLeftStyle()
    }, void 0, this.props.left), this.props.icon && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getIconStyle()
    }, void 0, this.props.icon), this.renderChildren(), this.props.right && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getRightStyle()
    }, void 0, this.props.right));
  }

  renderChildren() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: { ...SidebarItem.childrenStyle,
        overflow: "hidden",
        textOverflow: this.props.right && !this.props.isMobile ? "clip" : "ellipsis",
        ...this.props.childrenStyle
      }
    }, void 0, this.props.children);
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getStyle() {
    const {
      WindowSizeStore
    } = this.environment;
    const style = { ...(this.props.isMobile ? SidebarItem.wrapMobileStyle : SidebarItem.wrapStyle)
    };

    if (this.props.isMobile) {
      if (!this.props.disableMobileBorder) {
        style.boxShadow = "0 1px 0 ".concat(this.theme.regularDividerColor);
      }

      style.marginBottom = this.props.shouldShowMobileMarginBotton ? 12 : 1; // Room for the box shadow.

      const originalPaddingLeft = this.props.style && typeof this.props.style.paddingLeft === "number" ? this.props.style.paddingLeft : typeof style.paddingLeft === "number" ? style.paddingLeft : 0;
      style.paddingLeft = WindowSizeStore.getSafePaddingLeftCSS(originalPaddingLeft);
    } else if (this.props.style && this.props.style.paddingLeft) {
      style.paddingLeft = this.props.style && this.props.style.paddingLeft;
    }

    return { ...style,
      paddingLeft: style.paddingLeft,
      ...this.props.style
    };
  }

  getLeftStyle() {
    return {
      flexShrink: 0,
      flexGrow: 0,
      borderRadius: 3,
      color: this.theme.mediumTextColor,
      width: this.props.isMobile ? 26 : 22,
      height: this.props.isMobile ? 24 : 22,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: this.props.icon ? 0 : 8 // No gap between icon and left.

    };
  }

  getIconStyle() {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      flexGrow: 0,
      width: this.props.isMobile ? 28 : 22,
      height: this.props.isMobile ? 24 : 18,
      marginRight: 4
    };
  }

  getRightStyle() {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      flexGrow: 0,
      height: "100%"
    };
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(SidebarItem, "wrapStyle", {
  display: "flex",
  alignItems: "center",
  minHeight: 27,
  fontSize: 14,
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 14,
  paddingRight: 14,
  width: "100%"
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(SidebarItem, "wrapMobileStyle", {
  display: "flex",
  alignItems: "center",
  minHeight: 26,
  fontSize: 16,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 10,
  paddingRight: 10,
  width: "100%",
  userSelect: "none",
  WebkitUserSelect: "none"
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(SidebarItem, "childrenStyle", {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
  whiteSpace: "nowrap",
  // At least some width so it grows.
  minWidth: 0
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarItem);

/***/ }),

/***/ "./src/client/components/SpacePermissionGroup.tsx":
/*!********************************************************!*\
  !*** ./src/client/components/SpacePermissionGroup.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _stores_UserStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/UserStore */ "./src/client/stores/UserStore.ts");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Divider */ "./src/client/components/Divider.tsx");
/* harmony import */ var _UIUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UIUser */ "./src/client/components/UIUser.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _RecordIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RecordIcon */ "./src/client/components/RecordIcon.tsx");
/* harmony import */ var _stores_SpacePermissionGroupStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stores/SpacePermissionGroupStore */ "./src/client/stores/SpacePermissionGroupStore.ts");
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Popup */ "./src/client/components/Popup.tsx");
/* harmony import */ var _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/transactionActions */ "./src/client/actions/transactionActions.ts");
/* harmony import */ var _actions_spaceActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/spaceActions */ "./src/client/actions/spaceActions.tsx");
/* harmony import */ var _ActionMenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ActionMenuItem */ "./src/client/components/ActionMenuItem.tsx");
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./MenuList */ "./src/client/components/MenuList.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _actions_dialogActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../actions/dialogActions */ "./src/client/actions/dialogActions.ts");
/* harmony import */ var _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../stores/ButtonPopupStore */ "./src/client/stores/ButtonPopupStore.ts");
/* harmony import */ var _stores_AutocompleteStore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../stores/AutocompleteStore */ "./src/client/stores/AutocompleteStore.ts");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Request */ "./src/client/components/Request.tsx");
/* harmony import */ var _actions_searchActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../actions/searchActions */ "./src/client/actions/searchActions.ts");
/* harmony import */ var _UserMenuItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./UserMenuItem */ "./src/client/components/UserMenuItem.tsx");
/* harmony import */ var _TokenInputMenuItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./TokenInputMenuItem */ "./src/client/components/TokenInputMenuItem.tsx");
/* harmony import */ var _shared_User__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/User */ "./src/shared/User.ts");
/* harmony import */ var _MessageMenuItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./MessageMenuItem */ "./src/client/components/MessageMenuItem.tsx");
/* harmony import */ var _Animated__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Animated */ "./src/client/components/Animated.tsx");
/* harmony import */ var _stores_MouseStore__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../stores/MouseStore */ "./src/client/stores/MouseStore.ts");
/* harmony import */ var _DragHandleButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./DragHandleButton */ "./src/client/components/DragHandleButton.tsx");
/* harmony import */ var _helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../helpers/handleEventOnce */ "./src/client/helpers/handleEventOnce.ts");
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../helpers/dom */ "./src/client/helpers/dom.ts");
/* harmony import */ var _KeyboardArea__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./KeyboardArea */ "./src/client/components/KeyboardArea.tsx");
/* harmony import */ var _ContentEditableInput__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ContentEditableInput */ "./src/client/components/ContentEditableInput.tsx");
/* harmony import */ var _shared_fuzzyMatch__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../shared/fuzzyMatch */ "./src/shared/fuzzyMatch.ts");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../shared/typography */ "./src/shared/typography.ts");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _shared_isSingleEmoji__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../shared/isSingleEmoji */ "./src/shared/isSingleEmoji.ts");
/* harmony import */ var _stores_KeyboardModeStore__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../stores/KeyboardModeStore */ "./src/client/stores/KeyboardModeStore.ts");
/* harmony import */ var _BlueButton__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./BlueButton */ "./src/client/components/BlueButton.tsx");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./IconButton */ "./src/client/components/IconButton.tsx");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _shared_emailHelpers__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../shared/emailHelpers */ "./src/shared/emailHelpers.ts");
/* harmony import */ var _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../stores/SubscriptionDataStore */ "./src/client/stores/SubscriptionDataStore.ts");
/* harmony import */ var _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../helpers/subscriptionHelpers */ "./src/client/helpers/subscriptionHelpers.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _UIActorToken__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./UIActorToken */ "./src/client/components/UIActorToken.tsx");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _helpers_spacePermissionGroupHelpers__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../helpers/spacePermissionGroupHelpers */ "./src/client/helpers/spacePermissionGroupHelpers.ts");





/* =============================================================================

	SpacePermissionGroup.

============================================================================= */

















































class SpacePermissionGroup extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(..._args) {
    super(..._args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "storeTypes", {
      spacePermissionGroupStore: _stores_SpacePermissionGroupStore__WEBPACK_IMPORTED_MODULE_12__.default,
      actionMenuButtonPopupStore: _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_22__.default,
      addMemberButtonPopupStore: _stores_ButtonPopupStore__WEBPACK_IMPORTED_MODULE_22__.default,
      autocompleteStore: _stores_AutocompleteStore__WEBPACK_IMPORTED_MODULE_23__.default,
      mouseStore: _stores_MouseStore__WEBPACK_IMPORTED_MODULE_31__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderUser", userValue => {
      const {
        store,
        group,
        disabled
      } = this.props;
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, userValue.id, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UIUser__WEBPACK_IMPORTED_MODULE_9__.default, {
        userValue: userValue,
        style: {
          paddingRight: 6,
          minHeight: 34,
          lineHeight: 1.2,
          width: "100%"
        },
        avatarSize: 24
      }), !disabled && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_44__.default, {
        onClick: async () => {
          const didConfirm = await _actions_dialogActions__WEBPACK_IMPORTED_MODULE_21__.confirmUserAction({
            message: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
              id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage",
              defaultMessage: "Are you sure you want to remove this member?"
            }),
            acceptLabel: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
              id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label",
              defaultMessage: "Yes"
            })
          });

          if (didConfirm) {
            const userIds = group.user_ids || [];
            const newUserIds = userIds.filter(otherId => otherId !== userValue.id);
            const newGroupValue = { ...group,
              user_ids: newUserIds
            };
            _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__.createAndCommit(this.environment, transaction => {
              _actions_spaceActions__WEBPACK_IMPORTED_MODULE_16__.updatePermissionGroup({
                spaceStore: store,
                group: newGroupValue,
                transaction: transaction
              });
            });
            _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_39__.trackPermissionGroupRemoveMember(this.environment);
          }
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
        id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label",
        defaultMessage: "Remove"
      })));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderActionMenu", () => {
      const section = {
        key: "action_menu",
        render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_18__.default, args),
        items: [{
          key: "rename",
          render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ActionMenuItem__WEBPACK_IMPORTED_MODULE_17__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
            title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
              id: "spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem",
              defaultMessage: "Rename"
            })
          })),
          action: this.handleRename
        }, {
          key: "delete",
          render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ActionMenuItem__WEBPACK_IMPORTED_MODULE_17__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
            title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
              id: "spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem",
              defaultMessage: "Delete"
            })
          })),
          action: this.handleDelete
        }]
      };
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Menu__WEBPACK_IMPORTED_MODULE_20__.default, {
        menuType: _Menu__WEBPACK_IMPORTED_MODULE_20__.default.MenuType.Popup
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MenuList__WEBPACK_IMPORTED_MODULE_19__.default, {
        type: _MenuList__WEBPACK_IMPORTED_MODULE_19__.default.Type.Vertical,
        initialFocus: 0,
        sections: [section],
        onAccept: () => {
          this.stores.actionMenuButtonPopupStore.reset();
        }
      }));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderAddMemberMenu", () => {
      const {
        store
      } = this.props;
      const {
        userInputValue,
        temporaryUserIds
      } = this.stores.spacePermissionGroupStore.state;
      const requestProps = {
        request: {
          query: userInputValue,
          temporaryUserIds: this.stores.spacePermissionGroupStore.state.temporaryUserIds
        },
        performRequest: async ({
          query,
          temporaryUserIds
        }) => {
          const {
            group
          } = this.props;
          const groupUserIds = group.user_ids || [];
          const users = await _actions_searchActions__WEBPACK_IMPORTED_MODULE_25__.searchSpaceUsers({
            environment: this.environment,
            query,
            membersOnly: true
          });
          const filteredUserIds = users.filter(user => groupUserIds.indexOf(user.id) < 0 && temporaryUserIds.indexOf(user.id) < 0);
          return filteredUserIds.slice(0, 20);
        },
        render: this.renderAddMemberResults
      };
      const tokens = temporaryUserIds.map(userId => {
        const userValue = store.getRecordValue({
          table: _shared_User__WEBPACK_IMPORTED_MODULE_28__.UserTable,
          id: userId
        });
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UIActorToken__WEBPACK_IMPORTED_MODULE_49__.UIUserToken, {
          userValue: userValue,
          format: _UIActorToken__WEBPACK_IMPORTED_MODULE_49__.UIUserToken.Format.Medium,
          showRemoveButton: true,
          onClickRemove: () => {
            const newUserIds = temporaryUserIds.filter(otherId => otherId !== userId);
            this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
              temporaryUserIds: newUserIds
            });
          },
          shouldShrink: true,
          isSingle: false
        }, userId);
      });
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Menu__WEBPACK_IMPORTED_MODULE_20__.default, {
        menuType: _Menu__WEBPACK_IMPORTED_MODULE_20__.default.MenuType.Popup,
        tokenInputHeader: true,
        header: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TokenInputMenuItem__WEBPACK_IMPORTED_MODULE_27__.default, {
          focus: true,
          disabled: false,
          focusAfterAnimation: true,
          format: _TokenInputMenuItem__WEBPACK_IMPORTED_MODULE_27__.default.Format.Group,
          tokens: tokens,
          placeholder: this.props.intl.formatMessage({
            id: "spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder",
            defaultMessage: "Search for a person…"
          }),
          onRemoveLastToken: this.handleTokenInputMenuItemRemoveLastToken,
          value: userInputValue,
          onChange: this.handleTokenInputMenuItemChange,
          right: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_BlueButton__WEBPACK_IMPORTED_MODULE_42__.default, {
            isLarge: true,
            onClick: this.handleAddDoneClick
          }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
            id: "spacePermissionsSettings.groupsTab.userGroup.addUserButton.label",
            defaultMessage: "Add"
          }))
        })
      }, void 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Request__WEBPACK_IMPORTED_MODULE_24__.default, requestProps));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderAddMemberResults", (err, results) => {
      const {
        store
      } = this.props;
      const users = results || [];
      const {
        temporaryUserIds
      } = this.stores.spacePermissionGroupStore.state;
      const userIds = users.map(({
        id
      }) => id);

      if (userIds.length === 0) {
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MessageMenuItem__WEBPACK_IMPORTED_MODULE_29__.default, {
          title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
            id: "spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage",
            defaultMessage: "No results"
          })
        }));
      } else {
        const menuItems = userIds.map(userId => {
          const userStore = _stores_UserStore__WEBPACK_IMPORTED_MODULE_7__.default.createChildStore(store, {
            table: _shared_User__WEBPACK_IMPORTED_MODULE_28__.UserTable,
            id: userId
          });
          const userValue = userStore.getValue();
          const menuItem = {
            key: userId,
            render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_UserMenuItem__WEBPACK_IMPORTED_MODULE_26__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
              user: userValue
            })),
            action: () => {
              const newUserIds = [...temporaryUserIds, userId];
              this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
                temporaryUserIds: newUserIds,
                userInputValue: ""
              });
            }
          };
          return menuItem;
        });
        const section = {
          key: "user_menu",
          render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_18__.default, args),
          items: menuItems
        };
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MenuList__WEBPACK_IMPORTED_MODULE_19__.default, {
          type: _MenuList__WEBPACK_IMPORTED_MODULE_19__.default.Type.Vertical,
          initialFocus: 0,
          sections: [section]
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleMouseEnter", e => {
      this.stores.mouseStore.setState({ ...this.stores.mouseStore.state,
        mouseEntered: true
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleMouseLeave", e => {
      this.stores.mouseStore.setState({ ...this.stores.mouseStore.state,
        mouseEntered: false
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleMouseDown", e => {
      const closestDragHandle = (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_34__.closestNode)(e.target, node => node && node.classList && node.classList.contains(SpacePermissionGroup.dragHandleClass));

      if (!closestDragHandle) {
        (0,_helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_33__.captureEditorMouseDown)(e);
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleIconChange", emojiOrUrl => {
      const {
        store,
        group
      } = this.props;
      const newGroupValue = { ...group,
        icon: emojiOrUrl
      };
      _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__.createAndCommit(this.environment, transaction => {
        _actions_spaceActions__WEBPACK_IMPORTED_MODULE_16__.updatePermissionGroup({
          spaceStore: store,
          group: newGroupValue,
          transaction: transaction
        });
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_39__.trackPermissionGroupSetIcon(this.environment, {
        is_emoji: (0,_shared_isSingleEmoji__WEBPACK_IMPORTED_MODULE_40__.default)(emojiOrUrl)
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleRename", () => {
      const {
        group,
        spacePermissionsSettingsStore
      } = this.props;
      spacePermissionsSettingsStore.setState({ ...spacePermissionsSettingsStore.state,
        editingNameGroupId: group.id,
        groupNameInputValue: group.name || ""
      });
      this.stores.actionMenuButtonPopupStore.setState({ ...this.stores.actionMenuButtonPopupStore.state,
        open: false
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_39__.trackPermissionGroupRename(this.environment);
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleDelete", async () => {
      const {
        store,
        group
      } = this.props;
      this.stores.actionMenuButtonPopupStore.setState({ ...this.stores.actionMenuButtonPopupStore.state,
        open: false
      });
      const didConfirm = await _actions_dialogActions__WEBPACK_IMPORTED_MODULE_21__.confirmUserAction({
        message: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage",
          defaultMessage: "Are you sure you want to delete this group? Any pages that are private to this group will be transferred to you."
        }),
        acceptLabel: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label",
          defaultMessage: "Yes"
        })
      });

      if (didConfirm) {
        const transaction = _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__.create(this.environment);
        await _actions_spaceActions__WEBPACK_IMPORTED_MODULE_16__.deletePermissionGroup({
          environment: this.environment,
          spaceStore: store,
          group: group,
          transaction: transaction
        });
        void _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__.commit({
          environment: this.environment,
          transaction: transaction
        });
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_39__.trackPermissionGroupDelete(this.environment);
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleNameChange", newValue => {
      this.props.spacePermissionsSettingsStore.setState({ ...this.props.spacePermissionsSettingsStore.state,
        groupNameInputValue: newValue
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleNameCancel", () => {
      const {
        spacePermissionsSettingsStore
      } = this.props;
      spacePermissionsSettingsStore.setState({ ...spacePermissionsSettingsStore.state,
        editingNameGroupId: undefined,
        groupNameInputValue: ""
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleNameAccept", () => {
      const {
        store,
        group,
        spacePermissionsSettingsStore
      } = this.props;
      const {
        editingNameGroupId,
        groupNameInputValue
      } = spacePermissionsSettingsStore.state;

      if (editingNameGroupId === group.id) {
        if (groupNameInputValue !== group.name) {
          const newGroupValue = { ...group,
            name: groupNameInputValue
          };
          _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__.createAndCommit(this.environment, transaction => {
            _actions_spaceActions__WEBPACK_IMPORTED_MODULE_16__.updatePermissionGroup({
              spaceStore: store,
              group: newGroupValue,
              transaction: transaction
            });
          });
        }

        spacePermissionsSettingsStore.setState({ ...spacePermissionsSettingsStore.state,
          editingNameGroupId: undefined,
          groupNameInputValue: ""
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleTokenInputMenuItemRemoveLastToken", () => {
      const {
        temporaryUserIds
      } = this.stores.spacePermissionGroupStore.state;
      const newUserIds = temporaryUserIds.slice(0, temporaryUserIds.length - 1);
      this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
        temporaryUserIds: newUserIds
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleTokenInputMenuItemChange", e => {
      const value = e.target.value;
      const {
        spacePermissionGroupStore
      } = this.stores;
      const {
        extractedEmails,
        newInputValue
      } = (0,_shared_emailHelpers__WEBPACK_IMPORTED_MODULE_45__.handleEmailTokenInput)(value);
      const {
        currentSpaceStore
      } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_48__.default.state;
      const {
        data
      } = _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_46__.default.state;

      if (!data || !currentSpaceStore) {
        return;
      }

      const spaceUsers = (0,_helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_47__.getVisibleUsers)(data);
      const memberIds = spaceUsers.map(member => member.userId);

      const userValues = lodash__WEBPACK_IMPORTED_MODULE_5___default().compact(memberIds.map(userId => {
        const userStore = _stores_UserStore__WEBPACK_IMPORTED_MODULE_7__.default.createChildStore(currentSpaceStore, {
          table: _shared_User__WEBPACK_IMPORTED_MODULE_28__.UserTable,
          id: userId
        });
        return userStore.getValue();
      }));

      const filteredUsers = userValues.filter(user => extractedEmails.includes(user.email) && !spacePermissionGroupStore.state.temporaryUserIds.includes(user.id));
      spacePermissionGroupStore.setState({ ...spacePermissionGroupStore.state,
        temporaryUserIds: [...spacePermissionGroupStore.state.temporaryUserIds, ...filteredUsers.map(user => user.id)],
        userInputValue: newInputValue
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleAddDoneClick", () => {
      const {
        store,
        group
      } = this.props;
      const {
        temporaryUserIds
      } = this.stores.spacePermissionGroupStore.state;
      const userIds = group.user_ids || [];

      const newUserIds = lodash__WEBPACK_IMPORTED_MODULE_5___default().union(userIds, temporaryUserIds);

      const newGroupValue = { ...group,
        user_ids: newUserIds
      };
      _actions_transactionActions__WEBPACK_IMPORTED_MODULE_15__.createAndCommit(this.environment, transaction => {
        _actions_spaceActions__WEBPACK_IMPORTED_MODULE_16__.updatePermissionGroup({
          spaceStore: store,
          group: newGroupValue,
          transaction: transaction
        });
      });
      this.stores.spacePermissionGroupStore.reset();
      this.stores.addMemberButtonPopupStore.setState({ ...this.stores.addMemberButtonPopupStore.state,
        open: false
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_39__.trackPermissionGroupAddMembers(this.environment, {
        add_member_count: temporaryUserIds.length
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleAddMemberButtonPopupClose", () => {
      this.stores.spacePermissionGroupStore.reset();
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleShowMoreClick", () => {
      this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
        limitUsers: false
      });
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      store,
      group,
      spacePermissionsSettingsStore,
      disabled
    } = this.props;
    const {
      groupsFilter
    } = spacePermissionsSettingsStore.state;
    const {
      limitUsers
    } = this.stores.spacePermissionGroupStore.state;
    const name = _helpers_spacePermissionGroupHelpers__WEBPACK_IMPORTED_MODULE_51__.getGroupName({
      intl: this.props.intl,
      group
    });
    const {
      countRemainingUsers,
      totalNumberMembers,
      limitedUserValues
    } = _helpers_spacePermissionGroupHelpers__WEBPACK_IMPORTED_MODULE_51__.getGroupUsers({
      group,
      spaceStore: store,
      limit: limitUsers && !groupsFilter ? SpacePermissionGroup.defaultLimit : undefined
    });

    const orderedUserValues = lodash__WEBPACK_IMPORTED_MODULE_5___default().sortBy(limitedUserValues, userValue => (0,_shared_User__WEBPACK_IMPORTED_MODULE_28__.getUserSearchName)(userValue));

    const filteredUserValues = groupsFilter ? (0,_shared_fuzzyMatch__WEBPACK_IMPORTED_MODULE_37__.default)(groupsFilter, orderedUserValues, userValue => {
      return (0,_shared_User__WEBPACK_IMPORTED_MODULE_28__.getUserSearchName)(userValue);
    }) : orderedUserValues;
    const {
      mouseEntered
    } = this.stores.mouseStore.state;
    const shouldShowDragHandle = mouseEntered && !_stores_KeyboardModeStore__WEBPACK_IMPORTED_MODULE_41__.default.state.isKeyboardMode && !disabled;
    const {
      editingNameGroupId,
      groupNameInputValue
    } = spacePermissionsSettingsStore.state;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        marginBottom: 36,
        fontSize: 14,
        width: "100%" // Required for DraggableList.

      },
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseDown: this.handleMouseDown
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        display: "flex"
      }
    }, void 0, !disabled && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Animated__WEBPACK_IMPORTED_MODULE_30__.default, {
      isVisible: true,
      animationStyle: {
        opacity: shouldShowDragHandle ? 1 : 0
      },
      enterAnimationStyle: {
        opacity: 0
      },
      exitAnimationStyle: {
        opacity: 0
      },
      render: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          marginLeft: -24,
          marginRight: 4
        },
        className: SpacePermissionGroup.dragHandleClass
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_DragHandleButton__WEBPACK_IMPORTED_MODULE_32__.default, {
        hideClickMessage: true
      }))
    }), disabled ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_RecordIcon__WEBPACK_IMPORTED_MODULE_11__.default, {
      disabled: true,
      icon: group.icon ? {
        pointer: store.pointer,
        icon: group.icon
      } : undefined,
      size: 22,
      isEmptyPage: false,
      title: name,
      style: {
        marginLeft: 3,
        marginRight: 3
      }
    }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_RecordIcon__WEBPACK_IMPORTED_MODULE_11__.default, {
      disabled: false,
      bucket: "public",
      icon: group.icon ? {
        pointer: store.pointer,
        icon: group.icon
      } : undefined,
      size: 22,
      isEmptyPage: false,
      title: name,
      onChange: this.handleIconChange,
      style: {
        marginLeft: 3,
        marginRight: 3
      }
    }), editingNameGroupId === group.id ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_KeyboardArea__WEBPACK_IMPORTED_MODULE_35__.default, {
      capture: true,
      onEsc: this.handleNameCancel
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_ContentEditableInput__WEBPACK_IMPORTED_MODULE_36__.default, {
      disabled: disabled,
      type: _ContentEditableInput__WEBPACK_IMPORTED_MODULE_36__.default.Type.Inline,
      style: {
        marginLeft: 4,
        cursor: "text",
        fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_38__.default.fontWeight.semibold
      },
      placeholderStyle: {
        marginLeft: 4,
        cursor: "text",
        color: this.theme.lightTextColor,
        fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_38__.default.fontWeight.semibold
      },
      placeholder: this.props.intl.formatMessage({
        id: "spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder",
        defaultMessage: "Untitled"
      }),
      focus: true,
      value: groupNameInputValue,
      onChange: this.handleNameChange,
      onBlur: this.handleNameAccept,
      onSubmit: this.handleNameAccept
    })) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_44__.default, {
      isSmall: true,
      style: {
        fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_38__.default.fontWeight.semibold,
        marginLeft: -2,
        marginTop: -1
      },
      onClick: this.handleRename,
      disabled: disabled,
      className: "notranslate"
    }, void 0, name), totalNumberMembers > 0 && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        alignItems: "center",
        marginLeft: 8,
        color: this.theme.mediumTextColor
      },
      className: "notranslate"
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
      id: "spacePermissionsSettings.groupsTab.userGroup.memberCount",
      defaultMessage: "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} member} other {{numberOfGroupMembers} members}}",
      values: {
        numberOfGroupMembers: totalNumberMembers
      }
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        flexGrow: 1
      }
    }), !disabled && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_13__.default, {
      popupType: _Popup__WEBPACK_IMPORTED_MODULE_14__.PopupType.Popup,
      render: this.renderActionMenu,
      buttonPopupStore: this.stores.actionMenuButtonPopupStore,
      renderOrigin: events => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_IconButton__WEBPACK_IMPORTED_MODULE_43__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        icon: _shared_icons__WEBPACK_IMPORTED_MODULE_10__.default.dots
      }, events))
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Divider__WEBPACK_IMPORTED_MODULE_8__.default, {
      size: 12
    }), filteredUserValues.map(this.renderUser), countRemainingUsers > 0 && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_44__.default, {
      isGray: true,
      style: {
        marginTop: 4
      },
      onClick: this.handleShowMoreClick
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
      id: "spacePermissionsSettings.groupsTab.showMoreUsersButton.label",
      defaultMessage: "{numberOfHiddenUsers, plural, one {Show {numberOfHiddenUsers} more} other {Show {numberOfHiddenUsers} more}}",
      values: {
        numberOfHiddenUsers: countRemainingUsers
      }
    }))), !disabled && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_13__.default, {
      popupType: _Popup__WEBPACK_IMPORTED_MODULE_14__.PopupType.Popup,
      render: this.renderAddMemberMenu,
      buttonPopupStore: this.stores.addMemberButtonPopupStore,
      onClose: this.handleAddMemberButtonPopupClose,
      style: {
        width: 400
      },
      renderOrigin: events => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_PlainButton__WEBPACK_IMPORTED_MODULE_44__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        isGray: true,
        icon: _shared_icons__WEBPACK_IMPORTED_MODULE_10__.default.plus,
        style: {
          marginTop: 4
        }
      }, events), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_50__.FormattedMessage, {
        id: "spacePermissionsSettings.groupsTab.groupList.addMemberButton.label",
        defaultMessage: "Add members"
      })))
    }));
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SpacePermissionGroup, "dragHandleClass", "drag_handle");

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SpacePermissionGroup, "defaultLimit", 10);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_50__.injectIntl)(SpacePermissionGroup));

/***/ }),

/***/ "./src/client/components/SpacePermissionsSettings.tsx":
/*!************************************************************!*\
  !*** ./src/client/components/SpacePermissionsSettings.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/subscriptionHelpers */ "./src/shared/subscriptionHelpers.ts");
/* harmony import */ var _shared_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/User */ "./src/shared/User.ts");
/* harmony import */ var _actions_permissionsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/permissionsActions */ "./src/client/actions/permissionsActions.ts");
/* harmony import */ var _actions_spaceActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/spaceActions */ "./src/client/actions/spaceActions.tsx");
/* harmony import */ var _shared_fuzzyMatch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fuzzyMatch */ "./src/shared/fuzzyMatch.ts");
/* harmony import */ var _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/SpacePermissionsSettingsStore */ "./src/client/stores/SpacePermissionsSettingsStore.ts");
/* harmony import */ var _stores_UserStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stores/UserStore */ "./src/client/stores/UserStore.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Divider */ "./src/client/components/Divider.tsx");
/* harmony import */ var _GuestPagesPopup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GuestPagesPopup */ "./src/client/components/GuestPagesPopup.tsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Input */ "./src/client/components/Input.tsx");
/* harmony import */ var _PermissionRoleSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PermissionRoleSelect */ "./src/client/components/PermissionRoleSelect.tsx");
/* harmony import */ var _SettingBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SettingBox */ "./src/client/components/SettingBox.tsx");
/* harmony import */ var _TableBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TableBox */ "./src/client/components/TableBox.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_transactionActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../actions/transactionActions */ "./src/client/actions/transactionActions.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../helpers/subscriptionHelpers */ "./src/client/helpers/subscriptionHelpers.tsx");
/* harmony import */ var _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../actions/loadingStateActions */ "./src/client/actions/loadingStateActions.ts");
/* harmony import */ var _TabBarMenuItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TabBarMenuItem */ "./src/client/components/TabBarMenuItem.tsx");
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _shared_Space__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/Space */ "./src/shared/Space.ts");
/* harmony import */ var _SpacePermissionGroup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./SpacePermissionGroup */ "./src/client/components/SpacePermissionGroup.tsx");
/* harmony import */ var _DraggableList__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./DraggableList */ "./src/client/components/DraggableList.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../stores/ConnectionStore */ "./src/client/stores/ConnectionStore.ts");
/* harmony import */ var _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../stores/SubscriptionDataStore */ "./src/client/stores/SubscriptionDataStore.ts");
/* harmony import */ var _stores_SpaceSettingsStore__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../stores/SpaceSettingsStore */ "./src/client/stores/SpaceSettingsStore.tsx");
/* harmony import */ var _InlineTextLink__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./InlineTextLink */ "./src/client/components/InlineTextLink.tsx");
/* harmony import */ var _BlueButton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./BlueButton */ "./src/client/components/BlueButton.tsx");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _SmallButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./SmallButton */ "./src/client/components/SmallButton.tsx");
/* harmony import */ var _HelpButtonSettingsCaption__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./HelpButtonSettingsCaption */ "./src/client/components/HelpButtonSettingsCaption.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _UIUserAvatar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./UIUserAvatar */ "./src/client/components/UIUserAvatar.tsx");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _SwitcherButton__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./SwitcherButton */ "./src/client/components/SwitcherButton.tsx");
/* harmony import */ var _actions_clipboardActions__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../actions/clipboardActions */ "./src/client/actions/clipboardActions.ts");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/client/components/LoadingSpinner.tsx");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../actions/api */ "./src/client/actions/api.ts");
/* harmony import */ var _actions_dialogActions__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../actions/dialogActions */ "./src/client/actions/dialogActions.ts");
/* harmony import */ var _helpers_routeHelpers__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../helpers/routeHelpers */ "./src/client/helpers/routeHelpers.ts");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");
/* harmony import */ var _UpsellCallout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./UpsellCallout */ "./src/client/components/UpsellCallout.tsx");
/* harmony import */ var _actions_subscriptionActions__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../actions/subscriptionActions */ "./src/client/actions/subscriptionActions.tsx");
/* harmony import */ var _shared_typeUtils__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../shared/typeUtils */ "./src/shared/typeUtils.ts");
/* harmony import */ var _hooks_useDependency__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../hooks/useDependency */ "./src/client/hooks/useDependency.tsx");
/* harmony import */ var _helpers_spaceHelpers__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../helpers/spaceHelpers */ "./src/client/helpers/spaceHelpers.ts");





/* =============================================================================

	SpacePermissionsSettings.

============================================================================= */





















































class SpacePermissionsSettings extends _Component__WEBPACK_IMPORTED_MODULE_13__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "storeTypes", {
      spacePermissionsSettingsStore: _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderSpaceGroup", group => {
      const {
        store
      } = this.props;
      const {
        spacePermissionsSettingsStore
      } = this.stores;
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SpacePermissionGroup__WEBPACK_IMPORTED_MODULE_28__.default, {
        store: store,
        group: group,
        spacePermissionsSettingsStore: spacePermissionsSettingsStore,
        disabled: !this.canEditGroups()
      }, group.id);
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleUpdateClick", () => {
      const messages = (0,notion_intl__WEBPACK_IMPORTED_MODULE_42__.defineMessages)({
        updatingPermissions: {
          id: "spacePermissionsSettings.updatePermissionsMessage",
          defaultMessage: "Updating…"
        }
      });
      _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__.display({
        message: messages.updatingPermissions
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleUpdateComplete", () => {
      _actions_loadingStateActions__WEBPACK_IMPORTED_MODULE_24__.close();
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleTabClick", newSelectedIndex => {
      const newTab = newSelectedIndex;

      switch (newTab) {
        case _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__.SpacePermissionsSettingsTab.Members:
          _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackPermissionsSettingsTabClick(this.environment, {
            tab: "members"
          });
          break;

        case _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__.SpacePermissionsSettingsTab.Groups:
          _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackPermissionsSettingsTabClick(this.environment, {
            tab: "groups"
          });
          break;

        case _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__.SpacePermissionsSettingsTab.Guests:
          _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackPermissionsSettingsTabClick(this.environment, {
            tab: "guests"
          });
          break;

        default:
          (0,_shared_typeUtils__WEBPACK_IMPORTED_MODULE_52__.unreachable)(newTab);
      }

      this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
        currentTab: newSelectedIndex
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleCreateGroupClick", () => {
      _actions_transactionActions__WEBPACK_IMPORTED_MODULE_21__.createAndCommit(this.environment, transaction => {
        const group = _actions_spaceActions__WEBPACK_IMPORTED_MODULE_9__.createPermissionGroup({
          spaceStore: this.props.store,
          transaction: transaction
        });

        if (group) {
          this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
            editingNameGroupId: group.id,
            groupNameInputValue: ""
          });
        }
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackPermissionGroupCreate(this.environment);
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleGroupReorder", newGroupIds => {
      const spaceValue = this.props.store.getValue();

      if (spaceValue) {
        const groups = spaceValue.permission_groups || [];

        const newGroups = lodash__WEBPACK_IMPORTED_MODULE_4___default().compact(newGroupIds.map(newGroupId => groups.find(group => group.id === newGroupId)));

        _actions_transactionActions__WEBPACK_IMPORTED_MODULE_21__.createAndCommit(this.environment, transaction => {
          _actions_spaceActions__WEBPACK_IMPORTED_MODULE_9__.updatePermissionGroups({
            spaceStore: this.props.store,
            groups: newGroups,
            transaction: transaction
          });
        });
      }

      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackPermissionGroupReorder(this.environment);
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleFilterChange", e => {
      this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
        groupsFilter: e.target.value
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleMembersShowMoreClick", () => {
      this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
        limitMembers: false
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleGuestsShowMoreClick", () => {
      this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
        limitGuests: false
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleInviteLinkClick", () => {
      const nextEnabledState = !this.getInviteLinkEnabled();
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackInviteLinkUpdated(this.environment, {
        enabled: nextEnabledState
      });
      _actions_transactionActions__WEBPACK_IMPORTED_MODULE_21__.createAndCommit(this.environment, transaction => {
        _actions_spaceActions__WEBPACK_IMPORTED_MODULE_9__.setSpaceInviteLinkEnabled({
          transaction,
          spaceStore: this.props.store,
          inviteLinkEnabled: Boolean(nextEnabledState)
        });
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleMemberPermissionRoleChange", async (member, newRole, currentUserSettingsStore) => {
      const {
        store
      } = this.props;
      const currentUserId = this.environment.currentUser.id;

      if (member.userId === currentUserId && newRole === "none") {
        const succeeded = await _actions_spaceActions__WEBPACK_IMPORTED_MODULE_9__.leaveSpace({
          environment: this.environment,
          spaceId: store.id,
          userSettingsStore: currentUserSettingsStore
        });

        if (succeeded) {
          _stores_SpaceSettingsStore__WEBPACK_IMPORTED_MODULE_33__.default.setState({ ..._stores_SpaceSettingsStore__WEBPACK_IMPORTED_MODULE_33__.default.state,
            open: false
          });
        }
      } else {
        this.handleUpdateClick();

        if (newRole === "none") {
          // If removing from the space, call removeUsersFromSpace directly so the
          // member has their pages removed synchronously. Otherwise, they will
          // temporarily show up as a guest while the post-transaction hook
          // finishes.
          await _actions_api__WEBPACK_IMPORTED_MODULE_46__.removeUsersFromSpace(this.environment, {
            userIds: [member.userId],
            spaceId: store.id,
            removePagePermissions: true,
            revokeUserTokens: true
          }); // Update subscription data.

          await _actions_subscriptionActions__WEBPACK_IMPORTED_MODULE_51__.refresh(this.environment);
        } else {
          await _actions_transactionActions__WEBPACK_IMPORTED_MODULE_21__.createAndCommit(this.environment, transaction => {
            return _actions_permissionsActions__WEBPACK_IMPORTED_MODULE_8__.setPermissionItems({
              environment: this.environment,
              store: store,
              permissionItems: [{
                type: "user_permission",
                role: newRole,
                user_id: member.userId
              }],
              transaction: transaction
            });
          });
        }

        this.handleUpdateComplete();
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      store,
      isMobile
    } = this.props;

    if (!_stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_31__.default.state.online) {
      return this.renderOfflineMessage();
    }

    const {
      data
    } = _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_32__.default.state;

    if (!data) {
      return this.renderLoadingSpinner();
    }

    const visibleUsers = _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_23__.getVisibleUsers(data);

    const visibleUsersLoaded = lodash__WEBPACK_IMPORTED_MODULE_4___default().every(visibleUsers.map(member => {
      const userStore = _stores_UserStore__WEBPACK_IMPORTED_MODULE_12__.default.createChildStore(store, {
        table: _shared_User__WEBPACK_IMPORTED_MODULE_7__.UserTable,
        id: member.userId
      });
      return userStore.isReady();
    }));

    if (!visibleUsersLoaded) {
      return this.renderLoadingSpinner();
    }

    const members = visibleUsers.filter(_shared_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_6__.isSpaceUserMember);
    const guests = visibleUsers.filter(_shared_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_6__.isSpaceUserGuest);
    const {
      currentTab
    } = this.stores.spacePermissionsSettingsStore.state;

    if (isMobile) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, this.canAdmin() && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_26__.default, {
        shouldShowBottomDivider: true
      }, void 0, this.renderMobileInviteButton(), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: this.mobileMenuItemStyle()
      }, void 0, this.renderInviteLink())), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_26__.default, {}, void 0, this.renderSpaceMembers(members)));
    }

    const tabs = [/*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionsSettings.membersTab.title",
      defaultMessage: "Members ({numberOfMembers})",
      values: {
        numberOfMembers: members.length
      }
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spaceBasicSettings.groupsTab.title",
      defaultMessage: "Groups"
    })];

    if (guests.length > 0) {
      tabs.push( /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionsSettings.guestsTab.title",
        defaultMessage: "Guests ({numberOfGuests})",
        values: {
          numberOfGuests: guests.length
        }
      }));
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SettingBox__WEBPACK_IMPORTED_MODULE_18__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TabBarMenuItem__WEBPACK_IMPORTED_MODULE_25__.default, {
      tabs: tabs,
      selectedIndex: currentTab,
      onChange: this.handleTabClick,
      style: {
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: -6,
        marginBottom: 14
      },
      tabStyle: {
        fontSize: 16
      }
    }), this.renderTab(currentTab, members, guests));
  }

  renderLoadingSpinner() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_45__.default, {
      style: {
        margin: "calc(50% - 1em) auto"
      }
    });
  }

  renderOfflineMessage() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
      isSmall: true,
      style: {
        textAlign: "center"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionsSettings.offlineMessage",
      defaultMessage: "Please go online to manage members."
    }));
  }

  renderHelp() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        marginTop: 24,
        marginBottom: 24
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_HelpButtonSettingsCaption__WEBPACK_IMPORTED_MODULE_39__.default, {
      title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionsSettings.helpButton.caption",
        defaultMessage: "Learn about adding members to your workspace"
      }),
      href: (0,_helpers_routeHelpers__WEBPACK_IMPORTED_MODULE_48__.getLocalizedUrl)("guides.members"),
      analyticsFrom: "members_settings"
    }));
  }

  renderTab(currentTab, members, guests) {
    if (currentTab === _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__.SpacePermissionsSettingsTab.Members) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, this.renderSpaceMembers(members));
    } else if (currentTab === _stores_SpacePermissionsSettingsStore__WEBPACK_IMPORTED_MODULE_11__.SpacePermissionsSettingsTab.Guests) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, this.renderSpaceGuests(guests));
    } else {
      return this.renderGroupsTab();
    }
  }

  renderGroupsTab() {
    const {
      store
    } = this.props;
    const {
      groupsFilter
    } = this.stores.spacePermissionsSettingsStore.state;
    const spaceValue = store.getValue();
    const canUseGroups = this.canUseGroups();
    const canEditGroups = this.canEditGroups();

    if (spaceValue) {
      const groups = spaceValue.permission_groups || [];
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, !canUseGroups ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UpsellCallout__WEBPACK_IMPORTED_MODULE_50__.default, {
        for: "team",
        from: "permission_groups",
        icon: _shared_icons__WEBPACK_IMPORTED_MODULE_20__.default.group,
        title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.upgradeTitle",
          defaultMessage: "Upgrade to create groups"
        }),
        caption: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.upgradeCaption",
          defaultMessage: "Upgrade to the Team Plan to set up groups and control permissions from the share menu."
        }),
        learnMoreRoute: "guides.groups"
      }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
        isSmall: true,
        isMultiline: true,
        style: {
          width: "80%"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionsSettings.groupsTab.caption",
        defaultMessage: "Set up groups to conveniently control page permissions from the share menu."
      })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Divider__WEBPACK_IMPORTED_MODULE_14__.default, {
        size: 24,
        isHidden: true
      }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      }, void 0, canUseGroups && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_22__.default, {
        renderTooltip: () => this.canAdmin() ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.upgradeMessage",
          defaultMessage: "Upgrade to Team or Enterprise to use permission groups."
        }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.adminsOnly",
          defaultMessage: "Only admins can add a permission group."
        }),
        render: events => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_BlueButton__WEBPACK_IMPORTED_MODULE_35__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          isLarge: true,
          onClick: this.handleCreateGroupClick,
          disabled: !canEditGroups
        }, !canEditGroups ? events : undefined), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.groupsTab.createGroupButton.label",
          defaultMessage: "Create a group"
        }))
      }), groups.length > 0 && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_16__.default, {
        placeholder: this.props.intl.formatMessage({
          id: "spacePermissionsSettings.groupsTab.filterGroupsInput.placeholder",
          defaultMessage: "Filter by email or name…"
        }),
        left: _shared_icons__WEBPACK_IMPORTED_MODULE_20__.default.searchThick(this.getSearchIconStyle()),
        showClearButton: true,
        format: _Input__WEBPACK_IMPORTED_MODULE_16__.default.Format.Small,
        value: groupsFilter,
        style: { ...SpacePermissionsSettings.filterStyle,
          marginRight: 0
        },
        onChange: this.handleFilterChange
      })), groups.length > 0 && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Divider__WEBPACK_IMPORTED_MODULE_14__.default, {
        size: 24,
        style: {
          marginBottom: 24
        }
      }), canEditGroups ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_DraggableList__WEBPACK_IMPORTED_MODULE_29__.default, {
        direction: _DraggableList__WEBPACK_IMPORTED_MODULE_29__.DraggableListDirection.Vertical,
        keys: groups.map(group => group.id),
        renderKey: (key, index) => {
          return this.renderSpaceGroup(groups[index]);
        },
        isFullWidth: true,
        onDrop: this.handleGroupReorder
      }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, groups.map(this.renderSpaceGroup)));
    }
  }

  renderSpaceMembers(members) {
    if (this.props.isMobile) {
      return this.renderMobileMemberList(members);
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, !this.shouldRenderUpsell() && this.renderHelp(), this.shouldRenderUpsell() && this.renderUpsell(), this.renderInviteLink(), this.renderDesktopMemberList(members));
  }

  renderInviteLink() {
    if (!this.canUseInviteLink()) {
      return;
    }

    const inviteLink = this.getInviteLink();
    const inviteLinkEnabled = this.getInviteLinkEnabled();

    if (!inviteLink) {
      return;
    }

    const {
      spacePermissionsSettingsStore
    } = this.stores;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        cursor: "pointer"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        marginRight: 8,
        flexGrow: 1
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_49__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionsSettings.spaceMembers.inviteLink.title",
      defaultMessage: "Invite link"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
      isSmall: true,
      isMultiline: true,
      style: {
        marginTop: 2,
        width: "85%"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionSettings.spaceMembers.inviteLink.caption",
      defaultMessage: "Share this secret link to invite people to this workspace. Only admins can see this."
    }), " ", !this.props.isMobile && this.renderInviteLinkReset())), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        marginTop: 5
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SwitcherButton__WEBPACK_IMPORTED_MODULE_43__.default, {
      on: inviteLinkEnabled,
      onClick: this.handleInviteLinkClick
    }))), spacePermissionsSettingsStore && inviteLinkEnabled && inviteLink && this.renderInviteLinkUrl(inviteLink), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Divider__WEBPACK_IMPORTED_MODULE_14__.default, {
      size: 40
    }));
  }

  renderInviteLinkReset() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionSettings.spaceMembers.inviteLink.resetLink",
      defaultMessage: "You can <resetlink>reset the link</resetlink> to generate a new invite link.",
      values: {
        resetlink: (...chunks) => {
          const {
            store
          } = this.props;
          const spaceValue = store.getValue();

          if (!spaceValue) {
            return;
          }

          return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_InlineTextLink__WEBPACK_IMPORTED_MODULE_34__.default, {
            onClick: () => {
              _actions_dialogActions__WEBPACK_IMPORTED_MODULE_47__.showDialog({
                message: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
                  id: "spacePermissionsSettings.inviteLinkRefreshModal.description",
                  defaultMessage: "Are you sure you want to reset your invite link? Your old one will no longer be able to be used."
                }),
                showCancel: true,
                keepFocus: false,
                handleCancel: _actions_dialogActions__WEBPACK_IMPORTED_MODULE_47__.dismissDialog,
                items: [{
                  label: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
                    id: "spacePermissionsSettings.inviteLinkRefreshModal.accept",
                    defaultMessage: "Reset"
                  }),
                  color: "red",
                  onAccept: async () => {
                    await _actions_api__WEBPACK_IMPORTED_MODULE_46__.refreshInviteLink(this.environment, {
                      spaceId: spaceValue.id
                    });
                    void _actions_subscriptionActions__WEBPACK_IMPORTED_MODULE_51__.refresh(this.environment);
                  }
                }]
              });
            }
          }, void 0, chunks);
        }
      }
    });
  }

  renderInviteLinkUrl(inviteLinkUrl) {
    const {
      mobileNative
    } = this.environment;

    const copyLinkText = /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionsSettings.spaceMembers.inviteLink.copyButton",
      defaultMessage: "Copy link"
    });

    const handleCopyLink = () => {
      _actions_clipboardActions__WEBPACK_IMPORTED_MODULE_44__.copyString({
        environment: this.environment,
        stringValue: inviteLinkUrl
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackWorkspaceInviteCopyLink(this.environment);
    };

    const handleMobileNativeShareClick = () => {
      if (mobileNative) {
        mobileNative.share(inviteLinkUrl);
      }

      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_30__.trackWorkspaceInviteCopyLink(this.environment);
    };

    if (this.props.isMobile) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_16__.default, {
        type: "text",
        format: _Input__WEBPACK_IMPORTED_MODULE_16__.InputFormat.Default,
        value: inviteLinkUrl,
        disabled: true
      }), mobileNative ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_36__.default, {
        onClick: handleMobileNativeShareClick,
        style: {
          marginTop: 10,
          width: "100%"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionsSettings.spaceMembers.inviteLink.shareButton",
        defaultMessage: "Share link"
      })) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_36__.default, {
        onClick: handleCopyLink,
        style: {
          marginTop: 10,
          width: "100%"
        }
      }, void 0, copyLinkText));
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        marginTop: 12
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_16__.default, {
      type: "text",
      format: _Input__WEBPACK_IMPORTED_MODULE_16__.InputFormat.Default,
      value: inviteLinkUrl,
      disabled: true,
      style: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: "calc(100% - 90px)",
        height: 32
      }
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_BlueButton__WEBPACK_IMPORTED_MODULE_35__.default, {
      onClick: handleCopyLink,
      style: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: 90
      },
      isLarge: true
    }, void 0, copyLinkText)));
  }

  renderMobileMemberList(members) {
    const {
      store
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, members.map(member => {
      const userStore = _stores_UserStore__WEBPACK_IMPORTED_MODULE_12__.default.createChildStore(store, {
        table: _shared_User__WEBPACK_IMPORTED_MODULE_7__.UserTable,
        id: member.userId
      });
      const userValue = userStore.getValue();
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          display: "flex",
          alignItems: "center",
          padding: 10,
          borderBottom: "1px solid ".concat(this.theme.lightDividerColor),
          background: this.theme.contentBackground
        }
      }, void 0, this.renderMember(userValue), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          textAlign: "center",
          marginLeft: "auto"
        }
      }, void 0, this.renderUserPermission(member)));
    }));
  }

  renderUpsell() {
    const {
      data: subscriptionData
    } = _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_32__.default.state;
    const forTier = subscriptionData && !_helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_23__.isOverBlockLimit(this.environment, subscriptionData) && subscriptionData.type !== "subscribed_admin" ? "team_free" : "team";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UpsellCallout__WEBPACK_IMPORTED_MODULE_50__.default, {
      for: forTier,
      from: "members_settings",
      icon: _shared_icons__WEBPACK_IMPORTED_MODULE_20__.default.membersFilled,
      title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionSettings.memberUpsell.title",
        defaultMessage: "Share with unlimited members"
      }),
      caption: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionSettings.memberUpsell.caption",
        defaultMessage: "Try Notion for Teams for a collaborative workspace, unlimited team members, and advanced permissions."
      }),
      learnMoreRoute: "guides.members",
      upgradeMessage: forTier === "team_free" ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionSettings.memberUpsell.alternativeTrialLabel",
        defaultMessage: "Try it free"
      }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spacePermissionSettings.memberUpsell.alternativeUpgradeLabel",
        defaultMessage: "Upgrade to Team Plan"
      })
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Divider__WEBPACK_IMPORTED_MODULE_14__.default, {
      size: 48
    }));
  }

  renderDesktopMemberList(members) {
    const {
      spacePermissionsSettingsStore
    } = this.stores;
    const {
      membersFilter,
      limitMembers
    } = spacePermissionsSettingsStore.state;
    const filteredMembers = this.getFilteredMembers(members, membersFilter);
    const limitedMembers = limitMembers ? filteredMembers.slice(0, SpacePermissionsSettings.defaultLimit) : filteredMembers;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        marginRight: 8,
        flexGrow: 1
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_49__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionsSettings.spaceMembers.members.title",
      defaultMessage: "Members"
    }))), this.renderInviteViaDomainCaption(), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Divider__WEBPACK_IMPORTED_MODULE_14__.default, {
      size: 16,
      isHidden: true
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }
    }, void 0, this.renderInviteButton(), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_16__.default, {
      placeholder: this.props.intl.formatMessage({
        id: "spacePermissionsSettings.membersTab.filterMembersInput.placeholder",
        defaultMessage: "Filter by email or name…"
      }),
      left: _shared_icons__WEBPACK_IMPORTED_MODULE_20__.default.searchThick(this.getSearchIconStyle()),
      showClearButton: true,
      format: _Input__WEBPACK_IMPORTED_MODULE_16__.default.Format.Small,
      value: membersFilter,
      style: SpacePermissionsSettings.filterStyle,
      onChange: e => {
        spacePermissionsSettingsStore.setState({ ...spacePermissionsSettingsStore.state,
          membersFilter: e.target.value,
          limitMembers: true
        });
      }
    })), this.renderUserTable(limitedMembers), filteredMembers.length > SpacePermissionsSettings.defaultLimit && limitMembers && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SmallButton__WEBPACK_IMPORTED_MODULE_38__.default, {
      style: SpacePermissionsSettings.showMoreButtonStyle,
      onClick: this.handleMembersShowMoreClick
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      defaultMessage: "Show {moreMembersCount} more",
      id: "spacePermissionsSettings.membersTab.showMore.message",
      values: {
        moreMembersCount: filteredMembers.length - SpacePermissionsSettings.defaultLimit
      }
    }))));
  }

  renderSpaceGuests(guests) {
    const {
      spacePermissionsSettingsStore
    } = this.stores;
    const {
      guestsFilter,
      limitGuests
    } = spacePermissionsSettingsStore.state;
    const filteredGuests = this.getFilteredMembers(guests, guestsFilter);
    const limitedGuests = limitGuests ? filteredGuests.slice(0, SpacePermissionsSettings.defaultLimit) : filteredGuests;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_16__.default, {
      placeholder: this.props.intl.formatMessage({
        id: "spacePermissionsSettings.membersTab.filterGuestsInput.placeholder",
        defaultMessage: "Filter by email or name…"
      }),
      left: _shared_icons__WEBPACK_IMPORTED_MODULE_20__.default.searchThick(this.getSearchIconStyle()),
      showClearButton: true,
      format: _Input__WEBPACK_IMPORTED_MODULE_16__.default.Format.Small,
      value: guestsFilter,
      style: SpacePermissionsSettings.filterStyle,
      onChange: e => {
        spacePermissionsSettingsStore.setState({ ...spacePermissionsSettingsStore.state,
          guestsFilter: e.target.value,
          limitGuests: true
        });
      }
    })), this.renderUserTable(limitedGuests), filteredGuests.length > SpacePermissionsSettings.defaultLimit && limitGuests && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SmallButton__WEBPACK_IMPORTED_MODULE_38__.default, {
      style: SpacePermissionsSettings.showMoreButtonStyle,
      onClick: this.handleGuestsShowMoreClick
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
      id: "spacePermissionsSettings.membersTab.showMoreGuestsButton.label",
      defaultMessage: "{numberOfHiddenGuests, plural, one {Show {numberOfHiddenGuests} more} other {Show {numberOfHiddenGuests} more}}",
      values: {
        numberOfHiddenGuests: filteredGuests.length - SpacePermissionsSettings.defaultLimit
      }
    }))));
  }

  renderMobileInviteButton() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: this.mobileMenuItemStyle()
    }, void 0, this.renderInviteButton({
      flex: 1
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        borderBottom: "1px solid ".concat(this.theme.regularDividerColor)
      }
    }));
  }

  renderInviteButton(buttonStyle) {
    const {
      store
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_hooks_useDependency__WEBPACK_IMPORTED_MODULE_53__.LazyPermissionsInvite, {
      disabled: !this.canAdmin(),
      store: store,
      onInviteClick: this.handleUpdateClick,
      onInviteComplete: this.handleUpdateComplete,
      isSubscribed: this.isSubscribed(),
      membersOnly: false,
      upgradeButtonName: "space_permission_settings",
      shouldGrow: false,
      buttonStyle: buttonStyle
    });
  }

  renderInviteViaDomainCaption() {
    const {
      store
    } = this.props;
    const link = _actions_spaceActions__WEBPACK_IMPORTED_MODULE_9__.getSpaceDomainUrl(store);

    if (link) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
        isSmall: true,
        isMultiline: true,
        style: {
          width: "80%"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spaceBasicSettings.membersTab.manageMembersWithLinkCaption",
        defaultMessage: "Manage members here."
      }));
    } else {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
        isSmall: true,
        isMultiline: true,
        style: {
          width: "80%"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
        id: "spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption",
        defaultMessage: "Manage members here, or <setupdomainlink>set up a domain</setupdomainlink>, so everyone with allowed email domains can join the workspace automatically.",
        values: {
          setupdomainlink: (...chunks) => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_InlineTextLink__WEBPACK_IMPORTED_MODULE_34__.default, {
            onClick: () => {
              _stores_SpaceSettingsStore__WEBPACK_IMPORTED_MODULE_33__.default.setState({ ..._stores_SpaceSettingsStore__WEBPACK_IMPORTED_MODULE_33__.default.state,
                currentTab: "settings"
              });
            }
          }, void 0, chunks)
        }
      }));
    }
  }

  getFilteredMembers(usersWithSpaceAccess, filter) {
    const {
      store
    } = this.props;

    if (filter && filter.length > 0) {
      return (0,_shared_fuzzyMatch__WEBPACK_IMPORTED_MODULE_10__.default)(filter, usersWithSpaceAccess, el => {
        const userStore = _stores_UserStore__WEBPACK_IMPORTED_MODULE_12__.default.createChildStore(store, {
          table: _shared_User__WEBPACK_IMPORTED_MODULE_7__.UserTable,
          id: el.userId
        });
        const userValue = userStore.getValue();

        if (!userValue) {
          return "";
        }

        return (0,_shared_User__WEBPACK_IMPORTED_MODULE_7__.getUserSearchName)(userValue);
      });
    } else {
      return usersWithSpaceAccess;
    }
  }

  renderUserTable(spaceMembers) {
    const {
      store
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TableBox__WEBPACK_IMPORTED_MODULE_19__.default, {
      columns: [{
        key: "user",
        header: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.userTable.userColumn.header",
          defaultMessage: "User"
        }),
        style: {
          width: "75%"
        }
      }, {
        key: "access_level",
        header: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_42__.FormattedMessage, {
          id: "spacePermissionsSettings.userTable.accessLevelColumn.header",
          defaultMessage: "Access level"
        }),
        style: {
          width: "25%",
          textAlign: "center"
        }
      }],
      rows: spaceMembers.map(member => {
        const userStore = _stores_UserStore__WEBPACK_IMPORTED_MODULE_12__.default.createChildStore(store, {
          table: _shared_User__WEBPACK_IMPORTED_MODULE_7__.UserTable,
          id: member.userId
        });
        const userValue = userStore.getValue();
        return {
          key: member.userId,
          columns: [this.renderMember(userValue), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
            style: {
              textAlign: "center"
            }
          }, void 0, this.renderUserPermission(member))]
        };
      })
    });
  }

  renderMember(userValue) {
    if (userValue) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          display: "flex",
          alignItems: "center",
          maxWidth: 300
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UIUserAvatar__WEBPACK_IMPORTED_MODULE_41__.default, {
        userValue: userValue,
        size: 28
      }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          minWidth: 0,
          marginLeft: 6,
          marginRight: 6
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
        className: "notranslate"
      }, void 0, (0,_shared_User__WEBPACK_IMPORTED_MODULE_7__.getUserFullDisplayName)(this.props.intl, userValue)), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_UILabel__WEBPACK_IMPORTED_MODULE_40__.default, {
        isSmall: true
      }, void 0, userValue.email)));
    }
  }

  renderUserPermission(user) {
    if (user.role === "none") {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_GuestPagesPopup__WEBPACK_IMPORTED_MODULE_15__.default, {
        store: this.props.store,
        guest: user,
        isSubscribed: this.isSubscribed()
      });
    } else {
      return this.renderMemberRoleSelect(user);
    }
  }

  renderMemberRoleSelect(member) {
    const currentUserId = this.environment.currentUser.id;
    const {
      currentUserSettingsStore
    } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_37__.default.state;

    if (!currentUserSettingsStore) {
      return;
    }

    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PermissionRoleSelect__WEBPACK_IMPORTED_MODULE_17__.default, {
      role: member.role,
      table: _shared_Space__WEBPACK_IMPORTED_MODULE_27__.SpaceTable,
      type: "user_permission",
      disabled: !this.canAdmin(),
      isUserPermission: member.userId === currentUserId,
      isSubscribed: this.isSubscribed(),
      upgradeButtonName: "space_permission_item",
      onChange: newRole => this.handleMemberPermissionRoleChange(member, newRole, currentUserSettingsStore)
    });
  }

  // ===========================================================================
  // Helpers.
  // ===========================================================================
  isSubscribed() {
    const {
      data
    } = _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_32__.default.state;
    return Boolean(data && _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_23__.isSubscribed(data));
  }

  canAdmin() {
    return this.props.store.canAdmin();
  }

  canUseGroups() {
    return _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_23__.subscriptionAllowsMembers(this.environment) && this.isSubscribed();
  }

  canEditGroups() {
    return this.canUseGroups() && this.canAdmin();
  }

  canUseInviteLink() {
    return this.canAdmin() && _helpers_subscriptionHelpers__WEBPACK_IMPORTED_MODULE_23__.subscriptionAllowsMembers(this.environment);
  }

  shouldRenderUpsell() {
    const spaceValue = this.props.store.getValue();
    return Boolean(spaceValue && spaceValue.plan_type === "personal" && this.canAdmin());
  }

  getInviteLinkEnabled() {
    const spaceValue = this.props.store.getValue();
    return Boolean(spaceValue && spaceValue.invite_link_enabled);
  }

  getInviteLink() {
    const data = _stores_SubscriptionDataStore__WEBPACK_IMPORTED_MODULE_32__.default.state.data;
    const spaceValue = this.props.store.getValue();
    const inviteLinkCode = data && (data.type === "subscribed_admin" || data.type === "unsubscribed_admin") ? data.inviteLinkCode : undefined;

    if (spaceValue && inviteLinkCode) {
      return (0,_helpers_spaceHelpers__WEBPACK_IMPORTED_MODULE_54__.getSpaceInviteLinkUrl)(this.environment, spaceValue, inviteLinkCode);
    }
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getSearchIconStyle() {
    return {
      width: 14,
      height: 14,
      marginRight: 6,
      flexGrow: 0,
      flexShrink: 0,
      fill: this.theme.mediumIconColor
    };
  }

  mobileMenuItemStyle() {
    const {
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 14,
      paddingRight: WindowSizeStore.getSafePaddingRightCSS(14),
      background: this.theme.contentBackground
    };
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SpacePermissionsSettings, "defaultLimit", 50);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SpacePermissionsSettings, "filterStyle", {
  width: 180,
  borderRadius: 3 * 10
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(SpacePermissionsSettings, "showMoreButtonStyle", {
  marginTop: 8
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_42__.injectIntl)(SpacePermissionsSettings));

/***/ }),

/***/ "./src/client/components/SubscriptionSettings.tsx":
/*!********************************************************!*\
  !*** ./src/client/components/SubscriptionSettings.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Link */ "./src/client/components/Link.tsx");


/* =============================================================================

	SubscriptionSettings.
	Shown in the mobile Notifications & settings menu when a user
	has subscribed to Personal Pro via an iOS in-app purchase.

============================================================================= */








class SubscriptionSettings extends _Component__WEBPACK_IMPORTED_MODULE_3__.default {
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, this.renderHeader(), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getSettingsOptionStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      isSmall: true,
      isMultiline: true,
      style: {
        marginTop: 2,
        width: "80%"
      }
    }, void 0, this.renderMessage()), this.renderManageSubscriptionButton()));
  }

  renderHeader() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
      large: device.isMobile ? undefined : true,
      divider: device.isMobile ? undefined : "full"
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "subscriptionSettings.title",
      defaultMessage: "Subscription"
    }));
  }

  renderMessage() {
    const {
      device
    } = this.environment;

    if (device.isMobile) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "subscriptionSettings.mobileDescription",
        defaultMessage: "Manage your Personal Pro subscription though the App Store.",
        description: "Description for a button that will take users to Apple's App Store app to edit their subscription."
      });
    } else {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "subscriptionSettings.description",
        defaultMessage: "You're currently subscribed through an in-app purchase with Apple. You can manage your subscription in Apple's subscription settings.",
        description: "Description for a button that will take users to Apple's App Store app to edit their subscription."
      });
    }
  }

  renderManageSubscriptionButton() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Link__WEBPACK_IMPORTED_MODULE_7__.default, {
      href: "https://apps.apple.com/account/subscriptions"
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_4__.default, {
      isLarge: true,
      style: {
        marginTop: 12,
        marginBottom: 4
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "subscriptionSettings.button",
      defaultMessage: "Manage subscription"
    })));
  }

  getSettingsOptionStyle() {
    const {
      device,
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      paddingLeft: device.isMobile ? WindowSizeStore.state.paddingLeftCSS : 0,
      paddingRight: device.isMobile ? WindowSizeStore.state.paddingRightCSS : 0
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionSettings);

/***/ }),

/***/ "./src/client/components/Swipe.tsx":
/*!*****************************************!*\
  !*** ./src/client/components/Swipe.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");



/* =============================================================================

	Swipe.

============================================================================= */


class Swipe extends _Component__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "touchX", void 0);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleTouchStart", e => {
      this.touchX = e.touches[0].clientX;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleTouchMove", e => {
      if (this.touchX === undefined) {
        return;
      }

      const threshold = this.props.threshold || 120;
      const diff = this.touchX - e.touches[0].clientX;

      if (diff > threshold && this.props.onSwipeLeft) {
        this.props.onSwipeLeft();
        this.touchX = undefined;
      }

      if (diff < -1 * threshold && this.props.onSwipeRight) {
        this.props.onSwipeRight();
        this.touchX = undefined;
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleTouchEnd", () => {
      this.touchX = undefined;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleTouchCancel", () => {
      this.touchX = undefined;
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return this.props.render({
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd,
      onTouchCancel: this.handleTouchCancel
    });
  } // ===========================================================================
  // Events.
  // ===========================================================================


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swipe);

/***/ }),

/***/ "./src/client/components/TabBarMenuItem.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/TabBarMenuItem.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");



/* =============================================================================

	TabBarMenuItem.

============================================================================= */





class TabBarMenuItem extends _Component__WEBPACK_IMPORTED_MODULE_3__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: { ...(this.environment.device.isMobile ? this.getMobileStyle() : this.getDesktopStyle()),
        ...this.props.style
      }
    }, void 0, this.props.tabs.map((tab, index, array) => {
      const isSelected = index === this.props.selectedIndex;
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {}, index, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: { ...(isSelected ? this.getSelectedTabStyle() : this.getTabStyle())
        }
      }, index, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_5__.default, {
        style: this.props.tabStyle,
        onClick: () => this.props.onChange(index),
        disabled: this.props.readOnly,
        mobileFeedback: device.isMobile
      }, void 0, tab), isSelected && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: this.getBorderStyle()
      })), this.props.separatorIndexes && this.props.separatorIndexes.includes(index) && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: this.getSeparatorStyle(),
        className: "notranslate"
      }, "".concat(index, "-separator"), "|"));
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        color: this.theme.mediumTextColor
      }
    }, void 0, this.props.right));
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getDesktopStyle() {
    return {
      display: "flex",
      fontSize: 14,
      width: "100%",
      paddingLeft: 8,
      paddingRight: 8,
      boxShadow: "0 1px 0 ".concat(this.theme.regularDividerColor),
      position: "relative",
      zIndex: 1
    };
  }

  getSeparatorStyle() {
    return {
      display: "inline-flex",
      alignItems: "center",
      margin: "0 4px",
      paddingBottom: 4,
      whiteSpace: "nowrap",
      minWidth: 0,
      flexShrink: 0,
      color: this.theme.regularDividerColor
    };
  }

  getMobileStyle() {
    const {
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      fontSize: 16,
      width: "100%",
      paddingTop: 2,
      paddingLeft: this.context.menuType !== _Menu__WEBPACK_IMPORTED_MODULE_4__.MenuType.Popup ? WindowSizeStore.getSafePaddingLeftCSS(16) : 16,
      paddingRight: this.context.menuType !== _Menu__WEBPACK_IMPORTED_MODULE_4__.MenuType.Popup ? WindowSizeStore.getSafePaddingRightCSS(16) : 16,
      boxShadow: "0 1px 0 ".concat(this.theme.regularDividerColor),
      position: "relative",
      zIndex: 2,
      height: 44,
      background: this.theme.popoverBackground
    };
  }

  getTabStyle() {
    return {
      paddingTop: 6,
      paddingBottom: 6,
      whiteSpace: "nowrap",
      minWidth: 0,
      flexShrink: 0,
      color: this.theme.mediumTextColor
    };
  }

  getSelectedTabStyle() {
    return { ...this.getTabStyle(),
      position: "relative",
      color: this.theme.regularTextColor
    };
  }

  getBorderStyle() {
    return {
      borderBottom: "2px solid ".concat(this.theme.regularTextColor),
      position: "absolute",
      bottom: -1,
      left: 8,
      right: 8
    };
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TabBarMenuItem, "contextTypes", { ..._Menu__WEBPACK_IMPORTED_MODULE_4__.menuContextTypes
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabBarMenuItem);

/***/ }),

/***/ "./src/client/components/TableBox.tsx":
/*!********************************************!*\
  !*** ./src/client/components/TableBox.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/typography */ "./src/shared/typography.ts");



/* =============================================================================

	TableBox.

============================================================================= */





class TableBox extends _Component__WEBPACK_IMPORTED_MODULE_3__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      columns,
      rows
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("table", {
      style: this.getStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("thead", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("tr", {
      style: TableBox.headerRowStyle
    }, void 0, columns.map(column => {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("th", {
        style: { ...TableBox.tableHeaderStyle,
          ...column.style
        }
      }, column.key, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_4__.default, {
        isSmall: true
      }, void 0, column.header));
    }))), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("tbody", {}, void 0, rows.map(row => {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("tr", {
        style: this.getRowStyle()
      }, row.key, row.columns.map((cell, index) => {
        const column = columns[index];
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("td", {
          style: TableBox.cellStyle
        }, column.key, cell);
      }));
    })));
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  getStyle() {
    return {
      width: "100%",
      fontSize: 13,
      borderTop: "1px solid ".concat(this.theme.regularDividerColor),
      borderBottom: "1px solid ".concat(this.theme.regularDividerColor)
    };
  }

  getRowStyle() {
    return {
      width: "100%",
      borderTop: "1px solid ".concat(this.theme.regularDividerColor)
    };
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TableBox, "cellPaddingTopBottom", 8);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TableBox, "headerRowStyle", {
  height: 32,
  width: "100%"
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TableBox, "tableHeaderStyle", {
  fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_5__.default.fontWeight.regular,
  textAlign: "left",
  paddingTop: TableBox.cellPaddingTopBottom,
  paddingBottom: TableBox.cellPaddingTopBottom
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(TableBox, "cellStyle", {
  // Important only have top/bottom padding, left/right padding
  // will cause the table to jitter on filter.
  paddingTop: TableBox.cellPaddingTopBottom,
  paddingBottom: TableBox.cellPaddingTopBottom
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBox);

/***/ }),

/***/ "./src/client/components/Topbar.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Topbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_preventSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/preventSidebar */ "./src/client/helpers/preventSidebar.ts");
/* harmony import */ var _shared_zIndices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/zIndices */ "./src/shared/zIndices.ts");
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Breadcrumb */ "./src/client/components/Breadcrumb.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _TopbarConnectionIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TopbarConnectionIndicator */ "./src/client/components/TopbarConnectionIndicator.tsx");
/* harmony import */ var _PageLockTopbarIndicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PageLockTopbarIndicator */ "./src/client/components/PageLockTopbarIndicator.tsx");
/* harmony import */ var _BannersRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BannersRenderer */ "./src/client/components/BannersRenderer.tsx");
/* harmony import */ var _SelectableContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SelectableContainer */ "./src/client/components/SelectableContainer.tsx");
/* harmony import */ var _TopbarBrowserHistoryButtons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TopbarBrowserHistoryButtons */ "./src/client/components/TopbarBrowserHistoryButtons.tsx");
/* harmony import */ var _TopbarSidebarButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TopbarSidebarButton */ "./src/client/components/TopbarSidebarButton.tsx");
/* harmony import */ var _actions_electronActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/electronActions */ "./src/client/actions/electronActions.ts");
/* harmony import */ var _helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../helpers/handleEventOnce */ "./src/client/helpers/handleEventOnce.ts");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _stores_TopbarShareButtonPopupStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../stores/TopbarShareButtonPopupStore */ "./src/client/stores/TopbarShareButtonPopupStore.ts");
/* harmony import */ var _stores_TopbarMoreButtonPopupStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../stores/TopbarMoreButtonPopupStore */ "./src/client/stores/TopbarMoreButtonPopupStore.ts");
/* harmony import */ var _stores_BrowserFullScreenStore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../stores/BrowserFullScreenStore */ "./src/client/stores/BrowserFullScreenStore.ts");
/* harmony import */ var _helpers_appHelpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../helpers/appHelpers */ "./src/client/helpers/appHelpers.ts");
/* harmony import */ var _helpers_classNames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../helpers/classNames */ "./src/client/helpers/classNames.ts");
/* harmony import */ var _helpers_permissionHelpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../helpers/permissionHelpers */ "./src/client/helpers/permissionHelpers.ts");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_searchMenuActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../actions/searchMenuActions */ "./src/client/actions/searchMenuActions.ts");
/* harmony import */ var _actions_forkPageActions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../actions/forkPageActions */ "./src/client/actions/forkPageActions.ts");
/* harmony import */ var _actions_spaceActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../actions/spaceActions */ "./src/client/actions/spaceActions.tsx");
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../actions/routerActions */ "./src/client/actions/routerActions.ts");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/routes */ "./src/shared/routes.ts");
/* harmony import */ var _helpers_recordStoreHelpers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../helpers/recordStoreHelpers */ "./src/client/helpers/recordStoreHelpers.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../config */ "./src/client/config.ts");
/* harmony import */ var _helpers_sidebarHelpers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../helpers/sidebarHelpers */ "./src/client/helpers/sidebarHelpers.ts");
/* harmony import */ var _stores_PublicEditStore__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../stores/PublicEditStore */ "./src/client/stores/PublicEditStore.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _actions_dialogActions__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../actions/dialogActions */ "./src/client/actions/dialogActions.ts");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _helpers_storageHelpers__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../helpers/storageHelpers */ "./src/client/helpers/storageHelpers.ts");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _RestrictedBadge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./RestrictedBadge */ "./src/client/components/RestrictedBadge.tsx");
/* harmony import */ var _stores_UserStore__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../stores/UserStore */ "./src/client/stores/UserStore.ts");
/* harmony import */ var _shared_User__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../shared/User */ "./src/shared/User.ts");
/* harmony import */ var _PublicTopbarMoreButton__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./PublicTopbarMoreButton */ "./src/client/components/PublicTopbarMoreButton.tsx");
/* harmony import */ var _helpers_getBlockUrl__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../helpers/getBlockUrl */ "./src/client/helpers/getBlockUrl.ts");
/* harmony import */ var _stores_AppPublicPageDataStore__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../stores/AppPublicPageDataStore */ "./src/client/stores/AppPublicPageDataStore.ts");
/* harmony import */ var _TopbarActionButtons__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./TopbarActionButtons */ "./src/client/components/TopbarActionButtons.tsx");





/* =============================================================================

	Topbar.

============================================================================= */













































class Topbar extends _Component__WEBPACK_IMPORTED_MODULE_9__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "startedInitialPublicPageEdit", false);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleDoubleClickTopbar", event => {
      if (event.target === event.currentTarget) {
        (0,_helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_17__.default)({
          event: event,
          context: _helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_17__.EventContext.EditorDoubleClick,
          callback: _actions_electronActions__WEBPACK_IMPORTED_MODULE_16__.toggleMaximized
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "maybeOpenOnBaseUrl", () => {
      var _this$pageContext;

      const {
        RouterStore
      } = this.environment;
      const currentRoute = RouterStore.state.route;
      const pageStore = (_this$pageContext = this.pageContext) === null || _this$pageContext === void 0 ? void 0 : _this$pageContext.pageStore;

      if (currentRoute.name === "page" && currentRoute.requestedOnPublicDomain && pageStore) {
        const url = (0,_helpers_getBlockUrl__WEBPACK_IMPORTED_MODULE_45__.default)({
          store: pageStore,
          preferPublicLink: false
        });
        _actions_routerActions__WEBPACK_IMPORTED_MODULE_30__.navigateOnBaseUrl({
          environment: this.environment,
          url
        });
        return true;
      }

      return false;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleStartPublicEdit", () => {
      if (this.maybeOpenOnBaseUrl()) {
        return;
      }

      if (this.environment.currentUser.isLoggedIn()) {
        (0,_actions_dialogActions__WEBPACK_IMPORTED_MODULE_37__.showDialog)({
          showCancel: true,
          keepFocus: false,
          message: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_36__.FormattedMessage, {
            defaultMessage: "When you start editing, your name, email and photo will be visible to the page owners.",
            id: "topbar.startPublicEditDialog.message"
          }),
          items: [{
            label: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_36__.FormattedMessage, {
              defaultMessage: "Continue",
              id: "topbar.startPublicEditDialog.continueLabel"
            }),
            color: "blue",

            onAccept() {
              _stores_PublicEditStore__WEBPACK_IMPORTED_MODULE_35__.default.setState({
                editing: true
              });
            }

          }]
        });
      } else {
        // Save the page id and redirect to login.
        (0,_helpers_storageHelpers__WEBPACK_IMPORTED_MODULE_39__.setPublicAccessPageId)({
          currentUserId: this.environment.currentUser.id,
          blockId: this.props.store.id
        });
        _actions_routerActions__WEBPACK_IMPORTED_MODULE_30__.navigateOnBaseUrl({
          environment: this.environment,
          url: _shared_routes__WEBPACK_IMPORTED_MODULE_31__.routes.login
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleAttemptPublicComment", () => {
      (0,_helpers_storageHelpers__WEBPACK_IMPORTED_MODULE_39__.setPublicAccessPageId)({
        currentUserId: this.environment.currentUser.id,
        blockId: this.props.store.id
      });

      if (this.maybeOpenOnBaseUrl()) {
        return;
      }

      _actions_routerActions__WEBPACK_IMPORTED_MODULE_30__.navigateOnBaseUrl({
        environment: this.environment,
        url: _shared_routes__WEBPACK_IMPORTED_MODULE_31__.routes.login
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "forkPageRef", null);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleForkPageRef", elm => {
      this.forkPageRef = elm;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleOpenQuickFind", () => {
      _actions_searchMenuActions__WEBPACK_IMPORTED_MODULE_27__.openSearchMenu({
        environment: this.environment,
        analyticsFrom: "public-page-topbar"
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleOpenForkPage", () => {
      _actions_forkPageActions__WEBPACK_IMPORTED_MODULE_28__.openForkPagePopup({
        environment: this.environment,
        store: this.props.store,
        originRect: this.getDuplicateClientRect()
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleClickNotion", () => {
      const {
        currentUserRootStore,
        currentUserSettingsStore
      } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_18__.default.state;
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_40__.trackNotionTopbarClickEvent(this.environment);

      if (currentUserRootStore && currentUserSettingsStore) {
        void _actions_spaceActions__WEBPACK_IMPORTED_MODULE_29__.navigateToFirstSpace({
          environment: this.environment,
          userRootStore: currentUserRootStore,
          userSettingsStore: currentUserSettingsStore
        });
      } else {
        _actions_routerActions__WEBPACK_IMPORTED_MODULE_30__.navigateOnBaseUrl({
          environment: this.environment,
          url: _shared_routes__WEBPACK_IMPORTED_MODULE_31__.routes.login
        });
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "appRenderState", this.createComputedStore(() => _helpers_appHelpers__WEBPACK_IMPORTED_MODULE_22__.getAppRenderState(this.environment)));
  }

  didUpdate() {
    const {
      store
    } = this.props;
    const {
      RouterStore
    } = this.environment;
    const currentRoute = RouterStore.state.route;
    const {
      publicPageData
    } = _stores_AppPublicPageDataStore__WEBPACK_IMPORTED_MODULE_46__.default.state; // If the user is accessing a publicly editable page on notion.so,
    // that is not grandfathered in to be viewable on notion.so (requireLogin)
    // we assume they are accessing it for public editing (from notion.site)
    // and need the "are you sure you want to publicly edit "

    if ( // ready to edit
    this.isReady() && // is editable
    store.canEdit() && // is not already editing
    !_stores_PublicEditStore__WEBPACK_IMPORTED_MODULE_35__.default.state.editing && // is a page view
    currentRoute.name === "page" && // requested on notion.so instead of notion.site
    !currentRoute.requestedOnPublicDomain && // in public mode
    this.shouldRenderPublicPageTopbar() && // not already editing
    !this.startedInitialPublicPageEdit && // not grandfathered into notion.so serving (and, implicitly, editable)
    publicPageData !== null && publicPageData !== void 0 && publicPageData.requireLogin) {
      this.startedInitialPublicPageEdit = true;
      this.handleStartPublicEdit();
    }
  } // ===========================================================================
  // Render.
  // ===========================================================================


  renderComponent() {
    return (0,_helpers_preventSidebar__WEBPACK_IMPORTED_MODULE_6__.default)(events => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      style: this.getWrapStyle()
    }, events), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: this.getStyle(),
      className: _helpers_classNames__WEBPACK_IMPORTED_MODULE_23__.topbar
    }, void 0, this.isReady() && (this.shouldRenderPublicPageTopbar() ? this.renderPublicPageTopbar() : this.renderDefaultTopbar())), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_BannersRenderer__WEBPACK_IMPORTED_MODULE_12__.default, {
      banners: this.props.banners,
      isMobile: false
    })));
  }

  renderPublicPageTopbar() {
    const {
      device
    } = this.environment;
    const {
      store,
      isInvalidPage,
      isElectron
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: this.getContainerStyle(),
      onDoubleClick: this.handleDoubleClickTopbar
    }, void 0, isElectron && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TopbarBrowserHistoryButtons__WEBPACK_IMPORTED_MODULE_14__.default, {}), !isInvalidPage && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__.default, {
      store: store,
      style: Topbar.breadcrumbStyle,
      maxAncestorCount: 2,
      ancestorMaxWidth: 160,
      currentPageMaxWidth: 240,
      showCurrentPageControls: true,
      isMobile: false
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        flexGrow: 1,
        flexShrink: 1
      }
    }), store.canEdit() && !_stores_PublicEditStore__WEBPACK_IMPORTED_MODULE_35__.default.state.editing && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_38__.default, {
      onClick: this.handleStartPublicEdit,
      style: {
        marginRight: 8,
        padding: "0 8px"
      }
    }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_26__.default.pencil(Topbar.topbarIconStyle), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_36__.FormattedMessage, {
      id: "topbar.publicPage.edit",
      defaultMessage: "Edit"
    })), !this.environment.currentUser.isLoggedIn() && store.canComment() && !store.canEdit() && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_38__.default, {
      onClick: this.handleAttemptPublicComment,
      style: {
        marginRight: 8,
        padding: "0 8px"
      }
    }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_26__.default.speechBubbleThin(Topbar.topbarIconStyle), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_36__.FormattedMessage, {
      id: "topbar.publicPage.comment",
      defaultMessage: "Comment"
    })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_25__.default, {
      onClick: this.handleOpenQuickFind
    }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_26__.default.searchThick(Topbar.topbarIconStyle), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_36__.FormattedMessage, {
      defaultMessage: "Search",
      id: "topbar.publicPage.searchButton.label"
    })), (0,_helpers_permissionHelpers__WEBPACK_IMPORTED_MODULE_24__.allowsPublicPageDuplicate)(this.props.store) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_PlainButton__WEBPACK_IMPORTED_MODULE_25__.default, {
      onClick: this.handleOpenForkPage,
      ref: this.handleForkPageRef
    }, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_36__.FormattedMessage, {
      defaultMessage: "Duplicate",
      id: "topbar.publicPage.duplicateButton.label"
    })), !device.isMobile && !isInvalidPage && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PublicTopbarMoreButton__WEBPACK_IMPORTED_MODULE_44__.default, {
      store: store,
      buttonPopupStore: _stores_TopbarMoreButtonPopupStore__WEBPACK_IMPORTED_MODULE_20__.default
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: this.getPublicPageTopbarDividerStyle()
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PlainButton__WEBPACK_IMPORTED_MODULE_25__.default, {
      onClick: this.handleClickNotion
    }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_26__.default.notionLogo(Topbar.notionLogoStyle), "Notion"));
  }

  renderDefaultTopbar() {
    const {
      store,
      isInvalidPage,
      isElectron,
      showSidebarButton
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_SelectableContainer__WEBPACK_IMPORTED_MODULE_13__.default, {
      store: store,
      disableRectangularSelection: true,
      disableEditNearestBlock: true,
      render: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: this.getContainerStyle(),
        onDoubleClick: this.handleDoubleClickTopbar
      }, void 0, showSidebarButton && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TopbarSidebarButton__WEBPACK_IMPORTED_MODULE_15__.default, {}), isElectron && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TopbarBrowserHistoryButtons__WEBPACK_IMPORTED_MODULE_14__.default, {}), !isInvalidPage && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__.default, {
        store: store,
        style: Topbar.breadcrumbStyle,
        maxAncestorCount: 2,
        ancestorMaxWidth: 160,
        currentPageMaxWidth: 240,
        showCurrentPageControls: true,
        isMobile: false
      }), store.canEdit() && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_PageLockTopbarIndicator__WEBPACK_IMPORTED_MODULE_11__.default, {
        store: store,
        isMobile: false
      }, store.id), store.isRestricted() && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_RestrictedBadge__WEBPACK_IMPORTED_MODULE_41__.default, {
        style: {
          marginRight: 10
        },
        onClick: () => {
          _stores_TopbarShareButtonPopupStore__WEBPACK_IMPORTED_MODULE_19__.default.setState({
            open: true
          });
        }
      }), !isInvalidPage && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_TopbarConnectionIndicator__WEBPACK_IMPORTED_MODULE_10__.default, {}), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
        style: {
          flexGrow: 1,
          flexShrink: 1
        }
      }), !isInvalidPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TopbarActionButtons__WEBPACK_IMPORTED_MODULE_47__.TopbarActionButtons, this.props))
    });
  } // ===========================================================================
  // Events.
  // ===========================================================================


  // ===========================================================================
  // Helpers.
  // ===========================================================================
  getDuplicateClientRect() {
    if (this.forkPageRef) {
      const node = react_dom__WEBPACK_IMPORTED_MODULE_5___default().findDOMNode(this.forkPageRef);

      if (node instanceof Element) {
        return node.getBoundingClientRect();
      }
    }
  }
  /** Don't render if ancestors / current user are not loaded to prevent
   * flickering. */


  isReady() {
    const ancestorsLoaded = (0,_helpers_recordStoreHelpers__WEBPACK_IMPORTED_MODULE_32__.areAncestorsLoaded)(this.props.store);
    const {
      id: currentUserId
    } = this.environment.currentUser;
    const userStore = currentUserId ? _stores_UserStore__WEBPACK_IMPORTED_MODULE_42__.default.createChildStore(this.props.store, {
      table: _shared_User__WEBPACK_IMPORTED_MODULE_43__.UserTable,
      id: currentUserId
    }) : undefined;
    const userStoreIsReady = userStore ? userStore.isReady() : true;
    return ancestorsLoaded && userStoreIsReady;
  }

  shouldRenderPublicPageTopbar() {
    if (_config__WEBPACK_IMPORTED_MODULE_33__.default.isAdminMode) {
      return false;
    }

    return (0,_helpers_permissionHelpers__WEBPACK_IMPORTED_MODULE_24__.userHasPermissionViaPublicAccess)(this.environment, this.props.store);
  }

  getWrapStyle() {
    return {
      maxWidth: "100vw",
      zIndex: _shared_zIndices__WEBPACK_IMPORTED_MODULE_7__.topbar,
      background: this.theme.contentBackground,
      WebkitUserSelect: "none",
      userSelect: "none",
      // Have this break out of the width of the Frame, so it doesn't
      // move when the update (right) sidebar comes out
      width: this.environment.WindowSizeStore.state.width - (0,_helpers_sidebarHelpers__WEBPACK_IMPORTED_MODULE_34__.getCurrentSidebarWidth)(this.environment)
    };
  }

  static getTopbarHeight(environment) {
    const {
      device
    } = environment;
    return device.isElectronMac ? Topbar.desktopMacHeight : Topbar.defaultHeight;
  }

  getStyle() {
    return {
      width: "100%",
      maxWidth: "100vw",
      height: Topbar.getTopbarHeight(this.environment),
      opacity: _helpers_appHelpers__WEBPACK_IMPORTED_MODULE_22__.shouldHideTopbarStore.state ? 0 : 1,
      transition: "\n\t\t\t\topacity ".concat(Topbar.transitionDuration, "ms,\n\t\t\t\tcolor ").concat(Topbar.transitionDuration, "ms\n\t\t\t"),
      position: "relative"
    };
  }

  getContainerStyle() {
    const {
      device
    } = this.environment;
    const shouldLeaveGapForDesktopMac = device.isElectronMac && (!this.appRenderState.state.shouldShowSidebar || !(0,_helpers_sidebarHelpers__WEBPACK_IMPORTED_MODULE_34__.sidebarIsExpanded)(this.environment)) && !_stores_BrowserFullScreenStore__WEBPACK_IMPORTED_MODULE_21__.default.state.isFullScreen;
    return {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      overflow: "hidden",
      height: Topbar.getTopbarHeight(this.environment),
      left: 0,
      right: 0,
      bottom: 0,
      paddingLeft: shouldLeaveGapForDesktopMac ? Topbar.paddingLeftWhenDesktopSidebarClose : device.isMobile ? 4 : 12,
      paddingRight: device.isMobile ? 4 : 10
    };
  }

  getPublicPageTopbarDividerStyle() {
    return {
      flex: "none",
      width: 1,
      height: 16,
      marginLeft: 8,
      marginRight: 8,
      background: this.theme.darkDividerColor
    };
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "defaultHeight", 45);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "desktopMacHeight", 37);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "paddingLeftWhenDesktopSidebarClose", 73);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "transitionDuration", 700);

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "breadcrumbStyle", {
  height: "100%",
  flexGrow: 0,
  marginRight: 8,
  fontSize: 14,
  minWidth: 0
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "topbarIconStyle", {
  width: 14,
  height: 14,
  marginRight: 6
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(Topbar, "notionLogoStyle", {
  width: 18,
  height: 18,
  marginRight: 6
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topbar);

/***/ }),

/***/ "./src/client/components/TopbarActionButtons.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/TopbarActionButtons.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarActionButtons": () => (/* binding */ TopbarActionButtons)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TopbarPresence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopbarPresence */ "./src/client/components/TopbarPresence.tsx");
/* harmony import */ var _TopbarMoreButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopbarMoreButton */ "./src/client/components/TopbarMoreButton.tsx");
/* harmony import */ var _TopbarShareButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarShareButton */ "./src/client/components/TopbarShareButton.tsx");
/* harmony import */ var _TopbarFavoriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopbarFavoriteButton */ "./src/client/components/TopbarFavoriteButton.tsx");
/* harmony import */ var _TopbarUpdatesButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopbarUpdatesButton */ "./src/client/components/TopbarUpdatesButton.tsx");
/* harmony import */ var _stores_TopbarShareButtonPopupStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/TopbarShareButtonPopupStore */ "./src/client/stores/TopbarShareButtonPopupStore.ts");
/* harmony import */ var _stores_TopbarUpdateButtonPopupStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/TopbarUpdateButtonPopupStore */ "./src/client/stores/TopbarUpdateButtonPopupStore.ts");
/* harmony import */ var _stores_TopbarMoreButtonPopupStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/TopbarMoreButtonPopupStore */ "./src/client/stores/TopbarMoreButtonPopupStore.ts");
/* harmony import */ var _hooks_useEnvironment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useEnvironment */ "./src/client/hooks/useEnvironment.ts");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useStore */ "./src/client/hooks/useStore.ts");


/* =============================================================================

	TopbarActionButtons.

============================================================================= */











function TopbarActionButtons(props) {
  const {
    device
  } = (0,_hooks_useEnvironment__WEBPACK_IMPORTED_MODULE_10__.useEnvironment)();
  const {
    store,
    spaceStore,
    pageVisitStore,
    presenceStore,
    collectionViewStore,
    spaceViewStore
  } = props;
  const canEdit = (0,_hooks_useStore__WEBPACK_IMPORTED_MODULE_11__.useComputedStore)(() => store.canEdit(), [store]);
  return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    style: actionButtonsWrapStyle
  }, void 0, canEdit && pageVisitStore && presenceStore && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_TopbarPresence__WEBPACK_IMPORTED_MODULE_2__.default, {
    rootStore: store,
    pageVisitStore: pageVisitStore,
    presenceStore: presenceStore
  }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_TopbarShareButton__WEBPACK_IMPORTED_MODULE_4__.default, {
    store: store,
    buttonPopupStore: _stores_TopbarShareButtonPopupStore__WEBPACK_IMPORTED_MODULE_7__.default
  }), !device.isMobile && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_TopbarUpdatesButton__WEBPACK_IMPORTED_MODULE_6__.default, {
    blockStore: store,
    spaceStore: spaceStore,
    buttonPopupStore: _stores_TopbarUpdateButtonPopupStore__WEBPACK_IMPORTED_MODULE_8__.default
  }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_TopbarFavoriteButton__WEBPACK_IMPORTED_MODULE_5__.default, {
    store: store,
    spaceViewStore: spaceViewStore
  }), !device.isMobile && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_TopbarMoreButton__WEBPACK_IMPORTED_MODULE_3__.default, {
    store: store,
    collectionViewStore: collectionViewStore,
    buttonPopupStore: _stores_TopbarMoreButtonPopupStore__WEBPACK_IMPORTED_MODULE_9__.default
  }));
}
const actionButtonsWrapStyle = {
  flexGrow: 0,
  flexShrink: 0,
  display: "flex",
  alignItems: "stretch"
};

/***/ }),

/***/ "./src/client/components/TopbarBrowserHistoryButtons.tsx":
/*!***************************************************************!*\
  !*** ./src/client/components/TopbarBrowserHistoryButtons.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/routerActions */ "./src/client/actions/routerActions.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyboardShortcut */ "./src/client/components/KeyboardShortcut.tsx");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _IgnoreClickArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IgnoreClickArea */ "./src/client/components/IgnoreClickArea.tsx");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IconButton */ "./src/client/components/IconButton.tsx");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Button */ "./src/client/components/Button.tsx");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Popup */ "./src/client/components/Popup.tsx");
/* harmony import */ var _stores_PeekStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../stores/PeekStore */ "./src/client/stores/PeekStore.ts");





/* =============================================================================

	TopbarBrowserHistoryButtons.

============================================================================= */














class TopbarBrowserHistoryButtons extends _Component__WEBPACK_IMPORTED_MODULE_7__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "renderDesktopButtons", () => {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_IgnoreClickArea__WEBPACK_IMPORTED_MODULE_10__.default, {
        capture: true,
        render: ignoreClickEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          style: {
            display: "flex",
            flexShrink: 0
          }
        }, ignoreClickEvents), this.renderBackButton(), this.renderForwardButton())
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleBackClick", () => {
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_11__.trackClickDesktopNavigator(this.environment, {
        type: "back"
      });
      _actions_routerActions__WEBPACK_IMPORTED_MODULE_6__.back();
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleForwardClick", () => {
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_11__.trackClickDesktopNavigator(this.environment, {
        type: "forward"
      });
      _actions_routerActions__WEBPACK_IMPORTED_MODULE_6__.forward();
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    if (this.environment.device.isMobile) {
      return this.renderMobile();
    } else {
      return this.renderDesktop();
    }
  }

  renderDesktop() {
    // Render a Popup at the same location of the buttons when the PeekView is open,
    // so that users can still reach the back/forward buttons.
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Popup__WEBPACK_IMPORTED_MODULE_15__.default, {
      style: {
        background: "transparent",
        borderRadius: 0,
        boxShadow: "none"
      },
      origin: this.renderDesktopButtons(),
      render: this.renderDesktopButtons,
      placementToOrigin: _Popup__WEBPACK_IMPORTED_MODULE_15__.default.Placement.Center,
      alignmentToOrigin: _Popup__WEBPACK_IMPORTED_MODULE_15__.default.Alignment.Center,
      open: _stores_PeekStore__WEBPACK_IMPORTED_MODULE_16__.default.state.open,
      disableMouseCapture: true,
      preventCaptureEsc: true,
      preventScaleTransition: true,
      preventOpacityTransition: true,
      popupType: _Popup__WEBPACK_IMPORTED_MODULE_15__.default.PopupType.Popup
    });
  }

  renderBackButton() {
    const {
      RouterStore
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_9__.default, {
      renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          display: "flex"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
        id: "topbarBrowserHistoryButtons.goBackButton.label",
        defaultMessage: "Go back"
      }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__.default, {
        name: "goBack",
        style: {
          opacity: 0.5,
          marginLeft: 4
        }
      })),
      placement: _Tooltip__WEBPACK_IMPORTED_MODULE_9__.default.Placement.Bottom,
      alignment: _Tooltip__WEBPACK_IMPORTED_MODULE_9__.default.Alignment.Center,
      originGap: 6,
      render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_IconButton__WEBPACK_IMPORTED_MODULE_12__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        icon: _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.historyBack,
        isDarkIconColor: true,
        className: "notion-history-back-button",
        disabled: !RouterStore.canGoBack(),
        style: {
          position: "relative"
        },
        onClick: this.handleBackClick
      }, tooltipEvents))
    });
  }

  renderForwardButton() {
    const {
      RouterStore
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_9__.default, {
      renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          display: "flex"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
        id: "topbarBrowserHistoryButton.goForwardButton.label",
        defaultMessage: "Go forward"
      }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_8__.default, {
        name: "goForward",
        style: {
          opacity: 0.5,
          marginLeft: 4
        }
      })),
      placement: _Tooltip__WEBPACK_IMPORTED_MODULE_9__.default.Placement.Bottom,
      alignment: _Tooltip__WEBPACK_IMPORTED_MODULE_9__.default.Alignment.Center,
      originGap: 6,
      render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_IconButton__WEBPACK_IMPORTED_MODULE_12__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        icon: _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.historyForward,
        isDarkIconColor: true,
        className: "notion-history-forward-button",
        disabled: !RouterStore.canGoForward(),
        style: {
          position: "relative"
        },
        onClick: this.handleForwardClick
      }, tooltipEvents))
    });
  }

  renderMobile() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_IgnoreClickArea__WEBPACK_IMPORTED_MODULE_10__.default, {
      capture: true,
      render: ignoreClickEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        style: {
          display: "flex",
          flexShrink: 0,
          height: "100%",
          paddingLeft: 4,
          paddingRight: 4
        }
      }, ignoreClickEvents), this.renderMobileBackButton(), this.renderMobileForwardButton())
    });
  }

  renderMobileBackButton() {
    const {
      RouterStore
    } = this.environment;
    const isDisabled = !RouterStore.canGoBack();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
      onClick: this.handleBackClick,
      className: "notion-history-back-button",
      disabled: isDisabled,
      disabledFeedback: true,
      mobileFeedback: true,
      style: TopbarBrowserHistoryButtons.mobileButtonStyle
    }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.historyBack({
      width: 16,
      height: 16
    }));
  }

  renderMobileForwardButton() {
    const {
      RouterStore
    } = this.environment;
    const isDisabled = !RouterStore.canGoForward();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Button__WEBPACK_IMPORTED_MODULE_14__.default, {
      onClick: this.handleForwardClick,
      className: "notion-history-forward-button",
      disabled: isDisabled,
      mobileFeedback: true,
      disabledFeedback: true,
      style: TopbarBrowserHistoryButtons.mobileButtonStyle
    }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.historyForward({
      width: 16,
      height: 16
    }));
  } // ===========================================================================
  // Events.
  // ===========================================================================


}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TopbarBrowserHistoryButtons, "mobileButtonStyle", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: 32
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopbarBrowserHistoryButtons);

/***/ }),

/***/ "./src/client/components/TopbarConnectionIndicator.tsx":
/*!*************************************************************!*\
  !*** ./src/client/components/TopbarConnectionIndicator.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/client/components/LoadingSpinner.tsx");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _helpers_isKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/isKey */ "./src/client/helpers/isKey.ts");
/* harmony import */ var _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stores/ConnectionStore */ "./src/client/stores/ConnectionStore.ts");
/* harmony import */ var _stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/SyncStore */ "./src/client/stores/SyncStore.ts");
/* harmony import */ var _ButtonPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ButtonPopup */ "./src/client/components/ButtonPopup.tsx");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _shared_numberFormatHelpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/numberFormatHelpers */ "./src/shared/numberFormatHelpers.ts");
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _helpers_storageHelpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../helpers/storageHelpers */ "./src/client/helpers/storageHelpers.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");





/* =============================================================================

	TopbarConnectionIndicator.

============================================================================= */

















class TopbarConnectionIndicator extends _Component__WEBPACK_IMPORTED_MODULE_6__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "fakeSync", false);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "realSync", false);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleKeyDown", e => {
      if ((0,_helpers_isKey__WEBPACK_IMPORTED_MODULE_9__.default)(this.environment, e, "command+s")) {
        e.preventDefault(); // Show syncing for a second to make the user feel good

        const online = _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.state.online;

        if (online && !this.fakeSync && !_stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.transactionQueueUnhealthyStore.state) {
          this.fakeSync = true;
          this.enqueueForceUpdate();
          setTimeout(() => {
            this.fakeSync = false;
            this.enqueueForceUpdate();
          }, 500);
        }
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleStartSync", () => {
      if (_stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.state.syncing && !this.realSync) {
        this.realSync = true;
        this.enqueueForceUpdate();
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleStartSyncDebounced", lodash__WEBPACK_IMPORTED_MODULE_5___default().debounce(this.handleStartSync, 8000));

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleStopSync", () => {
      if (this.realSync && !_stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.state.syncing) {
        this.realSync = false;
        this.enqueueForceUpdate();
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handleStopSyncDebounced", lodash__WEBPACK_IMPORTED_MODULE_5___default().debounce(this.handleStopSync, 200));

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "isOnline", this.createComputedStore(() => {
      return _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.state.online;
    }));

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "shouldShowLoadingSpinner", () => (this.fakeSync || this.realSync) && !_stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.transactionQueueUnhealthyStore.state);
  }

  willMount() {
    this.listenForSave();
    _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.addListener(this.handleStartSyncDebounced);
    _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.addListener(this.handleStopSyncDebounced);
  }

  willUnmount() {
    this.unlistenForSave();
    _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.removeListener(this.handleStartSyncDebounced);
    _stores_ConnectionStore__WEBPACK_IMPORTED_MODULE_10__.default.removeListener(this.handleStopSyncDebounced);
  } // ===========================================================================
  // Render.
  // ===========================================================================


  renderComponent() {
    const {
      device
    } = this.environment;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, void 0, !device.isMobile && this.renderDesktopIndicators(), device.isMobile && this.renderMobileLoadingSpinner(), this.renderErrors());
  }

  renderDesktopIndicators() {
    const {
      intl
    } = this.props;

    if (!this.isOnline.state) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_8__.default, {
        renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: {
            width: 200
          }
        }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "{numberOfEdits, plural, one {You have {numberOfEdits} edit that will be synced next time you are online.} other {You have {numberOfEdits} edits that will be synced next time you are online.}}",
          id: "connectionState.offlineBadge.tooltip",
          values: {
            numberOfEdits: _stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.default.state.totalPending
          }
        })),
        textWrap: true,
        render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: this.getOfflineBadgeStyle()
        }, tooltipEvents), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "Offline",
          id: "connectionState.offlineBadge.label"
        }))
      });
    } else if (this.shouldShowLoadingSpinner()) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_8__.default, {
        renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "{percent} complete.",
          id: "connectionState.savePercentangeIndicator.tooltip",
          values: {
            percent: _stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.default.percentComplete(intl)
          }
        }),
        render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: this.getLoadingStateStyle()
        }, tooltipEvents), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__.default, {
          style: {
            margin: 4,
            marginRight: 8
          }
        }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "Saving\u2026",
          id: "connectionState.saving.message"
        }))
      });
    }
  }

  renderMobileLoadingSpinner() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        // Adapted from `actionButtonStyle` in TopbarMobile.
        display: "flex",
        alignItems: "center",
        height: "100%",
        marginLeft: "auto",
        paddingLeft: 4,
        paddingRight: 8,
        visibility: this.shouldShowLoadingSpinner() ? "visible" : "hidden"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__.default, {
      style: {
        height: 18,
        width: 18
      }
    }));
  }

  renderErrors() {
    const {
      device
    } = this.environment; // The most important message to display is if the transaction queue
    // is unhealthy enough to put an error here.

    if (_stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.default.state.transactionQueueError) {
      const indicatorText = /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
        defaultMessage: "Cannot save changes",
        id: "connectionState.errorIndicator.cannotSaveChanges.message"
      });

      const detailsText = /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
        defaultMessage: "You can no longer make edits: {errorMessage} Contact support if that doesn\u2019t fix the issue. {usageInfoMessage}",
        id: "connectionState.errorIndicator.cannotMakeEdits.detailedMessage",
        values: {
          errorMessage: _stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.default.state.transactionQueueError.message,
          usageInfoMessage: this.renderUsageInfo()
        }
      });

      return this.renderErrorIndicator(indicatorText, detailsText);
    } // Show warning message about storage quota usage. This doesn't cause any
    // behavior changes, but may indicate impending doom.


    const estimate = _stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.default.state.storageUsageEstimate;

    if (estimate !== undefined) {
      if (!(0,_helpers_storageHelpers__WEBPACK_IMPORTED_MODULE_17__.isStorageEstimateAcceptable)(estimate)) {
        const errorIndicator = device.isBrowser ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "Low browser storage",
          id: "connectionState.errorIndicator.lowStorageOnWebApp.message"
        }) : device.isMobileNative ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "Low app storage",
          id: "connectionState.errorIndicator.lowStorageOnMobileApp.message"
        }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          defaultMessage: "Low disk space",
          id: "connectionState.errorIndicator.lowStorageOnDesktopApp.message"
        });
        return this.renderErrorIndicator(errorIndicator, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, void 0, this.renderUsageInfo(), " ", /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
          id: "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart2",
          defaultMessage: "You may lose changes made while offline. Try closing and re-opening your app, and contact support if that doesn\u2019t fix the issue."
        })));
      }
    }
  }

  renderUsageInfo() {
    const estimate = _stores_SyncStore__WEBPACK_IMPORTED_MODULE_11__.default.state.storageUsageEstimate;
    const {
      intl
    } = this.props;

    if (estimate) {
      const quotaUsagePercent = estimate.usage / estimate.quota;
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_18__.FormattedMessage, {
        defaultMessage: "Notion is using {percentageOfStorageBytesUsed} of its available storage on your device ({usedNumberOfBytes} of {totalNumberOfBytes}).",
        id: "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart1",
        values: {
          usedNumberOfBytes: (0,_shared_numberFormatHelpers__WEBPACK_IMPORTED_MODULE_15__.formatNumber)(estimate.usage, "bytes", intl),
          totalNumberOfBytes: (0,_shared_numberFormatHelpers__WEBPACK_IMPORTED_MODULE_15__.formatNumber)(estimate.quota, "bytes", intl),
          percentageOfStorageBytesUsed: intl.formatNumber(quotaUsagePercent, {
            style: "percent",
            maximumFractionDigits: 2
          })
        }
      });
    }
  }

  renderErrorIndicator(indicatorText, detailsText) {
    const {
      device
    } = this.environment;
    const icon = _shared_icons__WEBPACK_IMPORTED_MODULE_16__.default.collectionDescriptionSmall({
      marginLeft: 6,
      width: 14,
      height: 14,
      fill: this.getErrorStateStyle().color
    });

    if (device.isMobile) {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_ButtonPopup__WEBPACK_IMPORTED_MODULE_12__.default, {
        popupType: _ButtonPopup__WEBPACK_IMPORTED_MODULE_12__.default.PopupType.SlideUp,
        renderOrigin: popupEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_PlainButton__WEBPACK_IMPORTED_MODULE_13__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: this.getErrorStateStyle()
        }, popupEvents), indicatorText || icon),
        render: ({
          close
        }) =>
        /*#__PURE__*/
        // @surganov halp plz
        _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Menu__WEBPACK_IMPORTED_MODULE_14__.default, {
          menuType: _Menu__WEBPACK_IMPORTED_MODULE_14__.default.MenuType.ActionSheet
        }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: {
            padding: 15,
            background: this.theme.errorText,
            color: "white"
          },
          onClick: close
        }, void 0, detailsText))
      });
    } else {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_8__.default, {
        renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: {
            width: 320,
            whiteSpace: "normal"
          }
        }, void 0, detailsText),
        render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: this.getErrorStateStyle()
        }, tooltipEvents), indicatorText, icon)
      });
    }
  } // ===========================================================================
  // Events.
  // ===========================================================================


  listenForSave() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  unlistenForSave() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // ===========================================================================
  // Styles.
  // ===========================================================================
  getTextStyle() {
    const {
      device
    } = this.environment;
    const isMobile = device.isMobile;
    return {
      display: "flex",
      alignItems: "center",
      marginRight: isMobile ? 0 : 18,
      fontSize: isMobile ? 12 : 14
    };
  }

  getOfflineBadgeStyle() {
    const {
      device
    } = this.environment;
    const isMobile = device.isMobile;
    return {
      display: "flex",
      alignItems: "center",
      padding: "0px 6px",
      height: isMobile ? 20 : 24,
      borderRadius: 3,
      marginRight: isMobile ? 4 : 18,
      whiteSpace: "nowrap",
      fontSize: isMobile ? 12 : 14,
      color: this.theme.mediumTextColor,
      border: "1px solid ".concat(this.theme.darkDividerColor)
    };
  }

  getLoadingStateStyle() {
    return { ...this.getTextStyle(),
      color: this.theme.lightTextColor
    };
  }

  getErrorStateStyle() {
    return { ...this.getTextStyle(),
      whiteSpace: "nowrap",
      color: this.theme.errorText
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_18__.injectIntl)(TopbarConnectionIndicator));

/***/ }),

/***/ "./src/client/components/TopbarSidebarButton.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/TopbarSidebarButton.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/icons */ "./src/shared/icons.tsx");
/* harmony import */ var _actions_sidebarActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/sidebarActions */ "./src/client/actions/sidebarActions.ts");
/* harmony import */ var _stores_SidebarNotificationStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/SidebarNotificationStore */ "./src/client/stores/SidebarNotificationStore.ts");
/* harmony import */ var _helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/handleEventOnce */ "./src/client/helpers/handleEventOnce.ts");
/* harmony import */ var _Animated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Animated */ "./src/client/components/Animated.tsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Tooltip */ "./src/client/components/Tooltip.tsx");
/* harmony import */ var _KeyboardShortcut__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KeyboardShortcut */ "./src/client/components/KeyboardShortcut.tsx");
/* harmony import */ var _MentionsBadge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MentionsBadge */ "./src/client/components/MentionsBadge.tsx");
/* harmony import */ var _stores_SidebarStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../stores/SidebarStore */ "./src/client/stores/SidebarStore.ts");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IconButton */ "./src/client/components/IconButton.tsx");
/* harmony import */ var _helpers_classNames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../helpers/classNames */ "./src/client/helpers/classNames.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");





/* =============================================================================

	TopbarSidebarButton.

============================================================================= */















class TopbarSidebarButton extends _Component__WEBPACK_IMPORTED_MODULE_10__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "handlePlusIconMouseEnter", e => {
      (0,_helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_8__.default)({
        event: e,
        context: _helpers_handleEventOnce__WEBPACK_IMPORTED_MODULE_8__.EventContext.SidebarMouseMove,
        callback: () => {
          _actions_sidebarActions__WEBPACK_IMPORTED_MODULE_6__.open();
        }
      });
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: this.getStyle(),
      onMouseEnter: this.handlePlusIconMouseEnter,
      onMouseMove: this.handlePlusIconMouseEnter
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
      style: {
        position: "relative"
      }
    }, void 0, this.renderMenuButton(), this.renderExpandButton()));
  }

  renderMenuButton() {
    const unreadCount = _stores_SidebarNotificationStore__WEBPACK_IMPORTED_MODULE_7__.default.getTotalUnreadMentionsCount();
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Animated__WEBPACK_IMPORTED_MODULE_9__.default, {
      isVisible: true,
      animationStyle: {
        opacity: _stores_SidebarStore__WEBPACK_IMPORTED_MODULE_14__.sidebarOpenStore.state ? 0 : 1
      },
      render: () => {
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: TopbarSidebarButton.buttonWrapStyle
        }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: TopbarSidebarButton.buttonStyle
        }, void 0, _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.hamburgerMenu(this.getSvgStyle()), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MentionsBadge__WEBPACK_IMPORTED_MODULE_13__.default, {
          color: _MentionsBadge__WEBPACK_IMPORTED_MODULE_13__.default.Color.Red,
          count: unreadCount,
          style: {
            position: "absolute",
            top: -1,
            right: -4
          }
        })));
      }
    });
  }

  renderExpandButton() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Animated__WEBPACK_IMPORTED_MODULE_9__.default, {
      isVisible: true,
      animationStyle: {
        opacity: _stores_SidebarStore__WEBPACK_IMPORTED_MODULE_14__.sidebarOpenStore.state ? 1 : 0
      },
      render: () => {
        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
          style: TopbarSidebarButton.buttonWrapStyle
        }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_11__.default, {
          renderTooltip: () => /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_17__.FormattedMessage, {
            defaultMessage: "Lock sidebar open",
            id: "sidebarExpandButton.tooltip"
          })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_KeyboardShortcut__WEBPACK_IMPORTED_MODULE_12__.default, {
            style: {
              color: this.theme.mediumInvertedTextColor
            },
            name: "toggleSidebar"
          })),
          placement: _Tooltip__WEBPACK_IMPORTED_MODULE_11__.default.Placement.Right,
          alignment: _Tooltip__WEBPACK_IMPORTED_MODULE_11__.default.Alignment.Start,
          delayThreshold: 0,
          originGap: 6,
          render: tooltipEvents => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_IconButton__WEBPACK_IMPORTED_MODULE_15__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            icon: _shared_icons__WEBPACK_IMPORTED_MODULE_5__.default.doubleChevronRight,
            style: {
              position: "relative"
            },
            isDarkIconColor: true,
            onClick: () => _actions_sidebarActions__WEBPACK_IMPORTED_MODULE_6__.setExpand({
              environment: this.environment,
              isExpanded: true
            }),
            className: _helpers_classNames__WEBPACK_IMPORTED_MODULE_16__.openSidebarButton
          }, tooltipEvents))
        }));
      }
    });
  } // ===========================================================================
  // Styles.
  // ===========================================================================


  // ===========================================================================
  // Styles.
  // ===========================================================================
  getStyle() {
    // Use negative margin to create a larger hover area so that you don't mouse
    // over the topbar which will close the sidebar when moving down.
    const space = 12;
    return {
      flexShrink: 0,
      width: 24 + space * 2,
      height: 24 + space * 2,
      margin: -space,
      padding: space,
      marginRight: -space + 6
    };
  }

  getSvgStyle() {
    return {
      width: 16,
      height: 16,
      fill: this.theme.regularIconColor
    };
  }

}

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TopbarSidebarButton, "buttonStyle", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: 3
});

_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TopbarSidebarButton, "buttonWrapStyle", {
  position: "absolute",
  top: 0,
  left: 0,
  willChange: "opacity"
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopbarSidebarButton);

/***/ }),

/***/ "./src/client/components/UpsellCallout.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/UpsellCallout.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _BlueButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlueButton */ "./src/client/components/BlueButton.tsx");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _helpers_routeHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/routeHelpers */ "./src/client/helpers/routeHelpers.ts");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");
/* harmony import */ var _actions_upsellActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/upsellActions */ "./src/client/actions/upsellActions.tsx");
/* harmony import */ var _actions_routerActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/routerActions */ "./src/client/actions/routerActions.ts");
/* harmony import */ var _shared_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/typography */ "./src/shared/typography.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");




/* =============================================================================

	UpsellCallout.

============================================================================= */











class UpsellCallout extends _Component__WEBPACK_IMPORTED_MODULE_4__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleUpgradeClick", event => {
      const {
        from,
        for: subscriptionTier,
        onUpgradeClick
      } = this.props;
      void _actions_upsellActions__WEBPACK_IMPORTED_MODULE_9__.triggerUpsell(this.environment, {
        from: from,
        for: subscriptionTier
      });

      if (onUpgradeClick) {
        onUpgradeClick(event);
      }
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleLearnMoreClick", () => {
      const {
        from,
        learnMoreRoute
      } = this.props;
      (0,_actions_routerActions__WEBPACK_IMPORTED_MODULE_10__.navigateToExternalURL)({
        environment: this.environment,
        url: (0,_helpers_routeHelpers__WEBPACK_IMPORTED_MODULE_7__.getLocalizedUrl)(learnMoreRoute)
      });
      _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_8__.trackClickHelpButton(this.environment, {
        from: from
      });
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("section", {
      style: this.getWrapStyle()
    }, void 0, this.renderIcon(), this.renderTitle(), this.renderCaption(), this.renderActions());
  }

  renderIcon() {
    const {
      icon
    } = this.props;
    return icon(this.getIconStyle());
  }

  renderTitle() {
    const {
      title
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("header", {
      style: this.getTitleStyle()
    }, void 0, title);
  }

  renderCaption() {
    const {
      caption
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {
      style: this.getCaptionStyle()
    }, void 0, caption);
  }

  renderActions() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("footer", {}, void 0, this.renderUpgradeButton(), this.renderLearnMoreButton());
  }

  renderUpgradeButton() {
    const {
      upgradeMessage
    } = this.props;
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_BlueButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      onClick: this.handleUpgradeClick,
      isLarge: true
    }, void 0, upgradeMessage ? upgradeMessage : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
      defaultMessage: "Upgrade",
      id: "upsellCallout.upgradeButton.text"
    }));
  }

  renderLearnMoreButton() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_6__.default, {
      onClick: this.handleLearnMoreClick,
      style: this.getLearnMoreButtonStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
      defaultMessage: "Learn more",
      id: "upsellCallout.learnMoreButton.text"
    }));
  } // ===========================================================================
  // Events.
  // ===========================================================================


  // ===========================================================================
  // Styles.
  // ===========================================================================
  getWrapStyle() {
    const {
      device
    } = this.environment;
    return {
      fontSize: 14,
      ...(!device.isMobile && {
        maxWidth: 340
      })
    };
  }

  getIconStyle() {
    return {
      width: 32,
      height: "auto",
      fill: this.theme.mediumIconColor,
      marginBottom: 8
    };
  }

  getTitleStyle() {
    return {
      fontWeight: _shared_typography__WEBPACK_IMPORTED_MODULE_11__.default.fontWeight.semibold
    };
  }

  getCaptionStyle() {
    return {
      color: this.theme.mediumTextColor,
      marginTop: 4,
      marginBottom: 16
    };
  }

  getLearnMoreButtonStyle() {
    return {
      marginLeft: 12
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpsellCallout);

/***/ }),

/***/ "./src/client/components/UserDataConsentSettings.tsx":
/*!***********************************************************!*\
  !*** ./src/client/components/UserDataConsentSettings.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _stores_RequestStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/RequestStore */ "./src/client/stores/RequestStore.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils */ "./src/shared/utils.ts");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Request */ "./src/client/components/Request.tsx");
/* harmony import */ var _LoadingSpinnerContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoadingSpinnerContainer */ "./src/client/components/LoadingSpinnerContainer.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/AppStore */ "./src/client/stores/AppStore.ts");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/api */ "./src/client/actions/api.ts");
/* harmony import */ var _helpers_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/moment */ "./src/client/helpers/moment.ts");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _SettingHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SettingHeader */ "./src/client/components/SettingHeader.tsx");




/* =============================================================================

	UserDataConsentSettings.

============================================================================= */














class UserDataConsentSettings extends _Component__WEBPACK_IMPORTED_MODULE_5__.default {
  constructor(..._args2) {
    super(..._args2);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "storeTypes", {
      requestStore: _stores_RequestStore__WEBPACK_IMPORTED_MODULE_7__.default
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "renderResult", (error, result, ready) => {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_LoadingSpinnerContainer__WEBPACK_IMPORTED_MODULE_10__.default, {
        loaded: ready,
        spinnerSize: 16,
        showSpinnerTimeout: 600
      }, void 0, error || !result ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, this.props.intl.formatMessage({
        id: "userDataConsent.render.error",
        defaultMessage: "Something went wrong"
      })) : this.renderOutput(result));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "renderOutput", output => {
      const accessGranted = Boolean( // TODO bigint in pg can return a string, we need cast it to Number before doing any comparisons
      output.expiryTime && Number(output.expiryTime) > Date.now());
      const onClick = accessGranted ? this.revokeDataAccess : this.grantDataAccess;
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: this.getSettingsOptionStyle()
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 12,
          width: "100%"
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
        style: {
          flex: 1
        }
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingHeader__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "userDataConsentSettings.header.label",
        defaultMessage: "Support access"
      })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_6__.default, {
        isSmall: true,
        isMultiline: true,
        style: {
          marginTop: 4,
          width: "80%"
        }
      }, void 0, accessGranted && output.expiryTime ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "userDataConsentSettings.accessGranted.label",
        defaultMessage: "You have granted Notion access to your account for support purposes until {expiryTime}.",
        values: {
          expiryTime: _helpers_moment__WEBPACK_IMPORTED_MODULE_13__.default.unix(output.expiryTime / 1000).locale(this.props.intl.locale).format("lll")
        }
      }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "userDataConsentSettings.accessNotGranted.label",
        defaultMessage: "Grant Notion support temporary access to your account so we can troubleshoot problems or recover content on your behalf. You can revoke access at any time."
      })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_14__.default, {
        onClick: onClick,
        isLarge: true,
        style: {
          marginTop: 12,
          marginBottom: 4
        }
      }, void 0, accessGranted ? /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "userDataConsentSettings.revokeSupportAccess.button",
        defaultMessage: "Revoke access"
      }) : /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "userDataConsentSettings.allowSupportAccess.button",
        defaultMessage: "Allow support access"
      })))));
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "fetchUserDataConsentSettings", async _args => {
      const response = await _actions_api__WEBPACK_IMPORTED_MODULE_12__.getDataAccessConsent(this.environment, {});

      if (response.type === "failed") {
        throw response.error;
      }

      return response.data;
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "grantDataAccess", async () => {
      await this.setDataAccessExpiryTime({
        expiryTime: Date.now() + _shared_utils__WEBPACK_IMPORTED_MODULE_8__.DayMs * 14
      });
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "revokeDataAccess", async () => {
      await this.setDataAccessExpiryTime({});
    });

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "setDataAccessExpiryTime", async args => {
      const response = await _actions_api__WEBPACK_IMPORTED_MODULE_12__.setDataAccessConsent(this.environment, args);

      if (response.type === "success" && response.data) {
        const requestState = this.stores.requestStore.state;
        this.stores.requestStore.setState({ ...requestState,
          result: response.data
        });
      }
    });
  }

  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    const {
      currentUserStore
    } = _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__.default.state;
    return currentUserStore && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Request__WEBPACK_IMPORTED_MODULE_9__.default, {
      requestStore: this.stores.requestStore,
      request: {
        userId: currentUserStore.id,
        expiryTime: Date.now() + _shared_utils__WEBPACK_IMPORTED_MODULE_8__.DayMs * 14
      },
      performRequest: this.fetchUserDataConsentSettings,
      render: this.renderResult
    });
  }

  // ===========================================================================
  // Styles.
  // ===========================================================================
  getSettingsOptionStyle() {
    const {
      device,
      WindowSizeStore
    } = this.environment;
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      paddingLeft: device.isMobile ? WindowSizeStore.state.paddingLeftCSS : 0,
      paddingRight: device.isMobile ? WindowSizeStore.state.paddingRightCSS : 0
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notion_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(UserDataConsentSettings));

/***/ }),

/***/ "./src/client/stores/BrowserFullScreenStore.ts":
/*!*****************************************************!*\
  !*** ./src/client/stores/BrowserFullScreenStore.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* harmony import */ var _actions_electronActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/electronActions */ "./src/client/actions/electronActions.ts");


/* =============================================================================

	BrowserFullScreenStore.

============================================================================= */



class BrowserFullScreenStore extends _Store__WEBPACK_IMPORTED_MODULE_1__.default {
  getInitialState() {
    return {
      isFullScreen: false
    };
  }

  constructor() {
    super();

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "updateFromElectronState", () => {
      const isFullScreen = _actions_electronActions__WEBPACK_IMPORTED_MODULE_2__.fullscreen.get();

      if (isFullScreen !== undefined) {
        this.setState({
          isFullScreen
        });
      }
    });

    _actions_electronActions__WEBPACK_IMPORTED_MODULE_2__.fullscreen.addListener(this.updateFromElectronState);
    this.updateFromElectronState();
  } // =================================================================================
  // Events.
  // =================================================================================


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BrowserFullScreenStore());

/***/ }),

/***/ "./src/client/stores/GlobalCsatPopupStore.ts":
/*!***************************************************!*\
  !*** ./src/client/stores/GlobalCsatPopupStore.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	GlobalCsatPopupStore.

============================================================================= */


class GlobalCsatPopupStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {
      open: false
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GlobalCsatPopupStore());

/***/ }),

/***/ "./src/client/stores/GlobalEnterpriseContactModalStore.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/stores/GlobalEnterpriseContactModalStore.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	GlobalEnterpriseContactModalStore.

============================================================================= */


class GlobalEnterpriseContactModalStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {
      open: false
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GlobalEnterpriseContactModalStore());

/***/ }),

/***/ "./src/client/stores/LoginPermissionsStore.ts":
/*!****************************************************!*\
  !*** ./src/client/stores/LoginPermissionsStore.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	LoginPermissionsStore.

============================================================================= */


class LoginPermissionsStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {
      contacts: false
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPermissionsStore);

/***/ }),

/***/ "./src/client/stores/SelectButtonStore.ts":
/*!************************************************!*\
  !*** ./src/client/stores/SelectButtonStore.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	SelectButtonStore.

============================================================================= */


class SelectButtonStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {};
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectButtonStore);

/***/ }),

/***/ "./src/client/stores/SpacePermissionGroupStore.ts":
/*!********************************************************!*\
  !*** ./src/client/stores/SpacePermissionGroupStore.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	SpacePermissionGroupStore.

============================================================================= */


class SpacePermissionGroupStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {
      userInputValue: "",
      temporaryUserIds: [],
      limitUsers: true
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacePermissionGroupStore);

/***/ }),

/***/ "./src/client/stores/SpacePermissionsSettingsStore.ts":
/*!************************************************************!*\
  !*** ./src/client/stores/SpacePermissionsSettingsStore.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpacePermissionsSettingsTab": () => (/* binding */ SpacePermissionsSettingsTab),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	SpacePermissionsSettingsStore.

============================================================================= */

let SpacePermissionsSettingsTab;

(function (SpacePermissionsSettingsTab) {
  SpacePermissionsSettingsTab[SpacePermissionsSettingsTab["Members"] = 0] = "Members";
  SpacePermissionsSettingsTab[SpacePermissionsSettingsTab["Groups"] = 1] = "Groups";
  SpacePermissionsSettingsTab[SpacePermissionsSettingsTab["Guests"] = 2] = "Guests";
})(SpacePermissionsSettingsTab || (SpacePermissionsSettingsTab = {}));

class SpacePermissionsSettingsStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {
      currentTab: SpacePermissionsSettingsTab.Members,
      limitMembers: true,
      limitGuests: true,
      membersFilter: "",
      guestsFilter: "",
      groupsFilter: "",
      groupNameInputValue: "",
      upsellModalOpen: false
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacePermissionsSettingsStore);

/***/ }),

/***/ "./src/shared/passwordHelpers.ts":
/*!***************************************!*\
  !*** ./src/shared/passwordHelpers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testPasswordStrength": () => (/* binding */ testPasswordStrength)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 // ===========================================================================
// Password strength checking.
// ===========================================================================

function testPasswordStrength(password) {
  // Check if there are at least 3 different characters in the password.
  // This protects against phrases that just have one character in them.
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(password).length <= 3) {
    return {
      success: false,
      reason: {
        type: "password_too_consistent"
      }
    };
  }

  if (password.length >= 15) {
    return {
      success: true
    };
  }

  if (password.length < 10) {
    return {
      success: false,
      reason: {
        type: "password_too_short"
      }
    };
  }

  if (containsLetter(password)) {
    if (containsNumber(password)) {
      return {
        success: true
      };
    }

    return {
      success: false,
      reason: {
        type: "password_missing_number"
      }
    };
  }

  if (containsNumber(password)) {
    return {
      success: false,
      reason: {
        type: "password_missing_letter"
      }
    };
  }

  return {
    success: false,
    reason: {
      type: "password_missing_letter_and_number"
    }
  };
}

function containsLetter(password) {
  return password.match(/[a-z]/i);
}

function containsNumber(password) {
  return password.match(/\d/);
}

/***/ })

}]);