/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CodeScanner from './CodeScanner'
const App=()=>{
  return(
  <View style={{flex:1}}>
<CodeScanner/>
  </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
