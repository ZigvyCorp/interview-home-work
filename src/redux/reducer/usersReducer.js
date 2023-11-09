const initState = await fetch(
    'https://raw.githubusercontent.com/ZigvyCorp/interview-home-work/master/data/users.json',
)
    .then((res) => res.json())
    .then((data) => {
        return { users: data };
    })
    .catch(() => {
        const tempData = {
            users: [
                {
                    id: 3,
                    username: 'user01',
                    password: '1234567890',
                    name: 'user01',
                    dob: '01/06/2016',
                    created_at: 1576506719083,
                },
                {
                    id: 3,
                    username: 'user02',
                    password: '1234567890',
                    name: 'user02',
                    dob: '01/06/2016',
                    created_at: 1576506719083,
                },
                {
                    id: 3,
                    username: 'user03',
                    password: '1234567890',
                    name: 'user03',
                    dob: '01/06/2016',
                    created_at: 1576506719083,
                },
            ],
        };
        return tempData;
    });

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};

export default usersReducer;
