import React from 'react';
import {View, TouchableOpacity, RefreshControl, FlatList} from 'react-native';
import capitalize from 'lodash/capitalize';

import {Header, TextField, Modal} from '../../components';
import {PostItem, Comments} from '../Modules';

import {styles} from './Home.styles';
import {HomeLogic} from './Home.logic';

import {IconSVG} from '../../assets/iconSvg';

const _Home = props => {
  const {
    _onPressSearch,
    _loadMorePost,
    _refreshPost,
    loadingPosts,
    postsPaging,
    enableSearch,
    _onPressCloseSearch,
    _onChangeTextSearch,
    _onPressItemPost,
    _onPressShowMoreComment,
    _onCloseModalShowMoreComment,
    selectedShowMoreComment,
  } = HomeLogic(props);

  const _renderButtonRight = () => {
    if (enableSearch) {
      return (
        <View style={styles.viewSearch}>
          <TextField
            renderPrefix={() => {
              return (
                <TouchableOpacity
                  onPress={_onPressCloseSearch}
                  style={styles.closeSearchBtn}>
                  <IconSVG.ChevronRight width={20} height={20} color={'#fff'} />
                </TouchableOpacity>
              );
            }}
            inputProps={{
              placeholder: 'Enter title to search',
              autoFocus: true,
              onChangeText: _onChangeTextSearch,
            }}
          />
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={_onPressSearch} style={styles.filterBtn}>
        <IconSVG.Search width={24} height={24} color={'#fff'} />
      </TouchableOpacity>
    );
  };

  const _renderPost = ({item}) => {
    return (
      <PostItem
        data={item}
        onPress={_onPressItemPost}
        onPressShowMoreComment={_onPressShowMoreComment}
      />
    );
  };

  const _keyExtractorPost = post => post.id;

  const _renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Header
        title={!enableSearch ? 'New feed' : ''}
        renderButtonRight={_renderButtonRight}
      />
      <FlatList
        data={postsPaging}
        nestedScrollEnabled
        renderItem={_renderPost}
        keyExtractor={_keyExtractorPost}
        onEndReachedThreshold={0.2}
        onEndReached={_loadMorePost}
        ItemSeparatorComponent={_renderSeparator}
        refreshControl={
          <RefreshControl refreshing={loadingPosts} onRefresh={_refreshPost} />
        }
      />
      <Modal
        isOpen={!!selectedShowMoreComment}
        title={capitalize(selectedShowMoreComment?.title)}
        onPressClose={_onCloseModalShowMoreComment}
        swipeArea={100}
        onClosed={_onCloseModalShowMoreComment}>
        <Comments data={selectedShowMoreComment?.comments} />
      </Modal>
    </View>
  );
};

export const Home = React.memo(_Home);
