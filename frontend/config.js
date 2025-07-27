import Constants from "expo-constants";
import { Platform } from "react-native";

let baseURL = "";

if (__DEV__) {
  // When debugging locally
  if (Platform.OS === "android") {
    baseURL = "http://10.0.2.2:5000"; // Android emulator
  } else {
    baseURL = "http://localhost:5000"; // iOS simulator
  }
} else {
  // In production, replace with deployed API URL
  baseURL = "https://your-api.com";
}

export const API_BASE = baseURL;
