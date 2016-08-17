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
	    return {
	      transactionslist: [],
	      totalprice: 0,
	      addShow: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var url = '/api/banktrans';
	    fetch(url).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this.setState({ transactionslist: data });
	    }).catch(function (err) {
	      return err;
	      console.log('No Transaction Found', err);
	    });
	  },
	  onAdd: function onAdd(transaction) {
	    var _this2 = this;

	    this.setState({ addShow: false });
	    fetch('/api/banktrans', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(transaction)
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this2.setState({ transactionlist: _this2.state.transactionlist.concat(data) });
	    }).catch(function (err) {
	      return err;
	      console.log('No Transaction Found', err);
	    });
	  },
	  closeAddModal: function closeAddModal() {
	    this.setState({ addShow: false });
	  },
	  openAddModal: function openAddModal() {
	    this.setState({ addShow: true });
	  },
	  onDelete: function onDelete(id) {
	    var _this3 = this;

	    var url = '/api/banktrans/' + id;
	    fetch(url, {
	      method: 'DELETE'
	    }).then(function () {
	      return fetch('/api/banktrans');
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this3.setState({ transactionslist: data });
	    }).catch(function (err) {
	      return err;
	      console.log('No Transaction Found', err);
	    });
	  },
	  render: function render() {
	    if (this.state.transactionslist.length) {
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
	        _react2.default.createElement(_TransactionTable2.default, { list: this.state.transactionslist, 'delete': this.onDelete }),
	        _react2.default.createElement(_AddModal2.default, { show: this.state.addShow, submit: this.onAdd, onHide: this.closeAddModal })
	      );
	    } else {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'Loading...'
	      );
	    }
	  }
	});

	exports.default = Home;

/***/ }

})