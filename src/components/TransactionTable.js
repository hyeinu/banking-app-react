import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import Transaction from './Transaction'

const ProductTable = React.createClass({
  getInitialState(){
    return {
      list: this.props.list
    }
  },
  deleteMenu(item){
    this.props.delete(item.id);
  },
  submit(newItem){
    this.props.update(newItem)
  },
  render(){
    // let smClose = () => this.setState({ showEditModal: false });
    let productItems = this.state.list.map(item =>
      (
        <Transaction item />
      )
    )
    return (
     <div className="row">
      <Table>
        <thead>
          <tr>
          <th className="col-xs-2">Date</th>
            <th className="col-xs-2">Name <Button className="fa fa-sort" onClick={this.props.sortName}></Button></th>
            <th className="col-xs-1">Price <Button className="fa fa-sort" onClick={this.props.sortPrice}></Button></th>
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

export default ProductTable;
