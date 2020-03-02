import React from "react";
import { View } from "react-native";
import globalStyles from "./src/styles/globalStyles";
import PageFeed from "./src/views/PageFeed";

export default function App() {
  return (
    <View style={globalStyles.appContainer}>
      <PageFeed />
    </View>
  );
}
