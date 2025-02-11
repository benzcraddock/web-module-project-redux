import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import toggle favorites actions creator
import { toggleFavorites } from '../actions/favoritesActions';

const MovieHeader = (props) => {
    const { appTitle, displayFavorites, toggleFavorites } = props;

    // click handler for toggle favorites
    const handleClick = () => {
        toggleFavorites();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

// create mapStateToProps and pass into connect argument, connect to appTitle
// change state to state.movieReducer.appTitle
// Connect the displayFavorites state to the MovieHeader component
const mapStateToProps = (state) => {
    return ({
        displayFavorites: state.favoritesReducer.displayFavorites,
        appTitle: state.movieReducer.appTitle
    })
}

// add connect, linke toggle favorites to component
export default connect(mapStateToProps, {toggleFavorites})(MovieHeader);
