import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";

interface IWorkoutOverviewBox {
  image: string;
  title: string;
  numberOfSets: number;
  numberOfReps: string;
}

const VideoWithDexcriptionBox = ({
  image,
  title,
  numberOfSets,
  numberOfReps,
}: IWorkoutOverviewBox) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState<any>({});

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require("../assets/default__profile__pic__no__bg-removebg-preview.png")}
      /> */}
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}></View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>
          {numberOfSets} x {numberOfReps} repitisjoner
        </Text>
      </View>
    </View>
  );
};

export default VideoWithDexcriptionBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 15,
    padding: 10,
    width: "100%",
  },
  innerContainer: {
    width: "100%",
  },
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
    width: "100%",
    height: 300,
    backgroundColor: "white",
  },
  videoContainer: {
    alignSelf: "center",
    width: "100%",
    height: 300,
    backgroundColor: "white",
  },
  video: {
    alignSelf: "center",
    height: 300,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
