import React from 'react';

import ResultItem from './ResultItem'
// import './style.scss';

export default class ResultsList extends React.Component {

  getResultItems() {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.map(
      n => <div id={n}><ResultItem /></div>
    );
  }

  render() {
    return (
      <div>
        Results go here
        <div>{this.getResultItems()}</div>
      </div>
    )
  }
}