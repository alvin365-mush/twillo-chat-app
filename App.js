import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScreen } from "./screens/Welcome";
import { ChatListScreen } from "./screens/ChatList";

export const routes = {
  Welcome: {
    name: "welcome",
    title: "Welcome",
  },
  ChatList: {
    name: "chat-list",
    title: "Chat List",
  },
  ChatRoom: {
    name: "chat-room",
    title: "Chat Room",
  },
  ChatCreat: {
    name: "chat-create",
    title: "New Channel",
  },
};

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
const Stack = createStackNavigator();
export default function App() {
  const screenOptions = (title) => ({
    title,
    headerStyle: {
      backgroundColor: colors.amaranth,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: "700",
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.Welcome.name}
          options={screenOptions(routes.Welcome.title)}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name={routes.ChatList.name}
          options={screenOptions(routes.ChatList.title)}
          component={ChatListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
