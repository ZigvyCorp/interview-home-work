// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\api\userApi.js
import BASE_URL from '../config/apiConfig';

export const loginUser = async (payload) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
    }

    return await response.json();
};
