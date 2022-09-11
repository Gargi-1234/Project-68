import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import RideHistoryHeader from "../components/RideHistoryHeader";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: "#D0E6F0"}}>
        <RideHistoryHeader />
    
        <View style = {styles.container}>
          <Text style={styles.text}>Ride History</Text>
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
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});
