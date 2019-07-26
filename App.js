import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Likes from './components/Likes'
import Todo from './components/Todo'
import Flex from './components/Flex'


export default function App() {
  return (
    <View style={styles.container}>
      <Todo/>
      {/* <Flex/> */}
      {/* <Likes/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
