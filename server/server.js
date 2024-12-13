const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 8384;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
