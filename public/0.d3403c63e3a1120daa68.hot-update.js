webpackHotUpdate(0,{

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EditModal = _react2.default.createClass({
	  displayName: 'EditModal',
	  getInitialState: function getInitialState() {
	    return {
	      description: "",
	      value: 0,
	      credit: false,
	      id: ''
	    };
	  },
	  changeValue: function changeValue(e) {
	    this.setState({ value: e.target.value });
	  },
	  changeDescription: function changeDescription(e) {
	    this.setState({ description: e.target.value });
	  },

	  // componentWillReceiveProps(next){
	  //   this.setState({description: next.description, value: next.value, credit: next.credit, id: next._id})
	  // },
	  select: function select(event) {
	    this.setState({ credit: event.target.value === 'Credit' ? true : false });
	  },
	  submission: function submission() {
	    if (this.state.credit) {
	      this.props.submit(this.state);
	    } else {
	      this.setState({ value: -this.state.value });
	      this.props.submit(this.state);
	    }
	    this.setState({ name: '', description: '', value: 0, credit: false, id: '' });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      Modal,
	      { show: this.props.show, onHide: this.props.onHide, bsSize: 'small', 'aria-labelledby': 'contained-modal-title-sm' },
	      _react2.default.createElement(
	        Modal.Header,
	        { closeButton: true },
	        _react2.default.createElement(
	          Modal.Title,
	          { id: 'contained-modal-title-sm' },
	          'Add New Transaction'
	        )
	      ),
	      _react2.default.createElement(
	        'form',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.FormGroup,
	          null,
	          _react2.default.createElement(
	            Modal.Body,
	            null,
	            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Description', value: this.state.description, onChange: this.changeDescription }),
	            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'number', placeholder: 'Value', value: this.state.value, onChange: this.changeValue }),
	            _react2.default.createElement(
	              _reactBootstrap.FormGroup,
	              null,
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
	              )
	            )
	          ),
	          _react2.default.createElement(
	            Modal.Footer,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.submission },
	              'Edit Transaction'
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { onClick: this.props.onHide },
	              'Close'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = EditModal;

/***/ }

})