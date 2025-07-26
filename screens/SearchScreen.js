import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreatorCard from '../components/CreatorCard';

// Adjust this URL depending on how you run your backend:
// - Web: http://localhost:5000/creators
// - Android emulator: http://10.0.2.2:5000/creators
// - Real device: http://192.168.x.x:5000/creators
const API_URL = "http://10.0.2.2:5000/creators";

export default function SearchScreen() {
  const navigation = useNavigation();
  const [allCreators, setAllCreators] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Fashion', 'Tech', 'Fitness'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setAllCreators(json);
        setFilteredData(json);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let data = allCreators;

    if (selectedCategory !== 'All') {
      data = data.filter(item => item.category === selectedCategory);
    }

    if (search) {
      data = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredData(data);
  }, [search, selectedCategory, allCreators]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search creators"
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filterContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.activeFilter
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === category && styles.activeFilterText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {filteredData.length === 0 ? (
        <Text style={styles.noResults}>No creators found</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CreatorCard
              creator={item}
              onPress={() => navigation.navigate('Profile', { creator: item })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  filterContainer: { flexDirection: 'row', marginBottom: 10 },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginRight: 8
  },
  activeFilter: { backgroundColor: '#007bff', borderColor: '#007bff' },
  filterText: { color: '#333' },
  activeFilterText: { color: '#fff' },
  noResults: { textAlign: 'center', marginTop: 20, color: '#555' }
});
