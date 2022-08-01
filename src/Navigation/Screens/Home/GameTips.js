import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { SafeAreaView } from "react-native";

import SectionTitle from "../../../Components/Title/SectionTitle";
import { SAFE_AREA_VIEW } from "../../../Styling/Main";
import { FONTS } from "../../../Styling/Polices";
import { APP_COLORS } from '../../../Styling/System';

export default function GameTips({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <SectionTitle
        label=" Game Tips "
        flexValue={0}
        color="#FFF"
        // fontFamily={FONTS.yesteryear}
        marginTop={20}
        marginBottom={10}
        fontSize={24}
        iconRight={<MaterialCommunityIcons name="lightbulb-on" size={24} color={APP_COLORS.SECONDARY_COLOR.color} />}
        iconLeft={<MaterialCommunityIcons name="lightbulb-on" size={24} color={APP_COLORS.SECONDARY_COLOR.color} />}
      />
    </SafeAreaView>
  );
}
