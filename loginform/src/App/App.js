import React, { useState } from 'react'
import './App.css'

function App () {
  const [showWarning, setShowWarning] = useState(false)

  const loginRequest = () => {
    fetch('http://localhost:8000/login')
      .then(response => response.json())
      .then(json => {
        if (json.auth === 'false') {
          setShowWarning(true)
          console.log('Show Warning -> ' + showWarning)
        }
      })
  }

  return (
    <>
      <div className='card'>
        <form action='http://localhost:8000/login'>
          <div className='card-header'>Login to continue...</div>
          <div className='card-body form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter email'
              name='email'
            ></input>
          </div>

          <div className='card-body form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Enter Password'
              name='password'
            ></input>
          </div>

          {showWarning && (
            <div className='alert alert-warning'>
              <strong>Warning!</strong> This alert box could indicate a warning
              that might need attention.
            </div>
          )}

          <div className='card-body form-group'>
            <button
              type='button'
              onClick={loginRequest}
              className='btn btn-primary'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
