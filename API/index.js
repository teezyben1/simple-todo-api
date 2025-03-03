const app = require("./app");
const db = require("./config/db");



app.listen(process.env.PORT, () => {
    db();
  console.log(`Server is running on port ${process.env.PORT}`);
}
);