const mongoose = require("mongoose");
dbUrl = "mongodb://localhost:27017/database";
const connect = () => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Database Connected Successfully....");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connect;
