import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import WorkoutOverviewBox from "../components/WorkoutOverviewBox";
import { WORKOUTSDAYPLAN } from "../developement/data";
import { WorkoutPlanStackList } from "../navigation/WorkoutPlanStack";

type WorkoutPlanProps = NativeStackScreenProps<
  WorkoutPlanStackList,
  "WorkoutDayPlan"
>;
const WorkoutDayPlanScreen = ({ route, navigation }: WorkoutPlanProps) => {
  const workouts = WORKOUTSDAYPLAN.filter(
    (x) => x.workoutplan.toLowerCase() === route.params?.title.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.separator} />
        <Text style={styles.titleTwo}>{workouts.length} øvelser</Text>
        <Text style={styles.text}>Tid: {route.params.duration} minutter</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {workouts.map((workout) => (
          <WorkoutOverviewBox
            onPress={() =>
              navigation.push("WorkoutDayPlanDescription", {
                title: workout.title,
              })
            }
            isCompleted={workout.isCompleted}
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

export default WorkoutDayPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 10,
  },
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
    alignSelf: "flex-start",
    marginLeft: 22,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
