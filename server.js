const express = require("express");
const app = express();

require("dotenv").config();
const connectDb = require("./config/connectDb");
connectDb();

app.use(express.json());
const router = require("./routes/contact");
app.use("/api/contacts/", router);

const port = process.env.PORT;
app.listen(port, (error) => {
  error
    ? console.log("can not run server")
    : console.log(`server is running  on port ${port}...`);
});
