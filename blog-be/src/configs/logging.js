const _info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] 
        [   ██╗███╗░░██╗███████╗░█████╗░
            ██║████╗░██║██╔════╝██╔══██╗
            ██║██╔██╗██║█████╗░░██║░░██║
            ██║██║╚████║██╔══╝░░██║░░██║
            ██║██║░╚███║██║░░░░░╚█████╔╝
            ╚═╝╚═╝░░╚══╝╚═╝░░░░░░╚════╝░ ] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimeStamp()}] 
        [   ██╗███╗░░██╗███████╗░█████╗░
            ██║████╗░██║██╔════╝██╔══██╗
            ██║██╔██╗██║█████╗░░██║░░██║
            ██║██║╚████║██╔══╝░░██║░░██║
            ██║██║░╚███║██║░░░░░╚█████╔╝
            ╚═╝╚═╝░░╚══╝╚═╝░░░░░░╚════╝░] [${namespace}] ${message}`);
    }
};

const _warn = (namespace, message, object) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [
            ░██╗░░░░░░░██╗░█████╗░██████╗░███╗░░██╗
            ░██║░░██╗░░██║██╔══██╗██╔══██╗████╗░██║
            ░╚██╗████╗██╔╝███████║██████╔╝██╔██╗██║
            ░░████╔═████║░██╔══██║██╔══██╗██║╚████║
            ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██║░╚███║
            ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝] [${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [
            ░██╗░░░░░░░██╗░█████╗░██████╗░███╗░░██╗
            ░██║░░██╗░░██║██╔══██╗██╔══██╗████╗░██║
            ░╚██╗████╗██╔╝███████║██████╔╝██╔██╗██║
            ░░████╔═████║░██╔══██║██╔══██╗██║╚████║
            ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██║░╚███║
            ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝] [${namespace}] ${message}`);
    }
};

const _error = (namespace, message, object) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ 
            ███████╗██████╗░██████╗░░█████╗░██████╗░
            ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗
            █████╗░░██████╔╝██████╔╝██║░░██║██████╔╝
            ██╔══╝░░██╔══██╗██╔══██╗██║░░██║██╔══██╗
            ███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║
            ╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝ ] [${namespace}] ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}] [ 
            ███████╗██████╗░██████╗░░█████╗░██████╗░
            ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗
            █████╗░░██████╔╝██████╔╝██║░░██║██████╔╝
            ██╔══╝░░██╔══██╗██╔══██╗██║░░██║██╔══██╗
            ███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║
            ╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝] [${namespace}] ${message}`);
    }
};

const _debug = (namespace, message, object) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [
            ██████╗░███████╗██████╗░██╗░░░██╗░██████╗░
            ██╔══██╗██╔════╝██╔══██╗██║░░░██║██╔════╝░
            ██║░░██║█████╗░░██████╦╝██║░░░██║██║░░██╗░
            ██║░░██║██╔══╝░░██╔══██╗██║░░░██║██║░░╚██╗
            ██████╔╝███████╗██████╦╝╚██████╔╝╚██████╔╝
            ╚═════╝░╚══════╝╚═════╝░░╚═════╝░░╚═════╝░] [${namespace}] ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [
            ██████╗░███████╗██████╗░██╗░░░██╗░██████╗░
            ██╔══██╗██╔════╝██╔══██╗██║░░░██║██╔════╝░
            ██║░░██║█████╗░░██████╦╝██║░░░██║██║░░██╗░
            ██║░░██║██╔══╝░░██╔══██╗██║░░░██║██║░░╚██╗
            ██████╔╝███████╗██████╦╝╚██████╔╝╚██████╔╝
            ╚═════╝░╚══════╝╚═════╝░░╚═════╝░░╚═════╝░ ] [${namespace}] ${message}`);
    }
};

const getTimeStamp = () => {
    return new Date().toISOString();
};
module.exports = {
    _info,
    _warn,
    _error,
    _debug
};