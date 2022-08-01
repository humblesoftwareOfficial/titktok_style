import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

import { AVATAR_STYLE } from "../../Styling/Avatar";
import { APP_COLORS } from "../../Styling/System";
import CustomImage from "../Medias/Image";

export default function DefaultAvatar({
  url = "",
  width = 0,
  backgroundColor = APP_COLORS.PRIMARY_COLOR.color,
  borderWidth = 0,
  borderColor = APP_COLORS.PRIMARY_COLOR.color,
  borderRadius = 50,
}) {
  return (
    <View
      style={[
        AVATAR_STYLE.thumbnail,
        {
          width,
          height: width,
          backgroundColor,
          borderWidth,
          borderColor,
          borderRadius,
          ...(!Boolean(url?.length) && {
            justifyContent: "center",
            alignItems: "center",
          }),
        },
      ]}
    >
      {Boolean(url?.length) ? (
        <CustomImage square media={{ name: url }} squareValue={150} />
      ) : (
        <FontAwesome5
          name="user-alt"
          size={20}
          color={APP_COLORS.BLACK_LIGHT_COLOR.color}
        />
      )}
    </View>
  );
}
