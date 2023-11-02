//test

export const tasks = [];
export const users = [
    {
        id: 1,
        username: "trinvm",
        password: "123456",
        role: 1
    },
    {
        id: 2,
        username: "trisnguyen1210",
        role: 2
    },
    {
        id: 3,
        username: "trinvm1",
        password: "123456",
        role: 3
    },
    {
        id: 4,
        username: "trinvm2",
        password: "123456",
        role: 3
    }
]
export const roles = [
    {
        id: 1,
        name: "admin",
        permission: [{ key: "user", action: "read" }, { key: "user", action: "write" }]
    },
    {
        id: 2,
        name: "root",
        permission: [{ key: "user", action: "read" }, { key: "user", action: "write" }]
    },
    {
        id: 3,
        name: "supervisor",
        permission: [{ key: "user", action: "read" }]
    },
    {
        id: 4,
        name: "manager",
        permission: [{ key: "user", action: "read" }, { key: "user", action: "write" }]
    },
    {
        id: 5,
        name: "viewer",
        permission: [{ key: "user", action: "read" }]
    }
]

