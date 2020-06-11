import {combineReducers} from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import videoReducer from './videoReducer';
import matchingReducer from './matchingReducer';
import errorReducer from './errorReducer';
import {CallReducer, ConnectionReducer, SessionReducer} from '../../lib/wrtc/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  video: videoReducer,
  error: errorReducer,
  matching: matchingReducer,
  call: CallReducer,
  connection: ConnectionReducer,
  session: SessionReducer,
});

export default rootReducer;
