import { useQuery } from "@tanstack/react-query";
import GeneratePost from "./GeneratePost";
import fetchApiListPost from "./fetchApiListPost";
const NewFeed=()=>{
  const response=useQuery(["postList","token"],fetchApiListPost);
return(
    <div className="container">
      {typeof response.data !== 'undefined'?(
        <div>
          <div className='Navbar'>
              <div className="logo">
                  <h2>LOGO</h2>
              </div>
              <div className="web-name">
                  <h1>BLOGS</h1>
              </div>
              <div className="user">
                  <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="avatar" />
                  <h4>AdamLevine</h4>
                </div>
            </div>
          <div className="post-field">
                <GeneratePost data={response}/>
          </div>
          </div>
      ):
        (<h1>Not Found</h1>)}
    
    </div>
)
}
export default NewFeed;