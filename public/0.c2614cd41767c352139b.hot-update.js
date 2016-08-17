webpackHotUpdate(0,{

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EditForm = _react2.default.createClass({
	  displayName: 'EditForm',
	  render: function render() {
	    if (this.props.show) {
	      return _react2.default.createElement(
	        _reactBootstrap.FormGroup,
	        null,
	        'EDIT'
	      );
	    } else {
	      return _react2.default.createElement('p', null);
	    }
	  }
	});

	exports.default = EditForm;

/***/ }

})