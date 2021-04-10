import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { DATA } from "../data";
import AppBackground from "../theme/AppBackground";
import { Post } from "../components/Post";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainSreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      data: post.data,
      booked: post.booked,
    });
  };

  const [selectionCount] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "My blog",
      headerTitleStyle: {
        fontFamily: "DancingScriptRegular",
        color: "#000",
        fontSize: 35,
      },
      headerRight: (props) => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => console.log("Press")}
          />
        </HeaderButtons>
      ),
      headerLeft: (props) => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName="ios-menu"
            onPress={() => console.log("Press")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <AppBackground>
      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => (
            <Post post={item} onOpen={openPostHandler} />
          )}
        />
      </View>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
