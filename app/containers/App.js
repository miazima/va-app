// @flow

import SearchBar from 'components/SearchBar';
import { connect } from 'react-redux';

import type { State } from 'types';

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const ContainedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar)

export default ContainedSearchBar;
