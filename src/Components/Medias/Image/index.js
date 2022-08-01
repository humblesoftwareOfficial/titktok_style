import React from "react";
import { StyleSheet } from "react-native";

import ProgressiveImage from "./ProgressiveImage";

const CustomImage = ({
  media,
  square,
  squareValue = 50,
  radius = 0,
  onImageLoaded,
  forStory = false,
  flex = 1,
}) => {
  return (
    <ProgressiveImage
      source={{ uri: media?.name }}
      style={[
        styles.image,
        {
          borderRadius: square ? squareValue : radius,
          ...(forStory && {
            justifyContent: "center",
            alignItems: "center",
          }),
          resizeMode: forStory ? "contain" : "cover",
          flex: flex,
        },
      ]}
      thumbnailSource={{ uri: media.name }}
      square={square}
      squareValue={squareValue}
      radius={radius}
      onLoadEnd={() => onImageLoaded && onImageLoaded()}
      flex={flex}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    borderRadius: 50,
  },
});

export default React.memo(CustomImage);
