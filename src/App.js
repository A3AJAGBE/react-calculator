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
		  	<Card.Header>/.\</Card.Header>
			<Card.Body>
				<div className="bg-dark p-2 text-end" id="display">
					<Card.Subtitle className="Calc-result"> 3 </Card.Subtitle>
					<Card.Title> 1 + 2 </Card.Title>
				</div>
			</Card.Body>
			<Card.Footer className="Calc-Grid p-4">
				<Button size="lg" className="" id="clear">AC</Button>

				<Button size="lg" className="theme-button" id="seven">7</Button>
				<Button size="lg" className="theme-button" id="eight">8</Button>
				<Button size="lg" className="theme-button" id="nine">9</Button>
				<Button size="lg" className="Calc-Btn" id="divide">/</Button>

				<Button size="lg" className="theme-button" id="four">4</Button>
				<Button size="lg" className="theme-button" id="five">5</Button>
				<Button size="lg" className="theme-button" id="six">6</Button>
				<Button size="lg" className="Calc-Btn" id="multiply">*</Button>

				<Button size="lg" className="theme-button" id="one">1</Button>
				<Button size="lg" className="theme-button" id="two">2</Button>
				<Button size="lg" className="theme-button" id="three">3</Button>
				<Button size="lg" className="Calc-Btn" id="subtract">-</Button>

				<Button size="lg" className="Calc-Btn" id="decimal">.</Button>
				<Button size="lg" className="theme-button" id="zero">0</Button>		
				<Button size="lg" className="Calc-Btn" id="equals">=</Button>
				<Button size="lg" className="Calc-Btn" id="add">+</Button>
				
			</Card.Footer>
		</Card>
    </Container>
  );
}

export default App;
