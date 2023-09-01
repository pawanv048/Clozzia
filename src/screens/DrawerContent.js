import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES, standard} from '../constants';
import {GButton} from '../components';

const DrawerContent = () => {
  return (
    <View style={{padding: SIZES.radius * 0.5}}>
      <Text
        style={{
          fontFamily: 'abnes',
        }}>
        CLOIZZIA
      </Text>
      <View style={{marginTop: SIZES.padding * 3}}>
        <GButton title="Best Seller" titleStyle={{fontWeight: 'bold', color: standard.colors.primary}}/>
        <GButton title="New Arrivals" titleStyle={{fontWeight: 'bold', color: standard.colors.primary}}/>
        <GButton title="Shirt" />
        <GButton title="Bottom wear" />
        <GButton title="Co-ords" />
        <GButton title="T-Shirt" />
        <GButton title="Track-Order" />
        <GButton title="Returns/Exchange" />
        <GButton title="Log in" />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
