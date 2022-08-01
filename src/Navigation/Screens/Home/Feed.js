import React from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import FeedHeader from "../../../Components/Header/FeedHeader";

import PublicationsList from "../../../Components/List/PublicationsList";
import { CustomAppBar } from "../../../Components/Shared/AppBar";
import { HEADER_STYLE } from "../../../Styling/Header";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../../../Styling/Main";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Feed({ navigation, route }) {
  //[SAFE_AREA_VIEW.container]
  const insets = useSafeAreaInsets();
  console.log({ insets })
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <CustomAppBar
        barStyle="light-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="transparent"
      />
      <View style={[HEADER_STYLE.float_container, {
        top: insets.top
      }]}>
        <FeedHeader />
      </View>
      <PublicationsList />
    </SafeAreaView>
  );
}
