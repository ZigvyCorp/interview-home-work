import { useParams } from "react-router-dom"

export default function Post() {
    const {id}= useParams()
    console.log(id);
  return (
    <div>Post</div>
  )
}
