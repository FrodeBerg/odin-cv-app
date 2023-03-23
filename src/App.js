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
    this.addExperience("Educational")
  }

  removeEducational = (event) => {
    const id = +event.target.parentNode.id
    this.removeExperience(id, "Educational")
  }
  removePractical = (event) => {
    const id = +event.target.parentNode.id
    this.removeExperience(id, "Practical")
  }

  setEducationalInput = (event) => {
    this.setExperienceInput(event.target, "Educational")
  }
  setPracticalInput = (event) => {
    this.setExperienceInput(event.target, "Practical")
  }

  addExperience(category) {
    this.setState({
      [category] : [...this.state.Educational, {
        school : "",
        title: "",
        date: "",
      }]
    })
  }

  removeExperience(id, category) {
    this.setState({
      [category] : this.state[category].filter((_, index) => index !== id)
    })
  }

  setExperienceInput(target, category) {
    let id = +target.parentNode.parentNode.id
    this.setState({
      [category] : this.state.Educational.map((item, index) => {
        if (id === index) {
          item[target.name] = target.value;
        }
        return item
      })
    })  
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
        <General setInput={this.props.setGeneralInput} value={this.props} />
        <h3>Educational Experience:</h3>
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
