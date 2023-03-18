import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "antd-mobile-rn";
import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { getColor } from "../Helpers";

const PostDetail = (props) => {
  const params = _.get(props, "route.params", {});
  const { user, post } = params;
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((res) => {
        const rs = _.get(res, "data", []);
        setComment(rs);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userBox}>
          <View
            style={[
              styles.avatar,
              { backgroundColor: getColor(_.get(user, "name", "noname")) },
            ]}
          >
            <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
              {_.get(user, "name", "U").charAt(0)}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {_.get(user, "name", "noname")}
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>2m ago</Text>
            <Text style={{ fontSize: 12, color: "blue", fontWeight: 500 }}>
              {_.get(user, "company.name", "")}
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{_.get(post, "title", "")}</Text>
          <Text style={styles.content}>{_.get(post, "body", "")}</Text>
          <View style={{ borderBottomWidth: 2, marginBottom: 16 }} />
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <MaterialIcons name="comment" size={24} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 3 }}>
              {comment.length}
            </Text>
          </View>
          {comment.map((item) => (
            <View style={{ flexDirection: "row" }} key={item?.id}>
              <View
                style={[
                  styles.avatarCmt,
                  { backgroundColor: getColor(_.get(item, "name", "noname")) },
                ]}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  {_.get(item, "name", "U").charAt(0)}
                </Text>
              </View>
              <View style={styles.cmtBox}>
                <Text style={styles.cmtName}>{_.get(item, "name", "")}</Text>
                <Text style={styles.cmt}>{_.get(item, "body", "")}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF3F8",
  },
  userBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  avatar: {
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  body: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: "#71717A",
    marginBottom: 16,
  },
  avatarCmt: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cmtBox: {
    backgroundColor: "#F4F4F5",
    borderRadius: 6,
    padding: 12,
    marginRight: 32,
    marginBottom: 16,
  },
  cmtName: {
    fontSize: 14,
    color: "black",
    fontWeight: 500,
  },
  cmt: {
    fontSize: 14,
    color: "#A1A1AA",
    fontWeight: 400,
  },
});

export default PostDetail;
