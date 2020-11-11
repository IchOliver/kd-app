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
  imageContainer: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  imageSize: {
    width: 25,
    height: 25
  },
  pinTitleContainer: {
    width: _dimensions["default"].deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  pinTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: _color["default"].Black
  },
  contentTitle: {
    fontSize: 14,
    color: _color["default"].Black,
    opacity: 0.5
  },
  verificationCodeContainer: {
    marginTop: 30,
    padding: 20
  },
  codeFieldRoot: {
    marginTop: 20
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 60,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 15,
    textAlign: 'center'
  },
  logoSize: {
    width: 50,
    height: 50
  },
  symbolContainer: {
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  symbolContent: {
    fontSize: 20,
    color: _color["default"].Black,
    opacity: 0.5,
    marginLeft: 5
  },
  footContainer: {
    marginTop: _dimensions["default"].pro30
  },
  privacyContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center'
  },
  privacyTitle: {
    color: _color["default"].Black
  },
  privacyContent: {
    color: _color["default"].Blue,
    textDecorationLine: 'underline'
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
  }
});

var _default = styles;
exports["default"] = _default;