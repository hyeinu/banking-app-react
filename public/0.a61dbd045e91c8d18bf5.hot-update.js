webpackHotUpdate(0,{

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Transaction = _react2.default.createClass({
	  displayName: 'Transaction',
	  editItem: function editItem(item) {
	    this.props.update(item);
	  },
	  delete: function _delete(id) {
	    this.props.delete(id);
	  },
	  render: function render() {
	    var _props$item = this.props.item;
	    var description = _props$item.description;
	    var _id = _props$item._id;
	    var value = _props$item.value;
	    var credit = _props$item.credit;
	    var date = _props$item.date;

	    return _react2.default.createElement(
	      'tr',
	      { id: _id },
	      _react2.default.createElement(
	        'td',
	        { className: 'col-xs-3' },
	        date
	      ),
	      _react2.default.createElement(
	        'td',
	        { className: 'col-xs-3' },
	        description
	      ),
	      _react2.default.createElement(
	        'td',
	        { className: 'col-xs-2' },
	        value
	      ),
	      _react2.default.createElement(
	        'td',
	        { className: 'col-xs-1' },
	        _react2.default.createElement(_reactBootstrap.Button, { onClick: this.editItem.bind(null, this.props.item, { _id: _id }), className: 'btn btn-info fa fa-pencil-square-o' })
	      ),
	      _react2.default.createElement(
	        'td',
	        { className: 'col-xs-1' },
	        _react2.default.createElement(_reactBootstrap.Button, { onClick: this.delete.bind(null, _id), className: 'btn btn-danger fa fa-trash' })
	      )
	    );
	  }
	});

	exports.default = Transaction;

/***/ }

})