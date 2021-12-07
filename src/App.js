import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Display = () => {
	return (
		<Card.Body className="p-4">
			<div className="bg-dark text-end pt-3 px-2 pb-1">
				<Card.Subtitle className="Calc-calculations"> 0 </Card.Subtitle>
				<Card.Title id="display"> 0 </Card.Title>
			</div>
		</Card.Body>
	);
}

const CalcKeyPad = () => {
	return (
		<Card.Footer className="Calc-Grid p-4">
			<Button size="lg" id="clear">AC</Button>

			<Button size="lg" className="theme-button" id="seven" name="7" >7</Button>
			<Button size="lg" className="theme-button" id="eight" name="8" >8</Button>
			<Button size="lg" className="theme-button" id="nine" name="9" >9</Button>
			<Button size="lg" className="Calc-Btn" id="divide" name="/">&divide;</Button>

			<Button size="lg" className="theme-button" id="four" name="4" >4</Button>
			<Button size="lg" className="theme-button" id="five" name="5" >5</Button>
			<Button size="lg" className="theme-button" id="six" name="6" >6</Button>
			<Button size="lg" className="Calc-Btn" id="multiply" name="*">&times;</Button>

			<Button size="lg" className="theme-button" id="one" name="1" >1</Button>
			<Button size="lg" className="theme-button" id="two" name="2" >2</Button>
			<Button size="lg" className="theme-button" id="three" name="3" >3</Button>
			<Button size="lg" className="Calc-Btn" id="subtract" name="-">&minus;</Button>

			<Button size="lg" className="Calc-Btn" id="decimal" name=".">.</Button>
			<Button size="lg" className="theme-button" id="zero" name="0" >0</Button>		
			<Button size="lg" className="Calc-Btn" id="equals" name="=">&#61;</Button>
			<Button size="lg" className="Calc-Btn" id="add" name="+">&#43;</Button>

		</Card.Footer>
	);
}

const Calculator = () => {
	return (
		<Card id="Card-Main">
		  	<Card.Header>/.\</Card.Header>
			<Display />
			<CalcKeyPad />
		</Card>
	);
}

const App = () => {
  return (
    <Container fluid id="App-Container">
      <h1>A3AJAGBE Calculator App</h1>
	  	<Calculator />
    </Container>
  );
}

export default App;
