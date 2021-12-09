"use strict";
(self["webpackChunknotion_next"] = self["webpackChunknotion_next"] || []).push([["src_client_actions_addressActions_ts-src_client_components_CouponEntryInput_tsx-src_client_co-cec69d"],{

/***/ "./src/client/actions/addressActions.ts":
/*!**********************************************!*\
  !*** ./src/client/actions/addressActions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveCustomerAddress": () => (/* binding */ resolveCustomerAddress)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/client/actions/api.ts");
/* harmony import */ var _shared_addressHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/addressHelpers */ "./src/shared/addressHelpers.ts");


async function resolveCustomerAddress(environment, address) {
  const shouldResolve = (0,_shared_addressHelpers__WEBPACK_IMPORTED_MODULE_1__.checkAddressResolutionRequirements)(address);

  if (shouldResolve === "skip") {
    return {
      valid: true
    };
  } else if (shouldResolve === "insufficient_data") {
    return {
      valid: false
    };
  }

  const resp = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.resolveAddress)(environment, {
    address: {
      line1: address.addressLine1,
      city: address.city,
      zip: address.zipCode,
      state: address.state,
      country: address.country
    }
  });

  if (resp.type === "failed") {
    return {
      valid: false
    };
  } else {
    return resp.data;
  }
}

/***/ }),

/***/ "./src/client/components/CouponEntryInput.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/CouponEntryInput.tsx ***!
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
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/client/components/Component.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "./src/client/components/Input.tsx");
/* harmony import */ var _helpers_LocalizationHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/LocalizationHelper */ "./src/client/helpers/LocalizationHelper.ts");
/* harmony import */ var _OutlineButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OutlineButton */ "./src/client/components/OutlineButton.tsx");
/* harmony import */ var _shared_promoHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/promoHelpers */ "./src/shared/promoHelpers.ts");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Request */ "./src/client/components/Request.tsx");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/api */ "./src/client/actions/api.ts");
/* harmony import */ var _stores_CouponEntryStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../stores/CouponEntryStore */ "./src/client/stores/CouponEntryStore.ts");
/* harmony import */ var _LoadingSpinnerContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoadingSpinnerContainer */ "./src/client/components/LoadingSpinnerContainer.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var _shared_colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/colors */ "./src/shared/colors.ts");
/* harmony import */ var _shared_typeUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/typeUtils */ "./src/shared/typeUtils.ts");
/* harmony import */ var _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/analyticsActions */ "./src/client/actions/analyticsActions.ts");




/* =============================================================================

	CouponEntryInput.

============================================================================= */















const messages = (0,notion_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  couponCodePlaceholder: {
    id: "couponEntryInput.placeholder",
    defaultMessage: "Coupon code"
  },
  couponCodeNotFoundError: {
    id: "couponEntryInput.error.noPromo",
    defaultMessage: "Invalid coupon code"
  }
});

