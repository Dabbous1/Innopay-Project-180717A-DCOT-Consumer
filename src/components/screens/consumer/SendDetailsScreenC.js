import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
// package Menu


export default class SendDetails extends React.Component {
  render() {
  return (
    <View style={styles.container}>
       <Text> This is the Send Details Screen! </Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});