import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonWithIcon } from "../src/components/ButtonWithIcon";
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
  const [userName, setUserName] = useState<string>("");
  const [userSurname, setUserSurname] = useState<string>("");
  const [userRole, setUserRole] = useState("");
  const { name, setName, surname, setSurname, setRole, role } =
    useContext(UserContext);
  const router = useRouter();

  function handlePressedRole(role) {
    setPressed(role);
    setRole(role);
    setUserRole(role);
  }
  function handleSubmit(values: { name: string; surname: string }) {
    console.log(values);
    setName(values.name);
    setSurname(values.surname);
    router.push("/home");
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
    <ScrollView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.title}>Insira alguns dados.</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Qual seu nome?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setUserName(value)}
            placeholder="Peter"
            placeholderTextColor="#575757"
            keyboardType="default"
            keyboardAppearance="dark"
          />
          <Text style={styles.label}>Qual seu sobrenome?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setUserSurname(value)}
            placeholder="Parker"
            placeholderTextColor="#575757"
            keyboardType="default"
            keyboardAppearance="dark"
          />
        </View>
        <Text style={styles.help}>Precisa de ajuda com?</Text>
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
        <View style={styles.toolkit}>
          <Image
            source={require("../src/assets/icons/info.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.toolkitText}>
            Lembre-se, este app irá te ajudar a se organizar, então se esforce
            para cadastrar seus compromissos
          </Text>
        </View>
        <ButtonWithIcon
          href="/home"
          title="Iniciar"
          onPress={() => handleSubmit}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#1C1C1C",
    flex: 1,
    paddingBottom: 20,
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
  help: {
    color: "#ffffff",
    fontFamily: "OswaldRegular",
    fontSize: 28,
    textAlign: "center",
  },
  form: {
    justifyContent: "center",
    marginVertical: 20,
  },
  input: {
    marginVertical: 10,
    padding: 18,
    fontFamily: "OswaldRegular",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    color: "#D9D9D9",
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

  toolkit: {
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
    borderColor: "#0077B6",
    borderWidth: 1,
    borderRadius: 10,
    maxWidth: 300,
    height: 180,
    width: "100%",
    padding: 20,
  },

  toolkitText: {
    textAlign: "center",
    color: "#0077B6",
    fontFamily: "OswaldRegular",
    fontSize: 20,
  },
});
