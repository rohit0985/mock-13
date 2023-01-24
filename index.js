const express = require("express");
const app = express();
require("dotenv").config();
const {UserRouter} = require("./Routers/user.router")
const {JobRouter} = require("./Routers/jobs.router")
const {ApplyJobRouter} = require("./Routers/applyJob.router")
const cors = require("cors")
const {connection} = require("./Config/db")

app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send({ msg: `Welcome to my application i.e. masaijobs which is running at port ${process.env.PORT}` });
});

app.use("/jobs", JobRouter)
app.use("/users", UserRouter)
app.use("/applyjobs", ApplyJobRouter)

app.listen(7500, async() => {
  try {
    await connection;
    console.log(`Listening at PORT ${process.env.PORT}`);
  } catch (err) {
    console.log("Error while connecting to the server");
    console.log("Error", err);
  }
});
