const initState = {
  currentQuestion: null,
  timerMode: false,
  lostConnection: false,
  videoPause: false,
  onCall: false,
  showSecondDialog: false,
  userDatePhone: '',
  unsuccessfulDate: false,
  successfulDate: false,
  meConnectionStatus: true,
  meOnCallMode: false,
  isMedian: false,
  medianText: '',
  hasLeft: false,
  isMiddleEnd: false,
  isReload: false,
  dateInfo: null,
  meetingTimestamp: null,
  onVideo:false
};

const videoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: { ...action.payload },
      };

    case 'UPDATE_TIMER_MODE': {
      return {
        ...state,
        timerMode: true
      }
    }
    case 'SET_LOST_CONNECTION': {
      return {
        ...state,
        lostConnection: true
      }
    }

    case 'SET_MEDIAN': {
      return {
        ...state,
        isMedian: action.payload,
        medianText: action.payload ? 'עברתם בהצלחה חצי דייט, ועכשיו לשאלות טיפה יותר עמוקות ' +
          'מוכנים , לחצו על הכפתור' : '',
        currentQuestion: null,

      }
    }

    case 'CHANGE_USER_CONNECTION_STATUS': {
      return {
        ...state,
        meConnectionStatus: action.payload
      }
    }

    case 'VIDEO_PAUSE': {
      return {
        ...state,
        videoPause: true
      }
    }

    case 'SHOW_SECOND_VIDEO_MODAL': {
      return {
        ...state,
        showSecondDialog: action.payload
      }
    }

    case 'VIDEO_CALL_INCOMING': {
      return {
        ...state,
        onCall: true
      }
    }

    case 'RESET_VIDEO_ERROR': {
      return {
        ...state,
        lostConnection: false,
        videoPause: false,
        onCall: false,
        hasLeft: false
      }
    }

    case 'SET_USER_DATE_PHONE': {
      return {
        ...state,
        userDatePhone: action.payload.phone,
        successfulDate: action.payload.ans
      }
    }

    case 'CHANGE_USER_PHONE_CALL_MODE': {
      return {
        ...state,
        meOnCallMode: action.payload
      }
    }

    case 'UNSUCCESSFUL_DATE': {
      return {
        ...state,
        unsuccessfulDate: action.payload,
      }
    }

    case 'HAS_LEFT': {
      return {
        ...state,
        hasLeft: action.payload
      }
    }

    case 'IS_MIDDLE_END': {
      return {
        ...state,
        isMiddleEnd: action.payload,
      }
    }

    case 'IS_RELOAD': {
      return {
        ...state,
        isReload: action.payload,
      };
    }
    case 'DATE_INFO': {
      console.log(action.payload,'%%%%');
      return {
        ...state,
        dateInfo: action.payload.dateInfo,
        meetingTimestamp: action.payload.meetingTimestamp,
        onVideo: true
      };
    }

    default:
      return state;
  }
};

export default videoReducer;
