const UserController = {
    searchUsers: async (req, res) => {
        try {
            const users = await fetch(`${process.env.URL_SVC}users`)
                .then((res) => res.json())
                .catch((err) => err)
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    searchUser: async (req, res) => {
        const userId = req.param('id')
        try {
            const user = await fetch(`${process.env.URL_SVC}users/${userId}`)
                .then((res) => res.json())
                .catch((err) => err)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = UserController