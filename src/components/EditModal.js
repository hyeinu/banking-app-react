import React from 'react'
import {Table, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const EditModal = React.createClass({
  getInitialState(){
    return  {
     description: "",
     value: 0,
     credit: false,
     id: ''
    }
  },
  changeValue(e){
    this.setState({value: e.target.value})
  },
  changeDescription(e){
    this.setState({description: e.target.value})
  },
  // componentWillReceiveProps(next){
  //   this.setState({description: next.description, value: next.value, credit: next.credit, id: next._id})
  // },
  select(event){
    this.setState({credit: (event.target.value === 'Credit') ? true : false})
  },
  submission(){
    if(this.state.credit){
      this.props.submit(this.state)
    } else {
      this.setState({value: -this.state.value})
      this.props.submit(this.state)
    }
    this.setState({name: '', description: '', value: 0, credit: false, id: ''})
  },
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Add New Transaction</Modal.Title>
        </Modal.Header>
         <form>
         <FormGroup>
        <Modal.Body>
          <FormControl type="text" placeholder="Description" value={this.state.description} onChange={this.changeDescription}/>
          <FormControl type="number" placeholder="Value" value={this.state.value} onChange={this.changeValue}/>
          <FormGroup>
            <FormControl componentClass="select" defaultValue={"Select"} onChange={this.select} required>
              <option value="Select" disabled>Select...</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </FormControl>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.submission}>Edit Transaction</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </FormGroup>
        </form>
      </Modal>
    );
  }
});

export default EditModal
