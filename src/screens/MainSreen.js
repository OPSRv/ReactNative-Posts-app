import React, { useState, useEffect } from "react";
import AppBackground from "../theme/AppBackground";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/post";
import { useDispatch, useSelector } from "react-redux";

export const MainSreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      data: post.data,
      booked: post.booked,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.post.allPosts);

  const [selectionCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
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
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <AppBackground>
      <PostList data={allPosts} onOpen={openPostHandler} />
    </AppBackground>
  );
};
