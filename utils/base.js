import nc from "next-connect";
import morgan from "morgan";
import { errorHandler } from "@/middleware/errorMiddleware";
// import dbConnect from "@/lib/dbConnect";
export default function base() {
   return (
      nc({ onError: errorHandler })
         // .use(async (req, res, next) => {
         //    await dbConnect();
         //    next();
         // })
         .use(morgan("dev"))
   );
}
