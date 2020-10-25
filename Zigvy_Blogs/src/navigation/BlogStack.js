import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BlogMainScreen from '../modules/blog/BlogMainScreen';
import CreateBlogScreen from '../modules/blog/CreateBlogScreen';
import BlogDetailScreen from '../modules/blog/BlogDetailScreen';
import Header from './Header';

const BlogStack = createStackNavigator();

function BlogNavigator() {
    return (
        <BlogStack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                header: () => <Header />
            }}
        >
            <BlogStack.Screen name="HomeScreen" component={BlogMainScreen} />
            <BlogStack.Screen name="CreateBlogScreen" component={CreateBlogScreen} />
            <BlogStack.Screen name="BlogDetailScreen" component={BlogDetailScreen} />
        </BlogStack.Navigator>
    )
}

export default BlogNavigator