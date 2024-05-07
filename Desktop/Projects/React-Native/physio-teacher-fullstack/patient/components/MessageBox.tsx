import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../style/style";

interface IMessageBox {
  diagnosis?: string;
  title: string;
  message: string;
}

const MessageBox = ({ title, message, diagnosis }: IMessageBox) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          {diagnosis && (
            <Text style={styles.title}>
              {title}: {diagnosis}
            </Text>
          )}
          {!diagnosis && <Text style={styles.title}>{title}</Text>}
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
});
