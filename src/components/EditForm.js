import React from 'react'
import {Table, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const EditForm = React.createClass({
  getInitialState(){
    return{
      description: '',
      value: 0,
      id: '',
      credit: false
    }
  },
  componentWillReceiveProps(nextProps){
    this.setState({description: nextProps.editObj.description, value: nextProps.editObj.value, id: nextProps.editObj._id, credit: nextProps.editObj.credit})
  },
  changeValue(e){
    this.setState({value: e.target.value})
  },
  changeDescription(e){
    this.setState({description: e.target.value})
  },
  submission(){
    this.props.onUpdate(this.state)
  },
  select(event){
    this.setState({credit: (event.target.value === 'Credit') ? true : false})
  },
  render(){
    if(this.props.show){
      return(
        <FormGroup>
          <FormControl type="text" placeholder="Description" value={this.state.description} onChange={this.changeDescription}/>
          <FormControl type="number" placeholder="Value" value={this.state.value} onChange={this.changeValue}/>
            <FormControl componentClass="select" defaultValue={"Select"} onChange={this.select} required>
              <option value="Select" disabled>Select...</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </FormControl>
          <Button onClick={this.submission}>Edit Transaction</Button>
        </FormGroup>
      )
    } else{
      return <p></p>
    }
  }
})

export default EditForm
