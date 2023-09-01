import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>home screen</Text>
        </View>
      );
}

export default Home

const styles = StyleSheet.create({})


//onPress={() => navigation.getParent().openDrawer()}