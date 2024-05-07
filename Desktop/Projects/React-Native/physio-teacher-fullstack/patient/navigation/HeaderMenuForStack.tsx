import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { COLORS } from "../style/style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileStackList } from "./ProfileStack";

const HeaderMenuForStack = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ContactTerapaut")}
      >
        <MaterialCommunityIcons name="chat" color={COLORS.WHITE} size={26} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <MaterialCommunityIcons name="account" color={COLORS.WHITE} size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMenuForStack;

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    width: "100%",
    backgroundColor: COLORS.DARK_BLUE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 60,
    marginTop: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    color: COLORS.WHITE,
  },
  button: {},
});
