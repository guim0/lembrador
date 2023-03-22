import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../src/components/Button";

import { DateManager } from "../src/components/Calendar";
import CardReminder, { ICardRemind } from "../src/components/CardReminder";

export default function Home() {
  let today = new Date();
  const formatDay = today.toLocaleDateString();

  const mockedReminders: ICardRemind[] = [
    {
      day: "21/01",
      hour: "20:20",
      title: "Aniversário de Caio F.Pimentel",
      status: "done",
    },
    {
      day: "10/02",
      hour: "12:00",
      title: "Exercicios: Engenharia da computação",
      status: "done",
    },
    {
      day: "03/03",
      hour: "15:00",
      title: "Pagar contas",
      status: "done",
    },
    {
      day: "05/03",
      hour: "09:00",
      title: "Consulta",
      status: "done",
    },
    {
      day: "24/07",
      hour: "09:00",
      title: "Aniversario",
      status: "coming",
    },
  ];

  return (
    <SafeAreaView style={styles.safeView}>
      <Text style={styles.today}>{formatDay}</Text>
      <View style={styles.header}>
        <Text style={styles.simpleText}>Olá, Guilherme</Text>
        <Image
          style={styles.userPic}
          source={require("../src/assets/user.jpeg")}
        />
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.yourMonth}>Este é o seu mês</Text>

        <DateManager />

        <Text style={styles.yourReminders}>Seus lembretes</Text>

        {mockedReminders.map((items, index) => (
          <CardReminder key={index} {...items} />
        ))}
        <Button href="/" title="Novo Evento" size={300} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#1C1C1C",
    flex: 1,
  },
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  simpleText: {
    color: "#ffffff",
    fontFamily: "OswaldRegular",
    fontSize: 24,
  },
  today: {
    color: "#D9DCDE",
    fontFamily: "OswaldRegular",
    fontSize: 18,
    textAlign: "left",
    marginHorizontal: 20,
    marginTop: 15,
  },
  header: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  userPic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginHorizontal: 15,
  },

  yourMonth: {
    marginVertical: 24,
    fontFamily: "OswaldRegular",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
  },

  yourReminders: {
    marginVertical: 24,
    fontFamily: "OswaldRegular",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
  },
});
