import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import CustomBody from "./components/Body/CustomBody"
import NotFound from "./pages/NotFound/NotFound"
import PostDetail from "./pages/Post/PostDetail"
import RootTemplate from "./template/RootTemplate"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootTemplate />}>
          <Route index element={<CustomBody />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Route>

        {/* notFound router */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
