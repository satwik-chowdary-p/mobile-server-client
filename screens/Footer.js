import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

const FooterPart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Ionicons name="square" size={40} color="#fdbb21" />
      </View>
      <View style={styles.container3}></View>
      <View style={styles.container2}>
        <Ionicons name="triangle" size={40} color="#fdbb21" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "13%",
    marginLeft: 20,
    marginRight: 20,
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderColor: "#fdbb21",
  },

  container1: {
    marginBottom: 30,
    // color: "black",
  },
  container2: {
    marginBottom: 30,
    // color: "black",
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
  container3: {
    // position: "absolute",
    zIndex: 100,
    borderWidth: 5,
    borderColor: "#fdbb21",
    borderRadius: 50,
    width: 50,
    height: 50,
    top: -72,

    backgroundColor: "white",
  },
});

export default FooterPart;
