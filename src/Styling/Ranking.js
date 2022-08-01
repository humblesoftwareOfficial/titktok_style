import { Dimensions, StyleSheet } from "react-native";

import { FONTS } from "./Polices";
import { APP_COLORS } from "./System";

export const RANKING_ITEM_SIZE = Math.ceil(Dimensions.get("screen").width / 5);

export const TOP_USER_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  item_container: {
    flex: 1,
    alignItems: "center",
  },
  position: {
    fontFamily: FONTS.snigletRegular,
  },
});

export const TOP_USER_ITEM_STYLE = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  vote_count: {
    color: APP_COLORS.SECONDARY_COLOR.color,
    textAlign: "center",
    fontFamily: FONTS.righteousRegular,
    fontSize: 18,
  },
});

export const RANKING_ITEM = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  user_name: {
    color: APP_COLORS.LIGHT_COLOR.color,
  },
  user_position: {
    fontFamily: FONTS.snigletRegular,
    color: APP_COLORS.LIGHT_COLOR.color,
  },
  score_container: {
    flex: 1,
    flexDirection: "row-reverse"
  }
});

export const GAMER_PROFILE_QUICKVIEW_STYLE = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
  },
  identifiant: {
    color: APP_COLORS.LIGHT_COLOR.color,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  console: {
    color: APP_COLORS.LIGHT_COLOR.color,
    textAlign: "center",
    // fontSize: 20,
  },
  infos: {
    flexDirection: "row",
    marginTop: 10,
  },
  infos_item: {
    // flex: 1,
    backgroundColor: "black",
    margin: 5,
    ustifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 5
  },
  infos_item_text: {
    color: APP_COLORS.LIGHT_COLOR.color,
    textAlign: "center",
    fontSize: 11
  },
  infos_item_count: {
    fontFamily: FONTS.bold,
    textAlign: "center",
    color: APP_COLORS.LIGHT_COLOR.color,
  },
  top_right_helper: {
    position: "absolute",
    top: 0,
    right: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  top_right_helper_icon: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "rgba(29, 236, 233, 0.1)",
    justifyContent: "center",
    alignItems: "center"
  },
  top_right_helper_text: {
    color: APP_COLORS.SECONDARY_COLOR.color,
    fontSize: 12
  }
})
