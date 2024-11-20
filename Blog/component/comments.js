import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

function toDateTime(secs) {
    var date = new Date(secs);
    var year = date.getUTCFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var t = day + '-' + month + '-' + year;
    return t;
}

function relative(secs) {
    var cur =  Math.floor(Date.now());
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = cur - secs;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed/1000) + ' seconds ago';   
   }

   else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + ' minutes ago';   
   }

   else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + ' hours ago';   
   }

   else if (elapsed < msPerMonth) {
       return Math.round(elapsed/msPerDay) + ' days ago';   
   }

   else if (elapsed < msPerYear) {
       return Math.round(elapsed/msPerMonth) + ' months ago';   
   }

   else {
       return Math.round(elapsed/msPerYear ) + ' years ago';   
   }

}

const avt = require('avt.jpg')

const Comment = ({item}) =>{
    const time = toDateTime(item.created_at)
    const rela = relative(item.created_at)
    return(
    <View style = {styles.comments}>
        <Image
        style = {styles.avt}
        source = {require('../screen/avt.jpg')} />
        <View>
            <Text>{item.owner} (<Text>{rela}</Text>)</Text>
            <Text style ={styles.Text}
            numberOfLines = {3}>{item.content}</Text>
            <TouchableOpacity>
                <Text>Reply to</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const Comments = ({item}) =>{
    
    return(
        <View style = {{marginTop: 20}}>
            <Text>{item.comments.length} comment</Text>
            <View style = {styles.container}>
                <FlatList
                    data ={item.comments}
                    renderItem = {({item}) => {
                        
                        return(
                            <Comment item ={item}/>
                        )
                    }
                    }
                    keyExtractor = {(item) => item._id}
                    >
                </FlatList>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    comments:{

        padding:10,
        marginBottom:10,
        backgroundColor:'blue',
        shadowColor: '#000',
        shadowOffset: {width:0.5,height:0.5},
        elevation :1,
        flex:1,
        flexDirection:'row',
    },
    container:{
      backgroundColor:'white',
      shadowColor: '#000',
      shadowOffset: {width:0.5,height:0.5},
      shadowOpacity:0.5,
      shadowRadius: 3,
      elevation :5,
    },
    avt:{
        marginRight:10,
        width:50,
        height:50

    },
    Text: {
        paddingRight:60,
    }
  })

export default Comments