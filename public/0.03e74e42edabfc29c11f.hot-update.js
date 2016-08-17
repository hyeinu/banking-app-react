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

	var _Transaction = __webpack_require__(432);

	var _Transaction2 = _interopRequireDefault(_Transaction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProductTable = _react2.default.createClass({
	  displayName: 'ProductTable',
	  getInitialState: function getInitialState() {
	    return {
	      list: this.props.list
	    };
	  },
	  deleteMenu: function deleteMenu(item) {
	    this.props.delete(item.id);
	  },
	  showModal: function showModal(item) {
	    this.setState({ editProduct: item });
	    this.setState({ showEditModal: true });
	  },
	  close: function close() {
	    this.setState({ showEditModal: false });
	  },
	  submit: function submit(newItem) {
	    this.props.update(newItem);
	    this.setState({ showEditModal: false });
	  },
	  render: function render() {
	    // let smClose = () => this.setState({ showEditModal: false });
	    var productItems = this.state.list.map(function (item) {
	      return _react2.default.createElement(_Transaction2.default, { item: true });
	    });
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _reactBootstrap.Table,
	        { className: 'container' },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-2' },
	              'Name ',
	              _react2.default.createElement(_reactBootstrap.Button, { className: 'fa fa-sort', onClick: this.props.sortName })
	            ),
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-1' },
	              'Price ',
	              _react2.default.createElement(_reactBootstrap.Button, { className: 'fa fa-sort', onClick: this.props.sortPrice })
	            ),
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-2' },
	              'Picture'
	            ),
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-1' },
	              'Edit'
	            ),
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-1' },
	              'Delete'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          productItems
	        )
	      ),
	      _react2.default.createElement(EditModal, { show: this.state.showEditModal, onSubmit: this.submit, onHide: this.close, item: this.state.editProduct })
	    );
	  }
	});

	exports.default = ProductTable;

/***/ }

})