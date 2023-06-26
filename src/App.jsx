import { useState } from 'react'
import './index.css'
import StarLogo from './images/icon-star.svg'
import FeedBackImg from './images/illustration-thank-you.svg'

function App() {

  const [value, setValue] = useState(0);

  const [hide , setHide] = useState(true);

  function handleClick(event){
    setValue(event.target.innerText);
  }


  function hideDiv() {
    setHide(!hide);
  }




  return (
    <>
      <div className="container">
        <div className="box-1" style={{display: hide ? 'block': 'none' }} >
          <img className="logo" src={StarLogo} alt="star-logo" />
          <h1>How did we do?</h1>
          <p className="feedback">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          <div className="btn flex-group">
            <button className="rnd-btn one" id="1" onClick={handleClick}>1</button>
            <button className="rnd-btn two" id="2" onClick={handleClick}>2</button>
            <button className="rnd-btn three" id="3" onClick={handleClick}>3</button>
            <button className="rnd-btn four" id="4" onClick={handleClick}>4</button>
            <button className="rnd-btn five" id="5" onClick={handleClick}>5</button>
          </div>
          <button className="submit-btn" type='submit' onClick={hideDiv}>SUBMIT</button>
        </div>

        <div className="box-2" style={{display: hide ? 'none': 'block'}}>
          <img src={FeedBackImg} alt="feedbacklogo" className="feedback-logo" />
          <p className="score">
            You selected <span>{value}</span> out of 5
          </p>
          <h2>Thank you!</h2>
          <p className="fdb">
            We appreciate you taking the time to give a rating.
            if you ever need more support,don't hesitate to get in touch!
          </p>
          <button className="submit-btn" onClick={() => {
            setValue(0);
            hideDiv();
          } }>RATE AGAIN</button>


        </div>
      </div>
    </>
  )
}

export default App
