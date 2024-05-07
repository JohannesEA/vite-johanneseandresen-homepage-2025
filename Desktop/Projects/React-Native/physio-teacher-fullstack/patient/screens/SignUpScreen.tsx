import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderMenu from "../navigation/HeaderMenu";

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderMenu />
      <Text>Sign up</Text>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {},
});
