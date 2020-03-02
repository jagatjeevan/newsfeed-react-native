import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import globalStyles, { appConstants } from "../../styles/globalStyles";
import { capitalize } from "../../utils/capitalize";

const ShowItem = props => {
  const { item: data } = props.data;
  console.log(data);
  return (
    <View style={styles.listContainer}>
      <Text style={styles.header}>{capitalize(data.title)}</Text>
      <Text>{data.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderBottomColor: appConstants.borderColor,
    borderBottomWidth: appConstants.borderWidth,
    paddingTop: appConstants.subSpacer,
    paddingBottom: appConstants.subSpacer
  },
  header: {
    ...globalStyles.heading3
  }
});

export default ShowItem;
