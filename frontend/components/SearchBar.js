import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ search, setSearch }) {
  return (
    <TextInput
      style={styles.search}
      placeholder="Search..."
      value={search}
      onChangeText={setSearch}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
});
