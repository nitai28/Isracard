import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Login from '../components/Login';
import {connect} from 'react-redux';
import {fetchMovies} from '../store/actions/userAction';


const HomeScreen = ({navigation, fetchMoviesList, name = '', profileImage = ''}) => {

    useEffect(() => {
        console.log(4646,profileImage);
    }, [name, profileImage]);


    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white'}}>
            <Image style={{width: 150, height: 150, marginVertical: 15}} source={require('../assets/appLogo1.png')}/>
            <Text style={styles.welcome}>Welcome {name ? name : 'Stranger'} </Text>
            <Image style={styles.avatar}
                   source={profileImage ? {uri: profileImage} : require('../assets/avatar.png')}/>
            {!!profileImage ?
                <TouchableOpacity
                    onPress={() => {
                        fetchMoviesList();
                        navigation.navigate('Movies');
                    }}
                    style={styles.loadMoviesBtn}>
                    <Text style={{fontSize: 18, color: 'white'}}>Load movies</Text>
                </TouchableOpacity> : <Text style={{
                    color: 'gray',
                    textAlign: 'center',
                    fontSize:15,
                    letterSpacing:1.1

                }}>{'Please log in to continue \n to the awesomeness'} </Text>}

            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: 36,
            }}>
                <Login/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,

    },
    loadMoviesBtn: {
        marginTop: 30,
        height: 45,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
        elevation: 13,
        borderColor: 'white',
        borderWidth: 2,
    },
    welcome: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 35,
    },

});

const mapStateToProps = state => {
    const {name, profileImage} = state.user;
    return {
        name,
        profileImage,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesList: () => dispatch(fetchMovies()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

