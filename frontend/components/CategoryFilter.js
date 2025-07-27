import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <View style={styles.container}>
      {["All", ...categories].map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.button,
            selected === cat && styles.selectedButton,
          ]}
          onPress={() => onSelect(cat)}
        >
          <Text
            style={[
              styles.buttonText,
              selected === cat && styles.selectedText,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 10, flexWrap: "wrap" },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#eee",
    borderRadius: 20,
    margin: 4,
  },
  selectedButton: { backgroundColor: "#007AFF" },
  buttonText: { color: "#333" },
  selectedText: { color: "#fff" },
});
