"use strict";

var _propTypes = require("prop-types");

var _index = require("../config/index");

var _NetworkServices = _interopRequireDefault(require("./NetworkServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WService() {
  this.url = _index.API_URL;
}

WService.prototype.makeUrl = function (resource) {
  var url = this.url + resource;
  return url;
};

WService.prototype.getEvents = function () {
  return _NetworkServices["default"].requestGet(this.makeUrl('/events'));
};

WService.prototype.getStands = function () {
  return _NetworkServices["default"].requestGet(this.makeUrl('/stands'));
};

WService.prototype.getInformations = function () {
  return _NetworkServices["default"].requestGet(this.makeUrl('/informations'));
}; // WService.prototype.signIn = function (email, password) {
//   return NetworkServices.requestPost(this.makeUrl('/signin'), {email, password})
// }
// WService.prototype.signUp = function(first_name,last_name,organization,email,street,city,state,zip_code,password){
//   return NetworkServices.requestPost(this.makeUrl('/signup'),{first_name,last_name,organization,email,street,city,state,zip_code,password})
// }
// WService.prototype.getAllProducts = function(){
//   return NetworkServices.requestGet(this.makeUrl('/allProducts/'))
// }
// WService.prototype.addOrder = function(order){
//   return NetworkServices.requestPost(this.makeUrl('/orders/'),order)
// }
// WService.prototype.removeOrder = function(pk){
//   return NetworkServices.requestDelete(this.makeUrl('/orders/',{data:{pk:pk}}))
// }
// WService.prototype.getAllOrders = function(){
//   return NetworkServices.requestGet(this.makeUrl('/orders/'))
// }
// WService.prototype.addProduct = function(form_data){
//   return NetworkServices.requestFormDataPost(this.makeUrl('/products/',form_data))
// }
// WService.prototype.getProducts = function(){
//   return NetworkServices.requestGet(this.makeUrl('/products/'));
// }
// WService.prototype.getContracts = function(){
//   return NetworkServices.requestGet(this.makeUrl('/contacts/'))
// }
// WService.prototype.getThreads = function(){
//   return NetworkServices.requestGet(this.makeUrl('/threads/'))
// }
// WService.prototype.putNewThread = function(contact){
//   return NetworkServices.requestPost(this.makeUrl('/new-thread/'),{contact:contact})
// }
// WService.prototype.addMessage = function(message){
//   return NetworkServices.requestPost(this.makeUrl('/new/'),message)
// }
// WService.prototype.updateProfile = function(update){
//   return NetworkServices.requestPut(this.makeUrl('/user/update/'),{update})
// }
//  WService.prototype.getThread = function(threadKey){
//   return NetworkServices.requestGet(this.makeUrl('/thread/?threadKey='+threadKey));
// }


module.exports = WService;