import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../src/context/userProvider";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";
export default function Home() {
  const { name } = useContext(UserContext);

  let today = new Date();
  const formatDay = today.toLocaleDateString();
  return (
    <SafeAreaView style={styles.safeView}>
      <Text style={styles.today}>{formatDay}</Text>
      <View style={styles.header}>
        <Text style={styles.simpleText}>Olá, Guilherme</Text>
        <Image
          style={styles.userPic}
          source={require("../src/assets/me.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.yourMonth}>Este é o seu mês</Text>

        <Calendar
          style={{ borderRadius: 10, padding: 10 }}
          theme={{
            calendarBackground: "#212A2D",
            backgroundColor: "#212A2D",
            monthTextColor: "#FFFFFF",
            todayBackgroundColor: "#0077B6",
            textDayFontFamily: "OswaldLight",
            textDayFontSize: 18,
            textInactiveColor: "#06ee4b",
            textSectionTitleColor: "red",
          }}
        />
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
});
