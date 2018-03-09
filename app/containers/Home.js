import { connect } from 'react-redux';
import { getBooksAsync, selectChance, resetGame } from '../actions';
import HomeComponent from '../components/Home';
import { getBooks } from '../utility/selectors';

const mapStateToProps = ({ state }, props) => {
    return {
        books: getBooks(state, props),
        game: state.game
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooksAsync: () => dispatch(getBooksAsync()),
        select: (index) => dispatch(selectChance(index)),
        reset: () => dispatch(resetGame())
    };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default Home;
