"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _asyncStorage = require("@react-native-community/async-storage");

var StorageKeys = {
  UserInfo: 'UserInfo' // This is same with the response of login API->id, masterId,username, appLogo ,email, response

};

var saveItem = function saveItem(key, value) {
  try {
    _asyncStorage.AsyncStorage.setItem(key, value).then();

    return true;
  } catch (error) {
    console.log('Error saving data');
    return false;
  }
};

var removeItem = function removeItem(key) {
  return regeneratorRuntime.async(function removeItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_asyncStorage.AsyncStorage.removeItem(key));

        case 3:
          return _context.abrupt("return", true);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", false);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var getItem = function getItem(key) {
  return regeneratorRuntime.async(function getItem$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_asyncStorage.AsyncStorage.getItem(key));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", false);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var _default = {
  removeItem: removeItem,
  StorageKeys: StorageKeys,
  getItem: getItem,
  saveItem: saveItem
};
exports["default"] = _default;