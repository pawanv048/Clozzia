import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, DrawerContent} from '../screens';
import AppHeader from '../components/AppHeader';


const MainStack = createDrawerNavigator();


const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
    drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        header: (props) => <AppHeader {...props} />,
      }}
      initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'home',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
