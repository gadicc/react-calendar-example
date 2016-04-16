import React from 'react';
import ReactDOM from 'react-dom';

import MyCalendar from '/imports/myCalendar';

Meteor.startup(() => {
  const root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
  ReactDOM.render(<MyApp />, root)
});

const MyApp = () => (
  <div>
    <h1>Calendar Example</h1>
    <MyCalendar />
  </div>
);
