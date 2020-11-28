import React, {memo} from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

interface McTextInputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: TextInputProps['style'];
}

const McInput = memo(({value, onChangeText, style = {}, placeholder = ''}: McTextInputProps) => {
  return (
    <TextInput
      underlineColorAndroid='transparent'
      style={[styles.input, style]}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholder={placeholder}
      allowFontScaling={false}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    paddingTop: 5,
    paddingBottom: 0,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: '#ddd',
    borderBottomWidth: 5,
  },
});

export {McInput};
