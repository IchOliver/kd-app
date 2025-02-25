"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventReducer = void 0;

var _ActionTypes = require("../ActionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultValue = [];

var eventReducer = function eventReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    events: defaultValue
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes.ActionTypes.GET_EVENT_START:
      return _objectSpread({}, state);

    case _ActionTypes.ActionTypes.GET_EVENT_SUCCESS:
      return _objectSpread({}, state, {
        events: action.payload
      });

    default:
      return state;
  }
};

exports.eventReducer = eventReducer;