
import EncryptedStorage from 'react-native-encrypted-storage';
const storeUserInfo = async (input: any) => {

    try {
        await EncryptedStorage.setItem(
            "login",
            JSON.stringify({
                email: input.email,
                password: input.password,
            })
        );
    } catch (error) {
        console.log("error while storing user info")
    }
}

const removeUser = async (input: string) => {

    try {
        await EncryptedStorage.removeItem(input);
    } catch (error) {
        console.log("error while removing user info")
    }
}

export {
    removeUser,
    storeUserInfo
}