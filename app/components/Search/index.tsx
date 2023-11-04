import { ChangeEvent } from 'react'
import Form from 'react-bootstrap/Form';

export default function Search({ setSearch, value }: any) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <Form.Control type="text" placeholder="Type for search..." value={value} onChange={handleChange} />
        </div>
    )
}