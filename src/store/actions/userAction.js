import tracker from '../../api/tracker'
import { navigate } from '../../navigationRef';


export const updateUser = (userDetails, signupPlace = {}, geoPoint = null, ) => {
    console.log("update user", userDetails);
    return (dispatch) => {
        tracker.post(`api/user`, { userDetails, signupPlace, geoPoint })//for test with preeti
            .then(res => {
                dispatch({ type: 'UPDATE_USER_SUCCESS' });
                console.log('UPDATE_USER_SUCCESS')
            }).catch((err) => {
                dispatch({ type: 'UPDATE_USER__ERROR', err });
                console.log('UPDATE_USER__ERROR', err)
            });
    };
};


export const finishRegistration = () => {
    return (dispatch) => {
        dispatch({ type: 'FINISH_REGISTRATION' });
    };
};

export const getBotQuestions = (language, isMale, isWantMale, countryCode) => {
    return (dispatch, getState) => {
        tracker.post('/api/language/bot', { language, isMale, isWantMale, countryCode })
            .then(res => {
                dispatch({ type: 'SET_BOT_QUESTIONS', payload: res.data })
            }).catch(err => {
                console.warn("getBotQuestions error", err)
                dispatch({ type: 'SET_LOADING_QUESTIONS_ERROR', payload: true })
            })
    }
}

export const getBotQuestionsNev = (language, isMale, isWantMale, countryCode, params) => {
    return (dispatch, getState) => {
        tracker.post('/api/language/bot', { language, isMale, isWantMale, countryCode })
            .then(res => {
                dispatch({ type: 'SET_BOT_QUESTIONS', payload: res.data })
                console.log("Bot Navigate")
                navigate('Bot', params)

            }).catch(err => {
                console.warn("getBotQuestions error", err)
                dispatch({ type: 'SET_LOADING_QUESTIONS_ERROR', payload: true })
            })
    }
}

export const setBotQuestions = (objects) => {
    return (dispatch) => {
        dispatch({ type: 'SET_BOT_QUESTIONS', payload: objects })
    }
}

export const setLoadingQuestionsError = (isError) => {
    return (dispatch) => {
        dispatch({type: 'SET_LOADING_QUESTIONS_ERROR', payload: isError});
    };
}

export const setIsMale = (isMale) => {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_MALE', payload: isMale })
    }
}

export const setIsWantMale = (isWantMale) => {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_WANT_MALE', payload: isWantMale })
    }
}

export const setNotificationId = (notificationId) => {
    return (dispatch) => {
        dispatch({ type: 'NOTIFICATION_ID', payload: notificationId })
    }
}
