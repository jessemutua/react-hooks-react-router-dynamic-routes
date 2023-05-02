import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
    const match = useRouteMatch();
    return ( <
        div >
        <
        div >
        <
        MoviesList movies = { movies }
        /> <
        Route exact path = { match.url } >
        <
        h3 > Choose a movie from the list above < /h3> <
        /Route> <
        Route path = { `${match.url}/:movieId` } > { /* adding the movies object as a prop to MovieShow */ } <
        MovieShow movies = { movies }
        /> <
        /Route> <
        /div>

        <
        /div>
    );
}
export default MoviesPage;