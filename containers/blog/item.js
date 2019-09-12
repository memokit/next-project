import { connect } from 'react-redux';
import { fetchItemData } from '../../redux/actions/blog';
import Blog from '../../components/Blog';

const mapStateToProps = state => ({
  result: state.blog.item.result
});

const mapDispatchToProps = dispatch => ({
  fetchItemData: id => {
    dispatch(fetchItemData(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
