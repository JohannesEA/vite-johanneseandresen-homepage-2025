import firebase, { RNFirebase } from "react-native-firebase";

export const GetBodyparta = () => {
  var list: RNFirebase.firestore.DocumentSnapshot[] = [];
  var snapchot = firebase
    .firestore()
    .collection("Bodyparts")
    .orderBy("createdAt")
    .get();

  snapchot.then((data) => data.forEach((d) => list.push(d)));

  console.log(list);
};
