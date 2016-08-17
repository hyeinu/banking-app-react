import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import Transaction from './Transaction'

const TransactionTable = React.createClass({
  deleteItem(id){

    this.props.delete(id);
  },
  updateItem(item){
    console.log("item:", item)
    this.props.update(item);
  },
  render(){
      let productItems = this.props.list.map(item =>
        <Transaction item={item} key={item._id} delete={this.deleteItem} update={this.updateItem}/>
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
        </div>
    )
  }
})

export default TransactionTable;
