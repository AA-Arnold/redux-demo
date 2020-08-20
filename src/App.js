import React from 'react';
import { connect } from 'react-redux'
import { click } from './Action'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {
    const { ctr, click, clickDec } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {ctr}
          </p>
          <button onClick={click}>click</button>
          <button onClick={clickDec}>click-Dec</button>
        </header>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
}

const mapStateToDispatch = dispatch => {
  return {
    click: () => dispatch(click()),//i used action.js here
    clickDec: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
