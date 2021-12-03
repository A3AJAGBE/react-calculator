import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <Container fluid id="App-Container">
      <h1>A3AJAGBE Calculator App</h1>
	  	<Card id="Card-Main">
		  	<Card.Header>A3</Card.Header>
			<Card.Body>
				<Card.Title className="bg-dark p-4" id="display"> Wow </Card.Title>
			</Card.Body>
			<Card.Footer className="Calc-Grid p-4">
				<Button size="lg" className="Calc-Btn" id="clear">AC</Button>
				<Button size="lg" className="Calc-Btn" id="seven">7</Button>
				<Button size="lg" className="Calc-Btn" id="eight">8</Button>
				<Button size="lg" className="Calc-Btn" id="nine">9</Button>
				<Button size="lg" className="Calc-Btn" id="divide">/</Button>
				<Button size="lg" className="Calc-Btn" id="four">4</Button>
				<Button size="lg" className="Calc-Btn" id="five">5</Button>
				<Button size="lg" className="Calc-Btn" id="six">6</Button>
				<Button size="lg" className="Calc-Btn" id="multiply">*</Button>
				<Button size="lg" className="Calc-Btn" id="one">1</Button>
				<Button size="lg" className="Calc-Btn" id="two">2</Button>
				<Button size="lg" className="Calc-Btn" id="three">3</Button>
				<Button size="lg" className="Calc-Btn" id="subtract">-</Button>
				<Button size="lg" className="Calc-Btn" id="decimal">.</Button>
				<Button size="lg" className="Calc-Btn" id="zero">0</Button>		
				<Button size="lg" className="Calc-Btn" id="equals">=</Button>
				<Button size="lg" className="Calc-Btn" id="add">+</Button>
				

			</Card.Footer>
		</Card>
    </Container>
  );
}

export default App;
