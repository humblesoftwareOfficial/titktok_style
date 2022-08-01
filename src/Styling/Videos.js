import { Dimensions, StyleSheet } from "react-native";

import { APP_COLORS } from "./System";

export const WIDTH = Dimensions.get("screen").width;
export const HEIGHT = Dimensions.get("window").height;

export const CARD_VIDEO_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "center",
    flex: 1,
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  container_play_buttons: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const VIDEOS_PREVIEW_STYLE = StyleSheet.create({
  container_video: {
    width: Dimensions.get("window").width,
    flex: 1,
    backgroundColor: "#000",
  },
  container_play_buttons: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 10,
  },
  close_button: {
    position: "absolute",
    flexDirection: "row",
    right: 10,
    top: 5,
  },
  load_error: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  content_error: {
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 5,
  },
  content_loader: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
  },
  text_error: {
    color: APP_COLORS.PRIMARY_COLOR.color,
  },
});

export const ITEM_VIDEO_STYLE = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderWidth: 1,
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
});
