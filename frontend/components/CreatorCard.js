import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  category: { fontSize: 14, color: "#555" },
  followers: { fontSize: 12, color: "#999" },
});
