"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NetworkServices =
/*#__PURE__*/
function () {
  function NetworkServices() {
    _classCallCheck(this, NetworkServices);
  }

  _createClass(NetworkServices, null, [{
    key: "requestPost",
    value: function requestPost(url, params) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return NetworkServices.requestHttp('POST', url, params, headers);
    }
  }, {
    key: "requestGet",
    value: function requestGet(url) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return NetworkServices.requestHttp('GET', url, null, headers);
    }
  }, {
    key: "requestPut",
    value: function requestPut(url, params) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return NetworkServices.requestHttp('PUT', url, params, headers);
    }
  }, {
    key: "requestPatch",
    value: function requestPatch(url, params) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return NetworkServices.requestHttp('PATCH', url, params, headers);
    }
  }, {
    key: "requestDelete",
    value: function requestDelete(url, params) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return NetworkServices.requestHttp('DELETE', url, params, headers);
    }
  }, {
    key: "requestFormDataPost",
    value: function requestFormDataPost(url, params) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return NetworkServices.rquestFormDataHttp('POST', url, params, headers);
    }
  }, {
    key: "requestHttp",
    value: function requestHttp(method, url, params, token) {
      console.log("tokenservice=>", token);
      return new Promise(function (resolve, reject) {
        var options = {
          method: method,
          url: url,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        if (params) {
          options.data = params;
        }

        if (token) {
          options.headers['Authorization'] = token;
        }

        (0, _axios["default"])(options).then(function (response) {
          resolve({
            statusCode: response.status,
            body: response.data
          });
        })["catch"](function (error) {
          if (error.response !== undefined) {
            resolve({
              statusCode: error.response.status,
              body: error.response.data
            });
          } else {
            reject(new Error('Check Your Connection'));
          }
        });
      });
    }
  }, {
    key: "rquestFormDataHttp",
    value: function rquestFormDataHttp(method, url, params, token) {
      return new Promise(function (resolve, reject) {
        var options = {
          method: method,
          url: url,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        };

        if (params) {
          options.body = params;
        }

        if (token) {
          options.headers['Authorization'] = token;
        }

        (0, _axios["default"])(options).then(function (response) {
          resolve({
            statusCode: response.status,
            body: response.data
          });
        })["catch"](function (error) {
          if (error.response !== undefined) {
            resolve({
              statusCode: error.response.status,
              body: error.response.data
            });
          } else {
            reject(new Error('Check Your Connection'));
          }
        });
      });
    }
  }]);

  return NetworkServices;
}();

var _default = NetworkServices;
exports["default"] = _default;