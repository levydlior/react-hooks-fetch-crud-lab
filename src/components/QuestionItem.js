import React from "react";


function QuestionItem({questions, onDeleteQuestion, onCorrectAnserChange}) {
  const { id, prompt, answers, correctIndex } = questions;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: 'DELETE'
    }).then(onDeleteQuestion(id))
     
  }

  function handleAnswerUpdate(e){
    console.log(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({correctIndex: e.target.value})
    }).then(r => r.json())
      .then(correctAnswer => onCorrectAnserChange(correctAnswer))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerUpdate}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
