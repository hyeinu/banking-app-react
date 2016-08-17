import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'

const Transaction = React.createClass({
  getInitalState(){
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
  },
  delete(item){
    this.props.deleteItem(item._id);
  },
  changeDesc(){

  },
  changeVal(){

  },
  render(){
    if(this.props.edit){
      return(
        <FormGroup>
        <tr key={this.state._id}>
        <td className="col-xs-1"><p>{this.state.date}</p></td>
        <td className="col-xs-2"><FormControl value={this.state.description} onChange={this.changeDesc}/></td>
        <td className="col-xs-2"><FormControl value={this.state.value} onChange={this.changeVal} /></td>
        <td className="col-xs-1"><Button onClick={this.props.submitChange} className="btn btn-info fa fa-pencil-square-o"></Button></td>
        <td className="col-xs-1"><Button onClick={this.deleteMenu.bind(null, item)} className="btn btn-danger fa fa-trash"></Button></td>
        </tr>
        </FormGroup>
      )
    } else{
      return(
        <tr key={item.id}>
        <td className="col-xs-2">{item.name}</td>
        <td className="col-xs-1">{item.price}</td>
        <td className="col-xs-2"><Image src={item.picUrl} rounded responsive /></td>
        <td className="col-xs-1"><Button onClick={this.editItem} className="btn btn-info fa fa-pencil-square-o"></Button></td>
        <td className="col-xs-1"><Button onClick={this.delete.bind(null, item)} className="btn btn-danger fa fa-trash"></Button></td>
        </tr>
      )
    }
  }
})
