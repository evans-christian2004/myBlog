import express from "express"
import connectDB from "./libraries/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"

const app = express()
app.use(express.json())
// app.get("/test", (req,res) => {
//     res.status(200).send("wow!")
// })

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(5000, ()=>{
    connectDB()
    console.log("Server is running...")
})