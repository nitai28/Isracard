import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {config} from '../config';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {updateFavoriteMovies} from '../store/actions/userAction';
import Popup from '../components/Popup';

const MovieScreen = ({navigation, route, updateFavMovies, favoriteMovies}) => {
    const [movie, setMovie] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setMovie(route.params.movie);
    }, [route.params.movie]);

    useEffect(() => {
        if (movie) {
            checkIsFavourite();
        }
    }, [favoriteMovies]);

    const checkIsFavourite = () => {
        let isFav = favoriteMovies.findIndex(item => movie.title === item.title);
        return isFav !== -1;
    };

    if (movie) {
        return (
            <SafeAreaView style={styles.movieContainer}>
                <Header mode={true} favoriteMovieNum={favoriteMovies.length} callback={() => navigation.goBack()}
                        title={'Isracard Movies'} openFavModal={() => setShowPopup(true)}/>
                <View style={styles.movieCard}>
                    <Image resizeMode={'center'} style={styles.movieImage}
                           source={{uri: `${config.ImageBaseURL}${movie.poster_path}`}}/>
                    <Text style={styles.title}>{movie.title}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: '8%',
                        height: 40,
                        alignItems: 'center',
                    }}>
                        <Text style={styles.rating}>{'Rating :' + movie.vote_average}/10</Text>
                        <TouchableOpacity onPress={() => {
                            updateFavMovies(movie);
                        }}>
                            <Image style={{height: 30}}
                                   source={checkIsFavourite() ? require('../assets/fullstar.png') : require('../assets/star.png')}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{height: '30%', width: '100%'}}>
                        <Text style={styles.movieOverview}>{movie.overview}</Text>
                    </ScrollView>
                </View>
                {showPopup ? <Popup callBack={() => setShowPopup(false)} movies={favoriteMovies}/> : null}
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
        backgroundColor: 'white',
    },

    movieCard: {
        width: '100%',
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

const mapStateToProps = state => {
    const {favoriteMovies} = state.user;
    return {
        favoriteMovies,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        updateFavMovies: (movie) => dispatch(updateFavoriteMovies(movie)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
