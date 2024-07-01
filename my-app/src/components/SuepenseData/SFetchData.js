// import { useState, useEffect } from 'react'
import './SFetchData.css'
import React, { Suspense } from 'react'
// import Comp1 from './S_Comp1.js'

export default function SFetchData() {
  ///1. Fetch ON Render

  // const [data, setData] = useState(false)

  // useEffect((data) => {
  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //         .then(response => response.json())
  //         .then(json => setData(json.toString()))
  // }, [])
  // if (data === false) {
  //     return <h1 className="loading">Loading...</h1>
  // } else {
  //     return (
  //         <div>
  //         <h1>Hello World</h1>
  //             <h1 className="dataFetched">We Got the data form Fetching {data.toString()}</h1>
  //         </div>
  //     )

  ///2. Fetch THEN Render
  // const [data,setData] = useState("")

  // useEffect(() => {

  //     fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // }, [])

  // return (
  //         <div>
  //             <h1>Hello World</h1>
  //             <h1 className="datafetched">{data===""? "Fetching Data...." : data.toString()}</h1>
  //         </div>
  //     )

  /// 3. Suspense
  return (
    <Suspense
      fallback={
        <div>
          <div className='spinner-border text-danger' role='status'></div>
          <span>
            <h1>Loading......</h1>
          </span>
        </div>
      }
    >
      {/* <S_Comp1 /> */}
    </Suspense>
  )
}
