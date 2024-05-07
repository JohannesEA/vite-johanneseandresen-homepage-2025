import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactTerapautScreen from "../screens/ContactTerapautScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Inbox from "../screens/Inbox";
import WorkoutPlanScreen from "../screens/WorkoutPlanScreen";
import WorkoutDayPlanScreen from "../screens/WorkoutDayPlanScreen";
import WorkoutDayPlanDescriptionScreen from "../screens/WorkoutDayPlanDescriptionScreen";

export type WorkoutPlanStackList = {
  WorkoutPlan: any;
  WorkoutDayPlan: {
    title: string;
    image?: string;
    color: string[];
    day: string;
    numberOfExercises: number;
    duration: number;
  };
  WorkoutDayPlanDescription: {
    title: string;
  };
};

const Stack = createNativeStackNavigator<WorkoutPlanStackList>();

const WorkoutPlanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorkoutPlan"
        component={WorkoutPlanScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkoutDayPlan"
        component={WorkoutDayPlanScreen}
        options={({ route }) => ({
          title: route.params?.title,
          color: route.params?.color,
          day: route.params?.day,
          numberOfExercises: route.params?.numberOfExercises,
          duration: route.params?.duration,
          headerBackTitle: "Treningsplan",
          headerTitle: "",
        })}
      />
      <Stack.Screen
        name="WorkoutDayPlanDescription"
        component={WorkoutDayPlanDescriptionScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerBackTitle: "Dagsplan",
        })}
      />
    </Stack.Navigator>
  );
};

export default WorkoutPlanStack;
