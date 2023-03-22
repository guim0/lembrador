import { Link } from "expo-router";

import { Pressable, StyleSheet, Text } from "react-native";

interface IButton {
  title: string;
  href?: string;
  size: number;
  onPress?: () => void;
}

export const Button = (props: IButton) => {
  return (
    <Link
      style={{ maxWidth: props.size }}
      href={props.href}
      onPress={props.onPress}
      asChild
    >
      <Pressable style={styles.button}>
        <Text style={styles.title}> {props.title}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: "100%",
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
});
