import { User } from '../models';

export default {
    getUsers: async () => {
        return await User.find({}, (err) => {
            if (err) throw err;
        })
            .select([
                '-updatedAt',
                '-__v'
            ]);
    },

    addUser: (data) => {
        let newUser = new User(data);
        return newUser.save();
    },
};
