import { NavigationContainer } from '@react-navigation/native';
import { AppStack, AuthStack } from 'navigation/stacks';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

type RouteProps = {

}

const AppRoutes: React.FC<RouteProps> = ({ }) => {

    const isLogin = useSelector((state: any) => state.userInfo.userInfo);
 
    return (
        <View style={{ flex: 1 }}>
            {isLogin === null ? <AuthStack /> : <AppStack />}
        </View>

    );
};
export default AppRoutes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


