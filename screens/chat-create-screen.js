import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
export function ChatCreateScreen() {
  const [channelName, setChannelName] = useState("");
  const [loading, setLoading] = useState(false);

  const onCreateOrJoin = () => {
    setLoading(true);
    TwilioService.getInstance()
      .getChatClient()
      .then((client) =>
        client
          .getChannelByUniqueName(channelName)
          .then((channel) =>
            channel.channelState.status !== "joined" ? channel.join() : channel
          )
          .catch(() =>
            client
              .createChannel({
                uniqueName: channelName,
                friendlyName: channelName,
              })
              .then((channel) => channel.join())
          )
      )
      .then(() => showMessage({ message: "You have joined." }))
      .catch((err) => showMessage({ message: err.message, type: "danger" }))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.screen}>
      <Image style={styles.logo} source={images.message} />
      <TextInput
        value={channelName}
        onChangeText={setChannelName}
        style={styles.input}
        placeholder="Channel Name"
        placeholderTextColor={colors.ghost}
      />
      <TouchableOpacity style={styles.button} onPress={onCreateOrJoin}>
        <Text style={styles.buttonText}>Create Or Join</Text>
      </TouchableOpacity>
    </View>
  );
}
