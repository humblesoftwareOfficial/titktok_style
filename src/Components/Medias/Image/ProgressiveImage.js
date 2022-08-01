import React from "react";
import { Animated, StyleSheet, View } from "react-native";

class ProgressiveImage extends React.Component {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {
      thumbnailSource,
      source,
      style,
      square,
      squareValue,
      radius,
      onLoadEnd,
      flex,
      ...props
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          { borderRadius: square ? squareValue : radius },
        ]}
      >
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={style}
          blurRadius={2}
          onLoad={this.handleThumbnailLoad}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, style]}
          onLoad={this.onImageLoad}
          onLoadEnd={() => onLoadEnd && onLoadEnd()}
        />
      </View>
    );
  }
}
export default ProgressiveImage;

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: "#424242", //#424242 e1e4e8
    flex: 1,
  },
});
