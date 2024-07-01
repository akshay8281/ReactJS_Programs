import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App/App'
// import './index.css'
import LazyComp from './components/SuepenseData/LazyComp'
import './components/SuepenseData/SFetchData.css'
import ErrorBoundary from './components/SuepenseData/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>

  <ErrorBoundary>
    <Suspense
      fallback={
        <div className='loadSign'>
          <div className='spinner-border text-danger spin' role='status'></div>
          <h1 className='sr-only loading'>Loading...</h1>
        </div>
      }
    >
      <LazyComp />
    </Suspense>
  </ErrorBoundary>
)
