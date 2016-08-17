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

	var _moment = __webpack_require__(494);

	var _moment2 = _interopRequireDefault(_moment);

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
	    console.log("screw this");
	    // this.setState({edit: true})
	  },
	  delete: function _delete(id) {
	    this.props.delete(id);
	  },

	  // changeDesc(){
	  //
	  // },
	  // changeVal(){
	  //
	  // },
	  render: function render() {
	    // if(this.props.edit){
	    //   return(
	    //     <FormGroup>
	    //     <tr key={this.state._id}>
	    //     <td className="col-xs-1"><p>{this.state.date}</p></td>
	    //     <td className="col-xs-2"><FormControl value={this.state.description} onChange={this.changeDesc}/></td>
	    //     <td className="col-xs-2"><FormControl value={this.state.value} onChange={this.changeVal} /></td>
	    //     <td className="col-xs-1"><Button onClick={this.props.submitChange} className="btn btn-info fa fa-pencil-square-o"></Button></td>
	    //     <td className="col-xs-1"><Button onClick={this.deleteMenu.bind(null, item)} className="btn btn-danger fa fa-trash"></Button></td>
	    //     </tr>
	    //     </FormGroup>
	    //   )
	    // } else{
	    var _props$item2 = this.props.item;
	    var description = _props$item2.description;
	    var _id = _props$item2._id;
	    var value = _props$item2.value;
	    var credit = _props$item2.credit;
	    var date = _props$item2.date;

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
	    // }
	  }
	});

	exports.default = Transaction;

/***/ }

})