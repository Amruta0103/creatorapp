// CreatorProfileStyles.js
import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
    width: 320,
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: theme.spacing.md,
  },
  image: {
    width: '100%',
    height: 240,
  },
  details: {
    alignItems: 'flex-start',
    marginTop: -64,
    width: '80%',
    paddingLeft: theme.spacing.md,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    color: theme.colors.card,
    fontWeight: theme.fonts.bold,
    fontSize: 22,
    marginRight: 6,
    textShadowColor: "#0002",
    textShadowRadius: 3,
  },
  badge: {
    backgroundColor: theme.colors.primary,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: 'bold',
  },
  bio: {
    color: theme.colors.card,
    fontSize: 14,
    marginTop: 2,
    textShadowColor: "#0005",
    textShadowRadius: 2,
  },
  stats: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
    gap: 18,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  followBtn: {
    backgroundColor: theme.colors.card,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 22,
    alignSelf: 'center',
  },
  followBtnText: {
    color: theme.colors.primary,
    fontWeight: theme.fonts.bold,
    fontSize: 16,
  }
});