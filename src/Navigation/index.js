import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { SCREENS_NAME } from "../utils/system";
import Home from "./Home";
import Profile from "./Screens/Profile";

const Stack = createStackNavigator();

export default function Navigation({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS_NAME.Home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS_NAME.Profile}
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
