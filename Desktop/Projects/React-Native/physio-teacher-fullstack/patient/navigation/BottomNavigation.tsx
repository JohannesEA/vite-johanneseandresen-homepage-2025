import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "../style/style";
import { auth } from "../firebase/firebase";
import { User } from "firebase/auth";
import RegisterNewUserScreen from "../screens/RegisterNewUserScreen";
import ExerciseStack from "./ExercisesStack";
import ProfileStack from "./ProfileStack";
import WorkoutPlanStack from "./WorkoutPlanStack";

export type RootStackParamList = {
  Home: any;
  ProfileStack: any;
  Login: any;
  ExercisesStack: any;
  WorkoutPlanStack: any;
  Register: any;
  Inbox: any;
  ContactTerapaut: any;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

export function BottomNavigator() {
  const [user, setUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={COLORS.DARK_BLUE}
        barStyle={{ backgroundColor: COLORS.WHITE }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        {user ? (
          <>
            <Tab.Screen
              name="ProfileStack"
              component={ProfileStack}
              options={{
                tabBarLabel: "Profil",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="ExercisesStack"
              component={ExerciseStack}
              options={{
                tabBarLabel: "Øvelser",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="weight-lifter"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="WorkoutPlanStack"
              component={WorkoutPlanStack}
              options={{
                tabBarLabel: "Treningsplan",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="clipboard-list-outline"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen
              name="Register"
              component={RegisterNewUserScreen}
              options={{
                tabBarLabel: "Registrer ny bruker",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={{
                tabBarLabel: "Logg inn",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="login"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
