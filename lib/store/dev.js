"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxImmutableStateInvariant = _interopRequireDefault(require("redux-immutable-state-invariant"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _default = function _default(rootReducer, initialState) {
  var middleWares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return (0, _redux.createStore)(rootReducer, initialState || {}, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, [_reduxThunk["default"], (0, _reduxImmutableStateInvariant["default"])()].concat((0, _toConsumableArray2["default"])(middleWares)))));
};

exports["default"] = _default;