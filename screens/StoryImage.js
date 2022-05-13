import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StoryImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/storyimage.jpeg")}
        style={{
          width: "85%",
          height: 200,
          borderRadius: 10,
          marginBottom: 10,
        }}
      ></Image>
      <Text style={{ color: "white", letterSpacing: 1.5, fontSize: 13 }}>
        ISRO TO LAUNCH SURVEILLANCE SATELLITE
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "25%",
  },
});

export default StoryImage;
