import { View } from "react-native";
import { IEventStatus } from "../@types";

interface IBubble {
  situation: IEventStatus["status"];
}

const whichColor = (status) => {
  if (status === "urgent") return "#C60000";
  if (status === "done") return "#0DA85D";
  if (status === "today") return "#0DA85D";
  if (status === "coming") return "#3D87F6";
  if (status === "alert") return "#E78A00";
  if (status === "simple") return "#D9DCDE";
};
export const Bubble = (props: IBubble) => (
  <View
    style={{
      alignSelf: "center",
      borderRadius: 100,
      width: 10,
      height: 10,
      backgroundColor: whichColor(props.situation),
    }}
  />
);
