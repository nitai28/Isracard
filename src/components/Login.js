import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton} from 'react-native-fbsdk';
import {logout, setUserDetails} from '../store/actions/userAction';

const Login = ({setUserDetails, logOut}) => {

    useEffect(() => {
        setData();
    }, []);

    const setData = () => {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                const infoRequest = new GraphRequest(
                    '/me',
                    {
                        accessToken: data.accessToken,
                        parameters: {
                            fields: {
                                string: 'picture.type(large) ,name',
                            },
                        },
                    },
                    (err, res) => {
                        if (err) {
                            console.log(23423);
                        } else {
                            setUserDetails(res.name, res.picture.data.url, 'facebook');
                        }
                    },
                );
                new GraphRequestManager().addRequest(infoRequest).start();
            });
    };


    return (
        <View>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log('login has error:', error);
                        } else if (result.isCancelled) {
                            console.log('login is cancelled.');
                        } else {
                            setData();
                        }
                    }
                }
                onLogoutFinished={() => {
                    console.log('logOut');
                    logOut();
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

const mapDispatchToProps = dispatch => {
    return {
        setUserDetails: (name, imgSrc, loginFrom) => dispatch(setUserDetails(name, imgSrc, loginFrom)),
        logOut: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(Login);
