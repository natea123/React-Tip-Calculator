import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bill: 0,
                  percent: 15,
                  tip: 0 }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //handle change 
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    alert('Total tip: ' + ((this.state.percent/100) * this.state.bill))
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Bill:
          <input type="text" name="bill" value={this.state.bill} onChange={this.handleChange} />
        </label>
        <label>
          Tip Percentage (%):
          <input type="text" name="percent" value={this.state.percent} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Nate's Magical Tip Calculator</h1>
    </Jumbotron>
    <NameForm />
  </Container>
);

export default App;