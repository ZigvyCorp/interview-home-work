import { Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import HomePage from './pages/HomePage/HomePage';
import DetailPage from './pages/DetailPage/DetailPage';
import BlogLayout from 'Layout';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route element={<BlogLayout />}>
					<Route path='/posts' element={<HomePage />} />
					<Route
						path='/posts/:id'
						element={<DetailPage />}
					/>
					<Route path='/posts/search/:keyword' element={<SearchPage />} />
				</Route>		
			</Routes>
		</div>
	);
}

export default App;
