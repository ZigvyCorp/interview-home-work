import { AntDesign } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Pagination,
  SearchBar,
  Text,
  View,
} from "antd-mobile-rn";
import _ from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getColor } from "../Helpers";
import { getPost, reactPost } from "../Redux/action/postAction";
import Comment from "./comment";

const locale = {
  prevText: "Previous",
  nextText: "Next",
};
const limit = 10;

const tags = ["consult", "it", "hala", "gov", "legal", "political"];

const PostScreen = ({ navigation }) => {
  const posts = useSelector((state) => _.get(state, "postReducers.posts"));
  const postLiked = useSelector((state) =>
    _.get(state, "postReducers.postReact")
  );

  //State
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getPost({
        start: 0,
        limit,
      })
    );
  }, []);

  let ld;
  const _onChangePage = (page) => {
    clearTimeout(ld);
    setLoading(true);
    setCurrent(page);
    const startData = (page - 1) * 10;
    dispatch(
      getPost({
        start: startData,
        limit,
        search,
      })
    );
    ld = setTimeout(() => {
      setLoading(false);
    }, 800);
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
      <SearchBar
        style={{ height: 30 }}
        cancelText="Cancel"
        showCancelButton={false}
        onChange={_onChangeSearch}
      />

      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          // ListEmptyComponent={}
          data={posts}
          renderItem={({ item, index }) => {
            const idPost = _.get(item, "post.id");
            const liked = postLiked.includes(idPost);
            return (
              <PostItem
                navigation={navigation}
                item={_.get(item, "post", {})}
                user={_.get(item, "user", "")}
                comments={_.get(item, "comments", [])}
                index={index}
                postLength={posts?.length}
                liked={liked}
              />
            );
          }}
          keyExtractor={(item) => item.post.id}
        />
      )}
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

const PostItem = ({
  item,
  index,
  navigation,
  user,
  comments,
  postLength,
  liked,
}) => {
  const dispatch = useDispatch();
  const { title, body, id } = item;
  const date = moment().format("MMM DD, YYYY");

  const _onDetail = () => {
    navigation?.navigate("PostDetail", { user, post: item, comments, liked });
  };

  const _onLike = () => {
    dispatch(reactPost(id));
  };

  return (
    <View
      style={{
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: index === postLength - 1 ? "transparent" : "black",
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
              {`Created at: ${date}`}
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
        <Pressable onPress={_onLike} style={{ marginBottom: 8 }}>
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={24}
            color={liked ? "#ec4899" : "black"}
          />
        </Pressable>

        <Comment data={comments} />
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
    color: "#71717A",
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
  inputContainer: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    margin: 16,
    paddingHorizontal: 16,
  },
});

export default PostScreen;
