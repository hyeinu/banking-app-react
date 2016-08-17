import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import Transaction from './Transaction'
import EditModal from '/EditModal'

const TransactionTable = React.createClass({
  getInitialState(){
    edit: false
  },
  deleteMenu(item){
    this.props.delete(item.id);
  },
  submit(newItem){
    this.props.update(newItem)
  },
  updateItem(item){
    this.setState({edit: false})
    console.log('update')
  },
  render(){
      let productItems = this.props.list.map(item =>
        <Transaction item={item} key={item._id} delete={this.props.delete} update={this.updateItem}/>
      )
    return (
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
      <EditModal show={this.state.addShow} submit={this.onAdd} onHide={this.closeAddModal}/>
     </div>
    )
  }
})

export default TransactionTable;
