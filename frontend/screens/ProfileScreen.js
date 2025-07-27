// screens/ProfileScreen.js
import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "../styles/ProfileStyles";

export default function ProfileScreen({ route }) {
  const { creator } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: creator.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{creator.name}</Text>
          </View>
          <Text style={styles.bio}>{creator.bio}</Text>
          <View style={styles.statsRow}>
            <Text>{creator.category}</Text>
            <Text>{creator.followers} Followers</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(creator.social.instagram)}
          >
            <Text style={styles.buttonText}>Follow on Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginTop: 10, backgroundColor: "#FF0000" }]}
            onPress={() => Linking.openURL(creator.social.youtube)}
          >
            <Text style={styles.buttonText}>Watch on YouTube</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
