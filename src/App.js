import './App.css';
import React from 'react';
import { General } from './components/General'
//import ReactDOM from 'react-dom/client';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      input : "",
    };
  }
  
  setInput = (input) => {
    input = input.target.value
    console.log(input)
    this.setState({
      input : input
    })
  }

  render() {
    return (
      <div className='page'>
        <Header />
        <div className='main'>
          <Edit setInput={this.setInput}/>
          <Finished />
        </div>
        <Footer />
      </div>
    );
  }
  
}
class Finished extends React.Component {
  render () {
    return (
      <div className='finished'>

      </div>
    )
  }
}
class Edit extends React.Component {

  render() {
    return (
      <div className='edit'>
        <General setInput={this.props.setInput} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (  
    <div className='header'>
      <h1>Cv Application</h1>
    </div>)
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div className='footer'>
        <h4>Frolle Productions</h4>
      </div>
    )
  }
}

export default App;
