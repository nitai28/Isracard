import userService from "../../services/userService";
import tracker from '../../api/tracker';

export const loadMatchList = (matchList) => {
    console.log('loadMatchList Action');
    return (dispatch) => {
        const data = userService.sortMapToArraysByType(matchList);
        dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchList, ...data}});
    };
};

export const refreshMatchingList = () => {
    console.log('refreshMatchingList Action');
    return async (dispatch) => {
        await tracker.get('/api/matching/matchlist/').then(res => {
            const matches = new Map(JSON.parse(res.data));
            if (matches.size > 0) {
                const data = userService.sortMapToArraysByType(matches);
                dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matches, ...data}});
            } else {
                dispatch({type: 'NO_MATCH_FOUND'});
            }
        }).catch(e => {
            // console.log('###',e.response);
        });
    };
};

export const addNewMatchingToList = (newMatch) => {
    console.log('addNewMatchingToList Action');
    return (dispatch, getState) => {
        if (!getState().matching.fullyMatchesListMap.has(newMatch.userId)) {
            const matchesListMap = getState().matching.fullyMatchesListMap;
            matchesListMap.set(newMatch.userId, {...newMatch});
            const matchList = [newMatch, ...getState().matching.matching];
            dispatch({
                type: 'GET_NEW_MATCHING_SUCCESS',
                payload: {
                    matchList,
                    newMatchesLength: getState().matching.countNewMatches + 1,
                    fullyMatchesListMap: matchesListMap,
                },
            });
        }
    };
};

export const updateNewMatchesCount = (seenMatchesLength) => {
    console.log('updateNewMatchesCount Action');
    return async (dispatch) => {
        dispatch({type: 'UPDATE_NEW_MATCHES_COUNT', payload: seenMatchesLength});
    };
};


export const updateMatchDetails = (matchObj, status = null) => {
    return async (dispatch, getState) => {
        const matchesListMap = new Map(getState().matching.fullyMatchesListMap);
        if (matchesListMap.has(matchObj.userId)) {
            console.log('updateMatchDetails Action after map check');
            if (!status) {
                matchesListMap.set(matchObj.userId, matchObj);
            } else {
                if (status === 'success' || status === 'unsuccess') {
                    console.log('success');
                    let updatedMatchObj = {...matchesListMap.get(matchObj.userId), ...matchObj};
                    console.log(updatedMatchObj);
                    matchesListMap.set(matchObj.userId, updatedMatchObj);
                }
            }
        }
            const data = userService.sortMapToArraysByType(matchesListMap);
            dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchesListMap, ...data}});
    };
};


export const updateMatchStatus = (id, status) => {
    return async (dispatch, getState) => {
        let matchList = [...getState().matching.matching];
        matchList.map(match => {
            if (match.id === id) {
                match.status = status;
            }
        });
        dispatch({type: 'UPDATE_MATCH_STATUS', payload: matchList});
    };
};

export const updateManyMatchesStatus = (matchesIds, status) => {
    console.log('updateManyMatchesStatus Action');
    return async (dispatch, getState) => {
        const matchesMap = getState().matching.fullyMatchesListMap;
        matchesIds.forEach(matchId => {
            if (matchesMap.has(matchId)) {
                if (matchesMap.get(matchId).status !== 'banned') {
                    matchesMap.get(matchId).status = status;
                }
            }
            const data = userService.sortMapToArraysByType(matchesMap);
            dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchesMap, ...data}});
        });
    };
};

//if status change status for many if not delete many after rejected matches seen
export const updateManyMeetingsStatus = (matchesIds, status = '') => {
    console.log('updateManyMeetingsStatus Action');
    return async (dispatch, getState) => {
        const matchesMap = new Map(getState().matching.fullyMatchesListMap);
        matchesIds.forEach(matchId => {
            (!status) ?
                matchesMap.delete(matchId)
                : matchesMap.has(matchId) ? matchesMap.get(matchId).meetingStatus = status : null;
        });
        const data = userService.sortMapToArraysByType(matchesMap);
        dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchesMap, ...data}});
    };
};


export const updateMeetingStatus = (meetingId, status, meetingTime = null) => {
    console.log('updateMeetingStatus Action');
    return async (dispatch, getState) => {
        const matchesMap = getState().matching.fullyMatchesListMap;
        if (matchesMap.has(meetingId)) {
            if (status === 'rejected' || status === 'canceled') {
                matchesMap.get(meetingId).meetingTime = '';
                matchesMap.get(meetingId).meetingStatus = '';
                matchesMap.get(meetingId).meetingType = '';
            } else if (status === 'setTime' && meetingTime) {
                matchesMap.get(meetingId).meetingTime = meetingTime;
                matchesMap.get(meetingId).meetingStatus = 'waitApprove';
            } else {
                matchesMap.get(meetingId).meetingStatus = status;
            }
            const data = userService.sortMapToArraysByType(matchesMap);
            dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchesMap, ...data}});
        }
    };
};

export const updateMeetingStatusAfterCreated = (id, meetingTime) => {
    console.log('updateMeetingStatusAfterCreated Action');
    return async (dispatch, getState) => {
        const matchesMap = getState().matching.fullyMatchesListMap;
        const currentMatch = matchesMap.get(id);
        currentMatch.meetingTime = meetingTime / 1000;
        currentMatch.meetingStatus = 'waitApprove';
        currentMatch.meetingType = 'outgoing';
        matchesMap.set(id, currentMatch);
        const data = userService.sortMapToArraysByType(matchesMap);
        dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchesMap, ...data}});
    };
};

export const updateMeeting = (meetingObj) => {
    return (dispatch, getState) => {
        const matchesMap = new Map(getState().matching.fullyMatchesListMap);
        matchesMap.set(meetingObj.userId, meetingObj);
        const data = userService.sortMapToArraysByType(matchesMap);
        dispatch({type: 'UPDATE_ALL_INFO', payload: {fullyMatchesListMap: matchesMap, ...data}});
    };
};

export const setCurrentVideoStatusInitialPage = (initialPage) => {
    return (dispatch)=>{
        dispatch({type :'SET_INITIAL_PAGE_VIDEO_STATE',payload:initialPage})
    }
};
