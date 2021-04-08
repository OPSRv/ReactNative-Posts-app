import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import AppBackground from "../theme/AppBackground";
import { THEME } from "../theme/theme";

export const PostScreen = ({ ...route }) => {
  const postId = route.route.params.postId;

  const post = DATA.find((p) => p.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Delete post",
      "Exactly delete ?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {},
        },
      ],

      { cancelable: true }
    );
  };

  return (
    <AppBackground>
      <ScrollView style={styles.wrapper}>
        <Image source={{ uri: post.img }} style={styles.image} />
        <Text style={styles.title}>{post.text}</Text>
        <Button
          title="Delete"
          color={THEME.DANGER_COLOR}
          onPress={removeHandler}
        />
      </ScrollView>
    </AppBackground>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontFamily: "OpenSansRegular",
    fontSize: 20,
  },
});
