import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Contacts from './lib/Contacts'
import ContactInfo from './lib/ContactInfo'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Contacts } />
    <Route path="/contactinfo/:contact" component={ ContactInfo } />
  </Router>
), document.getElementById('app'))
