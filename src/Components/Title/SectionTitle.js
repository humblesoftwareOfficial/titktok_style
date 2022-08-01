import React from "react";
import { Text, View } from "react-native";

import { FONTS } from "../../Styling/Polices";
import { APP_COLORS } from "../../Styling/System";

export default function SectionTitle({
  label = "",
  iconLeft,
  iconRight,
  fontSize = 20,
  fontFamily = FONTS.bold,
  flexValue = 1,
  center = false,
  color = APP_COLORS.LIGHT_COLOR.color,
  marginTop = 0,
  marginBottom = 0,
  lineHeight,
}) {
  return (
    <View
      style={{
        flex: flexValue,
        margin: 5,
        marginTop,
        marginBottom,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily,
          fontSize,
          ...(center && {
            textAlign: "center",
          }),
          color,
          ...(lineHeight && {
            lineHeight,
          }),
          alignItems: "center",
        }}
      >
        {iconLeft}
        {`${label}`}
        {iconRight}
      </Text>
    </View>
  );
}
