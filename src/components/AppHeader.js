import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {icons, SIZES, standard} from '../constants';

const AppHeader = ({navigation}) => {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: standard.colors.background,
        justifyContent: 'center',
        padding: SIZES.padding,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={icons.menu}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: SIZES.radius * 0.7, fontFamily: 'abnes'}}>
            CLOIZZIA
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={icons.search}
            style={{width: 18, height: 18, resizeMode: 'contain'}}
          />
          <Image
            source={icons.heart}
            style={{
              width: 20,
              height: 20,
              marginHorizontal: SIZES.radius * 0.5,
              resizeMode: 'contain',
            }}
          />
          <Image source={icons.bag} style={{width: 20, height: 20}} />
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
