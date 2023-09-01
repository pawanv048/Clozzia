import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SIZES } from '../constants';

const GButton = ({title, style, titleStyle}) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={[{marginTop: SIZES.padding},titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default GButton

const styles = StyleSheet.create({})