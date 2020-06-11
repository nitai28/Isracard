
export const updateCurrentQuestion = (question) => {
    return (dispatch) => {
        if (question) {
            dispatch({type: 'UPDATE_CURRENT_QUESTION', payload: question});
        }
    };
};

export const changeTimerMode = () => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_TIMER_MODE' });
    };
}

export const lostConnection = () => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOST_CONNECTION' })
    }
}

export const reconnectVideo = () => {
    return (dispatch) => {
        dispatch({ type: 'RESET_VIDEO_ERROR' })
    }
}

export const setPause = () => {
    return (dispatch) => {
        dispatch({ type: 'VIDEO_PAUSE' })
    }
}

export const setOnCall = () => {
    return (dispatch) => {
        dispatch({ type: 'VIDEO_CALL_INCOMING' })
    }
}

export const showSeondVideoDialog = (ans = false) => {
    return (dispatch) => {
        dispatch({ type: 'SHOW_SECOND_VIDEO_MODAL', payload: ans })
    }
}

export const setSuccessDate = (ans = false, phone) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_USER_DATE_PHONE', payload: { phone, ans }
        })
    }
}

export const setUnsuccessfulDate = (ans = false) => {
    return (dispatch) => {
        dispatch({
            type: 'UNSUCCESSFUL_DATE', payload: ans
        })
    }
}

export const setCurrentUserConnection = (isConnect) => {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_USER_CONNECTION_STATUS', payload: isConnect
        })
    }
}

export const setCurrentUserOnCall = (isOnCall) => {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_USER_PHONE_CALL_MODE', payload: isOnCall
        })
    }
}

export const setMedian = (ans) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_MEDIAN', payload: ans
        })
    }
}

export const setHasLeft = (hasLeft) => {
    return (dispatch) => {
        dispatch({
            type: 'HAS_LEFT', payload: hasLeft
        })
    }
}

export const setIsMiddleEnd = (isEnd) => {
    return (dispatch) => {
        dispatch({type: 'IS_MIDDLE_END', payload: isEnd});
    };
};

export const setIsReload = (isReload) => {
    return (dispatch) => {
        dispatch({type: 'IS_RELOAD', payload: isReload});
    };
};


export const setDateInfo = (dateInfo, meetingTime) => {
    console.log(4445544545, dateInfo, meetingTime);
    return (dispatch) => {
        dispatch({type: 'DATE_INFO', payload: {dateInfo, meetingTimestamp: meetingTime,onVideo:true}});
    };
};
