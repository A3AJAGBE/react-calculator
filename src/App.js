import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Calculator = () => {
	const [details, setDetails] = useState("");
	const [display, setDisplay] = useState("0");

	const numClicked = (e) => {
		let value = e.target.name;
		setDisplay(display.concat(value).replace(/^0+/,'') || display.concat(value).replace(/^0{2,}/,'0') );
		setDetails(details.concat(value).replace(/^0+/,'') || details.concat(value).replace(/^0{2,}/,'0'));
	}

	const clear = () => {
		setDisplay("0");
		setDetails("");
	}

	const operators = ['/', '*', '+', '-'];

	const operatorClicked = (e) => {

		// The if statement prevents the operators Symbols from being clicked first 
		if (operators.includes(e.target.name) && details === '') {
			return;
		} 
		setDetails(details.concat(e.target.name));
		setDisplay(e.target.name);
	}

	return (
		<Card id="Card-Main">
		  	<Card.Header>/.\</Card.Header>
			<Card.Body className="p-4">
				<div className="bg-dark text-end pt-3 px-2 pb-1">
					<Card.Subtitle className="Calc-calculations"> {details} </Card.Subtitle>
					<Card.Title id="display"> {display} </Card.Title>
				</div>
			</Card.Body>
			<Card.Footer className="Calc-Grid p-4">
				<Button size="lg" id="clear" onClick={clear}>AC</Button>

				<Button size="lg" className="theme-button" id="seven" name="7" onClick={numClicked}>7</Button>
				<Button size="lg" className="theme-button" id="eight" name="8" onClick={numClicked}>8</Button>
				<Button size="lg" className="theme-button" id="nine" name="9" onClick={numClicked}>9</Button>
				<Button size="lg" className="Calc-Btn" id="divide" name="/" onClick={operatorClicked}>&divide;</Button>

				<Button size="lg" className="theme-button" id="four" name="4" onClick={numClicked}>4</Button>
				<Button size="lg" className="theme-button" id="five" name="5" onClick={numClicked}>5</Button>
				<Button size="lg" className="theme-button" id="six" name="6" onClick={numClicked}>6</Button>
				<Button size="lg" className="Calc-Btn" id="multiply" name="*" onClick={operatorClicked}>&times;</Button>

				<Button size="lg" className="theme-button" id="one" name="1" onClick={numClicked}>1</Button>
				<Button size="lg" className="theme-button" id="two" name="2" onClick={numClicked}>2</Button>
				<Button size="lg" className="theme-button" id="three" name="3" onClick={numClicked}>3</Button>
				<Button size="lg" className="Calc-Btn" id="subtract" name="-" onClick={operatorClicked}>&minus;</Button>

				<Button size="lg" className="Calc-Btn" id="decimal" name=".">.</Button>
				<Button size="lg" className="theme-button" id="zero" name="0" onClick={numClicked}>0</Button>		
				<Button size="lg" className="Calc-Btn" id="equals" name="=">&#61;</Button>
				<Button size="lg" className="Calc-Btn" id="add" name="+" onClick={operatorClicked}>&#43;</Button>

			</Card.Footer>
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
