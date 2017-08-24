import React from "react";
import PropTypes from "prop-types";
import {renderBooksList} from "../../utility";
import SearchBar from "../shared/SearchBar";
import BackButton from '../shared/BackButton';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchKey: this.props.match.params && this.props.match.params.book ? this.props.match.params.book : '',
            noResultFound: false,
            onSearch: false
        };
        this.filterBooks = this.filterBooks.bind(this);
        this.reset = this.reset.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getBooksAsync();
    }

    filterBooks(event) {
        this.setState({searchKey: event.target.value.toLowerCase()});
    }

    reset() {
        this.setState({searchKey: ''});
        this.props.getBooksAsync();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchKey}`);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params && nextProps.match.params.book)
            this.setState({searchKey: nextProps.match.params.book, onSearch: true});
        else if(nextProps.match.params && nextProps.match.params.hasOwnProperty('book'))
            this.setState({searchKey: '',onSearch: true});
        else
            this.setState({searchKey: '',onSearch: false});
    }

    render() {
        return (
            <div>
                <section className="container bg-gray">
                    {this.state.onSearch && <BackButton/>}
                    <div className="wraper">
                        <SearchBar 
                            filterBooks={this.filterBooks} 
                            reset={this.reset} 
                            searchKey={this.state.searchKey}
                            onSubmit={this.onSubmit} 
                            path={this.props.match}
                        />
                        {this.props.books && this.props.books.length ?
                            <div className="row book">{renderBooksList(this.props.books)}</div> :
                            <div>
                                <br/>
                                <div className="alert alert-info ">
                                    <strong>No Books found.</strong> Try Again.
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        )
    }
}

Home.propTypes = {
    getBooksAsync: PropTypes.func.isRequired,
    books: PropTypes.array,
    history: PropTypes.object.isRequired
};

export default Home;

