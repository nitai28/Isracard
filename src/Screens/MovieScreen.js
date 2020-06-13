import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import {config} from '../config';


const MovieScreen = ({navigation, route}) => {
    const [movie, setMovie] = useState(null);
    console.log(route);

    useEffect(() => {
        setMovie(route.params.movie);
    }, [route.params.movie]);

    if (movie) {
        return (
            <SafeAreaView style={styles.movieContainer}>
                <View style={styles.movieCard}>
                    <Image resizeMethod={'scale'} style={styles.movieImage}
                           source={{uri: `${config.ImageBaseURL}${movie.poster_path}`}}/>
                    <Text>{movie.title}</Text>
                    <Text>{'Rating :' + movie.vote_average}</Text>
                    <Text style={{paddingHorizontal:'6%'}}>{movie.overview}</Text>
                </View>
            </SafeAreaView>
        );
    } else {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator/></View>;
    }


};

const styles = StyleSheet.create({
    movieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#457b9d',
    },
    movieCard: {
        width: '80%',
        height: '80%',
        backgroundColor: '#a8dadc',
        elevation: 8,
        borderWidth: 3,
        borderColor: 'white',
    },

    movieImage: {
        width: '100%',
        height: '40%',
        borderWidth: 3,
        borderColor: 'white',
    },
});

export default MovieScreen;
