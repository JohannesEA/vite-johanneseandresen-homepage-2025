import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { WORKOUTS } from "../developement/data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import WorkoutOverviewBox from "../components/WorkoutOverviewBox";
import { ExerciseStackList } from "../navigation/ExercisesStack";

type UniqueWorkoutProps = NativeStackScreenProps<
  ExerciseStackList,
  "ExerciseDescription"
>;

const UniqueWorkoutsScreen = ({ route, navigation }: UniqueWorkoutProps) => {
  const workouts = WORKOUTS.filter(
    (x) => x.category.toLowerCase() === route.params.title.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.separator} />
        <Text style={styles.titleTwo}>{workouts.length} øvelser</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {workouts.map((workout) => (
          <WorkoutOverviewBox
            onPress={() =>
              navigation.push("ExerciseDescription", {
                title: workout.title,
                category: route.params.category,
              })
            }
            key={workout._id}
            image={""}
            title={workout.title}
            numberOfSets={3}
            numberOfReps={"8-15"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UniqueWorkoutsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  containerTwo: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  titleTwo: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 22,
  },
  text: {
    marginTop: 10,
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
