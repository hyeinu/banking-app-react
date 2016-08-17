webpackHotUpdate(0,{

/***/ 432:
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
	  getInitialState: function getInitialState() {
	    //let {description, value, credit, _id, date} = this.props.item;
	    return {
	      edit: false,
	      date: date,
	      description: description,
	      value: value,
	      credit: credit,
	      _id: id
	    };
	  },
	  editItem: function editItem() {
	    this.setState({ edit: true });
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

	    if (this.state.edit) {
	      return _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          'Editing...'
	        )
	      );
	    } else {
	      return _react2.default.createElement(
	        'tr',
	        null,
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
	          _react2.default.createElement(_reactBootstrap.Button, { onClick: this.editItem, className: 'btn btn-info fa fa-pencil-square-o' })
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react2.default.createElement(_reactBootstrap.Button, { onClick: this.delete.bind(null, _id), className: 'btn btn-danger fa fa-trash' })
	        )
	      );
	    }
	  }
	});

	exports.default = Transaction;

/***/ }

})