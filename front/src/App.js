import './App.css'
import DefaultLayout from './components/layout/DefaultLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogDetailPage from './pages/BlogDetailPage'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
	{
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/blogs',
				element: <HomePage />,
			},
			{
				path: '/blogs/:id',
				element: <BlogDetailPage />,
			},
		],
	},
])
function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	)
}

export default App
