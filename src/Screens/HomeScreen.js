import React from 'react';
import {View, Text, Button} from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Screen</Text>
            <Button title={'Click'} color={'red'} onPress={() => navigation.navigate('Movies')}/>
        </View>
    );
};


export default HomeScreen;
