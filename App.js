import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const blob = new Blob(["hello", "world"]);
  // const response = new Response(blob);
  // response.arrayBuffer().then(()=> {
  //   console.log('data')
  // }).catch(err => {
  //   console.log(err) // this results in an error because FileReader.readAsArrayBuffer is not implemented.
  // });
  const blobURL = URL.createObjectURL(blob);
  console.log(blobURL);
  const request = new XMLHttpRequest();
  request.open('GET', blobURL, true);
  request.responseType= 'arraybuffer';
  request.onload = _event => {
    const arrayBuffer = request.response;
    const typedArray = new Uint8Array(arrayBuffer);
    console.log(typedArray);
  };
  request.onerror = err => {
    console.error(err)
  }
  request.send();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
