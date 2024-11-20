import multer from 'multer'
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require("dotenv").config()


cloudinary.config({
    cloud_name: process.env.CLOUNDINARY_NAME,
    api_key: process.env.CLOUNDINARY_KEY,
    api_secret: process.env.CLOUNDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    // allowedFormats: ['jpg', 'png'],
    params: {
        folder: "techshop",
    },
});

export const upload = multer({ storage: storage })
// export const upload = multer({ storage: storage, fileFilter: isImage })