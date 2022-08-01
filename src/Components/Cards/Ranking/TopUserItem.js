import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { RANKING_ITEM_SIZE, TOP_USER_ITEM_STYLE } from "../../../Styling/Ranking";
import DefaultAvatar from "../../Avatar/DefaultAvatar";

export default function TopUserItem({ item, onClick, borderColor = "#FFF" }) {
  return (
    <TouchableOpacity
      style={TOP_USER_ITEM_STYLE.container}
      onPress={() => onClick && onClick(item.action)}
    >
      <View>
        <DefaultAvatar
          url={item?.user?.urlProfile}
          width={RANKING_ITEM_SIZE}
          borderWidth={1}
          borderColor={borderColor}
        />
      </View>
      <View>
        <Text style={[TOP_USER_ITEM_STYLE.title, { fontWeight: "bold"}]}>{item?.user?.identifiant}</Text>
        <Text style={TOP_USER_ITEM_STYLE.title}>{item?.user?.gameType}</Text>
        <Text style={TOP_USER_ITEM_STYLE.vote_count}>{item?.vote}</Text>
      </View>
    </TouchableOpacity>
  );
}
