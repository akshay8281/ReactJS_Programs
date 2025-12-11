// import { useState } from 'react'
import './Form.css'

export default function Form () {
  let id, title, body, userID
  const sendData = e => {
    e.preventDefault()
    // console.log('Call BTN')

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userID: userID
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(rowResponse => rowResponse.json())
      .then(json => console.log(json))
  }

  return (
    <div className='container_form'>
      <form>
        <div>
          <h1>Login To Continue...</h1>
        </div>
        <div>
          <input
            type='text'
            onChange={e => {
              id = e.target.value
            }}
            placeholder='ID Number'
          ></input>
        </div>
        <div>
          <input
            type='text'
            onChange={e => {
              title = e.target.value
            }}
            placeholder='Enter a Title'
          ></input>
        </div>
        <div>
          <input
            type='text'
            onChange={e => {
              body = e.target.value
            }}
            placeholder='Enter Description'
          ></input>
        </div>
        <div>
          <input
            type='text'
            onChange={e => {
              userID = e.target.value
            }}
            placeholder='Enter User ID'
          ></input>
        </div>
        <button onClick={sendData}>Submit</button>
      </form>
    </div>
  )
}

