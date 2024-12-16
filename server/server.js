const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8384;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
