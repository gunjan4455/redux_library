import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const SearchBar = (props) =>  (
    <div className="row">
        <div className="col-sm-6 search-bar">
            <form onSubmit={props.onSubmit}>
                <div className="input-group add-on">
                    <input className="form-control" placeholder="Search" type="text" onChange={props.filterBooks}
                           value={props.searchKey}/>
                    {props.searchKey ?
                        <div onClick={props.reset} className="remove-icon"><Link to={props.path.url=='/home' ? '/home':'/search/'}><span
                            className="glyphicon glyphicon-remove"></span></Link>
                        </div> : ''
                    }
                    <div className="input-group-btn">
                        <Link to={`/search/${props.searchKey}`}>
                            <button className="btn btn-default" type="button"><i
                                className="glyphicon glyphicon-search"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
);

SearchBar.propTypes = {
    searchKey: PropTypes.string,
    reset: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    filterBooks: PropTypes.func.isRequired
};

export default SearchBar;
