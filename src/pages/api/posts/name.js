import base from "@/utils/base";
import { getPostsName } from "server/controller/postController";
const handler = base().get(getPostsName);

export default handler;
