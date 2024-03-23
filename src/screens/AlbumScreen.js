import React from "react";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import { View } from "react-native";

const AlbumScreen = () => {
  return (
    <View style={{ backgroundColor: "#fff", height: 800 }}>
      <AlbumList list={albumData} />
    </View>
  );
};

export default AlbumScreen;
