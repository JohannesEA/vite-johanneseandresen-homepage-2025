import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { handleLogin, auth } from "../firebase/firebase";
import { User } from "firebase/auth";
import { globalStyles } from "../style/style";
import { handleNavigate } from "../style/functions";
import HeaderMenu from "../navigation/HeaderMenu";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [user, setUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        handleNavigate("ProfileStack", navigation);
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
        <Text style={globalStyles.title}>Logg inn</Text>
        <View style={globalStyles.inputContainer}>
          <TextInput
            placeholder="Epost"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={globalStyles.input}
          />
          <TextInput
            placeholder="Passord"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={globalStyles.input}
            secureTextEntry
          />
        </View>

        <View style={globalStyles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleLogin(email, password)}
            style={globalStyles.button}
          >
            <Text style={globalStyles.buttonText}>Logg inn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigate("Register", navigation)}
            style={[globalStyles.button, globalStyles.buttonOutline]}
          >
            <Text style={globalStyles.buttonOutlineText}>Ny bruker?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

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
