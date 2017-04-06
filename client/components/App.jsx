import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'


import Home from './Home'
import About from './About'
import Teacher from './Teacher'
import Events from './Events'
import Photos from './Photos'
import Enrolment from './Enrolment'

const App = () => {
  return (
    <Router>
      <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/teachers' component={Teacher} />
      <Route path='/events' component={Events} />
      <Route path='/photos' component={Photos} />
      <Route path='/enrolment' component={Enrolment} />
      </div>
    </Router>
  )
}

export default App
