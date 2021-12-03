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
		  	<Card.Header>Calc Display</Card.Header>
			<Card.Body>
				<Card.Title className="bg-dark p-4"> Wow </Card.Title>
			</Card.Body>
			<Card.Footer className="Calc-Grid">
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>
				<Button size="lg" className="Calc-Btn">1</Button>

			</Card.Footer>
		</Card>
    </Container>
  );
}

export default App;
