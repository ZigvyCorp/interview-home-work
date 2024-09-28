import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    name: string;
    username: string;
    email: string;
    password: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    createAt: Date;
    updateAt: Date;
}

// Define the Mongoose schema
const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {
        "street": { type: String, required: true },
        "suite": { type: String, required: true },
        "city": { type: String, required: true },
        "zipcode": { type: String, required: true },
        "geo": {
            "lat": { type: String, required: true },
            "lng": { type: String, required: true }
        },
    },
    "website": { type: String, required: true },
    "company": {
        "name": { type: String, required: true },
        "catchPhrase": { type: String, required: true },
        "bs": { type: String, required: true }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Export the User model
export default mongoose.model<IUser>("User", userSchema);
