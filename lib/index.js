"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsxFileName = "src\\index.jsx";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require("react-redux");

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactReduxThunkStore = function ReactReduxThunkStore(_ref) {
  var reducers = _ref.reducers,
      initialState = _ref.initialState,
      middleWares = _ref.middleWares,
      others = (0, _objectWithoutProperties3.default)(_ref, ["reducers", "initialState", "middleWares"]);

  var rootReducer = (0, _redux.combineReducers)(reducers);
  var store = (0, _store2.default)(rootReducer, initialState || {}, middleWares || []);
  return _react2.default.createElement(_reactRedux.Provider, (0, _assign2.default)({ store: store }, others, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};

ReactReduxThunkStore.propTypes = {
  reducers: _propTypes2.default.object.isRequired,
  initialState: _propTypes2.default.object,
  middleWares: _propTypes2.default.array
};

exports.default = ReactReduxThunkStore;