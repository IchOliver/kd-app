"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dimensions = _interopRequireDefault(require("../../constants/dimensions.js"));

var _color = _interopRequireDefault(require("../../constants/color.js"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  scrollContainer: {
    backgroundColor: _color["default"].White,
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].deviceHeight
  },
  container: {
    backgroundColor: _color["default"].White,
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].deviceHeight
  },
  eventContainer: {
    backgroundColor: _color["default"].Blue,
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].pro15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 100,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  eventTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: _color["default"].White
  },
  btn_container: {
    marginTop: 20
  },
  button1: {
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: _color["default"].Blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button2: {
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: _color["default"].Purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: _color["default"].White
  }
});

var _default = styles;
exports["default"] = _default;