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
	  deleteMenu: function deleteMenu(item) {
	    this.props.delete(item.id);
	  },
	  submit: function submit(newItem) {
	    this.props.update(newItem);
	  },
	  render: function render() {
	    // let smClose = () => this.setState({ showEditModal: false });
	    var productItems = this.props.list.map(function (item) {
	      return _react2.default.createElement(_Transaction2.default, { item: true });
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        _reactBootstrap.Table,
	        null,
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-2' },
	              'Date'
	            ),
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
	      )
	    );
	  }
	});

	exports.default = ProductTable;

/***/ }

})