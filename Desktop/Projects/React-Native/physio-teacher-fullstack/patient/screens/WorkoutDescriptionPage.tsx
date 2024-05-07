import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WORKOUTS } from "../developement/data";
import { ExerciseStackList } from "../navigation/ExercisesStack";
import MessageBox from "../components/MessageBox";
import VideoWithDexcriptionBox from "../components/VideoWithDexcriptionBox";

type UniqueWorkoutProps = NativeStackScreenProps<
  ExerciseStackList,
  "ExerciseDescription"
>;

const WorkoutDescriptionPage = ({ route }: UniqueWorkoutProps) => {
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
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkoutDescriptionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
});
