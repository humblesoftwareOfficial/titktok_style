import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

import { HEADER_STYLE } from "../../Styling/Header";
import { APP_COLORS } from "../../Styling/System";
import Avatar from "../Avatar";

const WIDTH = Math.ceil(Dimensions.get("screen").width / 10);

export default function FeedHeader({}) {
  return (
    <View style={HEADER_STYLE.container}>
      <Avatar
        width={WIDTH}
        backgroundColor={APP_COLORS.PRIMARY_COLOR.color}
        borderColor={APP_COLORS.PRIMARY_COLOR.color}
        borderWidth={2}
        url="https://designzonic.com/download/wp-content/uploads/2019/04/Red-Avatar-Luar-Arts.png"
        name="@Humbleking"
        gameType="PlayStation 5"
      />
      <View style={HEADER_STYLE.right_helpers}>
        <TouchableOpacity style={HEADER_STYLE.item_container}>
          <FontAwesome5
            name="power-off"
            size={20}
            color={APP_COLORS.PRIMARY_COLOR.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={HEADER_STYLE.item_container}>
          <MaterialIcons
            name="person-search"
            size={22}
            color={APP_COLORS.LIGHT_COLOR.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={HEADER_STYLE.item_container}>
          <MaterialCommunityIcons
            name="filter-menu"
            size={22}
            color={APP_COLORS.LIGHT_COLOR.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
