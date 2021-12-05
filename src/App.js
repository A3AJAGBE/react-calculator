import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const App = () => {

	const [result, setResult] = useState("");
	const [input, setInput] = useState("0");

	const numBtnClicked = (e) => {
		setInput(e.target.name);
		setResult(result.concat(e.target.name));
	}

	const operatorBtnClicked = (e) => {
		setResult(result.concat(e.target.name));
	}

	const clear = () => {
		setInput("0");
		setResult("");
	}

  return (
    <Container fluid id="App-Container">
      <h1>A3AJAGBE Calculator App</h1>
	  	<Card id="Card-Main">
		  	<Card.Header>/.\</Card.Header>
			<Card.Body className="p-4">
				<div className="bg-dark text-end pt-3 px-2 pb-1" id="display">
					<Card.Subtitle className="Calc-result"> {result} </Card.Subtitle>
					<Card.Title> {input} </Card.Title>
				</div>
			</Card.Body>
			<Card.Footer className="Calc-Grid p-4">
				<Button size="lg" id="clear" onClick={clear}>AC</Button>

				<Button size="lg" className="theme-button" id="seven" name="7" onClick={numBtnClicked}>7</Button>
				<Button size="lg" className="theme-button" id="eight" name="8" onClick={numBtnClicked}>8</Button>
				<Button size="lg" className="theme-button" id="nine" name="9" onClick={numBtnClicked}>9</Button>
				<Button size="lg" className="Calc-Btn" id="divide" name="/" onClick={operatorBtnClicked}>&divide;</Button>

				<Button size="lg" className="theme-button" id="four" name="4" onClick={numBtnClicked}>4</Button>
				<Button size="lg" className="theme-button" id="five" name="5" onClick={numBtnClicked}>5</Button>
				<Button size="lg" className="theme-button" id="six" name="6" onClick={numBtnClicked}>6</Button>
				<Button size="lg" className="Calc-Btn" id="multiply" name="*" onClick={operatorBtnClicked}>&times;</Button>

				<Button size="lg" className="theme-button" id="one" name="1" onClick={numBtnClicked}>1</Button>
				<Button size="lg" className="theme-button" id="two" name="2" onClick={numBtnClicked}>2</Button>
				<Button size="lg" className="theme-button" id="three" name="3" onClick={numBtnClicked}>3</Button>
				<Button size="lg" className="Calc-Btn" id="subtract" name="-" onClick={operatorBtnClicked}>&minus;</Button>

				<Button size="lg" className="Calc-Btn" id="decimal" name=".">.</Button>
				<Button size="lg" className="theme-button" id="zero" name="0" onClick={numBtnClicked}>0</Button>		
				<Button size="lg" className="Calc-Btn" id="equals" name="=">&#61;</Button>
				<Button size="lg" className="Calc-Btn" id="add" name="+" onClick={operatorBtnClicked}>&#43;</Button>

			</Card.Footer>
		</Card>
    </Container>
  );
}

export default App;
