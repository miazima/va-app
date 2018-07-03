// @flow

import App from 'components/App';
import { connect } from 'react-redux';

import type { State } from 'types';

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const ContainedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ContainedApp;
