import React from 'react';
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header';


const Movies = ({navigation, popularMoviesList}) => {
    if (popularMoviesList) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Header callback={() => navigation.goBack()} title={'Isracard Movies'}/>
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
