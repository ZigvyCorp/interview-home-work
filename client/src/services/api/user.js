import service from '../services';


export const getUserAPI = {
    getUsers,
    
};

function getUsers(){
    return service.post('/users/all')
}
