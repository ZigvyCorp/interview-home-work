const fetchApiListPost=async({queryKey})=>{
    const apiRes=await fetch(`http://localhost:8080/api/get/posts`);
    const data=apiRes.json();
    return data;
    
}
export default fetchApiListPost;