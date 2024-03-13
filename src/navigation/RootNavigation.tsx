import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import BlogPostScreen from '../screens/home/BlogPostScreen';
import CRUDScreen from '../screens/home/CRUDScreen';

export const RootStack = createNativeStackNavigator<any>();

const RootNavigation: React.FC = () => {
  //initialRouteName
  return (
    <RootStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      //   initialRouteName={initialRouteName}
    >
      <RootStack.Group
        screenOptions={{
          fullScreenGestureEnabled: true,
          headerShown: false,
        }}>
        <RootStack.Screen
          name={'Login'}
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <RootStack.Screen
          name={'SignUp'}
          options={{headerShown: false}}
          component={SignUpScreen}
        />
        <RootStack.Screen
          name={'BlogPost'}
          options={{headerShown: false}}
          component={BlogPostScreen}
        />
        <RootStack.Screen
          name={'CRUD'}
          options={{headerShown: false}}
          component={CRUDScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
