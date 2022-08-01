import { StyleSheet } from "react-native";

import { APP_COLORS } from "./System";

export const PROFILE_STYLE = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  top_container: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    padding: 5,
  },
  about_container: {
    flexDirection: "column",
    padding: 5
  },
  about_text: {
    color: APP_COLORS.LIGHT_COLOR.color,
  },
  item_report: {
    flexDirection: "row",
    padding: 17,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    alignItems: "center"
  },
  item_report_text: {
    color: APP_COLORS.LIGHT_COLOR.color,
  }
});
