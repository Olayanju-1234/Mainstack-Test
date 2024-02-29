import { v2 as cloudinary } from "cloudinary";
import config from "@config/envs";
import ICloudinary from "@interfaces/cloudinary";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } = config;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET_KEY,
});

export const uploadToCloudinary = async (
    filepath: any,
    option: ICloudinary
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        filepath,
        {
          ...option,
          overwrite: true, // whether to overwrite the image if it already exists
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else if (res) {
            // Return the public URL of the uploaded image
            resolve({ url: res.secure_url, id: res.public_id });
          } else {
            reject(new Error("Something went wrong"));
          }
        }
      );
    });
  };
