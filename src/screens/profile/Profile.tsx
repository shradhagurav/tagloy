import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import Header from 'component/Header';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUserInfo } from 'store/reduxSlice/userInfo';

const Profile = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const onLeftIconPress = () => {
    navigation.goBack()
  }

  const onLogoutPress = async () => {
    // await removeUser("login")
    dispatch(addUserInfo(null))
  }


  return (

    <View style={styles.container}>
      <Header title="Profile" iconLeft={{ type: "material-community", name: "arrow-left" }} onLeftPress={onLeftIconPress} />
      <View style={{ padding: 20 }}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>Software Developer | React Native Enthusiast</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>542</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.5K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>865</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <View style={{ paddingVertical: 20 }}>
          <Button onPress={onLogoutPress} title='Logout' />
        </View>
      </View>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: 'gray',
  },
});


