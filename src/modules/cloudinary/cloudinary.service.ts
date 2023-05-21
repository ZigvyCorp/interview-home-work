import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { Express } from 'express'
import fs = require("fs");

@Injectable()
export class CloudinaryService {

  async uploadImage(
    file: Express.Multer.File,
  ) {
    return new Promise(async (resolve, reject) => {
      const path = file.path
      await v2.uploader.upload(path,(err, result)=>{
        fs.unlinkSync(path);
        if (err) {
          return reject(err)
        }
        return resolve(result);
      })
    });
  }
}
