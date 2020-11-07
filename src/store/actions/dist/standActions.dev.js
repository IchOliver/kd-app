"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchStand = exports.getStands = void 0;

var _ActionTypes = require("../ActionTypes");

var _WebService = _interopRequireDefault(require("../../services/WebService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var webService = new _WebService["default"]();

var getStands = function getStands() {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.ActionTypes.GET_STAND_START
    });
    webService.getStands().then(function (response) {
      dispatch({
        type: _ActionTypes.ActionTypes.GET_STAND_SUCCESS,
        payload: response.body.data
      });
    })["catch"](function (error) {});
  };
};

exports.getStands = getStands;

var searchStand = function searchStand(text) {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.ActionTypes.SEARCH_STAND,
      payload: text
    });
  };
};

exports.searchStand = searchStand;