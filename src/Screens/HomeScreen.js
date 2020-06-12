import React from 'react';
import {View, Text} from 'react-native';
// import {Image, Avatar} from 'react-native-elements';
import Login from '../components/Login';
import {connect} from 'react-redux';
import {fetchMovies} from '../store/actions/userAction';


const HomeScreen = ({navigation, fetchMoviesList, name = '', profileImage = ''}) => {

    // const useEffect = (() => {
    // }, [name, profileImage]);


    return (
        <View>
            {/*<Image style={{width: 100, height: 100}} source={require('../assets/appLogo.png')}/>*/}
            <Text>Welcome {name ? name : ''} to Isra Movies</Text>

            <View>
                <Login/>
            </View>
        </View>
    );
};
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
{/*<Avatar*/
}
{/*    rounded*/
}
{/*    size="xlarge"*/
}
{/*    source={{*/
}
{/*        uri:*/
}
{/*            profileImage ? profileImage : 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',*/
}
{/*    }}*/
}
{/*/>*/
}
