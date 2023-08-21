import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { storeUserInfo } from 'store/localStore';

import { addUserInfo } from 'store/reduxSlice/userInfo';

type LoginProps = {

}

const SignUp: React.FC<LoginProps> = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [familyname, setFamilyname] = useState("")
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [showPassword, setShowPassword] = useState(false);

    const onSignUpPress = () => {
        if (firstname === "" ) {
            return
        }
        if (familyname === "") {
            return
        }
        if (email === "" && !isValidEmail) {
            return
        }
        if (password === "") {
            return
        }

        //API CALL

        dispatch(addUserInfo({ email: email, password: password }));

        //After api call response 
        // setToken(dataToken)
        // storeUserInfo({ email: email, password: password })
    }

    const validateEmail = (email: string) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    const onEmailChange = (text: string) => {
        setEmail(text)
        setIsValidEmail(validateEmail(text));
    }

    const onPasswordChange = (text: string) => {
        setPassword(text)
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
  

   
    return (
        <View style={styles.container}>
            <Input
                placeholder='First Name'
                onChangeText={setFirstname}
                value={firstname}
              
            />

            <Input
                placeholder='Family Name'
                onChangeText={setFamilyname}
                value={familyname}
               
            />

            <Input
                placeholder='Enter email'
                onChangeText={onEmailChange}
                errorMessage={!isValidEmail ? 'Invalid email address' : ''}
            />
            <Input
                placeholder='Enter Password'
                onChangeText={onPasswordChange}
                secureTextEntry={!showPassword}
                rightIcon={{
                    type: 'font-awesome',
                    name: showPassword ? 'eye-slash' : 'eye',
                    onPress: togglePasswordVisibility,
                }}
            />
            <View style={styles.buttonStyle}>
                <Button title="SignUp" onPress={onSignUpPress} />
            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    buttonStyle: {
        paddingHorizontal: 10
    }
});

export default SignUp;
