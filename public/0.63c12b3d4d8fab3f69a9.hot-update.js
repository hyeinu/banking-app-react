webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _Home = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Home\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRouter = __webpack_require__(433);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	  'div',
	  { className: 'container' },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
	  )
	), document.getElementById('root'));

/***/ }
])