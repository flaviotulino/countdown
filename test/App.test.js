import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from '../src/App';
import * as constants from '../src/Constants';

describe('App component', function() {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App date='05/02/2017'/>,div);

  it('props.date should be defined', function() {
    expect(app.props.date).toBeDefined();
  });

  it('state.days should be defined', function() {
    let daysLeft = Math.floor(new Date(app.props.date) - new Date()) / constants.MS_TO_DAYS_RATIO;
    app.setState({days: daysLeft});
    expect(app.state.days).not.toBeNaN();
  });

  it('props.date is formatted as MM/DD/YYYY', function () {
    expect(app.props.date).toMatch(/\d{2}\/\d{2}\/\d{4}/);
  });

  it('props.date is not formatted as MM/DD/YYYY', function () {
    const app2 = ReactDOM.render(<App date='a date'/>,div);
    expect(app2.props.date).not.toMatch(/\d{2}\/\d{2}\/\d{4}/);
  });

  it('getProgress() returns a percentage', function () {
    const wrapper = shallow(<App date='05/02/2017'/>);
    const app2 = wrapper.instance();
    expect(app2.getProgress()).toBeDefined();
  });
});
