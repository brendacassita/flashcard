import logo from './logo.svg';
import './App.css';
import Flashcard from './Flashcard';
import Container from './Container';
// import Badge from '.Badge';
import Button from './Button';

function App() {
  return (

    <div className="card">
    
    
    <Container >
    <Flashcard question="last index in a string is?" answer="string.length-1"/>
    </Container>

    <hr/>
    <Container >
    <Flashcard question="split() method does what?" answer="splits string into array of substring and returns new array"/>
    </Container>

    <Container >
    <Flashcard question="question here" answer="answer here"/>
    </Container>

    <Container >
    <Flashcard question="question here" answer="answer here"/>
    </Container>

    <Container >
    <Flashcard question="question here" answer="answer here"/>
    </Container>


    
    </div>
  );
}

export default App;
