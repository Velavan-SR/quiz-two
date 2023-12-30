import React from 'react'

const Home = (props) => {
  return (
   <>
   
    <div className='flex-column' id='btn-container'>

        <h3 style={{color:'white'}}>Quiz App</h3>
        <button id='start' onClick={props.showQuiz}>Play</button>

    </div>
   
   </>
  )
}

export default Home
