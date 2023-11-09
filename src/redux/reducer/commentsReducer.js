const initState = await fetch(
    'https://raw.githubusercontent.com/ZigvyCorp/interview-home-work/master/data/comments.json',
)
    .then((res) => res.json())
    .then((data) => {
        return { comments: data };
    })
    .catch(() => {
        const tempData = {
            comments: [
                {
                    id: 1,
                    owner: 1,
                    post: 1,
                    content: 'Temp01',
                    created_at: 1576506719083,
                },
                {
                    id: 2,
                    owner: 3,
                    post: 1,
                    content: 'Temp02',
                    created_at: 1576506719083,
                },
                {
                    id: 3,
                    owner: 2,
                    post: 2,
                    content: 'Temp03',
                    created_at: 1576506719083,
                },
            ],
        };
        return tempData;
    });

const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};

export default commentsReducer;
