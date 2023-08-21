import { Icon } from '@rneui/themed';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HeaderProps = {
    title: string;
    onRightPress?: () => void
    iconRight?: any,
    onLeftPress?: () => void
    iconLeft?: any
}

const Header: React.FC<HeaderProps> = ({ title, onRightPress, iconRight, iconLeft, onLeftPress }) => {
    return (
        <View style={styles.headerContainer}>
            {iconLeft ? <TouchableOpacity onPress={onLeftPress} style={styles.leftPress}>
                <Icon type={iconLeft.type} name={iconLeft.name} size={16} />
            </TouchableOpacity> : null}
            <Text style={styles.headerTitle}>{title}</Text>
            {iconRight ? <TouchableOpacity onPress={onRightPress} style={styles.rightPress}>
                <Icon type={iconRight.type} name={iconRight.name} size={16} />
                {/* <Text style={styles.rightPressText}></Text> */}
            </TouchableOpacity> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',

    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal:10,
        fontWeight: 'bold',
    },
    rightPress: {
        padding: 10,
        alignSelf: 'center'
    },
    rightPressText: {
        color: 'white',
        fontSize: 16,
    },
    leftPress: {
        alignSelf: 'center'
   
    }
});

export default Header;
