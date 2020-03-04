import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PageFeed from "./src/views/PageFeed";
import PageDetails from "./src/views/PageDetails";
import WebViewPage from "./src/views/WebViewPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PageFeed} />
        <Stack.Screen name="Details" component={PageDetails} />
        <Stack.Screen name="WebView" component={WebViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
