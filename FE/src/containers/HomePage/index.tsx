import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";

import userAvatar from "@/assets/images/userAvatar.png";
import logo from "@/assets/images/logo.png";

import { BlogList, Header, SearchBar } from "@/components/molecules";

import { ErrorText, Spinner, Text } from "@/components/atoms";

import { UserPayload } from "@/models";

import {
  selectBlogs,
  selectErrorMessage,
  selectIsLoading,
} from "@/store/features/blog/selector";
import { getBlogs } from "@/store/features/blog/slice";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogs = useSelector(selectBlogs);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);

  const UserInformation: UserPayload = {
    name: "Adam Levine",
    avatar: userAvatar,
  };

  const searchBlogs = blogs.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="border m-1 homePage">
      <Header
        avatarImage={UserInformation.avatar}
        avatarName={UserInformation.name}
        logoImage={logo}
        logoName="Logo"
      />
      <Text variant="l">Search Bar</Text>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Text variant="l">Posts</Text>
      <Text variant="s">{`${searchBlogs.length} results.`}</Text>
      <Spinner isLoading={isLoading} />
      <ErrorText text={errorMessage} />
      {searchBlogs.length > 0 ? (
        <BlogList items={searchBlogs || []} />
      ) : (
        <Text
          variant="s"
          style={{
            textAlign: "center",
          }}
        >
          No Post Found
        </Text>
      )}
    </div>
  );
};
