import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProSidebarProvider } from 'react-pro-sidebar';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminDashboard from './admin/AdminDashboard';
import CreatePost from './admin/CreatePost';
import EditPost from './admin/EditPost';
import AdminRoute from './components/AdminRoute';
import Layout from './admin/global/Layout';
import UserDashboard from './user/UserDashBoard';
import UserRoute from './components/UserRoute';

const AdminDashboardHOC = Layout(AdminDashboard);
const CreatePostHOC = Layout(CreatePost);
const EditPostHOC = Layout(EditPost);
const UserDashboardHOC = Layout(UserDashboard);

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/create"
                element={
                  <AdminRoute>
                    <CreatePostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
    </>
  );
};

export default App;
