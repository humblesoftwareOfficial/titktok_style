import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

import { GAMER_PROFILE_QUICKVIEW_STYLE } from "../../Styling/Ranking";
import { APP_COLORS } from "../../Styling/System";
import { getPositionColor } from "../../utils/system";
import DefaultAvatar from "../Avatar/DefaultAvatar";
import CustomButton from "../Buttons/CustomButton";

const SIZE = Math.ceil(Dimensions.get("screen").width / 3);

export default function GamerProfileQuickView({ gamer, onShowUserProfile }) {
  return (
    <ScrollView>
      <View style={GAMER_PROFILE_QUICKVIEW_STYLE.avatar}>
        <DefaultAvatar
          url={gamer?.user?.urlProfile}
          width={SIZE}
          borderWidth={2}
          borderColor={getPositionColor(gamer.position)}
          backgroundColor={APP_COLORS.BLACK_LIGHT_COLOR.color}
          borderRadius={100}
        />
      </View>
      <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.identifiant}>
        {gamer?.user?.identifiant}
      </Text>
      <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.console}>
        Console ID: humbleSoft992
      </Text>
      <View style={GAMER_PROFILE_QUICKVIEW_STYLE.infos}>
        <View style={{ flex: 1 }}>
          <View style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item}>
            <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text}>
              Plateformes
            </Text>
          </View>
          <Text
            style={[
              GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text,
              { fontSize: 12 },
            ]}
          >
            PlayStation 5
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item}>
            <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text}>
              Followers
            </Text>
          </View>
          <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_count}>
            115
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item}>
            <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_text}>
              Videos
            </Text>
          </View>
          <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.infos_item_count}>24</Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <CustomButton
          label="Follow"
          textColor={APP_COLORS.SECONDARY_COLOR.color}
          bgColor="rgba(29, 236, 233, 0.1)"
        />
        <CustomButton
          label="Full profile"
          bgColor="rgba(255, 255, 255, 0.8)"
          textColor={APP_COLORS.BLACK_LIGHT_COLOR.color}
          onClick={() => onShowUserProfile && onShowUserProfile(gamer?.user)}
        />
      </View>
      {/* <View style={GAMER_PROFILE_QUICKVIEW_STYLE.top_right_helper}>
        <View style={GAMER_PROFILE_QUICKVIEW_STYLE.top_right_helper_icon}>
          <SimpleLineIcons name="user-follow" size={22} color="white" />
        </View>
        <Text style={GAMER_PROFILE_QUICKVIEW_STYLE.top_right_helper_text}>Suivre</Text>
      </View> */}
    </ScrollView>
  );
}
