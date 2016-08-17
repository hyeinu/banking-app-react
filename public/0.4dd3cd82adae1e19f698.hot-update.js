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
	      addShow: false
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var url = '/api/banktrans';
	    fetch(url).then(function (Response) {
	      return Response.json();
	    }).then(function (data) {
	      console.log('data ', data);
	      _this.setState({ transactionslist: data });
	    }).catch(function (err) {
	      return err;
	      console.log('No Menu Found', err);
	    });
	  },
	  onAdd: function onAdd(transaction) {
	    this.setState({ addShow: false });
	    console.log("transaction:", transaction);
	    // this.setState({productlist: this.state.productlist.concat(transaction)})
	    // this.setState({totalItems: this.state.productlist.length})
	  },
	  closeAddModal: function closeAddModal() {
	    this.setState({ addShow: false });
	  },
	  openAddModal: function openAddModal() {
	    this.setState({ addShow: true });
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
	        _react2.default.createElement(_TransactionTable2.default, { list: this.state.transactionlist }),
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
	  submit: function submit(newItem) {
	    this.props.update(newItem);
	  },
	  render: function render() {
	    // let smClose = () => this.setState({ showEditModal: false });
	    var productItems = this.state.list.map(function (item) {
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

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Transaction = _react2.default.createClass({
	  displayName: 'Transaction',
	  getInitalState: function getInitalState() {
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
	  delete: function _delete(item) {
	    this.props.deleteItem(item._id);
	  },
	  changeDesc: function changeDesc() {},
	  changeVal: function changeVal() {},
	  render: function render() {
	    if (this.props.edit) {
	      return _react2.default.createElement(
	        _reactBootstrap.FormGroup,
	        null,
	        _react2.default.createElement(
	          'tr',
	          { key: this.state._id },
	          _react2.default.createElement(
	            'td',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(
	              'p',
	              null,
	              this.state.date
	            )
	          ),
	          _react2.default.createElement(
	            'td',
	            { className: 'col-xs-2' },
	            _react2.default.createElement(_reactBootstrap.FormControl, { value: this.state.description, onChange: this.changeDesc })
	          ),
	          _react2.default.createElement(
	            'td',
	            { className: 'col-xs-2' },
	            _react2.default.createElement(_reactBootstrap.FormControl, { value: this.state.value, onChange: this.changeVal })
	          ),
	          _react2.default.createElement(
	            'td',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(_reactBootstrap.Button, { onClick: this.props.submitChange, className: 'btn btn-info fa fa-pencil-square-o' })
	          ),
	          _react2.default.createElement(
	            'td',
	            { className: 'col-xs-1' },
	            _react2.default.createElement(_reactBootstrap.Button, { onClick: this.deleteMenu.bind(null, item), className: 'btn btn-danger fa fa-trash' })
	          )
	        )
	      );
	    } else {
	      return _react2.default.createElement(
	        'tr',
	        { key: item.id },
	        _react2.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          item.name
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          item.price
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          _react2.default.createElement(_reactBootstrap.Image, { src: item.picUrl, rounded: true, responsive: true })
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react2.default.createElement(_reactBootstrap.Button, { onClick: this.editItem, className: 'btn btn-info fa fa-pencil-square-o' })
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react2.default.createElement(_reactBootstrap.Button, { onClick: this.delete.bind(null, item), className: 'btn btn-danger fa fa-trash' })
	        )
	      );
	    }
	  }
	});

/***/ }

})