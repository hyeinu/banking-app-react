webpackHotUpdate(0,{

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(176);

	var _AddModal = __webpack_require__(430);

	var _AddModal2 = _interopRequireDefault(_AddModal);

	var _TransactionTable = __webpack_require__(431);

	var _TransactionTable2 = _interopRequireDefault(_TransactionTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = _react2.default.createClass({
	  displayName: 'Home',
	  getInitialState: function getInitialState() {
	    var url = '/api/banktrans/';
	    fetch(url, {
	      method: 'GET'
	    }).then(function (Response) {
	      console.log("Response:", Response);
	      return Response.json();
	    }).then(function (data) {
	      return {
	        transactionslist: data,
	        addShow: false
	      };
	    }).catch(function (err) {
	      return err;
	      console.log('No Menu Found', err);
	    });
	  },
	  onAdd: function onAdd(transaction) {
	    this.setState({ addShow: false });
	    // this.setState({productlist: this.state.productlist.concat(transaction)})
	    // this.setState({totalItems: this.state.productlist.length})
	  },
	  closeAddModal: function closeAddModal() {
	    this.setState({ addShow: false });
	  },
	  openAddModal: function openAddModal(item) {
	    this.setState({ addShow: true });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-8' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Transaction List'
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            'Total Items: ',
	            this.state.transactionslist.length,
	            ' || Total Price: ',
	            this.state.totalPrice
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-4' },
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'h4',
	            null,
	            'New ',
	            _react2.default.createElement(_reactBootstrap.Button, { onClick: this.openAddModal, className: 'btn-success fa fa-plus-square fa-sm' })
	          )
	        )
	      ),
	      _react2.default.createElement(_TransactionTable2.default, { list: this.state.transactionlist, update: this.updateItem, 'delete': this.deleteItem, sortName: this.sortName, sortPrice: this.sortPrice }),
	      _react2.default.createElement(_AddModal2.default, { show: this.state.openAddModal, submit: this.onAdd, onHide: this.closeAddModal })
	    );
	  }
	});

	exports.default = Home;

/***/ }

})