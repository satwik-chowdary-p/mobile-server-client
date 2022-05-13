import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";

const GET_USER_DETAILS = gql`
  query query1($userID: ID!) {
    getUserDetails(id: $userID) {
      name
      address
      designation
    }
  }
`;

const ADD_USER_IMAGE = gql`
  mutation query1($profileUserID: ID!, $profileUserImage: String!) {
    addProfilePicture(id: $profileUserID, profileImage: $profileUserImage) {
      profileImage
    }
  }
`;

const MainPart = ({ navigation, userId }) => {
  const [storyBorderColor, setStoryBorderColor] = useState("#fdbb21");
  const [hasNavigated, setHasNavigated] = useState(false);
  const [image, setImage] = useState(null);
  const [userName, setUserName] = useState("Byung Ho");
  const [userDesignation, setUserDesignation] = useState("Photographer");
  const [userAddress, setUserAddress] = useState("www.hoarts.com");

  const { error, data, loading } = useQuery(GET_USER_DETAILS, {
    variables: { userID: userId },
  });
  const [mutateFunction, result] = useMutation(ADD_USER_IMAGE);

  // const [getUserDetails, { error, data, loading }] = useLazyQuery(
  //   GET_USER_DETAILS,
  //   {
  //     variables: { userId: "1" },
  //     fetchPolicy: "network-only",
  //   }
  // );

  // useEffect(() => {
  //   getUserDetails();
  // }, []);

  useEffect(() => {
    // console.log(error, data, loading);
    if (loading) {
      // console.log("loading graph");
    } else if (error) {
      console.log(error);
    } else {
      // console.log("No error");
      setUserDesignation(data.getUserDetails[0].designation);
      setUserName(data.getUserDetails[0].name);
      setUserAddress(data.getUserDetails[0].address);
    }
  }, [error, data, loading]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log("image updated!!!!");
      console.log(result.uri);
      mutateFunction({
        variables: {
          profileUserID: userId,
          profileUserImage: result.uri.slice(0, 100),
        },
      });
    }
    // TODO: DO THE INTEGRATION PART
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={pickImage}>
        <View
          style={{
            width: 130,
            height: 130,
            borderWidth: 3.5,
            borderRadius: 65,
            marginBottom: 50,
            borderColor: storyBorderColor,
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 120,
                height: 120,
                zIndex: 10,
                borderRadius: 60,
                position: "absolute",
                top: 1,
                left: 1,
              }}
            />
          )}
          <View style={styles.buttonContainer}>
            <AntDesign
              name="pluscircle"
              size={24}
              color="#fdbb21"
              onPress={() => {
                if (!hasNavigated) {
                  setHasNavigated(true);
                  setStoryBorderColor("grey");
                }
                navigation.navigate("Story");
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.imageName}>{userName}</Text>
      <Text style={styles.bio}>{userDesignation}</Text>
      <Text style={styles.bio}>{userAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storyBorder: {
    // borderColor: ,
  },
  imageName: {
    fontSize: 24,
    letterSpacing: 3.5,
    marginBottom: 10,
  },
  bio: {
    fontSize: 12,
    letterSpacing: 3.5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: -10,
    zIndex: 100,
    backgroundColor: "white",
    borderRadius: 50,
    // display: "block",
  },
});
export default MainPart;
