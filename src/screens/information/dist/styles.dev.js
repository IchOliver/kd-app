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
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventTitle: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: _color["default"].White
  },
  eventItemContainer: {
    padding: 20,
    backgroundColor: _color["default"].White,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageSize: {
    width: 40,
    height: 40
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentContainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: _color["default"].Black
  },
  desc: {
    fontSize: 14,
    marginTop: 5,
    color: _color["default"].Black
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: _color["default"].Blue,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var _default = styles;
exports["default"] = _default;