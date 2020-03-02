import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import globalStyles from "../../styles/globalStyles";

const HeroBanner = props => {
  const { heading, subHeading, image } = props;
  return (
    <View style={styles.heroBannerContainer}>
      <Image
        source={{
          uri: "https://cdn.stocksnap.io/img-thumbs/960w/MNUAXNCKD8.jpg"
        }}
        style={{
          width: image.width,
          height: image.height,
          minHeight: image.minHeight || 200
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{heading}</Text>
        <Text style={styles.subTitle}>{subHeading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroBannerContainer: {
    position: "relative"
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10
  },
  subTitle: {
    color: "#fff"
  },
  text: {
    ...globalStyles.heading1,
    color: "#fff",
    marginBottom: 5
  }
});

export default HeroBanner;
