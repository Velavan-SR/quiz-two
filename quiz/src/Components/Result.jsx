import React from 'react';

const Result = (props) => {

  return (
    <div className='flex-column' style={{height:'80vh',justifyContent:'space-around'}}>
      
      <h2 style={{color:'#047e06',fontSize:'30px'}}>Result</h2>

      <div id='result' className='flex-column'>

        <h4 style={{fontWeight:'600'}}> {props.score < 8 ? 'You Need More Practice !' : 'Well Done !' } </h4>

        <h2 style={{fontSize:'28px',transform:'translateY(-90%)',color:'#0000ff'}}> Your Score is {Math.floor(props.score/15)*100}%</h2>

        <div id='list' className='flex-column'>

          <div className='flex-between'>
            <p> Total number of questions </p>
            <p> 15 </p>
          </div>

          <div className='flex-between'>
            <p> Number of correct answers </p>
            <p> {props.score} </p>
          </div>

          <div className='flex-between'>
            <p> Number of wrong answers </p>
            <p> {15-props.score} </p>
          </div>

        </div>

      </div>

      <div className='flex-between' id='res-btns'>

        <button onClick={props.showQuiz} style={{color:'#7676d6'}}>Play Again</button>
        <button onClick={props.showHome} style={{color:'#07790f'}}>Back to Home</button>

      </div>

    </div>
  )
}

export default Result
