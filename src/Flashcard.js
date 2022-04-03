import { useState } from "react"
import Container from "./Container"
import './Card.css';
import Badge from "./Badge";
import Button from "./Button";

const Flashcard = (props) => {
  const [showQuestion, setShowQuestion] =  useState(true)

  const renderCard = () =>{
    if(showQuestion){
      return<p>{props.question}</p>
    }else{
      return<p>{props.answer}</p>
    }
  }



  return(
    // <div  style={{textAlign : 'center'}}>
    <div className="card" >
      <Container>
      <Button onClick={()=>setShowQuestion(!showQuestion)}>toggle</Button>
      {renderCard()}
      </Container>
    </div>
    
  )
}

export default Flashcard