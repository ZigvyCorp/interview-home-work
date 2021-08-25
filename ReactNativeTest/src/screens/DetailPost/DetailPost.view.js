import React from 'react';
import {View, Text} from 'react-native';
import capitalize from 'lodash/capitalize';

import {Header} from '../../components';
import {Comments} from '../Modules';

import {DetailPostLogic} from './DetailPost.logic';
import {styles} from './DetailPost.styles';

const _DetailPost = props => {
  const {_onPressBackButton} = DetailPostLogic(props);

  const postData = props.route.params?.postData;

  const {title, comments, body, author, createDate} = postData;
  console.log('body', body);
  return (
    <View style={styles.container}>
      <Header
        title={capitalize(title)}
        onPressBackButton={_onPressBackButton}
      />
      <View style={styles.containerPostInfo}>
        <View style={styles.infoAuthor}>
          <Text style={styles.txtInfo}>Author: {author.name}</Text>
          <Text style={styles.txtInfo}>Create at: {createDate}</Text>
        </View>
        <Text style={styles.body}>{body}</Text>
        <Text style={styles.numberComment}>{comments.length} comments</Text>
        <Comments data={comments} />
      </View>
    </View>
  );
};

export const DetailPost = React.memo(_DetailPost);
