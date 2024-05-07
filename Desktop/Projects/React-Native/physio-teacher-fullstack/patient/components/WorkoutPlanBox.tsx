import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../style/style";
import { LinearGradient } from "expo-linear-gradient";

interface WorkoutPlanBoxProps {
  color: string[];
  day: string;
  title: string;
  numberOfExercises: number;
  duration: number;
  onPress: () => void;
}

const WorkoutPlanBox = ({
  color,
  day,
  title,
  numberOfExercises,
  duration,
  onPress,
}: WorkoutPlanBoxProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[color[0], color[1], color[2]]}
        style={styles.dayContainer}
      >
        <Text style={styles.dayText}>{day}</Text>
      </LinearGradient>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{numberOfExercises} øvelser</Text>
          <Text style={styles.text}>{duration} min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 2,
    marginBottom: 40,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
    marginBottom: 5,
  },
  infoContainer: {
    height: "70%",
    width: "70%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    color: "black",
    width: "80%",
  },
  text: {},
  dayText: {
    color: COLORS.WHITE,
  },
});

export default WorkoutPlanBox;