class CouponEntryInput extends _Component__WEBPACK_IMPORTED_MODULE_4__.default {
  constructor(...args) {
    super(...args);

    _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "storeTypes", {
      couponCode: _stores_CouponEntryStore__WEBPACK_IMPORTED_MODULE_12__.default
    });
  }

  didMount() {
    const code = (0,_shared_promoHelpers__WEBPACK_IMPORTED_MODULE_9__.getPromoCode)(this.environment.currentUser.id);

    if (code) {
      this.stores.couponCode.setState({ ...this.stores.couponCode.state,
        temporaryCouponCode: code
      });
    }
  }

  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: this.getContainerStyle()
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_6__.default, {
      textarea: false,
      value: this.stores.couponCode.state.couponCodeInput,
      placeholder: _helpers_LocalizationHelper__WEBPACK_IMPORTED_MODULE_7__.default.formatMessage(messages.couponCodePlaceholder),
      onSubmit: () => this.checkCouponCode(),
      onChange: e => {
        this.stores.couponCode.setState({ ...this.stores.couponCode.state,
          couponCodeInput: e.target.value
        });
      },
      style: {
        height: 32,
        paddingLeft: 10,
        marginRight: this.props.hideApply ? 0 : 10
      }
    }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_Request__WEBPACK_IMPORTED_MODULE_10__.default, {
      request: this.stores.couponCode.state.temporaryCouponCode || null,
      performRequest: async promoCode => {
        if (promoCode) {
          return this.applyCouponCode(promoCode);
        }
      },
      render: (_err, _promo, ready) => {
        if (this.props.hideApply) {
          return;
        }

        return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_OutlineButton__WEBPACK_IMPORTED_MODULE_8__.default, {
          isLarge: false,
          onClick: () => this.checkCouponCode()
        }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_LoadingSpinnerContainer__WEBPACK_IMPORTED_MODULE_13__.default, {
          loaded: ready,
          spinnerSize: 16,
          showSpinnerTimeout: 500
        }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "couponEntryInput.button.apply",
          defaultMessage: "Apply"
        })));
      }
    })), this.stores.couponCode.state.error && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_14__.default, {
      isMultiline: false,
      style: {
        paddingTop: 8,
        color: _shared_colors__WEBPACK_IMPORTED_MODULE_15__.default.red
      }
    }, void 0, this.stores.couponCode.state.error));
  }

  checkCouponCode() {
    const couponInput = this.stores.couponCode.state.couponCodeInput;

    if (couponInput) {
      this.stores.couponCode.setState({ ...this.stores.couponCode.state,
        temporaryCouponCode: couponInput
      });
      this.stores.couponCode.setState({ ...this.stores.couponCode.state,
        couponCodeInput: ""
      });
    }
  }

  async applyCouponCode(code) {
    const result = await _actions_api__WEBPACK_IMPORTED_MODULE_11__.getPromoCode(this.environment, {
      code
    });

    if (result.type === "success") {
      if (result.data.promo) {
        var _result$data$promo$ap;

        if ((_result$data$promo$ap = result.data.promo.applies_to) !== null && _result$data$promo$ap !== void 0 && _result$data$promo$ap.length && !result.data.promo.applies_to.includes(this.props.plan)) {
          this.showError(code);
          return;
        }

        this.stores.couponCode.setState({ ...this.stores.couponCode.state,
          error: undefined
        });
        this.props.handlePromo(result.data.promo);
        _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_17__.trackCouponCodeEntered(this.environment, {
          code,
          valid: true,
          id: result.data.promo.id
        });
        return result.data.promo;
      } else {
        this.showError(code);
      }
    } else if (result.type === "failed") {
      const error = result.error.name;
      this.stores.couponCode.setState({ ...this.stores.couponCode.state,
        error
      });
    } else {
      (0,_shared_typeUtils__WEBPACK_IMPORTED_MODULE_16__.unreachable)(result);
    }
  }

  showError(code) {
    this.stores.couponCode.setState({ ...this.stores.couponCode.state,
      error: _helpers_LocalizationHelper__WEBPACK_IMPORTED_MODULE_7__.default.formatMessage(messages.couponCodeNotFoundError)
    });
    _actions_analyticsActions__WEBPACK_IMPORTED_MODULE_17__.trackCouponCodeEntered(this.environment, {
      code,
      valid: false,
      id: undefined
    });
  }

  getContainerStyle() {
    return {
      display: "flex",
      flexDirection: "column",
      ...(this.props.style ? this.props.style : undefined)
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponEntryInput);

/***/ }),

/***/ "./src/client/components/SpaceSubscriptionAddressForm.tsx":
/*!****************************************************************!*\
  !*** ./src/client/components/SpaceSubscriptionAddressForm.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpaceSubscriptionAddressForm": () => (/* binding */ SpaceSubscriptionAddressForm)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useStyles */ "./src/client/hooks/useStyles.ts");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");
/* harmony import */ var _hooks_useEnvironment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useEnvironment */ "./src/client/hooks/useEnvironment.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input */ "./src/client/components/Input.tsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MenuList */ "./src/client/components/MenuList.tsx");
/* harmony import */ var _SectionMenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SectionMenuItem */ "./src/client/components/SectionMenuItem.tsx");
/* harmony import */ var _shared_fuzzyMatch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fuzzyMatch */ "./src/shared/fuzzyMatch.ts");
/* harmony import */ var _shared_hooks_useAsync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/hooks/useAsync */ "./src/shared/hooks/useAsync.tsx");
/* harmony import */ var _shared_typeUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/typeUtils */ "./src/shared/typeUtils.ts");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/api */ "./src/client/actions/api.ts");
/* harmony import */ var _ButtonMenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ButtonMenuItem */ "./src/client/components/ButtonMenuItem.tsx");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Popup */ "./src/client/components/Popup.tsx");
/* harmony import */ var _shared_addressHelpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/addressHelpers */ "./src/shared/addressHelpers.ts");
/* harmony import */ var _stores_SpaceSubscriptionUpgradeModalStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../stores/SpaceSubscriptionUpgradeModalStore */ "./src/client/stores/SpaceSubscriptionUpgradeModalStore.ts");
/* harmony import */ var _helpers_billingHelpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../helpers/billingHelpers */ "./src/client/helpers/billingHelpers.tsx");




