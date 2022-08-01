import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { Text, View } from "react-native";

import { TOP_USER_STYLE } from "../../Styling/Ranking";
import { APP_COLORS } from "../../Styling/System";
import { getPositionColor } from "../../utils/system";
import TopUserItem from "../Cards/Ranking/TopUserItem";

export default function TopUsers({ data, onClickItem }) {
  const renderTopUsers = useCallback(
    () =>
      data?.map((user, _index) => (
        <View
          key={user?.key}
          style={[
            TOP_USER_STYLE.item_container,
            {
              marginTop: _index !== 1 ? 80 : 20,
            },
          ]}
        >
          <View>
            <Text
              style={[
                TOP_USER_STYLE.position,
                {
                  color: getPositionColor(user.position),
                },
              ]}
            >
              {Boolean(user.position === 1) ? (
                <FontAwesome5
                  name="crown"
                  size={24}
                  color={APP_COLORS.YELLOW_COLOR.color}
                />
              ) : (
                user.position
              )}
            </Text>
          </View>
          <TopUserItem
            key={user?.key}
            item={user}
            onClick={(v) => onClickItem && onClickItem(user)}
            borderColor={getPositionColor(user.position)}
          />
        </View>
      )),
    [data]
  );

  return <View style={TOP_USER_STYLE.container}>{renderTopUsers()}</View>;
}
