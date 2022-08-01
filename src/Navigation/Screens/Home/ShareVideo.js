import React from "react";
import { SafeAreaView } from "react-native";

import SectionTitle from "../../../Components/Title/SectionTitle";
import { SAFE_AREA_VIEW } from "../../../Styling/Main";

export default function ShareVideo({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <SectionTitle
        label="New Media Component"
        flexValue={0}
        color="#FFF"
        marginTop={20}
        marginBottom={10}
        fontSize={24}
      />
    </SafeAreaView>
  );
}
