// @ts-types="npm:@types/express"
import express from "npm:express";
const app = express()

app.get("/", (_, response)=>{
    response.send("Welcome to our Holiday Server")
})

app.listen(3005)
console.log("Listening on port 3005");
