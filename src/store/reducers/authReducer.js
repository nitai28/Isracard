const initState = {
  authError: null,
  userLogged: null,
  isAuthenticated: false,
  token: '',
  refreshToken: '',
  userId: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.payload,
      };

    case 'SIGNIN_SUCCESS': {
      return {
        ...state,
        token: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        authError: null,
        userId: action.payload.userId,
      };
    }

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {
        ...state,
        userLogged: null,
        isAuthenticated: false,
      };

    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        userLogged: action.payload,
        authError: null,
      };

    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.payload,
      };

    case 'SIGNOUT_FAILED':
      console.log('signout error');
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default authReducer;
