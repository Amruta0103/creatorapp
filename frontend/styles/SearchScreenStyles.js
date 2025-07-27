import { StyleSheet } from 'react-native';

const SearchScreenStyles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#fff', justifyContent:'center', flexWrap: 'wrap' },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  card: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // adds shadow on Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  category: { fontSize: 14, color: '#666' },
  followers: { fontSize: 13, color: '#888' },
  emptyText: { textAlign: 'center', color: '#666', marginTop: 20 },
});

export default SearchScreenStyles;
