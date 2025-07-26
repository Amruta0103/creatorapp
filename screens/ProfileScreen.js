import React from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ route }) {
  const { creator } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: creator.image }} style={styles.image} />
      <Text style={styles.name}>{creator.name}</Text>
      <Text style={styles.category}>{creator.category}</Text>
      <Text style={styles.followers}>{creator.followers} followers</Text>
      <Text style={styles.bio}>{creator.bio}</Text>

      <View style={styles.social}>
        <TouchableOpacity onPress={() => Linking.openURL(creator.social.instagram)}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(creator.social.youtube)}>
          <Text style={styles.link}>YouTube</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  image: { width: 150, height: 150, borderRadius: 75 },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 15 },
  category: { fontSize: 16, color: 'gray' },
  followers: { fontSize: 16, marginVertical: 5 },
  bio: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  social: { flexDirection: 'row', marginTop: 15, gap: 20 },
  link: { fontSize: 18, color: 'blue', marginHorizontal: 15 }
});
