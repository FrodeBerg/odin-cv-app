import './App.css';
import React from 'react';
import { General } from './components/General'
import { Educational } from './components/Educational'
import { Practical } from './components/Practical';
//import ReactDOM from 'react-dom/client';

class App extends React.Component {
  
  constructor() {
    super();
    this.Educational = {
      school : "",
      title: "",
      date: "",
    }
    this.Practical = {
      company : "",
      position : "", 
      tasks : "", 
      time : "", 
    }
    this.General = {
      email : "", 
      name : "", 
      phone : "", 
    }
    this.functions = {}
    this.state = {
      General : [this.General],
      Educational : [Object.assign({}, this.Educational)],
      Practical : [Object.assign({}, this.Practical)],
    };
  }

  getParent(element, depth){
    if (depth <= 0) return element
    return this.getParent(element.parentNode, depth-1)
  }

  addCategory = event => {
    const category = event.target.parentNode.id
    this.setState({
      [category] : [...this.state[category], Object.assign({}, this[category])]
    })
  }

  removeCategory = event => {
    const target = event.target
    const id = +this.getParent(target, 1).id
    const category = this.getParent(target, 4).id
    this.setState({
      [category] : this.state[category].filter((_, index) => {return index !== id})
    })
  }

  setInput = event => {
    const target = event.target
    const category = this.getParent(target, 5).id
    let id = +this.getParent(target, 2).id
    console.log(this.state[category])
    this.setState({
      [category] : this.state[category].map((item, index) => {
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
          functions={{
            setInput : this.setInput,
            remove : this.removeCategory,
            addCategory : this.addCategory,
          }}
          general={this.state.General}
          educational={this.state.Educational}
          practical={this.state.Practical}
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
  constructor(props) {
    super()
    this.props = props
  }
  render() {
    return (
      <div className='edit'>
        <Category id="General" title="General" category={this.props.general} functions={this.props.functions} component={General}/>
        <Category id="Educational" title="Educational Experience:" category={this.props.educational} functions={this.props.functions} component={Educational}/>
        <Category id="Practical" title="Practical Experience: " category={this.props.practical} functions={this.props.functions} component={Practical}/>
      </div>
    )
  }
}

class Category extends React.Component {
  constructor(props) {
    super()
    this.props = props
    console.log(this.props.category)
  }
  render() {
    return (
      <div id={this.props.id}>
        <h3>{this.props.title}</h3>
        <ul>
          {
            this.props.category.map((item, index) => (
              <li key={index}>
                < this.props.component 
                identifier={index}
                value={item}
                remove={this.props.functions.remove}
                setInput={this.props.functions.setInput}
                />
              </li>
            ))
          }
        </ul>
        {
          this.props.title !== "General" ? 
          <button onClick={this.props.functions.addCategory}>Add</button> :
          ""
        }
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