/* =============================================================================

	SpaceSubscriptionBillingInfoForm.

============================================================================= */

















function SpaceSubscriptionAddressForm(props) {
  const style = (0,_hooks_useStyles__WEBPACK_IMPORTED_MODULE_4__.useStyles)(theme => ({
    container: (0,_helpers_billingHelpers__WEBPACK_IMPORTED_MODULE_19__.upgradeModalFormContainerStyle)(theme),
    cityZipRow: {
      display: "flex"
    },
    verticalDivider: {
      display: "flex",
      borderLeft: "1px solid",
      borderLeftColor: theme.groupedFormBorder
    },
    zipRow: {
      display: "flex",
      flex: 2
    },
    stateRow: {
      display: "flex",
      flex: 3
    }
  }), []);
  const intl = (0,notion_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    style: style.container
  }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(InputField, {
    placeholder: intl.formatMessage({
      id: "spaceSubscriptionPaymentForm.billingInformation.fullName",
      defaultMessage: "Full name"
    }),
    address: props.address,
    updateAddressField: props.updateAddressField,
    addressKey: "name"
  }), props.shouldShowBusinessName && /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(InputField, {
    placeholder: intl.formatMessage({
      id: "spaceSubscriptionPaymentForm.billingInformation.businessName",
      defaultMessage: "Business name (optional)"
    }),
    address: props.address,
    updateAddressField: props.updateAddressField,
    addressKey: "businessName"
  }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(CountryDropdown, {
    updateAddressField: props.updateAddressField
  }), props.address && (0,_shared_addressHelpers__WEBPACK_IMPORTED_MODULE_17__.isFullAddressRequired)(props.address.country) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(InputField, {
    placeholder: intl.formatMessage({
      id: "spaceSubscriptionPaymentForm.billingInformation.address",
      defaultMessage: "Address"
    }),
    address: props.address,
    addressKey: "addressLine1",
    updateAddressField: props.updateAddressField
  }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(InputField, {
    placeholder: intl.formatMessage({
      id: "spaceSubscriptionPaymentForm.billingInformation.city",
      defaultMessage: "City"
    }),
    addressKey: "city",
    address: props.address,
    updateAddressField: props.updateAddressField
  }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    style: style.cityZipRow
  }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    style: style.zipRow
  }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(InputField, {
    placeholder: intl.formatMessage({
      id: "spaceSubscriptionPaymentForm.billingInformation.zipCode",
      defaultMessage: "Zip code"
    }),
    address: props.address,
    addressKey: "zipCode",
    updateAddressField: props.updateAddressField
  })), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    style: style.verticalDivider
  }), /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()("div", {
    style: style.stateRow
  }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(InputField, {
    placeholder: intl.formatMessage({
      id: "spaceSubscriptionPaymentForm.billingInformation.state",
      defaultMessage: "State / Province"
    }),
    address: props.address,
    addressKey: "state",
    updateAddressField: props.updateAddressField
  }))))));
}

