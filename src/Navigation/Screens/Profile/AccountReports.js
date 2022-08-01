import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { PROFILE_STYLE } from "../../../Styling/Profile";
import { APP_COLORS } from "../../../Styling/System";

export default function AccountReports({}) {
  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <TouchableOpacity style={PROFILE_STYLE.item_report}>
        <Text style={PROFILE_STYLE.item_report_text}>Report</Text>
        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <MaterialIcons
            name="report"
            size={24}
            color={APP_COLORS.YELLOW_COLOR.color}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={PROFILE_STYLE.item_report}>
        <Text style={PROFILE_STYLE.item_report_text}>Block</Text>
        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Entypo
            name="block"
            size={21}
            color={APP_COLORS.ORANGE_COLOR.color}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
