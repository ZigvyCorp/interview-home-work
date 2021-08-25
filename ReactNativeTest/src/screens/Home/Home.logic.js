import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostAction} from '../../service/actions';
import debounce from 'lodash.debounce';

const NUMBER_ITEMS_PAGING = 10;

export const HomeLogic = props => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.data);
  const loadingPosts = useSelector(state => state.posts.loading);

  const [postsPaging, setPostPaging] = React.useState([]);
  const [enableSearch, setEnableSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [selectedShowMoreComment, setSelectedShowMoreComment] =
    React.useState();

  const filterPosts = useRef(posts);
  const currentPage = React.useRef(0);

  React.useEffect(() => {
    dispatch(fetchPostAction());
  }, []);

  React.useEffect(() => {
    setPostPaging([]);
    currentPage.current = 0;
    const filterResult = posts.filter(post =>
      post.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    filterPosts.current = filterResult;
    setPostPaging(filterResult.slice(0, NUMBER_ITEMS_PAGING));
  }, [posts, searchText]);

  const _onPressSearch = () => {
    setEnableSearch(true);
  };

  const _onPressCloseSearch = () => {
    setSearchText('');
    setEnableSearch(false);
  };

  const _loadMorePost = () => {
    ++currentPage.current;
    const start = currentPage.current * NUMBER_ITEMS_PAGING;
    const end = start + NUMBER_ITEMS_PAGING;
    setPostPaging(prePosts => {
      return [...prePosts, ...filterPosts.current.slice(start, end)];
    });
  };

  const _refreshPost = () => {
    dispatch(fetchPostAction());
  };

  const _onChangeTextSearch = React.useCallback(
    debounce(text => {
      setSearchText(text);
    }, 100),
    [],
  );

  const _onPressItemPost = post => {
    props.navigation.navigate('DetailPost', {postData: post});
  };

  const _onPressShowMoreComment = post => {
    setSelectedShowMoreComment(post);
  };

  const _onCloseModalShowMoreComment = () => setSelectedShowMoreComment();

  return {
    _onPressSearch,
    _loadMorePost,
    _refreshPost,
    loadingPosts,
    postsPaging,
    enableSearch,
    _onPressCloseSearch,
    _onChangeTextSearch,
    searchText,
    _onPressItemPost,
    _onPressShowMoreComment,
    _onCloseModalShowMoreComment,
    selectedShowMoreComment,
  };
};
