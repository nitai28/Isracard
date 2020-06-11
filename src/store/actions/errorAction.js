export const closeErrorDialog = () => {
    return (dispatch) => {
        dispatch({type: 'CLOSE_DIALOG'});
    };
};

export const showDialogAndSetMessage = (message, headLine = '', errorMode = true) => {
    return (dispatch) => {
        dispatch({type: 'SHOW_DIALOG_WITH_MESSAGE', payload: {message, headLine, errorMode}});
    };
};
