import { SafeAreaView, StatusBar, View } from "react-native";

import { STATUS_BAR_STYLE, STATUSBAR_HEIGHT } from "../../Styling/Main";

export const CustomAppBar = ({
  backgroundColor = "#000",
  height = STATUSBAR_HEIGHT,
  ...props
}) => (
  <View style={[STATUS_BAR_STYLE.statusBar, { backgroundColor, height }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
