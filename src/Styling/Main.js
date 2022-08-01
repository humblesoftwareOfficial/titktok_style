import { Platform, StatusBar, StyleSheet } from "react-native";

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const SAFE_AREA_VIEW = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export const STATUS_BAR_STYLE = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
