const initState = {
    fullyMatchesListMap: new Map(),
    matching: [],
    sentMeetings: [],
    incomingMeetings: [],
    approvedMeetings: [],
    endedMeetings: [],
    countNewMatches: 0,
    noMatchesFound: false,
    countUnseenIncomingMeetings: 0,
    countUnseenSentMeetings: 0,
    initialVideoStatusPage: -1,
};

const matchingReducer = (state = initState, action) => {
    switch (action.type) {
        // case 'GET_MATCHING_SUCCESS':
        //     return {
        //         ...state,
        //         matching: action.payload.matchList,
        //         sentMeetings: action.payload.sentMeetings,
        //         incomingMeetings: action.payload.incomingMeetings,
        //         approvedMeetings: action.payload.approvedMeetings,
        //         fullyMatchesListMap: action.payload.fullyMatchesListMap,
        //         endedMeetings:action.payload.endedMeetings,
        //     };

        case 'GET_NEW_MATCHING_SUCCESS':
            return {
                ...state,
                matching: action.payload.matchList,
                countNewMatches: action.payload.newMatchesLength,
                fullyMatchesListMap: action.payload.fullyMatchesListMap,

            };

        case 'UPDATE_MATCH_STATUS':
            return {
                ...state,
                matching: action.payload,
            };

        case 'GET_MEETING_REQUEST':
            return {
                ...state,
                getMeetings: action.payload,
            };

        case 'SET_INITIAL_PAGE_VIDEO_STATE':
            return {
                ...state,
                initialVideoStatusPage: action.payload,
            };

        case 'GET_SENT_MEETING_REQUEST':
            return {
                ...state,
                sentMeetings: action.payload,
            };

        case 'UPDATE_ALL_INFO':
            return {
                ...state,
                matching: action.payload.matchList,
                sentMeetings: action.payload.sentMeetings,
                incomingMeetings: action.payload.incomingMeetings,
                approvedMeetings: action.payload.approvedMeetings,
                endedMeetings: action.payload.endedMeetings,
                fullyMatchesListMap: action.payload.fullyMatchesListMap,
                countUnseenIncomingMeetings: action.payload.newIncomingMeetings,
                countUnseenSentMeetings: action.payload.newOutGoingMeetings,
                countNewMatches: action.payload.newMatches,
            };


        case 'NO_MATCH_FOUND':
            return {
                ...state,
                noMatchesFound: true,
            };


        case 'UPDATE_NEW_MATCHES_COUNT':
            return {
                ...state,
                countNewMatches: state.countNewMatches - action.payload,
            };

        default:
            return state;
    }
};

export default matchingReducer;
