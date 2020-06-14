import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {config} from '../config';


const Popup = ({movies, callBack = () => null}) => {
    const renderMovie = (item) => {
        return (
            <View style={styles.movieContainer}>
                <Image style={{width: 45, height: 60, borderColor: 'white', borderWidth: 1}}
                       source={{uri: `${config.SmallImageBaseURL}${item.poster_path}`}}
                       resizeMode={'center'}/>

                <Text style={{
                    color: '#2b2d42',
                    fontSize: 14,
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                }}>{item.title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.popupContainer}>
            <TouchableOpacity style={{position: 'absolute', top: 80, right: 20}} onPress={callBack}>
                <Image style={{width: 35, height: 35}}
                       source={require('../assets/close.png')}/>
            </TouchableOpacity>
            <View style={[styles.overlay, {height: 400}]}>
                <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 10, marginTop: 6}}>
                    Favorite movies list
                </Text>
                {movies.length > 0 ?
                    <FlatList
                        data={movies}
                        keyExtractor={item => item.title}
                        renderItem={({item}) => renderMovie(item)}
                    />
                    : <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Please add movies to the favorite list</Text>
                }
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(111,111,111,0.7)',
    },

    overlay: {
        backgroundColor: 'white',
        width: '80%',
    },
    movieContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: 80,
        borderBottomWidth: 0.4,
        borderBottomColor: '#8d99ae',
        justifyContent: 'flex-start',
        paddingLeft: 30,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Popup;
