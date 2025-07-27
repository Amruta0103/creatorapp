// frontend/screens/SearchScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, ActivityIndicator, ScrollView } from "react-native";
import searchStyles from "../styles/SearchScreenStyles";

const CATEGORIES = ["All", "Fashion", "Tech", "Fitness", "Music", "Food"];

export default function SearchScreen({ navigation }) {
  const [creators, setCreators] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const BASE_URL = "https://creatorapp.onrender.com"; // replace with your backend

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch(`${BASE_URL}/creators`);
        const data = await response.json();
        setCreators(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching creators:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCreators();
  }, []);

  const filtered = creators.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={searchStyles.container}>
      <TextInput
        style={searchStyles.search}
        placeholder="Search creators..."
        value={search}
        onChangeText={setSearch}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={searchStyles.filterContainer}
      >
        {CATEGORIES.map((cat) => {
          const selected = selectedCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[searchStyles.chip, selected && searchStyles.chipSelected]}
            >
              <Text
                style={[
                  searchStyles.chipText,
                  selected && searchStyles.chipTextSelected,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => item._id || index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { creator: item })}
            style={searchStyles.itemCard}
          >
            <Image source={{ uri: item.image }} style={searchStyles.itemImage} />
            <View>
              <Text style={searchStyles.itemName}>{item.name}</Text>
              <Text style={searchStyles.itemCategory}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No creators found.
          </Text>
        )}
      />
    </View>
  );
}
