import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes(true)

  return (
    <Router>
      <div className="app_container">
        <h1>
          das
        </h1>
      </div>
    </Router>
  );
}

export default App