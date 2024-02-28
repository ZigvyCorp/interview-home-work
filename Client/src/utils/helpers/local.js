const setSession = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))
const getSession = (key) => JSON.parse(sessionStorage.getItem(key))
const removeSession = (key) => sessionStorage.removeItem(key)
const isExistSession = (key) => localStorage.getItem(key) !== null


const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const getLocal = (key, noParse) => (noParse ? localStorage.getItem(key) : JSON.parse(localStorage.getItem(key)));
const removeLocal = (key) => localStorage.removeItem(key)
const isExistLocal = (key) => localStorage.getItem(key) !== null

const SessionStore = {
    set: setSession,
    get: getSession,
    remove: removeSession,
    isExist: isExistSession
}

const LocalStore = {
    set: setLocal,
    get: getLocal,
    remove: removeLocal,
    isExist: isExistLocal
}

export {
    SessionStore,
    LocalStore
}
