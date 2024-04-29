import multer from "multer";
import RandomString from "../utils/RandomString.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        const len = file.originalname.split('.').length
        cb(null, RandomString(8) + '.' + file.originalname.split('.')[len - 1])
    }
})

export const upload = multer({ storage })