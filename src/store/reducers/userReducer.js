const initState = {
    name: '',
    profileImage: '',
    favoriteMovies: [],
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
            const {favoriteMovies} = action.payload;
            return {
                ...state,
                favoriteMovies,
            };

        default:
            return state;
    }
};

export default userReducer;
