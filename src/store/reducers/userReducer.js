const initState = {
    name: '',
    profileImage: '',
    favoriteMovies: [],
    popularMoviesList: [],
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            const {name, profileImage} = action.payload;
            return {
                ...state,
                name,
                profileImage,
            };

        case 'UPDATE_FAVORITE_LIST':
            return {
                ...state,
                favoriteMovies: action.payload,
            };

        case 'SET_MOVIES':
            return {
                ...state,
                popularMoviesList: action.payload,
            };

        case 'LOGOUT': {
            return {
                ...initState,
            };
        }

        default:
            return state;
    }
};

export default userReducer;
