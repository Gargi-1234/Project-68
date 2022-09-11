import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';

export default class RideHeader extends Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Ride Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  },
  text:{
    color: 'white',
    marginTop: 50,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

