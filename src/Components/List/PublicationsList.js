import { useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, RefreshControl, Text, View } from "react-native";

import { defaultData } from "../../Configuration/api/data";
import PublicationCard from "../Cards/Publication";

const WIDTH = Dimensions.get("screen").width;

export default function PublicationsList({}) {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [publications, setPublications] = useState(defaultData);
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFocused = useIsFocused();

  useEffect(() => {
    console.log({ isFocused });
  }, [isFocused]);

  const onViewableItemsChanged = (info) => {
    const { viewableItems, changed } = info;
    // console.log({ viewableItems });
    // console.log({ changed });
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewAreaCoveragePercentThreshold: 100,
      minimumViewTime: 500,
      onViewableItemsChanged,
    },
  ]);

  const onRefreshData = () => {};

  const onEndReached = () => {
    // console.log("end of list");
  };

  const getItemLayout = (data, index = 0) => ({
    length: WIDTH,
    offset: WIDTH * index,
    index,
  });

  const renderPublications = useCallback(
    ({ item, index }) => (
      <PublicationCard
        key={item?.code}
        publication={item}
        isActiveIndex={index === activeIndex && isFocused}
      />
    ),
    [publications, activeIndex, isFocused]
  );

  const keyExtractor = useCallback((item) => item.code, [publications]);

  return (
    <FlatList
      style={{ backgroundColor: "#000" }}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      disableIntervalMomentum
      data={publications}
      renderItem={renderPublications}
      keyExtractor={keyExtractor}
      maxToRenderPerBatch={6}
      onEndReachedThreshold={0.5}
      updateCellsBatchingPeriod={100}
      initialNumToRender={3}
      onMomentumScrollBegin={() => {
        setOnEndReachedCalledDuringMomentum(false);
      }}
      onMomentumScrollEnd={(event) => {
        onEndReached();
        setActiveIndex(
          Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width)
          )
        );
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshData} />
      }
      getItemLayout={getItemLayout}
      windowSize={10}
      disableVirtualization
      snapToInterval={WIDTH}
      snapToAlignment="start"
      decelerationRate="fast"
    />
  );
}
