import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'

const Transaction = React.createClass({
  editItem(item){
    this.props.update(item);
  },
  delete(id){
    this.props.delete(id);
  },
  render(){
    let {description, _id, value, credit, date} = this.props.item;
      return(
        <tr>
        <td className="col-xs-3">{date}</td>
        <td className="col-xs-3">{description}</td>
        <td className="col-xs-2">{value}</td>
        <td className="col-xs-1"><Button onClick={this.editItem.bind(null, this.props.item)} className="btn btn-info fa fa-pencil-square-o"></Button></td>
        <td className="col-xs-1"><Button onClick={this.delete.bind(null, _id)} className="btn btn-danger fa fa-trash"></Button></td>
        </tr>
      )
  }
})

export default Transaction;
