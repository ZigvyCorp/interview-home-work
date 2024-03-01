import CircularProgress from '@mui/material/CircularProgress';
const LoadingPage = () => {
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ width: '100%', height: '100vh' }}
        >
            <CircularProgress />
            <p className='m-2 p-1'>Please wait...</p>
        </div>)
}

export default LoadingPage