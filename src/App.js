import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock';
import Comments from './Comments';
import Composition from './Composition';
import Form from './Form';
import Menu from './Menu';
import SearchableTable from './SearchableTable';
import TempCalculator from './TempCalculator';


const Welcome = (props) => <h1>Hello {props.name}</h1>;

const components = ['Clock', 'Comments', 'Form', 'TempCalculator', 'Composition', 'SearchableTable'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'SearchableTable'
    };

    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(name) {
    this.setState({
      component: name
    });
  }

  render() {
    const getComponent = (component) => {
      switch (component) {
        case 'Clock':
          return <Clock />;
        case 'Comments':
          return <Comments />;
        case 'Form':
          return <Form />
        case 'TempCalculator':
          return <TempCalculator />
        case 'Composition':
          return <Composition />;
        case 'SearchableTable':
          return <SearchableTable />
        default:
          return <TempCalculator />
      }
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Menu components={components} onChange={this.changeComponent} />
        <Welcome name='Someone' />

        {getComponent(this.state.component)}
      </div>
    );
  }
}

export default App;
