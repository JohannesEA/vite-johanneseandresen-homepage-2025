import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UniqueWorkoutsScreen from "../screens/ExerciseScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import WorkoutDescriptionPage from "../screens/WorkoutDescriptionPage";

export type ExerciseStackList = {
  Exercise: {
    title: string;
  };
  Exercises: any;
  ExerciseDescription: {
    title: string;
    category: string;
  };
};

const Stack = createNativeStackNavigator<ExerciseStackList>();

const ExerciseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Exercise"
        component={UniqueWorkoutsScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerBackTitle: "Diagnoser",
          headerTitle: "",
        })}
      />
      <Stack.Screen
        name="ExerciseDescription"
        component={WorkoutDescriptionPage}
        options={({ route }) => ({
          title: route.params?.title,
          category: route.params?.category,
          headerBackTitle: route.params?.category,
        })}
      />
    </Stack.Navigator>
  );
};

export default ExerciseStack;
