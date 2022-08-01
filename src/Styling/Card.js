import { Dimensions, StyleSheet } from "react-native";

import { FONTS } from "./Polices";
import { APP_COLORS } from "./System";

const ITEM_WIDTH = Math.ceil(Dimensions.get("screen").width / 11);

export const PUBLICATION_CARD_STYLE = StyleSheet.create({
  container: {
    flex: 1,
  },
  media_container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
  },
  infos_container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  right_helpers: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  item_helper: {
    borderRadius: 50,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  item_helper_small_text: {
    color: APP_COLORS.SECONDARY_COLOR.color,
    fontSize: 12,
    fontFamily: FONTS.belleAurore,
  },
  description_container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  description_text: {
    color: APP_COLORS.LIGHT_COLOR.color,
  },
  count: {
    fontSize: 12,
    color: APP_COLORS.LIGHT_COLOR.color,
    marginLeft: 15,
  }
});

export const ANIMATION_STYLE = StyleSheet.create({
  bottom_options: {
    position: "absolute",
    bottom: 0,
    right: 10,
    left: 10,
    zIndex: 10,
  },
  animationHeart: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  heartLottie: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 2,
  },
});
