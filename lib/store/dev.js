"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxImmutableStateInvariant = _interopRequireDefault(require("redux-immutable-state-invariant"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function configureStore(rootReducer) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var middleWares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return (0, _redux.createStore)(rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, [_reduxThunk.default, (0, _reduxImmutableStateInvariant.default)()].concat((0, _toConsumableArray2.default)(middleWares)))));
}