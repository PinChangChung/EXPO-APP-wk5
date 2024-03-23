import React from 'react';
import { Image, View, StyleSheet } from "react-native";

const Stars = ({ count }) => {
  const starbox = [];
  for (let i = 0; i < count; i++) {
    starbox.push(<Image source={require("../img/icon_star_filled.png")} style={styles.star} />)
  }
  let s = starbox.length;
  while (s < 5) {
    starbox.push(<Image source={require("../img/icon_star_empty.png")} style={styles.star} />)
    s = starbox.length;
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {starbox}
    </View>
  )
}

const styles = StyleSheet.create({
  star: {
    marginLeft: 1,
    marginRight: 2
  }
})

export default Stars;