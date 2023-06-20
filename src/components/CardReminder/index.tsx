import { Image, StyleSheet, Text, View } from "react-native";
import { IEventStatus } from "../../@types";
import { Bubble } from "../Bubble";
import Line from "../Line";

export interface ICardRemind {
  day: string;
  hour: string;
  title: string;
  status: IEventStatus["status"];
  badge: string;
}
export default function CardReminder(props: ICardRemind) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.simpleText}>
          {props.day} - {props.hour}
        </Text>
        <Line width={90} />
        <Text style={styles.simpleText}>{props.title}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{props.badge}</Text>
        </View>
      </View>

      <View style={styles.extra}>
        <Bubble situation={props.status} />

        <Image
          style={{ width: 18, height: 18 }}
          source={require("../../assets/icons/bin.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212A2D",
    maxWidth: 350,
    height: 120,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  details: {
    alignSelf: "center",
  },
  extra: {
    justifyContent: "space-between",
    alignSelf: "center",
    height: "80%",

    flexDirection: "column",
  },

  simpleText: {
    fontFamily: "OswaldRegular",
    color: "#ffffff",
    textAlign: "left",
    fontSize: 18,
  },

  badge: {
    marginTop: 10,
    backgroundColor: "#3D87F6",
    width: 80,
    height: 20,
    borderRadius: 10,
  },
  badgeText: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 14,
    color: "white",
  },
});
