import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../src/context/userProvider";
import React from "react";

export default function Home() {
  const { name } = useContext(UserContext);
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.title}>Olá, {name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#1C1C1C",
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 30,
    color: "#ffffff",
    fontFamily: "OswaldRegular",
    fontSize: 28,
    textAlign: "center",
  },
});
