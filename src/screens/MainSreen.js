import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { DATA } from "../data";
import AppBackground from "../theme/AppBackground";
import { Post } from "../components/Post";

export const MainSreen = ({ navigation }) => {
  console.log(`props`, navigation);

  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, data: post.data });
  };

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
