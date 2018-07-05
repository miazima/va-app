import {connect} from 'react-redux';
import {onSearch} from 'actions';
import SearchBar from 'components/SearchBar';

const mapStateToProps = state => {
  return {
    searchTerm: state.search.searchTerm
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearch: token => dispatch(onSearch(token))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SearchBar);