import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RideHeader from "../components/RideHeader";

export default class RideScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: "#D0E6F0"}}>
        <RideHeader />
    
        <View style = {styles.container}>
          <Text style={styles.text}>Rent A Ride</Text>
        </View>
        <View style={ styles.container2 } >

          <TouchableOpacity style = {styles.button}>
            <Text style={styles.text2}> Bike </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>
            <Text style={styles.text2}> Car </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>
            <Text style={styles.text2}> Auto </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  container2: {
    flex: 1,
    flexDirection : "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  },
  text2: {
    color: "#4C5D70",
    fontSize: 25,
    padding : 2
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 4,
    
  },
});