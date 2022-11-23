import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';



const Header=()=>{
    const [search, setSearch] = useState("");
    return (
        <View>
             <View style={styles.header}>
                <Text>Hoang Trung Quan</Text>
                <Text>Post API</Text>
            </View>
        <StatusBar style="auto" />
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{setSearch(text)}}
                    value={search}
                    placeholder="Type to search post ..."
                />
                <TouchableOpacity style={styles.searchBarFilter} onPress={()=> {}}>
                    <Ionicons name="ios-filter-outline" size={20} color="#ABA7A7" style={{alignSelf:'center'}} />
                </TouchableOpacity>
            </View>
        </View>
    )
    
}


const styles = StyleSheet.create({
    header:{
        margin:20
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
       
    },
    searchBarFilter: {
        width: 36,
        height: 36,
        borderRadius: 4,
        justifyContent: "center",
        backgroundColor: "white",
    },
    input: {
        height: 36,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        width:'75%'
    },
})
export default Header;