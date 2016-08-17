import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const AddModal = React.createClass({
  getInitialState(){
    return  {
     description: "",
     value: 0,
     credit: false
    }
  },
  changeValue(e){
    this.setState({value: e.target.value})
  },
  changeDescription(e){
    this.setState({description: e.target.value})
  },
  select(event){
    this.setState({credit: (event.target.value === 'Credit') ? true : false})
  },
  // submit(){
  //   this.setState({name: '', description: '', value: 0, credit: false})
  //   this.props.submit(this.state);
  // },
  submission(e){
    e.preventDefault()
    this.setState({name: '', description: '', value: 0, credit: false})
    this.props.submit(this.state)
    this.props.onHide()
  },
  render() {
    console.log('this.state.credit:', this.state.credit)
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Add New Transaction</Modal.Title>
        </Modal.Header>
         <form onSubmit={this.submission}>
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
          <button>bub</button>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={this.submit}>Add New Transaction</Button>
          <Button onClick={this.props.onHide}>Close</Button> */}
        </Modal.Footer>
        </FormGroup>
        </form>
      </Modal>
    );
  }
});

export default AddModal
