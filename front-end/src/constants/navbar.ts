interface INavbarRoute {
    name: string,
    path: string
}

export const NavbarRoutes: INavbarRoute[] = [
    {
        name: 'Post',
        path: '/post'
    },
    {
        name: 'Comment',
        path: '/comment'
    }
]