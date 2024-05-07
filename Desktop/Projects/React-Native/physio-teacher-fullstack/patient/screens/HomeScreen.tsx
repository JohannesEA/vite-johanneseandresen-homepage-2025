import { User } from "firebase/auth";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { auth } from "../firebase/firebase";
import { globalStyles } from "../style/style";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../navigation/HeaderMenu";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/BottomNavigation";

const HomeScreen = () => {
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          style={styles.image}
          source={require("../assets/logo__black.png")}
        />
        <View style={styles.textContainer}>
          <Text style={globalStyles.text}>
            Physio Teacher er en diagnosebasert app som skal gi pasienter et
            bedre oppfølgingstilbud til rehabilitering.
          </Text>
        </View>

        {user ? (
          <View style={globalStyles.listButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ExercisesStack")}
              style={globalStyles.button}
            >
              <Text style={globalStyles.buttonText}>Diagnoser</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("WorkoutPlanStack")}
              style={[globalStyles.button, globalStyles.buttonOutline]}
            >
              <Text style={globalStyles.buttonOutlineText}>Treningsplan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileStack")}
              style={[globalStyles.button, globalStyles.buttonOutline]}
            >
              <Text style={globalStyles.buttonOutlineText}>
                Gå til din profil
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={globalStyles.listButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={globalStyles.button}
            >
              <Text style={globalStyles.buttonText}>Logg inn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={[globalStyles.button, globalStyles.buttonOutline]}
            >
              <Text style={globalStyles.buttonOutlineText}>
                Registrer ny bruker
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: "5%",
    marginTop: 40,
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
});
