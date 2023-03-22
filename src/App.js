import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className='page'>
      <Header />
      <Footer />
    </div>
  );
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
