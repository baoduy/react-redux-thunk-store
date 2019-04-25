"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var creator = process.env.NODE_ENV === 'production' ? require("./prd")["default"] : require("./dev")["default"];

var _default = function _default(rootReducer, initialState) {
  var middleWares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return creator(rootReducer, initialState, middleWares);
};

exports["default"] = _default;