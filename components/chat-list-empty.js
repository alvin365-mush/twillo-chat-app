import React from "react";
import { Text, StyleSheet } from "react-native";

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

export const ChatListEmpty = () => {
  return <Text style={styles.titleText}>No Chats Created</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    marginTop: "50%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: colors.amaranth,
  },
});
