import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import moment from 'moment'

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
  // editItem(){
  //   this.setState({edit: true})
  // },
  delete(item){
    this.props.deleteItem(item._id);
  },
  // changeDesc(){
  //
  // },
  // changeVal(){
  //
  // },
  render(){
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
    console.log(this.props.item);
    let {description, _id, value, credit, date} = this.props.item;
    let dateNow = date.moment().format('lll')
      return(
        <tr>
        <td className="col-xs-2">{date}</td>
        {/* <td className="col-xs-4">{description}</td>
        <td className="col-xs-2">{value}</td>
        <td className="col-xs-1"><Button onClick={this.editItem} className="btn btn-info fa fa-pencil-square-o"></Button></td>
        <td className="col-xs-1"><Button onClick={this.delete.bind(null, item)} className="btn btn-danger fa fa-trash"></Button></td> */}
        </tr>
      )
    // }
  }
})

export default Transaction;
