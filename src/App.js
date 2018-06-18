import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Biz Web',
          category: 'Web Design'
        },
        {
          title: 'Mobile Web',
          category: 'Social Media'
        },
        {
          title: 'Ecommerce Shopping cart',
          category: 'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      My app
      <Projects projects = {this.state.projects} />
      </div>
    );
  }
}

export default App;
