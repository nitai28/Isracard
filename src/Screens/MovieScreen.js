import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const MovieScreen = ({navigation}) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setMovie(navigation.state.params.movie);
    }, [navigation.state.params.movie]);

    return (
        <View>
            <Text>Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default MovieScreen;
