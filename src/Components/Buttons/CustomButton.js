import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { DEFAULT_BUTTON_STYLE } from "../../Styling/Button";
import { APP_COLORS } from "../../Styling/System";

export default function CustomButton({
  label,
  customWidth,
  bgColor = APP_COLORS.PRIMARY_COLOR.color,
  onClick = null,
  textColor = "white",
  borderColor = "",
  borderWidth = 0,
  padding = 15,
  disable = false,
  borderRadius = 10,
}) {
  const onPress = () => {
    if (!disable) onClick && onClick();
  };
  return (
    <View style={DEFAULT_BUTTON_STYLE.container_button}>
      <TouchableOpacity
        style={[
            DEFAULT_BUTTON_STYLE.button,
          {
            padding,
            width: customWidth || "100%",
            backgroundColor: disable ? "#CCD1D1" : bgColor,
            borderColor,
            borderWidth: borderWidth,
            borderRadius,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[DEFAULT_BUTTON_STYLE.textButton, { color: textColor }]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
