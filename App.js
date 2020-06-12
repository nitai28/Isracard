import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './src/Screens/HomeScreen';
import Movies from './src/Screens/Movies';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'} headerMode={false}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Movies" component={Movies}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

