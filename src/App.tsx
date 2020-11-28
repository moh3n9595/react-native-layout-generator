/**
 * React Native Layout Generator
 * Author: Mohsen Madani (mohsenando@gmail.com)
 * Date: November 28, 2020
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {McInput} from './common';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <McInput onChangeText={() => {}} />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({});

export default App;
