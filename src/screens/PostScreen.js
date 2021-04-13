import React, { useState, useEffect, useCallback } from "react";
import {
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
import { useDispatch, useSelector } from "react-redux";
import { toogleBooked } from "../store/actions/post";

export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const postId = route.params.postId;

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toogleHandler = useCallback(() => {
    console.log(`postId`, postId);
    dispatch(toogleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toogleHandler });
  }, [toogleHandler]);

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
    const booked = route.params.booked;
    const toogleHandlers = route.params.toogleHandler;

    const iconName = booked ? "ios-star" : "ios-star-outline";
    navigation.setOptions({
      headerRight: (props) => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName={iconName}
            onPress={toogleHandlers}
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
