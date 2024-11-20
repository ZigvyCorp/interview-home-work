import base from "@/utils/base";
import { getAllPost } from "server/controller/postController";
const handler = base().get(getAllPost);

export default handler;
