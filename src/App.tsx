import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

import './App.css';

import Header from './components/Header';
import Post from './components/Post';
import { IPost, IUser, IComment } from './global';

function App() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);
    const [fakeDates, setFakeDates] = useState<string[]>([]);

    const handleSearch = (searchValue: string) => {
        const fixedPosts: IPost[] = JSON.parse(
            localStorage.getItem('posts') as string
        );

        const postsBySearchValue = fixedPosts.filter((post) =>
            post.title.includes(searchValue)
        );
        setPosts(postsBySearchValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            const urlGetPosts = 'https://jsonplaceholder.typicode.com/posts';
            const urlGetUsers = 'https://jsonplaceholder.typicode.com/users';
            const urlGetComments = 'https://jsonplaceholder.typicode.com/comments';

            const response1 = await Promise.all([
                fetch(urlGetPosts),
                fetch(urlGetUsers),
                fetch(urlGetComments),
            ]);

            const [dataPosts, dataUsers, dataComments] = await Promise.all(
                response1.map((res) => res.json())
            );

            setPosts(dataPosts);
            setUsers(dataUsers);
            setComments(dataComments);

            // store to localStorage
            localStorage.setItem('posts', JSON.stringify(dataPosts));
            localStorage.setItem('users', JSON.stringify(dataUsers));
            localStorage.setItem('comments', JSON.stringify(dataComments));
        };

        if (!localStorage.getItem('posts')) {
            fetchData();
        } else {
            setPosts(JSON.parse(localStorage.getItem('posts') as string));
            setUsers(JSON.parse(localStorage.getItem('users') as string));
            setComments(JSON.parse(localStorage.getItem('comments') as string));
        }
    }, []);

    // create fake date
    useEffect(() => {
        const dateStart = new Date(2020, 0, 1);
        const dateEnd = new Date();
        // return Date(s) array
        const fakeDatesArr = faker.date.betweens(dateStart, dateEnd, 100);

        // convert date to string
        const fakeDateStrings = fakeDatesArr.reduceRight((total, date) => {
            const [, month, day, year] = date.toDateString().split(' ');
            const dateString = `${month} ${day}, ${year}`;
            return [...total, dateString];
        }, [] as string[]);

        setFakeDates(fakeDateStrings);
    }, []);

    return (
        <div className="App">
            <Header handleSearch={handleSearch} />
            <div className="container mt-5">
                <div className="post-list">
                    {posts.map((post, index) => {
                        const AuthorOfPost = users.find(
                            (user) => user.id === post.userId
                        ) || { id: Math.random(), name: 'Anonymous' };

                        const commentsOfPost = comments.filter(
                            (comment) => comment.postId === post.id
                        );

                        return (
                            <Post
                                key={index}
                                dataPost={post}
                                dataUser={AuthorOfPost}
                                dataComments={commentsOfPost}
                                fakeDate={fakeDates[index]}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
