import React from 'react';
import {FlatList, StyleSheet, View, Text, Image} from 'react-native';
import {Images} from '../../assets/images';

const Comments = props => {
  const _renderComment = ({item}) => {
    return (
      <View style={styles.itemComment}>
        <View style={styles.groupInfoCmt}>
          <Image source={Images.defaultAvatar} style={styles.avatar} />
          <View>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.bodyCmt}>{item.body}</Text>
          </View>
        </View>
      </View>
    );
  };

  const _renderKeyExtractorComment = cmt => cmt.id;

  const _renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      {...props}
      keyExtractor={_renderKeyExtractorComment}
      renderItem={_renderComment}
      ItemSeparatorComponent={_renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  itemComment: {
    paddingEnd: 10,
    paddingStart: 15,
    paddingVertical: 8,
  },
  groupInfoCmt: {
    flexDirection: 'row',
  },
  email: {
    fontSize: 12,
    fontFamily: 'KoHo-SemiBold',
    color: '#fff',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginEnd: 8,
    marginTop: 3,
  },
  bodyCmt: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'KoHo-Regular',
    flex: 1,
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#ffffff2f',
  },
});

export default React.memo(Comments);
