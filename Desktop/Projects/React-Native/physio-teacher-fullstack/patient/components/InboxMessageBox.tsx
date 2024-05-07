import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../style/style";

interface IMessageBox {
  title: string;
  message: string;
  date: string;
}

const MessageBox = ({ title, message, date }: IMessageBox) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.text}>{message}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    marginTop: 10,
    width: "100%",
    borderColor: COLORS.DARK_BLUE,
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  scrollView: {},
  text: {
    color: "black",
    fontSize: 20,
  },
  title: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
  date: {
    color: "black",
    fontSize: 15,
  },
});
