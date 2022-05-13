import ProgressBar from "./ProgressBar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import StoryImage from "./StoryImage";
import StoryText from "./StoryText";

const StoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProgressBar navigation={navigation} />
      <StoryImage />
      <StoryText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F4660",
  },
});
export default StoryScreen;
