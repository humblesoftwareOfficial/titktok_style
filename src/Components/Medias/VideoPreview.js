import { Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import { CARD_VIDEO_STYLE, VIDEOS_PREVIEW_STYLE, WIDTH } from "../../Styling/Videos";
import GameLoading from "../Loaders/GameLoading";

export default function VideoPreview({ uri, defaultPlay = false }) {
  const video = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (defaultPlay && !status.isPlaying) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
    }
  }, [defaultPlay]);

  const playVideo = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={playVideo} activeOpacity={1}>
      <View style={VIDEOS_PREVIEW_STYLE.container_video}>
        <Video
          ref={video}
          style={[CARD_VIDEO_STYLE.video, { width: WIDTH }]}
          source={{
            uri,
          }}
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onLoadStart={() => {
            setIsLoading(true);
          }}
          onLoad={() => {
            setHasError(false);
            setIsLoading(false);
          }}
          onError={(e) => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
        {isLoading && (
          <View style={VIDEOS_PREVIEW_STYLE.load_error}>
            <GameLoading />
          </View>
        )}
        {hasError && (
          <View style={VIDEOS_PREVIEW_STYLE.load_error}>
            <View style={VIDEOS_PREVIEW_STYLE.content_error}>
              <Text style={VIDEOS_PREVIEW_STYLE.text_error}>
                {`Erreur lors du téléchargement de la vidéo!`}
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
