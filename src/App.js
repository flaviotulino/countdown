import React, { Component } from 'react';
import './App.scss';
import * as constants from './Constants';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      days: null
    };
  }

  componentWillMount() {
    let daysLeft = Math.floor((new Date(this.props.date) - new Date()) / constants.MS_TO_DAYS_RATIO);
    this.setState({days: daysLeft});
  }

  render() {
    return (
      <div className='countdown'>
        <span>{this.state.days}</span><span>day</span>{this.state.days > 1 && <span>s</span>} left
      </div>
    );
  }
}

export default App;
