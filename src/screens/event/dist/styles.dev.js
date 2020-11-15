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
    backgroundColor: _color["default"].Grey,
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].deviceHeight
  },
  container: {
    backgroundColor: _color["default"].Grey,
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].pro100
  },
  eventContainer: {
    backgroundColor: _color["default"].Blue,
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].pro15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 100
  },
  eventContainer1: {
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].pro80
  },
  eventFooter: {
    width: _dimensions["default"].deviceWidth,
    height: _dimensions["default"].pro10
  },
  eventTitle: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: _color["default"].White // marginTop:10

  },
  fBar: {
    width: _dimensions["default"].deviceWidth,
    height: 100,
    backgroundColor: 'black'
  },
  // event item styls....
  eventItemContainer: {
    padding: 20,
    backgroundColor: _color["default"].White,
    marginBottom: 20,
    borderRadius: 10
  },
  imageSize: {
    width: 40,
    height: 40
  },
  eventContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  eventLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: _color["default"].Black
  },
  bellContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: _color["default"].Blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: _color["default"].Grey,
    borderBottomWidth: 2
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  scheduleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 15
  },
  s1: {
    color: _color["default"].Black
  },
  s2: {
    color: _color["default"].Black,
    fontWeight: '600'
  }
});

var _default = styles;
exports["default"] = _default;