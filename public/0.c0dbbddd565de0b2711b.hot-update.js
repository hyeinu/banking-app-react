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

	var _EditForm = __webpack_require__(431);

	var _EditForm2 = _interopRequireDefault(_EditForm);

	var _TransactionTable = __webpack_require__(432);

	var _TransactionTable2 = _interopRequireDefault(_TransactionTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = _react2.default.createClass({
	  displayName: 'Home',
	  getInitialState: function getInitialState() {
	    return {
	      transactionslist: [],
	      totalprice: 0,
	      addShow: false,
	      editShow: false,
	      editObj: {}
	    };
	  },
	  setStateChange: function setStateChange() {
	    var sum = this.state.transactionslist.reduce(function (sum, next) {
	      return sum + parseInt(next.value);
	    }, 0);
	    this.setState({ totalprice: sum });
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var url = '/api/banktrans';
	    fetch(url).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this.setState({ transactionslist: data });
	      _this.setStateChange();
	    }).catch(function (err) {
	      return err;
	      console.log('No Transaction Found', err);
	    });
	  },
	  onAdd: function onAdd(transaction) {
	    var _this2 = this;

	    this.setState({ addShow: false });

	    if (transaction.credit) {
	      return transaction;
	    } else {
	      transaction.value = -1 * parseFloat(transaction.value);
	    }

	    fetch('/api/banktrans', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(transaction)
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this2.setState({ transactionslist: _this2.state.transactionslist.concat(data) });
	      _this2.setStateChange();
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
	  openEditForm: function openEditForm(item) {
	    this.setState({ editObj: item });
	    this.setState({ editShow: true });
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
	      _this3.setStateChange();
	    }).catch(function (err) {
	      return err;
	      console.log('No Transaction Found', err);
	    });
	  },
	  onUpdate: function onUpdate(obj) {
	    var _this4 = this;

	    console.log(obj._id);
	    if (obj.credit) {
	      return obj;
	    } else {
	      obj.value = -1 * parseFloat(obj.value);
	    }

	    fetch('/api/banktrans', {
	      method: 'PUT',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(obj)
	    }).then(function () {
	      return fetch('/api/banktrans');
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      _this4.setState({ transactionslist: data });
	      _this4.setStateChange();
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
	              ' || Total Price: $',
	              this.state.totalprice
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
	        _react2.default.createElement(_EditForm2.default, { show: this.state.editShow, onUpdate: this.onUpdate, editObj: this.state.editObj }),
	        _react2.default.createElement(_TransactionTable2.default, { list: this.state.transactionslist, 'delete': this.onDelete, update: this.openEditForm }),
	        _react2.default.createElement(_AddModal2.default, { show: this.state.addShow, submit: this.onAdd, onHide: this.closeAddModal })
	      );
	    } else {
	      return _react2.default.createElement(
	        'h4',
	        null,
	        'New ',
	        _react2.default.createElement(_reactBootstrap.Button, { onClick: this.openAddModal, className: 'btn-success fa fa-plus-square fa-sm' })
	      );
	    }
	  }
	});

	exports.default = Home;

/***/ }

})