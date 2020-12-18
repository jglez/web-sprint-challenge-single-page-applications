import React from "react"
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <div className='container'>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/pizza'>
          <Form />
        </Route>

      </div>
    </>
  );
};
export default App;
