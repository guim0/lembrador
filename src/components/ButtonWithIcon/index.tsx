import { Link } from "expo-router";

import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface IButtonWithIcon {
  title: string;
}

export const ButtonWithIcon = (props: IButtonWithIcon) => {
  return (
    <Link style={styles.container} href="/onboarding" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.title}> {props.title}</Text>
        <View style={styles.icon}>
          <Image
            source={require("../../assets/icons/next.png")}
            style={{ width: 6, height: 10 }}
          />
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 200,
  },
  button: {
    borderRadius: 10,
    width: 150,
    height: 60,
    marginTop: 40,
    alignSelf: "center",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#17BEBB",
    color: "#ffffff",
  },

  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "OswaldMedium",
    marginRight: 15,
  },
  icon: {
    backgroundColor: "#212A2D",
    borderRadius: 100,
    width: 25,
    height: 25,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginRight: -10,
  },
});
