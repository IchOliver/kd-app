"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = void 0;

var _NavigationService = _interopRequireDefault(require("../../navigation/NavigationService"));

var _screen = _interopRequireDefault(require("../../utils/screen"));

var _ActionTypes = require("../ActionTypes");

var _storage = _interopRequireDefault(require("../../utils/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signIn = function signIn(role) {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.ActionTypes.USER_SIGN_START
    });
    dispatch({
      type: _ActionTypes.ActionTypes.USER_SIGN_SUCCESS,
      payload: role
    });

    _storage["default"].setItem('role', role);

    _NavigationService["default"].navigate(_screen["default"].Home);
  };
};

exports.signIn = signIn;