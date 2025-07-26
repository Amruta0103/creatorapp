import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CreatorCard({ creator, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: creator.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{creator.name}</Text>
        <Text style={styles.category}>{creator.category}</Text>
        <Text style={styles.followers}>{creator.followers} followers</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2
  },
  image: { width: 60, height: 60, borderRadius: 30 },
  info: { marginLeft: 10, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold' },
  category: { fontSize: 14, color: 'gray' },
  followers: { fontSize: 12, color: 'gray' }
});
