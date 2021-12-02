import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <Container fluid id="App-Container">
      <h1>A3AJAGBE Calculator App</h1>
	  	<Card id="Card-Main">
		  	<Card.Header>Calc Display</Card.Header>
			<Card.Body>This is some text within a card body.</Card.Body>
			<Card.Footer className="lead fs-6 text-center">Designed & Developed by Yours truly</Card.Footer>
		</Card>
    </Container>
  );
}

export default App;
