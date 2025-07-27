import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function ProfileScreen({ route }) {
  const { creator } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: creator.image }} style={styles.image} />
      <Text style={styles.name}>{creator.name}</Text>
      <Text style={styles.category}>{creator.category}</Text>
      <Text style={styles.followers}>{creator.followers} followers</Text>
      <Text style={styles.bio}>{creator.bio}</Text>

      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL(creator.social.instagram)}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(creator.social.youtube)}>
          <Text style={styles.link}>YouTube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: "bold" },
  category: { fontSize: 16, color: "#666" },
  followers: { fontSize: 14, color: "#999" },
  bio: { fontSize: 14, textAlign: "center", marginVertical: 10 },
  links: { flexDirection: "row", marginTop: 20 },
  link: { marginHorizontal: 10, color: "#007AFF", fontSize: 16 },
});
