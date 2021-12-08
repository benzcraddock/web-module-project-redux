import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// import connect
import { connect } from 'react-redux';

// import action deleteMovie
import { deleteMovie } from '../actions/movieActions';

// import action addFavorite
import { addFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    // update movies = [] and destructure to props, movies we get are movies passed in
    // extend movies with deleteMovie
    // extend with displayFavorites as well
    // extend with addFavorite
    const { movies, deleteMovie, displayFavorites, addFavorite } = props;
    const movie = movies.find(movie=>movie.id===Number(id));

    // create handleDeleteClick and pass in deleteMovie with id
    const handleDeleteClick = () => {
        deleteMovie(movie.id);
        push('/movies');
    }
    
    const handleFavorite = () => {
        addFavorite(movie);
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {displayFavorites && <span onClick={handleFavorite} className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete" onClick={handleDeleteClick}><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

// create mapStateToProps and pass into connect argument
const mapStateToProps = (state) => {
    return({
        displayFavorites: state.favoritesReducer.displayFavorites,
        movies: state.movieReducer.movies
    })
}

// add connect and pass in deleteMovie action
// also pass in addFavorite action
export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);
