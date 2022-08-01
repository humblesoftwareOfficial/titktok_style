import { Dimensions, StyleSheet } from "react-native";

import { APP_COLORS } from "./System";

export const BOTTOM_MODAL_STYLE = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "flex-end",
    },
    container: {
      paddingTop: 12,
      paddingHorizontal: 12,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
    sliderIndicatorRow: {
      flexDirection: "row",
      marginBottom: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    sliderIndicator: {
      backgroundColor: APP_COLORS.LIGHT_COLOR.color,
      height: 4,
      width: 45,
      borderRadius: 10,
    },
  });