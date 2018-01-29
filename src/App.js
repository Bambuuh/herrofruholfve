import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import CG from './components/cg'
import Section from './components/Section'

class App extends Component {
  render() {
    return (
      <div className="container is-tablet">
        <CG />
        <Section className="welcome-text-container">
          <span className="welcome-text cursive">Välkommen till vårt bröllop</span>
        </Section>
        <Section className="name-section">
          <div className="name-container italic">
            <div>Cecilia Lundblad</div>
            <span className="ampersand">&</span>
            <div>Gustav Holfve</div>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
