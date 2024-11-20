import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  Image,
} from 'react-native';
import {Images} from '../../assets/images';
import capitalize from 'lodash/capitalize';
import Comments from './Comments';

const PostItem = ({
  data,
  onPress = () => {},
  onPressShowMoreComment = () => {},
}) => {
  const {title, comments, body, author, createDate} = data;
  const [showComment, setShowComment] = React.useState(false);

  const _onPressNumberComment = () => {
    setShowComment(!showComment);
    LayoutAnimation.easeInEaseOut();
  };

  return (
    <TouchableOpacity
      onPress={() => onPress(data)}
      activeOpacity={0.8}
      style={styles.container}>
      <Text style={styles.title}>{capitalize(title)}</Text>
      <View style={styles.infoAuthor}>
        <Text style={styles.txtInfo}>Author: {author.name}</Text>
        <Text style={styles.txtInfo}>Create at: {createDate}</Text>
      </View>
      <Text style={styles.body}>
        {body.slice(0, 100)} {body.length > 100 ? '...' : ''}
      </Text>

      <View style={styles.comments}>
        <TouchableOpacity onPress={_onPressNumberComment}>
          <Text style={styles.numberComment}>{comments.length} comments</Text>
        </TouchableOpacity>
        {showComment && (
          <>
            <Comments
              data={comments.slice(0, 2)}
              style={styles.flatListComments}
            />
            <Text
              onPress={() => onPressShowMoreComment(data)}
              style={styles.showMoreTxt}>
              Show more {'>>'}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'KoHo-Bold',
    color: '#fff',
  },
  infoAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
    color: '#fff',
  },
  txtInfo: {
    fontSize: 12,
    fontFamily: 'KoHo-SemiBold',
    color: '#fff',
  },
  body: {
    fontSize: 14,
    width: '100%',
    flexShrink: 1,
    marginTop: 15,
    fontFamily: 'KoHo-Regular',
    color: '#fff',
  },
  comments: {
    width: '100%',
    marginTop: 10,
  },
  numberComment: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#ffffffa3',
  },
  flatListComments: {
    marginTop: 8,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
  showMoreTxt: {
    fontSize: 12,
    alignSelf: 'flex-end',
    color: '#fff',
  },
});

export default React.memo(PostItem);
