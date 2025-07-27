import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "./theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
    padding: SIZES.padding,
  },
  image: {
    width: 300,
    height: 350,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    textAlign: "center",
  },
  category: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 12,
  },
  followers: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: 16,
  },
  bioCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    borderRadius: SIZES.radius,
    marginBottom: 16,
  },
  bio: {
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlign: "center",
  },
  socialsContainer: {
    width: '100%',
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: 'center',
    marginTop: 20,
    gap: 8,
  },
  socialButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
    alignSelf: 'center',
  },
  socialText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
  },
});
