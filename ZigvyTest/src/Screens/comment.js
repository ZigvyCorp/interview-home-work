import { Text, View } from "antd-mobile-rn";
import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { getColor } from "../Helpers";

const Comment = ({ postID }) => {
  const [expand, setExpand] = useState(false);
  const [comment, setComment] = useState([]);

  const _onGetComment = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
      .then((res) => {
        const rs = _.get(res, "data", []);
        setComment(rs);
      });
  }, []);

  return (
    <View style={{ marginBottom: 16 }}>
      <Pressable
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "rgba(17, 17, 17, 0.1)",
          paddingBottom: 8,
        }}
        onPress={() => _onGetComment()}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#71717A",
            fontWeight: 500,
          }}
        >
          {comment?.length} replies
        </Text>
      </Pressable>
      {expand &&
        comment.map((item) => (
          <View key={item?.id} style={styles.comment}>
            <View
              style={[
                styles.avatar,
                { backgroundColor: getColor(_.get(item, "name", "noname")) },
              ]}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {_.get(item, "name", "U").charAt(0)}
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 12, color: "#71717A", marginBottom: 4 }}>
                {_.get(item, "name", "noname user")}{" "}
                <Text style={{ fontSize: 12, color: "#A1A1AA" }}>
                  {" "}
                  2 day ago
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#333",
                  fontWeight: 400,
                  marginBottom: 8,
                  marginRight: 32,
                }}
              >
                {_.get(item, "body", "")}
              </Text>
              <Text style={{ fontSize: 12, color: "#71717A" }}>Reply to</Text>
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Comment;
