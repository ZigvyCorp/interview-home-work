import * as React from 'react';
import { View, SafeAreaView, Text, Image, FlatList, ScrollView } from 'react-native';
import { Flex, Accordion } from '@ant-design/react-native';
import styles from './styles';

const DetailScreen = ({ route }) => {
    const { data } = route.params;

    const ItemComment = ({ data }) => {
        return (
            <SafeAreaView>
                <Flex alignItems="flex-start" direction="row" style={styles.commentContainer}>
                    <Image source={{ uri: "https://static.wikia.nocookie.net/dorepedia/images/d/d6/Jaian02.png/revision/latest?cb=20150429015518&path-prefix=vi" }} style={styles.commenterAvatar} />
                    <Flex direction="column" alignItems="flex-start" style={styles.commentRightContainer}>
                        <Text style={styles.commenterName}>{data.name}</Text>
                        <Text style={styles.commentContent}>{data.body}</Text>
                    </Flex>
                </Flex>
            </SafeAreaView>
        )
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>{data.title}</Text>
                <Text style={styles.postContent}>
                    <Text style={styles.postInfo}>Author: </Text>
                    {data.author}
                </Text>
                <Text style={styles.postContent}>
                    <Text style={styles.postInfo}>Created at: </Text>
                    Sep 08, 2021
                </Text>
                <Text style={styles.postContent}>{data.body}</Text>
            </View>

            {/* comment section */}
            <Accordion activeSections={[0]}>
                <Accordion.Panel header={data.comments.length + ' replies'}>
                    <FlatList
                        data={data.comments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ItemComment data={item} />
                            )
                        }}
                    />
                </Accordion.Panel>
            </Accordion>
        </ScrollView>
    )
}

export default DetailScreen;