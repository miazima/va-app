import React from 'react';

import Search from 'containers/Search';
import ResultsList from 'components/ResultsList';
// import './style.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <ResultsList />
      </div>
    );
  }
}
