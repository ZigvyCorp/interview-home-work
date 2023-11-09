const initState = await fetch(
    'https://raw.githubusercontent.com/ZigvyCorp/interview-home-work/master/data/posts.json',
)
    .then((res) => res.json())
    .then((data) => {
        return { posts: data };
    })
    .catch(() => {
        const tempData = {
            posts: [
                {
                    id: 1,
                    owner: 1,
                    title: 'Test 1',
                    content: 'Test 1',
                    created_at: 1576506719083,
                    tags: ['consult', 'it', 'hala'],
                },
                {
                    id: 2,
                    owner: 2,
                    title: 'Test 2',
                    content: 'Test 3',
                    created_at: 1576506719083,
                    tags: ['consult', 'it', 'hala'],
                },
                {
                    id: 3,
                    owner: 3,
                    title: 'Test 3',
                    content: 'Test 3',
                    created_at: 1576506719083,
                    tags: ['consult', 'it', 'hala'],
                },
            ],
        };
        return tempData;
    });

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};

export default postsReducer;
