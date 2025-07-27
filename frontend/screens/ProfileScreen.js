import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/ProfileStyles';

export default function ProfileScreen({ route }) {
  const { creator } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: creator.image }} style={styles.image} />
      <Text style={styles.name}>{creator.name}</Text>
      <Text style={styles.category}>{creator.category}</Text>
      <Text style={styles.followers}>{creator.followers} followers</Text>
      <Text style={styles.bio}>{creator.bio}</Text>
      <View style={styles.socialsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL(creator.social.instagram)}
        >
          <Text style={styles.socialText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => Linking.openURL(creator.social.youtube)}
        >
          <Text style={styles.socialText}>YouTube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
