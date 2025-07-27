import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from './theme';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding,
  },
  blurBox: {
    width: "85%",
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    alignItems: "center",
    overflow: "hidden", // ensures blur corners are rounded
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.secondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: SIZES.radius,
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '600',
  },
});
