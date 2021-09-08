import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllPost } from '../../redux/modules/Post/actions';
import { Flex, SearchBar, Accordion } from '@ant-design/react-native';
import styles from './styles';
import logo from '../../assets/images/logo.png';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const postReducer = useSelector(state => state.postReducer);
    const postData = postReducer.data;

    const [filteredData, setFilteredData] = useState([]);
    const [keywords, setKeywords] = useState('');
    const onClear = () => setKeywords('');
    const onChange = (value) => setKeywords(value);
    const search = () => setFilteredData(postData.filter(post => post.title.toLowerCase().includes(keywords)));

    function getAllPost() {
        dispatch(
            requestAllPost()
        );
    }

    useEffect(() => {
        getAllPost();
    }, []);

    useEffect(() => {
        setFilteredData(postData);
    }, [postData]);

    useEffect(() => {
        search();
    }, [keywords]);

    const Header = () => {
        return (
            <SafeAreaView>
                <Flex>
                    <Flex.Item style={styles.headerLeftContainer}>
                        <Image source={logo} style={styles.headerImg} />
                        <Text style={styles.headerText}>Zigvy</Text>
                    </Flex.Item>
                    <Flex.Item style={styles.headerCenterContainer}>
                        <Text style={styles.headerText}>Blogs</Text>
                    </Flex.Item>
                    <Flex.Item style={styles.headerRightContainer}>
                        <Image source={{ uri: 'https://production.listennotes.com/podcasts/destazando-la/1x6-burbujas-en-el-mercado-XnmW4OJVDtq-TI3cmG5ljh8.1400x1400.jpg' }} style={styles.headerImg} />
                        <Text style={styles.headerText}>Nobita</Text>
                    </Flex.Item>
                </Flex>
            </SafeAreaView>
        )
    }

    const ItemPost = ({ data }) => {
        const [expandedComment, setExpandedComment] = useState([]);

        return (
            <SafeAreaView>
                <View style={styles.postContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { data })}>
                        <Text style={styles.postTitle}>{data.title}</Text>
                        <Text style={styles.postContent}>
                            <Text style={styles.postInfo}>Author: </Text>
                            {data.author}
                        </Text>
                        <Text style={styles.postContent}>
                            <Text style={styles.postInfo}>Created at: </Text>
                            Sep 08, 2021
                        </Text>
                        <Text style={styles.postContent}>{data.body.length > 100 ? data.body.substring(0, 100) + '...' : data.body}</Text>
                    </TouchableOpacity>
                </View>

                {/* comment section */}
                <Accordion
                    onChange={activeSections => setExpandedComment(activeSections)}
                    activeSections={expandedComment}
                >
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
            </SafeAreaView>
        )
    }

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
        <SafeAreaView style={styles.mainContainer}>
            <Header />
            <SearchBar
                value={keywords}
                placeholder="Search"
                // onSubmit={value => onSubmit(value)}
                onCancel={onClear}
                onChange={onChange}
                showCancelButton
                cancelText="cancel"
            />
            <FlatList
                data={filteredData}
                keyExtractor={item => item.id}
                refreshing={false}
                onRefresh={getAllPost}
                renderItem={({ item }) => {
                    return (
                        <ItemPost data={item} />
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.postSeperator} />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;