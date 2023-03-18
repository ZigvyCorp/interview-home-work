import { InputItem, Pagination, Text, View } from "antd-mobile-rn";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getColor } from "../Helpers";
import { getPost } from "../Redux/action/postAction";
import Comment from "./comment";

const locale = {
  prevText: "Previous",
  nextText: "Next",
};
const limit = 10;

const tags = ["consult", "it", "hala", "gov", "legal", "political"];

const PostScreen = ({ navigation }) => {
  const posts = useSelector((state) => _.get(state, "postReducers.posts"));
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getPost({
        start: 0,
        limit,
      })
    );
  }, []);

  const _onChangePage = (page) => {
    setCurrent(page);
    const startData = (page - 1) * 10;
    dispatch(
      getPost({
        start: startData,
        limit,
        search,
      })
    );
  };

  //Search
  let debounce;
  const _onChangeSearch = (text) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      setSearch(text);
      setCurrent(1);
      dispatch(
        getPost({
          start: 0,
          limit,
          search: text,
        })
      );
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <InputItem
        cursorColor={"blue"}
        placeholder="Search"
        clearButtonMode="always"
        onChange={_onChangeSearch}
        style={{
          borderBottomColor: "#3498db",
          borderBottomWidth: 2,
        }}
      />

      <FlatList
        data={posts}
        renderItem={({ item, index }) => (
          <PostItem navigation={navigation} item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Pagination
        total={10}
        current={current}
        locale={locale}
        onChange={(page) => _onChangePage(page)}
      />
      <View style={{ height: 30 }} />
    </View>
  );
};

const PostItem = ({ item, index, navigation }) => {
  const posts = useSelector((state) => _.get(state, "postReducers.posts"));
  const { title, body, userId, id } = item;
  const date = moment().format("MMM DD, YYYY");
  //State
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        const rs = _.get(res, "data", {});
        setUser(rs);
      });
  }, []);

  const _onDetail = () => {
    navigation?.navigate("PostDetail", { user, post: item });
  };

  return (
    <View
      style={{
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor:
          index === posts?.length - 1 ? "transparent" : "black",
      }}
    >
      <Pressable style={styles.boxItem} onPress={_onDetail}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.author}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>
              {`Author: ${_.get(user, "name", "privative user")}`}
            </Text>
            <Text style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>
              {`Create at: ${date}`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {tags.map((tag, index) => (
              <View
                key={`${tag}-${index}`}
                style={{
                  borderWidth: 1,
                  padding: 2,
                  borderColor: getColor(tag),
                  borderRadius: 4,
                  margin: 2,
                }}
              >
                <Text style={{ fontSize: 10, color: getColor(tag) }}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.content}>
          {body.length < 100 ? body : body.substring(0, 100)}
        </Text>
      </Pressable>
      <View style={{ paddingHorizontal: 16 }}>
        <Comment postID={id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  author: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  content: {
    fontSize: 14,
    fontWeight: 500,
    color: "#333",
    marginBottom: 32,
  },
  comment: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "red",
    marginRight: 8,
  },
});

export default PostScreen;
