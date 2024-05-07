import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WORKOUTS } from "../developement/data";
import MessageBox from "../components/MessageBox";
import VideoWithDexcriptionBox from "../components/VideoWithDexcriptionBox";
import { WorkoutPlanStackList } from "../navigation/WorkoutPlanStack";
import { globalStyles } from "../style/style";

type WorkoutPlanProps = NativeStackScreenProps<
  WorkoutPlanStackList,
  "WorkoutDayPlan"
>;

const WorkoutDayPlanDescriptionScreen = ({ route }: WorkoutPlanProps) => {
  const workouts = WORKOUTS.filter(
    (x) => x.category.toLowerCase() === route.params.title.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <VideoWithDexcriptionBox
            image={""}
            title={route.params.title}
            numberOfSets={3}
            numberOfReps={"8-15"}
          />
          <MessageBox
            title="Instruksjoner"
            message="Stå med skulderbreddes avstand mellom føttene. Senk kroppen ned mot bakken."
          />

          <TouchableOpacity
            style={[globalStyles.button, styles.button]}
            onPress={() =>
              Alert.alert("Du er flink!! Ferdig med denne delen av treningen.")
            }
          >
            <Text style={globalStyles.buttonText}>Ferdig</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkoutDayPlanDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 50,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  button: {
    marginTop: 30,
  },
});
