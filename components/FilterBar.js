import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function FilterBar({ categories, selected, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.chip, selected === cat && styles.activeChip]}
          onPress={() => onSelect(cat)}
        >
          <Text style={[styles.text, selected === cat && styles.activeText]}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginVertical: 10 },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 10
  },
  activeChip: { backgroundColor: '#007AFF' },
  text: { fontSize: 14 },
  activeText: { color: '#fff' }
});
