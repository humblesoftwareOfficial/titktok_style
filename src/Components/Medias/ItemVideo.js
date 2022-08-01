import React from "react";
import { Text, View } from "react-native";
import TrackVisibility from "react-on-screen";
import { ITEM_VIDEO_STYLE } from "../../Styling/Videos";
import VideoPreview from "./VideoPreview";

export default function ItemVideo({ item, isActiveInViewport }) {

  return (
      <View style={ITEM_VIDEO_STYLE.container}>
        <VideoPreview
          uri={item.sources[0]}
          isActiveInViewport={isActiveInViewport}
        />
      </View>
  );
}