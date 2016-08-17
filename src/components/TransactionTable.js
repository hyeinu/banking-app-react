import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import Transaction from './Transaction'
// import EditModal from './EditModal'

const TransactionTable = React.createClass({
  getInitialState(){
    return {
      edit: false
    }
  },
  deleteMenu(item){
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
  render(){
      let productItems = this.props.list.map(item =>
        <Transaction item={item} key={item._id} delete={this.props.delete} update={this.showEdit}/>
      )
    return (
      <div>
        <div className="row">
        <Table>
          <thead>
          <tr>
            <th className="col-xs-3">Date<Button className="fa fa-sort" onClick={this.props.sortName}></Button></th>
            <th className="col-xs-3">Desription</th>
            <th className="col-xs-2">Value<Button className="fa fa-sort" onClick={this.props.sortPrice}></Button></th>
            <th className="col-xs-1">Edit</th>
            <th className="col-xs-1">Delete</th>
            </tr>
          </thead>
          <tbody>
            {productItems}
          </tbody>
        </Table>
        </div>
      {/* <EditModal show={this.state.edit} submit={this.updateItem} onHide={this.closeEditModal}/> */}
      </div>
    )
  }
})

export default TransactionTable;
