import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import moment from 'moment';

import { getUsers } from "../../api/userApi";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const reponse = await getUsers();
            setUsers(reponse.data);
        };
        fetchData();
    }, []);
    return (
        <Container>
            <h2 className="mb-5">Users</h2>
            {users.length > 0 ? users.map((user, index) => (
                <div className="users bg-light p-2 mb-3">
                    <h6>Full Name : {user.name || 'unknown'}</h6>
                    <h6>User Name : {user?.username}</h6>
                    <h6>Date of Birth : {moment(user?.dob).format("DD/MM/YYYY")}</h6>

                </div>
            )) : <h2>No Users</h2>}

        </Container>
    );
}

export default Users;