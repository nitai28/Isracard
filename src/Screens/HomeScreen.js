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
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Image style={{width: 100, height: 100}} source={require('../assets/appLogo.png')}/>
            <Text>Welcome{name ? ' ' + name + ' ' : ''}to Isracard Movies</Text>
            {!!profileImage ?
                <View>
                    <Image style={styles.avatar} source={{uri: profileImage}}/>
                    <TouchableOpacity onPress={() => {
                        fetchMoviesList();
                        navigation.navigate('Movies');
                    }}
                                      style={styles.loadMoviesBtn}>
                        <Text style={{fontSize: 18, color: 'white'}}>Load movies</Text>
                    </TouchableOpacity>
                </View>
                : null}
            <View style={{justifyContent: 'flex-end', alignSelf: 'center'}}>
                <Login/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,

    },
    loadMoviesBtn: {
        height: 45,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 30,
        elevation: 13,
        borderColor: 'white',
        borderWidth: 2,
        alignSelf: 'center',
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

