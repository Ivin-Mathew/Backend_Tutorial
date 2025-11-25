const path = require("path");
const multer = require("multer");

const uploadsDir = path.join(__dirname,"..", "uploads");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadsDir),
    filename: (req, file, cb) =>{
        const safeName = Date.now() + '-' + file.originalname.replace(/\s+/g,'-');
        cb(null, safeName);
    }
})

const fileFilter = (req, file, cb) =>{
    if(file.mimetype && file.mimetype.startsWith('image/'))
        cb(null, true);
    else
        cb(new Error("Only image files are allowed."), false);
}

const limits = {
    fileSize: 5*1024*1024
}

module.exports = require('multer')({
    storage, fileFilter, limits
});