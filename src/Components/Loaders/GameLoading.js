import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LOADING_ANIMATION from "../../assets/lottie/loading_gaming.json";
import { APP_COLORS } from "../../Styling/System";

export default function GameLoading({
  text = "",
  size = "small",
  color = APP_COLORS.PRIMARY_COLOR.color,
  flex = 1,
  loop = true,
}) {
  return (
    <View style={[styles.container, { flex }]}>
      <AnimatedLottieView
        source={LOADING_ANIMATION}
        style={styles.loading}
        autoPlay
        loop={loop}
      />
      <Text >{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
