import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";

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
export function ChatListItem({ channel, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{channel.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.windsor,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardIcon: {
    height: 44,
    width: 44,
  },
  cardText: {
    fontSize: 16,
    color: colors.cinder,
    marginLeft: 24,
    marginRight: 8,
  },
});
