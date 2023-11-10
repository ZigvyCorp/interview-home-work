import { homePage, postPage } from "../pages";

const pageRouter = [
    { path: "/", page: homePage },
    { path: "/post/:id", page: postPage }
];

export default pageRouter;