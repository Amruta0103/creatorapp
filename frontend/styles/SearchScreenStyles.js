// frontend/styles/searchStyles.js
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "./theme";

export default StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLORS.primaryLight,
    maxHeight: '95%'
  },
  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 4,
    margin: 16,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    height: 36,
    marginHorizontal: 8,
    marginVertical: 6,
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 25,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginRight: 10,
    maxHeight: 36,
    alignContent: 'center',
  },
  chipSelected: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  chipText: {
    color: COLORS.textPrimary,
  },
  chipTextSelected: {
    color: "#fff",
  },
  itemCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: 12,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  itemCategory: {
    color: COLORS.textSecondary,
  },
});
