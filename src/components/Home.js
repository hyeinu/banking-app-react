import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import AddModal from './AddModal'
import TransTable from './TransactionTable'

const Home = React.createClass({
  getInitialState(){
    return {
      transactionslist: [],
      addShow: false
    }
  },
  componentWillMount(){
    let url = '/api/banktrans'
    fetch(url)
    .then(Response =>{
      return Response.json()
    })
    .then(data =>{
      this.setState({transactionslist: data})
    })
    .catch(err =>{
      return err;
      console.log('No Menu Found', err);
    })
  },
  onAdd(transaction){
    this.setState({addShow: false})
    console.log("transaction:", transaction)
    // this.setState({productlist: this.state.productlist.concat(transaction)})
    // this.setState({totalItems: this.state.productlist.length})
  },
  closeAddModal(){
    this.setState({addShow: false})
  },
  openAddModal(){
    this.setState({addShow: true })
  },
  render(){
    if(this.state.transactionslist.length){
      return(
        <div>
        <div className="row">
        <div className="col-xs-8">
        <h2>Transaction List</h2>
        <h4>Total Items: {this.state.transactionslist.length} || Total Price: {this.state.totalPrice}</h4>
        </div>
        <div className="col-xs-4">
        <br />
        <h4>New <Button onClick={this.openAddModal} className="btn-success fa fa-plus-square fa-sm"></Button></h4>
        </div>
        </div>
        <TransTable list={this.state.transactionslist} />
        <AddModal show={this.state.addShow} submit={this.onAdd} onHide={this.closeAddModal}/>
        </div>
      )
    } else {
    return (<h1>Loading...</h1>)
    }
  }
})

export default Home;
