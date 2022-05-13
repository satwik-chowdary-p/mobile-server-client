import React from "react";
import { View, StyleSheet, Text, Icon } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HeaderPart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {/* <Text>Component1</Text> */}
        <AntDesign name="left" size={40} color="#fdbb21" />
      </View>
      <View style={styles.container2}>
        <Feather name="menu" size={40} color="#fdbb21" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container1: {
    margin: 20,
    paddingLeft: 10,
    color: "black",
  },
  container2: {
    color: "black",
    margin: 20,
    paddingRight: 10,
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
});

export default HeaderPart;
