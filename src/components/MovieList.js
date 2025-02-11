import React from 'react';

// import connect method
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    // update movies = [] and destructure to props, movies we get are movies passed in
    const { movies } = props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

// create mapStateToProps to add movies to props
// upon combining reducers, movies will not be obtained by state, must update state.movies to state.movieReducer.movies
const mapStateToProps = (state) => {
    return ({
        movies: state.movieReducer.movies
    })
}

// connect to MovieList
export default connect(mapStateToProps)(MovieList);
