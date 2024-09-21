import mongoose, { Schema } from "mongoose";

let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

const userSchema = mongoose.Schema({

    personal_info: {
        fullname: {
            type: String,
            lowercase: true,
            required: true,
            minlength: [3, 'fullname must be 3 letters long'],
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: String,
        username: {
            type: String,
            minlength: [3, 'Username must be 3 letters long'],
            unique: true,
        },
        phone: {
            type: String,
            maxlength: [10, 'Phone must be 8 letters long'],
            default: "",
        },
        profile_img: {
            type: String,
            default: () => {
                return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`
            }
        },
        website: {
            type: String,
            default: "",
        },
        address: {
            street: { type: String, default: "" },
            suite: { type: String, default: "" },
            city: { type: String, default: "" },
            zipcode: { type: String, default: "" },
            geo: {
                lat: { type: String, default: "" },
                lng: { type: String, default: "" }
            }
        },
        company: {
            name: { type: String, default: "" },
            catchPhrase: { type: String, default: "" },
            bs: { type: String, default: "" }
        }
    },
    blogs: {
        type: [Schema.Types.ObjectId],
        ref: 'blogs',
        default: [],
    }
},
    {
        timestamps: {
            createdAt: 'joinedAt'
        }

    })

export default mongoose.model("users", userSchema);