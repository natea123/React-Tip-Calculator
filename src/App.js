import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bill: '$0.00',
                  percent: 15,
                  tip: '$0.00' }

    this.handleChange = this.handleChange.bind(this);
    this.calcTip = this.calcTip.bind(this);
  }
  
  //handle change 
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value,
    });
  }

  //Submit handler to calculate tip and round to nearest 2 decimal places
  calcTip(event) {
    this.setState({
      tip: ((this.state.percent/100) * this.state.bill).toFixed(2)
    });
    event.preventDefault();
  }


  render() {
    return (
      <>
      <form onSubmit={this.calcTip}>
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
      <Card body className="text-center">
        <CardTitle tag="h2">Tip:</CardTitle>
        <CardText tag="h1">{this.state.tip}</CardText>
      </Card>
      </>
    );
  }
}
NameForm.propTypes = {
  bill: PropTypes.number.isRequired
}

const App = () => (
  <Container className="p-3">
    <Jumbotron className="text-center">
      <h1 className="header">Nate's Magical Tip Calculator</h1>
    </Jumbotron>
    <Jumbotron>
      <NameForm />
    </Jumbotron>
  </Container>
);

export default App;