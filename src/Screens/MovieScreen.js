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
                    <Image resizeMode={'center'} style={styles.movieImage}
                           source={{uri: `${config.ImageBaseURL}${movie.poster_path}`}}/>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.rating}>{'Rating :' + movie.vote_average}/10</Text>
                    <Text style={styles.movieOverview}>{movie.overview}</Text>
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
        alignItems: 'center',
        // backgroundColor: '#7d8597',
        backgroundColor: 'white',
    },

    movieCard: {
        width: '100%',
        // backgroundColor: '#cad2c5',
        // elevation: 8,
        // borderWidth: 1.5,
        // borderColor: 'black',
    },
    title: {
        color: 'rgb(11,11,11)',
        fontFamily: 'sans-serif-light',
        fontWeight: '700',
        fontSize: 28,
        textAlign: 'center',
        marginVertical: '1.5%',
    },
    rating:{
        paddingHorizontal: '8%',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(11,11,11)',
        fontFamily: 'sans-serif-light',
    },

    movieOverview: {
        paddingHorizontal: '8%',
        fontSize: 16,
        marginVertical: '3%',
        fontWeight: '600',
        color: 'rgb(11,11,11)',
        fontFamily: 'sans-serif-light',
    },

    movieImage: {
        width: '100%',
        height: 250,
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default MovieScreen;
