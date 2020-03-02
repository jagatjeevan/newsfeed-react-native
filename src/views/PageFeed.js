import React, { useState, useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import { View, FlatList } from "react-native";
import { fetchFromNetwork } from "../utils/fetch";
import ShowItem from "../components/ShowItem";

const PageFeed = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchFromNetwork("https://jsonplaceholder.typicode.com/posts").then(res => {
      setData(res.slice(0, 15));
    });
  }, []);

  const getList = () => {
    if (!data.length) return;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={datum => <ShowItem data={datum} key={datum.id} />}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeroBanner
        heading="This is a text from Hero Banner"
        subHeading="This is a subtitle lorem ipsum dolar met"
        image={{
          width: "100%",
          height: "auto"
        }}
      />
      {getList()}
    </View>
  );
};

export default PageFeed;
