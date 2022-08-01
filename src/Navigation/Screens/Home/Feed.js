import React from "react";
import { Platform, SafeAreaView, Text } from "react-native";

import FeedHeader from "../../../Components/Header/FeedHeader";
import PublicationsList from "../../../Components/List/PublicationsList";
import { CustomAppBar } from "../../../Components/Shared/AppBar";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../../Styling/Main";

export default function Feed({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <CustomAppBar
        barStyle="light-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="#000"
      />
      <FeedHeader />
      <PublicationsList />
    </SafeAreaView>
  );
}
