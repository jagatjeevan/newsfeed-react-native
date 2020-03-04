import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

import globalStyles, { appConstants } from "../../src/styles/globalStyles";
import { capitalize } from "../utils/capitalize";

const PageDetails = props => {
  const { navigation, route } = props;
  const { item } = route.params.page;
  return (
    <ScrollView
      style={{ padding: appConstants.spacer, minHeight: 2500 }}
      accessible={true}
    >
      <Image
        source={{ uri: item.url }}
        style={{ width: "100%", height: "auto", minHeight: 300 }}
        accessibilityLabel="some random image"
      />
      <Text style={styles.heading}>{capitalize(item.title)}</Text>
      <Text>{item.body}</Text>
      <Text
        onPress={() => navigation.navigate("WebView")}
        accessible={true}
        accessibilityLabel="Go to the web view page now"
      >
        Go to Webview page
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    ...globalStyles.heading1,
    marginTop: appConstants.subSpacer,
    marginBottom: appConstants.subSpacer
  }
});

export default PageDetails;
