import { Dimensions, Platform, StyleSheet } from "react-native";

import { APP_COLORS } from "./System";


const ITEM_WIDTH = Math.ceil(Dimensions.get("screen").width / 11);

export const HEADER_STYLE = StyleSheet.create({
  float_container: {
    position: "absolute",
    // top: Platform.OS === "android" ? 25 : 30,
    right: 0,
    left: 0,
    flex: 1,
    zIndex: 99
  },  
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderColor: "rgba(185, 27, 5, 0.1)",
    // marginTop: 1,
  },
  right_helpers: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  item_container: {
    backgroundColor: "rgba(185, 27, 5, 0.3)",
    borderRadius: 50,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }
});
