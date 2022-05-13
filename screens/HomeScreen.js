import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderPart from "./Header";
import MainPart from "./Main";
import FooterPart from "./Footer";

const HomeScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("1");
  return (
    <View style={styles.container}>
      <HeaderPart />
      <MainPart navigation={navigation} userId={userId} />
      <FooterPart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
