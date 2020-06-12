import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton} from 'react-native-fbsdk';
import {setUserDetails} from '../store/actions/userAction';

const Login = ({setUserDetails}) => {
    return (
        <View>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log('login has error: ' + result.error);
                        } else if (result.isCancelled) {
                            console.log('login is cancelled.');
                        } else {
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
                                                console.log(res);
                                            } else {
                                                console.log(res.name, res.picture.data.url);
                                                setUserDetails(res.name, res.picture.data.url);
                                            }
                                        },
                                    );
                                    new GraphRequestManager().addRequest(infoRequest).start();
                                },
                            );
                        }
                    }
                }
                onLogoutFinished={() => console.log('logout.')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

const mapDispatchToProps = dispatch => {
    return {
        setUserDetails: (name, imgSrc) => dispatch(setUserDetails(name, imgSrc)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
