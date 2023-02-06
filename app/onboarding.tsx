import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";

export default function Page({ navigation }) {
  let [fontsLoaded] = useFonts({
    OswaldLight: require("../src/assets/fonts/Oswald-Light.ttf"),
    OswaldMedium: require("../src/assets/fonts/Oswald-Medium.ttf"),
    OswaldRegular: require("../src/assets/fonts/Oswald-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Carregando</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button title="Go back to" onPress={() => navigation.goBack()} />

        <Text style={styles.title}>
          <Text style={{ color: "#17BEBB" }}>Lembrador</Text> é um parceiro de
          trabalho, um colega de faculdade e um facilitador.
        </Text>

        <Image
          source={require("../src/assets/onboarding1.png")}
          style={styles.image}
        />
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

  image: {
    alignSelf: "center",
    width: 300,
    height: 200,
  },
});
