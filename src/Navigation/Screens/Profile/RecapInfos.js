import React from "react";
import { Text, View } from "react-native";

import { GAMER_PROFILE_QUICKVIEW_STYLE } from "../../../Styling/Ranking";

export default function RecapInfos({ titleContainerColor = "#000" }) {
  return (
    <View style={GAMER_PROFILE_QUICKVIEW_STYLE.infos}>
        <View style={{ flex: 1 }}>
        <View
          style={[
            GAMER_PROFILE_QUICKVIEW_STYLE.infos_item,
            {
              backgroundColor: titleContainerColor,
            },
          ]}
        >
          <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text}>
            Posts
          </Text>
        </View>
        <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_count}>24</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={[
            GAMER_PROFILE_QUICKVIEW_STYLE.infos_item,
            {
              backgroundColor: titleContainerColor,
            },
          ]}
        >
          <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text}>
            Followers
          </Text>
        </View>
        <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_count}>115</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={[
            GAMER_PROFILE_QUICKVIEW_STYLE.infos_item,
            {
              backgroundColor: titleContainerColor,
            },
          ]}
        >
          <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text}>
            Followings
          </Text>
        </View>
        <Text style={[GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_count]}>
          98
        </Text>
      </View>
    </View>
  );
}
