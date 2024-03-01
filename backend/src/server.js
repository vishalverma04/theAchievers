import dotenv from "dotenv"
dotenv.config({path:'./.env'})

import app from "./app.js"

app.listen(4000,()=>{
    console.log(`server is running at port 4000`)
})
