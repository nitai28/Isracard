const initState = {
    userToUpdate: {},
    questionIdx: 0,
    users: [],
    finishRegistration: false,
    botQuestions: [],
    loadingQuestionsError: false,
    isMale: true,
    isWantMale: true,
    notificationId: ''
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload
            };

        case 'UPDATE_USER_DETAILS':
            return {
                ...state,
                questionIdx: action.payload
            };

        case 'INCREASE_QUESTION_IDX_BY_ONE':
            return {
                ...state,
                questionIdx: action.payload,
            };

        case 'GET_USER_TO_UPDATE':
            return {
                ...state,
                userToUpdate: action.payload,
            };
        case 'FINISH_REGISTRATION': {
            return {
                ...state,
                finishRegistration: true,
            };
        }
        case 'UPDATE_USER_SUCCESS':
            return {
                ...state,
            };

        case 'CHANGE_IS_UPDATED':
            return {
                ...state,
            };
        case 'SET_BOT_QUESTIONS':
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    botQuestions: [...state.botQuestions, ...action.payload]
                }
            } else {
                return {
                    ...state,
                    botQuestions: [...state.botQuestions, action.payload]
                }
            }

            case 'RELOAD_BOT_QUESTIONS':
                return {
                    ...state,
                    botQuestions: action.payload
                }

            case 'SET_LOADING_QUESTIONS_ERROR':
                return {
                    ...state,
                    loadingQuestionsError: action.payload,
                };

        case 'SET_IS_MALE':
            return {
                ...state,
                isMale: action.payload,
            };

        case 'NOTIFICATION_ID':
            return {
                ...state,
                notificationId: action.payload,
            };

            case 'SET_IS_WANT_MALE':
                return {
                    ...state,
                    isWantMale: action.payload
                }

                case 'NOTIFICATION_ID':
                    return {
                        ...state,
                        notificationId: action.payload
                    }

        default:
            return state;
    }
};

export default userReducer;
