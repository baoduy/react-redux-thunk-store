"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _store = _interopRequireDefault(require("./store"));

var storeCreator = function storeCreator(_ref) {
  var reducers = _ref.reducers,
      initialState = _ref.initialState,
      middleWares = _ref.middleWares;
  var rootReducer = (0, _redux.combineReducers)(reducers);
  return (0, _store["default"])(rootReducer, initialState, middleWares);
};

var _default = storeCreator;
exports["default"] = _default;