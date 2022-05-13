import { View, StyleSheet, Text } from "react-native";
import React, { useState, useEffect, useRef } from "react";

const ProgressBar = ({ navigation }) => {
  const [completed, setCompleted] = useState(0);
  const [completedPercentage, setCompletedPercentage] = useState("0%");
  const [hasCompleted, setHasCompleted] = useState(false);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    if (completed < 100) {
      setCompleted(completed + 0.35);
    } else {
      setHasCompleted(true);
    }

    if (hasCompleted) {
      navigation.pop();
    }
  }, 10);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View
          style={{
            zIndex: 100,
            backgroundColor: "white",
            width: completed.toString() + "%",
            height: 5,
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "20%",
  },
  progressContainer: {
    width: "85%",
    height: "5%",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "white",
  },
  // completedContainer: {
  //   // position: "absolute",
  //   // top: 0,
  //   // left: 0,

  // },
});

export default ProgressBar;
