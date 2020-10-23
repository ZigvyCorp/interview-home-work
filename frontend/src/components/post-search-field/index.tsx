import { Post } from "@/models/post";
import { FilterRequest } from "@/models/requests/filter-request";
import { useServices } from "@/services";
import { AutoComplete, Form, Input, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { from, Subscription } from "rxjs";

const PostSelection: React.FC<{
  post: Post;
}> = (props) => {
  return (
    <React.Fragment>
      <Typography.Text strong style={{ marginBottom: 10 }}>
        {props.post.title}
      </Typography.Text>
      <br />
      {!!props.post.tags.length && (
        <small>
          Tags:{" "}
          {props.post.tags.map((tag, index) => (
            <Tag key={index} color="#55acee">
              #{tag}
            </Tag>
          ))}
        </small>
      )}
    </React.Fragment>
  );
};

export const PostSearchField: React.FC = () => {
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const { postService } = useServices();
  const history = useHistory();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    if (!search || search.length < 2) return;
    searchPosts();
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [search]);

  const searchPosts = () => {
    setSearching(true);
    const filter = new FilterRequest();
    filter.key = search;
    filter.pageSize = 10;
    subscriptions.push(
      from(postService().getPosts(filter)).subscribe(
        (posts: any) => {
          setSearching(false);
          setPosts(posts.data);
        },
        () => {
          setSearching(false);
        }
      )
    );
  };

  const getOptions = () => {
    return posts.map((post, index) => ({
      id: post._id,
      value: post.title,
      label: <PostSelection post={post} />,
      tags: post.tags,
    }));
  };

  const onSelect = (value: string, option: any) => {
    history.push(`/blogs/${option.id}`);
  };

  return (
    <Form name="searchPost" layout="inline">
      <Form.Item
        name="search"
        style={{ marginTop: "auto", marginBottom: "auto", width: 420 }}
      >
        <AutoComplete
          backfill
          onSearch={setSearch}
          filterOption={(inputValue, option) =>
            option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1 ||
            !!option?.tags.find(
              (tag: string) => tag.indexOf(inputValue.toLowerCase()) !== -1
            )
          }
          options={getOptions()}
          onSelect={onSelect}
        >
          <Input.Search loading={searching} allowClear />
        </AutoComplete>
      </Form.Item>
    </Form>
  );
};
