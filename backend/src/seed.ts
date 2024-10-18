import mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { faker } from '@faker-js/faker';

export interface IUser extends Document {
    username: string;
    password: string;
    name: string;
    dob: Date;
    created_at: Date;
}

export interface IPost extends Document {
    owner: mongoose.Types.ObjectId; 
    title: string;
    content: string;
    created_at: Date;
    tags: string[];
}

export interface IComment extends Document {
    post: mongoose.Types.ObjectId; 
    owner: mongoose.Types.ObjectId; 
    content: string;
    created_at: Date;
}


const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
});

const postSchema = new Schema<IPost>({
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    tags: { type: [String], default: [] },
});

const commentSchema = new Schema<IComment>({
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});


const User = mongoose.model<IUser>('User', userSchema);
const Post = mongoose.model<IPost>('Post', postSchema);
const Comment = mongoose.model<IComment>('Comment', commentSchema);


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://no1zero382:Anh382382@socialnetwork.aj23v.mongodb.net/')
    console.log('Connected to MongoDB');
};


const createSampleData = async () => {
    const sampleUsers = Array.from({ length: 20 }, () => ({
        username: faker.internet.userName(),
        password: faker.internet.password(),
        name: faker.person.fullName(), 
        dob: faker.date.past({years: 30}), 
    }));

    try {
        const createdUsers = await User.insertMany(sampleUsers);
        console.log('Sample users created:', createdUsers);

        const samplePosts = Array.from({ length: 50 }, () => {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
            return {
                owner: createdUsers[randomUserIndex]._id,
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraphs(),
                tags: [faker.word.adjective(), faker.word.noun(), faker.word.verb()], 
            };
        });

        const createdPosts = await Post.insertMany(samplePosts);
        console.log('Sample posts created:', createdPosts);

        const sampleComments = Array.from({ length: 100 }, () => {
            const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
            const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
            return {
                post: createdPosts[randomPostIndex]._id,
                owner: createdUsers[randomUserIndex]._id,
                content: faker.lorem.sentence(),
            };
        });

        const createdComments = await Comment.insertMany(sampleComments);
        console.log('Sample comments created:', createdComments);
    } catch (err) {
        console.error('Error creating sample data:', err);
    } finally {
        mongoose.connection.close(); 
    }
};


const run = async () => {
    await connectDB();
    await createSampleData();
};


run();
