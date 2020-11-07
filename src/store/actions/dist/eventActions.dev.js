"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = void 0;

var _ActionTypes = require("../ActionTypes");

var _WebService = _interopRequireDefault(require("../../services/WebService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var webService = new _WebService["default"]();

var getEvents = function getEvents() {
  return function (dispatch) {
    dispatch({
      type: _ActionTypes.ActionTypes.GET_EVENT_START
    });
    webService.getEvents().then(function (response) {
      console.log("event.....data", response.body.data);
      dispatch({
        type: _ActionTypes.ActionTypes.GET_EVENT_SUCCESS,
        payload: response.body.data
      });
    })["catch"](function (error) {});
  };
};

exports.getEvents = getEvents;