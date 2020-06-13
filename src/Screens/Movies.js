import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';


const Movies = ({navigation, popularMoviesList}) => {
    if (popularMoviesList) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{height: 80, width: '100%', backgroundColor: '#264653', justifyContent: 'center'}}>
                    <Text style={{color: '#edf2f4', textAlign: 'center', fontSize: 28}}>Movies List</Text>
                </View>
                <FlatList
                    data={popularMoviesList}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Movie', {movie: item})} style={{
                            width: '100%',
                            backgroundColor: '#edf2f4',
                            height: 50,
                            borderBottomWidth: 1,
                            borderBottomColor: '#8d99ae',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: '#2b2d42',
                                fontSize: 18,
                                paddingHorizontal: 10,
                                fontWeight: 'bold',
                            }}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        );

    } else {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator/></View>;
    }
};

const mapStateToProps = state => {
    const {popularMoviesList} = state.user;
    return {
        popularMoviesList,
    };
};

export default connect(mapStateToProps, null)(Movies);
