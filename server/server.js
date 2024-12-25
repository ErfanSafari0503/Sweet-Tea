const dotenv = require('dotenv');
<<<<<<< HEAD
dotenv.config({ path: "./config.env" });
=======
const app = require('./app');
>>>>>>> 4b03dbd2de14ebca4697e86177239472cde22138

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8384;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
