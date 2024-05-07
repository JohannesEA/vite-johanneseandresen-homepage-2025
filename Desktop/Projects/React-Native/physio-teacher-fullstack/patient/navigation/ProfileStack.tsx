import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactTerapautScreen from "../screens/ContactTerapautScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Inbox from "../screens/Inbox";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, globalStyles } from "../style/style";

export type ProfileStackList = {
  Profile: any;
  ContactTerapaut: any;
  Inbox: any;
};

const Stack = createNativeStackNavigator<ProfileStackList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactTerapaut"
        component={ContactTerapautScreen}
        options={{ headerBackTitle: "Inbox" }}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerBackTitle: "Profil",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: 120,
    padding: 5,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
