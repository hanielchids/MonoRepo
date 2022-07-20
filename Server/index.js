const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const dbThing = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

//Users
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

dbThing.sequelize.sync().then(() => {
  app.listen(3005, () => {
    console.log("Server running on port 3005");
  });
});
