import base from "@/utils/base";
import { getPostById } from "server/controller/postController";
const handler = base().get(getPostById);

export default handler;
