
import { StyleSheet, Text, View,TouchableOpacity,StatusBar ,Image,SafeAreaView} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getCommentList, getPostList, getUserList } from '../../data/selector';
import { getCommentRequest, getPostsRequest, getUserRequest } from './redux/actions/postAction';
import Header from '../../component/Header';
import Body from '../../component/body';

export default function Dashboard() {

  const dispatch = useDispatch();
    
  const data = useSelector(getPostList);
  const dataUser = useSelector(getUserList);
  const dataComment = useSelector(getCommentList);

  useEffect(() => {
      dispatch(getPostsRequest());
      dispatch(getUserRequest());
      dispatch(getCommentRequest())
  }, [dispatch]);


  return (
      
      <View style={styles.container}>
          
          { console.log("data------------------------: "+ data)}
          <View style={styles.header}>
                    <Image source={require('../../../assets/icon.png')} style={{paddingLeft:20, height: 35, width: 100,borderRadius:10 }} />
                    <View style={{ flexDirection: 'row', backgroundColor: "transparent", }}>
                        <TouchableOpacity  onPress={() => {}}>
                            <FontAwesome name="user-circle" size={32} color="white" > </FontAwesome>
                           
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => { }}>
                            <Text>Adam Levind</Text>
                            {/* <Image source={{ uri: user?.avatar }} style={styles.avatarUser} width={50} height={50} /> */}
                        </TouchableOpacity>
                    </View>
            </View>
                <Header/>
                <Body data={data} listUser={dataUser} comment={dataComment}/>
        </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  
  header: {
    height: 70,
    width:'100%',
    backgroundColor: '#FF9933',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    paddingLeft: 20,
    paddingRight: 20,
},

});
