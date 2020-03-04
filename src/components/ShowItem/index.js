import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import globalStyles, { appConstants } from "../../styles/globalStyles";
import { capitalize } from "../../utils/capitalize";

const ShowItem = props => {
  const { item: data } = props.data;

  return (
    <View style={styles.listContainer}>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={styles.header} numberOfLines={1}>
          {capitalize(data.title)}
        </Text>
        <Text numberOfLines={4}>{data.body}</Text>
      </View>
      <View style={{ width: 105 }}>
        <Image
          source={{ uri: data.thumbnailUrl }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderBottomColor: appConstants.borderColor,
    borderBottomWidth: appConstants.borderWidth,
    paddingTop: appConstants.subSpacer,
    paddingBottom: appConstants.subSpacer,
    flex: 1,
    flexDirection: "row"
  },
  header: {
    ...globalStyles.heading3
  }
});

export default ShowItem;
