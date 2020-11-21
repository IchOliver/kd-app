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
  circleContainer: {
    width: _dimensions["default"].deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50
  },
  circle1: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 0.3,
    borderColor: _color["default"].Blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: _color["default"].Blue,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle3: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: _color["default"].Blue
  },
  textContainer: {
    width: _dimensions["default"].deviceWidth,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontSize: 20
  },
  text2: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: 'bold'
  },
  content: {
    width: _dimensions["default"].deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  contentTitle: {
    color: _color["default"].Black,
    opacity: 0.5
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
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: _color["default"].White
  },
  button2: {
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: _color["default"].Black,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

var _default = styles;
exports["default"] = _default;