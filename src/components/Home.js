import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import AddModal from './AddModal'
import EditForm from './EditForm'
import TransTable from './TransactionTable'

const Home = React.createClass({
  getInitialState(){
    return {
      transactionslist: [],
      totalprice: 0,
      addShow: false,
      editShow: false,
      editObj: {}
    }
  },
  setStateChange(){
    let sum = this.state.transactionslist.reduce((sum, next)=>{
      return sum + parseInt(next.value);
    }, 0)
    this.setState({totalprice: sum})
  },
  componentWillMount(){
    let url = '/api/banktrans'
    fetch(url)
    .then(Response =>{
      return Response.json()
    })
    .then(data =>{
      this.setState({transactionslist: data})
      this.setStateChange();
    })
    .catch(err =>{
      return err;
      console.log('No Transaction Found', err);
    })
  },
  onAdd(transaction){
    this.setState({addShow: false})

    if(transaction.credit){
      return transaction
    } else {
      transaction.value = -1 * parseFloat(transaction.value);
    }

    fetch('/api/banktrans', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(Response =>{
      return Response.json()
    })
    .then(data =>{
      this.setState({transactionslist: this.state.transactionslist.concat(data)})
      this.setStateChange()
    })
    .catch(err =>{
      return err;
      console.log('No Transaction Found', err);
    })
  },
  closeAddModal(){
    this.setState({addShow: false})
  },
  openAddModal(){
    this.setState({addShow: true })
  },
  openEditForm(item){
    this.setState({editObj: item })
    this.setState({editShow: true })
  },
  onDelete(id){
    let url = `/api/banktrans/${id}`
    fetch(url,{
      method: 'DELETE'
    })
    .then(()=>{
      return fetch('/api/banktrans')
    })
    .then(Response =>{
      return Response.json()
    })
    .then(data =>{
      this.setState({transactionslist: data})
      this.setStateChange()
    })
    .catch(err =>{
      return err;
      console.log('No Transaction Found', err);
    })
  },
  onUpdate(obj){
    console.log(obj);
  },
  render(){
    if(this.state.transactionslist.length){
      return(
        <div>
        <div className="row">
        <div className="col-xs-8">
        <h2>Transaction List</h2>
        <h4>Total Items: {this.state.transactionslist.length} || Total Price: ${this.state.totalprice}</h4>
        </div>
        <div className="col-xs-4">
        <br />
        <h4>New <Button onClick={this.openAddModal} className="btn-success fa fa-plus-square fa-sm"></Button></h4>
        </div>
        </div>
        <EditForm show={this.state.editShow} onUpdate={this.onUpdate} editObj={this.state.editObj}/>
        <TransTable list={this.state.transactionslist} delete={this.onDelete} update={this.openEditForm}/>
        <AddModal show={this.state.addShow} submit={this.onAdd} onHide={this.closeAddModal}/>
        </div>
      )
    } else {
    return (<h1>Loading...</h1>)
    }
  }
})

export default Home;
