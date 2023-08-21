import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenOneStack } from 'navigation/stacks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenOne from 'screens/app/ScreenOne';
import ScreenThree from 'screens/app/ScreenThree';
import ScreenTwo from 'screens/app/ScreenTwo';

const Tab = createBottomTabNavigator();

export const DashboardBottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ScreenOne"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
            name="Screen One"

        component={ScreenOneStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen two"
        component={ScreenTwo}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name="Screen Three"

        component={ScreenThree}
        options={{

          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}