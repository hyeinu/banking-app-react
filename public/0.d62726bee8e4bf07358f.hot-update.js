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
	    fetch('/api/banktrans', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(transaction)
	    }).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      console.log(data);
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
	  update: function update(item) {
	    console.log('update', item);
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
	        _react2.default.createElement(_TransactionTable2.default, { list: this.state.transactionslist, 'delete': this.onDelete, update: this.update }),
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

/***/ },

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

	var TransactionTable = _react2.default.createClass({
	  displayName: 'TransactionTable',
	  getInitialState: function getInitialState() {
	    return {
	      edit: false
	    };
	  },
	  deleteMenu: function deleteMenu(item) {
	    this.props.delete(item.id);
	  },

	  // submit(newItem){
	  //   this.props.update(newItem)
	  // },
	  // showEdit(){
	  //   this.setState({edit: true})
	  // },
	  // updateItem(item){
	  //   this.setState({edit: false})
	  //   console.log('update')
	  // },
	  // closeEditModal(){
	  //   this.setState({edit: false})
	  // },
	  render: function render() {
	    var _this = this;

	    var productItems = this.props.list.map(function (item) {
	      return _react2.default.createElement(_Transaction2.default, { item: item, key: item._id, 'delete': _this.props.delete, update: _this.showEdit });
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
	              { className: 'col-xs-3' },
	              'Date',
	              _react2.default.createElement(_reactBootstrap.Button, { className: 'fa fa-sort', onClick: this.props.sortName })
	            ),
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-3' },
	              'Desription'
	            ),
	            _react2.default.createElement(
	              'th',
	              { className: 'col-xs-2' },
	              'Value',
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

	exports.default = TransactionTable;

/***/ },

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
	    var _props$item = this.props.item;
	    var description = _props$item.description;
	    var value = _props$item.value;
	    var credit = _props$item.credit;
	    var _id = _props$item._id;
	    var date = _props$item.date;


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
	    var _props$item2 = this.props.item;
	    var description = _props$item2.description;
	    var _id = _props$item2._id;
	    var value = _props$item2.value;
	    var credit = _props$item2.credit;
	    var date = _props$item2.date;

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