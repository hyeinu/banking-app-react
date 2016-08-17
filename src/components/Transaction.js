import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import moment from 'moment'


const Transaction = React.createClass({
  getInitialState(){
    let {description, value, credit, _id, date} = this.props.item;

    return {
      edit: false,
      date: date,
      description: description,
      value: value,
      credit: credit,
      _id: id
    }
  },
  editItem(){
    this.setState({edit: true})
    // this.props.update(id)
  },
  delete(id){
    this.props.delete(id);
  },
  render(){
    let {description, _id, value, credit, date} = this.props.item;
    if(this.state.edit){
      return (<tr>Editing...</tr>)
    }else{
      return(
        <tr>
        <td className="col-xs-3">{date}</td>
        <td className="col-xs-3">{description}</td>
        <td className="col-xs-2">{value}</td>
        <td className="col-xs-1"><Button onClick={this.editItem} className="btn btn-info fa fa-pencil-square-o"></Button></td>
        <td className="col-xs-1"><Button onClick={this.delete.bind(null, _id)} className="btn btn-danger fa fa-trash"></Button></td>
        </tr>
      )
    }
  }
})

export default Transaction;
