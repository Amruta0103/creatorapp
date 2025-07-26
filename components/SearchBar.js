import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by name"
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10
  },
  input: {
    height: 40,
    fontSize: 16
  }
});
