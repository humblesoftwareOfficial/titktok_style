import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import { AVATAR_STYLE } from "../../../Styling/Avatar";
import { RANKING_ITEM } from "../../../Styling/Ranking";
import { APP_COLORS } from "../../../Styling/System";
import { getPositionColor } from "../../../utils/system";
import DefaultAvatar from "../../Avatar/DefaultAvatar";

const SIZE = Math.ceil(Dimensions.get("screen").width / 7);

export default function RankingItem({ data, onClick }) {
  return (
    <TouchableOpacity
      style={RANKING_ITEM.container}
      activeOpacity={0.7}
      onPress={() => onClick && onClick(data)}
    >
      <Text style={RANKING_ITEM.user_position}>{data?.position}</Text>
      <DefaultAvatar
        url={data?.user?.urlProfile}
        width={SIZE}
        borderWidth={1}
        borderColor={getPositionColor(data.position)}
      />
      <View>
        <Text style={RANKING_ITEM.user_name}>{data?.user?.identifiant}</Text>
        <Text
          style={[
            AVATAR_STYLE.info,
            {
              fontWeight: "bold",
            },
          ]}
        >
          {data.user.gameType}
        </Text>
      </View>

      <View style={RANKING_ITEM.score_container}>
        <Text style={RANKING_ITEM.user_name}>{data?.vote}</Text>
      </View>
    </TouchableOpacity>
  );
}
