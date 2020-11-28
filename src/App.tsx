/**
 * React Native Layout Generator
 * Author: Mohsen Madani (mohsenando@gmail.com)
 * Date: November 28, 2020
 */

import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {McInput} from './common';
import LayoutGenerator from './components/LayoutGenerator';

const RULE_REGEX = RegExp(/^(\d+(?:\/\d+)*)$/g);

const App = () => {
  const [rule, setRule] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const setRuleCallback = useCallback((text: string) => setInput(text), []);

  useEffect(() => {
    if (!input) setRule('');
    else if (input.match(RULE_REGEX)?.length) setRule(input);
  }, [input]);

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <McInput onChangeText={setRuleCallback} value={input} style={styles.input} />
        <LayoutGenerator rule={rule} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    marginVertical: 10,
  },
});

export default App;
