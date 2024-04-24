import 'dotenv/config'
import connectDB from './db/index.js'
import { app } from './app.js'


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("App is listening on port: ", process.env.PORT || 8000);
        })
    })
    .catch((error) => {
        console.error("DB Connection Failed !!!", error)
    })

