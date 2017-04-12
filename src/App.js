import React, { Component } from 'react';
import './App.css';
import * as constants from './Constants';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      days: null,
      progress: 0
    };
  }

  componentWillMount() {
    let daysLeft = Math.floor((new Date(this.props.date) - new Date()) / constants.MS_TO_DAYS_RATIO);
    this.setState({days: daysLeft});

    let maxProgress = Math.floor(this.getProgress(daysLeft));
    setTimeout(() => {
      let interval = setInterval (() => {
        if (this.state.progress == maxProgress - 1) {
          clearInterval(interval);
        } else {
          this.setState({progress: this.state.progress + 1});
        }
      },10);
    },2000);
  }

  getProgress(days) {
    return 100 - (days / 100 ) * 100;
  }

  render() {
    return (
      <div className='countdown'>
        <div>
          <div className='row'>
            <span className='col countdown__days'>{this.state.days}</span>
            <span className='col countdown__label'><span>day</span>{this.state.days > 1 && <span>s</span>}</span>
            <span className='col countdown__left'>left</span>
          </div>
          <div className='row'>
            <progress value={this.state.progress} max="100"></progress>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
