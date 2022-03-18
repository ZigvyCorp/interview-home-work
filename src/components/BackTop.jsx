import { BackTop } from "antd";
const style = {
   height: 40,
   width: 40,
   lineHeight: "40px",
   borderRadius: "50%",
   backgroundColor: "#1088e9",
   color: "#fff",
   textAlign: "center",
   fontSize: 14,
   boxShadow: "0 0 25px rgb(16 136 233 / 70%)",
};
const BackTop2 = () => {
   return (
      <BackTop className="right-7">
         <div style={style}>
            <svg
               stroke="currentColor"
               fill="currentColor"
               strokeWidth="0"
               viewBox="0 0 24 24"
               height="1em"
               width="1em"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"></path>
               </g>
            </svg>
         </div>
      </BackTop>
   );
};

export default BackTop2;
