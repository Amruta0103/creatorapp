import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";

// Base URL: adjust for emulator vs device
const API_BASE =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";

export default function SearchScreen({ navigation }) {
  const [creators, setCreators] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      console.log("Fetching creators from:", `${API_BASE}/creators`);
      try {
        const response = await fetch(`${API_BASE}/creators`);
        console.log("Fetch status:", response.status);

        if (!response.ok) {
          const text = await response.text();
          console.log("Error response text:", text);
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        setCreators(data);
      } catch (error) {
        console.error("Error fetching creators:", error);
        Alert.alert("Error", "Could not load creators. Check your backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  // Filter creators based on search input
  // const filteredCreators = creators.filter((c) =>
  //   c.name.toLowerCase().includes(search.toLowerCase())
  // );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Profile", { creator: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.followers}>{item.followers} followers</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading creators...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search creators..."
        value={search}
        onChangeText={setSearch}
      />
      {creators.length === 0 ? (
        <View style={styles.center}>
          <Text>No creators found.</Text>
        </View>
      ) : (
        <FlatList
          data={creators}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#fff" },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  category: { fontSize: 14, color: "#666" },
  followers: { fontSize: 12, color: "#999" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
