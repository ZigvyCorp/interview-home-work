import { Post } from './features/posts/models/post';

export const POSTS: Post[] = [
    {
        id: 1,
        title: 'Post title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        createdDate: 'Sep 20, 2018',
        totalComments: 2,
        userDetail: {
            name: 'John Smith',
        },
    },
    {
        id: 2,
        title: 'Post title 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        createdDate: 'Sep 20, 2018',
        totalComments: 2,
        userDetail: {
            name: 'John Smith',
        },
    },
    {
        id: 3,
        title: 'Post title 3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        createdDate: 'Sep 20, 2018',
        totalComments: 0,
        userDetail: {
            name: 'John Smith',
        },
    },
];
