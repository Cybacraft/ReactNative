import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
export default class Todo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Menu</Text>
          <Text style={styles.headerText}> Todo App</Text>
          <Text style={styles.headerText}> Settings</Text>
        </View>

         <View style={{ flex: 5}}/>


        <View style={{ flex: 1, backgroundColor: "#222e50"}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },

  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "900"
  },

  headerContainer:{
   flex:1,
   paddingRight: 5,
   paddingLeft: 5,
   flexDirection:'row',
   justifyContent: 'space-between',
   backgroundColor: '#222e50',
   alignItems:"flex-end",
   

  }
});
