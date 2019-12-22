import service from '../services';


export const getUserAPI = {
    getUsers,
    login,
    register
    
};

function getUsers(){
    return service.post('/users/all')
}

function login(email,password)
{
    let data = {email, password}

    return service.post('/users/login',data)
}

function register(email,password,name)
{
    let data = {email, password, name}
    return service.post('/users',data)
}
