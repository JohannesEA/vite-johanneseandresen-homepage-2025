import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React from "react";
import { globalStyles } from "../style/style";
import HeaderMenu from "../navigation/HeaderMenu";
import HeaderMenuForStack from "../navigation/HeaderMenuForStack";

const ContactTerapautScreen = () => {
  const [title, setTitle] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.innerContainer}>
        <Text style={globalStyles.title}>Kontakt din terapaut</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            placeholder="Tittel"
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={globalStyles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={20}
            placeholder="Melding"
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={globalStyles.textarea}
          />
          <TouchableOpacity
            style={[globalStyles.button, styles.button]}
            onPress={() => Alert.alert("Melding sendt til terapauten")}
          >
            <Text style={globalStyles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ContactTerapautScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    maxWidth: "80%",
    marginTop: 40,
  },
});
