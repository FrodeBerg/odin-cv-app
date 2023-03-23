import './App.css';
import React from 'react';
import { General } from './components/General'
import { Educational } from './components/Educational'
//import ReactDOM from 'react-dom/client';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      Email : "",
      Name : "",
      Phone : "",
      Educational : [{
        school : "",
        title: "",
        date: "",
      }],
    };
  }
  
  setGeneralInput = (event) => {
    let target = event.target
    this.setState({
      [target.name] : target.value
    })
  }

  addEducational = () => {
    this.setState({
      Educational : [...this.state.Educational, {
        school : "",
        title: "",
        date: "",
      }]
    })
    console.log(this.state.Educational)
  }

  removeEducational = (event) => {
    let id = +event.target.parentNode.id
    this.setState({
      Educational : this.state.Educational.filter((_, index) => index !== id)
    })
  }

  setEducationalInput = (event) => {
    let id = +event.target.parentNode.id
    let target = event.target
    this.setState({
      Educational : this.state.Educational.map((item, index) => {
        if (id === index) {
          item[target.name] = target.value;
        }
        return item
      })
    })
    console.log(this.state.Educational)
  }

  render() {
    return (
      <div className='page'>
        <Header />
        <div className='main'>
          <Edit 
          setGeneralInput={this.setGeneralInput}
          addEducational={this.addEducational}
          removeEducational={this.removeEducational}
          setEducationalInput={this.setEducationalInput}
          Educational={this.state.Educational}
          />
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
        <General setInput={this.props.setGeneralInput} />
        <ul>
          {
            this.props.Educational.map((item, index) => (
              <Educational 
              key={index}
              identifiers={index}
              removeEducational={this.props.removeEducational}
              setEducationalInput={this.props.setEducationalInput}
              value={item}
              />              
            ))
          }
        </ul>
        <button onClick={this.props.addEducational}>Add</button>

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
