const initState = {
    name: '',
    profileImage: '',
    favoriteMovies: [],
    loginFrom: '',
    popularMoviesList: [],
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            const {name, profileImage, loginFrom} = action.payload;
            return {
                ...state,
                name,
                profileImage,
                loginFrom,
            };

        case 'UPDATE_FAVORITE_LIST':
            const {favoriteMovies} = action.payload;
            return {
                ...state,
                favoriteMovies,
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
