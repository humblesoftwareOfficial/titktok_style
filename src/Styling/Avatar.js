import { Dimensions, StyleSheet } from "react-native";

import { APP_COLORS } from "./System";

export const AVATAR_DEFAULT_WIDTH = Math.ceil(Dimensions.get("screen").width / 10);

export const AVATAR_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  thumbnail: {
    margin: 5
  },
  info: {
    color: APP_COLORS.LIGHT_COLOR.color,
    fontSize: 12,
  }
});
