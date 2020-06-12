import axios from 'axios';

export const setUserDetails = (name, imgSrc) => {
    return (dispatch) => {
        dispatch({type: 'GET_USERS_SUCCESS', payload: {name, profileImage: imgSrc}});
    };
};


export const fetchMovies = () => {
    return async (dispatch) => {
        const res = await axios.get('/');
        dispatch({type: 'SET_MOVIES', payload: {name, profileImage: imgSrc}});
    };
};
