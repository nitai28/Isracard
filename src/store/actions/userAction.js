import axios from 'axios';


export const setUserDetails = (name, imgSrc, loginFrom) => {
    return (dispatch) => {
        dispatch({type: 'GET_USERS_SUCCESS', payload: {name, profileImage: imgSrc, loginFrom}});
    };
};


export const fetchMovies = () => {
    return async (dispatch) => {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=63fac5f00ea4f7e4cd8116557e149e53');
        let movies = res.data.results;
        let moviesAfterFilterData = [];
        movies.forEach(movie => {
            const {title, overview, poster_path, vote_average} = movie;
            moviesAfterFilterData.push({title, overview, poster_path, vote_average});
        });
        dispatch({type: 'SET_MOVIES', payload: moviesAfterFilterData});
    };
};

export const logout = () => {
    return dispatch => {
        dispatch({type: 'LOGOUT'});
    };
};
