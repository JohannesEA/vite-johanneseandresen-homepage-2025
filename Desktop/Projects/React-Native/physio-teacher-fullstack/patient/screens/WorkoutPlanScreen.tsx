import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { User } from "firebase/auth";
import React from "react";
import { StyleSheet, Text, ScrollView, StatusBar, View } from "react-native";
import WorkoutPlanBox from "../components/WorkoutPlanBox";
import { WORKOUTPLAN } from "../developement/data";
import { auth } from "../firebase/firebase";
import HeaderMenu from "../navigation/HeaderMenu";
import { WorkoutPlanStackList } from "../navigation/WorkoutPlanStack";
import { globalStyles } from "../style/style";

type WorkoutPlanProps = NativeStackScreenProps<
  WorkoutPlanStackList,
  "WorkoutDayPlan"
>;

const WorkoutPlanScreen = ({ navigation }: WorkoutPlanProps) => {
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

      <View style={styles.headerContainer}>
        <Text style={globalStyles.title}>Din treningsplan</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {WORKOUTPLAN.map((workout) => (
          <WorkoutPlanBox
            onPress={() =>
              navigation.push("WorkoutDayPlan", {
                title: workout.title,
                color: workout.color,
                day: workout.day,
                numberOfExercises: workout.numberOfExercises,
                duration: workout.duration,
              })
            }
            key={workout._id}
            color={workout.color}
            day={workout.day}
            title={workout.title}
            numberOfExercises={workout.numberOfExercises}
            duration={workout.duration}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default WorkoutPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: "5%",
    position: "relative",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
