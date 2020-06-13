import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, StatusBar} from 'react-native';

const Header = ({callback = () => null, title = '', mode = false, favoriteMovieNum = 0, openFavModal = () => null}) => {
    return (
        <View
            style={styles.container}>
            <StatusBar backgroundColor={'#264653'} barStyle={'light-content'}/>
            <TouchableOpacity onPress={callback}>
                <Image style={{height: 30}} source={require('../assets/back.png')}/>
            </TouchableOpacity>
            <View style={styles.absoluteCenter}><Text style={styles.title}>{title}</Text></View>
            <View>
                {mode ? <TouchableOpacity onPress={openFavModal}>
                    <Image style={{height: 30}} source={require('../assets/favorite.png')}/>
                    {favoriteMovieNum ? <View style={styles.notificationCircle}><Text
                        style={{color: 'white', fontWeight: 'bold'}}>{favoriteMovieNum}</Text></View> : null}
                </TouchableOpacity> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: '#264653',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title: {
        color: '#edf2f4',
        alignSelf: 'center',
        fontSize: 28,
        position: 'absolute',
    },
    absoluteCenter: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        position: 'absolute',
        right: -10,
        top: -5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});

export default Header;
