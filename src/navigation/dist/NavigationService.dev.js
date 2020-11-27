"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(_reactNavigation.NavigationActions.navigate({
    routeName: routeName,
    params: params
  }));
}

function goBack(params) {
  _navigator.dispatch(_reactNavigation.NavigationActions.back(params));
}

function navigateAndReset(routeName) {
  _navigator.dispatch(_reactNavigation.StackActions.reset({
    index: 0,
    actions: [_reactNavigation.NavigationActions.navigate({
      routeName: routeName
    })]
  }));
}

function navigateAndResetWithParams(routeName, params) {
  _navigator.dispatch(_reactNavigation.StackActions.reset({
    index: 0,
    actions: [_reactNavigation.NavigationActions.navigate({
      routeName: routeName,
      params: params
    })]
  }));
}

var _default = {
  navigate: navigate,
  navigateAndReset: navigateAndReset,
  navigateAndResetWithParams: navigateAndResetWithParams,
  goBack: goBack,
  setTopLevelNavigator: setTopLevelNavigator
};
exports["default"] = _default;