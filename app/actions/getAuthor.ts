import ApiInstance from "../requests/Gateway/Instance"

async function getUserByPostId(id: number) {
    try {
        const [postsData, usersData] = await Promise.all([
            ApiInstance.get('posts').then((response) =>
                response.data
            ),
            ApiInstance.get('users').then((response) =>
                response.data
            )
        ]);

        const usersMap = new Map();
        usersData.forEach((user) => {
            usersMap.set(user.id, user);
        });

        const post = postsData.find((post) => post.id === id);

        if (post) {
            const user = usersMap.get(post.userId);

            if (user) {
                return user;
            } else {
                throw new Error('User not found for the given post.');
            }
        } else {
            throw new Error('Post not found for the given id.');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getUserByPostId;
