import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Teacher from './Teacher'
import Events from './Events'
import Photos from './Photos'
import Songs from './Songs'
import Login from './Login'
import Register from './Register'

const App = () => {
  return (
    <div>
    <Navbar />
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/teachers' component={Teacher} />
        <Route path='/events' component={Events} />
        <Route path='/photos' component={Photos} />
        <Route path='/songs' component={Songs} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </Router>
    </div>
  )
}

export default App
