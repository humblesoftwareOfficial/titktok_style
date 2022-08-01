import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";

import { HEIGHT, WIDTH } from "../../Styling/Videos";
import { animatedStyles, scrollInterpolator } from "../../utils/animations";
import ItemVideo from "../Medias/ItemVideo";

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default function CustomCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  console.log(data.length)

  const renderItem = useCallback(
    ({ item, index }) => <ItemVideo item={item} key={index} />,
    [data]
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        data={data}
        renderItem={renderItem}
        sliderWidth={WIDTH}
        itemWidth={WIDTH}
        itemHeight={HEIGHT}
        sliderHeight={HEIGHT}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        vertical
        onEndReachedThreshold={0.7}
        onEndReached={() => {
          console.log("end");
        }}
        // onEndReached={}
      />
    </View>
  );
}
