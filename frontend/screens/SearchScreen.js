import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";

export default function SearchScreen({ navigation }) {
  const [creators, setCreators] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Dynamically use LAN IP for backend
  const devHost = Constants.expoConfig?.hostUri?.split(":")[0];
  const BASE_URL = `http://${devHost}:5000/creators`;

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        if (Array.isArray(data)) {
          setCreators(data);
        } else {
          setCreators([]);
        }
      } catch (err) {
        console.error("Error fetching creators:", err);
        setCreators([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCreators();
  }, []);

  const filtered = creators.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item._id || item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { creator: item })}
            style={styles.item}
          >
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No creators found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  search: { borderWidth: 1, marginBottom: 10, padding: 8 },
  item: { padding: 10, borderBottomWidth: 1 },
});
