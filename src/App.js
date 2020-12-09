import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Input ,Card, Button, CardTitle, CardText, Col } from 'reactstrap';


import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bill: 0,
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
        <Container>
        <Col xs='auto'style={{padding: '10px'}}>
        Bill ($):
          <Input type="number" name="bill" style={{width: '200px'}} value={this.state.bill} onChange={this.handleChange} />
        </Col>
        <Col style={{padding: '10px'}}>
          Tip Percentage (%):
          <Input type="number" name="percent" style={{width: '200px'}} value={this.state.percent} onChange={this.handleChange} />
        </Col>
        <Button type="submit" color="primary" size="lg">Submit</Button>
        </Container>
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