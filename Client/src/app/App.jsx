import useRouteElements from '../routes/index.jsx';
import { ToastContainer } from 'react-toastify';
import useLoading from 'src/hooks/useLoading.js';
import { Loading } from 'src/components/Loading/index.jsx';

function App() {
    const { isLoadingCommon } = useLoading();
    const routeElements = useRouteElements()
    return (
        <>
            {isLoadingCommon && <Loading/>}
            {routeElements}
            <ToastContainer/>
        </>
    )
}

export default App
