import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


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
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/teachers'>Teacher</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/photos'>Photos</Link></li>
            <li><Link to='/enrolment'>Enrolment</Link></li>
          </ul>

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
