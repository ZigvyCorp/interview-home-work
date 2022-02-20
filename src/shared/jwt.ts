import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY;

export async function generateToken(payload: Object, secretKey: string, tokenLife: string): Promise<any> {
    const token = await jwt.sign(payload, secretKey, {expiresIn: tokenLife});
    return token;
}

export async function verifyToken(token: string, secretKey: string): Promise<any>{
    const decoded = await jwt.verify(token, secretKey);
    return decoded;
}

export async function auth(req, res, next): Promise<any> {
    if (!req.headers?.authorization){
        res.status(403).send('No token provided');
    }
    else {
        try {
            const accessToken = req.headers.authorization.replace('Bearer ', '');
            req.body.decoded = await verifyToken(accessToken, JWT_SECRET_KEY);
            next();
        }
        catch(err) {
            console.log(err);
            res.status(401).send('Unauthorized');
        }
    }
}