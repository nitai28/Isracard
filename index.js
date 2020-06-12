import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/store/reducers/rootReducer';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));


const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);


AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(RNRedux));
