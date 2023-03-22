import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ButtonWithIcon } from "../src/components/ButtonWithIcon";
import { useFonts } from "expo-font";

export default function Page() {
  let [fontsLoaded] = useFonts({
    OswaldLight: require("../src/assets/fonts/Oswald-Light.ttf"),
    OswaldMedium: require("../src/assets/fonts/Oswald-Medium.ttf"),
    OswaldRegular: require("../src/assets/fonts/Oswald-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#1C1C1C" }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>
          Irei te auxiliar com seus compromissos e responsabilidades,
        </Text>

        <Text style={styles.subtitle}>
          sou <Text style={{ color: "#17BEBB" }}>Lembrador</Text>
        </Text>

        <Image
          source={require("../src/assets/access.png")}
          style={styles.image}
          fadeDuration={3}
        />
        <ButtonWithIcon href="/onboarding" title="Iniciar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,

    backgroundColor: "#1C1C1C",
    fontFamily: "OswaldRegular",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 36,
  },
  image: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
});
