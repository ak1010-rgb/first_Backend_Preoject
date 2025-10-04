import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({ // this mehthod is used to allow cross origin resource sharing and middleware
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  // this method is used to parse json data coming from client to server, LIMIT is used to limit the size of data coming from client to server
app.use(express.urlencoded({extended: true, limit: "16kb"})) 
app.use(express.static("public"))
app.use(cookieParser()) // this method is used to parse cookies coming from client to server to perfrom authentication and authorization and CRUD operations


//routes import
import userRouter from './routes/user.routes.js'
/*
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"
*/
//routes declaration
app.use("/api/v1/users", userRouter)

// app.use("/api/v1/healthcheck", healthcheckRouter)
// app.use("/api/v1/tweets", tweetRouter)
// app.use("/api/v1/subscriptions", subscriptionRouter)
// app.use("/api/v1/videos", videoRouter)
// app.use("/api/v1/comments", commentRouter)
// app.use("/api/v1/likes", likeRouter)
// app.use("/api/v1/playlist", playlistRouter)
// app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }