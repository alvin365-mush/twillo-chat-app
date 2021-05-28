import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import { routes } from "../App";

const colors = {
  white: "#ffffff",
  black: "#000000",
  lavender: "#ececee",
  eclipse: "#3e3e3e",
  cinder: "#242729",
  malibu: "#55acee",
  whisper: "#eeeeee",
  amaranth: "#E0434C",
  windsor: "#402583",
  ghost: "#bbbdc5",
  snow: "#FBFBFB",
};

export function WelcomeScreen({ navigation }) {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Welcome to Twilio Chat</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Username"
      />
      <TouchableOpacity
        disabled={!username}
        style={styles.button}
        onPress={() => navigation.navigate(routes.ChatList.name, { username })}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.snow,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.amaranth,
  },
  input: {
    width: 280,
    height: 50,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.eclipse,
    marginTop: 32,
    marginBottom: 16,
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: colors.malibu,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 17,
    color: colors.white,
  },
});
