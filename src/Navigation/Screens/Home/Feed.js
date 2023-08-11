import React from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FeedHeader from "../../../Components/Header/FeedHeader";
import PublicationsList from "../../../Components/List/PublicationsList";
import { CustomAppBar } from "../../../Components/Shared/AppBar";
import { HEADER_STYLE } from "../../../Styling/Header";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../../Styling/Main";

export default function Feed({ navigation, route }) {
  //[SAFE_AREA_VIEW.container]
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <CustomAppBar
        barStyle="light-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      
      <PublicationsList />
    </SafeAreaView>
  );
}
