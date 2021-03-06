import React, { useState, useEffect } from "react";
import AppBackground from "../theme/AppBackground";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { View } from "react-native";

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      data: post.data,
      booked: post.booked,
    });
  };

  const bookedPosts = useSelector((state) => state.post.bookedPosts);
  const [selectionCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  return (
    <AppBackground>
      <PostList data={bookedPosts} onOpen={openPostHandler} />
    </AppBackground>
  );
};
