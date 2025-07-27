import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Video } from 'expo-av';
import { BlurView } from 'expo-blur';
import landingStyles from '../styles/LandingStyles';

export default function LandingScreen({ navigation }) {
  return (
    <View style={landingStyles.container}>
      <Video
        source={require('../assets/landingvideo.mp4')}
        style={landingStyles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />
      <View style={landingStyles.overlay}>
        <BlurView intensity={100} tint="light" style={landingStyles.blurBox}>
          <Text style={landingStyles.title}>Creator Directory</Text>
          <Text style={landingStyles.subtitle}>
            Discover and explore amazing creators from different fields!
          </Text>
          <TouchableOpacity
            style={landingStyles.button}
            onPress={() => navigation.navigate('Creators')}
          >
            <Text style={landingStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
}
