import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import TagComponent from '../tag/tag';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentList, getPostList, getUserList } from '../../data/selector';
import { getCommentRequest, getPostsRequest, getUserRequest } from '../../screen/post/redux/actions/postAction';

 const Body= (props) => {

    const { data, listUser, dataComment, mode } = props;
    const [currentPosts, setCurrentPosts] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [totalPage, setTotalPage] = useState(0);
    const navigation = useNavigation();
    
    const onChangePagination = (value) => {
      const currentPag = value;
      const pageSiz = pageSize;
      const indexOfLastNews = currentPag * pageSiz;
      const indexOfFirstNews = indexOfLastNews - pageSiz;
      const currentPost = data.slice(indexOfFirstNews, indexOfLastNews);
      setCurrentPosts(currentPost);
  }

    useEffect(() => {
        onChangePagination(1);
        setTotalPage(data.length);
    }, [data]);

    const auThorUser = (post) => {
      const userList = Object.values(listUser);
      console.log("item user list: ",typeof userList);
      const user = userList.filter(item => {
        if(item?.id === post?.userId){
          return user?.username;
        }
      });
      return user[0].name
    }
  return (
    <View style={styles.body}>  
        <FlatList
          data={currentPosts}
          keyExtractor={item => item.id}
          renderItem={(item)=>{
            console.log("item post: ",item);
            return(
              <View>
                <Text style={styles.title}>{item.item.title}</Text>
                <View style={styles.user_info}>
                  <View style={styles.user}>
                          <Text>Author: {console.log(auThorUser(item))}</Text>
                          <Text>Create at: Sep 20 2022</Text>
                      </View>
                      <View style={styles.tag}>
                          <TagComponent/>
                      </View>
                    </View>
                    <View>
                      <Text>{item.item.body}</Text>
                    </View>
              </View>
            )
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    margin:20,
    flexDirection:'column',
  },
  title:{
   
    alignContent: 'space-between'
  },
  user_info:{
    flexDirection:'row',
    

  },
  user:{
      width:200
  },
  tag:{
    
    width:300
  }
})

export default Body;