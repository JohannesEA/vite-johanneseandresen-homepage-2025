import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../style/style";

interface IWorkoutOverviewBox {
  image: string;
  title: string;
  numberOfSets: number;
  numberOfReps: string;
  onPress: () => void;
  isCompleted?: boolean;
}

const WorkoutOverviewBox = ({
  onPress,
  image,
  isCompleted,
  title,
  numberOfSets,
  numberOfReps,
}: IWorkoutOverviewBox) => {
  return (
    <TouchableOpacity
      style={[styles.container, isCompleted && styles.isCompleted]}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={require("../assets/default__profile__pic__no__bg-removebg-preview.png")}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>
          {numberOfSets} x {numberOfReps} repitisjoner
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutOverviewBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
    padding: 10,
  },
  isCompleted: {
    backgroundColor: COLORS.LIGHT_GREEN,
  },
  innerContainer: {},
  title: {
    fontWeight: "700",
    fontSize: 25,
    color: "black",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  image: {
    alignSelf: "center",
    width: 80,
    height: 100,
    marginRight: 100,
    backgroundColor: "white",
  },
});
