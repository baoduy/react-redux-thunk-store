"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = configureStore;

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxImmutableStateInvariant = require("redux-immutable-state-invariant");

var _reduxImmutableStateInvariant2 = _interopRequireDefault(_reduxImmutableStateInvariant);

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(rootReducer, initialState, middleWares) {
  return (0, _redux.createStore)(rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, [_reduxThunk2.default, (0, _reduxImmutableStateInvariant2.default)()].concat((0, _toConsumableArray3.default)(middleWares)))));
}