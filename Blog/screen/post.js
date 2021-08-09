import React, { useEffect, useState }  from 'react'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList
  } from 'react-native';

  import Comments from '../component/comments';

  function toDateTime(secs) {
    var date = new Date(secs);
    var year = date.getUTCFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var t = day + '-' + month + '-' + year;
    return t;
}

  const List = ({item}) =>{
    const time = toDateTime(item.created_at)
    return (
      <View style= {styles.container}>
        <Text style = {styles.titleText}>{item.title}</Text>
        <View style ={{marginTop:10,marginBottom:20}}>
          <Text>Author: {item.user[0].name}</Text>
          <Text>Created_at: {time}</Text>
        </View>
        <View>
          <Text>{item.content}</Text>
        </View>
          <Comments item = {item}/>
      </View>
    )
 
  }

  const Header = () =>{
    return(
      <View style = {styles.header}>
        <View>
          <Text>Logo</Text>
        </View>
        <View>
          <Text>Blogs</Text>
        </View>
        <View>
          <Text>User</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    header:{
      borderColor:'black',
      padding:10,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    container:{
      padding:10,
      marginBottom:10,
      backgroundColor:'white',
      shadowColor: '#000',
      shadowOffset: {width:0.5,height:0.5},
      shadowOpacity:0.5,
      shadowRadius: 3,
      elevation :5,
    },
    titleText: {
      margin: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: "bold"
    },
    comments:{
      marginTop: 20
    }
  })

  const Post = ({todos,Getdata,fetchData}) => {

    useEffect(()=>{
      fetchData();
         
    },[]);
    return (
      <SafeAreaView>
        <Header/>
          <FlatList
          data ={todos}
          renderItem = {({item}) => {
            return <List item = {item}/>
        }
        }
        keyExtractor = {(item) => item._id}
        >
        </FlatList>
      </SafeAreaView>
    );
  };
  
  
  export default Post;