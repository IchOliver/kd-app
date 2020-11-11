"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _asyncStorage = _interopRequireDefault(require("@react-native-community/async-storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Storage = {
  getItem: function getItem(key) {
    var item;
    return regeneratorRuntime.async(function getItem$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_asyncStorage["default"].getItem(key));

          case 2:
            item = _context.sent;
            return _context.abrupt("return", JSON.parse(item));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  setItem: function setItem(key, value) {
    return regeneratorRuntime.async(function setItem$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem(key, JSON.stringify(value)));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  removeItem: function removeItem(key) {
    return regeneratorRuntime.async(function removeItem$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_asyncStorage["default"].removeItem(key));

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
var _default = Storage;
exports["default"] = _default;