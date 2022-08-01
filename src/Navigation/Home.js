import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { APP_COLORS } from "../Styling/System";
import { SCREENS_NAME } from "../utils/system";
import Feed from "./Screens/Home/Feed";
import GameTips from "./Screens/Home/GameTips";
import Ranking from "./Screens/Home/Ranking";
import Report from "./Screens/Home/Report";
import ShareVideo from "./Screens/Home/ShareVideo";

const Tabs = AnimatedTabBarNavigator();

export default () => {
  return (
    <Tabs.Navigator
      initialRouteName={SCREENS_NAME.Profile}
      tabBarOptions={{
        activeBackgroundColor: APP_COLORS.LIGHT_COLOR.color,
        activeTintColor: APP_COLORS.BLACK_LIGHT_COLOR.color,
        inactiveTintColor: APP_COLORS.LIGHT_COLOR.color,
        showLabel: true,
        tabStyle: {
          backgroundColor: APP_COLORS.BLACK_LIGHT_COLOR.color,
          borderColor: "rgba(185, 27, 5, 0.1)", //APP_COLORS.PRIMARY_COLOR.color,
          borderTopWidth: 1,
          elevation: 1,
        },
        style: {
          position: "absolute",
        },
        tabBarHideOnKeyboard: true,
      }}
      appearance={{
        topPadding: 7,
        horizontalPadding: 10,
        // whenActiveShow: "label-only",
        whenInactiveShow: "icon-only",
      }}
    >
      <Tabs.Screen
        name={SCREENS_NAME.Feed}
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "ios-home" : "ios-home"}
              size={size - 3}
              color={focused ? color : APP_COLORS.LIGHT_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={SCREENS_NAME.GameTips}
        component={GameTips}
        options={{
          tabBarLabel: "Game Tips",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-game-controller"
              size={size - 3}
              color={focused ? color : APP_COLORS.SECONDARY_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={SCREENS_NAME.NewMedia}
        component={ShareVideo}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="pluscircle"
              size={size - 3}
              color={focused ? color : APP_COLORS.PRIMARY_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={SCREENS_NAME.Ranking}
        component={Ranking}
        options={{
          tabBarLabel: "Classement",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="crown"
              size={size - 3}
              color={focused ? color : APP_COLORS.YELLOW_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={SCREENS_NAME.Suggestion}
        component={Report}
        options={{
          tabBarLabel: "Suggestion",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="bug-report"
              size={size - 3}
              color={focused ? color : APP_COLORS.LIGHT_COLOR.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
