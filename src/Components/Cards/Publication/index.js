import { FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import CLAP_FLOTTIE from "../../../assets/lottie/good_job.json";
import { AVATAR_DEFAULT_WIDTH } from "../../../Styling/Avatar";
import { ANIMATION_STYLE, PUBLICATION_CARD_STYLE } from "../../../Styling/Card";
import { APP_COLORS } from "../../../Styling/System";
import Avatar from "../../Avatar";
import VideoPreview from "../../Medias/VideoPreview";

const WIDTH_CONTAINER = Dimensions.get("screen").width;

export default function PublicationCard({ publication, isActiveIndex = false }) {
  const [showClap, setShowClap] = useState(false);
  const animationHeart = useRef(null);

  useEffect(() => {
    if (showClap) {
      activeAnimationHeart();
    }
  }, [showClap]);

  const activeAnimationHeart = () => {
    animationHeart.current.play(0, 50);
  };

  return (
    <View
      style={[PUBLICATION_CARD_STYLE.container, { width: WIDTH_CONTAINER }]}
    >
      <View style={PUBLICATION_CARD_STYLE.media_container}>
        <VideoPreview uri={publication.video.url} defaultPlay={isActiveIndex}/>
      </View>
      <View style={PUBLICATION_CARD_STYLE.details}>
        <View style={PUBLICATION_CARD_STYLE.infos_container}>
          <Avatar
            width={AVATAR_DEFAULT_WIDTH}
            backgroundColor={APP_COLORS.PRIMARY_COLOR.color}
            borderColor={APP_COLORS.PRIMARY_COLOR.color}
            borderWidth={2}
            url={publication.user.urlProfile}
            name={publication.user.identifiant}
            gameType={publication.user.gameType}
          />
          <View style={PUBLICATION_CARD_STYLE.right_helpers}>
            <TouchableOpacity
              style={[
                PUBLICATION_CARD_STYLE.item_helper,
                {
                  backgroundColor: "rgba(254, 235, 0, 0.2)",
                },
              ]}
            >
              <SimpleLineIcons
                name="options-vertical"
                size={20}
                color={APP_COLORS.LIGHT_COLOR.color}
              />
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={[
                  PUBLICATION_CARD_STYLE.item_helper,
                  {
                    backgroundColor: "rgba(29, 236, 233, 0.2)",
                  },
                ]}
                onPress={() => setShowClap(true)}
              >
                <FontAwesome
                  name="hand-peace-o"
                  size={24}
                  color={APP_COLORS.SECONDARY_COLOR.color}
                  
                />
                <Text style={PUBLICATION_CARD_STYLE.item_helper_small_text}>
                  Vote
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  PUBLICATION_CARD_STYLE.count,
                  { color: APP_COLORS.SECONDARY_COLOR.color },
                ]}
              >
                {publication.video.like}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={[
                  PUBLICATION_CARD_STYLE.item_helper,
                  {
                    backgroundColor: "rgba(28, 131, 237, 0.2)",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="comment-processing"
                  size={24}
                  color={APP_COLORS.LIGHT_COLOR.color}
                />
              </TouchableOpacity>
              <Text style={PUBLICATION_CARD_STYLE.count}>
                {publication.video.comment}
              </Text>
            </View>
          </View>
        </View>
        <View style={PUBLICATION_CARD_STYLE.description_container}>
          <Text
            style={[
              PUBLICATION_CARD_STYLE.description_text,
              { fontWeight: "bold" },
            ]}
          >
            ########killers is back
          </Text>
          <Text style={PUBLICATION_CARD_STYLE.description_text}>
            Like & share
          </Text>
        </View>
      </View>
      {showClap && (
        <View style={ANIMATION_STYLE.animationHeart}>
          <LottieView
            ref={animationHeart}
            source={CLAP_FLOTTIE}
            style={ANIMATION_STYLE.heartLottie}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => setShowClap(false)}
            speed={0.7}
          />
        </View>
      )}
    </View>
  );
}
