import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ onChangeText, value}) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid="#eeee"
        selectionColor="blue"
        />
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 5,
        fontSize: 30
    }
})
export default Input;
