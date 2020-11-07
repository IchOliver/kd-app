"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authReducer = require("./reducers/authReducer");

var _eventReducer = require("./reducers/eventReducer");

var _informationReducer = require("./reducers/informationReducer");

var _standReducer = require("./reducers/standReducer");

var _default = (0, _redux.combineReducers)({
  auth: _authReducer.authReducer,
  events: _eventReducer.eventReducer,
  informs: _informationReducer.informationReducer,
  stands: _standReducer.standReducer
});

exports["default"] = _default;