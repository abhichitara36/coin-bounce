const express = require("express");
const dbConnect = require("./db/conn");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser(""));
app.use(router);
app.use(errorHandler);

app.use("/storage", express.static("storage"));

dbConnect();
app.listen(PORT, console.log(`Backend is running on port : ${PORT}`));
