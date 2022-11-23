import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TagComponent=() => {
    const dataTag = ["magenta", "red", "volcano", "orange", 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
    return (
        <View style={styles.tag}>
             {
             dataTag.map((item, index) => (
                <Text key={index} color={item}> {item} </Text>
            ))
           }
           {/* <Tags
                initialText="monkey"
                textInputProps={{
                placeholder: "Any type of animal"
                }}
                initialTags={dataTag}
                onChangeTags={tags => console.log(tags)}
                onTagPress={(index, tagLabel, event, deleted) =>
                console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                }
                containerStyle={{ justifyContent: "center" }}
                inputStyle={{ backgroundColor: "white" }}
                renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                    <Text>{tag}</Text>
                </TouchableOpacity>
                )}
            /> */}
        </View>
    );
    
}

// define your styles
const styles = StyleSheet.create({
    tag:{
        marginBottom: 10
    }
});

//make this component available to the app
export default TagComponent;