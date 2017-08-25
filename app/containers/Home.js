import { connect } from 'react-redux';
import { getBooksAsync } from '../actions';
import HomeComponent from '../components/Home';
import { getBooks } from '../utility/selectors';

const mapStateToProps = ({ state }, props) => {
    return {
        books: getBooks(state, props)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooksAsync: () => dispatch(getBooksAsync())
    };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default Home;
