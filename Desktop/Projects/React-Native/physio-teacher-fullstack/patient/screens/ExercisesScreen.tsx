import { User } from "firebase/auth";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { BODY_PARTS } from "../developement/data";
import { auth } from "../firebase/firebase";
import HeaderMenu from "../navigation/HeaderMenu";
import { globalStyles } from "../style/style";

const ExercisesScreen = ({ navigation }: any) => {
  const [exercise, setExercise] = React.useState<string>("");
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
      <HeaderMenu />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Søk etter kroppsdel"
          value={exercise}
          onChangeText={(text) => setExercise(text)}
          style={globalStyles.input}
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={globalStyles.listButtonContainer}>
          {BODY_PARTS.map((bp) => (
            <TouchableOpacity
              key={bp._id}
              onPress={() => navigation.push("Exercise", { title: bp.title })}
              style={[globalStyles.button, styles.button]}
            >
              <Text style={globalStyles.buttonText}>{bp.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: "5%",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    height: 200,
    marginTop: 60,
  },
  textContainer: {
    flex: 1,
  },
  button: {
    marginTop: 6,
    padding: 20,
  },
  inputContainer: { marginTop: 80, paddingHorizontal: "5%" },
});
