webpackHotUpdate(0,{

/***/ 431:
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
	  getInitialState: function getInitialState() {
	    return {
	      description: '',
	      value: 0,
	      id: '',
	      credit: false
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({ description: nextProps.editObj.description, value: nextProps.editObj.value, id: nextProps.editObj._id, credit: nextProps.editObj.credit });
	  },
	  changeValue: function changeValue(e) {
	    this.setState({ value: e.target.value });
	  },
	  changeDescription: function changeDescription(e) {
	    this.setState({ description: e.target.value });
	  },
	  submission: function submission() {
	    this.props.onUpdate(this.state);
	  },
	  select: function select(event) {
	    this.setState({ credit: event.target.value === 'Credit' ? true : false });
	  },
	  render: function render() {
	    if (this.props.show) {
	      return _react2.default.createElement(
	        _reactBootstrap.FormGroup,
	        null,
	        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Description', value: this.state.description, onChange: this.changeDescription }),
	        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'number', placeholder: 'Value', value: this.state.value, onChange: this.changeValue }),
	        _react2.default.createElement(
	          _reactBootstrap.FormControl,
	          { componentClass: 'select', defaultValue: "Select", onChange: this.select, required: true },
	          _react2.default.createElement(
	            'option',
	            { value: 'Select', disabled: true },
	            'Select...'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Credit' },
	            'Credit'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Debit' },
	            'Debit'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Button,
	          { onClick: this.submission },
	          'Edit Transaction'
	        )
	      );
	    } else {
	      return _react2.default.createElement('p', null);
	    }
	  }
	});

	exports.default = EditForm;

/***/ }

})