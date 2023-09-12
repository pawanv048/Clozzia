import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import {icons, SIZES, standard} from '../constants';
import { AppLabel } from '../constants/strings';

//<HeartOutlined />  hearto
const AppHeader = ({navigation}) => {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: standard.colors.background,
        justifyContent: 'center',
        padding: SIZES.padding,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={icons.menu}
              style={{width: 20, height: 20, resizeMode: 'center'}}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: SIZES.radius * 0.7, fontFamily: 'abnes', fontSize: 14}}>{AppLabel.appName}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name='search1' size={20} style={{color: standard.colors.primary}}/>
          <AntDesign name='hearto' size={20} style={{marginHorizontal: SIZES.radius * 0.5, color: standard.colors.primary}}/>
          <Icons name='shopping-bag' size={20} style={{color: standard.colors.primary}}/>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
