import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { auth, handleLogoutUser } from "../firebase/firebase";
import { globalStyles } from "../style/style";
import { User } from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/BottomNavigation";
import HeaderMenu from "../navigation/HeaderMenu";
import MessageBox from "../components/MessageBox";

type UniqueWorkoutProps = NativeStackScreenProps<
  RootStackParamList,
  "ProfileStack"
>;

const ProfileScreen = ({ navigation }: UniqueWorkoutProps) => {
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
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/default__profile__pic__no__bg-removebg-preview.png")}
          />
        </View>
        <View style={globalStyles.buttonContainerRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WorkoutPlanStack")}
            style={globalStyles.smallButton}
          >
            <Text style={globalStyles.buttonText}>Treningsplan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Inbox")}
            style={[globalStyles.smallButton, globalStyles.smallButtonOutlined]}
          >
            <Text style={globalStyles.buttonOutlineText}>Inboks</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={globalStyles.text}>Navn: {user?.email}</Text>
            <Text style={globalStyles.text}>Alder: 24</Text>

            <MessageBox
              diagnosis={"Artrose"}
              title="Diagnose"
              message="Artrose er en vanlig revmatisk leddsykdom som rammer hele leddet, men framfor alt tykkelse på leddbrusken som blir redusert."
            />
            <MessageBox
              title="Beskjed fra terapaut"
              message="Pasienten burde intensitetsstyre belastning på vektbærende ledd ut ifra alvorlighetegraden av symptomene. PAsienten rådes å gjennomføre anbefalte øvelser of gølge generelle råd om utholdenhetstrening og riktig kosthold. "
            />
          </View>
        </View>
        <View style={globalStyles.buttonContainerRow}>
          <TouchableOpacity
            onPress={handleLogoutUser}
            style={[globalStyles.smallButton, globalStyles.smallButtonOutlined]}
          >
            <Text style={globalStyles.buttonOutlineText}>Logg ut</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginHorizontal: "5%",
    marginTop: 10,
    zIndex: 1,
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: "5%",
    zIndex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
  },
  image: {
    alignSelf: "center",
    width: "90%",
    height: 200,
    marginTop: 60,
  },
  textContainer: {},
});
