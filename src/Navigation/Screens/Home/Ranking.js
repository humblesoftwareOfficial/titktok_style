import React from "react";
import { SafeAreaView } from "react-native";

import RankingList from "../../../Components/List/RankingList";
import { SAFE_AREA_VIEW } from "../../../Styling/Main";
import { SCREENS_NAME } from "../../../utils/system";

export default function Ranking({ navigation, route }) {
  const onShowUserProfile = (user) => {
    try {
      navigation.navigate(SCREENS_NAME.Profile, {
        user
      });
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <RankingList onShowUserProfile={onShowUserProfile}/>
    </SafeAreaView>
  );
}
