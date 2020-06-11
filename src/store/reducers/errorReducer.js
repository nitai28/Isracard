const initState = {
    showDialog: false,
    message: 'Something went wrong',
    headLine: '',
    errorMode: true,
};

const errorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CLOSE_DIALOG':
            return {
                ...state,
                showDialog: false,
                headLine: '',
                errorMode: true,
                message: 'Something went wrong',
            };
        case 'SHOW_DIALOG_WITH_MESSAGE':
            let {message, headLine, errorMode} = action.payload;
            return {
                showDialog: true,
                message: message,
                headLine: headLine,
                errorMode: errorMode,
            };
        default:
            return state;

    }
};

export default errorReducer;
