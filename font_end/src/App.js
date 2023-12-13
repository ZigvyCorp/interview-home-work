import useFetcher from './hooks/useFetcher';
import './index.css';

export default function App() {
    const { data, isLoading } = useFetcher(
        'https://jsonplaceholder.typicode.com/users'
    );
    if (isLoading) return <div>Loading...</div>;
    return (
        // <>
        //     {data.map((user) => (
        //         <div key={user.id}>{user.name}</div>
        //     ))}
        // </>
        <div className="text-green-400">hello</div>
    );
}
