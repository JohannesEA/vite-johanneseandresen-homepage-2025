import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { auth, handleSignUp } from "../firebase/firebase";
import { globalStyles } from "../style/style";
import HeaderMenu from "../navigation/HeaderMenu";
import { User } from "firebase/auth";

const RegisterNewUserScreen = ({ navigation }: any) => {
  const [email, setEmail] = React.useState<string>("");
  const [mobileNumber, setMobileNumber] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const [user, setUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {user && <HeaderMenu />}
      <KeyboardAvoidingView style={styles.innerContainer}>
        <Text style={globalStyles.title}>Registrer ny bruker</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            placeholder="Epost"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={globalStyles.input}
          />
          <TextInput
            placeholder="Telefonnummer"
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
            style={globalStyles.input}
          />
          <TextInput
            placeholder="alder"
            value={age}
            keyboardType="numeric"
            onChangeText={(text) => setAge(text)}
            style={globalStyles.input}
            maxLength={3}
          />
          <TextInput
            placeholder="Passord"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={globalStyles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Bekreft passord"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={globalStyles.input}
            secureTextEntry
          />
        </View>

        <View style={globalStyles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleSignUp(email, password)}
            style={[globalStyles.button, globalStyles.buttonOutline]}
          >
            <Text style={globalStyles.buttonOutlineText}>Registrer</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterNewUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
});
