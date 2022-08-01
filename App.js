import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View, LogBox } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";

import GameLoading from "./src/Components/Loaders/GameLoading";
import Navigation from "./src/Navigation";
import { APP_COLORS } from "./src/Styling/System";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#72065b",
    accent: "#f1c40f",
  },
};

const ignoreWarns = [
  "EventEmitter.removeListener",
  "[fuego-swr-keys-from-collection-path]",
  "Setting a timer for a long period of time",
  "ViewPropTypes will be removed from React Native",
  "AsyncStorage has been extracted from react-native",
  "exported from 'deprecated-react-native-prop-types'.",
  "Non-serializable values were found in the navigation state.",
  "VirtualizedLists should never be nested inside plain ScrollViews",
];

export default function App() {
  const [fontsLoaded] = useFonts({
    avenirBold: require("./src/assets/fonts/AvenirNextLTPro-Bold.otf"),
    avenir: require("./src/assets/fonts/AvenirNextLTPro-Regular.otf"),
    alexBrush: require("./src/assets/fonts/AlexBrush-Regular.ttf"),
    grapeNuts: require("./src/assets/fonts/GrapeNuts-Regular.ttf"),
    belleAurore: require("./src/assets/fonts/LaBelleAurore-Regular.ttf"),
    sacramento: require("./src/assets/fonts/Sacramento-Regular.ttf"),
    yesteryear: require("./src/assets/fonts/Yesteryear-Regular.ttf"),
    snigletRegular: require("./src/assets/fonts/Sniglet-Regular.ttf"),
    snigletBold: require("./src/assets/fonts/Sniglet-ExtraBold.ttf"),
    pacificoRegular: require("./src/assets/fonts/Pacifico-Regular.ttf"),
    righteousRegular: require("./src/assets/fonts/Righteous-Regular.ttf"),
  });

  useEffect(() => {
    const warn = console.warn;
    console.warn = (...arg) => {
      for (const warning of ignoreWarns) {
        if (arg[0].startsWith(warning)) {
          return;
        }
      }
      warn(...arg);
    };

    LogBox.ignoreLogs(ignoreWarns);
  }, []);

  if (Platform.OS === "android")
    NavigationBar.setBackgroundColorAsync(APP_COLORS.PRIMARY_COLOR.color);

  return (
    <PaperProvider theme={theme}>
      <RootSiblingParent>
        {fontsLoaded ? (
          <Navigation />
        ) : (
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              backgroundColor: "#000",
            }}
          >
            <GameLoading />
          </View>
        )}
        <StatusBar style="dark" />
      </RootSiblingParent>
    </PaperProvider>
  );
}
