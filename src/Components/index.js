import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView } from "react-native";

import { defaultData as DATA } from "../Configuration/api/data";
import { SAFE_AREA_VIEW, STATUSBAR_HEIGHT } from "../Styling/Main";
import CustomCarousel from "./Carroussel";
import { CustomAppBar } from "./Shared/AppBar";

export default function Main({}) {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [endOfData, setEndOfData] = useState(false);

  useEffect(() => {
    if (!endOfData) {
      getData();
    }
  }, [page]);

  const getData = () => {
    try {
      const skip = page * limit;
      const retrieviedData = DATA.slice(skip, skip + limit);
      if (!retrieviedData.length) {
        setEndOfData(true);
      } else {
        setVideos(retrieviedData);
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView style={SAFE_AREA_VIEW.container}>
      <CustomAppBar
        barStyle="light-content"
        height={Platform.OS === "android" ? 0 : STATUSBAR_HEIGHT}
        backgroundColor="#000"
      />
      <CustomCarousel data={videos} />
    </SafeAreaView>
  );
}
