import React from 'react';

import { Link } from 'react-router-dom';

// connect
import { connect } from 'react-redux';

// import removeFavorite
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    // destructure favorites and set to props
    // favorites looks for a movie id and a movie title (below)
    // pass in removeFavorite as props
    const { favorites, removeFavorite } = props;
    
    // removeFavorite click
    const handleClick = (id) => {
        removeFavorite(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=>{handleClick(movie.id)}}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

// Connect the favorites state to the FavoriteMovieList component
const mapStateToProps = (state) => {
    return({
        favorites: state.favoritesReducer.favorites
    })
}

// add mapStateToProps to connect
// pass in removeFavorite
export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);