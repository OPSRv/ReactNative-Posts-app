import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{post.date}</Text>
        </View>
        <ImageBackground
          style={styles.image}
          source={{ uri: post.img }}
        ></ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
    borderRadius: 25,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title: { color: "#fff", fontFamily: "OpenSansRegular" },
});