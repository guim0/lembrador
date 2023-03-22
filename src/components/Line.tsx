import React from "react";
import { View } from "react-native";

const Line = (props: { width: number }) => (
  <View
    style={{
      borderBottomColor: "#17BEBB",
      maxWidth: props.width,
      borderBottomWidth: 1,
      marginVertical: 10,
    }}
  />
);

export default Line;