function CountryDropdown(props) {
  const environment = (0,_hooks_useEnvironment__WEBPACK_IMPORTED_MODULE_6__.useEnvironment)();
  const [isFocused, setFocusState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const intl = (0,notion_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const styles = (0,_hooks_useStyles__WEBPACK_IMPORTED_MODULE_4__.useStyles)(() => ({
    input: {
      background: "none",
      boxShadow: "none",
      padding: 8
    }
  }), []);
  const [temporaryInput, setTemporaryInput] = react__WEBPACK_IMPORTED_MODULE_3___default().useState("");
  const [availableCountriesAsync] = (0,_shared_hooks_useAsync__WEBPACK_IMPORTED_MODULE_12__.useAsync)(async () => {
    const response = await _actions_api__WEBPACK_IMPORTED_MODULE_14__.getAvailableCountries(environment, {});

    if (response.type === "success") {
      return response.data.countries;
    } else if (response.type === "failed") {
      return [];
    } else {
      (0,_shared_typeUtils__WEBPACK_IMPORTED_MODULE_13__.unreachable)(response);
    }
  }, [environment]);
  const availableCountries = availableCountriesAsync.value;

  if (!availableCountries) {
    return null;
  }

  const items = (0,_shared_fuzzyMatch__WEBPACK_IMPORTED_MODULE_11__.default)(temporaryInput, availableCountries, country => country.name).map((country, i) => ({
    key: i,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ButtonMenuItem__WEBPACK_IMPORTED_MODULE_15__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      title: country.name
    })),
    action: () => {
      props.updateAddressField("country", country.countryCode);
      const modalState = _stores_SpaceSubscriptionUpgradeModalStore__WEBPACK_IMPORTED_MODULE_18__.default.state;

      if (modalState.open) {
        _stores_SpaceSubscriptionUpgradeModalStore__WEBPACK_IMPORTED_MODULE_18__.default.setState({ ...modalState,
          vatApplicable: Boolean(country.vatApplicable)
        });
      }

      setTemporaryInput(country.name);
      setFocusState(false);
    }
  }));
  return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_helpers_billingHelpers__WEBPACK_IMPORTED_MODULE_19__.FormGroup, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Popup__WEBPACK_IMPORTED_MODULE_16__.default, {
    popupType: _Popup__WEBPACK_IMPORTED_MODULE_16__.default.PopupType.Popup,
    alignmentToOrigin: _Popup__WEBPACK_IMPORTED_MODULE_16__.default.Alignment.End,
    placementToOrigin: _Popup__WEBPACK_IMPORTED_MODULE_16__.default.Placement.Right,
    originGap: 0 // this forces the popup to not cover the origin
    ,
    open: isFocused,
    origin: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
      value: temporaryInput,
      focus: isFocused,
      placeholder: intl.formatMessage({
        id: "spaceSubscriptionPaymentForm.billingInformation.country",
        defaultMessage: "Country or region"
      }),
      style: styles.input,
      onChange: event => {
        setTemporaryInput(event.target.value);
        props.updateAddressField("country", undefined);
      },
      onFocus: () => {
        setFocusState(true);
      }
    }),
    onDismiss: () => {
      setFocusState(false);
      setTemporaryInput("");
    },
    render: () => {
      return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Menu__WEBPACK_IMPORTED_MODULE_8__.default, {
        menuType: _Menu__WEBPACK_IMPORTED_MODULE_8__.default.MenuType.Popup,
        width: "100%"
      }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_MenuList__WEBPACK_IMPORTED_MODULE_9__.default, {
        type: _MenuList__WEBPACK_IMPORTED_MODULE_9__.default.Type.Vertical,
        initialFocus: temporaryInput.length > 0 ? 0 : undefined,
        sections: [{
          key: 0,
          render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SectionMenuItem__WEBPACK_IMPORTED_MODULE_10__.default, _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, args, {
            title: /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "spaceSubscriptionBillingInfoForm.countryDropdown.title",
              defaultMessage: "Select a country or region"
            })
          })),
          items
        }]
      }));
    }
  }));
}

function InputField(props) {
  const styles = (0,_hooks_useStyles__WEBPACK_IMPORTED_MODULE_4__.useStyles)(() => ({
    input: {
      background: "none",
      boxShadow: "none",
      padding: 8
    }
  }), []);
  return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_helpers_billingHelpers__WEBPACK_IMPORTED_MODULE_19__.FormGroup, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1___default()(_Input__WEBPACK_IMPORTED_MODULE_7__.default, {
    value: props.address[props.addressKey],
    style: styles.input,
    placeholder: props.placeholder,
    onChange: onInputChange(props.updateAddressField, props.addressKey)
  }));
}

function onInputChange(updateAddressField, key) {
  return event => {
    updateAddressField(key, event.target.value);
  };
}

/***/ }),

