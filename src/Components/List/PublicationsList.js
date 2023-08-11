import { useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, RefreshControl, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { paginationSimulation } from "../../Configuration/api/simulationbackend";
import { HEADER_STYLE } from "../../Styling/Header";
import PublicationCard from "../Cards/Publication";
import FeedHeader from "../Header/FeedHeader";
import GameLoading from "../Loaders/GameLoading";

const WIDTH = Dimensions.get("screen").width;
const REACHED_POSITION = 2;

export default function PublicationsList({}) {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [publications, setPublications] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndexTrigerredRequest, setLastActiveIndexTrigerredRequest] =
    useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log({ activeIndex });
    onActiveIndexChanged();
  }, [activeIndex]);

  useEffect(() => {
    const newData = paginationSimulation(activePage);
    const data = publications || []
    setPublications(data.concat(newData));
  }, [activePage]);

  useEffect(() => {
    if (publications) {
      setIsLoading(false);
    }
  }, [publications]);

  useEffect(() => {
    if (lastActiveIndexTrigerredRequest) {
      console.log("here");
      setActivePage(activePage + 1);
    }
  }, [lastActiveIndexTrigerredRequest]);

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

  const onEndReached = ({ distanceFromEnd }) => {
    if (!onEndReachedCalledDuringMomentum) {
      setOnEndReachedCalledDuringMomentum(true);
      // if (lastRequestHasData) {
      //   setPage(page + 1);
      //   setRetrievingData(true);
      // }
      console.log({ distanceFromEnd });
    }
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

  const mustMakeNewRequest = () =>
    activeIndex &&
    activeIndex % REACHED_POSITION === 0 &&
    activeIndex > lastActiveIndexTrigerredRequest;

  const onActiveIndexChanged = () => {
    if (mustMakeNewRequest()) {
      setLastActiveIndexTrigerredRequest(activeIndex);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={[HEADER_STYLE.float_container, {
        top: insets.top
      }]}>
        <FeedHeader />
      </View>
      {Boolean(!publications) ? (
        <View style={{ flex: 1 }}>
          <GameLoading />
        </View>
      ) : (
        <FlatList
          bounces={false}
          style={{ backgroundColor: "#FFF" }}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          disableIntervalMomentum
          data={publications}
          renderItem={renderPublications}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={6}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          updateCellsBatchingPeriod={100}
          initialNumToRender={3}
          onMomentumScrollBegin={() => {
            setOnEndReachedCalledDuringMomentum(false);
          }}
          onMomentumScrollEnd={(event) => {
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
      )}
    </View>
  );
}
