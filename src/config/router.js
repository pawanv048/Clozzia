import {View, Text, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from '../navigation/HomeNavigator';
import DrawerContent from '@react-navigation/drawer';
import { icons } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RightDrawer = createDrawerNavigator();

export default function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator 
      id="RightDrawer"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <RightDrawer.Screen name="MainDrawer" component={MainStackNavigator} />
    </RightDrawer.Navigator>
  );
}


