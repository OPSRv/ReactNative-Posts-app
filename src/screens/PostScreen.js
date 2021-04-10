import React, { useState, useEffect } from "react";
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
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ ...route }) => {
  const navigation = route.navigation;
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

  const [selectionCount] = useState(0);

  useEffect(() => {
    navigation.setParams({ booked: post.booked });
    const booked = route.route.params.booked;
    console.log(`booked`, booked);
    const iconName = booked ? "ios-star" : "ios-star-outline";
    navigation.setOptions({
      title: "Posts",
      headerTitleStyle: {
        fontFamily: "DancingScriptRegular",
        color: "#000",
        fontSize: 35,
      },
      headerRight: (props) => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName={iconName}
            onPress={() => console.log("Press")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
