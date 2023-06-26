const {config}=require('../config/secret')
const cloudinary=require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer = require('multer');
// cloudinary.uploader.destroy({})
 cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
});


exports.deleteImageFromCloudinary = (publid_id)=>{
    cloudinary.uploader.destroy(publid_id)
}
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ProfilePictures',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
        // transformation: [{ width: 500, height: 500, crop: 'limit' }],
    },
});

exports.upload = multer({ storage: storage });
