import User from '../models/user';

export default {
    getUsers: async () => {
        return await User.find({}, (err) => {
            if (err) {
                throw err;
            }
        })
            .select([
                '-_id',
                '-updatedAt',
                '-__v'
            ]);
    },

    addUser: async (data) => {
        let newUser = new User(data);
        return await newUser.save();
    },
};
