import React, { useEffect, useReducer } from "react";
import HeroBanner from "../components/HeroBanner";
import { View, FlatList } from "react-native";
import { fetchFromNetwork } from "../utils/fetch";
import ShowItem from "../components/ShowItem";

import globalStyles, { appConstants } from "../../src/styles/globalStyles";
import { TouchableHighlight } from "react-native-gesture-handler";

const initialState = {
  data: []
};

function reducer(state, action) {
  switch (action.type) {
    case "updatefeed":
      return { ...initialState, data: action.payload };

    default:
      throw new Error();
  }
}

const PageFeed = props => {
  const { navigation } = props;
  const numberOfPosts = 30;
  const [state, dispatch] = useReducer(reducer, initialState);

  // const mergeResponse = response => {
  //   if (!response.length) return;

  //   console.log("inside page feed", state.data);

  //   const slicedResponse = response.slice(0, numberOfPosts);
  //   if (!state.data.length) {
  //     dispatch({ type: "updatefeed", payload: slicedResponse });
  //     return;
  //   }

  //   let mergedData = [];
  //   for (let i = 0; i < state.data.length; i++) {
  //     mergedData.push({
  //       ...state.data[i],
  //       url: slicedResponse[i].url,
  //       thumbnailUrl: slicedResponse[i].thumbnailUrl
  //     });
  //   }
  //   dispatch({ type: "updatefeed", payload: mergedData });
  // };

  // useEffect(() => {
  //   const apiUrl = "https://jsonplaceholder.typicode.com";
  //   fetchFromNetwork(`${apiUrl}/posts`).then(res => mergeResponse(res));
  //   fetchFromNetwork(`${apiUrl}/photos`).then(res => mergeResponse(res));
  // }, []);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com";
    fetchFromNetwork(`${apiUrl}/posts`).then(res => {
      fetchFromNetwork(`${apiUrl}/photos`).then(resp => {
        let mergedData = [];
        for (let i = 0; i < numberOfPosts; i++) {
          mergedData = [
            ...mergedData,
            { ...res[i], url: resp[i].url, thumbnailUrl: resp[i].thumbnailUrl }
          ];
        }
        dispatch({ type: "updatefeed", payload: mergedData });
      });
    });
  }, []);

  const getList = () => {
    if (!state.data.length) return;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={datum => {
            return (
              <TouchableHighlight
                onPress={() => navigation.navigate("Details", { page: datum })}
                underlayColor="white"
              >
                <ShowItem data={datum} />
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ ...globalStyles.appContainer }}>
      <HeroBanner
        heading="This is a text from Hero Banner"
        subHeading="This is a subtitle lorem ipsum dolar met"
        imageContainerStyles={{
          marginLeft: -appConstants.spacer,
          marginRight: -appConstants.spacer,
          marginTop: -appConstants.spacer
        }}
        image={{
          source: "https://cdn.stocksnap.io/img-thumbs/960w/MNUAXNCKD8.jpg",
          width: "100%",
          height: "auto"
        }}
      />
      {getList()}
    </View>
  );
};

export default PageFeed;
