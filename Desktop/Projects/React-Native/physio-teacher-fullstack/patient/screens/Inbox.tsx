import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import InboxMessageBox from "../components/InboxMessageBox";
import { globalStyles } from "../style/style";
import { RootStackParamList } from "../navigation/BottomNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type UniqueWorkoutProps = NativeStackScreenProps<
  RootStackParamList,
  "ProfileStack"
>;

const Inbox = ({ navigation }: UniqueWorkoutProps) => {
  const DUMMMESSAGES = [
    {
      id: 1,
      title: "Svar om artrose",
      message: "Dette er mitt fantastiske svar som beskriver artrose.",
      date: "10 mars 2022",
    },
    {
      id: 2,
      title: "Svar om nakkeproblemer",
      message: "Dette er mitt fantastiske svar som beskriver nakkeproblemer.",
      date: "11 mars 2022",
    },
    {
      id: 3,
      title: "Svar om ryggproblemer",
      message: "Dette er mitt fantastiske svar som beskriver ryggproblemer.",
      date: "12 mars 2022",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate("ContactTerapaut")}
        >
          <Text style={globalStyles.buttonText}>Send melding</Text>
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          {DUMMMESSAGES.map((message) => (
            <InboxMessageBox
              key={message.id}
              title={message.title}
              message={message.message}
              date={message.date}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: "5%",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
