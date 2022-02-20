// if it return true, it won't pass
export function validSpecialChar(data: string): boolean {
    return /^\W+$/.test(data);
}

// if it return true, it will pass

export function validUsername(username: string): boolean {
    return /^\w{8,30}$/.test(username);
}

export function validPassword(password: string): boolean {
    return /^\w{8,30}$/.test(password);
}