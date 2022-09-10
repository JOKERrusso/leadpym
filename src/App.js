import { useState } from 'react';
import './App.css';

import logo from './assets/logo.png'

function App() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  return (
    <>
      <div className='navbarContainer'>
        <div className='logo'>
          <img src={logo} alt='Logo' width='200px' />
        </div>
      </div>

      <div className='container'>
        <div className='columnContainer'>
          <div className='contentContainer'>
            <div className='elementsContainer'>
              <div className='apresentation'>
                Nosso website está em construção
              </div>

              <div className='squaresCenter'>
                <div className='square'>
                  {days}
                </div>

                <div className='colonContainer'>
                  <div className='colon' />
                  <div className='colon' />
                </div>

                <div id='hours' className='square'>
                  {hours}
                </div>

                <div className='colonContainer'>
                  <div className='colon' />
                  <div className='colon' />
                </div>
                
                <div id='minutes' className='square'>
                  {minutes}
                </div>

                <div className='colonContainer'>
                  <div className='colon' />
                  <div className='colon' />
                </div>

                <div id='seconds' className='square'>
                  {seconds}
                </div>
              </div>

              <div className='subscribe'>
                Inscreva-se agora
              </div>

              <div className='submitCenterContainer'>
                <div className='submitContainer'>
                  <div className='input'>
                    <input type='text' placeholder='E-mail' />
                  </div>

                  <div className='button'>
                    ENVIAR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
