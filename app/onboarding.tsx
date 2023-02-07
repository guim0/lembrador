import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function OnboardingPage() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    OswaldLight: require("../src/assets/fonts/Oswald-Light.ttf"),
    OswaldMedium: require("../src/assets/fonts/Oswald-Medium.ttf"),
    OswaldRegular: require("../src/assets/fonts/Oswald-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Carregando</Text>;
  }

  const onboardingOne = (
    <Text style={styles.titleText}>
      <Text style={{ color: "#17BEBB" }}>Lembrador</Text> é um parceiro de
      trabalho, um colega de faculdade e um facilitador.
    </Text>
  );

  const onboardingTwo = (
    <Text style={styles.titleText}>
      <Text style={{ color: "#17BEBB" }}>Sabemos</Text> que é necessário ser
      organizado, mas algumas pessoas tem mais dificuldade que outras
    </Text>
  );
  const onboardingThree = (
    <Text style={styles.titleText}>
      <Text style={{ color: "#17BEBB" }}>Vamos te ajudar </Text> a conseguir se
      organizar, ou pelo menos, se lembrar dos deveres
    </Text>
  );

  return (
    <Onboarding
      onSkip={() => router.push("/form")}
      onDone={() => router.push("/form")}
      pages={[
        {
          title: onboardingOne,
          subtitle: "",
          titleStyles: { fontFamily: "OswaldRegular" },
          backgroundColor: "#1C1C1C",
          image: <Image source={require("../src/assets/onboarding1.png")} />,
        },
        {
          title: onboardingTwo,
          subtitle: "",
          titleStyles: { fontFamily: "OswaldRegular" },
          backgroundColor: "#1C1C1C",
          image: <Image source={require("../src/assets/cloud-storm.png")} />,
        },
        {
          title: onboardingThree,
          subtitle: "",
          titleStyles: { fontFamily: "OswaldRegular" },
          backgroundColor: "#1C1C1C",
          image: <Image source={require("../src/assets/onboarding3.png")} />,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  titleText: {
    padding: 20,
    fontSize: 40,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
