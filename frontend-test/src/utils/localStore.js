// Save to local
export const saveToLocal = (name, data) => {
    localStorage.setItem(name,JSON.stringify(data));
};

// Get data from local
export const getDataFromLocal = (name) =>{
    const value = localStorage.getItem(name);
    
    if(JSON.parse(value)){
        return JSON.parse(value);
    } else{
        return null;
    };
};