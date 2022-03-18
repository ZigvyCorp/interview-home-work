import Posts from "@/components/Posts";
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
      window.history.scrollRestoration = "manual";
   }, []);

   return (
      <div>
         <Posts />
      </div>
   );
}