/***/ "./src/client/components/SpaceSubscriptionPlansOfflineMessage.tsx":
/*!************************************************************************!*\
  !*** ./src/client/components/SpaceSubscriptionPlansOfflineMessage.tsx ***!
  \************************************************************************/
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
/* harmony import */ var _SettingBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingBox */ "./src/client/components/SettingBox.tsx");
/* harmony import */ var _UILabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UILabel */ "./src/client/components/UILabel.tsx");
/* harmony import */ var notion_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notion-intl */ "./src/shared/notion-intl/index.ts");


/* =============================================================================

	SpaceSubscriptionPlansOfflineMessage.

============================================================================= */






class SpaceSubscriptionPlansOfflineMessage extends _Component__WEBPACK_IMPORTED_MODULE_2__.default {
  // ===========================================================================
  // Render.
  // ===========================================================================
  renderComponent() {
    return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_SettingBox__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_UILabel__WEBPACK_IMPORTED_MODULE_4__.default, {
      isSmall: true,
      style: {
        textAlign: "center"
      }
    }, void 0, /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(notion_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "spaceSubscriptionPlans.offlineMessage",
      defaultMessage: "Please go online to manage your plan."
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpaceSubscriptionPlansOfflineMessage);

/***/ }),

/***/ "./src/client/helpers/billingHelpers.tsx":
/*!***********************************************!*\
  !*** ./src/client/helpers/billingHelpers.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upgradeModalFormContainerStyle": () => (/* binding */ upgradeModalFormContainerStyle),
/* harmony export */   "FormGroup": () => (/* binding */ FormGroup)
/* harmony export */ });
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useStyles */ "./src/client/hooks/useStyles.ts");



function upgradeModalFormContainerStyle(theme) {
  return {
    backgroundColor: theme.groupedFormBackground,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.groupedFormBorder,
    borderRadius: 3,
    borderBottomWidth: 0
  };
}
function FormGroup(props) {
  const styles = (0,_hooks_useStyles__WEBPACK_IMPORTED_MODULE_2__.useStyles)(theme => ({
    group: {
      display: "flex",
      borderBottomColor: theme.groupedFormBorder,
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      alignItems: "center",
      flex: 1,
      ...props.style
    }
  }), [props.style]);
  return /*#__PURE__*/_Users_hazelguo_notion_next_node_modules_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    style: styles.group
  }, void 0, props.children);
}

/***/ }),

/***/ "./src/client/stores/CouponEntryStore.ts":
/*!***********************************************!*\
  !*** ./src/client/stores/CouponEntryStore.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/client/stores/Store.ts");
/* =============================================================================

	CouponEntryStore.

============================================================================= */


class CouponEntryStore extends _Store__WEBPACK_IMPORTED_MODULE_0__.default {
  getInitialState() {
    return {
      temporaryCouponCode: undefined,
      couponCodeInput: undefined,
      error: undefined
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponEntryStore);

/***/ }),

/***/ "./src/shared/addressHelpers.ts":
/*!**************************************!*\
  !*** ./src/shared/addressHelpers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAddressResolutionRequirements": () => (/* binding */ checkAddressResolutionRequirements),
/* harmony export */   "normalizeResolvedAddress": () => (/* binding */ normalizeResolvedAddress),
/* harmony export */   "isFullAddressRequired": () => (/* binding */ isFullAddressRequired)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function checkAddressResolutionRequirements(address) {
  if (address.country && !isFullAddressRequired(address.country)) {
    return "skip";
  }

  return address.addressLine1 && address.zipCode || address.addressLine1 && address.city && address.state || address.zipCode ? "should_resolve" : "insufficient_data";
}
function normalizeResolvedAddress(addresses) {
  return addresses.map(address => {
    return {
      addressLine1: lodash__WEBPACK_IMPORTED_MODULE_0___default().startCase(lodash__WEBPACK_IMPORTED_MODULE_0___default().toLower(address.addressLine1)),
      addressLine2: lodash__WEBPACK_IMPORTED_MODULE_0___default().startCase(lodash__WEBPACK_IMPORTED_MODULE_0___default().toLower(address.addressLine2)),
      city: lodash__WEBPACK_IMPORTED_MODULE_0___default().startCase(lodash__WEBPACK_IMPORTED_MODULE_0___default().toLower(address.city)),
      state: address.state,
      country: address.country,
      zipCode: address.zipCode
    };
  });
}
function isFullAddressRequired(countryCode) {
  return ["US", "CA"].includes(countryCode);
}

/***/ })

}]);