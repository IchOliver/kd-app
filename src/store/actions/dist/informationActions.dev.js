"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInformations = void 0;

var _ActionTypes = require("../ActionTypes");

var _WebService = _interopRequireDefault(require("../../services/WebService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var webService = new _WebService["default"]();

var getInformations = function getInformations() {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.ActionTypes.GET_INFO_START
    });
    webService.getInformations().then(function (response) {
      dispatch({
        type: _ActionTypes.ActionTypes.GET_INFO_SUCCESS,
        payload: response.body.data
      });
    })["catch"](function (error) {});
  };
};

exports.getInformations = getInformations;