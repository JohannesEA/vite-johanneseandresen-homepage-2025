import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "./BottomNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { COLORS } from "../style/style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProfileStackList } from "./ProfileStack";

const HeaderMenu = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "ProfileStack">
    >();

  return <View style={styles.container}></View>;
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    width: "100%",
    backgroundColor: COLORS.DARK_BLUE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 10,
    height: 80,
    marginTop: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    color: COLORS.WHITE,
  },
  button: {},
});
