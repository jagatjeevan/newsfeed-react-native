import React, { useState } from "react";
import { ScrollView } from "react-native";
import WebView from "react-native-webview";

const WebViewPage = () => {
  const [webViewHeight, setWebViewHeight] = useState("100%");

  const onWebViewMessage = event => {
    console.log("Getting the video");
    setWebViewHeight(Number(event.nativeEvent.data));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "red", height: 1000 }}>
      <WebView
        style={{ height: 700, flex: 1, backgroundColor: "green" }}
        originWhitelist={["*"]}
        source={{ uri: "https://reactnative.dev/" }}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </ScrollView>
  );
};

export default WebViewPage;
