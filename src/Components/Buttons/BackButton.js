import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { APP_COLORS } from "../../Styling/System";

const defaultIcon = (
  <Ionicons
    name="ios-arrow-back-circle"
    size={40}
    color={APP_COLORS.LIGHT_COLOR.color}
  />
);
export default function BackButton({ onClick, icon = defaultIcon, marginTop = 0, marginLeft = 0 }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={[
          styles.container,
          {
            marginTop,
            marginLeft,
          },
        ]}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
