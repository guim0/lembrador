import { useContext, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { UserContext, UserContextProvider } from "../src/context/userProvider";

interface ItemData {
  role: string;
  title: string;
}

const roles: ItemData[] = [
  { title: "Trabalho", role: "job" },
  { title: "Faculdade", role: "college" },
  { title: "Pessoal", role: "personal" },
];

interface IRolesButton {
  item: ItemData;
  onPress: () => void;
}

export default function Form() {
  const [pressed, setPressed] = useState<string>();
  const { name, setName, surname, setSurname, setRole } =
    useContext(UserContext);

  function handlePressedRole(role) {
    setPressed(role);
    console.log(role);
  }

  const RoleButton = ({ item, onPress }: IRolesButton) => {
    return (
      <Pressable
        onPress={onPress}
        style={
          pressed !== item.role ? styles.roleButton : styles.roleButtonActive
        }
      >
        <Text
          style={{
            color: "#ffffff",
            fontFamily: "OswaldLight",
            fontSize: 17,
            margin: 0,
          }}
        >
          {item?.title}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira alguns dados.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Qual seu nome?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(name) => setName(name)}
          placeholder="Peter"
          placeholderTextColor="#575757"
          keyboardType="default"
          keyboardAppearance="dark"
        />
        <Text style={styles.label}>Qual seu sobrenome?</Text>
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={(surname) => setSurname(surname)}
          placeholder="Parker"
          placeholderTextColor="#575757"
          keyboardType="default"
          keyboardAppearance="dark"
        />
      </View>
      <Text style={styles.title}>Precisa de ajuda com?</Text>
      <View
        style={{
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 15,
        }}
      >
        {roles.map((item: ItemData) => (
          <RoleButton
            item={item}
            onPress={() => handlePressedRole(item.role)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1C",
    padding: 20,
    flex: 1,
  },

  title: {
    marginTop: 40,
    color: "#ffffff",
    fontFamily: "OswaldRegular",
    fontSize: 28,
    textAlign: "center",
  },

  form: {
    justifyContent: "center",
    marginVertical: 40,
  },
  input: {
    marginVertical: 15,
    padding: 18,
    fontFamily: "OswaldRegular",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  label: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "OswaldRegular",
  },
  roleButton: {
    alignItems: "center",
    width: 100,

    borderColor: "#575757",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  roleButtonActive: {
    alignItems: "center",
    width: 100,

    backgroundColor: "#575757",
    borderColor: "#0077B6",
    borderWidth: 1.5,
    padding: 15,
    borderRadius: 10,
  },
});
